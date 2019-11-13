import { DataService } from "./data.service";
import { UserService } from "./user.service";
import { WeekendService } from "./weekend.service";
import { WeekdayService } from "./weekday.service";
import { FirebaseDataBase } from "../database/firebase.database.service";
import { SuccessResponseModel } from "../models/success-response.model";
import { StudentModel } from "../models/student.model";

export class StudentEntryService extends DataService {
    userService: UserService;
    weekendService: WeekendService;
    weekdayService: WeekdayService;
    constructor(database: FirebaseDataBase, userService: UserService, weekendService: WeekendService, weekdayService: WeekdayService) {
        super(database);
        this.userService = userService;
        this.weekdayService = weekdayService;
        this.weekendService = weekendService;        
    }

    async createNewStudent(studentModel: StudentModel) {
        const response: SuccessResponseModel = await this.userService.register(studentModel);
        if (response.success) {
            return response;

        } else {
            return response;
        }
    }
}