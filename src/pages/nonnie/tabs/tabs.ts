import { Component } from '@angular/core';
import { VerifyPage } from '../verify/verify';
import { WeekendNonniePage } from '../weekend-nonnie/weekend';
import { SignOutNonniePage } from '../sign-out-nonnie/sign-out';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = VerifyPage;
  tab2Root = WeekendNonniePage;
  tab3Root = SignOutNonniePage;

  constructor() {

  }
}
