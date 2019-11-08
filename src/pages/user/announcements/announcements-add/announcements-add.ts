import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController, ToastController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { Http } from '../../../../http-api';
import { GlobalProvider } from "../../../../providers/global/global";
import { presentToast } from '../../../../app-functions';
import { AnnouncementModel } from '../../../../../functions/src/models/announcement.model';

@Component({
	selector: 'page-announcements-add',
	templateUrl: 'announcements-add.html',
})
export class AnnouncementsAddPage {

    priorityMessage:boolean = false;
	newAnn:any;
	constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, 
			public http: Http, public global: GlobalProvider, public viewCtrl: ViewController, public toastCtrl: ToastController) {
		this.newAnn = new FormGroup({
            title: new FormControl(),
            message: new FormControl()
        });
	}

	public cancel()
    {
        this.viewCtrl.dismiss(null);
    }

	public addAnnouncement(value: AnnouncementModel)
    {
		if (value.title == null || value.title == "")
        {
            presentToast(this.toastCtrl,"Please fill in title.");
            return false;
		}
		if (value.message == null || value.message == "")
        {
            presentToast(this.toastCtrl,"Please fill in message.");
            return false;
        }

        let newAnnouncement = new AnnouncementModel(
            value.title,
            value.message,
            this.priorityMessage,
            this.global.myUsrID.toString(),
        );
		
		this.newAnn.reset();
        this.viewCtrl.dismiss(newAnnouncement);

	}
}
