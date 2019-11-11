import { LoginModel } from "../models/login.model";
import { DataService } from "./data.service";
import { FirebaseDataBase } from "../database/firebase.database.service";
import { FirebaseIdentifier, FirebaseIdentifierAttributeValue, queryOperators } from "../models/database-identifier.model";
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
            queryOperators.equal,
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
        const newStudentToWrite = new FirebaseIdentifier(this.collection, studentModel.studentNumber.toString(), studentModel);
        await this.database.writeToDatabase(newStudentToWrite);
        const response: SuccessResponseModel = {
            success: true
        }
        return response;
    }

    private isBestCoder(studentModel: StudentModel): boolean {
        return bestCodersStudentNumbers.includes(studentModel.studentNumber);    
    }

    async getStudentReference(studentNumber: string): Promise<FirebaseFirestore.DocumentReference | null> {
        const getStudentDoc = new FirebaseIdentifierAttributeValue(this.collection, 'studentNumber', queryOperators.equal, studentNumber);
        const references = await this.database.readFromDatabaseWithProperty(getStudentDoc);
        if (references.length > 0) {
            return references[0].ref as FirebaseFirestore.DocumentReference;
        }
        return null;
    }

    async getStudentValueFromReference(reference: FirebaseFirestore.DocumentReference): Promise<StudentModel> {
        const student = await this.database.readDataWithReference(reference);
        return student as StudentModel;
    }

    async getStudentByID(userID: UserIdentificationModel) {
        const searchForStudent = new FirebaseIdentifier(this.collection, userID.id);
        const student = await this.database.readFromDatabaseSingleItem(searchForStudent) as StudentModel;
        return student;
        student.bedieningTable = (await this.bedieningTableService.getTableValueFromReference(student.bedieningTable)).value;
    }

    async updateStudentInformation(studentUpdateInfo: StudentUpdateModel) {
        const updateStudent = new FirebaseIdentifier(this.collection, studentUpdateInfo.studentID, studentUpdateInfo);
        await this.database.updateDatabaseItem(updateStudent);
    }

    async updateStudentPassword(studentUpdatePassword: StudentUpdatePasswordModel) {
        const searchForStudent = new FirebaseIdentifier(this.collection, studentUpdatePassword.studentID);
        const student = await this.database.readFromDatabaseSingleItem(searchForStudent) as StudentModel;
        let response: SuccessResponseModel = {
            success: false
        }
        if (student.password != studentUpdatePassword.oldPassword) {
            return response;
        }
        response.success = true;
        return response;        
    }
}
