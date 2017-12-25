webpackJsonp([1,4],{

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.validateExpenseValue = function (expense) {
        if (expense.value == undefined || isNaN(expense.value + 1 || expense.value == null || expense.value == "")) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateExpenseDate = function (expense) {
        if (expense.date == undefined || expense.date.day == undefined || expense.date.year == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateExpenseCategory = function (expense) {
        if (expense.category == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=/Users/johannesbeiser/Desktop/ExpenseManagerApp/angular-src/src/validate.service.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(880);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateUserExpenses = function (expense) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var username = JSON.parse(localStorage.getItem('user')).username;
        var both = {
            ex: expense,
            usr: username
        };
        return this.http.post('users/addExpense', both, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.editUserExpenses = function (expense) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var username = JSON.parse(localStorage.getItem('user')).username;
        var both = {
            ex: expense,
            exId: expense.expenseId,
            usr: username
        };
        return this.http.post('users/editExpense', both, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.deleteUserExpense = function (index) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var username = JSON.parse(localStorage.getItem('user')).username;
        var both = {
            index: index,
            username: username
        };
        return this.http.post('users/deleteExpense', both, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.clearDatabase = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var usernameJson = { username: JSON.parse(localStorage.getItem('user')).username };
        return this.http.post('users/resetDatabase', usernameJson, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=/Users/johannesbeiser/Desktop/ExpenseManagerApp/angular-src/src/auth.service.js.map

/***/ }),

/***/ 514:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 514;


/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(634);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/johannesbeiser/Desktop/ExpenseManagerApp/angular-src/src/main.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentCommunicationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComponentCommunicationService = (function () {
    function ComponentCommunicationService() {
        this.dashboardActive = false;
        this.statisticsActive = false;
        this.expenseListActive = false;
        this.onHomeSite = false;
        this.categories = [
            { name: 'Food',
                color: '#607D8A',
                amount: 0,
                iconPath: 'resources/icons/categories/icon_Food.png'
            },
            {
                name: 'Transport',
                color: '#A5A8AA',
                amount: 0,
                iconPath: 'resources/icons/categories/icon_Transport.png'
            },
            {
                name: 'Accommodation',
                color: '#FFCD34',
                amount: 0,
                iconPath: 'resources/icons/categories/icon_Accomodation.png'
            },
            {
                name: 'Leisure',
                color: '#92CD00',
                amount: 0,
                iconPath: 'resources/icons/categories/icon_Leisure2.png'
            },
            {
                name: 'Multimedia',
                color: '#b14947',
                amount: 0,
                iconPath: 'resources/icons/categories/icon_Multimedia.png'
            },
            {
                name: 'Insurance & Health',
                color: '#fb8c00',
                amount: 0,
                iconPath: 'resources/icons/categories/icon_Insurance.png'
            },
            {
                name: 'Clothing & Hygiene',
                color: '#645F5D',
                amount: 0,
                iconPath: 'resources/icons/categories/icon_Clothing.png'
            },
            {
                name: 'General',
                color: '#444444',
                amount: 0,
                iconPath: 'resources/icons/categories/icon_General2.png'
            }
        ];
    }
    ComponentCommunicationService.prototype.deactivateAll = function () {
        this.dashboardActive = false;
        this.statisticsActive = false;
        this.expenseListActive = false;
    };
    ComponentCommunicationService.prototype.activateDashboard = function () {
        this.deactivateAll();
        this.dashboardActive = true;
    };
    ComponentCommunicationService.prototype.activateStatistics = function () {
        this.deactivateAll();
        this.statisticsActive = true;
    };
    ComponentCommunicationService.prototype.activateExpenseList = function () {
        this.deactivateAll();
        this.expenseListActive = true;
    };
    ComponentCommunicationService.prototype.activateHomeSite = function () {
        this.onHomeSite = true;
    };
    ComponentCommunicationService.prototype.deactivateHomeSite = function () {
        this.onHomeSite = false;
    };
    ComponentCommunicationService.prototype.isHomeSiteActive = function () {
        return this.onHomeSite;
    };
    ComponentCommunicationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ComponentCommunicationService);
    return ComponentCommunicationService;
}());
//# sourceMappingURL=/Users/johannesbeiser/Desktop/ExpenseManagerApp/angular-src/src/component-communication.service.js.map

/***/ }),

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_component_communication_service__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(authService, _compCommunication) {
        this.authService = authService;
        this._compCommunication = _compCommunication;
        this.title = 'app works!';
        this.onExpenseListSite = true;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(865),
            styles: [__webpack_require__(855)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_component_communication_service__["a" /* ComponentCommunicationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_component_communication_service__["a" /* ComponentCommunicationService */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/johannesbeiser/Desktop/ExpenseManagerApp/angular-src/src/app.component.js.map

/***/ }),

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_validate_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_component_communication_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_sidebar_sidebar_component__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_statistics_statistics_component__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_expense_list_expense_list_component__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_charts__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng2_datepicker__ = __webpack_require__(496);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'statistics', component: __WEBPACK_IMPORTED_MODULE_18__components_statistics_statistics_component__["a" /* StatisticsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'expenseList', component: __WEBPACK_IMPORTED_MODULE_19__components_expense_list_expense_list_component__["a" /* ExpenseListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_statistics_statistics_component__["a" /* StatisticsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_expense_list_expense_list_component__["a" /* ExpenseListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_20_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_21_ng2_datepicker__["a" /* DatePickerModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_14__services_component_communication_service__["a" /* ComponentCommunicationService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/johannesbeiser/Desktop/ExpenseManagerApp/angular-src/src/app.module.js.map

/***/ }),

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_component_communication_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_datepicker__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__ = __webpack_require__(853);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_validate_service__ = __webpack_require__(157);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DashboardComponent = (function () {
    function DashboardComponent(validateService, authService, _compCommunicationService, flashMessage) {
        this.validateService = validateService;
        this.authService = authService;
        this._compCommunicationService = _compCommunicationService;
        this.flashMessage = flashMessage;
        this.today = Date.now();
        this.monthTotal = 0;
        this.monthTotalString = '';
        this.latestActive = true;
        this.categories = this._compCommunicationService.categories; // TODO: Farbenerst bei hover original - davor entsättigt
        this.categoriesActiveArray = [];
        /*
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }*/
        this.chartData = [];
        this.chartLabels = [];
        this.backgroundColor = [];
        this.pieChartLabels = this.chartLabels;
        this.pieChartData = this.chartData;
        this.pieChartColor = [{ backgroundColor: this.backgroundColor }];
        this.pieChartType = 'pie';
        this.pieChartOptions = {
            legend: false,
            animation: false,
            tooltips: {
                enabled: true,
                bodyFontSize: 20
            }
        };
        this.monthSortedExpenses = [];
        this.dateSortedExpenses = [];
        this.tenLatestExpenses = [];
        /* ********************     MODAL   ************************* */
        this.editValue = "";
        this.editCategory = "";
        this.editCategoryPath = "";
        this.editDescription = "";
        this.modalShown = false; //TODO: When editing descriptiona dne emptying it, setting to " - no description available -"
        this.innerModal = false;
        this.datepickerOptions = new __WEBPACK_IMPORTED_MODULE_4_ng2_datepicker__["b" /* DatePickerOptions */]({
            format: 'DD-MM-YYYY'
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this._compCommunicationService.activateDashboard();
        this.categoryName = "General"; //Initial Value
        this.category = "General";
        this.newDate = new Date();
        this.currentMonth = this.newDate.getMonth() + 1;
        this.currentYear = this.newDate.getFullYear();
        this.updateProfileData();
        this.setCurrentDateToDatepicker();
        for (var i = 0; i < this.categories.length; i++) {
            this.categoriesActiveArray.push(false);
        }
        this.categoriesActiveArray[this.categories.length - 1] = true;
    };
    DashboardComponent.prototype.getCategoryIconPath = function (categoryName) {
        var path = '';
        for (var i = 0; i < this.categories.length; i++) {
            if (this.categories[i].name == categoryName) {
                path = this.categories[i].iconPath;
                break;
            }
        }
        return path;
    };
    /* returns JSON containing day, month, year and formatted in formatted style
     *
     */
    DashboardComponent.prototype.formatDate = function (day, month, year) {
        var formattedDay = "";
        var formattedMonth = "";
        var formattedYear = year + "";
        var formattedFormatted = "";
        if (day < 10) {
            formattedDay = "0" + day;
        }
        else {
            formattedDay = "" + day;
        }
        if (month < 10) {
            formattedMonth = "0" + month;
        }
        else {
            formattedMonth = "" + month;
        }
        formattedFormatted = formattedDay + "-" + formattedMonth + "-" + formattedYear;
        return { day: formattedDay, month: formattedMonth, year: formattedYear, formatted: formattedFormatted };
    };
    DashboardComponent.prototype.addDaytoDate = function (count) {
        var currentDatepickerDate = new Date(parseInt(this.datepickerDate.year), parseInt(this.datepickerDate.month) - 1, parseInt(this.datepickerDate.day));
        currentDatepickerDate.setDate(currentDatepickerDate.getDate() + count);
        var day = currentDatepickerDate.getDate();
        var month = currentDatepickerDate.getMonth() + 1;
        var year = currentDatepickerDate.getFullYear().toString();
        var formattedDate = this.formatDate(day, month, year);
        this.datepickerDate.formatted = formattedDate.formatted;
        this.datepickerDate.day = formattedDate.day;
        this.datepickerDate.month = formattedDate.month;
        this.datepickerDate.year = formattedDate.year;
    };
    DashboardComponent.prototype.setCurrentDateToDatepicker = function () {
        var day = this.newDate.getDate();
        var month = this.newDate.getMonth() + 1;
        var year = this.newDate.getFullYear().toString();
        var formattedDate = this.formatDate(day, month, year);
        this.datepickerDate = new __WEBPACK_IMPORTED_MODULE_4_ng2_datepicker__["c" /* DateModel */];
        this.datepickerDate.formatted = formattedDate.formatted;
        this.datepickerDate.day = formattedDate.day;
        this.datepickerDate.month = formattedDate.month;
        this.datepickerDate.year = formattedDate.year;
    };
    // events
    DashboardComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    DashboardComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    DashboardComponent.prototype.setCategoryName = function (value, index) {
        this.categoryName = value;
        for (var i = 0; i < this.categoriesActiveArray.length; i++) {
            this.categoriesActiveArray[i] = false;
        }
        this.categoriesActiveArray[index] = true;
    };
    DashboardComponent.prototype.onBlurAddExpenseValue = function () {
        if (this.value == undefined || this.value == "") {
        }
        else if (!this.value.match(/[a-z]/i)) {
            this.value = this.formatValue(this.value) + " €";
        }
    };
    DashboardComponent.prototype.focusFunctionAddValue = function () {
        if (this.value != undefined && this.value != "")
            this.value = this.formatValue(this.value);
    };
    DashboardComponent.prototype.formatValue = function (oldValue) {
        if (oldValue == null || oldValue == undefined || oldValue == "" || oldValue.match(/[a-z]/i)) {
            console.log("no formatting");
            oldValue = undefined;
            return oldValue;
        }
        console.log("formatiere:" + oldValue + ".");
        if (oldValue.indexOf('€') > -1) {
            oldValue = oldValue.replace(/€/g, "");
            oldValue = oldValue.replace(/ /g, "");
        }
        if (oldValue.indexOf(',') > -1) {
            oldValue = oldValue.replace(/,/g, ".");
        }
        if (oldValue.indexOf('.') == -1) {
            oldValue = oldValue + ".";
        }
        var decimalPlace = oldValue.length - 1 - oldValue.indexOf('.');
        var counter = 2; // max Zeros to add--> Loop iterates 2-0 times depending on DecimalPlace
        while (counter > decimalPlace) {
            oldValue = oldValue + "0";
            counter--;
        }
        return oldValue;
    };
    DashboardComponent.prototype.onExpenseSubmit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.value = _this.formatValue(_this.value);
            var expense = {
                expenseId: profile.user.nextExpenseDataId,
                value: _this.value,
                category: _this.categoryName,
                date: _this.datepickerDate,
                description: _this.description
            };
            if (expense.description == undefined) {
                expense.description = '- no description available -';
            }
            var splitterChar = "-";
            var seperatorIndex = _this.datepickerDate.formatted.length - 5;
            splitterChar = _this.datepickerDate.formatted.charAt(seperatorIndex);
            var dateArr = _this.datepickerDate.formatted.split(splitterChar);
            var day = dateArr[0];
            var month = dateArr[1];
            if (day.length == 1) {
                day = "0" + day;
            }
            if (month.length == 1) {
                month = "0" + month;
            }
            expense.date.day = day;
            expense.date.month = month;
            expense.date.year = dateArr[2];
            expense.date.formatted = day + "-" + month + "-" + dateArr[2];
            //TODO: wenn manuell eingegeben-->checken ob manuell und dann new Datemodel mit dem formattetem befüllen ...bzw ist ja das dateModel scon durch init als aktuelles datum da...dann muss nur vor der sendung an den server day,month und year gesetzt werden
            if (!_this.validateService.validateExpenseValue(expense)) {
                _this.flashMessage.show("Please fill in a value", { cssClass: 'alert-danger', timeout: 3000 });
                console.log('value false');
                return false;
            }
            if (!_this.validateService.validateExpenseCategory(expense)) {
                _this.flashMessage.show("Please fill in a category", { cssClass: 'alert-danger', timeout: 3000 });
                console.log('category false');
                return false;
            }
            if (!_this.validateService.validateExpenseDate(expense)) {
                _this.flashMessage.show("Please fill in a date", { cssClass: 'alert-danger', timeout: 3000 });
                console.log('date false');
                return false;
            }
            _this.monthTotal = 0;
            for (var i = 0; i < _this.categories.length; i++) {
                _this.categories[i].amount = 0;
            }
            if (expense.date.day == null) {
                alert('NULL DATE DAY'); //TODO: monatsformat umformatieren
            }
            _this.authService.updateUserExpenses(expense).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessage.show("Data added", { cssClass: 'alert-success', timeout: 1500 });
                    _this.updateProfileData();
                    _this.clearFormData();
                    _this.updateChart();
                    _this.setCurrentDateToDatepicker();
                }
                else {
                    _this.flashMessage.show("Failed to add data", { cssClass: 'alert-danger', timeout: 1500 });
                }
            });
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    DashboardComponent.prototype.clearFormData = function () {
        this.value = null;
        this.datepickerDate = undefined;
        this.datepickerDate = new __WEBPACK_IMPORTED_MODULE_4_ng2_datepicker__["c" /* DateModel */];
        this.description = null;
    };
    DashboardComponent.prototype.updateChart = function () {
        if (this.chart !== undefined) {
            this.chart.ngOnDestroy();
            this.chart.chart = this.chart.getChartBuilder(this.chart.ctx);
        }
    };
    DashboardComponent.prototype.showDescription = function (expense) {
        if (expense.shown) {
            expense.shown = false;
        }
        else {
            this.tenLatestExpenses.forEach(function (entry) {
                entry.shown = false;
            });
            expense.shown = true;
        }
    };
    DashboardComponent.prototype.updateProfileData = function () {
        var _this = this;
        this.monthTotal = 0;
        for (var i = 0; i < this.categories.length; i++) {
            this.categories[i].amount = 0;
        }
        this.authService.getProfile().subscribe(function (profile) {
            _this.monthSortedExpenses = [];
            _this.dateSortedExpenses = [];
            _this.tenLatestExpenses = [];
            _this.user = profile.user;
            for (var i = 0; i < _this.user.expenseData.length; i++) {
                for (var j = 0; j < _this.categories.length; j++) {
                    if (_this.user.expenseData[i].date.month == _this.currentMonth && _this.user.expenseData[i].date.year == _this.currentYear && _this.user.expenseData[i].category == _this.categories[j].name) {
                        _this.categories[j].amount += parseFloat(_this.user.expenseData[i].value); //TODO: topTen implementierendrinnen oder draußen und if aufsplitten als current month für äußere und innen nochmal categorie mit for oder so?
                        if (_this.monthSortedExpenses.length == 0) {
                            _this.monthSortedExpenses.splice(0, 0, profile.user.expenseData[i]);
                        }
                        else {
                            var currentLatestBorder = _this.monthSortedExpenses.length;
                            for (var k = 0; k < currentLatestBorder; k++) {
                                if (parseInt(profile.user.expenseData[i].date.day) > parseInt(_this.monthSortedExpenses[k].date.day) || parseInt(profile.user.expenseData[i].date.day) == parseInt(_this.monthSortedExpenses[k].date.day)) {
                                    _this.monthSortedExpenses.splice(k, 0, profile.user.expenseData[i]);
                                    break;
                                }
                                else if (k == currentLatestBorder - 1) {
                                    _this.monthSortedExpenses.push(profile.user.expenseData[i]);
                                }
                            }
                        }
                    }
                }
                if (_this.user.expenseData != undefined && _this.user.expenseData.length != 0) {
                    if (_this.dateSortedExpenses == undefined || _this.dateSortedExpenses.length == 0) {
                        _this.dateSortedExpenses.push(_this.user.expenseData[0]); //only execute when empty
                    }
                    else {
                        var sortedBorder = _this.dateSortedExpenses.length;
                        for (var j = 0; j < sortedBorder; j++) {
                            var newDate = new Date(parseInt(_this.user.expenseData[i].date.year), (parseInt(_this.user.expenseData[i].date.month) - 1), parseInt(_this.user.expenseData[i].date.day)); //Year - monthIndex - day
                            var comparingToDate = new Date(parseInt(_this.dateSortedExpenses[j].date.year), (parseInt(_this.dateSortedExpenses[j].date.month) - 1), parseInt(_this.dateSortedExpenses[j].date.day)); //Year - monthIndex - day
                            if (newDate >= comparingToDate) {
                                _this.dateSortedExpenses.splice(j, 0, _this.user.expenseData[i]);
                                break;
                            }
                            if (j == sortedBorder - 1) {
                                _this.dateSortedExpenses.push(_this.user.expenseData[i]);
                                break;
                            }
                        }
                    }
                }
            } // Category total counting and sorting
            if (_this.latestActive) {
                var counter = _this.dateSortedExpenses.length;
                var numberOfCounts = 0;
                while (numberOfCounts < 10 && counter > 0) {
                    _this.tenLatestExpenses.push({
                        expenseData: _this.dateSortedExpenses[numberOfCounts],
                        shown: false
                    });
                    _this.tenLatestExpenses[numberOfCounts].expenseData.value = _this.formatNumberToCurrency(_this.tenLatestExpenses[numberOfCounts].expenseData.value);
                    numberOfCounts++;
                    counter--;
                }
            }
            else {
                var counter2 = _this.user.expenseData.length - 1;
                var numberOfCounts = 0;
                while (numberOfCounts < 10 && counter2 >= 0) {
                    _this.tenLatestExpenses.push({
                        expenseData: _this.user.expenseData[counter2],
                        shown: false
                    });
                    _this.tenLatestExpenses[numberOfCounts].expenseData.value = _this.formatNumberToCurrency(_this.tenLatestExpenses[numberOfCounts].expenseData.value);
                    numberOfCounts++;
                    counter2--;
                }
            }
            for (var i = 0; i < _this.categories.length; i++) {
                _this.categories[i].amount = Math.round(_this.categories[i].amount * 100) / 100;
                _this.monthTotal += _this.categories[i].amount;
            } // totalMonth counting
            _this.monthTotal = Math.round(_this.monthTotal * 100) / 100;
            _this.monthTotalString = _this.formatNumberToCurrency(_this.monthTotal.toString());
            for (var i = 0; i < _this.categories.length; i++) {
                _this.chartData[i] = _this.categories[i].amount;
                _this.chartLabels[i] = _this.categories[i].name;
                _this.backgroundColor[i] = _this.categories[i].color;
            }
            _this.pieChartData = _this.chartData;
            _this.updateChart();
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    DashboardComponent.prototype.formatNumberToCurrency = function (number) {
        var formattedValue = "";
        if (number.indexOf('.') > -1) {
            if (number.indexOf('.') == number.length - 1) {
                formattedValue = number + '00';
            }
            else if (number.indexOf('.') == number.length - 2) {
                formattedValue = number + '0';
            }
            else {
                formattedValue = number;
            }
        }
        else {
            formattedValue = number + '.00';
        }
        return formattedValue;
    };
    DashboardComponent.prototype.clickedEdit = function (expense) {
        this.editValue = expense.expenseData.value + " €";
        this.editDate = expense.expenseData.date;
        this.editCategory = expense.expenseData.category;
        this.editCategoryPath = this.getCategoryIconPath(expense.expenseData.category);
        this.editDescription = expense.expenseData.description;
        this.editExpenseId = expense.expenseData.expenseId;
        this.modalShown = true; //Opens Modal Box
    };
    DashboardComponent.prototype.toggleLatestLast = function (number) {
        if (number == 0) {
            if (!this.latestActive) {
                this.latestActive = true;
                this.updateProfileData();
            }
        }
        else if (number == 1) {
            if (this.latestActive) {
                this.latestActive = false;
                this.updateProfileData();
            }
        }
    };
    DashboardComponent.prototype.saveExpenseModalClicked = function () {
        var _this = this;
        this.editValue = this.formatValue(this.editValue);
        var expense = {
            expenseId: this.editExpenseId,
            value: this.editValue,
            category: this.editCategory,
            date: this.editDate,
            description: this.editDescription
        };
        /* ***********************  PRE FORMATTING    ******************************* */
        if (expense.description == "" || expense.description == undefined) {
            expense.description = "- no description available -";
        }
        var splitterChar = "-";
        var seperatorIndex = expense.date.formatted.length - 5;
        splitterChar = expense.date.formatted.charAt(seperatorIndex);
        var dateArr = expense.date.formatted.split(splitterChar);
        var day = dateArr[0];
        var month = dateArr[1];
        if (day.length == 1) {
            day = "0" + day;
        }
        if (month.length == 1) {
            month = "0" + month;
        }
        expense.date.day = day;
        expense.date.month = month;
        expense.date.year = dateArr[2];
        if (expense.value != undefined) {
            if (expense.value.indexOf(',') > -1) {
                expense.value = expense.value.replace(/,/g, ".");
            }
        }
        /* ********************       Validating        ************************** */
        if (!this.validateService.validateExpenseValue(expense)) {
            this.flashMessage.show("Please fill in a value", { cssClass: 'alert-danger', timeout: 3000 });
            console.log('value false');
            return false;
        }
        if (!this.validateService.validateExpenseDate(expense)) {
            this.flashMessage.show("Please fill in a date", { cssClass: 'alert-danger', timeout: 3000 });
            console.log('date false');
            return false;
        }
        this.authService.editUserExpenses(expense).subscribe(function (data) {
            if (data.success) {
                _this.closeModal();
                _this.flashMessage.show("Expense edited", { cssClass: 'alert-success', timeout: 1500 });
                _this.updateProfileData();
                _this.updateChart();
            }
            else {
                _this.flashMessage.show("Failed to edit Expense", { cssClass: 'alert-danger', timeout: 1500 });
            }
        });
    };
    DashboardComponent.prototype.outerModalClicked = function () {
        if (this.innerModal) {
            this.innerModal = false;
        }
        else {
            this.saveExpenseModalClicked();
        }
    };
    DashboardComponent.prototype.innerModalClicked = function () {
        this.innerModal = true;
    };
    DashboardComponent.prototype.keyDownModalEdit = function (event) {
        if (event.keyCode == 13) {
            this.saveExpenseModalClicked();
        }
    };
    DashboardComponent.prototype.keyDownModalGeneral = function (event) {
        var x = event.keyCode;
        if (x == 27) {
            alert("You pressed the Escape key!");
        }
    };
    DashboardComponent.prototype.modalCategoryChanged = function (eventItem) {
        this.editCategoryPath = this.getCategoryIconPath(eventItem);
    };
    DashboardComponent.prototype.onBlurEditExpenseValue = function () {
        if (this.editValue == undefined || this.editValue == "") {
        }
        else if (!this.editValue.match(/[a-z]/i)) {
            this.editValue = this.formatValue(this.editValue) + " €";
        }
    };
    DashboardComponent.prototype.focusFunctionEditValue = function () {
        this.editValue = this.formatValue(this.editValue);
    };
    DashboardComponent.prototype.closeModal = function () {
        this.modalShown = false;
    };
    DashboardComponent.prototype.deleteUserExpense = function (index) {
        var _this = this;
        //  var r = confirm("Are you sure you want to DELETE this expense");
        //    if (r == true) {
        this.authService.deleteUserExpense(index).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show("Expense deleted", { cssClass: 'alert-success', timeout: 1500 });
                _this.updateProfileData();
                _this.updateChart();
            }
            else {
                _this.flashMessage.show("Failed to delete Expense", { cssClass: 'alert-danger', timeout: 1500 });
            }
        });
        this.closeModal();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("baseChart"), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__["BaseChartDirective"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__["BaseChartDirective"]) === 'function' && _a) || Object)
    ], DashboardComponent.prototype, "chart", void 0);
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(866),
            styles: [__webpack_require__(856)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_validate_service__["a" /* ValidateService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_component_communication_service__["a" /* ComponentCommunicationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_component_communication_service__["a" /* ComponentCommunicationService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _e) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/johannesbeiser/Desktop/ExpenseManagerApp/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_component_communication_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__(157);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpenseListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ExpenseListComponent = (function () {
    function ExpenseListComponent(authService, validateService, _compCommunicationService, flashMessage) {
        this.authService = authService;
        this.validateService = validateService;
        this._compCommunicationService = _compCommunicationService;
        this.flashMessage = flashMessage;
        //unfilteredExpenselist-->filteredList-->sortedList (...for production)
        this.unfilteredExpenselist = [];
        this.filteredList = [];
        this.sortedList = [];
        this.monthActiveArray = [];
        this.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Oktober", "November", "December"];
        this.everythingShown = false;
        this.categories = this._compCommunicationService.categories;
        this.sortedCategoryAscending = false; //is actually ascending, but arrow would be reversed, so user does see same direction arrow on first click but category is sorted from 0-->i not i-->0 (as initial value)
        this.sortedAmountAscending = false;
        this.sortedDateAscending = false;
        this.sortedDescriptionAscending = false;
        this.sortedCategory = false;
        this.sortedAmount = false;
        this.sortedDate = true;
        this.sortedDescription = false;
        this.editValue = "";
        this.editCategory = "";
        this.editCategoryPath = "";
        this.editDescription = "";
        this.modalShown = false; //TODO: When editing descriptiona dne emptying it, setting to " - no description available -"
        this.innerModal = false;
    }
    ExpenseListComponent.prototype.ngOnInit = function () {
        this._compCommunicationService.expenseListActive = true;
        this.currentDate = new Date();
        this.filterYear = this.currentDate.getFullYear();
        this.monthActiveArray = [];
        for (var i = 0; i < 13; i++) {
            this.monthActiveArray.push(false);
        }
        this.monthActiveArray[this.currentDate.getMonth() + 1] = true;
        this.loadUnfilteredList();
        alert;
    };
    ExpenseListComponent.prototype.showEverything = function () {
        //  this.filterYear = undefined;
        for (var i = 0; i < 13; i++) {
            this.monthActiveArray[i] = false;
        }
        this.everythingShown = true;
        this.filterList();
    };
    ExpenseListComponent.prototype.filterList = function () {
        console.log("now filtering enterd");
        var activeMonthFilter = this.monthActiveArray.indexOf(true); //from 0 for all to 12 for december
        this.filteredList = [];
        if (this.unfilteredExpenselist != undefined) {
            for (var i = 0; i < this.unfilteredExpenselist.length; i++) {
                if (parseInt(this.unfilteredExpenselist[i].expenseData.date.year) == this.filterYear || this.everythingShown) {
                    if (parseInt(this.unfilteredExpenselist[i].expenseData.date.month) == activeMonthFilter || activeMonthFilter == 0 || this.everythingShown) {
                        this.filteredList.push(this.unfilteredExpenselist[i]);
                        console.log("pushed " + i);
                    }
                }
            }
        }
        this.sortEntries();
    };
    ExpenseListComponent.prototype.activateMonthFilter = function (index) {
        for (var i = 0; i < 13; i++) {
            this.monthActiveArray[i] = false;
        }
        this.monthActiveArray[index] = true;
        this.everythingShown = false;
        this.filterList();
    };
    ExpenseListComponent.prototype.plusYear = function (amount) {
        this.everythingShown = false;
        if (this.filterYear.toString().match(/[a-z]/i)) {
            this.flashMessage.show("Year must only contain numbers", { cssClass: 'alert-danger', timeout: 2500 });
        }
        else {
            this.filterYear = parseInt(this.filterYear);
            this.filterYear += amount;
        }
        this.filterList();
    };
    ExpenseListComponent.prototype.sortEntries = function () {
        this.sortedList = [];
        if (this.sortedCategory) {
            if (this.filteredList != undefined && this.filteredList.length != 0) {
                this.sortedList = [];
                this.sortedList.push(this.filteredList[0]);
                for (var i = 1; i < this.filteredList.length; i++) {
                    var sortedBorder = this.sortedList.length;
                    for (var j = 0; j < sortedBorder; j++) {
                        var newCategory = this.filteredList[i].expenseData.category;
                        var conparingToCategory = this.sortedList[j].expenseData.category;
                        if (newCategory == conparingToCategory) {
                            this.sortedList.splice(j, 0, this.filteredList[i]);
                            break;
                        }
                        if (j == sortedBorder - 1) {
                            this.sortedList.push(this.filteredList[i]);
                            break;
                        }
                    }
                }
            }
            if (this.sortedCategoryAscending) {
                this.sortedList.reverse();
            }
        }
        else if (this.sortedAmount) {
            if (this.filteredList != undefined && this.filteredList.length != 0) {
                this.sortedList = [];
                this.sortedList.push(this.filteredList[0]);
                for (var i = 1; i < this.filteredList.length; i++) {
                    var sortedBorder = this.sortedList.length;
                    for (var j = 0; j < sortedBorder; j++) {
                        var newAmount = parseInt(this.filteredList[i].expenseData.value);
                        var conparingToAmount = parseInt(this.sortedList[j].expenseData.value);
                        if (newAmount >= conparingToAmount) {
                            this.sortedList.splice(j, 0, this.filteredList[i]);
                            break;
                        }
                        if (j == sortedBorder - 1) {
                            this.sortedList.push(this.filteredList[i]);
                            break;
                        }
                    }
                }
            }
            if (this.sortedAmountAscending) {
                this.sortedList.reverse();
            }
        }
        else if (this.sortedDate) {
            if (this.filteredList != undefined && this.filteredList.length != 0) {
                console.log("sorting date");
                this.sortedList.push(this.filteredList[0]);
                console.log("initial push");
                for (var i = 1; i < this.filteredList.length; i++) {
                    var sortedBorder = this.sortedList.length;
                    for (var j = 0; j < sortedBorder; j++) {
                        var newDate = new Date(parseInt(this.filteredList[i].expenseData.date.year), (parseInt(this.filteredList[i].expenseData.date.month) - 1), parseInt(this.filteredList[i].expenseData.date.day)); //Year - monthIndex - day
                        var comparingToDate = new Date(parseInt(this.sortedList[j].expenseData.date.year), (parseInt(this.sortedList[j].expenseData.date.month) - 1), parseInt(this.sortedList[j].expenseData.date.day)); //Year - monthIndex - day
                        if (newDate >= comparingToDate) {
                            console.log("inserted to index" + j);
                            this.sortedList.splice(j, 0, this.filteredList[i]);
                            break;
                        }
                        if (j == sortedBorder - 1) {
                            console.log("pushed to end of List");
                            this.sortedList.push(this.filteredList[i]);
                            break;
                        }
                    }
                }
            }
            //now everything sorted descending
            if (this.sortedDateAscending) {
                this.sortedList.reverse();
            }
        }
        else if (this.sortedDescription) {
            if (this.filteredList != undefined && this.filteredList.length != 0) {
                this.sortedList = [];
                this.sortedList.push(this.filteredList[0]);
                for (var i = 1; i < this.filteredList.length; i++) {
                    var sortedBorder = this.sortedList.length;
                    for (var j = 0; j < sortedBorder; j++) {
                        var newDescription = this.filteredList[i].expenseData.description.charAt(0);
                        var comparingToDescription = this.sortedList[j].expenseData.description.charAt(0);
                        if (newDescription <= comparingToDescription) {
                            this.sortedList.splice(j, 0, this.filteredList[i]);
                            break;
                        }
                        if (j == sortedBorder - 1) {
                            this.sortedList.push(this.filteredList[i]);
                            break;
                        }
                    }
                }
            }
            if (this.sortedDescriptionAscending) {
                this.sortedList.reverse();
            }
        }
    };
    ExpenseListComponent.prototype.deactivateSortAll = function () {
        this.sortedDate = false;
        this.sortedAmount = false;
        this.sortedCategory = false;
    };
    ExpenseListComponent.prototype.sortCategory = function () {
        if (this.sortedCategory) {
            this.sortedCategoryAscending = !this.sortedCategoryAscending;
        }
        else {
            this.deactivateSortAll();
            this.sortedCategory = true;
            this.sortedCategoryAscending = true; //initial value
        }
        this.sortEntries();
    };
    ExpenseListComponent.prototype.sortAmount = function () {
        if (this.sortedAmount) {
            this.sortedAmountAscending = !this.sortedAmountAscending;
        }
        else {
            this.deactivateSortAll();
            this.sortedAmount = true;
            this.sortedAmountAscending = false; //initial value
        }
        this.sortEntries();
    };
    ExpenseListComponent.prototype.sortDate = function () {
        if (this.sortedDate) {
            this.sortedDateAscending = !this.sortedDateAscending;
        }
        else {
            this.deactivateSortAll();
            this.sortedDate = true;
            this.sortedDateAscending = false; //initial value
        }
        this.sortEntries();
    };
    ExpenseListComponent.prototype.sortDescription = function () {
        if (this.sortedDescription) {
            this.sortedDescriptionAscending = !this.sortedDescriptionAscending;
        }
        else {
            this.deactivateSortAll();
            this.sortedDescription = true;
            this.sortedDescriptionAscending = false; //initial value
        }
        this.sortEntries();
    };
    ExpenseListComponent.prototype.getCategoryIconPath = function (categoryName) {
        var path = '';
        for (var i = 0; i < this.categories.length; i++) {
            if (this.categories[i].name == categoryName) {
                path = this.categories[i].iconPath;
                break;
            }
        }
        return path;
    };
    ExpenseListComponent.prototype.loadUnfilteredList = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            for (var i = 0; i < _this.user.expenseData.length; i++) {
                _this.unfilteredExpenselist.push({
                    expenseData: _this.user.expenseData[i],
                    descriptionShown: false
                });
            }
            _this.filterList();
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ExpenseListComponent.prototype.showFullDescription = function (expense) {
        if (expense.descriptionShown) {
            expense.descriptionShown = false;
        }
        else {
            for (var i = 0; i < this.unfilteredExpenselist.length; i++) {
                this.unfilteredExpenselist[i].descriptionShown = false;
            }
            expense.descriptionShown = true;
        }
    };
    /* ********************     MODAL   ************************* */
    ExpenseListComponent.prototype.updateProfileData = function () {
        this.unfilteredExpenselist = [];
        this.loadUnfilteredList();
    };
    ExpenseListComponent.prototype.formatValue = function (oldValue) {
        if (oldValue == null || oldValue == undefined || oldValue == "" || oldValue.match(/[a-z]/i)) {
            console.log("no formatting");
            oldValue = undefined;
            return oldValue;
        }
        console.log("formatiere:" + oldValue + ".");
        if (oldValue.indexOf('€') > -1) {
            oldValue = oldValue.replace(/€/g, "");
            oldValue = oldValue.replace(/ /g, "");
        }
        if (oldValue.indexOf(',') > -1) {
            oldValue = oldValue.replace(/,/g, ".");
        }
        if (oldValue.indexOf('.') == -1) {
            oldValue = oldValue + ".";
        }
        var decimalPlace = oldValue.length - 1 - oldValue.indexOf('.');
        var counter = 2; // max Zeros to add--> Loop iterates 2-0 times depending on DecimalPlace
        while (counter > decimalPlace) {
            oldValue = oldValue + "0";
            counter--;
        }
        return oldValue;
    };
    ExpenseListComponent.prototype.clickedEdit = function (expense) {
        this.editValue = expense.expenseData.value + " €";
        this.editDate = expense.expenseData.date;
        this.editCategory = expense.expenseData.category;
        this.editCategoryPath = this.getCategoryIconPath(expense.expenseData.category);
        this.editDescription = expense.expenseData.description;
        this.editExpenseId = expense.expenseData.expenseId;
        this.modalShown = true; //Opens Modal Box
    };
    ExpenseListComponent.prototype.saveExpenseModalClicked = function () {
        var _this = this;
        this.editValue = this.formatValue(this.editValue);
        var expense = {
            expenseId: this.editExpenseId,
            value: this.editValue,
            category: this.editCategory,
            date: this.editDate,
            description: this.editDescription
        };
        if (expense.description == "" || expense.description == undefined) {
            expense.description = "- no description available -";
        }
        /* ***********************  PRE FORMATTING    ******************************* */
        var splitterChar = "-";
        var seperatorIndex = expense.date.formatted.length - 5;
        splitterChar = expense.date.formatted.charAt(seperatorIndex);
        var dateArr = expense.date.formatted.split(splitterChar);
        var day = dateArr[0];
        var month = dateArr[1];
        if (day.length == 1) {
            day = "0" + day;
        }
        if (month.length == 1) {
            month = "0" + month;
        }
        expense.date.day = day;
        expense.date.month = month;
        expense.date.year = dateArr[2];
        if (expense.value != undefined) {
            if (expense.value.indexOf(',') > -1) {
                expense.value = expense.value.replace(/,/g, ".");
            }
        }
        /* ********************       Validating        ************************** */
        if (!this.validateService.validateExpenseValue(expense)) {
            this.flashMessage.show("Please fill in a value", { cssClass: 'alert-danger', timeout: 3000 });
            console.log('value false');
            return false;
        }
        if (!this.validateService.validateExpenseDate(expense)) {
            this.flashMessage.show("Please fill in a date", { cssClass: 'alert-danger', timeout: 3000 });
            console.log('date false');
            return false;
        }
        this.authService.editUserExpenses(expense).subscribe(function (data) {
            if (data.success) {
                _this.closeModal();
                _this.flashMessage.show("Expense edited", { cssClass: 'alert-success', timeout: 1500 });
                _this.updateProfileData();
            }
            else {
                _this.flashMessage.show("Failed to edit Expense", { cssClass: 'alert-danger', timeout: 1500 });
            }
        });
    };
    ExpenseListComponent.prototype.outerModalClicked = function () {
        if (this.innerModal) {
            this.innerModal = false;
        }
        else {
            this.saveExpenseModalClicked();
        }
    };
    ExpenseListComponent.prototype.innerModalClicked = function () {
        this.innerModal = true;
    };
    ExpenseListComponent.prototype.keyDownModalEdit = function (event) {
        if (event.keyCode == 13) {
            this.saveExpenseModalClicked();
        }
    };
    ExpenseListComponent.prototype.keyDownModalGeneral = function (event) {
        var x = event.keyCode;
        if (x == 27) {
            alert("You pressed the Escape key!");
        }
    };
    ExpenseListComponent.prototype.modalCategoryChanged = function (eventItem) {
        this.editCategoryPath = this.getCategoryIconPath(eventItem);
    };
    ExpenseListComponent.prototype.onBlurEditExpenseValue = function () {
        if (this.editValue == undefined || this.editValue == "") {
        }
        else if (!this.editValue.match(/[a-z]/i)) {
            this.editValue = this.formatValue(this.editValue) + " €";
        }
    };
    ExpenseListComponent.prototype.focusFunctionEditValue = function () {
        this.editValue = this.formatValue(this.editValue);
    };
    ExpenseListComponent.prototype.closeModal = function () {
        this.modalShown = false;
    };
    ExpenseListComponent.prototype.deleteUserExpense = function (index) {
        var _this = this;
        //  var r = confirm("Are you sure you want to DELETE this expense");
        //    if (r == true) {
        this.authService.deleteUserExpense(index).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show("Expense deleted", { cssClass: 'alert-success', timeout: 1500 });
                _this.updateProfileData();
            }
            else {
                _this.flashMessage.show("Failed to delete Expense", { cssClass: 'alert-danger', timeout: 1500 });
            }
        });
        this.closeModal();
    };
    ExpenseListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-expense-list',
            template: __webpack_require__(867),
            styles: [__webpack_require__(857)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_component_communication_service__["a" /* ComponentCommunicationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_component_communication_service__["a" /* ComponentCommunicationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _d) || Object])
    ], ExpenseListComponent);
    return ExpenseListComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/johannesbeiser/Desktop/ExpenseManagerApp/angular-src/src/expense-list.component.js.map

/***/ }),

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_component_communication_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(_compCommunication, router) {
        this._compCommunication = _compCommunication;
        this.router = router;
        this.slideIndex = 0;
        this.numberOfSlides = 3;
        this.slide1 = false;
        this.slide2 = false;
        this.slide3 = false;
        this.slideshowRolling = true;
        this._compCommunication.activateHomeSite();
    }
    HomeComponent.prototype.ngOnInit = function () {
        this._compCommunication.activateHomeSite();
        this.slideIndex = -1;
        this.slide1 = true;
        this.autoRollSlideshow();
    };
    /**
    * Increnemts or Decrements current active slide depending on:
    * @param {number} n - either -1 or +1 :
    */
    HomeComponent.prototype.plusSlides = function (n) {
        this.slideIndex = this.slideIndex + n;
        if (this.slideIndex < 0) {
            this.slideIndex = this.numberOfSlides - 1;
        }
        else if (this.slideIndex > this.numberOfSlides - 1) {
            this.slideIndex = 0;
        }
        this.showSlides(this.slideIndex);
    };
    HomeComponent.prototype.plusSlidesWithoutRecursive = function (n) {
        this.slideIndex = this.slideIndex + n;
        if (this.slideIndex < 0) {
            this.slideIndex = this.numberOfSlides - 1; // wenn zurückÜberlauf-->springe ans ende
        }
        else if (this.slideIndex > this.numberOfSlides - 1) {
            this.slideIndex = 0; // Wenn weiterÜberlauf-->sprnge zum anfang
        }
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        this.slide1 = false;
        this.slide2 = false;
        this.slide3 = false;
        if (this.slideIndex == 0) {
            this.slide1 = true;
        }
        else if (this.slideIndex == 1) {
            this.slide2 = true;
        }
        else if (this.slideIndex == 2) {
            this.slide3 = true;
        }
        for (i = 0; i < this.numberOfSlides; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        dots[this.slideIndex].className += " active";
    };
    HomeComponent.prototype.currentSlide = function (n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        this.slide1 = false;
        this.slide2 = false;
        this.slide3 = false;
        if (n == 0) {
            this.slide1 = true;
        }
        else if (n == 1) {
            this.slide2 = true;
        }
        else if (n == 2) {
            this.slide3 = true;
        }
        for (i = 0; i < this.numberOfSlides; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        dots[n].className += " active";
    };
    HomeComponent.prototype.autoRollSlideshow = function () {
        if (this.slideshowRolling) {
            this.plusSlides(1);
            this.showSlides(this.slideIndex);
        }
        setTimeout(this.autoRollSlideshow.bind(this), 10000);
    };
    HomeComponent.prototype.enterSlideshow = function () {
        this.slideshowRolling = false;
    };
    HomeComponent.prototype.leaveSlideshow = function () {
        this.slideshowRolling = true;
    };
    HomeComponent.prototype.showSlides = function (n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        this.slide1 = false;
        this.slide2 = false;
        this.slide3 = false;
        if (n == 0) {
            this.slide1 = true;
        }
        else if (n == 1) {
            this.slide2 = true;
        }
        else if (n == 2) {
            this.slide3 = true;
        }
        for (i = 0; i < this.numberOfSlides; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        dots[this.slideIndex].className += " active";
        //setTimeout(this.callHelper.bind(this), 7000);
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(868),
            styles: [__webpack_require__(858)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_component_communication_service__["a" /* ComponentCommunicationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_component_communication_service__["a" /* ComponentCommunicationService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/johannesbeiser/Desktop/ExpenseManagerApp/angular-src/src/home.component.js.map

/***/ }),

/***/ 638:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_component_communication_service__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage, _compCommunicationService) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this._compCommunicationService = _compCommunicationService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                // this.flashMessage.show('You are now loggen in', {cssClass: 'alert-success', timeout: 5000});
                _this.router.navigate(['dashboard']);
                _this._compCommunicationService.activateDashboard();
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(869),
            styles: [__webpack_require__(859)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_component_communication_service__["a" /* ComponentCommunicationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_component_communication_service__["a" /* ComponentCommunicationService */]) === 'function' && _d) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/johannesbeiser/Desktop/ExpenseManagerApp/angular-src/src/login.component.js.map

/***/ }),

/***/ 639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_component_communication_service__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage, _compCommunicationService) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this._compCommunicationService = _compCommunicationService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/login']);
        this._compCommunicationService.deactivateAll();
        return false;
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(870),
            styles: [__webpack_require__(860)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_component_communication_service__["a" /* ComponentCommunicationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_component_communication_service__["a" /* ComponentCommunicationService */]) === 'function' && _d) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/johannesbeiser/Desktop/ExpenseManagerApp/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 640:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent.prototype.clearDatabaseData = function () {
        var _this = this;
        var r = confirm("Are you sure you want to reset your Database? This will delete all of the entries forever !!!");
        if (r == true) {
            this.authService.clearDatabase().subscribe(function (data) {
                if (data.success) {
                    _this.flashMessage.show("Database cleared", { cssClass: 'alert-success', timeout: 1500 });
                }
                else {
                    _this.flashMessage.show("Failed to clear Database", { cssClass: 'alert-danger', timeout: 1500 });
                }
            });
        }
        else {
        }
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(871),
            styles: [__webpack_require__(861)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/johannesbeiser/Desktop/ExpenseManagerApp/angular-src/src/profile.component.js.map

/***/ }),

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            nextExpenseDataId: 0,
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        //Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show("Please fill in all fields", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //Valid Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show("Please use a valid email", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show("You are now registered and can log in", { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show("Something went wrong.", { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(872),
            styles: [__webpack_require__(862)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/johannesbeiser/Desktop/ExpenseManagerApp/angular-src/src/register.component.js.map

/***/ }),

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_component_communication_service__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = (function () {
    function SidebarComponent(authService, _compCommunicationService) {
        this.authService = authService;
        this._compCommunicationService = _compCommunicationService;
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(873),
            styles: [__webpack_require__(863)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_component_communication_service__["a" /* ComponentCommunicationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_component_communication_service__["a" /* ComponentCommunicationService */]) === 'function' && _b) || Object])
    ], SidebarComponent);
    return SidebarComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/johannesbeiser/Desktop/ExpenseManagerApp/angular-src/src/sidebar.component.js.map

/***/ }),

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatisticsComponent = (function () {
    function StatisticsComponent() {
    }
    StatisticsComponent.prototype.ngOnInit = function () {
    };
    StatisticsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-statistics',
            template: __webpack_require__(874),
            styles: [__webpack_require__(864)]
        }), 
        __metadata('design:paramtypes', [])
    ], StatisticsComponent);
    return StatisticsComponent;
}());
//# sourceMappingURL=/Users/johannesbeiser/Desktop/ExpenseManagerApp/angular-src/src/statistics.component.js.map

/***/ }),

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=/Users/johannesbeiser/Desktop/ExpenseManagerApp/angular-src/src/auth.guard.js.map

/***/ }),

/***/ 645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/johannesbeiser/Desktop/ExpenseManagerApp/angular-src/src/environment.js.map

/***/ }),

/***/ 851:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 379,
	"./af.js": 379,
	"./ar": 386,
	"./ar-dz": 380,
	"./ar-dz.js": 380,
	"./ar-kw": 381,
	"./ar-kw.js": 381,
	"./ar-ly": 382,
	"./ar-ly.js": 382,
	"./ar-ma": 383,
	"./ar-ma.js": 383,
	"./ar-sa": 384,
	"./ar-sa.js": 384,
	"./ar-tn": 385,
	"./ar-tn.js": 385,
	"./ar.js": 386,
	"./az": 387,
	"./az.js": 387,
	"./be": 388,
	"./be.js": 388,
	"./bg": 389,
	"./bg.js": 389,
	"./bn": 390,
	"./bn.js": 390,
	"./bo": 391,
	"./bo.js": 391,
	"./br": 392,
	"./br.js": 392,
	"./bs": 393,
	"./bs.js": 393,
	"./ca": 394,
	"./ca.js": 394,
	"./cs": 395,
	"./cs.js": 395,
	"./cv": 396,
	"./cv.js": 396,
	"./cy": 397,
	"./cy.js": 397,
	"./da": 398,
	"./da.js": 398,
	"./de": 401,
	"./de-at": 399,
	"./de-at.js": 399,
	"./de-ch": 400,
	"./de-ch.js": 400,
	"./de.js": 401,
	"./dv": 402,
	"./dv.js": 402,
	"./el": 403,
	"./el.js": 403,
	"./en-au": 404,
	"./en-au.js": 404,
	"./en-ca": 405,
	"./en-ca.js": 405,
	"./en-gb": 406,
	"./en-gb.js": 406,
	"./en-ie": 407,
	"./en-ie.js": 407,
	"./en-nz": 408,
	"./en-nz.js": 408,
	"./eo": 409,
	"./eo.js": 409,
	"./es": 411,
	"./es-do": 410,
	"./es-do.js": 410,
	"./es.js": 411,
	"./et": 412,
	"./et.js": 412,
	"./eu": 413,
	"./eu.js": 413,
	"./fa": 414,
	"./fa.js": 414,
	"./fi": 415,
	"./fi.js": 415,
	"./fo": 416,
	"./fo.js": 416,
	"./fr": 419,
	"./fr-ca": 417,
	"./fr-ca.js": 417,
	"./fr-ch": 418,
	"./fr-ch.js": 418,
	"./fr.js": 419,
	"./fy": 420,
	"./fy.js": 420,
	"./gd": 421,
	"./gd.js": 421,
	"./gl": 422,
	"./gl.js": 422,
	"./gom-latn": 423,
	"./gom-latn.js": 423,
	"./he": 424,
	"./he.js": 424,
	"./hi": 425,
	"./hi.js": 425,
	"./hr": 426,
	"./hr.js": 426,
	"./hu": 427,
	"./hu.js": 427,
	"./hy-am": 428,
	"./hy-am.js": 428,
	"./id": 429,
	"./id.js": 429,
	"./is": 430,
	"./is.js": 430,
	"./it": 431,
	"./it.js": 431,
	"./ja": 432,
	"./ja.js": 432,
	"./jv": 433,
	"./jv.js": 433,
	"./ka": 434,
	"./ka.js": 434,
	"./kk": 435,
	"./kk.js": 435,
	"./km": 436,
	"./km.js": 436,
	"./kn": 437,
	"./kn.js": 437,
	"./ko": 438,
	"./ko.js": 438,
	"./ky": 439,
	"./ky.js": 439,
	"./lb": 440,
	"./lb.js": 440,
	"./lo": 441,
	"./lo.js": 441,
	"./lt": 442,
	"./lt.js": 442,
	"./lv": 443,
	"./lv.js": 443,
	"./me": 444,
	"./me.js": 444,
	"./mi": 445,
	"./mi.js": 445,
	"./mk": 446,
	"./mk.js": 446,
	"./ml": 447,
	"./ml.js": 447,
	"./mr": 448,
	"./mr.js": 448,
	"./ms": 450,
	"./ms-my": 449,
	"./ms-my.js": 449,
	"./ms.js": 450,
	"./my": 451,
	"./my.js": 451,
	"./nb": 452,
	"./nb.js": 452,
	"./ne": 453,
	"./ne.js": 453,
	"./nl": 455,
	"./nl-be": 454,
	"./nl-be.js": 454,
	"./nl.js": 455,
	"./nn": 456,
	"./nn.js": 456,
	"./pa-in": 457,
	"./pa-in.js": 457,
	"./pl": 458,
	"./pl.js": 458,
	"./pt": 460,
	"./pt-br": 459,
	"./pt-br.js": 459,
	"./pt.js": 460,
	"./ro": 461,
	"./ro.js": 461,
	"./ru": 462,
	"./ru.js": 462,
	"./sd": 463,
	"./sd.js": 463,
	"./se": 464,
	"./se.js": 464,
	"./si": 465,
	"./si.js": 465,
	"./sk": 466,
	"./sk.js": 466,
	"./sl": 467,
	"./sl.js": 467,
	"./sq": 468,
	"./sq.js": 468,
	"./sr": 470,
	"./sr-cyrl": 469,
	"./sr-cyrl.js": 469,
	"./sr.js": 470,
	"./ss": 471,
	"./ss.js": 471,
	"./sv": 472,
	"./sv.js": 472,
	"./sw": 473,
	"./sw.js": 473,
	"./ta": 474,
	"./ta.js": 474,
	"./te": 475,
	"./te.js": 475,
	"./tet": 476,
	"./tet.js": 476,
	"./th": 477,
	"./th.js": 477,
	"./tl-ph": 478,
	"./tl-ph.js": 478,
	"./tlh": 479,
	"./tlh.js": 479,
	"./tr": 480,
	"./tr.js": 480,
	"./tzl": 481,
	"./tzl.js": 481,
	"./tzm": 483,
	"./tzm-latn": 482,
	"./tzm-latn.js": 482,
	"./tzm.js": 483,
	"./uk": 484,
	"./uk.js": 484,
	"./ur": 485,
	"./ur.js": 485,
	"./uz": 487,
	"./uz-latn": 486,
	"./uz-latn.js": 486,
	"./uz.js": 487,
	"./vi": 488,
	"./vi.js": 488,
	"./x-pseudo": 489,
	"./x-pseudo.js": 489,
	"./yo": 490,
	"./yo.js": 490,
	"./zh-cn": 491,
	"./zh-cn.js": 491,
	"./zh-hk": 492,
	"./zh-hk.js": 492,
	"./zh-tw": 493,
	"./zh-tw.js": 493
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 851;


/***/ }),

/***/ 855:
/***/ (function(module, exports) {

module.exports = "\n\n.routedStyle{\n  color: #222;\n}\n\n.containerBox{\n  height: 93%;\n  color: #DDDDDD;\n}\n\n.clearMargPad{\n  padding: 0;\n  height: 100%;\n}\n.height{\n  height: 100%;\n}\n\n.sidebar{\n  background: #444;\n}\n\n.row{\n  height: 100%;\n}\n\n.container{\n  width: 100%;\n}\n\n#flash{\n  position: absolute;\n  z-index: 5;\n  width: 50%\n}\n\n\n\n  .siteContainerForBackgroundImage{\n    height: 100vh;\n    background-image: url(\"resources/expenseBackground.jpg\");\n    background-size: cover;\n  }\n\n\n.gradientTest{\n  height: 8em;\n  width: 100%;\n  position: absolute;\n   background: linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0,0,0,0) 100%);\n}\n\n\n\n\n\n@media (max-width: 991px) {\n  #appSidebar{\n    display: none;\n  }\n}\n"

/***/ }),

/***/ 856:
/***/ (function(module, exports) {

module.exports = "/******************************************************************************/\n/*****************************   Left Side   **********************************/\n/******************************************************************************/\n.fullWidth {\n  width: 100%; }\n\n#wrapperLeftSide {\n  margin: 0 auto;\n  width: 85%; }\n  #wrapperLeftSide * {\n    text-align: left; }\n  #wrapperLeftSide > h2 {\n    font-weight: bold;\n    font-size: 24px;\n    margin-bottom: 20px; }\n  #wrapperLeftSide input {\n    margin-bottom: 20px; }\n  #wrapperLeftSide hr {\n    margin-bottom: 30px; }\n\n#sectionHeader {\n  margin-top: 40px; }\n\n.sectionHeaderNoEntries {\n  background-color: #ddd;\n  border: 1px solid black;\n  padding: 5%;\n  font-size: 2em;\n  font-color: #444;\n  text-align: center; }\n\n#valueInput, #descriptionInput, #dateInput, #submitNewExpense {\n  width: 100%;\n  height: 3em;\n  padding: 5px;\n  outline-color: #355C7D; }\n\n.dateWrapper {\n  position: relative; }\n  .dateWrapper span {\n    position: absolute;\n    font-size: 2em;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n    .dateWrapper span:first-child {\n      top: 23px;\n      left: -27px; }\n    .dateWrapper span:last-child {\n      top: 23px;\n      right: -15px; }\n\n#categoryWrapper {\n  width: 80%;\n  margin: 0 auto; }\n  #categoryWrapper > div {\n    display: inline; }\n    #categoryWrapper > div:nth-child(8) > label {\n      margin-top: 2% !important; }\n\n#valueInput {\n  font-size: 22px;\n  padding-left: 10px;\n  height: 2.5em;\n  width: 95%; }\n\n#categoryNameField {\n  display: block !important;\n  text-align: center !important;\n  margin: 10px 0 0 0;\n  font-family: PrimeLight;\n  font-size: 22px; }\n\n.categoryLabel > img {\n  width: 50px;\n  position: relative;\n  bottom: 0;\n  transition: bottom 0.15s ease-in-out;\n  cursor: pointer; }\n  .categoryLabel > img:hover {\n    bottom: 7px; }\n\n.categoryImageActive {\n  border: 2px solid #666;\n  border-radius: 25px; }\n\n.categoryLabel > input {\n  display: none; }\n\n#dateInput {\n  font-size: 20px;\n  width: 95%;\n  height: 2.2em; }\n\n#descriptionInput {\n  height: 3em;\n  font-size: 18px;\n  margin-bottom: 20px;\n  padding: 10px;\n  width: 95%; }\n\n#submitNewExpense {\n  text-align: center;\n  width: 40%;\n  background-color: #A0C47D;\n  margin-left: 30%;\n  outline: none;\n  cursor: pointer;\n  transition: background-color 0.15s ease-in-out; }\n  #submitNewExpense:hover {\n    background-color: #78AB46; }\n\n.ui-datepicker-calendar *, .ui-datepicker-title * {\n  color: black; }\n\n.hrAddExpense {\n  border-color: #444;\n  width: 95%;\n  margin: 0; }\n\n/******************************************************************************/\n/*****************************   Middle    ************************************/\n/******************************************************************************/\n#wrapperGeneralInfo {\n  border: 1px solid black;\n  padding-bottom: 30px; }\n\n#currentMonthField {\n  text-align: center;\n  background-color: lightgrey;\n  font-size: 24px;\n  padding: 20px;\n  border-bottom: 1px solid #444; }\n\n#currentTotalExpensesField {\n  text-align: left;\n  padding: 20px;\n  font-weight: bold;\n  background-color: #AAA; }\n  #currentTotalExpensesField > span {\n    font-size: 1.5em;\n    float: right; }\n\n.legendList {\n  margin: 30px auto 0 auto;\n  font-size: 13px;\n  width: 90%;\n  padding: 0;\n  display: block; }\n\n#legendList1 {\n  float: left;\n  margin: 5% 5% 0 5% !important;\n  width: 45%;\n  border-right: 1px solid black;\n  margin: 0;\n  margin-top: 5%; }\n\n#legendList2 {\n  width: 100%;\n  margin-top: 5%; }\n  #legendList2 > li {\n    margin-right: 0; }\n\n.legendList > li {\n  margin-right: 10px;\n  list-style-type: none; }\n  .legendList > li > span {\n    font-family: PrimeLight;\n    font-size: 13px; }\n  .legendList > li > div {\n    min-width: 30px;\n    height: 13px;\n    display: inline-block;\n    margin-right: 5px; }\n\n#chartCanvas {\n  margin-top: 50px; }\n\n#noEntriesForChart {\n  font-size: 20px;\n  margin-top: 5%;\n  border-top: 1px solid black;\n  text-align: center;\n  padding-top: 5%; }\n\n#wrapperGeneralInfo > section > h2 {\n  margin: 30px 0 15px 0; }\n\n#wrapperGeneralInfo > section > hr {\n  width: 80%;\n  border: none;\n  height: 42px;\n  border-bottom: 1px solid #1f1209;\n  box-shadow: 0 20px 20px -20px #333;\n  margin: -50px auto 30px; }\n\n#wrapperGeneralInfo > section > ul {\n  margin: 0 12%; }\n  #wrapperGeneralInfo > section > ul > li {\n    width: 100%;\n    margin-bottom: 10px;\n    text-align: left; }\n    #wrapperGeneralInfo > section > ul > li > span {\n      font-family: PrimeLight; }\n\n.fixkostenBetrag {\n  float: right; }\n\n.overviewHeader {\n  text-align: center; }\n\n#categoryChart {\n  width: 65% !important;\n  height: 65% !important;\n  margin: 5% auto 0 auto; }\n\n.datepicker-calendar-day-names {\n  color: white !important; }\n\n/******************************************************************************/\n/*****************************   Right Section  **********************************/\n/******************************************************************************/\n#wrapperRightSide {\n  margin: 0 auto;\n  width: 70%; }\n  #wrapperRightSide > h2 {\n    font-size: 24px;\n    padding: 10px 0 20px 0;\n    border-bottom: 1px solid black; }\n  #wrapperRightSide > ul {\n    border-right: 1px solid black;\n    border-left: 1px solid black; }\n    #wrapperRightSide > ul > * {\n      text-align: right; }\n    #wrapperRightSide > ul > li {\n      border-bottom: 1px solid #444;\n      padding: 5px 0;\n      cursor: pointer; }\n\n.expenseCategory {\n  margin-left: 10px;\n  margin-top: 2%;\n  margin-bottom: 2%;\n  width: 50px;\n  float: left; }\n  .expenseCategory > img {\n    width: 100%; }\n\n.expenseCategoryName {\n  line-height: 2em; }\n\n.expenseData {\n  float: left;\n  text-align: left;\n  margin-left: 10px; }\n\n.expenseDate {\n  font-family: PrimeLight; }\n\n.expenseAmount {\n  text-align: right;\n  margin-right: 5%;\n  position: absolute;\n  right: 15%;\n  font-size: 20px; }\n\n.expenseComment {\n  text-align: left;\n  margin-left: 70px; }\n\n#latestTen {\n  list-style-type: none;\n  padding: 0;\n  border: 1px solid #666;\n  background-color: white; }\n  #latestTen li {\n    border-bottom: 1px solid #666; }\n\n.expenseComment {\n  display: none; }\n\n.sectionHeader {\n  font-size: 24px; }\n\n.expenseDescription {\n  margin-bottom: 3%;\n  text-align: center; }\n\n.listItem {\n  border-width: 1px 1px 0 1px;\n  border-color: black;\n  border-style: solid;\n  background-color: #DDD;\n  line-height: 1.5em;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  transition: background-color .25s ease; }\n  .listItem:hover {\n    background-color: #EEE; }\n  .listItem:last-child {\n    border-width: 1px 1px 1px 1px;\n    border-color: black;\n    border-style: solid; }\n\n.wrapperListEdit {\n  position: relative; }\n\n.iconEdit {\n  cursor: pointer;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  width: 2.5em;\n  transition: -webkit-transform .25s ease;\n  transition: transform .25s ease;\n  transition: transform .25s ease, -webkit-transform .25s ease; }\n  .iconEdit:hover {\n    -webkit-transform: scale(1.25);\n            transform: scale(1.25); }\n\n.wrapperExpenseListData {\n  float: left;\n  width: 89%; }\n\n.expenseDateCollapse {\n  display: none; }\n\n@media (max-width: 1375px) {\n  .expenseData {\n    display: none; }\n  .expenseDateCollapse {\n    display: block;\n    width: 100%;\n    text-align: center; }\n  .iconEdit {\n    right: 5px; }\n  .expenseAmount {\n    right: initial;\n    left: 40%; } }\n\n.clearFloat {\n  clear: both; }\n\n#latestExpenseHeader {\n  margin-bottom: 22px;\n  font-size: 1.5em; }\n\n#lastLatestHeader {\n  margin-top: 1.5em;\n  position: relative; }\n\n#lastSpan, #latestSpan {\n  cursor: pointer; }\n\n#lastSpan > span, #latestSpan > span {\n  display: none; }\n\n@media (min-width: 1600px) {\n  #lastSpan > span, #latestSpan > span {\n    display: inline; } }\n\n.latestActive {\n  background-color: #DDD;\n  position: relative;\n  top: 3px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-left-style: solid;\n  border-right-style: solid;\n  border-top-style: solid;\n  border: 1px solid black;\n  border-bottom: 1px solid #ddd;\n  padding: 1% 1% 0 1%; }\n  .latestActive > span {\n    display: inline !important; }\n\n#lastSpan {\n  padding: 10px 10px 5px 10px;\n  position: absolute;\n  top: -16px;\n  right: 0; }\n\n#latestSpan {\n  padding: 10px;\n  top: -5px; }\n\n@media (max-width: 1250px) {\n  #lastSpan > span, #latestSpan > span {\n    display: none !important; } }\n\n.infoCollapse {\n  display: none;\n  opacity: 0;\n  transition: opacity 0.5s; }\n\n.activeInfoCollapse {\n  display: block;\n  position: relative;\n  -webkit-animation-name: fade;\n          animation-name: fade;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  opacity: 1; }\n\n@-webkit-keyframes fade {\n  from {\n    opacity: .4; }\n  to {\n    opacity: 1; } }\n\n@keyframes fade {\n  from {\n    opacity: .4; }\n  to {\n    opacity: 1; } }\n\n/* ***************************   MODAL *************************** */\n/* The Modal (background) */\n.modal {\n  display: block;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.8);\n  /* Black w/ opacity */ }\n\n/* Modal Content/Box */\n.modal-content {\n  background-color: #DDDDDD;\n  margin: 15% auto;\n  /* 15% from the top and centered */\n  padding: 20px;\n  border: 1px solid #888;\n  width: 40%;\n  /* Could be more or less, depending on screen size */\n  -webkit-animation-name: animatetop;\n  -webkit-animation-duration: 0.4s;\n  animation-name: animatetop;\n  animation-duration: 0.4s; }\n\n#editDeleteButton {\n  position: absolute;\n  top: 5%;\n  right: 7%;\n  line-height: 2em;\n  background-color: #CE4441; }\n  #editDeleteButton:hover {\n    background-color: #C9302C; }\n\n#saveModalButton {\n  background-color: #A0C47D;\n  float: right;\n  line-height: 3em;\n  min-width: 20%; }\n  #saveModalButton:hover {\n    background-color: #78AB46; }\n\n#cancelModalButton {\n  line-height: 3em;\n  min-width: 20%; }\n\n#modalForm {\n  margin-top: 5%; }\n  #modalForm input {\n    line-height: 2em;\n    background-color: #eee;\n    border: 1px solid #888;\n    width: 25%;\n    padding: 0 5px; }\n  #modalForm select {\n    height: 2.25em;\n    width: 26%;\n    background-color: #eee;\n    padding: 0 5px; }\n  #modalForm label {\n    width: 20%; }\n  #modalForm img {\n    margin-right: 0.5%;\n    width: 2.48em; }\n\n#modalCategoryLabel {\n  float: left; }\n\n.modalInputRow {\n  line-height: 3em; }\n\n#headerModalEdit {\n  font-size: 2em;\n  text-align: center;\n  margin: 0;\n  margin-bottom: 2.5%; }\n\n#editCategory {\n  float: left;\n  margin-right: 1%; }\n\n/* Add Animation */\n@-webkit-keyframes animatetop {\n  from {\n    top: -50px;\n    opacity: 0; }\n  to {\n    top: 0;\n    opacity: 1; } }\n\n@keyframes animatetop {\n  from {\n    top: -50px;\n    opacity: 0; }\n  to {\n    top: 0;\n    opacity: 1; } }\n"

/***/ }),

/***/ 857:
/***/ (function(module, exports) {

module.exports = "hr {\n  border-color: #444;\n  margin: 0; }\n\nh1 {\n  font-size: 32px; }\n\n#showEverythingButton {\n  margin-top: 5%;\n  font-size: 17px;\n  line-height: 2em;\n  padding: 1%;\n  text-align: center;\n  border: 1px solid #888;\n  background-color: #DDDDDD;\n  transition: 0.2s;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer; }\n  #showEverythingButton:hover {\n    background-color: #EEE; }\n\n#noDataFoundField {\n  line-height: 1.5em;\n  font-size: 30px;\n  border: 1px solid #444;\n  padding: 1%;\n  background: #ddd; }\n\n#dataListHead {\n  background: #ddd;\n  border: 1px solid black;\n  margin-bottom: 1%;\n  font-size: 1.5em; }\n  #dataListHead > div {\n    display: inline-block;\n    padding: 1% 0;\n    /*  border-right: 1px solid black; */ }\n    #dataListHead > div:last-child {\n      border: none; }\n  #dataListHead .headNr {\n    width: 7.2%;\n    padding-left: 2%;\n    background-color: #888888; }\n  #dataListHead .headCategory > div, #dataListHead .headAmount > div, #dataListHead .headDate > div {\n    margin-right: 5%; }\n  #dataListHead .headCategory {\n    width: 13%;\n    cursor: pointer; }\n    #dataListHead .headCategory:hover {\n      color: #444; }\n  #dataListHead .headAmount {\n    width: 12.5%;\n    cursor: pointer; }\n    #dataListHead .headAmount:hover {\n      color: #444; }\n  #dataListHead .headDate {\n    width: 16%;\n    cursor: pointer;\n    margin-left: 1.5%; }\n    #dataListHead .headDate:hover {\n      color: #444; }\n  #dataListHead .headDescription {\n    cursor: pointer; }\n    #dataListHead .headDescription:hover {\n      color: #444; }\n\n.dataListWrapper {\n  border: 1px solid #444;\n  padding: 0;\n  margin: 0;\n  margin-bottom: 5%; }\n  .dataListWrapper div {\n    padding: 0;\n    margin: 0; }\n  .dataListWrapper > div:last-child {\n    border: none; }\n\n.dataListItem {\n  border-bottom: 1px solid #444;\n  font-size: 18px;\n  background-color: #DDDDDD;\n  transition: background-color 0.2s; }\n\n.infoColumn {\n  height: 100%; }\n\n.dataListItem:hover {\n  background-color: #eee; }\n\n.expenseNumber {\n  width: 8%;\n  background: #888;\n  position: absolute;\n  text-align: center;\n  height: 100%;\n  font-size: 1.5em; }\n  .expenseNumber > div {\n    margin-top: .4em; }\n\n.categoryIcon {\n  float: left;\n  width: 10%;\n  height: 100%;\n  margin-left: 10% !important; }\n  .categoryIcon > img {\n    width: 60%;\n    margin-top: 5%;\n    margin-left: 20%;\n    margin-bottom: 10%; }\n\n.expenseValue {\n  float: left;\n  width: 20%;\n  height: 100%;\n  font-size: 1.5em;\n  position: relative;\n  left: 4%; }\n  .expenseValue > div {\n    margin-top: 0.4em; }\n\n.expenseDate {\n  float: left;\n  width: 15%;\n  height: 100%;\n  height: 2em !important; }\n  .expenseDate > div {\n    margin-top: 14%; }\n\n.expenseDescription {\n  float: left;\n  width: 40%;\n  position: relative;\n  left: 4%;\n  overflow: hidden; }\n  .expenseDescription > div {\n    margin-top: 4.444%;\n    height: 1.5em;\n    transition: height 0.2s ease; }\n\n.expenseDescriptionShown {\n  height: initial !important; }\n\n.editColumn {\n  height: 100%; }\n  .editColumn img {\n    width: 60%;\n    cursor: pointer;\n    transition: 0.2s;\n    margin-top: 5%; }\n    .editColumn img:hover {\n      width: 65%; }\n\n.floatingSortHeader {\n  float: left; }\n\n.editColumn > div {\n  margin-top: 0.3em; }\n\n/* ***************************   Filter Column *************************** */\n.filterContainer {\n  width: 70%;\n  margin: 0 auto; }\n\n.yearFilterContainer {\n  font-size: 25px;\n  margin-top: 5%;\n  width: 100%;\n  position: relative; }\n  .yearFilterContainer > input {\n    text-align: center;\n    border: 1px solid #888;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    line-height: 2em; }\n\n.plusYearButton {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  color: #444;\n  position: absolute;\n  top: 0.4em; }\n  .plusYearButton:last-child {\n    right: -25px; }\n  .plusYearButton:first-child {\n    left: -25px; }\n\n.monthFilterContainer {\n  margin-top: 2%;\n  border: 1px solid #888; }\n\n.monthActiveStyle {\n  background: #aaa !important; }\n\n.monthFilterContainer > div {\n  font-size: 17px;\n  line-height: 2em;\n  padding: 1%;\n  text-align: center;\n  border-bottom: 1px solid #888;\n  background-color: #DDDDDD;\n  transition: 0.2s;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer; }\n\n#allMonthsDiv {\n  font-size: 17px;\n  line-height: 2em;\n  padding: 1%;\n  text-align: center;\n  border-bottom: 1px solid #888;\n  background-color: #DDDDDD;\n  transition: 0.2s;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  border: 1px solid #888;\n  margin-top: 5%; }\n\n.monthFilterContainer > div:hover, #allMonthsDiv:hover {\n  background-color: #EEE; }\n\n.monthFilterContainer > div:last-child {\n  border: none; }\n\n/* ***************************   MODAL *************************** */\n/* The Modal (background) */\n.modal {\n  display: block;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.8);\n  /* Black w/ opacity */ }\n\n/* Modal Content/Box */\n.modal-content {\n  background-color: #DDDDDD;\n  margin: 15% auto;\n  /* 15% from the top and centered */\n  padding: 20px;\n  border: 1px solid #888;\n  width: 40%;\n  /* Could be more or less, depending on screen size */\n  -webkit-animation-name: animatetop;\n  -webkit-animation-duration: 0.4s;\n  animation-name: animatetop;\n  animation-duration: 0.4s; }\n\n#editDeleteButton {\n  position: absolute;\n  top: 5%;\n  right: 7%;\n  line-height: 2em;\n  background-color: #CE4441; }\n  #editDeleteButton:hover {\n    background-color: #C9302C; }\n\n#saveModalButton {\n  background-color: #A0C47D;\n  float: right;\n  line-height: 3em;\n  min-width: 20%; }\n  #saveModalButton:hover {\n    background-color: #78AB46; }\n\n#cancelModalButton {\n  line-height: 3em;\n  min-width: 20%; }\n\n#modalForm {\n  margin-top: 5%; }\n  #modalForm input {\n    line-height: 2em;\n    background-color: #eee;\n    border: 1px solid #888;\n    width: 25%;\n    padding: 0 5px; }\n  #modalForm select {\n    height: 2.25em;\n    width: 26%;\n    background-color: #eee;\n    padding: 0 5px; }\n  #modalForm label {\n    width: 20%; }\n  #modalForm img {\n    margin-right: 0.5%;\n    width: 2.48em; }\n\n#modalCategoryLabel {\n  float: left; }\n\n.modalInputRow {\n  line-height: 3em; }\n\n#headerModalEdit {\n  font-size: 2em;\n  text-align: center;\n  margin: 0;\n  margin-bottom: 2.5%; }\n\n#editCategory {\n  float: left;\n  margin-right: 1%; }\n"

/***/ }),

/***/ 858:
/***/ (function(module, exports) {

module.exports = "#welcomeText {\n  width: 50%;\n  position: absolute;\n  right: 4vw;\n  top: 5vh;\n  text-align: center;\n  font-size: 40px;\n  color: #444; }\n\n#quoteHr {\n  border-color: black; }\n\n#quoteOriginator {\n  font-size: 28px; }\n\n@media (min-width: 991px) {\n  #slideCompleteContainer {\n    width: 50%;\n    min-width: 800px;\n    position: absolute;\n    bottom: -90vh;\n    right: 4vw; }\n  #welcomeText {\n    min-width: 800px; }\n  #welcomeText2 {\n    display: none; } }\n\n@media (max-width: 991px) {\n  #slideCompleteContainer {\n    display: none; }\n  #welcomeText {\n    width: 80%;\n    background-color: rgba(221, 221, 221, 0.4);\n    padding: 5%;\n    border-radius: 15px;\n    position: static;\n    margin: 5% auto 0 auto; }\n  #welcomeText2 {\n    display: block;\n    background-color: rgba(221, 221, 221, 0.4);\n    min-height: 4em;\n    padding: 3%;\n    border-radius: 15px;\n    margin: 10% auto 0 auto;\n    width: 80%;\n    font-size: 2em;\n    cursor: pointer;\n    transition: background-color 0.5s ease; }\n    #welcomeText2:hover {\n      background-color: rgba(221, 221, 221, 0.8); } }\n\n.slideshow-container {\n  max-width: 1000px;\n  position: relative;\n  margin: auto; }\n\n.mySlides {\n  display: none;\n  opacity: 1;\n  -webkit-animation-name: fade;\n          animation-name: fade;\n  -webkit-animation-duration: 2.5s;\n          animation-duration: 2.5s; }\n\n@-webkit-keyframes fade {\n  from {\n    opacity: .4; }\n  to {\n    opacity: 1; } }\n\n@keyframes fade {\n  from {\n    opacity: .4; }\n  to {\n    opacity: 1; } }\n\n.activeSlide {\n  display: block !important; }\n\n.prev {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  width: auto;\n  margin-top: -22px;\n  padding: 16px;\n  color: white;\n  font-weight: bold;\n  font-size: 18px;\n  transition: 0.6s ease;\n  border-radius: 0 3px 3px 0; }\n\n.next {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  width: auto;\n  margin-top: -22px;\n  padding: 16px;\n  color: white;\n  font-weight: bold;\n  font-size: 18px;\n  transition: 0.6s ease;\n  border-radius: 0 3px 3px 0;\n  right: 0;\n  border-radius: 3px 0 0 3px; }\n\n.prev:hover, .next:hover {\n  background-color: rgba(0, 0, 0, 0.8); }\n\n.text {\n  color: #f2f2f2;\n  font-size: 15px;\n  padding: 8px 12px;\n  position: absolute;\n  bottom: 8px;\n  width: 100%;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.7);\n  height: 4em; }\n\n.numbertext {\n  color: #f2f2f2;\n  font-size: 12px;\n  padding: 8px 12px;\n  position: absolute;\n  top: 0;\n  right: 0; }\n\n.dot {\n  cursor: pointer;\n  height: 13px;\n  width: 13px;\n  margin: 0 2px;\n  background-color: #bbb;\n  border-radius: 50%;\n  display: inline-block;\n  transition: background-color 0.6s ease; }\n\n.active, .dot:hover {\n  background-color: #717171; }\n"

/***/ }),

/***/ 859:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 860:
/***/ (function(module, exports) {

module.exports = ".navbar {\n  background-color: #355C7D;\n  border-radius: 0px;\n  margin-bottom: 0;\n  z-index: 2; }\n\n.navbar-brand {\n  font-size: 20px;\n  color: #DDD; }\n\n.navbar-right > li > a {\n  transition: 0.2s ease-in-out; }\n  .navbar-right > li > a:hover {\n    color: #FFF !important; }\n\n.navbar-default .navbar-nav > .active > a {\n  background-color: #444; }\n  .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus {\n    background-color: #444; }\n\n.navbar-default .navbar-nav > li > a {\n  color: #DDDDDD; }\n\n#iconStatisticHeader {\n  float: left;\n  margin: 0 6% 0 1%; }\n\n.container {\n  margin: 0;\n  padding: 0;\n  width: 100%; }\n\nimg {\n  width: 50px;\n  height: 50px; }\n\n#navbar {\n  padding-right: 5%; }\n\n@media (min-width: 991px) {\n  .mobileSideButton {\n    display: none; } }\n"

/***/ }),

/***/ 861:
/***/ (function(module, exports) {

module.exports = "#clearDatabase {\n  background-color: #C26259;\n  transition: background-color 0.2s ease;\n  line-height: 2em;\n  padding: 2%;\n  color: #444; }\n  #clearDatabase:hover {\n    background-color: #ae5850; }\n\n.profileSettingsItem > span {\n  display: block; }\n"

/***/ }),

/***/ 862:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 863:
/***/ (function(module, exports) {

module.exports = ".row {\n  height: 100%; }\n\n.sidebar {\n  background: #444; }\n\n.clearMargPad {\n  padding: 0;\n  height: 100%; }\n\n.onTop {\n  z-index: 2; }\n\n#sideNavbar {\n  text-decoration: none;\n  list-style-type: none;\n  padding: 0;\n  margin-top: 35%; }\n\n#expensList {\n  margin-top: 5%; }\n\n#expenseListSpan {\n  position: relative;\n  bottom: 5px; }\n\n#statisticsLink {\n  position: relative;\n  bottom: 12px; }\n\n#dashboard {\n  margin-top: 5%; }\n\n#statistic {\n  position: relative;\n  bottom: 10px; }\n\n.icon-link {\n  display: inline-block;\n  text-decoration: none;\n  width: 100%; }\n  .icon-link > span {\n    opacity: 0;\n    color: #DDDDDD;\n    transition: opacity .15s ease-in-out;\n    display: block;\n    text-align: center; }\n\n.icon {\n  width: 50px;\n  display: block;\n  margin: 0 auto; }\n\n.icon1 {\n  fill: #DDDDDD;\n  transition: 0.15s ease-in-out;\n  width: 60%; }\n\n.icon2 {\n  width: 80%; }\n\n.icon3 {\n  fill: #DDDDDD; }\n\n.activeIcon3 {\n  fill: #F8B195; }\n\n.icon-link:hover > span {\n  opacity: 1;\n  color: #F8B195; }\n\n.icon-link:hover > svg > .icon1 {\n  fill: #F8B195; }\n\n.icon-link:hover .icon3 {\n  fill: #F8B195 !important; }\n\n.cls-1, .cls-2 {\n  fill: none;\n  stroke: #DDD;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  transition: 0.15s ease-in-out; }\n\n.cls-1 {\n  stroke-width: 2px; }\n\n.cls-3 {\n  fill: #DDD;\n  transition: 0.15s ease-in-out; }\n\n.icon-link:hover > svg > .cls-1, .icon-link:hover > svg > .cls-2, .icon-link:hover > svg > .cls-3 {\n  stroke: #F8B195; }\n\n.activeSpan {\n  opacity: 1 !important;\n  color: #F8B195 !important; }\n\n.activeIcon2 {\n  stroke: #F8B195; }\n\n.activeIcon1 {\n  fill: #F8B195; }\n"

/***/ }),

/***/ 864:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 865:
/***/ (function(module, exports) {

module.exports = "\n\n<app-navbar></app-navbar>\n\n<div class=\"containerBox\">\n  <div class=\"container row\"  [class.siteContainerForBackgroundImage]=\"_compCommunication.onHomeSite\" style=\"position:relative\">\n  <div  [class.gradientTest]=\"_compCommunication.onHomeSite\"></div>\n    <!--- - - - - - - - - - - - - - - - - - Sidebar---------------------------------------------------------->\n    <div class=\"col-md-1 no-float height \" id=\"appSidebar\" style=\"position:absolute; min-height:100vh\">\n      <app-sidebar *ngIf=\"authService.loggedIn()\"></app-sidebar>\n    </div>\n\n    <!-- - - - - - - - - - - - - - - - - - - Content---------------------------------------------------------->\n    <div class=\"col-md-11 routedStyle\" style=\"margin-left:8%\">\n\n\n\n       <flash-messages id=\"flash\"></flash-messages>\n      <router-outlet></router-outlet>\n    </div>\n\n\n  </div>\n</div>\n\n\n<!--\nsidebar nur bei @media >x sonst btns in navbar\n\n-->\n"

/***/ }),

/***/ 866:
/***/ (function(module, exports) {

module.exports = "\n<script src=\"../../../../node_modules/chart.js/src/chart.js\"></script> <!-- TODO: Wirklich nötig? -->\n\n\n\n\n<div class=\"row\">\n  <div class=\"col-md-4\"> <!-- Wrapper Left Side -->\n    <div id=\"wrapperLeftSide\">\n\n      <h2 class=\"sectionHeader\">New Expense</h2>\n      <hr class=\"hrAddExpense\">\n      <form (submit)=\"onExpenseSubmit()\">\n\n      <label class=\"fullWidth\">Value:<br><input (focus)=\"focusFunctionAddValue()\" (blur)=\"onBlurAddExpenseValue()\" [(ngModel)]=\"value\" id=\"valueInput\" type=\"text\" name=\"value\"  placeholder=\"0.00 €\"></label><br>\n      <div class=\"dateWrapper\">\n        <span (click)=\"addDaytoDate(-1)\">&#10094;</span> <!-- TODO: Write function that increments date by \"1\" (if possible date+date that should be possible somehow) -->\n\n        <label class=\"fullWidth\">Date:<br>\n          <ng2-datepicker style=\"color: #DDD\" [options]=\"datepickerOptions\" [(ngModel)]=\"datepickerDate\" [ngModelOptions]=\"{standalone: true}\"></ng2-datepicker>\n        </label>\n\n        <span (click)=\"addDaytoDate(1)\">&#10095;</span>\n      </div>\n\n\n      <br>\n\n      <hr class=\"hrAddExpense\" style=\"margin-top: 5%\">\n      <div id=\"categoryOptionFields\"> <!--TODO: Generate with *ngFor to enable to easily add a category later on-->\n          <div id=\"categoryWrapper\">\n\n          <div *ngFor=\"let category of categories; let i=index\">\n            <label class=\"categoryLabel\" (click)=\"setCategoryName(category.name, i)\">\n              <img [src]=\"category.iconPath\" [class.categoryImageActive]=\"categoriesActiveArray[i]\">\n            </label>\n          </div>\n\n          <div id=\"categoryNameField\">{{categoryName}}</div>\n        </div>\n      </div>\n      <hr class=\"hrAddExpense\">\n      <label class=\"fullWidth descriptionLabel\">Description:<br><textarea [(ngModel)]=\"description\" id=\"descriptionInput\" name=\"description\" placeholder=\"Describe your expense...\"></textarea></label><br>\n\n        <input id=\"submitNewExpense\" type=\"submit\" value=\"Eintragen\">\n      </form>\n<!-- TODO: Multiple Flash messages-->\n  </div>\n</div> <!--LEFT SECTION --> <!--  TODO: Flash Messages an verschiedenen Stellen implementieren...über #id vielleicht?-->\n\n\n  <div class=\"col-md-5\" >\n    <h1 class=\"overviewHeader\">Overview</h1>\n    <div id=\"wrapperGeneralInfo\">\n      <div id=\"currentMonthField\">{{ today| date:'MMMM'}}</div>\n      <div id=\"currentTotalExpensesField\">\n        Total <span id=\"monthTotal\">{{monthTotalString}} €</span>\n      </div>\n\n<!--\n      <ul id=\"legendList\">\n        <li *ngFor=\"let category of categories\">\n          <div [ngStyle]=\"{'background-color': category.color }\"></div>\n          <span>{{category.name}}</span><br>\n        </li>\n      </ul> -->\n\n      <ul class=\"legendList\" id=\"legendList1\"> <!-- TODO: GERNERIERN mot SLICE PIPE von angular 0-3 und 4-7-->\n        <li>\n          <div [ngStyle]=\"{'background-color': categories[0].color }\"></div>\n          <span>{{categories[0].name}}</span><br>\n        </li>\n        <li>\n          <div [ngStyle]=\"{'background-color': categories[1].color }\"></div>\n          <span>{{categories[1].name}}</span><br>\n        </li>\n        <li>\n          <div [ngStyle]=\"{'background-color': categories[2].color }\"></div>\n          <span>{{categories[2].name}}</span><br>\n        </li>\n        <li>\n          <div [ngStyle]=\"{'background-color': categories[3].color }\"></div>\n          <span>{{categories[3].name}}</span><br>\n        </li>\n      </ul>\n\n      <ul class=\"legendList\" id=\"legendList2\">\n        <li>\n          <div [ngStyle]=\"{'background-color': categories[4].color }\"></div>\n          <span>{{categories[4].name}}</span><br>\n        </li>\n        <li>\n          <div [ngStyle]=\"{'background-color': categories[5].color }\"></div>\n          <span>{{categories[5].name}}</span><br>\n        </li>\n        <li>\n          <div [ngStyle]=\"{'background-color': categories[6].color }\"></div>\n          <span>{{categories[6].name}}</span><br>\n        </li>\n        <li>\n          <div [ngStyle]=\"{'background-color': categories[7].color }\"></div>\n          <span>{{categories[7].name}}</span><br>\n        </li>\n      </ul>\n\n      <div style=\"display: block\">\n        <div id=\"noEntriesForChart\" *ngIf=\"monthSortedExpenses==undefined || monthSortedExpenses.length==0\">No expenses for current month</div>\n        <canvas *ngIf=\"!monthSortedExpenses==undefined || !monthSortedExpenses.length==0\"\n                id=\"categoryChart\"\n                baseChart #baseChart=\"base-chart\"\n                [data]=\"pieChartData\"\n                [labels]=\"pieChartLabels\"\n                [colors] =\"pieChartColor\"\n                [chartType]=\"pieChartType\"\n                [options]=\"pieChartOptions\"\n                (chartHover)=\"chartHovered($event)\"\n                (chartClick)=\"chartClicked($event)\">\n        </canvas>\n      </div> <!--CHART --> <!-- Chart-->\n\n\n\n    <!--  <section>\n        <h3 class=\"overviewHeader\">Fixed Expenses</h3>\n        <hr>\n        <ul>\n          <li><span class=\"fixkostenName\">Wohnung</span><span class=\"fixkostenBetrag\">400 €</span></li>\n          <li><span class=\"fixkostenName\">Creative Cloud</span><span class=\"fixkostenBetrag\">14,65 €</span></li>\n          <li><span class=\"fixkostenName\">Spotify</span><span class=\"fixkostenBetrag\">4,99 €</span></li>\n          <li><span class=\"fixkostenName\">Private Rente</span><span class=\"fixkostenBetrag\">30 €</span></li>\n\n        </ul>\n\n      </section> -->\n    </div> <!--wrapperGeneralInfo END -->\n  </div> <!-- MIDDLE SECTION -->\n\n\n  <div class=\"col-md-3\">\n  <!--  <h2 class=\"sectionHeader\" id=\"latestExpenseHeader\">Latest Expenses  |  Last added</h2>-->\n  <div class=\"sectionHeader\" id=\"lastLatestHeader\" >\n    <span id=\"latestSpan\" (click)=\"toggleLatestLast(0)\" [class.latestActive]=\"latestActive\">Latest <span>Expenses</span></span>\n    <span id=\"lastSpan\" (click)=\"toggleLatestLast(1)\" [class.latestActive]=\"!latestActive\"><span>Added</span> Last</span>\n  </div>\n\n  <div class=\"sectionHeaderNoEntries\" *ngIf=\"tenLatestExpenses.length ==0\">No entries yet</div>\n\n\n\n        <div *ngFor=\"let expense of tenLatestExpenses\" class=\"listItem\">\n          <div class=\"wrapperExpenseListData\" (click)=\"showDescription(expense)\" >\n          <div class=\"expenseCategory\">\n              <img [src]=\"getCategoryIconPath(expense.expenseData.category)\"><!-- Images laden - hängt zusammen mit new Expense section -> array needed mit img source ( vielleicht in category array?)-->\n          </div>\n          <div class=\"expenseData\">\n              <span class=\"expenseCategoryName\">{{expense.expenseData.category}}</span>\n              <br>\n              <span class=\"expenseDate\">{{expense.expenseData.date.formatted}}</span>\n          </div>\n          <br>\n          <div class=\"expenseAmount\">{{expense.expenseData.value}} €</div>\n\n          <br>\n          <div class=\"clearFloat\"></div>\n        <div [class.activeInfoCollapse]=\"expense.shown\" class=\"infoCollapse\">\n          <span class=\"expenseDateCollapse\">{{expense.expenseData.date.formatted}}</span>\n          <div class=\"expenseDescription\" >{{expense.expenseData.description}}</div>\n        </div>\n        </div>\n        <div class=\"wrapperListEdit\">\n          <img (click)=\"clickedEdit(expense)\" class=\"iconEdit\" src=\"resources/icons/icon_edit.png\">\n        </div>\n        <div class=clearFloat></div>\n        </div>\n\n\n  </div>\n\n\n  <div *ngIf=\"modalShown\" id=\"myModal\" class=\"modal\" (click)=\"outerModalClicked()\" (window:keypress)=\"keyDownModalGeneral($event)\">\n\n    <!-- Modal content -->\n    <div class=\"modal-content\" (click)=\"innerModalClicked()\">\n\n      <h1 id=\"headerModalEdit\">Edit Expense</h1>\n      <button id=\"editDeleteButton\" (click)=\"deleteUserExpense(editExpenseId)\">Delete Expense</button>\n      <hr class=\"hrAddExpense\">\n\n      <div id=\"modalForm\">\n        <div class=\"modalInputRow\"><label for=\"editValue\">Value</label>          <input (focus)=\"focusFunctionEditValue()\" (blur)=\"onBlurEditExpenseValue()\" (keydown)=\"keyDownModalEdit($event)\" type=\"text\" [(ngModel)]=\"editValue\" id=\"editValue\"></div>\n        <div class=\"modalInputRow\"><label for=\"editDate\">Date</label>            <input (keydown)=\"keyDownModalEdit($event)\" type=\"text\" [(ngModel)]=\"editDate.formatted\" id=\"editDate\"></div>\n\n        <div class=\"modalInputRow\"><label id=\"modalCategoryLabel\" for=\"editCategory\">Category</label>\n          <select [(ngModel)]=\"editCategory\" (ngModelChange)=\"modalCategoryChanged($event)\">\n            <option *ngFor=\"let category of categories\" [ngValue]=\"category.name\" [selected]=\"editCategory === category.name\"   >{{category.name}}</option>\n          </select>\n          <img [src]=\"editCategoryPath\"><br class=\"clearFloat\">\n        </div>\n\n\n        <div class=\"modalInputRow\"><label for=\"editDescription\">Description</label>  <input (keydown)=\"keyDownModalEdit($event)\" type=\"text\" [(ngModel)]=\"editDescription\" id=\"editDescription\"></div>\n      </div>\n\n      <br>\n\n      <button id=\"cancelModalButton\" (click)=\"closeModal()\">Cancel</button>\n      <button id=\"saveModalButton\" (click)=\"saveExpenseModalClicked()\">Save</button>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 867:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\" expenseFilterArea col-md-4\"> <!--Filter Area -->\n    <h1>Filter</h1>\n    <hr>\n\n<div class=\"filterContainer\">\n\n<!--  <div [class.monthActiveStyle]=\"everythingShown\" (click)=\"showEverything()\" id=\"showEverythingButton\">Show everything</div>   //   REMOVED FEATURE BUT STILL IMPLEMENTED\n<br>\n<h2 style=\"text-align:center\">Date Filter</h2>\n<hr> -->\n  <div class=\"yearFilterContainer\">\n    <span class=\"plusYearButton\" (click)=\"plusYear(-1)\">&#10094;</span>\n    <input type=\"text\" name=\"filterYear\" [(ngModel)]=\"filterYear\">\n    <span class=\"plusYearButton\" (click)=\"plusYear(1)\">&#10095;</span>\n  </div>\n\n  <div [class.monthActiveStyle]=\"monthActiveArray[0]\" (click)=\"activateMonthFilter(0)\" id=\"allMonthsDiv\">All Months</div>\n\n  <div class=\"monthFilterContainer\">\n    <div *ngFor=\"let month of monthNames; let i=index\" [class.monthActiveStyle]=\"monthActiveArray[i+1]\" (click)=\"activateMonthFilter(i+1)\">{{month}}</div>\n  </div>\n\n</div>\n\n\n\n  </div>\n\n\n  <div class=\"expenseDataArea col-md-8\"> <!--Entry Area -->\n    <h1>Expense List</h1>\n    <div id=\"dataListHead\">\n      <div class=\"headNr\"><div>Nr.</div></div>\n      <div class=\"headCategory\" (click)=\"sortCategory()\"><div [class.floatingSortHeader]=\"sortedCategory\">Category</div><span [class.dropup]=\"sortedCategoryAscending\"><span [class.caret]=\"sortedCategory\"></span></span></div>\n      <div class=\"headAmount\" (click)=\"sortAmount()\"><div [class.floatingSortHeader]=\"sortedAmount\">Amount</div><span [class.dropup]=\"sortedAmountAscending\"><span [class.caret]=\"sortedAmount\"></span></span></div>\n      <div class=\"headDate\" (click)=\"sortDate()\"><div [class.floatingSortHeader]=\"sortedDate\">Date</div><span [class.dropup]=\"sortedDateAscending\"><span [class.caret]=\"sortedDate\"></span></span></div>\n      <div class=\"headDescription\" (click)=\"sortDescription()\"><div [class.floatingSortHeader]=\"sortedDescription\">Description</div><span [class.dropup]=\"sortedDescriptionAscending\"><span [class.caret]=\"sortedDescription\"></span></span></div>\n    </div>\n\n    <div id=\"noDataFoundField\" *ngIf=\"sortedList.length==0 && user\">No entries found</div>\n    <div class=\"dataListWrapper\" *ngIf=\"user && sortedList.length>0\">\n      <div *ngFor=\"let expense of sortedList; let i=index\" class=\"dataListItem row\">\n        <div class=\"infoColumn col-md-11\" (click)=\"showFullDescription(expense)\">\n            <div class=\"expenseNumber\"><div>{{i+1}}</div></div> <!-- BUG: CSS-Bug floating div has fixed height that fits the macbook screen but has tu actually be at a 100% -->\n            <div class=\"categoryIcon\"><img [src]=\"getCategoryIconPath(expense.expenseData.category)\" alt=\"category icon\"></div>\n            <div class=\"expenseValue\"><div>{{expense.expenseData.value}}</div></div>\n            <div class=\"expenseDate\"><div>{{expense.expenseData.date.formatted}}</div></div>\n            <div class=\"expenseDescription\"><div [class.expenseDescriptionShown]=\"expense.descriptionShown\">{{expense.expenseData.description}}</div></div> <!-- TODO: IF text longer then 1 line, cut strings and add \"...\" more \"button or view\" -->\n        </div>\n        <div class=\"editColumn col-md-1\" (click)=\"clickedEdit(expense)\"><img src=\"resources/icons/icon_edit.png\"></div>\n      </div>\n\n\n    </div>\n  </div>\n\n\n  <div *ngIf=\"modalShown\" id=\"myModal\" class=\"modal\" (click)=\"outerModalClicked()\" (window:keypress)=\"keyDownModalGeneral($event)\">\n\n    <!-- Modal content -->\n    <div class=\"modal-content\" (click)=\"innerModalClicked()\">\n\n      <h1 id=\"headerModalEdit\">Edit Expense</h1>\n      <button id=\"editDeleteButton\" (click)=\"deleteUserExpense(editExpenseId)\">Delete Expense</button>\n      <hr class=\"hrAddExpense\">\n\n      <div id=\"modalForm\">\n        <div class=\"modalInputRow\"><label for=\"editValue\">Value</label>          <input (focus)=\"focusFunctionEditValue()\" (blur)=\"onBlurEditExpenseValue()\" (keydown)=\"keyDownModalEdit($event)\" type=\"text\" [(ngModel)]=\"editValue\" id=\"editValue\"></div>\n        <div class=\"modalInputRow\"><label for=\"editDate\">Date</label>            <input (keydown)=\"keyDownModalEdit($event)\" type=\"text\" [(ngModel)]=\"editDate.formatted\" id=\"editDate\"></div>\n\n        <div class=\"modalInputRow\"><label id=\"modalCategoryLabel\" for=\"editCategory\">Category</label>\n          <select [(ngModel)]=\"editCategory\" (ngModelChange)=\"modalCategoryChanged($event)\">\n            <option *ngFor=\"let category of categories\" [ngValue]=\"category.name\" [selected]=\"editCategory === category.name\"   >{{category.name}}</option>\n          </select>\n          <img [src]=\"editCategoryPath\"><br class=\"clearFloat\">\n        </div>\n\n\n        <div class=\"modalInputRow\"><label for=\"editDescription\">Description</label>  <input (keydown)=\"keyDownModalEdit($event)\" type=\"text\" [(ngModel)]=\"editDescription\" id=\"editDescription\"></div>\n      </div>\n\n      <br>\n\n      <button id=\"cancelModalButton\" (click)=\"closeModal()\">Cancel</button>\n      <button id=\"saveModalButton\" (click)=\"saveExpenseModalClicked()\">Save</button>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 868:
/***/ (function(module, exports) {

module.exports = "\n\n<div id=\"welcomeText\">\n  A budget tells us what we can't afford, <br>\n  but it doesn't keep us from buying it.<br>\n  <hr id=\"quoteHr\">\n  <span id=\"quoteOriginator\">- Williams Feather -</span>\n</div>\n\n<div id=\"welcomeText2\" [routerLink]=\"['/register']\" (click)=\"_compCommunication.deactivateHomeSite()\">Get started now and explore managing your expenses - Register</div>\n\n\n<div (mouseenter)='enterSlideshow()' (mouseleave)=\"leaveSlideshow()\"  id=\"slideCompleteContainer\" >\n<div class=\"slideshow-container\" >\n  <div class=\"mySlides fade\" [class.activeSlide]=\"slide1\">\n    <img src=\"resources/homeResources/DashboardPreview.png\" style=\"width:100%\">\n    <div class=\"numbertext\">1 / 3</div>\n\n    <div class=\"text text1\">Get a quick overview of the current months expenses.<br> Have quick access to add any new expenses. </div>\n  </div>\n\n  <div class=\"mySlides fade\" [class.activeSlide]=\"slide2\">\n    <img src=\"resources/homeResources/DashboardPreviewEdit.png\" style=\"width:100%\">\n    <div class=\"text\">Have easy access to edit or delete the latest expenses</div>\n    <div class=\"numbertext\">2 / 3</div>\n  </div>\n\n  <div class=\"mySlides fade\" [class.activeSlide]=\"slide3\">\n    <img src=\"resources/homeResources/planBudget.png\" style=\"width:100%\">\n    <div class=\"numbertext\">3 / 3</div>\n  </div>\n\n  <a class=\"prev\" (click)=\"plusSlidesWithoutRecursive(-1)\">&#10094;</a>\n  <a class=\"next\" (click)=\"plusSlidesWithoutRecursive(1)\">&#10095;</a>\n</div>\n<br>\n\n<div style=\"text-align:center\">\n  <span class=\"dot\" (click)=\"currentSlide(0)\"></span>\n  <span class=\"dot\" (click)=\"currentSlide(1)\"></span>\n  <span class=\"dot\" (click)=\"currentSlide(2)\"></span>\n</div>\n\n\n</div>\n"

/***/ }),

/***/ 869:
/***/ (function(module, exports) {

module.exports = "\n<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>\n"

/***/ }),

/***/ 870:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <img  src=\"../../../resources/iconStatistic.png\" id=\"iconStatisticHeader\">\n\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Expense Manager</a>\n    </div>\n    <div id=\"navbar\" class=\"collapse navbar-collapse\" >\n      <ul class=\"nav navbar-nav navbar-left\">\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a (click) =\"_compCommunicationService.deactivateAll()\" (click) =\"_compCommunicationService.activateHomeSite()\" [routerLink]=\"['/']\">Home</a></li>\n        <li *ngIf=\"authService.loggedIn()\" class=\"mobileSideButton\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/dashboard']\" (click) =\"_compCommunicationService.deactivateHomeSite()\">Dashboard</a></li>\n        <li *ngIf=\"authService.loggedIn()\" class=\"mobileSideButton\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/expenseList']\" (click) =\"_compCommunicationService.deactivateHomeSite()\">Expense List</a></li>\n        <li *ngIf=\"authService.loggedIn()\" class=\"mobileSideButton\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/statistics']\" (click) =\"_compCommunicationService.deactivateHomeSite()\">Statistics</a></li>\n\n      </ul>\n\n      <ul class=\"nav navbar-nav navbar-right\" >\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a (click) =\"_compCommunicationService.deactivateAll()\" [routerLink]=\"['/profile']\" (click) =\"_compCommunicationService.deactivateHomeSite()\">Profile</a></li>\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a  [routerLink]=\"['/login']\" (click) =\"_compCommunicationService.deactivateHomeSite()\">Login</a></li>\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/register']\" (click) =\"_compCommunicationService.deactivateHomeSite()\">Register</a></li>\n        <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" (click) =\"_compCommunicationService.deactivateAll()\"  href=\"#\" (click) =\"_compCommunicationService.deactivateHomeSite()\">Logout</a></li>\n      </ul>\n    </div><!--/.nav-collapse -->\n  </div>\n</nav>\n"

/***/ }),

/***/ 871:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\"><span>Username: </span>{{user.username}}</li>\n    <li class=\"list-group-item\"><span>Email: </span>{{user.email}}</li>\n    <li class=\"list-group-item\">Amount of entries in Database: {{user.expenseData.length}}</li>\n    <li class=\"list-group-item profileSettingsItem\">\n      <span>Settings:</span>\n      <br>\n      <button (click)=\"clearDatabaseData()\" id=\"clearDatabase\"> CLEAR DATABASE</button>\n    </li>\n\n  </ul>\n\n\n<!--  <flash-messages></flash-messages> -->\n\n</div>\n"

/***/ }),

/***/ 872:
/***/ (function(module, exports) {

module.exports = "\n<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n"

/***/ }),

/***/ 873:
/***/ (function(module, exports) {

module.exports = "<div class=\"row onTop\">\n  <div class=\"col-md-9 clearMargPad sidebar\">\n\n    <ul id=\"sideNavbar\"> <!-- TODO: Bei initSite jeweils compCommunication icon und link aktivieren -->\n      <li (click)=\"_compCommunicationService.activateDashboard()\" (click) =\"_compCommunicationService.deactivateHomeSite()\">\n        <a  class=\"icon-link\" [routerLink]=\"['/dashboard']\">\n          <svg class=\"icon icon1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\n            <path [class.activeIcon1]=\"_compCommunicationService.dashboardActive\" class=\"icon1\" fill=\"#303A3F\" d=\"M137.8 512H69.5c-10 0-18-8.3-18-18.2V354c0-10 8-18 18-18h68.3c10 0 18 8 18 18v139.8c.2 10-8 18-18 18zm149.2 0h-62c-11.6 0-21.3-9.7-21.3-21.5V288.8c0-11.7 9.6-21.4 21.4-21.4h62c12 0 21.7 9.6 21.7 21.4v201.7c0 11.8-9.6 21.4-21.4 21.4zm149.5 0h-56.3c-13.3 0-24-11-24-24.2V224.3c0-13.3 10.8-24 24-24h56.3c13.3 0 24 10.8 24 24v263.5c0 13.3-10.7 24-24 24zM445 0c-22 1-39 19.5-38 41.6l-101.7 100-86.6-76-158.5 159c-20.4 2.7-35.7 20.3-35 41.2 1 22 19.7 39 41.7 38.2s39-19.6 38-41.6c0-1.8-.8-3.5-1-5.3l119.4-114 83.5 73L446 79.8c.8 0 1.6.2 2.4 0 22-.8 39-19.5 38.2-41.5-1-22-19.5-39-41.5-38z\"/>\n          </svg>\n          <span id=\"dashboard\" [class.activeSpan]=\"_compCommunicationService.dashboardActive\"> Dashboard</span>\n        </a>\n      </li>\n\n\n      <li id=\"expensList\"(click)=\"_compCommunicationService.activateExpenseList()\" (click) =\"_compCommunicationService.deactivateHomeSite()\">\n        <a  class=\"icon-link\" [routerLink]=\"['/expenseList']\">\n          <svg class=\"icon\" height=\"48\" viewBox=\"0 0 48 48\" width=\"48\" xmlns=\"http://www.w3.org/2000/svg\">\n            <g class=\"icon3\" [class.activeIcon3]=\"_compCommunicationService.expenseListActive\" >\n              <circle cx=\"4\" cy=\"4\" r=\"4\"/>\n              <circle cx=\"4\" cy=\"20\" r=\"4\"/>\n              <circle cx=\"4\" cy=\"36\" r=\"4\"/>\n              <circle cx=\"4\" cy=\"52\" r=\"4\"/>\n              <path d=\"M13 1h40v6H13zM13 17h40v6H13zM13 33h40v6H13zM13 49h40v6H13z\"/>\n            </g>\n          </svg>\n          <span id=\"expenseListSpan\" [class.activeSpan]=\"_compCommunicationService.expenseListActive\">Expense List</span>\n        </a>\n      </li>\n\n\n      <li id=\"statisticsLink\" (click)=\"_compCommunicationService.activateStatistics()\" (click) =\"_compCommunicationService.deactivateHomeSite()\">\n        <a  class=\"icon-link\" [routerLink]=\"['/statistics']\">\n          <svg class=\"icon icon2\" xmlns=\"http://www.w3.org/2000/svg\" id=\"Layer_3\" data-name=\"Layer 3\" viewBox=\"0 0 32 32\">\n            <path [class.activeIcon2]=\"_compCommunicationService.statisticsActive\" d=\"M15 9h11M6 9h3m14 7h3M6 16h11m0 7h9M6 23h5\" class=\"cls-1\"/>\n            <path [class.activeIcon2]=\"_compCommunicationService.statisticsActive\" d=\"M14.5 9a2.6 2.6 0 0 1-2.5 2.5A2.6 2.6 0 0 1 9.5 9a2.5 2.5 0 0 1 5 0zm8 7a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z\" class=\"cls-2\"/>\n            <path [class.activeIcon2]=\"_compCommunicationService.statisticsActive\" d=\"M21 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0z\" class=\"cls-3\"/>\n            <path [class.activeIcon2]=\"_compCommunicationService.statisticsActive\" d=\"M16.5 23a2.6 2.6 0 0 1-2.5 2.5 2.6 2.6 0 0 1-2.5-2.6 2.5 2.5 0 0 1 5 0z\" class=\"cls-2\"/>\n          </svg>\n          <span [class.activeSpan]=\"_compCommunicationService.statisticsActive\" id=\"statistic\">Statistics</span>\n        </a>\n      </li>\n\n    </ul>\n  </div> <!-- Sidebar inner col-9-md wrapper-->\n</div>\n"

/***/ }),

/***/ 874:
/***/ (function(module, exports) {

module.exports = "Statistics works!\n"

/***/ }),

/***/ 901:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(515);


/***/ })

},[901]);
//# sourceMappingURL=main.bundle.map