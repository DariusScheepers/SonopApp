import { UserService } from "./user.service";
import { DataService } from "./data.service";
import { FirebaseDataBase } from "../database/firebase.database.service";
import { WeekendModel, WeekendMealDetail, getWeekendMeals, getWeekendMealStatuses, createInitialWeekendEntry } from "../models/weekend.model";
import { FirebaseIdentifier } from "../models/database-identifier.model";
import { UserIdentificationModel } from "../models/user-identification.model";
import { SuccessResponseModel } from "../models/success-response.model";

export class WeekendService extends DataService {
    collection = 'weekend';
    weekendDocumentSuffix = "_Weekend";
    userService: UserService;
    constructor(database: FirebaseDataBase, userService: UserService) {
        super(database);
        this.userService = userService;
        
        // this.populateWeekendMeals();
    }

    async populateWeekendMeals() { // private
        const students = await this.userService.getAllStudents();
        for (const student of students) {
            await this.addWeekendEntryForStudent(student);
        }
    }

    async addWeekendEntryForStudent(studentSnapshot: FirebaseFirestore.DocumentSnapshot) {
        const documentID = this.getWeekendDocumentIDFromStudentID(studentSnapshot.id);
        const searchForWeekend = new FirebaseIdentifier(this.collection, documentID);
        const weekend = await this.database.readFromDatabaseSingleItem(searchForWeekend);
        if (!weekend.exists) {
            await this.resetStudentSignIn(documentID, studentSnapshot.ref);
        }
    }

    private async resetStudentSignIn(documentID: string, studentReference: any) {
        const weekend = createInitialWeekendEntry(studentReference);
        const studentWeekendToInsert = new FirebaseIdentifier(this.collection, documentID, weekend);
        await this.database.writeToDatabase(studentWeekendToInsert);
    }

    async getStudentWeekendDetails(userID: UserIdentificationModel) {
        const weekendDocumentID = this.getWeekendDocumentIDFromStudentID(userID.id);
        const findWeekend = new FirebaseIdentifier(this.collection, weekendDocumentID);
        const weekendDetailSnapshot = await this.database.readFromDatabaseSingleItem(findWeekend);
        const weekendDetail = weekendDetailSnapshot.data() as WeekendModel;
        return this.provideArrayOfWeekendMeals(weekendDetail);
    }

    private getWeekendDocumentIDFromStudentID(studentID: string) {
        return studentID + this.weekendDocumentSuffix;
    }

    private provideArrayOfWeekendMeals(weekendDetail: WeekendModel): WeekendMealDetail[] {
        const weekendMeals: WeekendMealDetail[] = getWeekendMeals(weekendDetail);
        return weekendMeals;
    }

    async updateWeekendForStudent(updateWeekendDetail: WeekendModel) {
        const weekendDocumentID = this.getWeekendDocumentIDFromStudentID(updateWeekendDetail.student);
        const fieldsToUpdate = getWeekendMealStatuses(updateWeekendDetail);
        const weekendUpdate = new FirebaseIdentifier(this.collection, weekendDocumentID, fieldsToUpdate);
        await this.database.updateDatabaseItem(weekendUpdate);
        const response: SuccessResponseModel = {
            success: true
        }
        return response;
    }

    async resetWeekendSignIn() {
        const findAllWeekendEntries = new FirebaseIdentifier(this.collection);
        const weekends = await this.database.readFromDatabaseMultipleItems(findAllWeekendEntries);
        for (const weekendEntry of weekends) {
            const documentID = weekendEntry.id;
            const weekend = weekendEntry.data() as WeekendModel;
            const studentReference = weekend.student;
            await this.resetStudentSignIn(documentID, studentReference);
        }
    }
}