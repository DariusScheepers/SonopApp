import { DataService } from "./data.service";
import { FirebaseDataBase } from "../database/firebase.database.service";
import { AnnouncementModel } from "../models/announcement.model";
import { FirebaseIdentifier, FirebaseIdentifierAttributeValue, QueryOperators, OrderByDirection } from "../models/database-identifier.model";
import { UserService } from "./user.service";
import * as scheduler from "node-schedule";
import { wipeAnnouncementsSchedule } from "../constants/announcements-schedule.constant";

export class AnnouncementsService extends DataService {
    collection = 'announcements';
    userService: UserService;
    constructor(database: FirebaseDataBase, userService: UserService) {
        super(database);
        this.userService = userService;
        this.setRecurrenceRule();
    }

    async addAnnouncement(announcement: AnnouncementModel) {
        const datePosted = new Date().getTime();
        announcement.datePosted = datePosted;
        announcement.postedBy = await this.userService.getStudentReference(announcement.postedBy as string) as FirebaseFirestore.DocumentReference;
        const title = announcement.title.replace(/\ /g,"");
        const announcementToInsert = new FirebaseIdentifier(this.collection, title, announcement, true);
        await this.database.writeToDatabase(announcementToInsert);
        return {"success": true};
    }

    async getAnnouncements() {
        const allAnnouncementsSearch = new FirebaseIdentifierAttributeValue(
            this.collection,
            'datePosted',
            QueryOperators.greaterThan,
            0,
            [
                {
                    attribute: 'datePosted',
                    direction: OrderByDirection.descending
                }
            ]
        );
        const announcementsSnapshots = await this.database.readFromDatabaseWithProperty(allAnnouncementsSearch);
        let announcements = announcementsSnapshots.map(document => document.data()) as AnnouncementModel[];
        announcements = announcements.sort((x, y) => {
            return (x.priority === y.priority) ? 0 : x ? 1 : -1;
        });
        for (const announcement of announcements) {
            const student = await this.userService.getStudentValueFromReference(announcement.postedBy);
            const postedBy = student.name + " " + student.surname;
            announcement.postedBy = postedBy;
        };
        return {announcements};
    }

    private async clearAnnouncements() {
        const deleteAllAnnouncements = new FirebaseIdentifier(this.collection);
        await this.database.deleteCollection(deleteAllAnnouncements);
    }

    private async setRecurrenceRule() {
        let bibleVerseTimeRule = new scheduler.RecurrenceRule();
        bibleVerseTimeRule.dayOfWeek = wipeAnnouncementsSchedule.dayOfWeek;  // 0
        bibleVerseTimeRule.hour = wipeAnnouncementsSchedule.hour; // 17
        scheduler.scheduleJob(bibleVerseTimeRule, async() => {
            await this.clearAnnouncements();
        });
    }
}
