webpackJsonp([7],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_user_announcements_announcements__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_user_weekend_weekend__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_user_sign_out_sign_out__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_user_settings_settings__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]; // LoginPage // HomePage
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Announcements', component: __WEBPACK_IMPORTED_MODULE_5__pages_user_announcements_announcements__["a" /* AnnouncementsPage */] },
            { title: 'Weekend Sign In', component: __WEBPACK_IMPORTED_MODULE_6__pages_user_weekend_weekend__["a" /* WeekendPage */] },
            { title: 'Weekly Sign Out', component: __WEBPACK_IMPORTED_MODULE_7__pages_user_sign_out_sign_out__["a" /* SignOutPage */] },
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_8__pages_user_settings_settings__["a" /* SettingsPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp-front-end\src\app\app.html"*/'<ion-menu [content]="content" side="right">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp-front-end\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_announcements_announcements__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_register_register__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global_global__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_functions__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__nonnie_login_nonnie_login__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { HomePage } from '../home/home';






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, toastCtrl, http, global) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.global = global;
        this.splashScreenReady = false;
        this.splashScreenVisibility = "hidden";
        this.splashScreenOn = true;
        this.splashScreenOnLength = 4500;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            studentNumber: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]()
        });
    }
    LoginPage.prototype.splashScreenLoaded = function () {
        var _this = this;
        this.splashScreenReady = true;
        this.splashScreenVisibility = "visible";
        setTimeout(function () {
            _this.splashScreenOn = false;
        }, this.splashScreenOnLength);
    };
    LoginPage.prototype.login = function (value) {
        var _this = this;
        if (value.studentNumber.length < 8) {
            Object(__WEBPACK_IMPORTED_MODULE_7__app_functions__["c" /* presentToast */])(this.toastCtrl, 'Student number is too short');
            return;
        }
        else if (value.studentNumber.length > 8) {
            Object(__WEBPACK_IMPORTED_MODULE_7__app_functions__["c" /* presentToast */])(this.toastCtrl, 'Student number is too long');
            return;
        }
        var jsonArr = {
            studentNumber: ""
        };
        jsonArr.studentNumber = value.studentNumber;
        this.http.post("/login", jsonArr).subscribe(function (data) {
            var jsonResp = JSON.parse(data.text());
            if (jsonResp.JSONRes.success) {
                if (jsonResp.JSONRes.verified) {
                    Object(__WEBPACK_IMPORTED_MODULE_7__app_functions__["c" /* presentToast */])(_this.toastCtrl, "Logged in!");
                    _this.global.myUsrID = jsonResp.JSONRes.usrID;
                    _this.global.mySurname = jsonResp.JSONRes.surname;
                    _this.global.isHK = jsonResp.JSONRes.isHK;
                    if (jsonResp.JSONRes.isTheBestCoder)
                        _this.global.isHK = true;
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__user_announcements_announcements__["a" /* AnnouncementsPage */]);
                }
                else
                    Object(__WEBPACK_IMPORTED_MODULE_7__app_functions__["c" /* presentToast */])(_this.toastCtrl, "Your account has not yet been verified. Please try again later.");
            }
            else {
                Object(__WEBPACK_IMPORTED_MODULE_7__app_functions__["c" /* presentToast */])(_this.toastCtrl, "Invalid Login. Try Again.");
            }
        }, function (error) {
            Object(__WEBPACK_IMPORTED_MODULE_7__app_functions__["a" /* handleError */])(_this.navCtrl, error, _this.toastCtrl);
        });
    };
    LoginPage.prototype.openRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__user_register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.goToNonnieLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__nonnie_login_nonnie_login__["a" /* LoginNonniePage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp-front-end\src\pages\login\login.html"*/'<ion-content>   \n\n    <div *ngIf="splashScreenOn" (click)="splashScreenOn = false">\n\n        <ion-spinner name="crescent" class="spinner" *ngIf="!splashScreenReady"></ion-spinner>\n\n        <img src="../../assets/imgs/Screenshot_20190106-103426.jpg" width="100%" max-height="100%" (load)="splashScreenLoaded();">\n\n    </div>\n\n    <div *ngIf="!splashScreenOn">\n\n        <ion-list>\n\n            <form (submit)="login(user.value)" [formGroup]="user">\n\n                <ion-list>\n\n                    <ion-item>\n\n                        <ion-label>\n\n                            Login\n\n                        </ion-label>                      \n\n                    </ion-item>                    \n\n                    <ion-item>\n\n                        <ion-label>\n\n                            <ion-icon name="person"></ion-icon>\n\n                        </ion-label>\n\n                        <ion-input formControlName="studentNumber" type="number" maxlength="8" placeholder="Student Number"></ion-input>\n\n                    </ion-item>\n\n                    <button ion-button outline round block type="submit" color="tertiary">Login</button>\n\n                </ion-list>\n\n            </form>\n\n            <ion-item>\n\n                <button ion-button block (click)="openRegister()">Need an Account?</button>\n\n            </ion-item>\n\n            <ion-item>\n\n                <button ion-button block style="background-color: salmon;" (click)="goToNonnieLogin()">Go To Nonnie Login</button>\n\n            </ion-item>\n\n        </ion-list>\n\n        <div style="display: flex; justify-content: center;">\n\n            <img src="../../assets/imgs/Stalle_large.jpg" width="90%" max-height="100%" height="100%">\n\n        </div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp-front-end\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__http_api__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_6__providers_global_global__["a" /* GlobalProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnouncementsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__announcements_add_announcements_add__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_functions__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AnnouncementsPage = /** @class */ (function () {
    function AnnouncementsPage(navCtrl, toastCtrl, http, global, modalCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.global = global;
        this.modalCtrl = modalCtrl;
        this.priorityMessage = false;
        this.newAnn = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormGroup */]({
            title: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](),
            message: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]()
        });
        this.getBibleVerseOfTheDay();
        this.updateAnnouncements();
    }
    AnnouncementsPage.prototype.getBibleVerseOfTheDay = function () {
        var _this = this;
        this.votd = {};
        this.http.get('/bibleVerse').subscribe(function (data) {
            var jsonResp = JSON.parse(data.text());
            if (!jsonResp.bibleVerseJSON)
                Object(__WEBPACK_IMPORTED_MODULE_6__app_functions__["a" /* handleError */])(_this.navCtrl, "Cant retreive Bible Verse of the Day", _this.toastCtrl);
            else {
                _this.votd = jsonResp.bibleVerseJSON.verse.details;
                _this.votdRef = jsonResp.bibleVerseJSON.verse.notice;
            }
        }, function (error) {
            alert("Error: " + error);
        });
    };
    AnnouncementsPage.prototype.updateAnnouncements = function () {
        var _this = this;
        this.announcements = [];
        this.announcement = {};
        this.http.get('/getAnnouncements').subscribe(function (data) {
            var jsonResp = JSON.parse(data.text());
            _this.announcements = jsonResp.announcements;
            _this.announcements.forEach(function (element) {
                element.message = element.message.replace(/\n/g, '<br>');
                var date = new Date(element.date);
                element.date = date.toLocaleString(); //date.toTimeString() + " - " + date.toDateString() + date.toISOString() + 
            });
        }, function (error) {
            Object(__WEBPACK_IMPORTED_MODULE_6__app_functions__["a" /* handleError */])(_this.navCtrl, error, _this.toastCtrl);
        });
    };
    AnnouncementsPage.prototype.addAnnouncement = function () {
        var _this = this;
        var addModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__announcements_add_announcements_add__["a" /* AnnouncementsAddPage */]);
        addModal.onDidDismiss(function (result) {
            if (result) {
                _this.http.post("/addAnnouncement", result).subscribe(function (data) {
                    Object(__WEBPACK_IMPORTED_MODULE_6__app_functions__["c" /* presentToast */])(_this.toastCtrl, "Successfully Submitted");
                    _this.updateAnnouncements();
                }, function (error) {
                });
            }
        });
        addModal.present();
    };
    AnnouncementsPage.prototype.refresh = function () {
        this.updateAnnouncements();
    };
    AnnouncementsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-announcements',template:/*ion-inline-start:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp-front-end\src\pages\user\announcements\announcements.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="refresh()" end>\n\n                <ion-icon name="refresh"></ion-icon>\n\n            </button>\n\n            <button ion-button icon-only *ngIf="global.isHK" (click)="addAnnouncement()">\n\n                <ion-icon name="add"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        <button ion-button menuToggle end>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Announcements</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n    \n\n<ion-content padding>\n\n\n\n    <h1>Welcome Meneer {{global.mySurname}}</h1>\n\n    <ion-card>\n\n        <ion-card-header>\n\n        </ion-card-header>\n\n        <ion-card-content text-wrap>\n\n            <ion-item>\n\n                <img item-start class="cardImage" src="../../assets/imgs/Garri Baldi.png" />\n\n                <p><i>{{votd.text}}</i>\n\n                    <br />- {{votd.reference}}\n\n                    <br />\n\n                    {{votdRef}}\n\n                </p>                \n\n            </ion-item>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    \n\n    <ion-list>\n\n        <ion-card class="announcement card" *ngFor="let announcement of announcements" color="primary">\n\n        <ion-card-header>  \n\n            <ion-item color="primary">\n\n                <h1 class="line-break">{{announcement.title}}</h1>\n\n            </ion-item>              \n\n        </ion-card-header>\n\n        <ion-card-content>   \n\n            <ion-item color="primary">          \n\n                <p>{{announcement.date}}</p> \n\n                <p>{{announcement.postedBy}}</p>  \n\n            </ion-item>\n\n            <ion-item>\n\n                <div class="line-break" [innerHTML]="announcement.message"></div>\n\n            </ion-item>             \n\n        </ion-card-content>\n\n        </ion-card>\n\n    </ion-list>\n\n    <p>All announcements will be wiped each Sunday at 17:00.</p>\n\n</ion-content>\n\n      '/*ion-inline-end:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp-front-end\src\pages\user\announcements\announcements.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__http_api__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], AnnouncementsPage);
    return AnnouncementsPage;
}());

//# sourceMappingURL=announcements.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyEditWeekendPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_functions__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VerifyEditWeekendPage = /** @class */ (function () {
    function VerifyEditWeekendPage(navCtrl, navParams, http, toastCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.loadSlotValues();
    }
    VerifyEditWeekendPage.prototype.loadSlotValues = function () {
        var _this = this;
        this.account = this.navParams.get('account');
        var reqSend = {
            id: this.account.usrID
        };
        this.http.post('/get-weekend', reqSend).subscribe(// 1 represents signed in
        function (data) {
            var jsonResp = JSON.parse(data.text());
            _this.meals = jsonResp.JSONRes;
        }, function (error) {
            Object(__WEBPACK_IMPORTED_MODULE_3__app_functions__["a" /* handleError */])(_this.navCtrl, error, _this.toastCtrl);
        });
    };
    VerifyEditWeekendPage.prototype.updateSlot = function (meal) {
        var _this = this;
        meal.status = !meal.status;
        var reqSend = {
            id: this.account.usrID,
            wsiFridayDinner: this.meals[0].status,
            wsiSaturdayBrunch: this.meals[1].status,
            wsiSaturdayDinner: this.meals[2].status,
            wsiSundayBreakfast: this.meals[3].status,
            wsiSundayLunch: this.meals[4].status,
            wsiSundayDinner: this.meals[5].status
        };
        this.http.post('/updateWeekend', reqSend).subscribe(function (data) { }, function (error) {
            Object(__WEBPACK_IMPORTED_MODULE_3__app_functions__["a" /* handleError */])(_this.navCtrl, error, _this.toastCtrl);
        });
    };
    VerifyEditWeekendPage.prototype.cancel = function () {
        this.viewCtrl.dismiss(null);
    };
    VerifyEditWeekendPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-verify-edit-weekend',template:/*ion-inline-start:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp-front-end\src\pages\nonnie\verify\verify-edit-weekend\verify-edit-weekend.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n	<ion-title>Edit Weekend Sign In</ion-title>\n\n	<ion-buttons start>\n\n		<button ion-button (click)="cancel()">\n\n			<ion-icon name="close"></ion-icon>\n\n		</button>\n\n	</ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<h1>Information regarding {{account.fullName}}</h1>\n\n	<ion-list>\n\n		<ion-card color="primary" *ngFor="let meal of meals" (click)="updateSlot(meal)">\n\n			<ion-card-content>   \n\n				<ion-item [style.background-color]="meal.status ? \'#119b05\' : \'#f53d3d\'">          \n\n					<ion-label style="color:white">{{meal.meal}} {{meal.date}}</ion-label>           \n\n				</ion-item>             \n\n			</ion-card-content>\n\n		</ion-card>\n\n	</ion-list>\n\n	<button ion-button outline round block (click)="cancel()">Done</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp-front-end\src\pages\nonnie\verify\verify-edit-weekend\verify-edit-weekend.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__http_api__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], VerifyEditWeekendPage);
    return VerifyEditWeekendPage;
}());

//# sourceMappingURL=verify-edit-weekend.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignOutNonniePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_papaparse__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_papaparse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_papaparse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_functions__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignOutNonniePage = /** @class */ (function () {
    function SignOutNonniePage(navCtrl, http, toastCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.seatingMapList = [];
        this.getCurrentSignOut();
    }
    SignOutNonniePage.prototype.getCurrentSignOut = function () {
        var _this = this;
        this.http.get('/currentSignInList').subscribe(function (data) {
            _this.seatingMapList = [];
            _this.lunchCount = 0;
            _this.dinnerCount = 0;
            var jsonResp = JSON.parse(data.text()).JSONRes;
            _this.lunchMeal = jsonResp.lunchMeal;
            _this.dinnerMeal = jsonResp.dinnerMeal;
            _this.lunchMealStatus = jsonResp.lunchOpenStatus;
            _this.dinnerMealStatus = jsonResp.dinnerMealStatus;
            for (var _i = 0, _a = jsonResp.seatingMap; _i < _a.length; _i++) {
                var element = _a[_i];
                _this.seatingMapList.push(element);
                if (element[2] == 2)
                    _this.lunchCount++;
                if (element[3] == 2)
                    _this.dinnerCount++;
            }
        }, function (error) {
            Object(__WEBPACK_IMPORTED_MODULE_4__app_functions__["a" /* handleError */])(_this.navCtrl, error, _this.toastCtrl);
        });
    };
    SignOutNonniePage.prototype.downloadCSV = function () {
        var csvHeaderA = ["Table", "Student", this.lunchMeal, this.dinnerMeal];
        var csv = __WEBPACK_IMPORTED_MODULE_3_papaparse__["unparse"]({
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
    };
    SignOutNonniePage.prototype.refresh = function () {
        this.getCurrentSignOut();
    };
    SignOutNonniePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-out',template:/*ion-inline-start:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp-front-end\src\pages\nonnie\sign-out-nonnie\sign-out.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<ion-title>Today\'s Sign In List</ion-title>\n\n		<ion-buttons end>\n\n			<button ion-button icon-only (click)="refresh()">\n\n				<ion-icon name="refresh"></ion-icon>\n\n			</button>\n\n			<button ion-button icon-only (click)="downloadCSV()">\n\n				<ion-icon name="download"></ion-icon>\n\n			</button>			\n\n		</ion-buttons>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<table border=1>\n\n		<tr>\n\n			<th width="20%">Table</th>\n\n			<th width="50%">Student</th>\n\n			<th [style.background-color]="lunchMealStatus == 0 ? \'#f53d3d\' : \'#119b05\'"><b>{{ lunchMeal }}</b></th>\n\n			<th [style.background-color]="dinnerMealStatus == 0 ? \'#f53d3d\' : \'#119b05\'"><b>{{ dinnerMeal }}</b></th>\n\n		</tr>\n\n		<tr *ngFor="let student of seatingMapList;">\n\n			<td *ngFor="let field of student;" [style.background-color]="field == 0 ? \'#FFFF00\' : (field == 1 ? \'#f53d3d\' : (field == 2 ? \'#119b05\' : \'#FFFFFF\'))">\n\n				<div *ngIf="field != 0 && field != 1 && field != 2">\n\n					{{ field }}\n\n				</div>	\n\n				<div *ngIf="field == 0 && field != 1 && field != 2">\n\n					Permanent Sign Out\n\n				</div>	\n\n				<div *ngIf="field != 0 && field == 1 && field != 2">\n\n					Signed Out\n\n				</div>\n\n				<div *ngIf="field != 0 && field != 1 && field == 2">\n\n					Signed In\n\n				</div>					\n\n			</td>\n\n		</tr>\n\n	</table>\n\n	<ion-label>Number of Students Signed In for Lunch: {{ lunchCount }}</ion-label>\n\n	<ion-label>Number of Students Signed In for Dinner: {{ dinnerCount }}</ion-label>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp-front-end\src\pages\nonnie\sign-out-nonnie\sign-out.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__http_api__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], SignOutNonniePage);
    return SignOutNonniePage;
}());

//# sourceMappingURL=sign-out.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_functions__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__verify_edit_verify_edit__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__verify_edit_weekend_verify_edit_weekend__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VerifyPage = /** @class */ (function () {
    function VerifyPage(navCtrl, navParams, toastCtrl, http, alertCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.refresh();
    }
    VerifyPage.prototype.refresh = function () {
        this.loadUnverifiedAccounts();
        this.loadVerifiedAccounts();
    };
    VerifyPage.prototype.loadUnverifiedAccounts = function () {
        var _this = this;
        this.unverifiedAccounts = [];
        this.http.get('/getUnverifiedAccounts').subscribe(function (data) {
            var jsonResp = JSON.parse(data.text());
            _this.unverifiedAccounts = jsonResp.result0;
        }, function (error) {
            Object(__WEBPACK_IMPORTED_MODULE_3__app_functions__["a" /* handleError */])(_this.navCtrl, error, _this.toastCtrl);
        });
    };
    VerifyPage.prototype.loadVerifiedAccounts = function () {
        var _this = this;
        this.unverifiedAccounts = [];
        this.http.get('/getVerifiedAccounts').subscribe(function (data) {
            var jsonResp = JSON.parse(data.text());
            _this.verifiedAccounts = jsonResp.result0;
        }, function (error) {
            Object(__WEBPACK_IMPORTED_MODULE_3__app_functions__["a" /* handleError */])(_this.navCtrl, error, _this.toastCtrl);
        });
    };
    VerifyPage.prototype.verifyAccount = function (account) {
        var _this = this;
        var reqSend = {
            id: account.usrID
        };
        this.http.post('/acceptAccount', reqSend).subscribe(function (data) {
            _this.refresh();
            Object(__WEBPACK_IMPORTED_MODULE_3__app_functions__["c" /* presentToast */])(_this.toastCtrl, "Account Accepted");
        }, function (error) {
            Object(__WEBPACK_IMPORTED_MODULE_3__app_functions__["a" /* handleError */])(_this.navCtrl, error, _this.toastCtrl);
        });
    };
    VerifyPage.prototype.discardAccount = function (account) {
        var _this = this;
        var reqSend = {
            id: account.usrID
        };
        this.http.post('/discardAccount', reqSend).subscribe(function (data) {
            _this.refresh();
            Object(__WEBPACK_IMPORTED_MODULE_3__app_functions__["c" /* presentToast */])(_this.toastCtrl, "Account Discarded");
        }, function (error) {
            Object(__WEBPACK_IMPORTED_MODULE_3__app_functions__["a" /* handleError */])(_this.navCtrl, error, _this.toastCtrl);
        });
    };
    VerifyPage.prototype.deleteAccount = function (account) {
        var _this = this;
        var reqSend = {
            id: account.usrID
        };
        this.http.post('/deleteAccount', reqSend).subscribe(function (data) {
            _this.refresh();
            Object(__WEBPACK_IMPORTED_MODULE_3__app_functions__["c" /* presentToast */])(_this.toastCtrl, "Account Deleted");
        }, function (error) {
            Object(__WEBPACK_IMPORTED_MODULE_3__app_functions__["a" /* handleError */])(_this.navCtrl, error, _this.toastCtrl);
        });
    };
    VerifyPage.prototype.presentDeleteConfirm = function (account) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Delete',
            message: 'Are you sure you want to delete this account?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.deleteAccount(account);
                    }
                }
            ]
        });
        alert.present();
    };
    VerifyPage.prototype.editAccount = function (account) {
        var _this = this;
        var addModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__verify_edit_verify_edit__["a" /* VerifyEditPage */], { 'account': account });
        addModal.onDidDismiss(function (result) {
            if (result) {
                _this.http.post('/updateAccountInformation', result).subscribe(function (data) {
                    Object(__WEBPACK_IMPORTED_MODULE_3__app_functions__["c" /* presentToast */])(_this.toastCtrl, 'Successfully Submitted.');
                    _this.refresh();
                }, function (error) {
                    Object(__WEBPACK_IMPORTED_MODULE_3__app_functions__["a" /* handleError */])(_this.navCtrl, error, _this.toastCtrl);
                });
            }
        });
        addModal.present();
    };
    VerifyPage.prototype.editWeekend = function (account) {
        var addModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__verify_edit_weekend_verify_edit_weekend__["a" /* VerifyEditWeekendPage */], { 'account': account });
        addModal.onDidDismiss(function (result) { });
        addModal.present();
    };
    VerifyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-verify',template:/*ion-inline-start:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp-front-end\src\pages\nonnie\verify\verify.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Accounts</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="refresh()">Refresh</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <h1>\n\n    Verify Accounts\n\n  </h1>\n\n  <ion-list>\n\n    <ion-card class="account card" *ngFor="let account of unverifiedAccounts" color="primary" [style.background-color]="account.usrIsHK ? \'#f53d3d\' : \'#488aff\'">\n\n      <ion-card-header>  \n\n          <ion-item color="primary">\n\n              <ion-label item-start><h1>{{account.fullName}}</h1></ion-label>\n\n              <button ion-button item-end (click)="verifyAccount(account)">Verify</button>\n\n              <button ion-button item-end (click)="discardAccount(account)">Discard</button>\n\n          </ion-item>              \n\n      </ion-card-header>\n\n      <ion-card-content>   \n\n          <ion-item color="primary">          \n\n            <ion-label>Username: {{account.usrUsername}}</ion-label>\n\n          </ion-item>\n\n          <ion-item color="primary">\n\n            <ion-label>Email address: {{account.usrEmailAddress}}</ion-label> \n\n          </ion-item>\n\n          <ion-item color="primary">\n\n            <ion-label>Bediening Table: {{account.talName}}</ion-label> \n\n          </ion-item>\n\n          <ion-item *ngIf="account.usrIsHK" color="primary">\n\n            <ion-label>HK Member</ion-label>  \n\n          </ion-item>            \n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-list>\n\n\n\n  <h1>\n\n    Manage Accounts\n\n  </h1>\n\n  <ion-list>\n\n    <ion-card *ngFor="let account of verifiedAccounts" color="primary">\n\n      <ion-card-header>\n\n          <ion-item color="primary">\n\n            <ion-label item-start><h1>{{account.fullName}}</h1></ion-label>\n\n            <button ion-button item-end (click)="editAccount(account)">Edit</button>\n\n            <button ion-button item-end (click)="presentDeleteConfirm(account)">Delete</button>\n\n            <button ion-button item-end (click)="editWeekend(account)">Edit Weekend Sign In</button>\n\n          </ion-item> \n\n      </ion-card-header>\n\n      <ion-card-content>   \n\n        <ion-item color="primary">          \n\n          <ion-label>Username: {{account.usrUsername}}</ion-label>\n\n        </ion-item>\n\n        <ion-item color="primary">\n\n          <ion-label>Email address: {{account.usrEmailAddress}}</ion-label> \n\n        </ion-item>\n\n        <ion-item color="primary">\n\n          <ion-label>Bediening Table: {{account.talName}}</ion-label> \n\n        </ion-item>   \n\n        <ion-item color="primary">\n\n            <ion-label>Semi: {{account.usrIsSemi}}</ion-label> \n\n          </ion-item>            \n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp-front-end\src\pages\nonnie\verify\verify.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__http_api__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], VerifyPage);
    return VerifyPage;
}());

//# sourceMappingURL=verify.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VerifyEditPage = /** @class */ (function () {
    function VerifyEditPage(navCtrl, navParams, toastCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.information = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            table: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            semi: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]()
        });
        this.loadAccountInformation();
    }
    VerifyEditPage.prototype.loadAccountInformation = function () {
        this.account = this.navParams.get('account');
        this.bedieningTableID = this.account.tblBedieningTable_talID;
        this.semi = this.account.usrIsSemi;
    };
    VerifyEditPage.prototype.submit = function (value) {
        var jsonSend = {
            id: this.account.usrID,
            bedieningTableID: value.table,
            semi: value.semi
        };
        this.viewCtrl.dismiss(jsonSend);
    };
    VerifyEditPage.prototype.cancel = function () {
        this.account = this.navParams.get('account');
        this.viewCtrl.dismiss(null);
    };
    VerifyEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-verify-edit',template:/*ion-inline-start:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp-front-end\src\pages\nonnie\verify\verify-edit\verify-edit.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Edit Account</ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="cancel()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <h1>Information regarding {{account.fullName}}</h1>\n\n  <form (submit)="submit(information.value)" [formGroup]="information">\n\n    <ion-list>\n\n      <ion-item> \n\n        <ion-label floating>Your Bediening Table<span style="color:red">*</span></ion-label>\n\n        <ion-select formControlName="table" [(ngModel)]="bedieningTableID">\n\n          <ion-option value=1>HK</ion-option>\n\n          <ion-option value=2>Weste Senior</ion-option>\n\n          <ion-option value=3>Weste Junior</ion-option>\n\n          <ion-option value=4>Ooste Senior</ion-option>\n\n          <ion-option value=5>Ooste Junior</ion-option>\n\n          <ion-option value=6>Noorde Senior</ion-option>\n\n          <ion-option value=7>Noorde Junior</ion-option>\n\n          <ion-option value=8>Sentraal</ion-option>\n\n          <ion-option value=9>Senaat</ion-option>\n\n          <ion-option value=10>Verre Weste</ion-option>\n\n          <ion-option value=11>Eerste Jaar</ion-option>\n\n        </ion-select>        \n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Semi</ion-label>\n\n        <ion-checkbox right formControlName="semi" [(ngModel)]="semi"></ion-checkbox>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button outline round type="submit" block>Update</button>\n\n		\n\n	</form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp-front-end\src\pages\nonnie\verify\verify-edit\verify-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], VerifyEditPage);
    return VerifyEditPage;
}());

//# sourceMappingURL=verify-edit.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeekendNonniePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_papaparse__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_papaparse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_papaparse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_functions__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WeekendNonniePage = /** @class */ (function () {
    function WeekendNonniePage(navCtrl, navParams, http, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.seatingMap = [];
        this.seatingMapList = [];
        this.meals = ["Friday Dinner", "Satudray Brunch", "Satudray Dinner", "Sunday Breakfast", "Sunday Lunch", "Sunday Dinner"];
        this.getWeekendSignIns();
    }
    WeekendNonniePage.prototype.getWeekendSignIns = function () {
        var _this = this;
        this.http.get('/weekendSignInList').subscribe(function (data) {
            _this.seatingMap = [];
            _this.seatingMapList = [];
            _this.countFrD = 0;
            _this.countSaB = 0;
            _this.countSaD = 0;
            _this.countSuB = 0;
            _this.countSuL = 0;
            _this.countSuD = 0;
            var jsonResp = JSON.parse(data.text());
            _this.seatingMap = jsonResp.seatingMap;
            _this.seatingMap.forEach(function (element0) {
                element0.forEach(function (element1) {
                    _this.seatingMapList.push(element1);
                    if (element1[2] == 1)
                        _this.countFrD++;
                    if (element1[3] == 1)
                        _this.countSaB++;
                    if (element1[4] == 1)
                        _this.countSaD++;
                    if (element1[5] == 1)
                        _this.countSuB++;
                    if (element1[6] == 1)
                        _this.countSuL++;
                    if (element1[7] == 1)
                        _this.countSuD++;
                });
            });
        }, function (error) {
            Object(__WEBPACK_IMPORTED_MODULE_4__app_functions__["a" /* handleError */])(_this.navCtrl, error, _this.toastCtrl);
        });
    };
    WeekendNonniePage.prototype.downloadCSV = function () {
        var csvHeaderA = ["Table", "Student", "Friday Dinner", "Satudray Brunch", "Satudray Dinner", "Sunday Breakfast", "Sunday Lunch", "Sunday Dinner"];
        var csv = __WEBPACK_IMPORTED_MODULE_3_papaparse__["unparse"]({
            fields: csvHeaderA,
            data: this.seatingMapList
        });
        // Dummy implementation for Desktop download purpose
        var blob = new Blob([csv]);
        var a = window.document.createElement("a");
        a.href = window.URL.createObjectURL(blob);
        a.download = "Weekend Sign In " + this.getNextDayOfWeek(5) + "-" + this.getNextDayOfWeek(0) + ".csv";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
    WeekendNonniePage.prototype.getNextDayOfWeek = function (dayOfWeek) {
        var date = new Date();
        var resultDate = new Date();
        resultDate.setDate(date.getDate() + (7 + dayOfWeek - date.getDay()) % 7);
        return resultDate.getDate().toString() + "/" + resultDate.getMonth().toString();
    };
    WeekendNonniePage.prototype.refresh = function () {
        this.getWeekendSignIns();
    };
    WeekendNonniePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-weekend',template:/*ion-inline-start:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp-front-end\src\pages\nonnie\weekend-nonnie\weekend.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<ion-title>Weekend Sign In List</ion-title>\n\n		<ion-buttons end>\n\n			<button ion-button icon-only (click)="refresh()">\n\n				<ion-icon name="refresh"></ion-icon>\n\n			</button>\n\n			<button ion-button icon-only (click)="downloadCSV()">\n\n				<ion-icon name="download"></ion-icon>\n\n			</button>\n\n		</ion-buttons>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<table border=1>\n\n		<tr>\n\n			<th width="20%">Table</th>\n\n			<th width="50%">Student</th>\n\n			<th *ngFor="let meal of meals"><b>{{ meal }}</b></th>\n\n		</tr>\n\n		<tr *ngFor="let student of seatingMapList; let i = index">\n\n			<td *ngFor="let field of student; let j = index" [style.background-color]="field == 0 ? \'#f53d3d\' : (field == 1 ? \'#119b05\' : \'#FFFFFF\')">\n\n				<div *ngIf="field != 0 && field != 1">					\n\n					{{ field }}\n\n				</div>\n\n				<div *ngIf="field == 0 && field != 1">\n\n					Signed Out\n\n				</div>\n\n				<div *ngIf="field != 0 && field == 1">\n\n					Signed In\n\n				</div>		\n\n			</td>\n\n		</tr>		\n\n	</table>\n\n	<ion-label>Number of Students Signed In on Firday Dinner: {{ countFrD }}</ion-label>\n\n	<ion-label>Number of Students Signed In on Saturday Brunch: {{ countSaB }}</ion-label>\n\n	<ion-label>Number of Students Signed In on Saturday Dinner: {{ countSaD }}</ion-label>\n\n	<ion-label>Number of Students Signed In on Sunday Breakfast: {{ countSuB }}</ion-label>\n\n	<ion-label>Number of Students Signed In on Sunday Lunch: {{ countSuL }}</ion-label>\n\n	<ion-label>Number of Students Signed In on Sunday Dinner: {{ countSuD }}</ion-label>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp-front-end\src\pages\nonnie\weekend-nonnie\weekend.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__http_api__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], WeekendNonniePage);
    return WeekendNonniePage;
}());

//# sourceMappingURL=weekend.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnouncementsAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_functions__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AnnouncementsAddPage = /** @class */ (function () {
    function AnnouncementsAddPage(navCtrl, navParams, modalCtrl, http, global, viewCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.global = global;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.priorityMessage = false;
        this.newAnn = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            title: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            message: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]()
        });
    }
    AnnouncementsAddPage.prototype.cancel = function () {
        this.viewCtrl.dismiss(null);
    };
    AnnouncementsAddPage.prototype.addAnnouncement = function (value) {
        if (value.title == null || value.title == "") {
            Object(__WEBPACK_IMPORTED_MODULE_5__app_functions__["c" /* presentToast */])(this.toastCtrl, "Please fill in title.");
            return false;
        }
        if (value.message == null || value.message == "") {
            Object(__WEBPACK_IMPORTED_MODULE_5__app_functions__["c" /* presentToast */])(this.toastCtrl, "Please fill in message.");
            return false;
        }
        var jsonArr = {
            title: value.title,
            message: value.message,
            id: this.global.myUsrID,
            priority: this.priorityMessage
        };
        this.newAnn.reset();
        this.viewCtrl.dismiss(jsonArr);
    };
    AnnouncementsAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-announcements-add',template:/*ion-inline-start:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp-front-end\src\pages\user\announcements\announcements-add\announcements-add.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Add Announcement</ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="cancel()">\n\n          <ion-icon name="close"></ion-icon>\n\n      </button>\n\n  </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <form  (submit)="addAnnouncement(newAnn.value)" [formGroup]="newAnn">\n\n        <ion-item>\n\n            <h2>Post New Announcement</h2>\n\n        </ion-item>\n\n        <ion-item> \n\n            <ion-label floating>Enter Title...</ion-label>\n\n            <ion-input formControlName="title" type="text" maxlength="50"></ion-input>        \n\n        </ion-item>\n\n        <ion-item id="message"> \n\n            <ion-label floating>Enter text...</ion-label>\n\n            <ion-textarea rows="10" formControlName="message" type="text" maxlength="10000"></ion-textarea>        \n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>Priority</ion-label>\n\n            <ion-checkbox (ionChange)="priorityMessage = !priorityMessage"></ion-checkbox>\n\n        </ion-item>\n\n        <button ion-button outline round type="submit" block>submit</button>\n\n    </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp-front-end\src\pages\user\announcements\announcements-add\announcements-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__http_api__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], AnnouncementsAddPage);
    return AnnouncementsAddPage;
}());

//# sourceMappingURL=announcements-add.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_functions__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, toastCtrl, navParams, global, http) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.global = global;
        this.http = http;
        this.editPasswordMode = false;
        this.settings = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormGroup */]({
            table: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](),
            semi: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](),
            oldpassword: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](),
            newpassword: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](),
            confirmpassword: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](),
            email: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]()
        });
        this.loadCurrentTable();
    }
    SettingsPage.prototype.loadCurrentTable = function () {
        var _this = this;
        var jsonSend = {
            id: this.global.myUsrID
        };
        this.http.post('/getSettings', jsonSend).subscribe(function (data) {
            var jsonResp = JSON.parse(data.text());
            _this.bedieningTableID = jsonResp.result0.tblBedieningTable_talID;
            _this.semi = jsonResp.result0.usrIsSemi;
            _this.emailAddress = jsonResp.result0.usrEmailAddress;
        }, function (error) {
            Object(__WEBPACK_IMPORTED_MODULE_5__app_functions__["a" /* handleError */])(_this.navCtrl, error, _this.toastCtrl);
        });
    };
    SettingsPage.prototype.updateInformation = function (value) {
        var _this = this;
        var jsonSend = {
            id: this.global.myUsrID,
            bedieningTableID: value.table,
            semi: value.semi,
            email: value.email
        };
        if (this.editPasswordMode && value.newpassword != null || value.newpassword != "") {
            if (value.newpassword != value.confirmpassword) {
                Object(__WEBPACK_IMPORTED_MODULE_5__app_functions__["c" /* presentToast */])(this.toastCtrl, "Please ensure that your passwords match.");
                return false;
            }
        }
        this.http.post('/updateSettings', jsonSend).subscribe(function () {
            Object(__WEBPACK_IMPORTED_MODULE_5__app_functions__["c" /* presentToast */])(_this.toastCtrl, "Updated!");
            if (_this.editPasswordMode) {
                var jsonSend_1 = {
                    id: _this.global.myUsrID,
                    oldpassword: value.oldpassword,
                    newpassword: value.newpassword
                };
                _this.http.post('/updatePassword', jsonSend_1).subscribe(function (data) {
                    var jsonResp = JSON.parse(data.text());
                    if (jsonResp.jsonRes.success) {
                        Object(__WEBPACK_IMPORTED_MODULE_5__app_functions__["b" /* presentLongToast */])(_this.toastCtrl, "Updated Password!");
                        _this.editPasswordMode = false;
                    }
                    else {
                        Object(__WEBPACK_IMPORTED_MODULE_5__app_functions__["c" /* presentToast */])(_this.toastCtrl, "Old Password is incorrect. Please try again.");
                        return false;
                    }
                }, function (error) {
                    Object(__WEBPACK_IMPORTED_MODULE_5__app_functions__["a" /* handleError */])(_this.navCtrl, error, _this.toastCtrl);
                });
            }
        }, function (error) {
            Object(__WEBPACK_IMPORTED_MODULE_5__app_functions__["a" /* handleError */])(_this.navCtrl, error, _this.toastCtrl);
        });
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp-front-end\src\pages\user\settings\settings.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      	<button ion-button menuToggle right>\n\n    		<ion-icon name="menu"></ion-icon>\n\n      	</button>\n\n    <ion-title>Settings</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<h1>Update the settings you wish to change, leave the rest and click Update</h1>\n\n	<form (submit)="updateInformation(settings.value)" [formGroup]="settings">\n\n		<ion-list>\n\n			<ion-item> \n\n				<ion-label floating>Your Bediening Table<span style="color:red">*</span></ion-label>\n\n				<ion-select formControlName="table" [(ngModel)]="bedieningTableID">\n\n					<ion-option value=1>HK</ion-option>\n\n					<ion-option value=2>Weste Senior</ion-option>\n\n					<ion-option value=3>Weste Junior</ion-option>\n\n					<ion-option value=4>Ooste Senior</ion-option>\n\n					<ion-option value=5>Ooste Junior</ion-option>\n\n					<ion-option value=6>Noorde Senior</ion-option>\n\n					<ion-option value=7>Noorde Junior</ion-option>\n\n					<ion-option value=8>Sentraal</ion-option>\n\n					<ion-option value=9>Senaat</ion-option>\n\n					<ion-option value=10>Verre Weste</ion-option>\n\n					<ion-option value=11>Eerste Jaar</ion-option>\n\n				</ion-select>        \n\n			</ion-item>\n\n			<ion-item>\n\n                <ion-label>Semi</ion-label>\n\n                <ion-checkbox right formControlName="semi" [(ngModel)]="semi"></ion-checkbox>\n\n			</ion-item>\n\n			<ion-item>\n\n				<ion-label floating>Update email adress</ion-label>\n\n				<ion-input formControlName="email" type="text" maxlength="100" [(ngModel)]="emailAddress"></ion-input>\n\n			</ion-item>\n\n		</ion-list>\n\n		<button *ngIf="!editPasswordMode" ion-button outline round (click)="editPasswordMode = !editPasswordMode">Change Password</button>\n\n		<button *ngIf="editPasswordMode" ion-button outline round (click)="editPasswordMode = !editPasswordMode">Cancel Changing Password</button>\n\n		<div *ngIf="editPasswordMode">\n\n			<ion-item> \n\n				<ion-label floating>Old Password</ion-label>\n\n				<ion-input formControlName="oldpassword" type="password" maxlength="32"></ion-input>        \n\n			</ion-item>\n\n			<ion-item> \n\n				<ion-label floating>New Password</ion-label>\n\n				<ion-input formControlName="newpassword" type="password" maxlength="32"></ion-input>        \n\n			</ion-item>\n\n			<ion-item> \n\n				<ion-label floating>Confirm Password</ion-label>\n\n				<ion-input formControlName="confirmpassword" type="password" maxlength="32"></ion-input>        \n\n			</ion-item>\n\n		</div>\n\n		<button ion-button outline round type="submit" block>Update</button>\n\n		\n\n	</form>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp-front-end\src\pages\user\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_3__http_api__["a" /* Http */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 125:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 125;

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Http; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_config__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Http = /** @class */ (function () {
    function Http(http) {
        this.http = http;
    }
    Http.prototype.get = function (path, otherUrl) {
        if (otherUrl === void 0) { otherUrl = false; }
        if (!otherUrl)
            return this.http.get(__WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* CONFIG */].url + path); // , {withCredentials: true}
        else {
            //alert("p: " + path);
            return this.http.get(path);
        }
    };
    Http.prototype.post = function (path, data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* CONFIG */].url + path, JSON.stringify(data), {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' })
        }); // ,withCredentials: true
    };
    Http = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], Http);
    return Http;
}());

;
//# sourceMappingURL=http-api.js.map

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = presentToast;
/* harmony export (immutable) */ __webpack_exports__["b"] = presentLongToast;
/* harmony export (immutable) */ __webpack_exports__["a"] = handleError;
/* unused harmony export getDayMonth */
function presentToast(toastCtrl, text) {
    var toast = toastCtrl.create({
        message: text,
        duration: 1500,
        position: 'bottom',
        dismissOnPageChange: false
    });
    toast.present();
}
function presentLongToast(toastCtrl, text) {
    var toast = toastCtrl.create({
        message: text,
        showCloseButton: true,
        position: 'bottom',
        dismissOnPageChange: false
    });
    toast.present();
}
function handleError(navCtrl, error, toastCtrl) {
    var msg = "";
    if (error.status == 401) {
        navCtrl.setRoot('LoginPage');
        msg = "Please log in";
    }
    else if (error.status == 500) {
        msg = "Internal Server Error. Please try again later.";
    }
    else if (error.status == 400) {
        msg = "Something went wrong. Please try again.";
    }
    else {
        msg = "No Internet Connection.";
    }
    if (msg != "") {
        presentLongToast(toastCtrl, msg);
    }
}
function getDayMonth(date) {
    var firstSlash = false;
    var result = "";
    for (var index = 0; index < date.length; index++) {
        var element = date.charAt(index);
        if (!firstSlash && element != '/') {
            result += element;
        }
        else if (!firstSlash && element == '/') {
            firstSlash = true;
            result += element;
        }
        else if (firstSlash && element != '/') {
            result += element;
        }
        else if (firstSlash && element == '/') {
            break;
        }
    }
    return result;
}
//# sourceMappingURL=app-functions.js.map

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/nonnie/sign-out-nonnie/sign-out.module": [
		292,
		6
	],
	"../pages/nonnie/verify/verify-edit-weekend/verify-edit-weekend.module": [
		291,
		5
	],
	"../pages/nonnie/verify/verify-edit/verify-edit.module": [
		294,
		4
	],
	"../pages/nonnie/verify/verify.module": [
		293,
		3
	],
	"../pages/nonnie/weekend-nonnie/weekend.module": [
		295,
		2
	],
	"../pages/user/announcements/announcements-add/announcements-add.module": [
		296,
		1
	],
	"../pages/user/settings/settings.module": [
		297,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 166;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_functions__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterPage = /** @class */ (function () {
    function RegisterPage(http, navCtrl, toastCtrl) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.regUser = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            fname: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            sname: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            username: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            studentnumber: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            firstyearyear: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            bedieningtable: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            semi: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            confirmpassword: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
        });
    }
    RegisterPage.prototype.registerUser = function (value) {
        var _this = this;
        var regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (value.fname == null || value.fname == "") {
            Object(__WEBPACK_IMPORTED_MODULE_5__app_functions__["c" /* presentToast */])(this.toastCtrl, "Please fill in your name.");
            return false;
        }
        else if (value.sname == null || value.sname == "") {
            Object(__WEBPACK_IMPORTED_MODULE_5__app_functions__["c" /* presentToast */])(this.toastCtrl, "Please fill in your surname.");
            return false;
        }
        else if (value.email == null || value.email == "") {
            Object(__WEBPACK_IMPORTED_MODULE_5__app_functions__["c" /* presentToast */])(this.toastCtrl, "Please enter a valid email address.");
            return false;
        }
        else if (!regexEmail.test(value.email)) {
            var email = value.email;
            var trimmedEmail = email.slice(0, email.length - 1);
            if (!regexEmail.test(trimmedEmail)) {
                Object(__WEBPACK_IMPORTED_MODULE_5__app_functions__["c" /* presentToast */])(this.toastCtrl, "Please enter a valid email address.");
                return false;
            }
            else {
                value.email = trimmedEmail;
            }
        }
        else if (value.username == null || value.username == "") {
            Object(__WEBPACK_IMPORTED_MODULE_5__app_functions__["c" /* presentToast */])(this.toastCtrl, "Please fill in your username.");
            return false;
        }
        else if (value.studentnumber == null || value.studentnumber == "") {
            Object(__WEBPACK_IMPORTED_MODULE_5__app_functions__["c" /* presentToast */])(this.toastCtrl, "Please fill in your student number.");
            return false;
        }
        else if (value.firstyearyear == null || value.firstyearyear < 1916) {
            Object(__WEBPACK_IMPORTED_MODULE_5__app_functions__["c" /* presentToast */])(this.toastCtrl, "Please fill in your first year year.");
            return false;
        }
        else if (value.bedieningtable == null || !(value.bedieningtable >= 1 && value.bedieningtable <= 11)) {
            Object(__WEBPACK_IMPORTED_MODULE_5__app_functions__["c" /* presentToast */])(this.toastCtrl, "Please select the table you sit at bedienings.");
            return false;
        }
        else if (value.password == null || value.password == "") {
            Object(__WEBPACK_IMPORTED_MODULE_5__app_functions__["c" /* presentToast */])(this.toastCtrl, "Please fill in your password.");
            return false;
        }
        else if (value.confirmpassword == null || value.confirmpassword == "") {
            Object(__WEBPACK_IMPORTED_MODULE_5__app_functions__["c" /* presentToast */])(this.toastCtrl, "Please fill in your confirm password.");
            return false;
        }
        else if (value.password != value.confirmpassword) {
            Object(__WEBPACK_IMPORTED_MODULE_5__app_functions__["c" /* presentToast */])(this.toastCtrl, "Please ensure that your passwords match.");
            return false;
        }
        else if (value.studentnumber.length < 8) {
            Object(__WEBPACK_IMPORTED_MODULE_5__app_functions__["c" /* presentToast */])(this.toastCtrl, 'Student number is too short');
            return false;
        }
        else if (value.studentnumber.length > 8) {
            Object(__WEBPACK_IMPORTED_MODULE_5__app_functions__["c" /* presentToast */])(this.toastCtrl, 'Student number is too long');
            return false;
        }
        else {
            var HKMode = false;
            if (value.bedieningtable == 1) {
                HKMode = true;
            }
            if (value.semi == null)
                value.semi = false;
            var jsonArr = {
                username: value.username,
                password: value.password,
                email: value.email,
                name: value.fname,
                surname: value.sname,
                studentnumber: value.studentnumber,
                firstyearyear: value.firstyearyear,
                bedieningtable: value.bedieningtable,
                semi: value.semi,
                isHk: HKMode
            };
            this.http.post("/addUser", jsonArr).subscribe(function (response) {
                var jsonResp = JSON.parse(response.text());
                if (jsonResp.success) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                    Object(__WEBPACK_IMPORTED_MODULE_5__app_functions__["c" /* presentToast */])(_this.toastCtrl, "Registration successful! Please a while for verification then log in.");
                }
                else {
                    Object(__WEBPACK_IMPORTED_MODULE_5__app_functions__["c" /* presentToast */])(_this.toastCtrl, "Username already exists.");
                    return false;
                }
            }, function (error) {
                Object(__WEBPACK_IMPORTED_MODULE_5__app_functions__["a" /* handleError */])(_this.navCtrl, error, _this.toastCtrl);
            });
        }
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp-front-end\src\pages\user\register\register.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Registration</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <form (submit)="registerUser(regUser.value)" [formGroup]="regUser">\n\n        <ion-list>\n\n            <ion-item> \n\n                <ion-label floating>Name<span style="color:red">*</span></ion-label>\n\n                <ion-input formControlName="fname" type="text" maxlength="50"></ion-input>        \n\n            </ion-item>\n\n            <ion-item> \n\n                <ion-label floating>Surname<span style="color:red">*</span></ion-label>\n\n                <ion-input formControlName="sname" type="text" maxlength="50"></ion-input>        \n\n            </ion-item>\n\n            <ion-item> \n\n                <ion-label floating>Email<span style="color:red">*</span></ion-label>\n\n                <ion-input formControlName="email" type="text" maxlength="100"></ion-input>        \n\n            </ion-item>\n\n            <ion-item> \n\n                <ion-label floating>Username<span style="color:red">*</span></ion-label>\n\n                <ion-input formControlName="username" type="text" maxlength="50"></ion-input>        \n\n            </ion-item>\n\n            <ion-item> \n\n                <ion-label floating>Student Number<span style="color:red">*</span></ion-label>\n\n                <ion-input formControlName="studentnumber" type="number" maxlength="8"></ion-input>        \n\n            </ion-item>\n\n            <ion-item> \n\n                <ion-label floating>Year of First year<span style="color:red">*</span></ion-label>\n\n                <ion-input formControlName="firstyearyear" type="number"></ion-input>        \n\n            </ion-item>\n\n            <ion-item> \n\n                <ion-label floating>Your Bediening Table<span style="color:red">*</span></ion-label>\n\n                <ion-select formControlName="bedieningtable">\n\n                    <ion-option value=1>HK</ion-option>\n\n                    <ion-option value=2>Weste Senior</ion-option>\n\n                    <ion-option value=3>Weste Junior</ion-option>\n\n                    <ion-option value=4>Ooste Senior</ion-option>\n\n                    <ion-option value=5>Ooste Junior</ion-option>\n\n                    <ion-option value=6>Noorde Senior</ion-option>\n\n                    <ion-option value=7>Noorde Junior</ion-option>\n\n                    <ion-option value=8>Sentraal</ion-option>\n\n                    <ion-option value=9>Senaat</ion-option>\n\n                    <ion-option value=10>Verre Weste</ion-option>\n\n                    <ion-option value=11>Eerste Jaar</ion-option>\n\n                </ion-select>        \n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label>Semi</ion-label>\n\n                <ion-checkbox right formControlName="semi"></ion-checkbox>\n\n            </ion-item>\n\n            <ion-item> \n\n                <ion-label floating>Password<span style="color:red">*</span></ion-label>\n\n                <ion-input formControlName="password" type="password" maxlength="32"></ion-input>        \n\n            </ion-item>\n\n            <ion-item> \n\n                <ion-label floating>Confirm Password<span style="color:red">*</span></ion-label>\n\n                <ion-input formControlName="confirmpassword" type="password" maxlength="32"></ion-input>        \n\n            </ion-item>\n\n        </ion-list>\n\n        <button ion-button outline round type="submit" block>Register</button>\n\n    </form>\n\n\n\n    <div padding>\n\n\n\n    </div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp-front-end\src\pages\user\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__http_api__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginNonniePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_functions__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginNonniePage = /** @class */ (function () {
    function LoginNonniePage(navCtrl, toastCtrl, http) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.nonnieLogin = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            pass: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]()
        });
    }
    LoginNonniePage.prototype.loginNonnie = function (value) {
        var _this = this;
        if (value.pass == null) {
            Object(__WEBPACK_IMPORTED_MODULE_5__app_functions__["c" /* presentToast */])(this.toastCtrl, "Please fill in password");
            return;
        }
        var jsonArr = {
            "password": value.pass
        };
        this.http.post("/nonnie-login", jsonArr).subscribe(function (data) {
            var jsonResp = JSON.parse(data.text());
            if (jsonResp.JSONRes.success) {
                Object(__WEBPACK_IMPORTED_MODULE_5__app_functions__["c" /* presentToast */])(_this.toastCtrl, "Logged in!");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
            }
            else {
                Object(__WEBPACK_IMPORTED_MODULE_5__app_functions__["c" /* presentToast */])(_this.toastCtrl, "Invalid Login. Try Again.");
            }
        }, function (error) {
            Object(__WEBPACK_IMPORTED_MODULE_5__app_functions__["a" /* handleError */])(_this.navCtrl, error, _this.toastCtrl);
        });
    };
    LoginNonniePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp-front-end\src\pages\nonnie\login-nonnie\login.html"*/'<ion-content>\n\n    <div id=register-container class="container">\n\n        <div class="login-pane">\n\n            <form (submit)="loginNonnie(nonnieLogin.value)" [formGroup]="nonnieLogin">\n\n                <ion-list>\n\n                    <ion-item>\n\n                        <ion-label>\n\n                            <h1>Welcome Nonnie</h1>\n\n                        </ion-label>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-label floating>Password</ion-label>\n\n                        <ion-input formControlName="pass" type="password"></ion-input>\n\n                    </ion-item>\n\n                    <button ion-button outline round block type="submit" color="tertiary">Login</button>\n\n                </ion-list>\n\n            </form>\n\n        </div>\n\n        <div id="register-info">\n\n        </div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp-front-end\src\pages\nonnie\login-nonnie\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__http_api__["a" /* Http */]])
    ], LoginNonniePage);
    return LoginNonniePage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__verify_verify__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__weekend_nonnie_weekend__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sign_out_nonnie_sign_out__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__verify_verify__["a" /* VerifyPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__weekend_nonnie_weekend__["a" /* WeekendNonniePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__sign_out_nonnie_sign_out__["a" /* SignOutNonniePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp-front-end\src\pages\nonnie\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Accounts" tabIcon="contacts"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Weekend Sign In List" tabIcon="ios-clipboard"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Week Day Sign In List" tabIcon="ios-clipboard"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp-front-end\src\pages\nonnie\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeekendPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_functions__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WeekendPage = /** @class */ (function () {
    function WeekendPage(navCtrl, global, http, toastCtrl) {
        this.navCtrl = navCtrl;
        this.global = global;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.weekendSignInOpen = true;
        this.checkIfWeekendOpen();
        this.loadSlotValues();
    }
    WeekendPage.prototype.checkIfWeekendOpen = function () {
        var today = new Date();
        if ((today.getDay() == 4 && today.getHours() > 15) || today.getDay() >= 5 || today.getDay() == 0)
            this.weekendSignInOpen = false;
    };
    WeekendPage.prototype.loadSlotValues = function () {
        var _this = this;
        var reqSend = {
            id: this.global.myUsrID
        };
        this.http.post('/get-weekend', reqSend).subscribe(// 1 represents signed in
        function (data) {
            var jsonResp = JSON.parse(data.text());
            console.log('da', jsonResp.JSONRes);
            _this.meals = jsonResp.JSONRes;
        }, function (error) {
            Object(__WEBPACK_IMPORTED_MODULE_4__app_functions__["a" /* handleError */])(_this.navCtrl, error, _this.toastCtrl);
        });
    };
    WeekendPage.prototype.updateSlot = function (meal) {
        var _this = this;
        if (!this.weekendSignInOpen) {
            Object(__WEBPACK_IMPORTED_MODULE_4__app_functions__["b" /* presentLongToast */])(this.toastCtrl, "Sign in for the weekend has closed");
            return;
        }
        else {
            meal.status = !meal.status;
            var reqSend = {
                id: this.global.myUsrID,
                wsiFridayDinner: this.meals[0].status,
                wsiSaturdayBrunch: this.meals[1].status,
                wsiSaturdayDinner: this.meals[2].status,
                wsiSundayBreakfast: this.meals[3].status,
                wsiSundayLunch: this.meals[4].status,
                wsiSundayDinner: this.meals[5].status
            };
            this.http.post('/updateWeekend', reqSend).subscribe(function (data) { }, function (error) {
                Object(__WEBPACK_IMPORTED_MODULE_4__app_functions__["a" /* handleError */])(_this.navCtrl, error, _this.toastCtrl);
            });
        }
    };
    WeekendPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-weekend',template:/*ion-inline-start:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp-front-end\src\pages\user\weekend\weekend.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle right>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Weekend Sign In</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n    \n\n<ion-content padding>\n\n    <div *ngIf="!weekendSignInOpen">\n\n        <h1>Sign in for the weekend has closed</h1>\n\n    </div>\n\n    <div>\n\n        <p>Weekend Sign In closes every Thursday at 15:00.</p>\n\n        <ion-list>\n\n            <ion-card color="primary" class="weekendSlots card" *ngFor="let meal of meals" (click)="updateSlot(meal)">\n\n                <ion-card-content>   \n\n                    <ion-item [style.background-color]="meal.status ? \'#119b05\' : \'#f53d3d\'">          \n\n                        <ion-label style="color:white">{{meal.meal}} {{meal.date}}</ion-label>           \n\n                    </ion-item>             \n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-list>\n\n    </div>\n\n</ion-content>\n\n      '/*ion-inline-end:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp-front-end\src\pages\user\weekend\weekend.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_3__http_api__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], WeekendPage);
    return WeekendPage;
}());

//# sourceMappingURL=weekend.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignOutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_functions__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignOutPage = /** @class */ (function () {
    function SignOutPage(navCtrl, global, http, toastCtrl) {
        this.navCtrl = navCtrl;
        this.global = global;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loadSlotValues();
    }
    SignOutPage.prototype.loadSlotValues = function () {
        var _this = this;
        var reqSend = {
            id: this.global.myUsrID
        };
        this.http.post('/get-week', reqSend).subscribe(function (data) {
            var jsonResp = JSON.parse(data.text());
            _this.meals = jsonResp.JSONRes;
        }, function (error) {
            Object(__WEBPACK_IMPORTED_MODULE_4__app_functions__["a" /* handleError */])(_this.navCtrl, error, _this.toastCtrl);
        });
    };
    SignOutPage.prototype.updateSlot = function (meal) {
        var _this = this;
        meal.status = ++meal.status % 3;
        var reqSend = {
            id: this.global.myUsrID,
            wsoMondayLunch: this.meals[0].status,
            wsoMondayDinner: this.meals[1].status,
            wsoTuesdayLunch: this.meals[2].status,
            wsoTuesdayDinner: this.meals[3].status,
            wsoWednesdayLunch: this.meals[4].status,
            wsoWednesdayDinner: this.meals[5].status,
            wsoThursdayLunch: this.meals[6].status,
            wsoThursdayDinner: this.meals[7].status,
            wsoFridayLunch: this.meals[8].status
        };
        this.http.post('/updateWeeklySignOut', reqSend).subscribe(function (data) { }, function (error) {
            Object(__WEBPACK_IMPORTED_MODULE_4__app_functions__["a" /* handleError */])(_this.navCtrl, error, _this.toastCtrl);
        });
    };
    SignOutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-out',template:/*ion-inline-start:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp-front-end\src\pages\user\sign-out\sign-out.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle right>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Sign Out</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n    \n\n<ion-content padding>\n\n    <p>Sign Out closes every weekday at 11:00 for Lunch and 15:00 for Dinner.</p>\n\n    <ion-list>\n\n        <ion-card color="primary" class="weekendSlots card" *ngFor="let meal of meals" (click)="updateSlot(meal)">\n\n            <ion-card-content *ngIf="meal.openStatus" [style.background-color]="meal.status == 0 ? \'#FFFF00\' : (meal.status == 1 ? \'#f53d3d\' : \'#119b05\')">   \n\n                <ion-item [style.background-color]="meal.status == 0 ? \'#FFFF00\' : (meal.status == 1 ? \'#f53d3d\' : \'#119b05\')">          \n\n					<ion-label [style.color]="meal.status == 0 ? \'#000000\' : \'#ffffff\'">{{meal.meal}} {{meal.date}}</ion-label> \n\n                </ion-item> \n\n                <ion-item [style.background-color]="meal.status == 0 ? \'#FFFF00\' : (meal.status == 1 ? \'#f53d3d\' : \'#119b05\')">\n\n                    <ion-label end *ngIf="meal.status == 0">Permanently Signed Out</ion-label>\n\n                    <ion-label end *ngIf="meal.status == 1">Signed out for Now</ion-label>\n\n                    <ion-label end *ngIf="meal.status == 2">Signed In</ion-label>\n\n                </ion-item>           \n\n            </ion-card-content>\n\n        </ion-card>\n\n    </ion-list>\n\n</ion-content>\n\n      '/*ion-inline-end:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp-front-end\src\pages\user\sign-out\sign-out.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_3__http_api__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], SignOutPage);
    return SignOutPage;
}());

//# sourceMappingURL=sign-out.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(236);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_http__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_local_notifications__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_global_global__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_nonnie_nonnie_module__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_user_user_module__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/nonnie/verify/verify-edit-weekend/verify-edit-weekend.module#VerifyEditWeekendPageModule', name: 'VerifyEditWeekendPage', segment: 'verify-edit-weekend', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nonnie/sign-out-nonnie/sign-out.module#SignOutPageModule', name: 'SignOutNonniePage', segment: 'sign-out', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nonnie/verify/verify.module#VerifyPageModule', name: 'VerifyPage', segment: 'verify', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nonnie/verify/verify-edit/verify-edit.module#VerifyEditPageModule', name: 'VerifyEditPage', segment: 'verify-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nonnie/weekend-nonnie/weekend.module#WeekendPageModule', name: 'WeekendNonniePage', segment: 'weekend', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user/announcements/announcements-add/announcements-add.module#AnnouncementsAddPageModule', name: 'AnnouncementsAddPage', segment: 'announcements-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_11__pages_nonnie_nonnie_module__["a" /* NonnieModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_user_user_module__["a" /* UserModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_3__http_api__["a" /* Http */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_10__providers_global_global__["a" /* GlobalProvider */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_local_notifications__["a" /* LocalNotifications */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONFIG; });
var CONFIG = {
    url: "http://localhost:3000"
};
// 10.0.10.225:3000
// 10.0.5.103:3000 
//# sourceMappingURL=app-config.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HttpClient } from '@angular/common/http';

/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GlobalProvider = /** @class */ (function () {
    function GlobalProvider() {
        this.myUsrID = 0;
        this.mySurname = "";
        this.isHK = false;
    }
    GlobalProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], GlobalProvider);
    return GlobalProvider;
}());

//# sourceMappingURL=global.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NonnieModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nonnie_tabs_tabs__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nonnie_login_nonnie_login__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nonnie_verify_verify__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nonnie_weekend_nonnie_weekend__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nonnie_sign_out_nonnie_sign_out__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nonnie_verify_verify_edit_verify_edit__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nonnie_verify_verify_edit_weekend_verify_edit_weekend__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_app_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__http_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//#region nonnie














//#endregion
var NonnieModule = /** @class */ (function () {
    function NonnieModule() {
    }
    NonnieModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_10__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__nonnie_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_1__nonnie_login_nonnie_login__["a" /* LoginNonniePage */],
                __WEBPACK_IMPORTED_MODULE_2__nonnie_verify_verify__["a" /* VerifyPage */],
                __WEBPACK_IMPORTED_MODULE_3__nonnie_weekend_nonnie_weekend__["a" /* WeekendNonniePage */],
                __WEBPACK_IMPORTED_MODULE_4__nonnie_sign_out_nonnie_sign_out__["a" /* SignOutNonniePage */],
                __WEBPACK_IMPORTED_MODULE_5__nonnie_verify_verify_edit_verify_edit__["a" /* VerifyEditPage */],
                __WEBPACK_IMPORTED_MODULE_6__nonnie_verify_verify_edit_weekend_verify_edit_weekend__["a" /* VerifyEditWeekendPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_app_component__["a" /* MyApp */]),
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["c" /* HttpModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_0__nonnie_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_1__nonnie_login_nonnie_login__["a" /* LoginNonniePage */],
                __WEBPACK_IMPORTED_MODULE_2__nonnie_verify_verify__["a" /* VerifyPage */],
                __WEBPACK_IMPORTED_MODULE_3__nonnie_weekend_nonnie_weekend__["a" /* WeekendNonniePage */],
                __WEBPACK_IMPORTED_MODULE_4__nonnie_sign_out_nonnie_sign_out__["a" /* SignOutNonniePage */],
                __WEBPACK_IMPORTED_MODULE_5__nonnie_verify_verify_edit_verify_edit__["a" /* VerifyEditPage */],
                __WEBPACK_IMPORTED_MODULE_6__nonnie_verify_verify_edit_weekend_verify_edit_weekend__["a" /* VerifyEditWeekendPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                { provide: __WEBPACK_IMPORTED_MODULE_10__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__http_api__["a" /* Http */]
            ]
        })
    ], NonnieModule);
    return NonnieModule;
}());

//# sourceMappingURL=nonnie.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__http_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__register_register__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__announcements_announcements__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__announcements_announcements_add_announcements_add__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__weekend_weekend__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sign_out_sign_out__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__settings_settings__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_global_global__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__announcements_announcements__["a" /* AnnouncementsPage */],
                __WEBPACK_IMPORTED_MODULE_10__announcements_announcements_add_announcements_add__["a" /* AnnouncementsAddPage */],
                __WEBPACK_IMPORTED_MODULE_8__register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_11__weekend_weekend__["a" /* WeekendPage */],
                __WEBPACK_IMPORTED_MODULE_12__sign_out_sign_out__["a" /* SignOutPage */],
                __WEBPACK_IMPORTED_MODULE_13__settings_settings__["a" /* SettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_app_component__["a" /* MyApp */]),
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__announcements_announcements__["a" /* AnnouncementsPage */],
                __WEBPACK_IMPORTED_MODULE_10__announcements_announcements_add_announcements_add__["a" /* AnnouncementsAddPage */],
                __WEBPACK_IMPORTED_MODULE_8__register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_11__weekend_weekend__["a" /* WeekendPage */],
                __WEBPACK_IMPORTED_MODULE_12__sign_out_sign_out__["a" /* SignOutPage */],
                __WEBPACK_IMPORTED_MODULE_13__settings_settings__["a" /* SettingsPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_5__http_api__["a" /* Http */],
                __WEBPACK_IMPORTED_MODULE_14__providers_global_global__["a" /* GlobalProvider */],
            ]
        })
    ], UserModule);
    return UserModule;
}());

//# sourceMappingURL=user.module.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map