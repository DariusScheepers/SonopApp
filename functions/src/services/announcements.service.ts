import { DataService } from "./data.service";
import { FirebaseDataBase } from "../database/firebase.database.service";
import { AnnouncementModel } from "../models/announcement.model";
import { FirebaseIdentifier } from "../models/database-identifier.model";
import { UserService } from "./user.service";
import { StudentModel } from "../models/student.model";

export class AnnouncementsService extends DataService {
    collection = 'announcements';
    userService: UserService
    constructor(database: FirebaseDataBase, userService: UserService) {
        super(database);
        this.userService = userService;
    }

    async addAnnouncement(announcement: AnnouncementModel) {
        const datePosted = new Date().getTime();
        announcement.datePosted = datePosted;
        announcement.postedBy = this.userService.getStudentReference(announcement.postedBy as string);
        const title = announcement.title.replace('\ \g',"") + "_" + datePosted.toString();
        const announcementToInsert = new FirebaseIdentifier(this.collection, title, announcement);
        await this.database.writeToDatabase(announcementToInsert);
        return {"success": true};
    }

    async getAnnouncements() {
        const allAnnouncements = new FirebaseIdentifier(this.collection);
        const announcements = await this.database.readFromDatabaseMultipleItems(allAnnouncements) as AnnouncementModel[];
        announcements.forEach(async announcement => {
            const student = await this.database.readDataWithReference(announcement.postedBy as FirebaseFirestore.DocumentReference) as StudentModel;
            const postedBy = student.name + " " + student.surname;
            announcement.postedBy = postedBy;
        });
        return {announcements};
    }
}
