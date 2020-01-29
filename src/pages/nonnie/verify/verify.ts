import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController, ModalController } from 'ionic-angular';
import { Http } from '../../../http-api';
import { presentToast, handleError } from '../../../app-functions';
import { VerifyEditPage } from './verify-edit/verify-edit';
import { VerifyEditWeekendPage } from './verify-edit-weekend/verify-edit-weekend';
import { StudentAccountInformation } from '../../../../functions/src/models/nonnie.model';
import { UserIdentificationModel } from '../../../../functions/src/models/user-identification.model';
import { LoginPage } from '../../login/login';

@Component({
	selector: 'page-verify',
	templateUrl: 'verify.html',
})
export class VerifyPage {

	unverifiedAccounts:any;
	verifiedAccounts:any;
	account:any;
	constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController,
			public http: Http, public alertCtrl: AlertController, public modalCtrl: ModalController) {
		this.refresh();
	}

	public refresh()
	{
		this.loadUnverifiedAccounts();
		this.loadVerifiedAccounts();
	}

	public loadUnverifiedAccounts()
	{
		this.unverifiedAccounts = [];
		this.http.get('/getUnverifiedAccounts').subscribe
		(
			(data) =>
			{
				let jsonResp: StudentAccountInformation = JSON.parse(data.text());
				this.unverifiedAccounts = jsonResp;
			},
			(error) =>
			{
				handleError(this.navCtrl,error,this.toastCtrl);
			}
		)
	}

	public loadVerifiedAccounts()
	{
		this.unverifiedAccounts = [];
		this.http.get('/getVerifiedAccounts').subscribe
		(
			(data) =>
			{
				let jsonResp: StudentAccountInformation = JSON.parse(data.text());
				this.verifiedAccounts = jsonResp;
			},
			(error) =>
			{
				handleError(this.navCtrl,error,this.toastCtrl);
			}
		)
	}

	public verifyAccount(account: StudentAccountInformation)
	{
		let reqSend = {
			id: account.studentID
		};

		this.http.post('/acceptAccount', reqSend).subscribe
		(
			(data) =>
			{
				this.refresh();
				presentToast(this.toastCtrl,"Account Accepted");
			},
			(error) =>
			{
				handleError(this.navCtrl, error, this.toastCtrl);				
			}
		)
	}

	public discardAccount(account: StudentAccountInformation)
	{
		let reqSend: UserIdentificationModel = {
			id: account.studentID
		};
		
		this.http.post('/discardAccount', reqSend).subscribe
		(
			(data) =>
			{
				this.refresh();
				presentToast(this.toastCtrl,"Account Discarded");
			},
			(error) =>
			{
				handleError(this.navCtrl, error, this.toastCtrl);
			}
		)
	}

	public deleteAccount(account: StudentAccountInformation)
	{
		let reqSend: UserIdentificationModel = {
			id: account.studentID
		};

		this.http.post('/deleteAccount', reqSend).subscribe
		(
			(data) =>
			{
				this.refresh();
				presentToast(this.toastCtrl,"Account Deleted");
			},
			(error) =>
			{
				handleError(this.navCtrl, error, this.toastCtrl);
			}
		);
	}

	public presentDeleteConfirm(account: StudentAccountInformation) {
        let alert = this.alertCtrl.create({
            title: 'Delete',
            message: 'Are you sure you want to delete this account?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {                    
                    }
                },
                {
                    text: 'Delete',
                    handler: () => {
                        this.deleteAccount(account);
                    }
                }
            ]
        });
        alert.present();
	}
	
	public editAccount(account: StudentAccountInformation)
	{
		let addModal = this.modalCtrl.create(VerifyEditPage, {'account': account});
        addModal.onDidDismiss(result => {
            if (result)
            {
                this.http.post('/updateAccountInformation', result).subscribe
				(
					(data) =>
					{
						presentToast(this.toastCtrl, 'Successfully Submitted.');
						this.refresh();
					},
					(error) =>
					{
						handleError(this.navCtrl,error,this.toastCtrl);
					}
				)
            }
        });
        addModal.present();
	}

	public editWeekend(account)
	{
		let addModal = this.modalCtrl.create(VerifyEditWeekendPage, {'account': account});
        addModal.onDidDismiss(result => {});
        addModal.present();
	}

	public back(){
		this.navCtrl.setRoot(LoginPage);
		let t = document.querySelectorAll(".show-tabbar");
		if(t != null){
			console.log("clearing");
			Object.keys(t).map((key) => {
				t[key].style.display = 'none';
			});
		}else console.log("null");
	}
}