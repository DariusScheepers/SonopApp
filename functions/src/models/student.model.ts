import { BedieningTable } from "./bediening-table.enum";
// import { DocumentReference } from "@google-cloud/firestore";
import { SuccessResponseModel } from "./success-response.model"

export class StudentModel {
    username: string;
    password: string;
    email: string;
    name: string;
    surname: string;
    studentNumber: string;
    firstYearYear: number;
    bedieningTable: BedieningTable | any; // DocumentReference
    isSemi: boolean;
    isHk: boolean;
    verified: boolean;
    constructor(
        username: string,
        password: string,
        email: string,
        name: string,
        surname: string,
        studentNumber: string,
        firstYearYear: number,
        bedieningTable: BedieningTable,
        isSemi: boolean,
        isHk: boolean,
        verified: boolean = false
    ) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.name = name;
        this.surname = surname;
        this.studentNumber = studentNumber;
        this.firstYearYear = firstYearYear;
        this.bedieningTable = bedieningTable;
        this.isSemi = isSemi;
        this.isHk = isHk;
        this.verified = verified;
    }
}

export class StudentLoginModel implements SuccessResponseModel {
    studentID: string;
    studentInfo: StudentModel;
    success: boolean;
    isBestCoder: boolean;
    constructor(
        studentID: string,
        studentInfo: StudentModel,
        success: boolean,
        isBestCoder: boolean
    ) {
        this.studentID = studentID;
        this.studentInfo = studentInfo;
        this.success = success;
        this.isBestCoder = isBestCoder;
    }
}

export interface StudentUpdateModel {
    studentID: string;
    bedieningTable: BedieningTable | any; // DocumentReference
    isSemi: boolean;
    email: string;
}

export interface StudentUpdatePasswordModel {
    studentID: string;
    oldPassword: string;
    newPassword: string;
}