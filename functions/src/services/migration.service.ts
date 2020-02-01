import { DataService } from "./data.service";
import { FirebaseDataBase } from "../database/firebase.database.service";
import { rawData } from "../database-back-up/old-database.data";
import { UserService } from "./user.service";
import { StudentModel, StudentLoginModel } from "../models/student.model";
import { BedieningTableService } from "./bediening-tables.service";
import { NonnieService } from "./nonnie.service";
import { environment } from "../constants/environment.constant";

export class MigrationService extends DataService {

    userService: UserService;
    bedieningTableService: BedieningTableService;
    nonnieService: NonnieService; 
    constructor(
            database: FirebaseDataBase,
            userService: UserService,
            bedieningTableService: BedieningTableService,
            nonnieService: NonnieService
            ) {
        super(database);
        this.userService = userService;
        this.bedieningTableService = bedieningTableService;
        this.nonnieService = nonnieService;
    }

    async migrateOldUsersToDatabase() {
        console.log('Info: Data', rawData);
        
        for (const rawUser of rawData) {
            const bedieningTable = this.bedieningTableService.getBedieningTableByOldID(Number(rawUser.tblBedieningTable_talID));
            const userIsSemi = rawUser.usrIsSemi == "1";
            const userIsHK = rawUser.usrIsHK == "1";
            const userFirstYearYear = Number(rawUser.usrFirstYearYear);

            const user = new StudentModel(
                rawUser.usrUsername,
                rawUser.usrPassword,
                rawUser.usrEmailAddress,
                rawUser.usrName,
                rawUser.usrSurname,
                rawUser.usrStudentNumber,
                userFirstYearYear,
                bedieningTable,
                userIsSemi,
                userIsHK,
            );
            
            if (environment.migrate) {
                await this.publishUser(user);
            }
        }
    }

    async publishUser(user: StudentModel) {
        console.log('Info: ', "Publishing");
        
        await this.userService.register(user);
        const student: StudentLoginModel = await this.userService.login({studentNumber: user.studentNumber});
        await this.nonnieService.verifyAccount({id: student.studentID});
        console.log('Info: Published:', student);
        
    }
}