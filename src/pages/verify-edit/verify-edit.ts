import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-verify-edit',
  templateUrl: 'verify-edit.html',
})
export class VerifyEditPage {

	account:any;
	information:any;
	bedieningTableID:any;
	semi:any;
	constructor(public navCtrl: NavController, public navParams: NavParams,
			public toastCtrl: ToastController, public viewCtrl: ViewController) {
		this.information = new FormGroup({
			table: new FormControl(),
			semi: new FormControl()
		});
		this.loadAccountInformation();
	}

	public loadAccountInformation()
	{
		this.account = this.navParams.get('account');
		this.bedieningTableID = this.account.tblBedieningTable_talID;
		this.semi = this.account.usrIsSemi;
	}

	public submit(value: any)
	{
		let jsonSend = {
			id: this.account.usrID,
			bedieningTableID: value.table,
			semi: value.semi
		};

		this.viewCtrl.dismiss(jsonSend);
	}

	public cancel()
    {
        this.account = this.navParams.get('account');

        this.viewCtrl.dismiss(null);
    }
}
