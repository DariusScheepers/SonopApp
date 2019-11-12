import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { GlobalProvider } from "../../../providers/global/global";
import { Http } from '../../../http-api';
import { FormGroup, FormControl } from '@angular/forms';
import { presentToast, handleError, presentLongToast } from '../../../app-functions';
import { UserIdentificationModel } from '../../../../functions/src/models/user-identification.model';
import { StudentModel, StudentUpdateModel, StudentUpdatePasswordModel } from '../../../../functions/src/models/student.model';
import { SuccessResponseModel } from '../../../../functions/src/models/success-response.model'
import { BedieningTableModel } from '../../../../functions/src/models/bediening-table.enum';
import { bedieningTables } from '../../../../functions/src/constants/bediening-tables.constant'

@Component({
	selector: 'page-settings',
	templateUrl: 'settings.html',
})
export class SettingsPage {

	settings: any;
	bedieningTableID: any;
	semi: any;
	emailAddress: any;
	editPasswordMode: boolean = false;
	tables: BedieningTableModel[] = bedieningTables;
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

	public loadCurrentTable() {
		let jsonSend: UserIdentificationModel = new UserIdentificationModel(this.global.myUsrID);
		this.http.post('/getSettings', jsonSend).subscribe(data => {
				let jsonResp: StudentModel = JSON.parse(data.text());

				this.bedieningTableID = jsonResp.bedieningTable;
				this.semi = jsonResp.isSemi;
				this.emailAddress = jsonResp.email;
			}, (error) => {
				handleError(this.navCtrl, error, this.toastCtrl);
			}
		)
	}

	public updateInformation(value: any) {
		let jsonSend: StudentUpdateModel = {
			studentID: this.global.myUsrID,
			bedieningTable: value.table,
			isSemi: value.semi,
			email: value.email
		}

		if (this.editPasswordMode && value.newpassword != null || value.newpassword != "") {
			if (value.newpassword != value.confirmpassword) {
				presentToast(this.toastCtrl, "Please ensure that your passwords match.");
				return false;
			}
		}

		this.http.post('/updateSettings', jsonSend).subscribe(data => {
			presentToast(this.toastCtrl, "Updated Information!");
			if (this.editPasswordMode) {
				let jsonSend: StudentUpdatePasswordModel =
				{
					studentID: this.global.myUsrID,
					oldPassword: value.oldpassword,
					newPassword: value.newpassword
				};

				this.http.post('/updatePassword', jsonSend).subscribe(data => {
					var jsonResp: SuccessResponseModel = JSON.parse(data.text());
					if (jsonResp.success) {
						presentLongToast(this.toastCtrl, "Updated Password!");
						this.editPasswordMode = false;
					}
					else {
						presentToast(this.toastCtrl, "Old Password is incorrect. Please try again.");
						return false;
					}
				},
				(error) => {
					handleError(this.navCtrl, error, this.toastCtrl);
				})
			}
		}, (error) => {
			handleError(this.navCtrl, error, this.toastCtrl);
		})
	}
}
