import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { GlobalProvider } from "../../providers/global/global";
import { Http } from '../../http-api';
import { handleError, presentLongToast } from '../../app-functions';

@Component({
	selector: 'page-weekend',
	templateUrl: 'weekend.html'
})
export class WeekendPage {

	weekendSignInOpen:boolean = true;
	meals:any;
	constructor(public navCtrl: NavController, public global: GlobalProvider, public http: Http, public toastCtrl: ToastController) {
		this.checkIfWeekendOpen();
		this.loadSlotValues();
	}

	public checkIfWeekendOpen()
	{
		var today = new Date();
		if ((today.getDay() == 4 && today.getHours() > 15) || today.getDay() >= 5 || today.getDay() == 0)
			this.weekendSignInOpen = false;
	}

	public loadSlotValues()
	{
		let reqSend = {
			id: this.global.myUsrID
		}
		this.http.post('/get-weekend', reqSend).subscribe
		( // 1 represents signed in
			(data) =>
			{
				var jsonResp = JSON.parse(data.text());
				console.log('da', jsonResp.JSONRes);
				this.meals = jsonResp.JSONRes;
			},
			(error) =>
			{
				handleError(this.navCtrl, error, this.toastCtrl);
			}
		)
	}

	public updateSlot(meal)
	{
		if (!this.weekendSignInOpen) {
			presentLongToast(this.toastCtrl, `Sign in for the weekend has closed`);
			return;
		}
		else 
		{
			meal.status = !meal.status;
	
			let reqSend = {
				id: this.global.myUsrID,
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
			)			
		}
	}
}
