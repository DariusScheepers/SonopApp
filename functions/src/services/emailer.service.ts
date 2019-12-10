import { UserService } from "./user.service";
import { WeekendService } from "./weekend.service";
import * as scheduler from "node-schedule";
import * as nodemailer  from "nodemailer";
import Mail = require("nodemailer/lib/mailer");
import { emailNotificationTime, emailConfig, emailWeekendReminderContent } from "../constants/emailer.constant";
import { recipient } from "../models/emailer.model";
import { UserIdentificationModel } from "../models/user-identification.model";
import { StudentModel } from "../models/student.model";

export class EmailerService {
    userService: UserService;
    weekendService: WeekendService;
    transporter: Mail = nodemailer.createTransport(emailConfig.transport);
    constructor(userService: UserService, weekendService: WeekendService) {
        this.userService = userService;
        this.weekendService = weekendService;
    }

    start() {
        this.scheduleToSendEmailNotification();
    }

    private async scheduleToSendEmailNotification() {
        let emailNotificationRule = new scheduler.RecurrenceRule();
        emailNotificationRule.dayOfWeek = emailNotificationTime.dayOfWeek;
        emailNotificationRule.hour = emailNotificationTime.hour;
        emailNotificationRule.minute = emailNotificationTime.minute;
        scheduler.scheduleJob(emailNotificationRule, async () => {
            await this.sendNotificationEmail();
        });
    }

    private async sendNotificationEmail() {
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
                    message
                );
            }
        }
    }

    private async sendMail(recipient: recipient, subjectLine: string, message: string) {
        return new Promise((resolve, reject) => {
            this.transporter.sendMail({
                from: emailConfig.from,
                to: recipient.emailAddress,
                subject: subjectLine,
                text: `Hi Mnr. ${recipient.name},\n\n${message}${emailWeekendReminderContent.signature}`
            }, (error: any) => {
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

}