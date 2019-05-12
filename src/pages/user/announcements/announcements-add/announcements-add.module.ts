import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnnouncementsAddPage } from './announcements-add';

@NgModule({
  declarations: [
    AnnouncementsAddPage,
  ],
  imports: [
    IonicPageModule.forChild(AnnouncementsAddPage),
  ],
})
export class AnnouncementsAddPageModule {}
