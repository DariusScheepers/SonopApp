import { DataService } from "./data.service";
import { UserService } from "./user.service";
import { FirebaseDataBase } from "../database/firebase.database.service";
import { NonnieLoginModel, StudentAccountInformation } from "../models/nonnie.model";
import { SuccessResponseModel } from "../models/success-response.model";
import { nonniePassword } from "../constants/nonnie.constant";
import { StudentModel, StudentRegisterModel, addNewStudent } from "../models/student.model";
import { BedieningTableService } from "./bediening-tables.service";
import { UserIdentificationModel } from "../models/user-identification.model";
import { WeekendService } from "./weekend.service";
import { WeekdayService } from "./weekday.service";
import { sortArrayAlphabetically } from "../utils/array.util";
import { bedieningTables } from "../constants/bediening-tables.constant";
import { getMealNumberByTime, MealType, SignOutListInformation, WeekdayMealDetail } from "../models/weekday.model";
import { weekdayDeadlines } from "../constants/mealDeadlines.constant";
import { FirebaseIdentifier } from "../models/database-identifier.model";
import { data } from "../database-back-up/new-data.data";

export class NonnieService extends DataService {
    collection = 'nonnie';
    userService: UserService;
    bedieningTableService: BedieningTableService;
    weekendService: WeekendService;
    weekdayService: WeekdayService;
    constructor(
        database: FirebaseDataBase,
        userService: UserService,
        bedieningTableService: BedieningTableService,    
        weekendService: WeekendService,
        weekdayService: WeekdayService
    ) {
        super(database);
        this.userService = userService;
        this.bedieningTableService = bedieningTableService;
        this.weekendService = weekendService;
        this.weekdayService = weekdayService;
    }

    nonnieLogin(nonnieLoginModel: NonnieLoginModel) {
        let response: SuccessResponseModel = {
            success: false
        };
        if (nonnieLoginModel.password === nonniePassword) {
            response.success = true;
        }
        return response;
    }

    async getUnverifiedAccounts(): Promise<StudentAccountInformation[]> {
        const unverifiedAccounts = await this.compileAllStudentAccountsInformation(false);

        return unverifiedAccounts;
    }

    async getVerifiedAccounts(): Promise<StudentAccountInformation[]> {
        const accounts = await this.compileAllStudentAccountsInformation(true);
        let orderedAccounts = sortArrayAlphabetically(accounts, 'fullName');
        orderedAccounts = sortArrayAlphabetically(orderedAccounts, 'bedieningTable');
        return orderedAccounts;
    }

    private async compileAllStudentAccountsInformation(verifiedAccounts: boolean): Promise<StudentAccountInformation[]> {
        let accounts: StudentAccountInformation[] = [];
        const studentSnapshots = await this.userService.getStudentsBaseOnVerifiedOrNot(verifiedAccounts);
        for (const studentSnapshot of studentSnapshots) {
            const account = await this.compileStudentAccountInformation(studentSnapshot);
            accounts.push(account);
        }
        return accounts;
    }

    private async compileStudentAccountInformation(studentSnapshot: FirebaseFirestore.QueryDocumentSnapshot): Promise<StudentAccountInformation> {
        const student = studentSnapshot.data() as StudentModel;
        const bedieningTable = student.bedieningTable;
        const studentAccount: StudentAccountInformation = {
            studentID: studentSnapshot.id,
            username: student.username,
            fullName: student.name + " " + student.surname,
            email: student.email,
            isHk: student.isHk,
            isSemi: student.isSemi,
            bedieningTable: bedieningTable,
            verified: student.verified
        };
        return studentAccount
    }

    async verifyAccount(studentID: UserIdentificationModel): Promise<SuccessResponseModel> {
        const userVerified = await this.userService.verifyAccount(studentID);
        let response: SuccessResponseModel = {
            success: false
        }
        if (userVerified.success) {
            const student = await this.userService.getStudentByID(studentID.id);
            await this.weekdayService.addWeekdayEntryForStudent(student);
            await this.weekendService.addWeekendEntryForStudent(student);
            response.success = true;
        }
        return response;
    }

    async getStudentsPerTableForWeekend(): Promise<{seatingMap: any[][][]}> {
        let seatingMap: any[][][] = [];
        for (const bedieningTable of bedieningTables) {
            const bedieningTableMap: any[][] = [];
            const bedieningTableName = bedieningTable.value;
            const studentsAtTable = await this.userService.getAllUsersAccordingToBedieningTable(bedieningTableName);
            for (const studentSnapshot of studentsAtTable) {
                const weekendWithStudentAndTable: any[] = [];
                const student = studentSnapshot.data() as StudentModel;
                const weekendDetails = await this.weekendService.getStudentWeekendDetails({id: studentSnapshot.id});
                weekendWithStudentAndTable.push(
                    student.name + " " + student.surname,
                    bedieningTableName
                );
                weekendDetails.forEach(weekendDetail => {
                    weekendWithStudentAndTable.push(weekendDetail.status);
                });
                bedieningTableMap.push(weekendWithStudentAndTable);
            }
            seatingMap.push(bedieningTableMap);
        }
        return {seatingMap: seatingMap};
    }

    async getStudentsPerTableForWeekday(): Promise<SignOutListInformation> {
        const todaySignOutListInfo = await this.getTodaySignOutList();
        const signOutList = todaySignOutListInfo.signOutList;
        const lunchMeal = todaySignOutListInfo.lunchMeal;
        const dinnerMeal = todaySignOutListInfo.dinnerMeal;
        const today = new Date();
        const lunchOpen = today.getHours() < weekdayDeadlines.lunchDeadlineHour;
        const dinnerOpen = today.getHours() < weekdayDeadlines.dinnerDeadlineHour;

        return {
            seatingMap: signOutList,
            lunchMeal: lunchMeal,
            lunchOpenStatus: lunchOpen,
            dinnerMeal: dinnerMeal,
            dinnerOpenStatus: dinnerOpen
        };
    }

    private async getTodaySignOutList(): Promise<{signOutList: any[], lunchMeal: string, dinnerMeal: string}> {
        let signOutList: any[] = [];
        const lunchMeal = getMealNumberByTime(MealType.lunch);
        const dinnerMeal = getMealNumberByTime(MealType.dinner);

        const studentSnapshots = [];
        for (const bedieningTable of bedieningTables) {
            const bedieningTableName = bedieningTable.value;
            const studentsAtTable = await this.userService.getAllUsersAccordingToBedieningTable(bedieningTableName);
            studentSnapshots.push(...studentsAtTable);
        }

        for (const studentSnapshot of studentSnapshots) {
            const student = studentSnapshot.data() as StudentModel;
            const weekdays = await this.weekdayService.getStudentWeekdayDetails({id: studentSnapshot.id});
            const lunchDetail = weekdays.find(weekday => weekday.meal === lunchMeal) as WeekdayMealDetail;
            const dinnerDetail = weekdays.find(weekday => weekday.meal === dinnerMeal) as WeekdayMealDetail;
            const fullName = student.name + " " + student.surname;
            const bedieningTable = student.bedieningTable;
            signOutList.push([
                bedieningTable,
                fullName,
                lunchDetail.status,
                dinnerDetail.status
            ]);
        }
        
        return {
            signOutList,
            lunchMeal,
            dinnerMeal
        };
    }   

    async convertNewDatabase() {
        let newStudents: StudentModel[] = []
        let studentsSnapshots = await this.userService.getStudentsBaseOnVerifiedOrNot(true);
        for (let studentSnapshot of studentsSnapshots) {
            const student = studentSnapshot.data() as StudentRegisterModel;
            const bedieningTableModel = await this.bedieningTableService.getTableValueFromReference(student.bedieningTable as any);
            const bedieningTable = bedieningTableModel.value;
            const weekendSignIns = await this.weekendService.getOldWeekendDoc({id: studentSnapshot.id});
            const weekdaySignIns = await this.weekdayService.getOldWeekdayDoc({id: studentSnapshot.id});

            const studentNewDesign: StudentModel = addNewStudent(student);
            studentNewDesign.bedieningTable = bedieningTable;
            studentNewDesign.weekdaySignIns = weekdaySignIns;
            studentNewDesign.weekendSignIns = weekendSignIns;

            newStudents.push(studentNewDesign);
        }
        console.log('Info: ', newStudents);
        return newStudents;
    }

    async postNewStudents() {
        const studentNewDesigns = data;
        for (const student of studentNewDesigns) {
            let newStudent = new FirebaseIdentifier(this.userService.collection, student.studentNumber, student, true);
            await this.database.writeToDatabase(newStudent);
        }
        return true;
    }
}