import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Http } from '../http-api';
import { HttpModule} from '@angular/http';
import { HTTP } from '@ionic-native/http';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { MyApp } from './app.component';

//#region user
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/user/register/register';
import { AnnouncementsPage } from '../pages/user/announcements/announcements';
import { AnnouncementsAddPage } from '../pages/user/announcements/announcements-add/announcements-add';
import { WeekendPage } from '../pages/user/weekend/weekend';
import { SignOutPage } from '../pages/user/sign-out/sign-out';
import { SettingsPage } from '../pages/user/settings/settings';
//#endregion

//#region nonnie
import { TabsPage } from '../pages/nonnie/tabs/tabs';
import { LoginNonniePage } from '../pages/nonnie/login-nonnie/login';
import { VerifyPage } from '../pages/nonnie/verify/verify';
import { WeekendNonniePage } from '../pages/nonnie/weekend-nonnie/weekend';
import { SignOutNonniePage } from '../pages/nonnie/sign-out-nonnie/sign-out';
import { VerifyEditPage } from '../pages/nonnie/verify/verify-edit/verify-edit';
import { VerifyEditWeekendPage } from '../pages/nonnie/verify/verify-edit-weekend/verify-edit-weekend';
//#endregion

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GlobalProvider } from '../providers/global/global';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    AnnouncementsPage,
    AnnouncementsAddPage,
    RegisterPage,
    WeekendPage,
    SignOutPage,
    SettingsPage,

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
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    AnnouncementsPage,
    AnnouncementsAddPage,
    RegisterPage,
    WeekendPage,
    SignOutPage,
    SettingsPage,

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
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Http,
    HTTP,
    GlobalProvider,
    LocalNotifications
  ]
})
export class AppModule {}
