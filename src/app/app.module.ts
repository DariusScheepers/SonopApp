import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Http } from '../http-api';
import { HttpModule} from '@angular/http';
import { HTTP } from '@ionic-native/http';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GlobalProvider } from '../providers/global/global';
import { NonnieModule } from '../pages/nonnie/nonnie.module';
import { UserModule } from '../pages/user/user.module';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    NonnieModule,
    UserModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
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
