export class LoginModel {
    constructor(studentNumber: string) {
        this.studentNumber = studentNumber;
    }
    public studentNumber: string;
}

export interface AppVersionModel {
    appVersion: string;
}