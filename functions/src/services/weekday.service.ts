import { DataService } from "./data.service";
import { UserService } from "./user.service";
import { FirebaseDataBase } from "../database/firebase.database.service";
import { FirebaseIdentifier } from "../models/database-identifier.model";
import { UserIdentificationModel } from "../models/user-identification.model";
import { createInitialWeekdayEntry, WeekdayModel, WeekdayMealDetail, getWeekdayMeals, getWeekdayMealStatuses } from "../models/weekday.model";
import { SuccessResponseModel } from "../models/success-response.model";
import * as scheduler from "node-schedule";
import { weekdayResetSignOut } from "../constants/mealResets.constant";

export class WeekdayService extends DataService {
    collection = 'weekday';
    weekdayDocumentSuffix = "_Weekday";
    userService: UserService;
    constructor(database: FirebaseDataBase, userService: UserService) {
        super(database);
        this.userService = userService;
        
        this.populateWeekdayMeals();
        this.setRecurrenceRule();
    }

    private async populateWeekdayMeals() {
        const students = await this.userService.getAllStudents();
        for (const student of students) {
            await this.addWeekdayEntryForStudent(student);
        }
    }

    async addWeekdayEntryForStudent(studentSnapshot: FirebaseFirestore.DocumentSnapshot) {
        const documentID = this.getWeekdayDocumentIDFromStudentID(studentSnapshot.id);
        const searchForWeekday = new FirebaseIdentifier(this.collection, documentID);
        const weekday = await this.database.readFromDatabaseSingleItem(searchForWeekday);
        if (!weekday.exists) {
            await this.resetStudentSignIn(documentID, studentSnapshot.ref);
        }
    }

    private async resetStudentSignIn(documentID: string, studentReference: any) {
        const weekday = createInitialWeekdayEntry(studentReference);
        const studentWeekdayToInsert = new FirebaseIdentifier(this.collection, documentID, weekday);
        await this.database.writeToDatabase(studentWeekdayToInsert);
    }

    async getStudentWeekdayDetails(userID: UserIdentificationModel) {
        const weekdayDocumentID = this.getWeekdayDocumentIDFromStudentID(userID.id);
        const findWeekday = new FirebaseIdentifier(this.collection, weekdayDocumentID);
        const weekdayDetailSnapshot = await this.database.readFromDatabaseSingleItem(findWeekday);
        const weekdayDetail = weekdayDetailSnapshot.data() as WeekdayModel;
        return this.provideArrayOfWeekdayMeals(weekdayDetail);
    }

    private getWeekdayDocumentIDFromStudentID(studentID: string) {
        return studentID + this.weekdayDocumentSuffix;
    }

    private provideArrayOfWeekdayMeals(weekdayDetail: WeekdayModel): WeekdayMealDetail[] {
        const weekdayMeals: WeekdayMealDetail[] = getWeekdayMeals(weekdayDetail);
        return weekdayMeals;
    }

    async updateWeekdayForStudent(updateWeekdayDetail: WeekdayModel) {
        const weekdayDocumentID = this.getWeekdayDocumentIDFromStudentID(updateWeekdayDetail.student);
        const fieldsToUpdate = getWeekdayMealStatuses(updateWeekdayDetail);
        const weekdayUpdate = new FirebaseIdentifier(this.collection, weekdayDocumentID, fieldsToUpdate);
        await this.database.updateDatabaseItem(weekdayUpdate);
        const response: SuccessResponseModel = {
            success: true
        }
        return response;
    }

    private setRecurrenceRule() {
        let weekdayResetsRule = new scheduler.RecurrenceRule();
        weekdayResetsRule.dayOfWeek = weekdayResetSignOut.dayOfWeek;
        weekdayResetsRule.hour = weekdayResetSignOut.hour;
        scheduler.scheduleJob(weekdayResetsRule, async _ => {
            await this.resetWeekdaySignOut();
        });
    }

    private async resetWeekdaySignOut() {
        const findAllWeekdayEntries = new FirebaseIdentifier(this.collection);
        const weekdays = await this.database.readFromDatabaseMultipleItems(findAllWeekdayEntries);
        for (const weekdayEntry of weekdays) {
            const documentID = weekdayEntry.id;
            const weekday = weekdayEntry.data() as WeekdayModel;
            const studentReference = weekday.student;
            await this.resetStudentSignIn(documentID, studentReference);
        }
    }
}