import { BedieningTable } from "./bediening-table.enum";
// import { DocumentReference } from "@google-cloud/firestore";

export class StudentModel {
    username: string;
    password: string;
    email: string;
    name: string;
    surname: string;
    studentNumber: string;
    firstYearYear: number;
    bedieningTable: BedieningTable | any; // DocumentReference
    semi: boolean;
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
        semi: boolean,
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
        this.semi = semi;
        this.isHk = isHk;
        this.verified = verified;
    }
}

export class StudentLoginModel {
    studentInfo: StudentModel;
    success: boolean;
    isBestCoder: boolean;
    constructor(
        studentInfo: StudentModel,
        success: boolean,
        isBestCoder: boolean
    ) {
        this.studentInfo = studentInfo;
        this.success = success;
        this.isBestCoder = isBestCoder;
    }

}