import { Component } from '@angular/core';
import { NavController, ToastController, ModalController } from 'ionic-angular';
import { Http } from '../../http-api';
import { GlobalProvider } from "../../providers/global/global";
import { FormGroup, FormControl } from '@angular/forms';
import { AnnouncementsAddPage } from '../announcements-add/announcements-add';
import { presentToast, handleError } from '../../app-functions';

@Component({
  selector: 'page-announcements',
  templateUrl: 'announcements.html'
})
export class AnnouncementsPage {

    announcements:any;
    announcement:any;

    votd:any;
    votdRef:any;

    newAnn:any;
    priorityMessage:boolean = false;

    constructor(public navCtrl: NavController, public toastCtrl: ToastController, public http: Http,
            public global: GlobalProvider, public modalCtrl: ModalController) {
        this.newAnn = new FormGroup({
            title: new FormControl(),
            message: new FormControl()
        });
        this.getBibleVerseOfTheDay();
        this.updateAnnouncements();
    }

    public getBibleVerseOfTheDay()
    {
        
        this.votd = {};
        this.http.get('/bibleVerse').subscribe
        (
            (data) =>
            {
                var jsonResp = JSON.parse(data.text());
                if (!jsonResp.bibleVerseJSON)
                    handleError(this.navCtrl,"Cant retreive Bible Verse of the Day",this.toastCtrl);
                else
                {
                    
                    this.votd = jsonResp.bibleVerseJSON.verse.details;
                    this.votdRef = jsonResp.bibleVerseJSON.verse.notice;
                }    
            },
            (error) =>
            {
                alert("Error: " + error);
            }
        ); 
    }

    public updateAnnouncements()
    {
        this.announcements = [];
        this.announcement = {};
        this.http.get('/getAnnouncements').subscribe
        (
            (data) =>
            {
                var jsonResp = JSON.parse(data.text());
                this.announcements = jsonResp.announcements;
                this.announcements.forEach(element => {
                    element.message = element.message .replace(/\n/g, '<br>');
                    
                    let date = new Date(element.date);
                    element.date = date.toLocaleString(); //date.toTimeString() + " - " + date.toDateString() + date.toISOString() + 
                });
            },
            (error) =>
            {
                handleError(this.navCtrl,error,this.toastCtrl);
            }
        )
    }

    public addAnnouncement()
    {
        let addModal = this.modalCtrl.create(AnnouncementsAddPage);
        addModal.onDidDismiss(result => 
        {
            if (result) {                        
                this.http.post("/addAnnouncement", result).subscribe
                (
                    (data) =>
                    {
                        presentToast(this.toastCtrl,"Successfully Submitted");
                        this.updateAnnouncements();
                    },
                    (error) =>
                    {
                        
                    }
                );            
            }
        });
        addModal.present();
    }

    public refresh()
    {
        this.updateAnnouncements();
    }
}