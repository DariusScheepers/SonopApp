import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { FormGroup, FormControl} from '@angular/forms';
import { Http } from '../../http-api';
import { TabsPage } from '../tabs/tabs';
import { presentToast, handleError } from '../../app-functions';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginNonniePage {

  nonnieLogin: any;
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public http: Http) {
    this.nonnieLogin = new FormGroup({
      pass: new FormControl()
    });
  }

  public loginNonnie(value: any)
  {
    if (value.pass == null)
    {
      presentToast(this.toastCtrl, "Please fill in password");
      return;
    }

    var jsonArr = {
      "password" : value.pass
    };

    this.http.post("/nonnie-login", jsonArr).subscribe
    (
      (data) =>
      {      
        var jsonResp = JSON.parse(data.text());
        if (jsonResp.JSONRes.success)
        {
          presentToast(this.toastCtrl, "Logged in!");
          this.navCtrl.setRoot(TabsPage);
        }
        else
        {
          presentToast(this.toastCtrl, "Invalid Login. Try Again.");
        }
      },
      (error) =>
      {
        handleError(this.navCtrl,error,this.toastCtrl);         
      }
    ); 
  }
}
