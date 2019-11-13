import { TabsPage } from '../nonnie/tabs/tabs';
import { LoginNonniePage } from '../nonnie/login-nonnie/login';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicApp, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http } from '../../http-api';
import { StatusBar } from '@ionic-native/status-bar';
import { VerifyPageModule } from './verify/verify.module';
import { SignOutPageModule } from './sign-out-nonnie/sign-out.module';
import { WeekendPageModule } from './weekend-nonnie/weekend.module';

@NgModule({
    declarations: [  
        TabsPage,
        LoginNonniePage,
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpModule,
        VerifyPageModule,
        WeekendPageModule,
        SignOutPageModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        TabsPage,
        LoginNonniePage,
    ],
    providers: [
        StatusBar,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        Http
    ]
  })
  export class NonnieModule {}