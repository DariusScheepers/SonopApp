import { LoginModel } from "../models/login.model";
import { DataService } from "./data.service";
import { FirebaseDataBase } from "../database/firebase.database.service";
import { FirebaseIdentifier, FirebaseIdentifierAttributeValue, queryOperators } from "../models/database-identifier.model";
import { StudentModel, StudentLoginModel } from "../models/student.model";
import { BedieningTableService } from "./bediening-tables.service";
import { BedieningTable } from "../models/bediening-table.enum";

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
            const student = students[0] as StudentModel;
            const isBestCoder = this.isBestCoder(student);
            const returnStudent: StudentLoginModel = new StudentLoginModel(student, true, isBestCoder)
            return returnStudent;
        } else {
            return {"success": false};
        }
    }

    async register(studentModel: StudentModel): Promise<{success: boolean}> {
        studentModel.verified = false;
        await this.changeBedieningTableToReference(studentModel);
        const newStudentToWrite = new FirebaseIdentifier(this.collection, studentModel.studentNumber.toString(), studentModel);
        await this.database.writeToDatabase(newStudentToWrite);
        return {"success": true};
    }

    private async changeBedieningTableToReference(studentModel: StudentModel) {
        studentModel.bedieningTable = await this.bedieningTableService.getBedieningTableReference(studentModel.bedieningTable as BedieningTable);
    }

    isBestCoder(studentModel: StudentModel): boolean {
        const bestCoders = ['16006250'];
        return bestCoders.includes(studentModel.studentNumber);    
    }

    async getStudentReference(studentNumber: string): Promise<FirebaseFirestore.DocumentReference | null> {
        const getStudentDoc = new FirebaseIdentifierAttributeValue(this.collection, 'studentNumber', queryOperators.equal, studentNumber);
        const references = await this.database.readFromDatabaseWithProperty(getStudentDoc, true);
        if (references.length > 0) {
            return references[0] as FirebaseFirestore.DocumentReference;
        }
        return null;
    }

    // async test(loginModel: LoginModel) {
    //     const loginToWrite = new FirebaseIdentifier(this.collection, loginModel.studentNumber, loginModel);
    //     console.log('Info: In Test Before Write');
    //     const received = await this.database.writeToDatabase(loginToWrite);
    //     console.log('Info: In Test', received);
    //     let returnObject = {received, "message": "got Here"};
    //     return returnObject;
    // }

    // async test2(loginModel: LoginModel): Promise<any> {
    //     console.log('In test2', loginModel);
    //     return await loginModel;
    // }
} 
