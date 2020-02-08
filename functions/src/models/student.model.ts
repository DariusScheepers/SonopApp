import { BedieningTable } from "./bediening-table.enum";
// import { DocumentReference } from "@google-cloud/firestore";
import { SuccessResponseModel } from "./success-response.model"
import { WeekdayMealsModel, WeekdaySignInStatus } from "./weekday.model";
import { WeekendMealsModel } from "./weekend.model";

export interface StudentModel extends StudentRegisterModel{
    weekdaySignIns: WeekdayMealsModel,
    weekendSignIns: WeekendMealsModel
}

export function addNewStudent(studentRegisterModel: StudentRegisterModel): StudentModel {
    return {
        studentNumber: studentRegisterModel.studentNumber,
        name: studentRegisterModel.name,
        surname: studentRegisterModel.surname,
        email: studentRegisterModel.email,
        username: studentRegisterModel.username,
        password: studentRegisterModel.password,
        bedieningTable: studentRegisterModel.bedieningTable,
        firstYearYear: studentRegisterModel.firstYearYear,
        isHk: studentRegisterModel.isHk,
        isSemi: studentRegisterModel.isSemi,
        verified: false,
        weekdaySignIns: {
            mondayLunch: WeekdaySignInStatus.signedIn,
            mondayDinner: WeekdaySignInStatus.signedIn,
            tuesdayLunch: WeekdaySignInStatus.signedIn,
            tuesdayDinner: WeekdaySignInStatus.signedIn,
            wednesdayLunch: WeekdaySignInStatus.signedIn,
            wednesdayDinner: WeekdaySignInStatus.signedIn,
            thursdayLunch: WeekdaySignInStatus.signedIn,
            thursdayDinner: WeekdaySignInStatus.signedIn,
            fridayLunch: WeekdaySignInStatus.signedIn
        },
        weekendSignIns: {
            fridayDinner: false,
            saturdayBrunch: false,
            saturdayDinner: false,
            sundayBreakfast: false,
            sundayLunch: false,
            sundayDinner: false,
        }
    }
    
}

export class StudentRegisterModel {
    username: string;
    password: string;
    email: string;
    name: string;
    surname: string;
    studentNumber: string;
    firstYearYear: number;
    bedieningTable: BedieningTable;
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

export interface StudentUpdateModel extends StudentUpdateForNonnieModel {
    studentID: string;
    bedieningTable: BedieningTable;
    isSemi: boolean;
    email: string;
}

export interface StudentUpdateForNonnieModel {
    studentID: string;
    bedieningTable: BedieningTable;
    isSemi: boolean;
}

export interface StudentUpdatePasswordModel {
    studentID: string;
    oldPassword: string;
    newPassword: string;
}