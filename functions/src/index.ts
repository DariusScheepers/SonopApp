// TS-lint is being used which may be a casue for your errors
// as a result of your bad coding habits.
// Please see the link for how to resolve these issues.
//
// https://goo.gl/gg65KD

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

// import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { Register } from './register';

admin.initializeApp({

});

export default class App {

  register!: Register;

  constructor() {

    this.register = new Register();
  }
}

const app = new App();

exports.getWeekendRegister = app.register.getWeekendRegister();
