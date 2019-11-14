import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { StudentAccountInformation } from '../../../../../functions/src/models/nonnie.model';
import { BedieningTableModel } from '../../../../../functions/src/models/bediening-table.enum';
import { bedieningTables } from '../../../../../functions/src/constants/bediening-tables.constant';
import { StudentUpdateForNonnieModel } from '../../../../../functions/src/models/student.model';

@Component({
  selector: 'page-verify-edit',
  templateUrl: 'verify-edit.html',
})
export class VerifyEditPage {

	account: StudentAccountInformation;
	information:any;
	bedieningTableID:any;
	semi:any;

    tables: BedieningTableModel[] = bedieningTables;
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
		this.bedieningTableID = this.account.bedieningTable;
		this.semi = this.account.isSemi;
	}

	public submit(value: any)
	{
		let jsonSend: StudentUpdateForNonnieModel = {
			studentID: this.account.studentID,
			bedieningTable: value.table,
			isSemi: value.semi
		};

		this.viewCtrl.dismiss(jsonSend);
	}

	public cancel()
    {
        this.account = this.navParams.get('account');

        this.viewCtrl.dismiss(null);
    }
}
