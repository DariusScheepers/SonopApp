import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { FormGroup, FormControl} from '@angular/forms';
//import { HomePage } from '../home/home';
import { Http } from '../../http-api';
import { AnnouncementsPage } from '../announcements/announcements';
import { RegisterPage } from '../register/register';
import { GlobalProvider } from "../../providers/global/global";
import { presentToast, handleError } from '../../app-functions';
import { LoginNonniePage } from '../login-nonnie/login';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user: any;
  splashScreenReady: any = false;
  splashScreenVisibility: any = "hidden";
  splashScreenOn: any = true;
  splashScreenOnLength: any = 4500;
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public http: Http, public global: GlobalProvider) {
    this.user = new FormGroup({
      studentNumber: new FormControl()
      });
  }


  public splashScreenLoaded()
  {
    this.splashScreenReady = true;
    this.splashScreenVisibility = "visible";
    setTimeout(() => {
      this.splashScreenOn = false;
    }, this.splashScreenOnLength);
  }

  public login(value: any)
  {
    if (value.studentNumber.length < 8) {
      presentToast(this.toastCtrl, 'Student number is too short');
      return;
    } else if (value.studentNumber.length > 8) {
      presentToast(this.toastCtrl, 'Student number is too long');
      return;
    }

    var jsonArr = {
      studentNumber : ""
    };
    jsonArr.studentNumber = value.studentNumber;

	this.http.post("/login", jsonArr).subscribe
	(
		(data) =>
		{      
			var jsonResp = JSON.parse(data.text());
			if (jsonResp.JSONRes.success)
			{
        if (jsonResp.JSONRes.verified)
        {
          presentToast(this.toastCtrl,"Logged in!");
          this.global.myUsrID = jsonResp.JSONRes.usrID;
          this.global.mySurname = jsonResp.JSONRes.surname;
          this.global.isHK = jsonResp.JSONRes.isHK;
          if (jsonResp.JSONRes.isTheBestCoder)
            this.global.isHK = true;
          
          this.navCtrl.setRoot(AnnouncementsPage);
        }
        else
          presentToast(this.toastCtrl,"Your account has not yet been verified. Please try again later.");
			}
			else
			{
				presentToast(this.toastCtrl,"Invalid Login. Try Again.");
			}
		},
		(error) =>
		{
			handleError(this.navCtrl,error,this.toastCtrl);         
		}
	);
  }

  public openRegister()
  {
	  this.navCtrl.push(RegisterPage);
  }

  public goToNonnieLogin()
  {
    this.navCtrl.push(LoginNonniePage);
  }
}
