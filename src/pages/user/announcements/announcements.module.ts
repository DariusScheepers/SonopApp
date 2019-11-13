import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnnouncementsPage } from './announcements';
import { AnnouncementsAddPage } from './announcements-add/announcements-add';

@NgModule({
  declarations: [
    AnnouncementsPage,
    AnnouncementsAddPage
  ],
  imports: [
    IonicPageModule.forChild(AnnouncementsPage),
  ],
  entryComponents: [
    AnnouncementsPage,
    AnnouncementsAddPage
  ]
})
export class AnnouncementsPageModule {}
