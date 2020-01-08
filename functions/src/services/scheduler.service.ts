import { WeekdayService } from "./weekday.service";
import { WeekendService } from "./weekend.service";
import { AnnouncementsService } from "./announcements.service";
import { EmailerService } from "./emailer.service";

export class SchedulerService {
    weekdayService: WeekdayService;
    weekendService: WeekendService;
    announcementsService: AnnouncementsService;
    emailerService: EmailerService;
    constructor(
        weekdayService: WeekdayService,
        weekendService: WeekendService,
        announcementsService: AnnouncementsService,
        emailerService: EmailerService
    ) {
        this.weekdayService = weekdayService;
        this.weekendService = weekendService;
        this.announcementsService = announcementsService;
        this.emailerService = emailerService;
    }

    async sendNotifications() {
        await this.emailerService.sendNotificationEmail();
    }

    async setDatabaseToDefault() {
        await this.clearAnnouncements();
        await this.clearWeekendSignIns();
        await this.clearWeekdayTemporarySignOuts();
    }

    private async clearAnnouncements() {
        await this.announcementsService.clearAnnouncements();
    }

    private async clearWeekendSignIns() {
        await this.weekendService.resetWeekendSignIn();
    }

    private async clearWeekdayTemporarySignOuts() {
        await this.weekdayService.resetWeekdaySignOut();
    }
}