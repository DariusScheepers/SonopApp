
//#region nonnie
import { TabsPage } from '../nonnie/tabs/tabs';
import { LoginNonniePage } from '../nonnie/login-nonnie/login';
import { VerifyPage } from '../nonnie/verify/verify';
import { WeekendNonniePage } from '../nonnie/weekend-nonnie/weekend';
import { SignOutNonniePage } from '../nonnie/sign-out-nonnie/sign-out';
import { VerifyEditPage } from '../nonnie/verify/verify-edit/verify-edit';
import { VerifyEditWeekendPage } from '../nonnie/verify/verify-edit-weekend/verify-edit-weekend';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicApp, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http } from '../../http-api';
import { StatusBar } from '@ionic-native/status-bar';
//#endregion

@NgModule({
    declarations: [  
        TabsPage,
        LoginNonniePage,
        VerifyPage,
        WeekendNonniePage,
        SignOutNonniePage,
        VerifyEditPage,
        VerifyEditWeekendPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpModule,
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        TabsPage,
        LoginNonniePage,
        VerifyPage,
        WeekendNonniePage,
        SignOutNonniePage,
        VerifyEditPage,
        VerifyEditWeekendPage
    ],
    providers: [
        StatusBar,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        Http
    ]
  })
  export class NonnieModule {}