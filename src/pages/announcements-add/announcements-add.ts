import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, ToastController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { Http } from '../../http-api';
import { GlobalProvider } from "../../providers/global/global";
import { presentToast } from '../../app-functions';

@IonicPage()
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

	public addAnnouncement(value:any)
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

        let jsonArr = {
            title : value.title,
            message : value.message,
            id : this.global.myUsrID,
            priority: this.priorityMessage
        };
		
		this.newAnn.reset();
        this.viewCtrl.dismiss(jsonArr);

	}
}
