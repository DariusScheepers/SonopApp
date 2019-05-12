import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WeekendNonniePage } from './weekend';

@NgModule({
  declarations: [
    WeekendNonniePage,
  ],
  imports: [
    IonicPageModule.forChild(WeekendNonniePage),
  ],
})
export class WeekendPageModule {}
