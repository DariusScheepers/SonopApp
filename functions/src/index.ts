import * as functions from "firebase-functions";
import * as express from "express";
import * as cors from "cors";
import * as admin from "firebase-admin";
import * as request from "request";
import * as requestPromise from "request-promise";
import { FirebaseDataBase } from './database/firebase.database.service';
import { UserService } from './services/user.service';
import { BedieningTableService } from './services/bediening-tables.service';
import { AnnouncementsService } from './services/announcements.service';
import { environment } from "./constants/environment.constant";
import { WeekendService } from "./services/weekend.service";
import { WeekdayService } from "./services/weekday.service";

if (environment.development) {
    var serviceAccount = require("../../../CredentialKeys/sonopapptest1-firebase-adminsdk-eegpd-0036d9b018.json");
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://sonopapptest1.firebaseio.com"
    });
} else {
    admin.initializeApp(functions.config().firebase);    
}

const database = admin.firestore();

const dataBaseService = new FirebaseDataBase(database);
const bedieningTableService = new BedieningTableService(dataBaseService);
const userService = new UserService(dataBaseService, bedieningTableService);
const announcementsService = new AnnouncementsService(dataBaseService, userService);
const weekendService = new WeekendService(dataBaseService, userService);
const weekdayService = new WeekdayService(dataBaseService, userService);

const app = express();
app.use(cors());
exports.app = functions.https.onRequest(app);

app.get('/testing', (req, res) => {
    console.log("success con1");
    let success = true;
    res.send({success, "testing": 1});
});

app.get('/testRequest', async (req, res) => {
    console.log("success con2");
    let success = true;

    const url = 'http://beta.ourmanna.com/api/v1/get/?format=json';
    let bibleVerseJSON = null;
    const requestParam: (request.UriOptions & request.CoreOptions) | (request.UrlOptions & request.CoreOptions) = {
        url: url,
        json: true,
        method: "GET",        
    }
    await requestPromise(requestParam).then(body => {
        bibleVerseJSON = body;
        console.log('Info: ', bibleVerseJSON);     
    }).catch(error => {
        bibleVerseJSON = error;
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

app.get('/getAnnouncements', async (req, res) => {
    const received = await announcementsService.getAnnouncements();
    res.send(received);
});

app.post('/addAnnouncement', async (req, res) => {
    const received = await announcementsService.addAnnouncement(req.body);
    res.send(received);
});

app.post('/getSettings', async (req, res) => {
    const received = await userService.getStudentDataByID(req.body);
    res.send(received);
});

app.post('/updateSettings', async (req, res) => {
    const received = await userService.updateStudentInformation(req.body);
    res.send(received);
});

app.post('/updatePassword', async (req, res) => {
    const received = await userService.updateStudentPassword(req.body);
    res.send(received);
});

app.post('/get-weekend', async (req, res) => {
    const received = await weekendService.getStudentWeekendDetails(req.body);
    res.send(received);
});

app.post('/updateWeekend', async (req, res) => {
    const received = await weekendService.updateWeekendForStudent(req.body);
    res.send(received);
});

app.post('/get-week', async (req, res) => {
    const received = await weekdayService.getStudentWeekdayDetails(req.body);
    res.send(received);
});

app.post('/updateWeekend', async (req, res) => {
    const received = await weekdayService.updateWeekdayForStudent(req.body);
    res.send(received);
});
