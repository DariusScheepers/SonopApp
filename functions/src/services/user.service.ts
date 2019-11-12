import { LoginModel } from "../models/login.model";
import { DataService } from "./data.service";
import { FirebaseDataBase } from "../database/firebase.database.service";
import { FirebaseIdentifier, FirebaseIdentifierAttributeValue, QueryOperators } from "../models/database-identifier.model";
import { StudentModel, StudentLoginModel, StudentUpdateModel, StudentUpdatePasswordModel } from "../models/student.model";
import { BedieningTableService } from "./bediening-tables.service";
import { BedieningTable } from "../models/bediening-table.enum";
import { bestCodersStudentNumbers } from "../constants/best-coders.constant";
import { UserIdentificationModel } from "../models/user-identification.model";
import { SuccessResponseModel } from "../models/success-response.model";

export class UserService extends DataService {
    collection = 'users';
    bedieningTableService: BedieningTableService;
    constructor(database: FirebaseDataBase, bedieningTableService: BedieningTableService) {
        super(database);
        this.bedieningTableService = bedieningTableService;
    }

    async login(loginModel: LoginModel): Promise<any> {
        const searchForStudent = new FirebaseIdentifierAttributeValue(
            this.collection,
            'studentNumber',
            QueryOperators.equal,
            loginModel.studentNumber.toString()
        );
        const students = await this.database.readFromDatabaseWithProperty(searchForStudent);
        if (students.length > 0) {
            const studentSnapshot = students[0];
            const student = studentSnapshot.data() as StudentModel;
            const isBestCoder = this.isBestCoder(student);
            const returnStudent: StudentLoginModel = new StudentLoginModel(studentSnapshot.id, student, true, isBestCoder)
            return returnStudent;
        } else {
            const response: SuccessResponseModel = {
                success: false
            }
            return response;
        }
    }

    async register(studentModel: StudentModel): Promise<SuccessResponseModel> {
        studentModel.verified = false;
        studentModel.bedieningTable = await this.bedieningTableService.getBedieningTableReference(studentModel.bedieningTable as BedieningTable);
        const newStudentToWrite = new FirebaseIdentifier(this.collection, studentModel.studentNumber.toString(), studentModel, true);
        await this.database.writeToDatabase(newStudentToWrite);
        const response: SuccessResponseModel = {
            success: true
        }
        return response;
    }

    private isBestCoder(studentModel: StudentModel): boolean {
        return bestCodersStudentNumbers.includes(studentModel.studentNumber);    
    }

    async getStudentReference(studentID: string): Promise<FirebaseFirestore.DocumentReference> {
        const getStudentDoc = new FirebaseIdentifier(this.collection, studentID);
        const reference = await this.database.readFromDatabaseSingleItemReference(getStudentDoc);
        return reference;
    }

    async getStudentValueFromReference(reference: FirebaseFirestore.DocumentReference): Promise<StudentModel> {
        const student = await this.database.readDataWithReference(reference);
        return student as StudentModel;
    }

    async getStudentByID(userID: UserIdentificationModel) {
        const searchForStudent = new FirebaseIdentifier(this.collection, userID.id);
        const student = await this.database.readFromDatabaseSingleItem(searchForStudent) as StudentModel;
        const bedieningTableReference = student.bedieningTable;
        console.log('Info: ', bedieningTableReference);
        
        const bedieningTable = await this.bedieningTableService.getTableValueFromReference(bedieningTableReference);
        student.bedieningTable = bedieningTable.value;
        
        return student;
    }

    async updateStudentInformation(studentUpdateInfo: StudentUpdateModel) {
        studentUpdateInfo.bedieningTable = await this.bedieningTableService.getBedieningTableReference(studentUpdateInfo.bedieningTable as BedieningTable);
        const updateStudent = new FirebaseIdentifier(this.collection, studentUpdateInfo.studentID, studentUpdateInfo);
        await this.database.updateDatabaseItem(updateStudent);
    }

    async updateStudentPassword(studentUpdatePassword: StudentUpdatePasswordModel) {
        const searchForStudent = new FirebaseIdentifier(this.collection, studentUpdatePassword.studentID);
        const student = await this.database.readFromDatabaseSingleItem(searchForStudent) as StudentModel;
        let response: SuccessResponseModel = {
            success: false
        }
        console.log('Info: current', student.password);
        console.log('Info: old', studentUpdatePassword.oldPassword);
        
        if (student.password != studentUpdatePassword.oldPassword) {
            return response;
        }
        const updateStudent = new FirebaseIdentifier(this.collection, studentUpdatePassword.studentID, {password: studentUpdatePassword.newPassword});
        await this.database.updateDatabaseItem(updateStudent);
        response.success = true;
        return response;        
    }
}
