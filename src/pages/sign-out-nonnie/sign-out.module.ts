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
})
export class SignOutPageModule {}
