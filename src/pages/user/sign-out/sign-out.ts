import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { GlobalProvider } from "../../../providers/global/global";
import { Http } from '../../../http-api';
import { handleError } from '../../../app-functions';
import { WeekdayModel, WeekdaySignInStatus, WeekdayMealDetail } from '../../../../functions/src/models/weekday.model'
import { UserIdentificationModel } from '../../../../functions/src/models/user-identification.model';

@Component({
	selector: 'page-sign-out',
	templateUrl: 'sign-out.html',
})
export class SignOutPage {

	meals: any;
	WeekdaySignInStatus = WeekdaySignInStatus;
	constructor(public navCtrl: NavController, public global: GlobalProvider, public http: Http, public toastCtrl: ToastController) {
		this.loadSlotValues();
	}

	public loadSlotValues() {
		let reqSend: UserIdentificationModel = new UserIdentificationModel(this.global.myUsrID);
		this.http.post('/get-week', reqSend).subscribe(data => {
				var jsonResp: WeekdayMealDetail[] = JSON.parse(data.text());
				this.meals = jsonResp;
			}, (error) => {
				handleError(this.navCtrl, error, this.toastCtrl);
			}
		);
	}

	public updateSlot(meal) {
		meal.status = ++meal.status % 3;

		let reqSend: WeekdayModel = {
			student: this.global.myUsrID,
			mondayLunch: this.meals[0].status,
			mondayDinner: this.meals[1].status,
			tuesdayLunch: this.meals[2].status,
			tuesdayDinner: this.meals[3].status,
			wednesdayLunch: this.meals[4].status,
			wednesdayDinner: this.meals[5].status,
			thursdayLunch: this.meals[6].status,
			thursdayDinner: this.meals[7].status,
			fridayLunch: this.meals[8].status
		};
		this.http.post('/updateWeeklySignOut', reqSend).subscribe(data => { 

			}, (error) => {
				handleError(this.navCtrl, error, this.toastCtrl);
			}
		);
	}

}
