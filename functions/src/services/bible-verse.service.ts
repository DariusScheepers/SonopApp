import { DataService } from "./data.service";
import { FirebaseDataBase } from "../database/firebase.database.service";
import { FirebaseIdentifier } from "../models/database-identifier.model";

export class BibleVerseService extends DataService {
    collection = 'bibleVerses';
    scheduler: any;
    request: any;
    constructor(database: FirebaseDataBase, request: any, scheduler: any) {
        super(database);
        this.scheduler = scheduler;
        this.request = request;
        
        this.downloadBibleVerse();
        this.setRecurrenceRule();
    }

    async getTodayBibleVerse() {
        const bibleVerseIdentifier = new FirebaseIdentifier(this.collection);
        const bibleVerses = await this.database.readFromDatabaseMultipleItems(bibleVerseIdentifier);
        return bibleVerses[bibleVerses.length - 1];
    }

    private async downloadBibleVerse() {
        const url = 'http://beta.ourmanna.com/api/v1/get/?format=json';
        // const proxyUrl = 'http://cors-anywhere.herokuapp.com/' + url;
    
        this.request({
            url: url,
            json: true
        }, (error: any, response: any, body: any) => {
            if (response && !error && response.statusCode === 200) {
                this.freeUpBibleVerses();

                const date = new Date().getTime().toString();
                const newBibleVerseEntry = new FirebaseIdentifier(this.collection, date, body);
                this.database.writeToDatabase(newBibleVerseEntry);
            }
            else {
                console.log("Error: " + error);
            }
        });   
    }

    private setRecurrenceRule() {
        let bibleVerseTimeRule = new this.scheduler.RecurrenceRule();
        bibleVerseTimeRule.hour = 0;  // 0
        bibleVerseTimeRule.minute = 1; // 1
        this.scheduler.scheduleJob(bibleVerseTimeRule, async() => {
            this.downloadBibleVerse();
        });
    }

    private freeUpBibleVerses() {
        const collectionToFreeUp = new FirebaseIdentifier(this.collection);
        this.database.deleteCollection(collectionToFreeUp);
    }
}