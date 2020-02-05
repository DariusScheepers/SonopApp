import { UserService } from "./user.service";
import { WeekendService } from "./weekend.service";
import { NonnieService } from "./nonnie.service";
import * as nodemailer  from "nodemailer";
import Mail = require("nodemailer/lib/mailer");
import { emailConfig, emailWeekendReminderContent, nonnieWeekendSummaryHTMLTemplate, htmlTemplateVariables } from "../constants/emailer.constant";
import { recipient } from "../models/emailer.model";
import { UserIdentificationModel } from "../models/user-identification.model";
import { StudentModel } from "../models/student.model";
import { WeekendMealsCount } from "../models/weekend.model";
import { getNextDayOfWeek } from "../utils/date.util";
// import { nonnieEmailAddress } from "../constants/nonnie.constant";

export class EmailerService {
    userService: UserService;
    weekendService: WeekendService;
    nonnieService: NonnieService;
    transporter: Mail = nodemailer.createTransport(emailConfig.transport);
    constructor(userService: UserService, weekendService: WeekendService, nonnieService: NonnieService) {
        this.userService = userService;
        this.weekendService = weekendService;
        this.nonnieService = nonnieService;
    }

    async sendWeekendNotificationEmail() {
        const studentSnapshots = await this.userService.getAllStudents();
        for (const studentSnapshot of studentSnapshots) {
            const student = studentSnapshot.data() as StudentModel;
            if (student.verified) {
                const studentWeekendStatus = await this.compileStudentWeekendStatus({id: studentSnapshot.id})
                const message = emailWeekendReminderContent.message + studentWeekendStatus;
                await this.sendMail(
                    {
                        name: student.surname,
                        emailAddress: student.email
                    },
                    emailWeekendReminderContent.subjectLine,
                    `Hi Mnr. ${student.name},\n\n${message}${emailWeekendReminderContent.signature}`
                );
            }
        }
    }

    private async sendMail(recipient: recipient, subjectLine: string, message: string, asHTML?: boolean) {
        const messageObject: Mail.Options = !asHTML ? {
            from: emailConfig.from,
            to: recipient.emailAddress,
            subject: subjectLine,
            text: message
        } : {
            from: emailConfig.from,
            to: recipient.emailAddress,
            subject: subjectLine,
            html: message
        };
        return new Promise((resolve, reject) => {
            this.transporter.sendMail(messageObject,
                (error: any) => {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        });
    }

    private async compileStudentWeekendStatus(studentID: UserIdentificationModel): Promise<string> {
        const weekendDetails = await this.weekendService.getStudentWeekendDetails(studentID);
        let weekendDetailMessageAttachment = "";
        for (const weekendDetail of weekendDetails) {
            if (weekendDetail.status) {
                weekendDetailMessageAttachment += `\n\t${weekendDetail.meal}`
            }
        }
        let message = "Signed in for:" + weekendDetailMessageAttachment;
        if (weekendDetailMessageAttachment.length === 0) {
            message = `You haven't signed in yet.`;
        }
        return message;
    }

    async sendNonnieWeekendSignInReport() {
        const seatingMap = (await this.nonnieService.getStudentsPerTableForWeekend()).seatingMap;

        console.log('Info: SeatingMap', seatingMap);
        

        let table: any[][] = [];
        const weekendMealsCount: WeekendMealsCount = {
            fridayDinnerCount: 0,
            saturdayBrunchCount: 0,
            saturdayDinnerCount: 0,
            sundayBreakfastCount: 0,
            sundayLunchCount: 0,
            sundayDinnerCount: 0
        }
        seatingMap.forEach(seating => {
            seating.forEach(student => {
                table.push(student);
                weekendMealsCount.fridayDinnerCount = student[2] ? weekendMealsCount.fridayDinnerCount + 1 : weekendMealsCount.fridayDinnerCount;
                weekendMealsCount.saturdayBrunchCount = student[3] ? weekendMealsCount.saturdayBrunchCount + 1 : weekendMealsCount.saturdayBrunchCount;
                weekendMealsCount.saturdayDinnerCount = student[4] ? weekendMealsCount.saturdayDinnerCount + 1 : weekendMealsCount.saturdayDinnerCount;
                weekendMealsCount.sundayBreakfastCount = student[5] ? weekendMealsCount.sundayBreakfastCount + 1 : weekendMealsCount.sundayBreakfastCount;
                weekendMealsCount.sundayLunchCount = student[6] ? weekendMealsCount.sundayLunchCount + 1 : weekendMealsCount.sundayLunchCount;
                weekendMealsCount.sundayDinnerCount = student[7] ? weekendMealsCount.sundayDinnerCount + 1 : weekendMealsCount.sundayDinnerCount;
            });
        });

        let html = nonnieWeekendSummaryHTMLTemplate;
        let dataFrame = "";
        table.forEach(row => {
            let rowHTML = "";
            row.forEach((block, index) => {
                if (index >= 2) {
                    block = block ? "Signed In" : "Signed Out";
                }
                rowHTML = rowHTML + "<td>" + block + "</td>"; 
            });
            dataFrame = "<tr>" + rowHTML + "</tr>";
        });
        const weekendDate = getNextDayOfWeek(5) + "-" + getNextDayOfWeek(0);
        
        html.replace(htmlTemplateVariables.fridayDinnerCount, `${weekendMealsCount.fridayDinnerCount}`);
        html.replace(htmlTemplateVariables.saturdayBrunchCount, `${weekendMealsCount.saturdayBrunchCount}`);
        html.replace(htmlTemplateVariables.saturdayDinnerCount, `${weekendMealsCount.saturdayDinnerCount}`);
        html.replace(htmlTemplateVariables.sundayBreakfastCount, `${weekendMealsCount.sundayBreakfastCount}`);
        html.replace(htmlTemplateVariables.sundayLunchCount, `${weekendMealsCount.sundayLunchCount}`);
        html.replace(htmlTemplateVariables.sundayDinnerCount, `${weekendMealsCount.sundayDinnerCount}`);
        html.replace(htmlTemplateVariables.weekendDate, weekendDate);
        html.replace(htmlTemplateVariables.data, dataFrame);

        console.log('Info: HTML', html);
        
        // await this.sendMail(
        //     {
        //         name: 'Nonnie Jenny',
        //         emailAddress: nonnieEmailAddress
        //     },
        //     `Weekend Sign In for ${weekendDate}`,
        //     html
        // );

        return html;
    }
}