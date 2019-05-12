/**
 * Sonop Naweek Inteken Lys
 */

import { HTTPUtils, HTTPObject } from '../utils/index'; 
import { HttpsFunction } from 'firebase-functions';

export class Register {
  
  httpUtils = new HTTPUtils();
  weeklyRegister?: HTTPObject;
  weekendRegister?: HTTPObject;

  constructor() {

    this.weeklyRegister = new HTTPObject('weekly-register');
    this.weekendRegister = new HTTPObject('weekend-register');
  }

  public async getWeeklyRegister(): Promise<HttpsFunction> {
    return this.httpUtils.get<HTTPObject>(this.weeklyRegister!);
  }

  public async getWeekendRegister(): Promise<HttpsFunction> {
    return this.httpUtils.get<HTTPObject>(this.weekendRegister!);
  }
}

// app.post('/get-week', async(req, res) => {});

// app.post('/updateWeeklySignOut', async(req, res) => { });

// app.get('/currentSignInList', async(req,res) => { });
