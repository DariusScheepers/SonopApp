import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignOutNonniePage } from './sign-out';

@NgModule({
  declarations: [
    SignOutNonniePage,
  ],
  imports: [
    IonicPageModule.forChild(SignOutNonniePage),
  ],
  entryComponents: [
    SignOutNonniePage
  ]
})
export class SignOutPageModule {}
