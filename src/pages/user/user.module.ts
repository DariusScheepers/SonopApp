
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicApp, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http } from '../../http-api';
import { StatusBar } from '@ionic-native/status-bar';

import { LoginPage } from '../login/login';
import { RegisterPage } from './register/register';
import { AnnouncementsPage } from './announcements/announcements';
import { AnnouncementsAddPage } from './announcements/announcements-add/announcements-add';
import { WeekendPage } from './weekend/weekend';
import { SignOutPage } from './sign-out/sign-out';
import { SettingsPage } from './settings/settings';
import { GlobalProvider } from "../../providers/global/global";
import { SplashScreen } from "@ionic-native/splash-screen";

@NgModule({
    declarations: [
        LoginPage,
        AnnouncementsPage,
        AnnouncementsAddPage,
        RegisterPage,
        WeekendPage,
        SignOutPage,
        SettingsPage,   
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpModule,
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        LoginPage,
        AnnouncementsPage,
        AnnouncementsAddPage,
        RegisterPage,
        WeekendPage,
        SignOutPage,
        SettingsPage,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        Http,
        GlobalProvider,
    ]
  })
export class UserModule {}