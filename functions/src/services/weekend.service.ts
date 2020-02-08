import { UserService } from "./user.service";
import { DataService } from "./data.service";
import { FirebaseDataBase } from "../database/firebase.database.service";
import { WeekendModel, WeekendMealDetail, getWeekendMeals, createInitialWeekendEntry, WeekendMealsModel } from "../models/weekend.model";
import { FirebaseIdentifier } from "../models/database-identifier.model";
import { UserIdentificationModel } from "../models/user-identification.model";

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

    async getStudentWeekendDetails(userID: UserIdentificationModel): Promise<WeekendMealDetail[]> {
        const student = await this.userService.getStudentDataByID(userID);
        const weekendSignIns = student.weekendSignIns;
        return this.provideArrayOfWeekendMeals(weekendSignIns);
    }

    async getOldWeekendDoc(userID: UserIdentificationModel): Promise<WeekendMealsModel> {
        const docID = this.getWeekendDocumentIDFromStudentID(userID.id);
        const weekendDataIdentifier = new FirebaseIdentifier(this.collection, docID);
        const weekendSnapshot = await this.database.readFromDatabaseSingleItem(weekendDataIdentifier);
        const data = weekendSnapshot.data();
        if (data) {
            delete data.student;
        }
        return data as WeekendMealsModel;
    }

    private getWeekendDocumentIDFromStudentID(studentID: string) {
        return studentID + this.weekendDocumentSuffix;
    }

    private provideArrayOfWeekendMeals(weekendDetail: WeekendMealsModel): WeekendMealDetail[] {
        const weekendMeals: WeekendMealDetail[] = getWeekendMeals(weekendDetail);
        return weekendMeals;
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