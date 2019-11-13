import { DataService } from "./data.service";
import { FirebaseDataBase } from "../database/firebase.database.service";
import { FirebaseIdentifier } from "../models/database-identifier.model";
import requestPromise = require("request-promise");
import * as scheduler from "node-schedule";

export class BibleVerseService extends DataService {
    collection = 'bibleVerses';
    constructor(database: FirebaseDataBase) {
        super(database);
        
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
        let bibleVerseJSON = null;
        const requestParam = {
            url: url,
            json: true
        }
        await requestPromise(requestParam).then(body => {
            bibleVerseJSON = body;
            console.log('Info: ', bibleVerseJSON);     
        }).catch(error => {
            console.log('Error: ', error);        
        });
        
        return await this.writeBibleVerseToDatabase({bibleVerseJSON})
    }

    private async writeBibleVerseToDatabase(bibleVerseJSON: any) {
        await this.freeUpBibleVerses();
        const name = new Date().getTime().toString();
        const newBibleVerseEntry = new FirebaseIdentifier(this.collection, name, bibleVerseJSON)
        await this.database.writeToDatabase(newBibleVerseEntry);
        
        return bibleVerseJSON;
    }

    private setRecurrenceRule() {
        let bibleVerseTimeRule = new scheduler.RecurrenceRule();
        bibleVerseTimeRule.hour = 0;  // 0
        bibleVerseTimeRule.minute = 1; // 1
        scheduler.scheduleJob(bibleVerseTimeRule, async() => {
            this.downloadBibleVerse();
        });
    }

    private async freeUpBibleVerses() {
        const collectionToFreeUp = new FirebaseIdentifier(this.collection);
        await this.database.deleteTable(collectionToFreeUp);
    }
}