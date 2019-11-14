import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Http } from '../../../../http-api';
import { handleError } from '../../../../app-functions';
import { StudentAccountInformation } from '../../../../../functions/src/models/nonnie.model';
import { WeekendModel } from '../../../../../functions/src/models/weekend.model';
import { UserIdentificationModel } from '../../../../../functions/src/models/user-identification.model';

@Component({
  selector: 'page-verify-edit-weekend',
  templateUrl: 'verify-edit-weekend.html',
})
export class VerifyEditWeekendPage {

	account: StudentAccountInformation;
	meals:any;
	constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, 
			public toastCtrl: ToastController, public viewCtrl: ViewController) {
		this.loadSlotValues();	
	}

	public loadSlotValues()
	{
		this.account = this.navParams.get('account');
		let reqSend: UserIdentificationModel = {
			id: this.account.studentID
		}
		this.http.post('/get-weekend', reqSend).subscribe
		(
			(data) =>
			{
				let jsonResp: WeekendModel[] = JSON.parse(data.text());
				this.meals = jsonResp;
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

		let reqSend: WeekendModel = {
			student: this.account.studentID,
			fridayDinner: this.meals[0].status,
			saturdayBrunch: this.meals[1].status,
			saturdayDinner: this.meals[2].status,
			sundayBreakfast: this.meals[3].status,
			sundayLunch: this.meals[4].status,
			sundayDinner: this.meals[5].status
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
