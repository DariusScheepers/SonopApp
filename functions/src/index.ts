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
import { NonnieService } from "./services/nonnie.service";
import { EmailerService } from "./services/emailer.service";
import { SchedulerService } from "./services/scheduler.service";
import { emailNotificationTime } from "./constants/emailer.constant";
import { databaseToDefaultTime } from "./constants/setDatabaseToDefault.constant";

if (environment.development) {
    var serviceAccount = require("../../../CredentialKeys/diesonopapp-firebase-adminsdk-fbdey-98dca42058.json");
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://diesonopapp.firebaseio.com"
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
const nonnieService = new NonnieService(
    dataBaseService,
    userService,
    bedieningTableService,
    weekendService,
    weekdayService
);
const emailerService = new EmailerService(userService, weekendService);
const schedulerService = new SchedulerService(
    weekdayService,
    weekendService,
    announcementsService,
    emailerService
);

const app = express();
app.use(cors());
exports.app = functions.region('europe-west1').https.onRequest(app);

const scheduleNotificationForWeekendSignInRule = `${emailNotificationTime.minute} ${emailNotificationTime.hour} * ${databaseToDefaultTime.month} ${emailNotificationTime.dayOfWeek}`;
exports.scheduleNotificationForWeekendSignIn = functions.region('europe-west1').pubsub.schedule(scheduleNotificationForWeekendSignInRule)
    .timeZone('Africa/Johannesburg')
    .onRun(_ => {
        schedulerService.sendNotifications();
    }
);
const scheduleSetDatabaseToDefaultRule = `* ${databaseToDefaultTime.hour} * ${databaseToDefaultTime.month} ${databaseToDefaultTime.dayOfWeek}`
exports.scheduleSetDatabaseToDefault = functions.region('europe-west1').pubsub.schedule(scheduleSetDatabaseToDefaultRule)
    .timeZone('Africa/Johannesburg')
    .onRun(_ => {
        schedulerService.setDatabaseToDefault();
    }
);

//#region Temporary testing

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

//#endregion

//#region User front end requests

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

app.post('/updateWeeklySignOut', async (req, res) => {
    const received = await weekdayService.updateWeekdayForStudent(req.body);
    res.send(received);
});

//#endregion

//#region Nonnie front end requests

app.post('/nonnie-login', (req, res) => {
    const response = nonnieService.nonnieLogin(req.body);
    res.send(response);
});

app.get('/getUnverifiedAccounts', async (req, res) => {
    const response = await nonnieService.getUnverifiedAccounts();
    res.send(response);
});

app.get('/getVerifiedAccounts', async (req, res) => {
    const response = await nonnieService.getVerifiedAccounts();
    res.send(response);
});

app.post('/acceptAccount', async (req, res) => {
    const response = await nonnieService.verifyAccount(req.body);
    res.send(response);
});

app.post('/discardAccount', async (req, res) => {
    const response = await userService.deleteStudent(req.body);
    res.send(response);
});

app.post('/deleteAccount', async (req, res) => {
    const response = await userService.deleteStudent(req.body);
    res.send(response);
});

app.post('/updateAccountInformation', async (req, res) => {
    const response = await userService.updateInformationForNonnie(req.body);
    res.send(response);
});

app.get('/weekendSignInList', async (req, res) => {
    const response = await nonnieService.getStudentsPerTableForWeekend();
    res.send(response);
});

app.get('/currentSignInList', async (req, res) => {
    const response = await nonnieService.getStudentsPerTableForWeekday();
    res.send(response);
});

//#endregion