import { DataService } from "./data.service";
import { UserService } from "./user.service";
import { FirebaseDataBase } from "../database/firebase.database.service";
import { NonnieLoginModel, StudentAccountInformation } from "../models/nonnie.model";
import { SuccessResponseModel } from "../models/success-response.model";
import { nonniePassword } from "../constants/nonnie.constant";
import { StudentModel } from "../models/student.model";
import { BedieningTableService } from "./bediening-tables.service";
import { UserIdentificationModel } from "../models/user-identification.model";
import { WeekendService } from "./weekend.service";
import { WeekdayService } from "./weekday.service";
import { sortArrayAlphabetically } from "../utils/array.util";
import { bedieningTables } from "../constants/bediening-tables.constant";
import { BedieningTable } from "../models/bediening-table.enum";
import { getMealNumberByTime, MealType, SignOutListInformation, WeekdayMealDetail } from "../models/weekday.model";
import { weekdayDeadlines } from "../constants/mealDeadlines.constant";

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
        const accounts = await this.compileAllStudentAccountsInformation();
        const unverifiedAccounts = accounts.filter(account => !account.verified);

        return unverifiedAccounts;
    }

    async getVerifiedAccounts(): Promise<StudentAccountInformation[]> {
        const accounts = await this.compileAllStudentAccountsInformation();
        let orderedAccounts = sortArrayAlphabetically(accounts, 'fullName');
        orderedAccounts = sortArrayAlphabetically(orderedAccounts, 'bedieningTable');
        const verifiedAccounts = orderedAccounts.filter(orderedAccounts => orderedAccounts.verified);
        return verifiedAccounts;
    }

    private async compileAllStudentAccountsInformation(): Promise<StudentAccountInformation[]> {
        let accounts: StudentAccountInformation[] = [];
        const studentSnapshots = await this.userService.getAllStudents();
        for (const studentSnapshot of studentSnapshots) {
            const account = await this.compileStudentAccountInformation(studentSnapshot);
            accounts.push(account);
        }
        return accounts;
    }

    private async compileStudentAccountInformation(studentSnapshot: FirebaseFirestore.QueryDocumentSnapshot): Promise<StudentAccountInformation> {
        const student = studentSnapshot.data() as StudentModel;
        const bedieningTable = await this.bedieningTableService.getTableValueFromReference(student.bedieningTable);
        const studentAccount: StudentAccountInformation = {
            studentID: studentSnapshot.id,
            username: student.username,
            fullName: student.name + " " + student.surname,
            email: student.email,
            isHk: student.isHk,
            isSemi: student.isSemi,
            bedieningTable: bedieningTable.value,
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
            const studentsAtTable = await this.findAllVerifiedStudentsForBedieningTable(bedieningTableName);
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

    private async findAllVerifiedStudentsForBedieningTable(bedieningTable: BedieningTable): Promise<FirebaseFirestore.QueryDocumentSnapshot[]> {
        let studentsOfBedieningTable: FirebaseFirestore.QueryDocumentSnapshot[] = [];
        const studentSnapshots = await this.userService.getAllStudents();
        for (const studentSnapshot of studentSnapshots) {
            const student = studentSnapshot.data() as StudentModel;
            const bedieningTableOfStudent = await this.bedieningTableService.getTableValueFromReference(student.bedieningTable);
            if (student.verified && bedieningTableOfStudent.value === bedieningTable) {
                studentsOfBedieningTable.push(studentSnapshot);
            }
        }
        return studentsOfBedieningTable;
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
            const studentsAtTable = await this.findAllVerifiedStudentsForBedieningTable(bedieningTableName);
            studentSnapshots.push(...studentsAtTable);
        }

        for (const studentSnapshot of studentSnapshots) {
            const student = studentSnapshot.data() as StudentModel;
            const weekdays = await this.weekdayService.getStudentWeekdayDetails({id: studentSnapshot.id});
            const lunchDetail = weekdays.find(weekday => weekday.meal === lunchMeal) as WeekdayMealDetail;
            const dinnerDetail = weekdays.find(weekday => weekday.meal === dinnerMeal) as WeekdayMealDetail;
            const fullName = student.name + " " + student.surname;
            const bedieningTable = await this.bedieningTableService.getTableValueFromReference(student.bedieningTable);
            const bedieningTableName =  bedieningTable.value;
            signOutList.push([
                bedieningTableName,
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
}