import * as functions from 'firebase-functions';
import * as express from 'express';
const cors = require('cors');
import * as userService from './services/user.service';

const app = express();
app.use(cors());
exports.app = functions.https.onRequest(app);

app.get('/testing', (req, res) => {
    console.log("success con");
    let success = true;
    res.send({success});
});

app.get('/testing2', (req, res) => {
    console.log("success con");
    let success = true;
    res.send({success, message: "Nice"});
});

app.post('/login', (req, res) => {
    const result = userService.login(req.body);
    res.send({result});
});
