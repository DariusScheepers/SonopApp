import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Http } from '../../../http-api';
import * as papa from 'papaparse';
import { handleError } from '../../../app-functions';
import { WeekdaySignInStatus } from '../../../../functions/src/models/weekday.model';

@Component({
	selector: 'page-sign-out',
	templateUrl: 'sign-out.html',
})
export class SignOutNonniePage {

	lunchMeal: any;
	lunchMealStatus: any;
	dinnerMeal: any;
	dinnerMealStatus: any;
	seatingMapList: any = [];
	lunchCount: any;
	dinnerCount: any;
	WeekdaySignInStatus = WeekdaySignInStatus;

	showLoading: boolean = true;

	constructor(public navCtrl: NavController, public http: Http, public toastCtrl: ToastController) {
		this.getCurrentSignOut();
	}

	public getCurrentSignOut() {
		this.showLoading = true;
		this.http.get('/currentSignInList').subscribe(data => {
			this.deleteSeatingMapList();
			this.seatingMapList = [];
			this.lunchCount = 0;
			this.dinnerCount = 0;
			let jsonResp = JSON.parse(data.text());
			this.lunchMeal = jsonResp.lunchMeal;
			this.dinnerMeal = jsonResp.dinnerMeal;
			this.lunchMealStatus = jsonResp.lunchOpenStatus;
			this.dinnerMealStatus = jsonResp.dinnerMealStatus;
			for (let element of jsonResp.seatingMap) {
				this.seatingMapList.push(element);
				if (element[2] == 2)
					this.lunchCount++;
				if (element[3] == 2)
					this.dinnerCount++;
			}
			this.showLoading = false;
		}, (error) => {
			this.showLoading = false;
			handleError(this.navCtrl, error, this.toastCtrl);
		})
	}

	public downloadCSV() {
		var csvHeaderA = ["Table", "Student", this.lunchMeal, this.dinnerMeal];

		let csv = papa.unparse({
			fields: csvHeaderA,
			data: this.seatingMapList
		});

		var blob = new Blob([csv]);
		var a = window.document.createElement("a");
		a.href = window.URL.createObjectURL(blob);
		var today = new Date();
		a.download = today.getDate() + "-" + today.getMonth() + " Sign In List.csv";
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	}

	public refresh() {
		this.getCurrentSignOut();
	}

	deleteSeatingMapList() {
		if (this.seatingMapList && this.seatingMapList.length > 0) {
			this.seatingMapList.forEach(seat => {
				seat = [];
			});
		}
	}
}
