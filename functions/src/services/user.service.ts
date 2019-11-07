import { LoginModel } from "../models/login.model";
import { DataService } from "./data.service";
import { FirebaseDataBase } from "../database/firebase.database.service";
import { FirebaseIdentifier } from "../models/database-identifier.model";
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
        const searchForStudent = new FirebaseIdentifier(this.collection, loginModel.studentNumber.toString());
        const student: StudentModel = await this.database.readFromDatabaseSingleItem(searchForStudent) as StudentModel;
        if (student) {
            const isBestCoder = this.isBestCoder(student);
            const returnStudent: StudentLoginModel = new StudentLoginModel(student, true, isBestCoder)
            return returnStudent;
        } else {
            return {"success": false};
        }
    }

    async register(studentModel: StudentModel): Promise<{success: boolean}> {
        studentModel.verified = false;
        this.changeBedieningTableToReference(studentModel);
        const newStudentToWrite = new FirebaseIdentifier(this.collection, studentModel.studentNumber.toString(), studentModel);
        await this.database.writeToDatabase(newStudentToWrite);
        return {"success": true};
    }

    private changeBedieningTableToReference(studentModel: StudentModel) {
        studentModel.bedieningTable = this.bedieningTableService.getBedieningTableReference(studentModel.bedieningTable as BedieningTable);
    }

    isBestCoder(studentModel: StudentModel): boolean {
        const bestCoders = ['16006250'];
        return bestCoders.includes(studentModel.studentNumber);    
    }

    getStudentReference(studentNumber: string): FirebaseFirestore.DocumentReference {
        const getStudentDoc = new FirebaseIdentifier(this.collection, studentNumber);
        const ref = this.database.readDatabaseSingleItemReference(getStudentDoc);
        return ref;
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
