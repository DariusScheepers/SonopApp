import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Http } from '../../http-api';
import { presentToast, handleError } from '../../app-functions';

@IonicPage()
@Component({
  selector: 'page-verify-edit-weekend',
  templateUrl: 'verify-edit-weekend.html',
})
export class VerifyEditWeekendPage {

	account: any;
	meals:any;
	constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, 
			public toastCtrl: ToastController, public viewCtrl: ViewController) {
		this.loadSlotValues();	
	}

	public loadSlotValues()
	{
		this.account = this.navParams.get('account');
		let reqSend = {
			id: this.account.usrID
		}
		this.http.post('/get-weekend', reqSend).subscribe
		( // 1 represents signed in
			(data) =>
			{
				var jsonResp = JSON.parse(data.text());
				this.meals = jsonResp.JSONRes;
			},
			(error) =>
			{
				handleError(this.navCtrl, error, this.toastCtrl);
			}
		);
	}

	public updateSlot(meal)
	{
		meal.status = !meal.status;

		let reqSend = {
			id: this.account.usrID,
			wsiFridayDinner: this.meals[0].status,
			wsiSaturdayBrunch: this.meals[1].status,
			wsiSaturdayDinner: this.meals[2].status,
			wsiSundayBreakfast: this.meals[3].status,
			wsiSundayLunch: this.meals[4].status,
			wsiSundayDinner: this.meals[5].status
		}
		this.http.post('/updateWeekend', reqSend).subscribe
		(
			(data) =>
			{},
			(error) =>
			{
				handleError(this.navCtrl, error, this.toastCtrl);
			}
		);
	}

	public cancel()
    {
        this.viewCtrl.dismiss(null);
    }

}
