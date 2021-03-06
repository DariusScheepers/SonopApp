import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { GlobalProvider } from "../../../providers/global/global";
import { Http } from '../../../http-api';
import { handleError, presentLongToast } from '../../../app-functions';
import { UserIdentificationModel } from '../../../../functions/src/models/user-identification.model';
import { WeekendModel } from '../../../../functions/src/models/weekend.model';
import { weekendSignInDeadline } from '../../../../functions/src/constants/mealDeadlines.constant';

@Component({
	selector: 'page-weekend',
	templateUrl: 'weekend.html'
})
export class WeekendPage {

	weekendSignInOpen: boolean = true;
	meals: any;
	constructor(public navCtrl: NavController, public global: GlobalProvider, public http: Http, public toastCtrl: ToastController) {
		this.checkIfWeekendOpen();
		this.loadSlotValues();
	}

	public checkIfWeekendOpen() {
		let today = new Date();
		if ((today.getDay() == weekendSignInDeadline.friday && today.getHours() > weekendSignInDeadline.fridayHour)
			|| today.getDay() >= weekendSignInDeadline.saturday
			|| today.getDay() == weekendSignInDeadline.sunday) {
				this.weekendSignInOpen = false;
			}
	}

	public loadSlotValues() {
		let reqSend: UserIdentificationModel = new UserIdentificationModel(this.global.myUsrID);
		this.http.post('/get-weekend', reqSend).subscribe(data => {
				let jsonResp: WeekendModel[] = JSON.parse(data.text());
				this.meals = jsonResp;
			}, (error) => {
				handleError(this.navCtrl, error, this.toastCtrl);
			}
		);
	}

	public updateSlot(meal) {
		if (!this.weekendSignInOpen) {
			presentLongToast(this.toastCtrl, `Sign in for the weekend has closed`);
			return;
		}
		else {
			meal.status = !meal.status;

			let reqSend: WeekendModel = {
				student: this.global.myUsrID,
				fridayDinner: this.meals[0].status,
				saturdayBrunch: this.meals[1].status,
				saturdayDinner: this.meals[2].status,
				sundayBreakfast: this.meals[3].status,
				sundayLunch: this.meals[4].status,
				sundayDinner: this.meals[5].status
			}
			this.http.post('/updateWeekend', reqSend).subscribe(data => {

				}, (error) => {
					handleError(this.navCtrl, error, this.toastCtrl);
				}
			);
		}
	}
}
