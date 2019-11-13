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
        const verifiedAccounts = accounts.filter(account => account.verified);
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
}