import { BedieningTable } from "./bediening-table.enum";

export interface NonnieLoginModel {
    password: string;
}

export interface StudentAccountInformation {
    studentID: string;
    username: string;
    email: string;
    fullName: string;
    isHk: boolean;
    isSemi: boolean;
    bedieningTable: BedieningTable;
    verified: boolean;
}