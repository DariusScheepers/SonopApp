
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicApp, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http, BibleVerseAPI } from '../../http-api';
import { StatusBar } from '@ionic-native/status-bar';

import { LoginPage } from '../login/login';
import { RegisterPage } from './register/register';
import { GlobalProvider } from "../../providers/global/global";
import { SplashScreen } from "@ionic-native/splash-screen";
import { AnnouncementsPage } from './announcements/announcements';
import { AnnouncementsAddPage } from './announcements/announcements-add/announcements-add';
import { SignOutPageModule } from './sign-out/sign-out.module';
import { SettingsPageModule } from './settings/settings.module';
import { WeekendPageModule } from './weekend/weekend.module';

@NgModule({
    declarations: [
        LoginPage,
        RegisterPage,
        AnnouncementsPage,
        AnnouncementsAddPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpModule,
        SignOutPageModule,
        SettingsPageModule,
        WeekendPageModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        LoginPage,
        RegisterPage,
        AnnouncementsPage,
        AnnouncementsAddPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        Http,
        BibleVerseAPI,
        GlobalProvider,
    ]
  })
export class UserModule {}