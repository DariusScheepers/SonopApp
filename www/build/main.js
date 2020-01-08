webpackJsonp([0],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_user_announcements_announcements__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_user_weekend_weekend__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_user_sign_out_sign_out__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_user_settings_settings__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp\src\app\app.html"*/'<ion-menu [content]="content" side="right">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp\src\app\app.html"*/
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_register_register__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_global__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_functions__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_config__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__nonnie_login_nonnie_login__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_announcements_announcements__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__functions_src_constants_environment_constant__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, toastCtrl, http, global) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.global = global;
        this.appVersion = __WEBPACK_IMPORTED_MODULE_7__app_config__["b" /* appVersion */];
        this.backEndVersion = __WEBPACK_IMPORTED_MODULE_10__functions_src_constants_environment_constant__["b" /* functionsVersion */];
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
            Object(__WEBPACK_IMPORTED_MODULE_6__app_functions__["c" /* presentToast */])(this.toastCtrl, 'Student number is too short');
            return;
        }
        else if (value.studentNumber.length > 8) {
            Object(__WEBPACK_IMPORTED_MODULE_6__app_functions__["c" /* presentToast */])(this.toastCtrl, 'Student number is too long');
            return;
        }
        var jsonArr = {
            studentNumber: value.studentNumber
        };
        this.http.post("/login", jsonArr).subscribe(function (data) {
            var student = JSON.parse(data.text());
            if (student.success) {
                if (student.studentInfo.verified) {
                    Object(__WEBPACK_IMPORTED_MODULE_6__app_functions__["c" /* presentToast */])(_this.toastCtrl, "Logged in!");
                    _this.global.myUsrID = student.studentID;
                    _this.global.mySurname = student.studentInfo.surname;
                    _this.global.isHK = student.studentInfo.isHk;
                    if (student.isBestCoder) {
                        _this.global.isHK = true;
                    }
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__user_announcements_announcements__["a" /* AnnouncementsPage */]);
                }
                else {
                    Object(__WEBPACK_IMPORTED_MODULE_6__app_functions__["c" /* presentToast */])(_this.toastCtrl, "Your account has not yet been verified. Please try again later.");
                }
            }
            else {
                Object(__WEBPACK_IMPORTED_MODULE_6__app_functions__["c" /* presentToast */])(_this.toastCtrl, "Invalid Login. Try Again.");
            }
        }, function (error) {
            Object(__WEBPACK_IMPORTED_MODULE_6__app_functions__["a" /* handleError */])(_this.navCtrl, error, _this.toastCtrl);
        });
    };
    LoginPage.prototype.openRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__user_register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.goToNonnieLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__nonnie_login_nonnie_login__["a" /* LoginNonniePage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp\src\pages\login\login.html"*/'<ion-content>   \n\n    <div *ngIf="splashScreenOn" (click)="splashScreenOn = false" id="splash-screen">\n\n        <ion-spinner name="crescent" class="spinner" *ngIf="!splashScreenReady"></ion-spinner>\n\n        <img src="../../assets/imgs/Screenshot_20190106-103426.jpg" width="100%" max-height="100%" (load)="splashScreenLoaded();" >\n\n    </div>\n\n    <div *ngIf="!splashScreenOn">\n\n        <ion-list>\n\n            <form (submit)="login(user.value)" [formGroup]="user">\n\n                <ion-list>\n\n                    <ion-item>\n\n                        <ion-label>\n\n                            Login\n\n                        </ion-label>                      \n\n                    </ion-item>                    \n\n                    <ion-item>\n\n                        <ion-label>\n\n                            <ion-icon name="person"></ion-icon>\n\n                        </ion-label>\n\n                        <ion-input formControlName="studentNumber" type="number" maxlength="8" placeholder="Student Number"></ion-input>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <button ion-button outline round block type="submit" color="tertiary" class="button">Login</button>\n\n                    </ion-item>\n\n                </ion-list>\n\n            </form>\n\n            <ion-item>\n\n                <button ion-button block (click)="openRegister()" class="button">Need an Account?</button>\n\n            </ion-item>\n\n            <ion-item>\n\n                <button ion-button block style="background-color: salmon;" (click)="goToNonnieLogin()" class="button">Go To Nonnie Login</button>\n\n            </ion-item>\n\n        </ion-list>\n\n        <div style="display: flex; justify-content: center;">\n\n            <img src="../../assets/imgs/Stalle_large.jpg" width="90%" max-height="100%" height="100%">\n\n        </div>\n\n    </div>\n\n    <ion-footer class="footer">\n\n        App Version: {{ appVersion }}\n\n        <br />\n\n        Back end Version: {{ backEndVersion }}\n\n    </ion-footer>\n\n</ion-content>'/*ion-inline-end:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__http_api__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5__providers_global_global__["a" /* GlobalProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bedieningTables; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_bediening_table_enum__ = __webpack_require__(297);

var bedieningTables = [
    {
        value: __WEBPACK_IMPORTED_MODULE_0__models_bediening_table_enum__["a" /* BedieningTable */].HK,
        description: 'HK',
        seats: 1
    },
    {
        value: __WEBPACK_IMPORTED_MODULE_0__models_bediening_table_enum__["a" /* BedieningTable */].WesteSenior,
        description: 'Weste Senior',
        seats: 1
    },
    {
        value: __WEBPACK_IMPORTED_MODULE_0__models_bediening_table_enum__["a" /* BedieningTable */].WesteJunior,
        description: 'Weste Junior',
        seats: 1
    },
    {
        value: __WEBPACK_IMPORTED_MODULE_0__models_bediening_table_enum__["a" /* BedieningTable */].OosteSenior,
        description: 'Ooste Senior',
        seats: 1
    },
    {
        value: __WEBPACK_IMPORTED_MODULE_0__models_bediening_table_enum__["a" /* BedieningTable */].OosteJunior,
        description: 'Ooste Junior',
        seats: 1
    },
    {
        value: __WEBPACK_IMPORTED_MODULE_0__models_bediening_table_enum__["a" /* BedieningTable */].NoordeSenior,
        description: 'Noorde Senior',
        seats: 1
    },
    {
        value: __WEBPACK_IMPORTED_MODULE_0__models_bediening_table_enum__["a" /* BedieningTable */].NoordeJunior,
        description: 'Noorde Junior',
        seats: 1
    },
    {
        value: __WEBPACK_IMPORTED_MODULE_0__models_bediening_table_enum__["a" /* BedieningTable */].Sentraal,
        description: 'Sentraal',
        seats: 1
    },
    {
        value: __WEBPACK_IMPORTED_MODULE_0__models_bediening_table_enum__["a" /* BedieningTable */].Senaat,
        description: 'Senaat',
        seats: 1
    },
    {
        value: __WEBPACK_IMPORTED_MODULE_0__models_bediening_table_enum__["a" /* BedieningTable */].VerreWeste,
        description: 'Verre Weste',
        seats: 1
    },
    {
        value: __WEBPACK_IMPORTED_MODULE_0__models_bediening_table_enum__["a" /* BedieningTable */].EersteJaar,
        description: 'Eerste Jaar',
        seats: 1
    },
];
//# sourceMappingURL=bediening-tables.constant.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnouncementsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__announcements_add_announcements_add__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_functions__ = __webpack_require__(16);
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
    function AnnouncementsPage(navCtrl, toastCtrl, http, global, modalCtrl, bibleVerseAPI) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.global = global;
        this.modalCtrl = modalCtrl;
        this.bibleVerseAPI = bibleVerseAPI;
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
        this.bibleVerseAPI.getBibleVerse().subscribe(function (data) {
            var jsonResp = JSON.parse(data['_body']);
            if (!jsonResp)
                Object(__WEBPACK_IMPORTED_MODULE_6__app_functions__["a" /* handleError */])(_this.navCtrl, "Cant retrieve Bible Verse of the Day", _this.toastCtrl);
            else {
                _this.votd = jsonResp.verse.details;
                _this.votdRef = jsonResp.verse.notice;
            }
        }, function (error) {
            console.log("Error: " + error);
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
                var date = new Date(Number(element.datePosted));
                element.datePosted = date.toLocaleString();
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
            selector: 'page-announcements',template:/*ion-inline-start:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp\src\pages\user\announcements\announcements.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="refresh()" end>\n\n                <ion-icon name="refresh"></ion-icon>\n\n            </button>\n\n            <button ion-button icon-only *ngIf="global.isHK" (click)="addAnnouncement()">\n\n                <ion-icon name="add"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        <button ion-button menuToggle end>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Announcements</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n    \n\n<ion-content padding>\n\n\n\n    <h1>Welcome Meneer {{global.mySurname}}</h1>\n\n    <ion-card>\n\n        <ion-card-content text-wrap>\n\n            <ion-item>\n\n                <img item-start class="cardImage" src="../../assets/imgs/Garri Baldi.png" />\n\n                <p><i>{{votd.text}}</i>\n\n                    <br />- {{votd.reference}}\n\n                    <br />\n\n                    {{votdRef}}\n\n                </p>                \n\n            </ion-item>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    \n\n    <ion-list>\n\n        <ion-card class="announcement card" *ngFor="let announcement of announcements" color="primary">\n\n        <ion-card-header class="announcement-header">  \n\n            <ion-item color="primary">\n\n                <h1 class="line-break">{{announcement.title}}</h1>\n\n            </ion-item>              \n\n        </ion-card-header>\n\n        <ion-card-content>   \n\n            <ion-item color="primary">          \n\n                <p>{{announcement.datePosted}}</p> \n\n                <p>{{announcement.postedBy}}</p>  \n\n            </ion-item>\n\n            <ion-item>\n\n                <div class="line-break" [innerHTML]="announcement.message"></div>\n\n            </ion-item>             \n\n        </ion-card-content>\n\n        </ion-card>\n\n    </ion-list>\n\n    <p>All announcements will be wiped each Sunday at 17:00.</p>\n\n</ion-content>\n\n      '/*ion-inline-end:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp\src\pages\user\announcements\announcements.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__http_api__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__http_api__["a" /* BibleVerseAPI */]])
    ], AnnouncementsPage);
    return AnnouncementsPage;
}());

//# sourceMappingURL=announcements.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserIdentificationModel; });
var UserIdentificationModel = /** @class */ (function () {
    function UserIdentificationModel(id) {
        this.id = id;
    }
    return UserIdentificationModel;
}());

//# sourceMappingURL=user-identification.model.js.map

/***/ }),

/***/ 120:
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
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Http; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BibleVerseAPI; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_config__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(53);
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
var BibleVerseAPI = /** @class */ (function () {
    function BibleVerseAPI(http) {
        this.http = http;
    }
    BibleVerseAPI.prototype.getBibleVerse = function () {
        var url = 'https://beta.ourmanna.com/api/v1/get/?format=json';
        var bibleVerseJSON = this.http.get(url);
        return bibleVerseJSON;
    };
    BibleVerseAPI = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], BibleVerseAPI);
    return BibleVerseAPI;
}());

//# sourceMappingURL=http-api.js.map

/***/ }),

/***/ 16:
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

/***/ 161:
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
webpackEmptyAsyncContext.id = 161;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return appVersion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__functions_src_constants_environment_constant__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__functions_src_constants_destinations_constant__ = __webpack_require__(286);


var CONFIG = {
    url: __WEBPACK_IMPORTED_MODULE_0__functions_src_constants_environment_constant__["a" /* environment */].development ? __WEBPACK_IMPORTED_MODULE_1__functions_src_constants_destinations_constant__["a" /* firebaseServe */] : __WEBPACK_IMPORTED_MODULE_1__functions_src_constants_destinations_constant__["b" /* firebaseSite */]
};
var appVersion = 'a2020.00.01';
//# sourceMappingURL=app-config.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return functionsVersion; });
var environment = {
    development: false,
    migrate: false
};
var functionsVersion = 'f2020.00.01';
//# sourceMappingURL=environment.constant.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_functions__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__functions_src_models_student_model__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__functions_src_constants_bediening_tables_constant__ = __webpack_require__(108);
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
        this.tables = __WEBPACK_IMPORTED_MODULE_7__functions_src_constants_bediening_tables_constant__["a" /* bedieningTables */];
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
        else if (value.bedieningtable == null || value.bedieningtable == "") {
            Object(__WEBPACK_IMPORTED_MODULE_5__app_functions__["c" /* presentToast */])(this.toastCtrl, "Please select the table you sit at bediening.");
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
            var jsonArr = new __WEBPACK_IMPORTED_MODULE_6__functions_src_models_student_model__["a" /* StudentModel */](value.username, value.password, value.email, value.fname, value.sname, value.studentnumber, value.firstyearyear, value.bedieningtable, value.semi, HKMode);
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
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp\src\pages\user\register\register.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Registration</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <form (submit)="registerUser(regUser.value)" [formGroup]="regUser">\n\n        <ion-list>\n\n            <ion-item> \n\n                <ion-label floating>Name<span style="color:red">*</span></ion-label>\n\n                <ion-input formControlName="fname" type="text" maxlength="50"></ion-input>        \n\n            </ion-item>\n\n            <ion-item> \n\n                <ion-label floating>Surname<span style="color:red">*</span></ion-label>\n\n                <ion-input formControlName="sname" type="text" maxlength="50"></ion-input>        \n\n            </ion-item>\n\n            <ion-item> \n\n                <ion-label floating>Email<span style="color:red">*</span></ion-label>\n\n                <ion-input formControlName="email" type="text" maxlength="100"></ion-input>        \n\n            </ion-item>\n\n            <ion-item> \n\n                <ion-label floating>Username<span style="color:red">*</span></ion-label>\n\n                <ion-input formControlName="username" type="text" maxlength="50"></ion-input>        \n\n            </ion-item>\n\n            <ion-item> \n\n                <ion-label floating>Student Number<span style="color:red">*</span></ion-label>\n\n                <ion-input formControlName="studentnumber" type="number" maxlength="8"></ion-input>        \n\n            </ion-item>\n\n            <ion-item> \n\n                <ion-label floating>Year of First year<span style="color:red">*</span></ion-label>\n\n                <ion-input formControlName="firstyearyear" type="number"></ion-input>        \n\n            </ion-item>\n\n            <ion-item> \n\n                <ion-label floating>Your Bediening Table<span style="color:red">*</span></ion-label>\n\n                <ion-select formControlName="bedieningtable">\n\n                    <ion-option *ngFor="let table of tables" [value]="table.value">{{ table.description }}</ion-option>\n\n                </ion-select>        \n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label>Semi</ion-label>\n\n                <ion-checkbox right formControlName="semi"></ion-checkbox>\n\n            </ion-item>\n\n            <ion-item> \n\n                <ion-label floating>Password<span style="color:red">*</span></ion-label>\n\n                <ion-input formControlName="password" type="password" maxlength="32"></ion-input>        \n\n            </ion-item>\n\n            <ion-item> \n\n                <ion-label floating>Confirm Password<span style="color:red">*</span></ion-label>\n\n                <ion-input formControlName="confirmpassword" type="password" maxlength="32"></ion-input>        \n\n            </ion-item>\n\n        </ion-list>\n\n        <button ion-button outline round type="submit" block>Register</button>\n\n    </form>\n\n\n\n    <div padding>\n\n\n\n    </div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp\src\pages\user\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__http_api__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginNonniePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_functions__ = __webpack_require__(16);
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
            password: value.pass
        };
        this.http.post("/nonnie-login", jsonArr).subscribe(function (data) {
            var jsonResp = JSON.parse(data.text());
            if (jsonResp.success) {
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
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp\src\pages\nonnie\login-nonnie\login.html"*/'<ion-content>\n\n    <div id=register-container class="container">\n\n        <div class="login-pane">\n\n            <form (submit)="loginNonnie(nonnieLogin.value)" [formGroup]="nonnieLogin">\n\n                <ion-list>\n\n                    <ion-item>\n\n                        <ion-label>\n\n                            <h1>Welcome Nonnie</h1>\n\n                        </ion-label>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-label floating>Password</ion-label>\n\n                        <ion-input formControlName="pass" type="password"></ion-input>\n\n                    </ion-item>\n\n                    <button ion-button outline round block type="submit" color="tertiary" id="button">Login</button>\n\n                </ion-list>\n\n            </form>\n\n        </div>\n\n        <div id="register-info">\n\n        </div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp\src\pages\nonnie\login-nonnie\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__http_api__["b" /* Http */]])
    ], LoginNonniePage);
    return LoginNonniePage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__verify_verify__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__weekend_nonnie_weekend__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sign_out_nonnie_sign_out__ = __webpack_require__(213);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp\src\pages\nonnie\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Accounts" tabIcon="contacts"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Weekend Sign In List" tabIcon="ios-clipboard"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Week Day Sign In List" tabIcon="ios-clipboard"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp\src\pages\nonnie\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_functions__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__verify_edit_verify_edit__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__verify_edit_weekend_verify_edit_weekend__ = __webpack_require__(209);
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
            _this.unverifiedAccounts = jsonResp;
        }, function (error) {
            Object(__WEBPACK_IMPORTED_MODULE_3__app_functions__["a" /* handleError */])(_this.navCtrl, error, _this.toastCtrl);
        });
    };
    VerifyPage.prototype.loadVerifiedAccounts = function () {
        var _this = this;
        this.unverifiedAccounts = [];
        this.http.get('/getVerifiedAccounts').subscribe(function (data) {
            var jsonResp = JSON.parse(data.text());
            _this.verifiedAccounts = jsonResp;
        }, function (error) {
            Object(__WEBPACK_IMPORTED_MODULE_3__app_functions__["a" /* handleError */])(_this.navCtrl, error, _this.toastCtrl);
        });
    };
    VerifyPage.prototype.verifyAccount = function (account) {
        var _this = this;
        var reqSend = {
            id: account.studentID
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
            id: account.studentID
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
            id: account.studentID
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
            selector: 'page-verify',template:/*ion-inline-start:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp\src\pages\nonnie\verify\verify.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Accounts</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="refresh()">Refresh</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <h1>\n\n    Verify Accounts\n\n  </h1>\n\n  <ion-list>\n\n    <ion-card class="account card" *ngFor="let account of unverifiedAccounts" color="primary" [style.background-color]="account.isHK ? \'#f53d3d\' : \'#488aff\'">\n\n      <ion-card-header>  \n\n          <ion-item color="primary">\n\n              <ion-label item-start><h1>{{account.fullName}}</h1></ion-label>\n\n              <button ion-button item-end (click)="verifyAccount(account)">Verify</button>\n\n              <button ion-button item-end (click)="discardAccount(account)">Discard</button>\n\n          </ion-item>              \n\n      </ion-card-header>\n\n      <ion-card-content>   \n\n          <ion-item color="primary">          \n\n            <ion-label>Username: {{account.username}}</ion-label>\n\n          </ion-item>\n\n          <ion-item color="primary">\n\n            <ion-label>Email address: {{account.email}}</ion-label> \n\n          </ion-item>\n\n          <ion-item color="primary">\n\n            <ion-label>Bediening Table: {{account.bedieningTable}}</ion-label> \n\n          </ion-item>\n\n          <ion-item *ngIf="account.isHK" color="primary">\n\n            <ion-label>HK Member</ion-label>  \n\n          </ion-item>            \n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-list>\n\n\n\n  <h1>\n\n    Manage Accounts\n\n  </h1>\n\n  <ion-list>\n\n    <ion-card *ngFor="let account of verifiedAccounts" color="primary">\n\n      <ion-card-header>\n\n          <ion-item color="primary">\n\n            <ion-label item-start><h1>{{account.fullName}}</h1></ion-label>\n\n            <button ion-button item-end (click)="editAccount(account)">Edit</button>\n\n            <button ion-button item-end (click)="presentDeleteConfirm(account)">Delete</button>\n\n            <button ion-button item-end (click)="editWeekend(account)">Edit Weekend Sign In</button>\n\n          </ion-item> \n\n      </ion-card-header>\n\n      <ion-card-content>   \n\n        <ion-item color="primary">          \n\n          <ion-label>Username: {{account.username}}</ion-label>\n\n        </ion-item>\n\n        <ion-item color="primary">\n\n          <ion-label>Email address: {{account.email}}</ion-label> \n\n        </ion-item>\n\n        <ion-item color="primary">\n\n          <ion-label>Bediening Table: {{account.bedieningTable}}</ion-label> \n\n        </ion-item>   \n\n        <ion-item color="primary">\n\n            <ion-label>Semi: {{ account.isSemi ? \'Yes\' : \'No\' }}</ion-label> \n\n          </ion-item>            \n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp\src\pages\nonnie\verify\verify.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__http_api__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], VerifyPage);
    return VerifyPage;
}());

//# sourceMappingURL=verify.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__functions_src_constants_bediening_tables_constant__ = __webpack_require__(108);
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
        this.tables = __WEBPACK_IMPORTED_MODULE_3__functions_src_constants_bediening_tables_constant__["a" /* bedieningTables */];
        this.information = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            table: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            semi: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]()
        });
        this.loadAccountInformation();
    }
    VerifyEditPage.prototype.loadAccountInformation = function () {
        this.account = this.navParams.get('account');
        this.bedieningTableID = this.account.bedieningTable;
        this.semi = this.account.isSemi;
    };
    VerifyEditPage.prototype.submit = function (value) {
        var jsonSend = {
            studentID: this.account.studentID,
            bedieningTable: value.table,
            isSemi: value.semi
        };
        this.viewCtrl.dismiss(jsonSend);
    };
    VerifyEditPage.prototype.cancel = function () {
        this.account = this.navParams.get('account');
        this.viewCtrl.dismiss(null);
    };
    VerifyEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-verify-edit',template:/*ion-inline-start:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp\src\pages\nonnie\verify\verify-edit\verify-edit.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Edit Account</ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="cancel()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <h1>Information regarding {{account.fullName}}</h1>\n\n  <form (submit)="submit(information.value)" [formGroup]="information">\n\n    <ion-list>\n\n      <ion-item> \n\n        <ion-label floating>Your Bediening Table<span style="color:red">*</span></ion-label>\n\n        <ion-select formControlName="table" [(ngModel)]="bedieningTableID">\n\n          <ion-option *ngFor="let table of tables" [value]="table.value">{{ table.description }}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Semi</ion-label>\n\n        <ion-checkbox right formControlName="semi" [(ngModel)]="semi"></ion-checkbox>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button outline round type="submit" block>Update</button>\n\n		\n\n	</form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp\src\pages\nonnie\verify\verify-edit\verify-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], VerifyEditPage);
    return VerifyEditPage;
}());

//# sourceMappingURL=verify-edit.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyEditWeekendPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_functions__ = __webpack_require__(16);
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
            id: this.account.studentID
        };
        this.http.post('/get-weekend', reqSend).subscribe(function (data) {
            var jsonResp = JSON.parse(data.text());
            _this.meals = jsonResp;
        }, function (error) {
            Object(__WEBPACK_IMPORTED_MODULE_3__app_functions__["a" /* handleError */])(_this.navCtrl, error, _this.toastCtrl);
        });
    };
    VerifyEditWeekendPage.prototype.updateSlot = function (meal) {
        var _this = this;
        meal.status = !meal.status;
        var reqSend = {
            student: this.account.studentID,
            fridayDinner: this.meals[0].status,
            saturdayBrunch: this.meals[1].status,
            saturdayDinner: this.meals[2].status,
            sundayBreakfast: this.meals[3].status,
            sundayLunch: this.meals[4].status,
            sundayDinner: this.meals[5].status
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
            selector: 'page-verify-edit-weekend',template:/*ion-inline-start:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp\src\pages\nonnie\verify\verify-edit-weekend\verify-edit-weekend.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n	<ion-title>Edit Weekend Sign In</ion-title>\n\n	<ion-buttons start>\n\n		<button ion-button (click)="cancel()">\n\n			<ion-icon name="close"></ion-icon>\n\n		</button>\n\n	</ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<h1>Information regarding {{account.fullName}}</h1>\n\n	<ion-list>\n\n		<ion-card color="primary" *ngFor="let meal of meals" (click)="updateSlot(meal)">\n\n			<ion-card-content>   \n\n				<ion-item [style.background-color]="meal.status ? \'#119b05\' : \'#f53d3d\'">          \n\n					<ion-label style="color:white">{{meal.meal}} {{meal.date}}</ion-label>           \n\n				</ion-item>             \n\n			</ion-card-content>\n\n		</ion-card>\n\n	</ion-list>\n\n	<button ion-button outline round block (click)="cancel()">Done</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp\src\pages\nonnie\verify\verify-edit-weekend\verify-edit-weekend.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__http_api__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], VerifyEditWeekendPage);
    return VerifyEditWeekendPage;
}());

//# sourceMappingURL=verify-edit-weekend.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeekendNonniePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_papaparse__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_papaparse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_papaparse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_functions__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__functions_src_utils_date_util__ = __webpack_require__(212);
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
        this.meals = ["Friday Dinner", "Saturday Brunch", "Saturday Dinner", "Sunday Breakfast", "Sunday Lunch", "Sunday Dinner"];
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
        var csvHeaderA = ["Table", "Student", "Friday Dinner", "Saturday Brunch", "Saturday Dinner", "Sunday Breakfast", "Sunday Lunch", "Sunday Dinner"];
        var csv = __WEBPACK_IMPORTED_MODULE_3_papaparse__["unparse"]({
            fields: csvHeaderA,
            data: this.seatingMapList
        });
        // Dummy implementation for Desktop download purpose
        var blob = new Blob([csv]);
        var a = window.document.createElement("a");
        a.href = window.URL.createObjectURL(blob);
        a.download = "Weekend Sign In " + Object(__WEBPACK_IMPORTED_MODULE_5__functions_src_utils_date_util__["a" /* getNextDayOfWeek */])(5) + "-" + Object(__WEBPACK_IMPORTED_MODULE_5__functions_src_utils_date_util__["a" /* getNextDayOfWeek */])(0) + ".csv";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
    WeekendNonniePage.prototype.refresh = function () {
        this.getWeekendSignIns();
    };
    WeekendNonniePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-weekend',template:/*ion-inline-start:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp\src\pages\nonnie\weekend-nonnie\weekend.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<ion-title>Weekend Sign In List</ion-title>\n\n		<ion-buttons end>\n\n			<button ion-button icon-only (click)="refresh()">\n\n				<ion-icon name="refresh"></ion-icon>\n\n			</button>\n\n			<button ion-button icon-only (click)="downloadCSV()">\n\n				<ion-icon name="download"></ion-icon>\n\n			</button>\n\n		</ion-buttons>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<table border=1>\n\n		<tr>\n\n			<th width="20%">Table</th>\n\n			<th width="50%">Student</th>\n\n			<th *ngFor="let meal of meals"><b>{{ meal }}</b></th>\n\n		</tr>\n\n		<tr *ngFor="let student of seatingMapList; let i = index">\n\n			<td *ngFor="let field of student; let j = index" [style.background-color]="field == false ? \'#f53d3d\' : (field == true ? \'#119b05\' : \'#FFFFFF\')">\n\n				<div *ngIf="field != false && field != true">					\n\n					{{ field }}\n\n				</div>\n\n				<div *ngIf="field == false && field != true">\n\n					Signed Out\n\n				</div>\n\n				<div *ngIf="field != false && field == true">\n\n					Signed In\n\n				</div>		\n\n			</td>\n\n		</tr>		\n\n	</table>\n\n	<ion-label>Number of Students Signed In on Friday Dinner: {{ countFrD }}</ion-label>\n\n	<ion-label>Number of Students Signed In on Saturday Brunch: {{ countSaB }}</ion-label>\n\n	<ion-label>Number of Students Signed In on Saturday Dinner: {{ countSaD }}</ion-label>\n\n	<ion-label>Number of Students Signed In on Sunday Breakfast: {{ countSuB }}</ion-label>\n\n	<ion-label>Number of Students Signed In on Sunday Lunch: {{ countSuL }}</ion-label>\n\n	<ion-label>Number of Students Signed In on Sunday Dinner: {{ countSuD }}</ion-label>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp\src\pages\nonnie\weekend-nonnie\weekend.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__http_api__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], WeekendNonniePage);
    return WeekendNonniePage;
}());

//# sourceMappingURL=weekend.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getNextDayOfWeek;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return weekInMilliseconds; });
function getNextDayOfWeek(dayOfWeek) {
    var date = new Date();
    var resultDate = new Date();
    resultDate.setDate(date.getDate() + (7 + dayOfWeek - date.getDay()) % 7);
    return resultDate.getDate().toString() + "/" + (resultDate.getMonth() + 1).toString();
}
var weekInMilliseconds = 604800000;
//# sourceMappingURL=date.util.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignOutNonniePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_papaparse__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_papaparse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_papaparse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_functions__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__functions_src_models_weekday_model__ = __webpack_require__(214);
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
        this.WeekdaySignInStatus = __WEBPACK_IMPORTED_MODULE_5__functions_src_models_weekday_model__["a" /* WeekdaySignInStatus */];
        this.getCurrentSignOut();
    }
    SignOutNonniePage.prototype.getCurrentSignOut = function () {
        var _this = this;
        this.http.get('/currentSignInList').subscribe(function (data) {
            _this.seatingMapList = [];
            _this.lunchCount = 0;
            _this.dinnerCount = 0;
            var jsonResp = JSON.parse(data.text());
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
            selector: 'page-sign-out',template:/*ion-inline-start:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp\src\pages\nonnie\sign-out-nonnie\sign-out.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<ion-title>Today\'s Sign In List</ion-title>\n\n		<ion-buttons end>\n\n			<button ion-button icon-only (click)="refresh()">\n\n				<ion-icon name="refresh"></ion-icon>\n\n			</button>\n\n			<button ion-button icon-only (click)="downloadCSV()">\n\n				<ion-icon name="download"></ion-icon>\n\n			</button>			\n\n		</ion-buttons>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<table border=1>\n\n		<tr>\n\n			<th width="20%">Table</th>\n\n			<th width="50%">Student</th>\n\n			<th [style.background-color]="lunchMealStatus == WeekdaySignInStatus.signedOutPermanent ? \'#f53d3d\' : \'#119b05\'"><b>{{ lunchMeal }}</b></th>\n\n			<th [style.background-color]="dinnerMealStatus == WeekdaySignInStatus.signedOutPermanent ? \'#f53d3d\' : \'#119b05\'"><b>{{ dinnerMeal }}</b></th>\n\n		</tr>\n\n		<tr *ngFor="let student of seatingMapList;">\n\n			<td *ngFor="let field of student;" [style.background-color]="field == WeekdaySignInStatus.signedOutPermanent ? \'#FFFF00\' : (field == WeekdaySignInStatus.signedOutTemporarily ? \'#f53d3d\' : (field == WeekdaySignInStatus.signedIn ? \'#119b05\' : \'#FFFFFF\'))">\n\n				<div *ngIf="field != WeekdaySignInStatus.signedOutPermanent && field != WeekdaySignInStatus.signedOutTemporarily && field != WeekdaySignInStatus.signedIn">\n\n					{{ field }}\n\n				</div>	\n\n				<div *ngIf="field == WeekdaySignInStatus.signedOutPermanent && field != WeekdaySignInStatus.signedOutTemporarily && field != WeekdaySignInStatus.signedIn">\n\n					Permanent Sign Out\n\n				</div>	\n\n				<div *ngIf="field != WeekdaySignInStatus.signedOutPermanent && field == WeekdaySignInStatus.signedOutTemporarily && field != WeekdaySignInStatus.signedIn">\n\n					Signed Out\n\n				</div>\n\n				<div *ngIf="field != WeekdaySignInStatus.signedOutPermanent && field != WeekdaySignInStatus.signedOutTemporarily && field == WeekdaySignInStatus.signedIn">\n\n					Signed In\n\n				</div>					\n\n			</td>\n\n		</tr>\n\n	</table>\n\n	<ion-label>Number of Students Signed In for Lunch: {{ lunchCount }}</ion-label>\n\n	<ion-label>Number of Students Signed In for Dinner: {{ dinnerCount }}</ion-label>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp\src\pages\nonnie\sign-out-nonnie\sign-out.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__http_api__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], SignOutNonniePage);
    return SignOutNonniePage;
}());

//# sourceMappingURL=sign-out.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getWeekdayMeals */
/* unused harmony export WeekdayModel */
/* unused harmony export getWeekdayMealStatuses */
/* unused harmony export createInitialWeekdayEntry */
/* unused harmony export getMealNumberByTime */
/* unused harmony export WeekdayMeals */
/* unused harmony export WeekdayMealsArray */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeekdaySignInStatus; });
/* unused harmony export MealType */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_mealDeadlines_constant__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_date_util__ = __webpack_require__(212);


function getWeekdayMeals(weekendDetailFromStudent) {
    var weekendMeals = [
        {
            meal: WeekdayMeals.mondayLunch,
            status: weekendDetailFromStudent.mondayLunch,
            date: getWeeklySignOutDayDate(1, 1),
            openStatus: getOpenStatus(1)
        },
        {
            meal: WeekdayMeals.mondayDinner,
            status: weekendDetailFromStudent.mondayDinner,
            date: getWeeklySignOutDayDate(2, 1),
            openStatus: getOpenStatus(2)
        },
        {
            meal: WeekdayMeals.tuesdayLunch,
            status: weekendDetailFromStudent.tuesdayLunch,
            date: getWeeklySignOutDayDate(3, 2),
            openStatus: getOpenStatus(3)
        },
        {
            meal: WeekdayMeals.tuesdayDinner,
            status: weekendDetailFromStudent.tuesdayDinner,
            date: getWeeklySignOutDayDate(4, 2),
            openStatus: getOpenStatus(4)
        },
        {
            meal: WeekdayMeals.wednesdayLunch,
            status: weekendDetailFromStudent.wednesdayLunch,
            date: getWeeklySignOutDayDate(5, 3),
            openStatus: getOpenStatus(5)
        },
        {
            meal: WeekdayMeals.wednesdayDinner,
            status: weekendDetailFromStudent.wednesdayDinner,
            date: getWeeklySignOutDayDate(6, 3),
            openStatus: getOpenStatus(6)
        },
        {
            meal: WeekdayMeals.thursdayLunch,
            status: weekendDetailFromStudent.thursdayLunch,
            date: getWeeklySignOutDayDate(7, 4),
            openStatus: getOpenStatus(7)
        },
        {
            meal: WeekdayMeals.thursdayDinner,
            status: weekendDetailFromStudent.thursdayDinner,
            date: getWeeklySignOutDayDate(8, 4),
            openStatus: getOpenStatus(8)
        },
        {
            meal: WeekdayMeals.fridayLunch,
            status: weekendDetailFromStudent.fridayLunch,
            date: getWeeklySignOutDayDate(9, 5),
            openStatus: getOpenStatus(9)
        }
    ];
    return weekendMeals;
}
var WeekdayModel = /** @class */ (function () {
    function WeekdayModel(mondayLunch, mondayDinner, tuesdayLunch, tuesdayDinner, wednesdayLunch, wednesdayDinner, thursdayLunch, thursdayDinner, fridayLunch, student) {
        if (mondayLunch === void 0) { mondayLunch = WeekdaySignInStatus.signedIn; }
        if (mondayDinner === void 0) { mondayDinner = WeekdaySignInStatus.signedIn; }
        if (tuesdayLunch === void 0) { tuesdayLunch = WeekdaySignInStatus.signedIn; }
        if (tuesdayDinner === void 0) { tuesdayDinner = WeekdaySignInStatus.signedIn; }
        if (wednesdayLunch === void 0) { wednesdayLunch = WeekdaySignInStatus.signedIn; }
        if (wednesdayDinner === void 0) { wednesdayDinner = WeekdaySignInStatus.signedIn; }
        if (thursdayLunch === void 0) { thursdayLunch = WeekdaySignInStatus.signedIn; }
        if (thursdayDinner === void 0) { thursdayDinner = WeekdaySignInStatus.signedIn; }
        if (fridayLunch === void 0) { fridayLunch = WeekdaySignInStatus.signedIn; }
        this.mondayLunch = mondayLunch;
        this.mondayDinner = mondayDinner;
        this.tuesdayLunch = tuesdayLunch;
        this.tuesdayDinner = tuesdayDinner;
        this.wednesdayLunch = wednesdayLunch;
        this.wednesdayDinner = wednesdayDinner;
        this.thursdayLunch = thursdayLunch;
        this.thursdayDinner = thursdayDinner;
        this.fridayLunch = fridayLunch;
        this.student = student;
    }
    return WeekdayModel;
}());

function getOpenStatus(mealPosition) {
    var today = new Date();
    var afterLunchDeadline = today.getHours() >= __WEBPACK_IMPORTED_MODULE_0__constants_mealDeadlines_constant__["a" /* weekdayDeadlines */].lunchDeadlineHour;
    var afterDinnerDeadline = today.getHours() >= __WEBPACK_IMPORTED_MODULE_0__constants_mealDeadlines_constant__["a" /* weekdayDeadlines */].dinnerDeadlineHour;
    var todayDay = today.getDay();
    switch (mealPosition) {
        case 1: return ((!afterLunchDeadline && todayDay == 1) || todayDay < 1);
        case 2: return ((!afterDinnerDeadline && todayDay == 1) || todayDay < 1);
        case 3: return ((!afterLunchDeadline && todayDay == 2) || todayDay < 2);
        case 4: return ((!afterDinnerDeadline && todayDay == 2) || todayDay < 2);
        case 5: return ((!afterLunchDeadline && todayDay == 3) || todayDay < 3);
        case 6: return ((!afterDinnerDeadline && todayDay == 3) || todayDay < 3);
        case 7: return ((!afterLunchDeadline && todayDay == 4) || todayDay < 4);
        case 8: return ((!afterDinnerDeadline && todayDay == 4) || todayDay < 4);
        case 9: return ((!afterLunchDeadline && todayDay == 5) || todayDay < 5);
        default: return false;
    }
}
function getWeeklySignOutDayDate(mealPos, dayOfWeek) {
    var result;
    if (!mealAlreadyPassedToday(mealPos))
        result = Object(__WEBPACK_IMPORTED_MODULE_1__utils_date_util__["a" /* getNextDayOfWeek */])(dayOfWeek);
    else {
        var date = new Date();
        var currentDate = new Date();
        currentDate.setDate(date.getDate() + (7 + dayOfWeek - date.getDay()) % 7);
        var resultDate = new Date(currentDate.getTime() + __WEBPACK_IMPORTED_MODULE_1__utils_date_util__["b" /* weekInMilliseconds */]);
        result = resultDate.getDate().toString() + "/" + (resultDate.getMonth() + 1).toString();
    }
    return result;
}
function mealAlreadyPassedToday(mealPosition) {
    var today = new Date();
    var afterLunchDeadline = today.getHours() >= __WEBPACK_IMPORTED_MODULE_0__constants_mealDeadlines_constant__["a" /* weekdayDeadlines */].lunchDeadlineHour;
    var afterDinnerDeadline = today.getHours() >= __WEBPACK_IMPORTED_MODULE_0__constants_mealDeadlines_constant__["a" /* weekdayDeadlines */].dinnerDeadlineHour;
    var todayDay = today.getDay();
    switch (mealPosition) {
        case 1: return (afterLunchDeadline && todayDay == 1);
        case 2: return (afterDinnerDeadline && todayDay == 1);
        case 3: return (afterLunchDeadline && todayDay == 2);
        case 4: return (afterDinnerDeadline && todayDay == 2);
        case 5: return (afterLunchDeadline && todayDay == 3);
        case 6: return (afterDinnerDeadline && todayDay == 3);
        case 7: return (afterLunchDeadline && todayDay == 4);
        case 8: return (afterDinnerDeadline && todayDay == 4);
        case 9: return (afterLunchDeadline && todayDay == 5);
        default: return false;
    }
}
function getWeekdayMealStatuses(weekdayDetailFromStudent) {
    return {
        mondayLunch: weekdayDetailFromStudent.mondayLunch,
        mondayDinner: weekdayDetailFromStudent.mondayDinner,
        tuesdayLunch: weekdayDetailFromStudent.tuesdayLunch,
        tuesdayDinner: weekdayDetailFromStudent.tuesdayDinner,
        wednesdayLunch: weekdayDetailFromStudent.wednesdayLunch,
        wednesdayDinner: weekdayDetailFromStudent.wednesdayDinner,
        thursdayDinner: weekdayDetailFromStudent.thursdayDinner,
        thursdayLunch: weekdayDetailFromStudent.thursdayLunch,
        fridayLunch: weekdayDetailFromStudent.fridayLunch
    };
}
function createInitialWeekdayEntry(student) {
    return {
        student: student,
        mondayLunch: WeekdaySignInStatus.signedIn,
        mondayDinner: WeekdaySignInStatus.signedIn,
        tuesdayLunch: WeekdaySignInStatus.signedIn,
        tuesdayDinner: WeekdaySignInStatus.signedIn,
        wednesdayLunch: WeekdaySignInStatus.signedIn,
        wednesdayDinner: WeekdaySignInStatus.signedIn,
        thursdayLunch: WeekdaySignInStatus.signedIn,
        thursdayDinner: WeekdaySignInStatus.signedIn,
        fridayLunch: WeekdaySignInStatus.signedIn,
    };
}
function getMealNumberByTime(time) {
    var today = new Date();
    switch (today.getDay()) {
        case 1: return time === MealType.lunch ? WeekdayMeals.mondayLunch : WeekdayMeals.mondayDinner;
        case 2: return time === MealType.lunch ? WeekdayMeals.tuesdayLunch : WeekdayMeals.tuesdayDinner;
        case 3: return time === MealType.lunch ? WeekdayMeals.wednesdayLunch : WeekdayMeals.wednesdayDinner;
        case 4: return time === MealType.lunch ? WeekdayMeals.thursdayLunch : WeekdayMeals.thursdayDinner;
        case 5: return WeekdayMeals.fridayLunch;
        default: return WeekdayMeals.mondayLunch;
    }
}
var WeekdayMeals;
(function (WeekdayMeals) {
    WeekdayMeals["mondayLunch"] = "Monday Lunch";
    WeekdayMeals["mondayDinner"] = "Monday Dinner";
    WeekdayMeals["tuesdayLunch"] = "Tuesday Lunch";
    WeekdayMeals["tuesdayDinner"] = "Tuesday Dinner";
    WeekdayMeals["wednesdayLunch"] = "Wednesday Lunch";
    WeekdayMeals["wednesdayDinner"] = "Wednesday Dinner";
    WeekdayMeals["thursdayLunch"] = "Thursday Lunch";
    WeekdayMeals["thursdayDinner"] = "Thursday Dinner";
    WeekdayMeals["fridayLunch"] = "Friday Lunch";
})(WeekdayMeals || (WeekdayMeals = {}));
var WeekdayMealsArray = [
    'Monday Lunch',
    'Monday Dinner',
    'Tuesday Lunch',
    'Tuesday Dinner',
    'Wednesday Lunch',
    'Wednesday Dinner',
    'Thursday Lunch',
    'Thursday Dinner',
    'Friday Lunch',
];
var WeekdaySignInStatus;
(function (WeekdaySignInStatus) {
    WeekdaySignInStatus[WeekdaySignInStatus["signedOutPermanent"] = 0] = "signedOutPermanent";
    WeekdaySignInStatus[WeekdaySignInStatus["signedOutTemporarily"] = 1] = "signedOutTemporarily";
    WeekdaySignInStatus[WeekdaySignInStatus["signedIn"] = 2] = "signedIn";
})(WeekdaySignInStatus || (WeekdaySignInStatus = {}));
var MealType;
(function (MealType) {
    MealType[MealType["breakfast"] = 0] = "breakfast";
    MealType[MealType["lunch"] = 1] = "lunch";
    MealType[MealType["dinner"] = 2] = "dinner";
})(MealType || (MealType = {}));
//# sourceMappingURL=weekday.model.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return weekendSignInDeadline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return weekdayDeadlines; });
var weekendSignInDeadline = {
    friday: 4,
    fridayHour: 15,
    saturday: 5,
    sunday: 0
};
var weekdayDeadlines = {
    lunchDeadlineHour: 11,
    dinnerDeadlineHour: 15
};
//# sourceMappingURL=mealDeadlines.constant.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnouncementsAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_functions__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__functions_src_models_announcement_model__ = __webpack_require__(298);
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
        var newAnnouncement = new __WEBPACK_IMPORTED_MODULE_6__functions_src_models_announcement_model__["a" /* AnnouncementModel */](value.title, value.message, this.priorityMessage, this.global.myUsrID);
        this.newAnn.reset();
        this.viewCtrl.dismiss(newAnnouncement);
    };
    AnnouncementsAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-announcements-add',template:/*ion-inline-start:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp\src\pages\user\announcements\announcements-add\announcements-add.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Add Announcement</ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="cancel()">\n\n          <ion-icon name="close"></ion-icon>\n\n      </button>\n\n  </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <form  (submit)="addAnnouncement(newAnn.value)" [formGroup]="newAnn">\n\n        <ion-item>\n\n            <h2>Post New Announcement</h2>\n\n        </ion-item>\n\n        <ion-item> \n\n            <ion-label floating>Enter Title...</ion-label>\n\n            <ion-input formControlName="title" type="text" maxlength="50"></ion-input>        \n\n        </ion-item>\n\n        <ion-item id="message"> \n\n            <ion-label floating>Enter text...</ion-label>\n\n            <ion-textarea rows="10" formControlName="message" type="text" maxlength="10000"></ion-textarea>        \n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>Priority</ion-label>\n\n            <ion-checkbox (ionChange)="priorityMessage = !priorityMessage"></ion-checkbox>\n\n        </ion-item>\n\n        <button ion-button outline round type="submit" block>submit</button>\n\n    </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp\src\pages\user\announcements\announcements-add\announcements-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__http_api__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], AnnouncementsAddPage);
    return AnnouncementsAddPage;
}());

//# sourceMappingURL=announcements-add.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeekendPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_functions__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__functions_src_models_user_identification_model__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__functions_src_constants_mealDeadlines_constant__ = __webpack_require__(215);
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
        if ((today.getDay() == __WEBPACK_IMPORTED_MODULE_6__functions_src_constants_mealDeadlines_constant__["b" /* weekendSignInDeadline */].friday && today.getHours() > __WEBPACK_IMPORTED_MODULE_6__functions_src_constants_mealDeadlines_constant__["b" /* weekendSignInDeadline */].fridayHour)
            || today.getDay() >= __WEBPACK_IMPORTED_MODULE_6__functions_src_constants_mealDeadlines_constant__["b" /* weekendSignInDeadline */].saturday
            || today.getDay() == __WEBPACK_IMPORTED_MODULE_6__functions_src_constants_mealDeadlines_constant__["b" /* weekendSignInDeadline */].sunday) {
            this.weekendSignInOpen = false;
        }
    };
    WeekendPage.prototype.loadSlotValues = function () {
        var _this = this;
        var reqSend = new __WEBPACK_IMPORTED_MODULE_5__functions_src_models_user_identification_model__["a" /* UserIdentificationModel */](this.global.myUsrID);
        this.http.post('/get-weekend', reqSend).subscribe(function (data) {
            var jsonResp = JSON.parse(data.text());
            _this.meals = jsonResp;
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
                student: this.global.myUsrID,
                fridayDinner: this.meals[0].status,
                saturdayBrunch: this.meals[1].status,
                saturdayDinner: this.meals[2].status,
                sundayBreakfast: this.meals[3].status,
                sundayLunch: this.meals[4].status,
                sundayDinner: this.meals[5].status
            };
            this.http.post('/updateWeekend', reqSend).subscribe(function (data) {
            }, function (error) {
                Object(__WEBPACK_IMPORTED_MODULE_4__app_functions__["a" /* handleError */])(_this.navCtrl, error, _this.toastCtrl);
            });
        }
    };
    WeekendPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-weekend',template:/*ion-inline-start:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp\src\pages\user\weekend\weekend.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle right>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Weekend Sign In</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n    \n\n<ion-content padding>\n\n    <div *ngIf="!weekendSignInOpen">\n\n        <h1>Sign in for the weekend has closed</h1>\n\n    </div>\n\n    <div>\n\n        <p>Weekend Sign In closes every Thursday at 15:00.</p>\n\n        <ion-list>\n\n            <ion-card color="primary" class="weekendSlots card" *ngFor="let meal of meals" (click)="updateSlot(meal)">\n\n                <ion-card-content>   \n\n                    <ion-item [style.background-color]="meal.status ? \'#119b05\' : \'#f53d3d\'">          \n\n                        <ion-label style="color:white">{{meal.meal}} {{meal.date}}</ion-label>           \n\n                    </ion-item>             \n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-list>\n\n    </div>\n\n</ion-content>\n\n      '/*ion-inline-end:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp\src\pages\user\weekend\weekend.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_3__http_api__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], WeekendPage);
    return WeekendPage;
}());

//# sourceMappingURL=weekend.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignOutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_functions__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__functions_src_models_weekday_model__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__functions_src_models_user_identification_model__ = __webpack_require__(110);
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
        this.WeekdaySignInStatus = __WEBPACK_IMPORTED_MODULE_5__functions_src_models_weekday_model__["a" /* WeekdaySignInStatus */];
        this.loadSlotValues();
    }
    SignOutPage.prototype.loadSlotValues = function () {
        var _this = this;
        var reqSend = new __WEBPACK_IMPORTED_MODULE_6__functions_src_models_user_identification_model__["a" /* UserIdentificationModel */](this.global.myUsrID);
        this.http.post('/get-week', reqSend).subscribe(function (data) {
            var jsonResp = JSON.parse(data.text());
            _this.meals = jsonResp;
        }, function (error) {
            Object(__WEBPACK_IMPORTED_MODULE_4__app_functions__["a" /* handleError */])(_this.navCtrl, error, _this.toastCtrl);
        });
    };
    SignOutPage.prototype.updateSlot = function (meal) {
        var _this = this;
        meal.status = ++meal.status % 3;
        var reqSend = {
            student: this.global.myUsrID,
            mondayLunch: this.meals[0].status,
            mondayDinner: this.meals[1].status,
            tuesdayLunch: this.meals[2].status,
            tuesdayDinner: this.meals[3].status,
            wednesdayLunch: this.meals[4].status,
            wednesdayDinner: this.meals[5].status,
            thursdayLunch: this.meals[6].status,
            thursdayDinner: this.meals[7].status,
            fridayLunch: this.meals[8].status
        };
        this.http.post('/updateWeeklySignOut', reqSend).subscribe(function (data) {
        }, function (error) {
            Object(__WEBPACK_IMPORTED_MODULE_4__app_functions__["a" /* handleError */])(_this.navCtrl, error, _this.toastCtrl);
        });
    };
    SignOutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-out',template:/*ion-inline-start:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp\src\pages\user\sign-out\sign-out.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle right>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Sign Out</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n    \n\n<ion-content padding>\n\n    <p>Sign Out closes every weekday at 11:00 for Lunch and 15:00 for Dinner.</p>\n\n    <ion-list>\n\n        <ion-card color="primary" class="weekendSlots card" *ngFor="let meal of meals" (click)="updateSlot(meal)">\n\n            <ion-card-content *ngIf="meal.openStatus" [style.background-color]="meal.status == WeekdaySignInStatus.signedOutPermanent ? \'#FFFF00\' : (meal.status == WeekdaySignInStatus.signedOutTemporarily ? \'#f53d3d\' : \'#119b05\')">   \n\n                <ion-item [style.background-color]="meal.status == WeekdaySignInStatus.signedOutPermanent ? \'#FFFF00\' : (meal.status == WeekdaySignInStatus.signedOutTemporarily ? \'#f53d3d\' : \'#119b05\')">          \n\n					<ion-label [style.color]="meal.status == WeekdaySignInStatus.signedOutPermanent ? \'#000000\' : \'#ffffff\'">{{meal.meal}} {{meal.date}}</ion-label> \n\n                </ion-item> \n\n                <ion-item [style.background-color]="meal.status == WeekdaySignInStatus.signedOutPermanent ? \'#FFFF00\' : (meal.status == WeekdaySignInStatus.signedOutTemporarily ? \'#f53d3d\' : \'#119b05\')">\n\n                    <ion-label end *ngIf="meal.status == WeekdaySignInStatus.signedOutPermanent">Permanently Signed Out</ion-label>\n\n                    <ion-label end *ngIf="meal.status == WeekdaySignInStatus.signedOutTemporarily">Signed out for Now</ion-label>\n\n                    <ion-label end *ngIf="meal.status == WeekdaySignInStatus.signedIn">Signed In</ion-label>\n\n                </ion-item>           \n\n            </ion-card-content>\n\n        </ion-card>\n\n    </ion-list>\n\n</ion-content>\n\n      '/*ion-inline-end:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp\src\pages\user\sign-out\sign-out.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_3__http_api__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], SignOutPage);
    return SignOutPage;
}());

//# sourceMappingURL=sign-out.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_functions__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__functions_src_models_user_identification_model__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__functions_src_constants_bediening_tables_constant__ = __webpack_require__(108);
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
        this.tables = __WEBPACK_IMPORTED_MODULE_7__functions_src_constants_bediening_tables_constant__["a" /* bedieningTables */];
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
        var jsonSend = new __WEBPACK_IMPORTED_MODULE_6__functions_src_models_user_identification_model__["a" /* UserIdentificationModel */](this.global.myUsrID);
        this.http.post('/getSettings', jsonSend).subscribe(function (data) {
            var jsonResp = JSON.parse(data.text());
            _this.bedieningTableID = jsonResp.bedieningTable;
            _this.semi = jsonResp.isSemi;
            _this.emailAddress = jsonResp.email;
        }, function (error) {
            Object(__WEBPACK_IMPORTED_MODULE_5__app_functions__["a" /* handleError */])(_this.navCtrl, error, _this.toastCtrl);
        });
    };
    SettingsPage.prototype.updateInformation = function (value) {
        var _this = this;
        var jsonSend = {
            studentID: this.global.myUsrID,
            bedieningTable: value.table,
            isSemi: value.semi,
            email: value.email
        };
        if (this.editPasswordMode && value.newpassword != null || value.newpassword != "") {
            if (value.newpassword != value.confirmpassword) {
                Object(__WEBPACK_IMPORTED_MODULE_5__app_functions__["c" /* presentToast */])(this.toastCtrl, "Please ensure that your passwords match.");
                return false;
            }
        }
        this.http.post('/updateSettings', jsonSend).subscribe(function (data) {
            Object(__WEBPACK_IMPORTED_MODULE_5__app_functions__["c" /* presentToast */])(_this.toastCtrl, "Updated Information!");
            if (_this.editPasswordMode) {
                var jsonSend_1 = {
                    studentID: _this.global.myUsrID,
                    oldPassword: value.oldpassword,
                    newPassword: value.newpassword
                };
                _this.http.post('/updatePassword', jsonSend_1).subscribe(function (data) {
                    var jsonResp = JSON.parse(data.text());
                    if (jsonResp.success) {
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
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp\src\pages\user\settings\settings.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      	<button ion-button menuToggle right>\n\n    		<ion-icon name="menu"></ion-icon>\n\n      	</button>\n\n    <ion-title>Settings</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<h1>Update the settings you wish to change, leave the rest and click Update</h1>\n\n	<form (submit)="updateInformation(settings.value)" [formGroup]="settings">\n\n		<ion-list>\n\n			<ion-item> \n\n				<ion-label floating>Your Bediening Table<span style="color:red">*</span></ion-label>\n\n				<ion-select formControlName="table" [(ngModel)]="bedieningTableID">\n\n					<ion-option *ngFor="let table of tables" [value]="table.value">{{ table.description }}</ion-option>\n\n				</ion-select>        \n\n			</ion-item>\n\n			<ion-item>\n\n                <ion-label>Semi</ion-label>\n\n                <ion-checkbox right formControlName="semi" [(ngModel)]="semi"></ion-checkbox>\n\n			</ion-item>\n\n			<ion-item>\n\n				<ion-label floating>Update email adress</ion-label>\n\n				<ion-input formControlName="email" type="text" maxlength="100" [(ngModel)]="emailAddress"></ion-input>\n\n			</ion-item>\n\n		</ion-list>\n\n		<button *ngIf="!editPasswordMode" ion-button outline round (click)="editPasswordMode = !editPasswordMode">Change Password</button>\n\n		<button *ngIf="editPasswordMode" ion-button outline round (click)="editPasswordMode = !editPasswordMode">Cancel Changing Password</button>\n\n		<div *ngIf="editPasswordMode">\n\n			<ion-item> \n\n				<ion-label floating>Old Password</ion-label>\n\n				<ion-input formControlName="oldpassword" type="password" maxlength="32"></ion-input>        \n\n			</ion-item>\n\n			<ion-item> \n\n				<ion-label floating>New Password</ion-label>\n\n				<ion-input formControlName="newpassword" type="password" maxlength="32"></ion-input>        \n\n			</ion-item>\n\n			<ion-item> \n\n				<ion-label floating>Confirm Password</ion-label>\n\n				<ion-input formControlName="confirmpassword" type="password" maxlength="32"></ion-input>        \n\n			</ion-item>\n\n		</div>\n\n		<button ion-button outline round type="submit" block>Update</button>\n\n		\n\n	</form>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\bbdnet1882\Documents\Sonop\SonopApp\SonopApp\src\pages\user\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_3__http_api__["b" /* Http */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(243);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_http__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_local_notifications__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_global_global__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_nonnie_nonnie_module__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_user_user_module__ = __webpack_require__(303);
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
                    links: []
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
                __WEBPACK_IMPORTED_MODULE_3__http_api__["b" /* Http */],
                __WEBPACK_IMPORTED_MODULE_3__http_api__["a" /* BibleVerseAPI */],
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
        this.myUsrID = null;
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

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return firebaseSite; });
/* unused harmony export localNetwork */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseServe; });
var firebaseSite = 'https://diesonopapp.firebaseapp.com';
var localNetwork = 'http://10.0.3.193:8100/';
var firebaseServe = 'http://localhost:5000';
//# sourceMappingURL=destinations.constant.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentModel; });
/* unused harmony export StudentLoginModel */
var StudentModel = /** @class */ (function () {
    function StudentModel(username, password, email, name, surname, studentNumber, firstYearYear, bedieningTable, isSemi, isHk, verified) {
        if (verified === void 0) { verified = false; }
        this.username = username;
        this.password = password;
        this.email = email;
        this.name = name;
        this.surname = surname;
        this.studentNumber = studentNumber;
        this.firstYearYear = firstYearYear;
        this.bedieningTable = bedieningTable;
        this.isSemi = isSemi;
        this.isHk = isHk;
        this.verified = verified;
    }
    return StudentModel;
}());

var StudentLoginModel = /** @class */ (function () {
    function StudentLoginModel(studentID, studentInfo, success, isBestCoder) {
        this.studentID = studentID;
        this.studentInfo = studentInfo;
        this.success = success;
        this.isBestCoder = isBestCoder;
    }
    return StudentLoginModel;
}());

//# sourceMappingURL=student.model.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BedieningTable; });
/* unused harmony export BedieningTableModel */
var BedieningTable;
(function (BedieningTable) {
    BedieningTable["HK"] = "HK";
    BedieningTable["WesteSenior"] = "Weste Senior";
    BedieningTable["WesteJunior"] = "Weste Junior";
    BedieningTable["OosteSenior"] = "Ooste Senior";
    BedieningTable["OosteJunior"] = "Ooste Junior";
    BedieningTable["NoordeSenior"] = "Noorde Senior";
    BedieningTable["NoordeJunior"] = "Noorde Junior";
    BedieningTable["Sentraal"] = "Sentraal";
    BedieningTable["Senaat"] = "Senaat";
    BedieningTable["VerreWeste"] = "Verre Weste";
    BedieningTable["EersteJaar"] = "Eerste Jaar";
})(BedieningTable || (BedieningTable = {}));
var BedieningTableModel = /** @class */ (function () {
    function BedieningTableModel(description, value, seats) {
        this.description = description;
        this.value = value;
        this.seats = seats;
    }
    return BedieningTableModel;
}());

//# sourceMappingURL=bediening-table.enum.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnouncementModel; });
// import { DocumentReference } from "@google-cloud/firestore";
var AnnouncementModel = /** @class */ (function () {
    function AnnouncementModel(title, message, priority, postedBy, // DocumentReference
        datePosted) {
        if (datePosted === void 0) { datePosted = 0; }
        this.title = title;
        this.message = message;
        this.priority = priority;
        this.postedBy = postedBy;
        this.datePosted = datePosted;
    }
    return AnnouncementModel;
}());

//# sourceMappingURL=announcement.model.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NonnieModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nonnie_tabs_tabs__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nonnie_login_nonnie_login__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__http_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__verify_verify_module__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sign_out_nonnie_sign_out_module__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__weekend_nonnie_weekend_module__ = __webpack_require__(302);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var NonnieModule = /** @class */ (function () {
    function NonnieModule() {
    }
    NonnieModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__nonnie_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_1__nonnie_login_nonnie_login__["a" /* LoginNonniePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_app_component__["a" /* MyApp */]),
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__verify_verify_module__["a" /* VerifyPageModule */],
                __WEBPACK_IMPORTED_MODULE_11__weekend_nonnie_weekend_module__["a" /* WeekendPageModule */],
                __WEBPACK_IMPORTED_MODULE_10__sign_out_nonnie_sign_out_module__["a" /* SignOutPageModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_0__nonnie_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_1__nonnie_login_nonnie_login__["a" /* LoginNonniePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                { provide: __WEBPACK_IMPORTED_MODULE_5__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__http_api__["b" /* Http */]
            ]
        })
    ], NonnieModule);
    return NonnieModule;
}());

//# sourceMappingURL=nonnie.module.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verify__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__verify_edit_verify_edit__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__verify_edit_weekend_verify_edit_weekend__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var VerifyPageModule = /** @class */ (function () {
    function VerifyPageModule() {
    }
    VerifyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__verify__["a" /* VerifyPage */],
                __WEBPACK_IMPORTED_MODULE_3__verify_edit_verify_edit__["a" /* VerifyEditPage */],
                __WEBPACK_IMPORTED_MODULE_4__verify_edit_weekend_verify_edit_weekend__["a" /* VerifyEditWeekendPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__verify__["a" /* VerifyPage */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__verify__["a" /* VerifyPage */],
                __WEBPACK_IMPORTED_MODULE_3__verify_edit_verify_edit__["a" /* VerifyEditPage */],
                __WEBPACK_IMPORTED_MODULE_4__verify_edit_weekend_verify_edit_weekend__["a" /* VerifyEditWeekendPage */]
            ]
        })
    ], VerifyPageModule);
    return VerifyPageModule;
}());

//# sourceMappingURL=verify.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignOutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_out__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignOutPageModule = /** @class */ (function () {
    function SignOutPageModule() {
    }
    SignOutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sign_out__["a" /* SignOutNonniePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sign_out__["a" /* SignOutNonniePage */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__sign_out__["a" /* SignOutNonniePage */]
            ]
        })
    ], SignOutPageModule);
    return SignOutPageModule;
}());

//# sourceMappingURL=sign-out.module.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeekendPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__weekend__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WeekendPageModule = /** @class */ (function () {
    function WeekendPageModule() {
    }
    WeekendPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__weekend__["a" /* WeekendNonniePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__weekend__["a" /* WeekendNonniePage */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__weekend__["a" /* WeekendNonniePage */]
            ]
        })
    ], WeekendPageModule);
    return WeekendPageModule;
}());

//# sourceMappingURL=weekend.module.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__http_api__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__register_register__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_global_global__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__sign_out_sign_out_module__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__settings_settings_module__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__weekend_weekend_module__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__announcements_announcements_module__ = __webpack_require__(307);
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
                __WEBPACK_IMPORTED_MODULE_8__register_register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_app_component__["a" /* MyApp */]),
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_11__sign_out_sign_out_module__["a" /* SignOutPageModule */],
                __WEBPACK_IMPORTED_MODULE_12__settings_settings_module__["a" /* SettingsPageModule */],
                __WEBPACK_IMPORTED_MODULE_13__weekend_weekend_module__["a" /* WeekendPageModule */],
                __WEBPACK_IMPORTED_MODULE_14__announcements_announcements_module__["a" /* AnnouncementsPageModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__register_register__["a" /* RegisterPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_5__http_api__["b" /* Http */],
                __WEBPACK_IMPORTED_MODULE_5__http_api__["a" /* BibleVerseAPI */],
                __WEBPACK_IMPORTED_MODULE_9__providers_global_global__["a" /* GlobalProvider */],
            ]
        })
    ], UserModule);
    return UserModule;
}());

//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignOutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_out__ = __webpack_require__(218);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignOutPageModule = /** @class */ (function () {
    function SignOutPageModule() {
    }
    SignOutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sign_out__["a" /* SignOutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sign_out__["a" /* SignOutPage */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__sign_out__["a" /* SignOutPage */]
            ]
        })
    ], SignOutPageModule);
    return SignOutPageModule;
}());

//# sourceMappingURL=sign-out.module.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]
            ]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeekendPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__weekend__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WeekendPageModule = /** @class */ (function () {
    function WeekendPageModule() {
    }
    WeekendPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__weekend__["a" /* WeekendPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__weekend__["a" /* WeekendPage */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__weekend__["a" /* WeekendPage */]
            ]
        })
    ], WeekendPageModule);
    return WeekendPageModule;
}());

//# sourceMappingURL=weekend.module.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnouncementsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__announcements__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__announcements_add_announcements_add__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AnnouncementsPageModule = /** @class */ (function () {
    function AnnouncementsPageModule() {
    }
    AnnouncementsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__announcements__["a" /* AnnouncementsPage */],
                __WEBPACK_IMPORTED_MODULE_3__announcements_add_announcements_add__["a" /* AnnouncementsAddPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__announcements__["a" /* AnnouncementsPage */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__announcements__["a" /* AnnouncementsPage */],
                __WEBPACK_IMPORTED_MODULE_3__announcements_add_announcements_add__["a" /* AnnouncementsAddPage */]
            ]
        })
    ], AnnouncementsPageModule);
    return AnnouncementsPageModule;
}());

//# sourceMappingURL=announcements.module.js.map

/***/ })

},[220]);
//# sourceMappingURL=main.js.map