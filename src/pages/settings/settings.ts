import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { GlobalProvider } from "../../providers/global/global";
import { Http } from '../../http-api';
import { FormGroup, FormControl } from '@angular/forms';
import { presentToast, handleError, presentLongToast } from '../../app-functions';

@IonicPage()
@Component({
  	selector: 'page-settings',
  	templateUrl: 'settings.html',
})
export class SettingsPage {

	settings:any;
	bedieningTableID:any;
	semi:any;
	emailAddress:any;
	editPasswordMode:boolean = false;
	constructor(public navCtrl: NavController, public toastCtrl: ToastController, public navParams: NavParams, public global: GlobalProvider, public http: Http) {
		this.settings = new FormGroup({
			table: new FormControl(),
			semi: new FormControl(),
			oldpassword: new FormControl(),
			newpassword: new FormControl(),
			confirmpassword: new FormControl(),
			email: new FormControl()
		})
		this.loadCurrentTable();
	}

	public loadCurrentTable()
	{
		let jsonSend = {
			id: this.global.myUsrID
		};
		this.http.post('/getSettings', jsonSend).subscribe
		(
			(data) =>
			{
				var jsonResp = JSON.parse(data.text());
				this.bedieningTableID = jsonResp.result0.tblBedieningTable_talID;
				this.semi = jsonResp.result0.usrIsSemi;
				this.emailAddress = jsonResp.result0.usrEmailAddress;	
			},
			(error) =>
			{
				handleError(this.navCtrl,error,this.toastCtrl);
			}
		)
	}

	public updateInformation(value: any)
	{
		var jsonSend = {
			id: this.global.myUsrID,
			bedieningTableID: value.table,
			semi: value.semi,
			email: value.email
		}

		if (this.editPasswordMode && value.newpassword != null || value.newpassword != "")
		{
			if (value.newpassword != value.confirmpassword)
			{
				presentToast(this.toastCtrl,"Please ensure that your passwords match.");
				return false;
			}
		}
	
		this.http.post('/updateSettings', jsonSend).subscribe
		(
			() =>
			{			
				presentToast(this.toastCtrl,"Updated!");
				if (this.editPasswordMode)
				{
					let jsonSend =
					{
						id: this.global.myUsrID,
						oldpassword: value.oldpassword,
						newpassword: value.newpassword
					};
					
					this.http.post('/updatePassword',jsonSend).subscribe
					(
						(data) =>
						{
							var jsonResp = JSON.parse(data.text());
							if (jsonResp.jsonRes.success)
							{
								presentLongToast(this.toastCtrl,"Updated Password!");
								this.editPasswordMode = false;
							}
							else
							{
								presentToast(this.toastCtrl,"Old Password is incorrect. Please try again.");
								return false;
							}
						},
						(error) =>
						{
							handleError(this.navCtrl,error,this.toastCtrl);
						}
					)
				}
			},
			(error) =>
			{
				handleError(this.navCtrl, error, this.toastCtrl);
			}
		)
	}
}
