import { DocumentReference } from "@google-cloud/firestore";

export class AnnouncementModel {
    title: string;
    message: string;
    datePosted: number | string;
    priority: boolean;
    postedBy: string | DocumentReference;
    constructor(
        title: string,
        message: string,
        priority: boolean,
        postedBy: string | DocumentReference,
        datePosted: number = 0
    ) {
        this.title = title;
        this.message = message;
        this.priority = priority;
        this.postedBy = postedBy;
        this.datePosted = datePosted;
    }
}