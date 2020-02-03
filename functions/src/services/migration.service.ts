import { DataService } from "./data.service";
import { FirebaseDataBase } from "../database/firebase.database.service";
// import { rawData } from "../database-back-up/old-database.data";
import { sqlUser } from "../models/oldSQLDB.model"
import { UserService } from "./user.service";
import { StudentModel, StudentLoginModel } from "../models/student.model";
import { BedieningTableService } from "./bediening-tables.service";
import { NonnieService } from "./nonnie.service";
import { WeekdayService } from "./weekday.service";
import { WeekendService } from "./weekend.service";
import { environment } from "../constants/environment.constant";

export class MigrationService extends DataService {

    userService: UserService;
    bedieningTableService: BedieningTableService;
    nonnieService: NonnieService;
    weekdayService: WeekdayService;
    weekendService: WeekendService;
    constructor(
            database: FirebaseDataBase,
            userService: UserService,
            bedieningTableService: BedieningTableService,
            nonnieService: NonnieService,
            weekdayService: WeekdayService,
            weekendService: WeekendService
            ) {
        super(database);
        this.userService = userService;
        this.bedieningTableService = bedieningTableService;
        this.nonnieService = nonnieService;
        this.weekdayService = weekdayService;
        this.weekendService = weekendService;
    }

    async migrateOldUsersToDatabase() {
        let rawData: sqlUser[] = [];
        
        for (const rawUser of rawData) {
            const bedieningTable = this.bedieningTableService.getBedieningTableByOldID(Number(rawUser.tblBedieningTable_talID));
            const userIsSemi = rawUser.usrIsSemi == "1";
            const userIsHK = rawUser.usrIsHK == "1";
            const userFirstYearYear = Number(rawUser.usrFirstYearYear);

            const user: StudentModel = {
                username: rawUser.usrUsername,
                password: "admin",
                email: rawUser.usrEmailAddress,
                name: rawUser.usrName,
                surname: rawUser.usrSurname,
                studentNumber: rawUser.usrStudentNumber,
                firstYearYear: userFirstYearYear,
                bedieningTable: bedieningTable,
                isSemi: userIsSemi,
                isHk: userIsHK,
                verified: false
            };
            
            if (environment.migrate) {
                await this.publishUser(user);
            }
        }
    }

    async publishUser(user: StudentModel) {
        console.log('Info: ', "Publishing");
        
        await this.userService.register(user);
        console.log('Info: ', "User", user.studentNumber, "added to DB");
        
        const student: StudentLoginModel = await this.userService.login({studentNumber: user.studentNumber});
        await this.nonnieService.verifyAccount({id: student.studentID});
        console.log('Info: Published:', student.studentID);   
    }

    async resetDB() {
        console.log('Info: Deleting All users');
        await this.userService.deleteAllUsers();
        setTimeout(async number => {
            console.log('Info: Deleting All weekday stuff');
            await this.weekdayService.deleteAllEntries();
    
            setTimeout(async number => {
                console.log('Info: Deleting All weekend stuff');
                await this.weekendService.deleteAllEntries();                
            }, 30000);            
        }, 30000);

    }
}