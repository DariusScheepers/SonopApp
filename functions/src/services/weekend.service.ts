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
        
        this.populateWeekendMeals();
    }

    private async populateWeekendMeals() {
        const students = await this.userService.getAllVerifiedStudents();
        for (const student of students) {
            const documentID = this.getWeekendDocumentIDFromStudentID(student.id);
            const weekend = createInitialWeekendEntry(student.ref);
            const studentWeekendToInsert = new FirebaseIdentifier(this.collection, documentID, weekend);
            await this.database.writeToDatabase(studentWeekendToInsert);
        }
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
}