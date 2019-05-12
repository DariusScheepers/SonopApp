import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WeekendPage } from './weekend';

@NgModule({
  declarations: [
    WeekendPage,
  ],
  imports: [
    IonicPageModule.forChild(WeekendPage),
  ],
})
export class WeekendPageModule {}
