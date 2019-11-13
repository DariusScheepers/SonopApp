import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VerifyPage } from './verify';
import { VerifyEditPage } from './verify-edit/verify-edit';
import { VerifyEditWeekendPage } from './verify-edit-weekend/verify-edit-weekend';

@NgModule({
  declarations: [
    VerifyPage,
    VerifyEditPage,
    VerifyEditWeekendPage
  ],
  imports: [
    IonicPageModule.forChild(VerifyPage),
  ],
  entryComponents: [
    VerifyPage,
    VerifyEditPage,
    VerifyEditWeekendPage
  ]
})
export class VerifyPageModule {}
