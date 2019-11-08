import * as functions from "firebase-functions";
import * as express from "express";
// import * as scheduler from "node-schedule";
import * as cors from "cors";
import * as admin from "firebase-admin";
import * as request from "request";
import * as requestPromise from "request-promise";
import { FirebaseDataBase } from './database/firebase.database.service';
import { UserService } from './services/user.service';
import { BibleVerseService } from './services/bible-verse.service';
import { BedieningTableService } from './services/bediening-tables.service';
import { AnnouncementsService } from './services/announcements.service';
admin.initializeApp(functions.config().firebase);
const database = admin.firestore();

const dataBaseService = new FirebaseDataBase(database);
const bibleVerseService = new BibleVerseService(dataBaseService);
const bedieningTableService = new BedieningTableService(dataBaseService);
const userService = new UserService(dataBaseService, bedieningTableService);
const announcementsService = new AnnouncementsService(dataBaseService, userService);

const app = express();
app.use(cors());
exports.app = functions.https.onRequest(app);

app.get('/testing', (req, res) => {
    console.log("success con1");
    let success = true;
    res.send({success, "testing": 1});
});

app.get('/testing2', async (req, res) => {
    console.log("success con2");
    let success = true;

    const url = 'http://beta.ourmanna.com/api/v1/get/?format=json';
    let bibleVerseJSON = null;
    const requestParam: (request.UriOptions & request.CoreOptions) | (request.UrlOptions & request.CoreOptions) = {
        url: url,
        json: true,
        timeout: 5000
    }
    await requestPromise(requestParam).then(body => {
        bibleVerseJSON = body;
        console.log('Info: ', bibleVerseJSON);     
    }).catch(error => {
        console.log('Error: ', error);        
    });

    res.send({success, message: "Nice3", "testing": 2, bibleVerseJSON});           
});

app.post('/login', async (req, res) => {
    const received = await userService.login(req.body);
    res.send(received);
});

app.post('/addUser', async (req, res) => {
    const received = await userService.register(req.body);
    res.send(received);
});

app.get('/bibleVerse', async (req, res) => {
    const received = await bibleVerseService.getTodayBibleVerse();
    res.send(received);
});

app.get('/getAnnouncements', async (req, res) => {
    const received = await announcementsService.getAnnouncements();
    res.send(received);
});

app.post('/addAnnouncement', async (req, res) => {
    const received = await announcementsService.addAnnouncement(req.body);
    res.send(received);
});
