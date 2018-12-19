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
//# sourceMappingURL=E:/Documents/Projekte/ExpenseManager/angular-src/src/validate.service.js.map

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
        return this.http.post('http://localhost:3000/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers })
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
        return this.http.post('http://localhost:3000/users/addExpense', both, { headers: headers })
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
        return this.http.post('http://localhost:3000/users/editExpense', both, { headers: headers })
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
        return this.http.post('http://localhost:3000/users/deleteExpense', both, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.clearDatabase = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var usernameJson = { username: JSON.parse(localStorage.getItem('user')).username };
        return this.http.post('http://localhost:3000/users/resetDatabase', usernameJson, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.initDatabase = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var usernameJson = { username: JSON.parse(localStorage.getItem('user')).username };
        return this.http.post('http://localhost:3000/users/initDatabase', usernameJson, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/profile', { headers: headers })
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
//# sourceMappingURL=E:/Documents/Projekte/ExpenseManager/angular-src/src/auth.service.js.map

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
//# sourceMappingURL=E:/Documents/Projekte/ExpenseManager/angular-src/src/main.js.map

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
//# sourceMappingURL=E:/Documents/Projekte/ExpenseManager/angular-src/src/component-communication.service.js.map

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
//# sourceMappingURL=E:/Documents/Projekte/ExpenseManager/angular-src/src/app.component.js.map

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
//# sourceMappingURL=E:/Documents/Projekte/ExpenseManager/angular-src/src/app.module.js.map

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
    DashboardComponent.prototype.setCurrentDateToDatepicker = function () {
        var day = this.newDate.getDate();
        var month = this.newDate.getMonth() + 1;
        var year = this.newDate.getFullYear().toString();
        if (day < 10) {
            day = "0" + day;
        }
        else {
            day = "" + day;
        }
        if (month < 10) {
            month = "0" + month;
        }
        else {
            month = "" + month;
        }
        this.datepickerDate = new __WEBPACK_IMPORTED_MODULE_4_ng2_datepicker__["c" /* DateModel */];
        this.datepickerDate.formatted = day + "-" + month + "-" + year;
        this.datepickerDate.day = day;
        this.datepickerDate.month = month;
        this.datepickerDate.year = year;
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
            //TODO: wenn manuell eingegeben-->checken ob manuell und dann new DAtemodel mit dem formattetem befüllen ...bzw ist ja das dateModel scon durch init als aktuelles datum da...dann muss nur vor der sendung an den server day,month und year gesetzt werden
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
//# sourceMappingURL=E:/Documents/Projekte/ExpenseManager/angular-src/src/dashboard.component.js.map

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
    /* Sorts the List according to variables above for
     * 1.) Category
     * 2.) Amount
     * 3.) Date
     */
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
//# sourceMappingURL=E:/Documents/Projekte/ExpenseManager/angular-src/src/expense-list.component.js.map

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
//# sourceMappingURL=E:/Documents/Projekte/ExpenseManager/angular-src/src/home.component.js.map

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
//# sourceMappingURL=E:/Documents/Projekte/ExpenseManager/angular-src/src/login.component.js.map

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
//# sourceMappingURL=E:/Documents/Projekte/ExpenseManager/angular-src/src/navbar.component.js.map

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
    ProfileComponent.prototype.initDatabase = function () {
        var _this = this;
        var r = confirm("Are you sure you want to reset the Database and load the sample data?");
        if (r == true) {
            this.authService.initDatabase().subscribe(function (data) {
                if (data.success) {
                    _this.flashMessage.show("Sample data loaded", { cssClass: 'alert-success', timeout: 1500 });
                }
                else {
                    _this.flashMessage.show("Failed to load sample data", { cssClass: 'alert-danger', timeout: 1500 });
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
//# sourceMappingURL=E:/Documents/Projekte/ExpenseManager/angular-src/src/profile.component.js.map

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
//# sourceMappingURL=E:/Documents/Projekte/ExpenseManager/angular-src/src/register.component.js.map

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
//# sourceMappingURL=E:/Documents/Projekte/ExpenseManager/angular-src/src/sidebar.component.js.map

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
//# sourceMappingURL=E:/Documents/Projekte/ExpenseManager/angular-src/src/statistics.component.js.map

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
//# sourceMappingURL=E:/Documents/Projekte/ExpenseManager/angular-src/src/auth.guard.js.map

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
//# sourceMappingURL=E:/Documents/Projekte/ExpenseManager/angular-src/src/environment.js.map

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

module.exports = "\r\n\r\n.routedStyle{\r\n  color: #222;\r\n}\r\n\r\n.containerBox{\r\n  height: 93%;\r\n  color: #DDDDDD;\r\n}\r\n\r\n.clearMargPad{\r\n  padding: 0;\r\n  height: 100%;\r\n}\r\n.height{\r\n  height: 100%;\r\n}\r\n\r\n.sidebar{\r\n  background: #444;\r\n}\r\n\r\n.row{\r\n  height: 100%;\r\n}\r\n\r\n.container{\r\n  width: 100%;\r\n}\r\n\r\n#flash{\r\n  position: absolute;\r\n  z-index: 5;\r\n  width: 50%\r\n}\r\n\r\n\r\n\r\n  .siteContainerForBackgroundImage{\r\n    height: 100vh;\r\n    background-image: url(\"resources/expenseBackground.jpg\");\r\n    background-size: cover;\r\n  }\r\n\r\n\r\n.gradientTest{\r\n  height: 8em;\r\n  width: 100%;\r\n  position: absolute;\r\n   background: linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0,0,0,0) 100%);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n@media (max-width: 991px) {\r\n  #appSidebar{\r\n    display: none;\r\n  }\r\n}\r\n"

/***/ }),

/***/ 856:
/***/ (function(module, exports) {

module.exports = "/******************************************************************************/\r\n/*****************************   Left Side   **********************************/\r\n/******************************************************************************/\r\n.fullWidth {\r\n  width: 100%; }\r\n\r\n#wrapperLeftSide {\r\n  margin: 0 auto;\r\n  width: 85%; }\r\n  #wrapperLeftSide * {\r\n    text-align: left; }\r\n  #wrapperLeftSide > h2 {\r\n    font-weight: bold;\r\n    font-size: 24px;\r\n    margin-bottom: 20px; }\r\n  #wrapperLeftSide input {\r\n    margin-bottom: 20px; }\r\n  #wrapperLeftSide hr {\r\n    margin-bottom: 30px; }\r\n\r\n#sectionHeader {\r\n  margin-top: 40px; }\r\n\r\n.sectionHeaderNoEntries {\r\n  background-color: #ddd;\r\n  border: 1px solid black;\r\n  padding: 5%;\r\n  font-size: 2em;\r\n  font-color: #444;\r\n  text-align: center; }\r\n\r\n#valueInput, #descriptionInput, #dateInput, #submitNewExpense {\r\n  width: 100%;\r\n  height: 3em;\r\n  padding: 5px;\r\n  outline-color: #355C7D;\r\n}\r\n\r\n#categoryWrapper {\r\n  width: 80%;\r\n  margin: 0 auto; }\r\n  #categoryWrapper > div {\r\n    display: inline; }\r\n    #categoryWrapper > div:nth-child(8) > label {\r\n      margin-top: 2% !important; }\r\n\r\n#valueInput {\r\n  font-size: 22px;\r\n  padding-left: 10px;\r\n  height: 2.5em;\r\n  width: 95%; }\r\n\r\n#categoryNameField {\r\n  display: block !important;\r\n  text-align: center !important;\r\n  margin: 10px 0 0 0;\r\n  font-family: PrimeLight;\r\n  font-size: 22px; }\r\n\r\n.categoryLabel > img {\r\n  width: 50px;\r\n  position: relative;\r\n  bottom: 0;\r\n  transition: bottom 0.15s ease-in-out;\r\n  cursor: pointer; }\r\n  .categoryLabel > img:hover {\r\n    bottom: 7px; }\r\n\r\n.categoryImageActive {\r\n  border: 2px solid #666;\r\n  border-radius: 25px; }\r\n\r\n.categoryLabel > input {\r\n  display: none; }\r\n\r\n#dateInput {\r\n  font-size: 20px;\r\n  width: 95%;\r\n  height: 2.2em; }\r\n\r\n#descriptionInput {\r\n  height: 3em;\r\n  font-size: 18px;\r\n  margin-bottom: 20px;\r\n  padding: 10px;\r\n  width: 95%; }\r\n\r\n#submitNewExpense {\r\n  text-align: center;\r\n  width: 40%;\r\n  background-color: #A0C47D;\r\n  margin-left: 30%;\r\n  outline: none;\r\n  cursor: pointer;\r\n  transition: background-color 0.15s ease-in-out; }\r\n  #submitNewExpense:hover {\r\n    background-color: #78AB46; }\r\n\r\n.ui-datepicker-calendar *, .ui-datepicker-title * {\r\n  color: black; }\r\n\r\n.hrAddExpense {\r\n  border-color: #444;\r\n  width: 95%;\r\n  margin: 0; }\r\n\r\n/******************************************************************************/\r\n/*****************************   Middle    ************************************/\r\n/******************************************************************************/\r\n#wrapperGeneralInfo {\r\n  border: 1px solid black;\r\n  padding-bottom: 30px; }\r\n\r\n#currentMonthField {\r\n  text-align: center;\r\n  background-color: lightgrey;\r\n  font-size: 24px;\r\n  padding: 20px;\r\n  border-bottom: 1px solid #444; }\r\n\r\n#currentTotalExpensesField {\r\n  text-align: left;\r\n  padding: 20px;\r\n  font-weight: bold;\r\n  background-color: #AAA; }\r\n  #currentTotalExpensesField > span {\r\n    font-size: 1.5em;\r\n    float: right; }\r\n\r\n.legendList {\r\n  margin: 30px auto 0 auto;\r\n  font-size: 13px;\r\n  width: 90%;\r\n  padding: 0;\r\n  display: block; }\r\n\r\n#legendList1 {\r\n  float: left;\r\n  margin: 5% 5% 0 5% !important;\r\n  width: 45%;\r\n  border-right: 1px solid black;\r\n  margin: 0;\r\n  margin-top: 5%; }\r\n\r\n#legendList2 {\r\n  width: 100%;\r\n  margin-top: 5%; }\r\n  #legendList2 > li {\r\n    margin-right: 0; }\r\n\r\n.legendList > li {\r\n  margin-right: 10px;\r\n  list-style-type: none; }\r\n  .legendList > li > span {\r\n    font-family: PrimeLight;\r\n    font-size: 13px; }\r\n  .legendList > li > div {\r\n    min-width: 30px;\r\n    height: 13px;\r\n    display: inline-block;\r\n    margin-right: 5px; }\r\n\r\n#chartCanvas {\r\n  margin-top: 50px; }\r\n\r\n#noEntriesForChart {\r\n  font-size: 20px;\r\n  margin-top: 5%;\r\n  border-top: 1px solid black;\r\n  text-align: center;\r\n  padding-top: 5%; }\r\n\r\n#wrapperGeneralInfo > section > h2 {\r\n  margin: 30px 0 15px 0; }\r\n\r\n#wrapperGeneralInfo > section > hr {\r\n  width: 80%;\r\n  border: none;\r\n  height: 42px;\r\n  border-bottom: 1px solid #1f1209;\r\n  box-shadow: 0 20px 20px -20px #333;\r\n  margin: -50px auto 30px; }\r\n\r\n#wrapperGeneralInfo > section > ul {\r\n  margin: 0 12%; }\r\n  #wrapperGeneralInfo > section > ul > li {\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    text-align: left; }\r\n    #wrapperGeneralInfo > section > ul > li > span {\r\n      font-family: PrimeLight; }\r\n\r\n.fixkostenBetrag {\r\n  float: right; }\r\n\r\n.overviewHeader {\r\n  text-align: center; }\r\n\r\n#categoryChart {\r\n  width: 65% !important;\r\n  height: 65% !important;\r\n  margin: 5% auto 0 auto; }\r\n\r\n.datepicker-calendar-day-names {\r\n  color: white !important; }\r\n\r\n/******************************************************************************/\r\n/*****************************   Right Section  **********************************/\r\n/******************************************************************************/\r\n#wrapperRightSide {\r\n  margin: 0 auto;\r\n  width: 70%; }\r\n  #wrapperRightSide > h2 {\r\n    font-size: 24px;\r\n    padding: 10px 0 20px 0;\r\n    border-bottom: 1px solid black; }\r\n  #wrapperRightSide > ul {\r\n    border-right: 1px solid black;\r\n    border-left: 1px solid black; }\r\n    #wrapperRightSide > ul > * {\r\n      text-align: right; }\r\n    #wrapperRightSide > ul > li {\r\n      border-bottom: 1px solid #444;\r\n      padding: 5px 0;\r\n      cursor: pointer; }\r\n\r\n.expenseCategory {\r\n  margin-left: 10px;\r\n  margin-top: 2%;\r\n  margin-bottom: 2%;\r\n  width: 50px;\r\n  float: left; }\r\n  .expenseCategory > img {\r\n    width: 100%; }\r\n\r\n.expenseCategoryName {\r\n  line-height: 2em; }\r\n\r\n.expenseData {\r\n  float: left;\r\n  text-align: left;\r\n  margin-left: 10px; }\r\n\r\n.expenseDate {\r\n  font-family: PrimeLight; }\r\n\r\n.expenseAmount {\r\n  text-align: right;\r\n  margin-right: 5%;\r\n  position: absolute;\r\n  right: 15%;\r\n  font-size: 20px; }\r\n\r\n.expenseComment {\r\n  text-align: left;\r\n  margin-left: 70px; }\r\n\r\n#latestTen {\r\n  list-style-type: none;\r\n  padding: 0;\r\n  border: 1px solid #666;\r\n  background-color: white; }\r\n  #latestTen li {\r\n    border-bottom: 1px solid #666; }\r\n\r\n.expenseComment {\r\n  display: none; }\r\n\r\n.sectionHeader {\r\n  font-size: 24px; }\r\n\r\n.expenseDescription {\r\n  margin-bottom: 3%;\r\n  text-align: center; }\r\n\r\n.listItem {\r\n  border-width: 1px 1px 0 1px;\r\n  border-color: black;\r\n  border-style: solid;\r\n  background-color: #DDD;\r\n  line-height: 1.5em;\r\n  cursor: pointer;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  transition: background-color .25s ease; }\r\n  .listItem:hover {\r\n    background-color: #EEE; }\r\n  .listItem:last-child {\r\n    border-width: 1px 1px 1px 1px;\r\n    border-color: black;\r\n    border-style: solid; }\r\n\r\n.wrapperListEdit {\r\n  position: relative; }\r\n\r\n.iconEdit {\r\n  cursor: pointer;\r\n  position: absolute;\r\n  right: 10px;\r\n  top: 10px;\r\n  width: 2.5em;\r\n  transition: -webkit-transform .25s ease;\r\n  transition: transform .25s ease;\r\n  transition: transform .25s ease, -webkit-transform .25s ease; }\r\n  .iconEdit:hover {\r\n    -webkit-transform: scale(1.25);\r\n            transform: scale(1.25); }\r\n\r\n.wrapperExpenseListData {\r\n  float: left;\r\n  width: 89%; }\r\n\r\n.expenseDateCollapse {\r\n  display: none; }\r\n\r\n@media (max-width: 1375px) {\r\n  .expenseData {\r\n    display: none; }\r\n  .expenseDateCollapse {\r\n    display: block;\r\n    width: 100%;\r\n    text-align: center; }\r\n  .iconEdit {\r\n    right: 5px; }\r\n  .expenseAmount {\r\n    right: initial;\r\n    left: 40%; } }\r\n\r\n.clearFloat {\r\n  clear: both; }\r\n\r\n#latestExpenseHeader {\r\n  margin-bottom: 22px;\r\n  font-size: 1.5em; }\r\n\r\n#lastLatestHeader {\r\n  margin-top: 1.5em;\r\n  position: relative; }\r\n\r\n#lastSpan, #latestSpan {\r\n  cursor: pointer; }\r\n\r\n#lastSpan > span, #latestSpan > span {\r\n  display: none; }\r\n\r\n@media (min-width: 1600px) {\r\n  #lastSpan > span, #latestSpan > span {\r\n    display: inline; } }\r\n\r\n.latestActive {\r\n  background-color: #DDD;\r\n  position: relative;\r\n  top: 3px;\r\n  border-top-left-radius: 5px;\r\n  border-top-right-radius: 5px;\r\n  border-left-style: solid;\r\n  border-right-style: solid;\r\n  border-top-style: solid;\r\n  border: 1px solid black;\r\n  border-bottom: 1px solid #ddd;\r\n  padding: 1% 1% 0 1%; }\r\n  .latestActive > span {\r\n    display: inline !important; }\r\n\r\n#lastSpan {\r\n  padding: 10px 10px 5px 10px;\r\n  position: absolute;\r\n  top: -16px;\r\n  right: 0; }\r\n\r\n#latestSpan {\r\n  padding: 10px;\r\n  top: -5px; }\r\n\r\n@media (max-width: 1250px) {\r\n  #lastSpan > span, #latestSpan > span {\r\n    display: none !important; } }\r\n\r\n.infoCollapse {\r\n  display: none;\r\n  opacity: 0;\r\n  transition: opacity 0.5s; }\r\n\r\n.activeInfoCollapse {\r\n  display: block;\r\n  position: relative;\r\n  -webkit-animation-name: fade;\r\n          animation-name: fade;\r\n  -webkit-animation-duration: 0.5s;\r\n          animation-duration: 0.5s;\r\n  opacity: 1; }\r\n\r\n@-webkit-keyframes fade {\r\n  from {\r\n    opacity: .4; }\r\n  to {\r\n    opacity: 1; } }\r\n\r\n@keyframes fade {\r\n  from {\r\n    opacity: .4; }\r\n  to {\r\n    opacity: 1; } }\r\n\r\n/* ***************************   MODAL *************************** */\r\n/* The Modal (background) */\r\n.modal {\r\n  display: block;\r\n  /* Hidden by default */\r\n  position: fixed;\r\n  /* Stay in place */\r\n  z-index: 1;\r\n  /* Sit on top */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  /* Full width */\r\n  height: 100%;\r\n  /* Full height */\r\n  overflow: auto;\r\n  /* Enable scroll if needed */\r\n  background-color: black;\r\n  /* Fallback color */\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n  /* Black w/ opacity */ }\r\n\r\n/* Modal Content/Box */\r\n.modal-content {\r\n  background-color: #DDDDDD;\r\n  margin: 15% auto;\r\n  /* 15% from the top and centered */\r\n  padding: 20px;\r\n  border: 1px solid #888;\r\n  width: 40%;\r\n  /* Could be more or less, depending on screen size */\r\n  -webkit-animation-name: animatetop;\r\n  -webkit-animation-duration: 0.4s;\r\n  animation-name: animatetop;\r\n  animation-duration: 0.4s; }\r\n\r\n#editDeleteButton {\r\n  position: absolute;\r\n  top: 5%;\r\n  right: 7%;\r\n  line-height: 2em;\r\n  background-color: #CE4441; }\r\n  #editDeleteButton:hover {\r\n    background-color: #C9302C; }\r\n\r\n#saveModalButton {\r\n  background-color: #A0C47D;\r\n  float: right;\r\n  line-height: 3em;\r\n  min-width: 20%; }\r\n  #saveModalButton:hover {\r\n    background-color: #78AB46; }\r\n\r\n#cancelModalButton {\r\n  line-height: 3em;\r\n  min-width: 20%; }\r\n\r\n#modalForm {\r\n  margin-top: 5%; }\r\n  #modalForm input {\r\n    line-height: 2em;\r\n    background-color: #eee;\r\n    border: 1px solid #888;\r\n    width: 25%;\r\n    padding: 0 5px; }\r\n  #modalForm select {\r\n    height: 2.25em;\r\n    width: 26%;\r\n    background-color: #eee;\r\n    padding: 0 5px; }\r\n  #modalForm label {\r\n    width: 20%; }\r\n  #modalForm img {\r\n    margin-right: 0.5%;\r\n    width: 2.48em; }\r\n\r\n#modalCategoryLabel {\r\n  float: left; }\r\n\r\n.modalInputRow {\r\n  line-height: 3em; }\r\n\r\n#headerModalEdit {\r\n  font-size: 2em;\r\n  text-align: center;\r\n  margin: 0;\r\n  margin-bottom: 2.5%; }\r\n\r\n#editCategory {\r\n  float: left;\r\n  margin-right: 1%; }\r\n\r\n/* Add Animation */\r\n@-webkit-keyframes animatetop {\r\n  from {\r\n    top: -50px;\r\n    opacity: 0; }\r\n  to {\r\n    top: 0;\r\n    opacity: 1; } }\r\n\r\n@keyframes animatetop {\r\n  from {\r\n    top: -50px;\r\n    opacity: 0; }\r\n  to {\r\n    top: 0;\r\n    opacity: 1; } }\r\n"

/***/ }),

/***/ 857:
/***/ (function(module, exports) {

module.exports = "hr {\r\n  border-color: #444;\r\n  margin: 0; }\r\n\r\nh1 {\r\n  font-size: 32px; }\r\n\r\n#showEverythingButton {\r\n  margin-top: 5%;\r\n  font-size: 17px;\r\n  line-height: 2em;\r\n  padding: 1%;\r\n  text-align: center;\r\n  border: 1px solid #888;\r\n  background-color: #DDDDDD;\r\n  transition: 0.2s;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  cursor: pointer; }\r\n  #showEverythingButton:hover {\r\n    background-color: #EEE; }\r\n\r\n#noDataFoundField {\r\n  line-height: 1.5em;\r\n  font-size: 30px;\r\n  border: 1px solid #444;\r\n  padding: 1%;\r\n  background: #ddd; }\r\n\r\n#dataListHead {\r\n  background: #ddd;\r\n  border: 1px solid black;\r\n  margin-bottom: 1%;\r\n  font-size: 1.5em; }\r\n  #dataListHead > div {\r\n    display: inline-block;\r\n    padding: 1% 0;\r\n    /*  border-right: 1px solid black; */ }\r\n    #dataListHead > div:last-child {\r\n      border: none; }\r\n  #dataListHead .headNr {\r\n    width: 7.2%;\r\n    padding-left: 2%;\r\n    background-color: #888888; }\r\n  #dataListHead .headCategory > div, #dataListHead .headAmount > div, #dataListHead .headDate > div {\r\n    margin-right: 5%; }\r\n  #dataListHead .headCategory {\r\n    width: 13%;\r\n    cursor: pointer; }\r\n    #dataListHead .headCategory:hover {\r\n      color: #444; }\r\n  #dataListHead .headAmount {\r\n    width: 12.5%;\r\n    cursor: pointer; }\r\n    #dataListHead .headAmount:hover {\r\n      color: #444; }\r\n  #dataListHead .headDate {\r\n    width: 16%;\r\n    cursor: pointer;\r\n    margin-left: 1.5%; }\r\n    #dataListHead .headDate:hover {\r\n      color: #444; }\r\n  #dataListHead .headDescription {\r\n    cursor: pointer; }\r\n    #dataListHead .headDescription:hover {\r\n      color: #444; }\r\n\r\n.dataListWrapper {\r\n  border: 1px solid #444;\r\n  padding: 0;\r\n  margin: 0;\r\n  margin-bottom: 5%; }\r\n  .dataListWrapper div {\r\n    padding: 0;\r\n    margin: 0; }\r\n  .dataListWrapper > div:last-child {\r\n    border: none; }\r\n\r\n.dataListItem {\r\n  border-bottom: 1px solid #444;\r\n  font-size: 18px;\r\n  background-color: #DDDDDD;\r\n  transition: background-color 0.2s; }\r\n\r\n.infoColumn {\r\n  height: 100%; }\r\n\r\n.dataListItem:hover {\r\n  background-color: #eee; }\r\n\r\n.expenseNumber {\r\n  width: 8%;\r\n  background: #888;\r\n  position: absolute;\r\n  text-align: center;\r\n  height: 100%;\r\n  font-size: 1.5em; }\r\n  .expenseNumber > div {\r\n    margin-top: .4em; }\r\n\r\n.categoryIcon {\r\n  float: left;\r\n  width: 10%;\r\n  height: 100%;\r\n  margin-left: 10% !important; }\r\n  .categoryIcon > img {\r\n    width: 60%;\r\n    margin-top: 5%;\r\n    margin-left: 20%;\r\n    margin-bottom: 10%; }\r\n\r\n.expenseValue {\r\n  float: left;\r\n  width: 20%;\r\n  height: 100%;\r\n  font-size: 1.5em;\r\n  position: relative;\r\n  left: 4%; }\r\n  .expenseValue > div {\r\n    margin-top: 0.4em; }\r\n\r\n.expenseDate {\r\n  float: left;\r\n  width: 15%;\r\n  height: 100%;\r\n  height: 2em !important; }\r\n  .expenseDate > div {\r\n    margin-top: 14%; }\r\n\r\n.expenseDescription {\r\n  float: left;\r\n  width: 40%;\r\n  position: relative;\r\n  left: 4%;\r\n  overflow: hidden; }\r\n  .expenseDescription > div {\r\n    margin-top: 4.444%;\r\n    height: 1.5em;\r\n    transition: height 0.2s ease; }\r\n\r\n.expenseDescriptionShown {\r\n  height: initial !important; }\r\n\r\n.editColumn {\r\n  height: 100%; }\r\n  .editColumn img {\r\n    width: 60%;\r\n    cursor: pointer;\r\n    transition: 0.2s;\r\n    margin-top: 5%; }\r\n    .editColumn img:hover {\r\n      width: 65%; }\r\n\r\n.floatingSortHeader {\r\n  float: left; }\r\n\r\n.editColumn > div {\r\n  margin-top: 0.3em; }\r\n\r\n/* ***************************   Filter Column *************************** */\r\n.filterContainer {\r\n  width: 70%;\r\n  margin: 0 auto; }\r\n\r\n.yearFilterContainer {\r\n  font-size: 25px;\r\n  margin-top: 5%;\r\n  width: 100%;\r\n  position: relative; }\r\n  .yearFilterContainer > input {\r\n    text-align: center;\r\n    border: 1px solid #888;\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 100%;\r\n    line-height: 2em; }\r\n\r\n.plusYearButton {\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  cursor: pointer;\r\n  color: #444;\r\n  position: absolute;\r\n  top: 0.4em; }\r\n  .plusYearButton:last-child {\r\n    right: -25px; }\r\n  .plusYearButton:first-child {\r\n    left: -25px; }\r\n\r\n.monthFilterContainer {\r\n  margin-top: 2%;\r\n  border: 1px solid #888; }\r\n\r\n.monthActiveStyle {\r\n  background: #aaa !important; }\r\n\r\n.monthFilterContainer > div {\r\n  font-size: 17px;\r\n  line-height: 2em;\r\n  padding: 1%;\r\n  text-align: center;\r\n  border-bottom: 1px solid #888;\r\n  background-color: #DDDDDD;\r\n  transition: 0.2s;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  cursor: pointer; }\r\n\r\n#allMonthsDiv {\r\n  font-size: 17px;\r\n  line-height: 2em;\r\n  padding: 1%;\r\n  text-align: center;\r\n  border-bottom: 1px solid #888;\r\n  background-color: #DDDDDD;\r\n  transition: 0.2s;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  cursor: pointer;\r\n  border: 1px solid #888;\r\n  margin-top: 5%; }\r\n\r\n.monthFilterContainer > div:hover, #allMonthsDiv:hover {\r\n  background-color: #EEE; }\r\n\r\n.monthFilterContainer > div:last-child {\r\n  border: none; }\r\n\r\n/* ***************************   MODAL *************************** */\r\n/* The Modal (background) */\r\n.modal {\r\n  display: block;\r\n  /* Hidden by default */\r\n  position: fixed;\r\n  /* Stay in place */\r\n  z-index: 1;\r\n  /* Sit on top */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  /* Full width */\r\n  height: 100%;\r\n  /* Full height */\r\n  overflow: auto;\r\n  /* Enable scroll if needed */\r\n  background-color: black;\r\n  /* Fallback color */\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n  /* Black w/ opacity */ }\r\n\r\n/* Modal Content/Box */\r\n.modal-content {\r\n  background-color: #DDDDDD;\r\n  margin: 15% auto;\r\n  /* 15% from the top and centered */\r\n  padding: 20px;\r\n  border: 1px solid #888;\r\n  width: 40%;\r\n  /* Could be more or less, depending on screen size */\r\n  -webkit-animation-name: animatetop;\r\n  -webkit-animation-duration: 0.4s;\r\n  animation-name: animatetop;\r\n  animation-duration: 0.4s; }\r\n\r\n#editDeleteButton {\r\n  position: absolute;\r\n  top: 5%;\r\n  right: 7%;\r\n  line-height: 2em;\r\n  background-color: #CE4441; }\r\n  #editDeleteButton:hover {\r\n    background-color: #C9302C; }\r\n\r\n#saveModalButton {\r\n  background-color: #A0C47D;\r\n  float: right;\r\n  line-height: 3em;\r\n  min-width: 20%; }\r\n  #saveModalButton:hover {\r\n    background-color: #78AB46; }\r\n\r\n#cancelModalButton {\r\n  line-height: 3em;\r\n  min-width: 20%; }\r\n\r\n#modalForm {\r\n  margin-top: 5%; }\r\n  #modalForm input {\r\n    line-height: 2em;\r\n    background-color: #eee;\r\n    border: 1px solid #888;\r\n    width: 25%;\r\n    padding: 0 5px; }\r\n  #modalForm select {\r\n    height: 2.25em;\r\n    width: 26%;\r\n    background-color: #eee;\r\n    padding: 0 5px; }\r\n  #modalForm label {\r\n    width: 20%; }\r\n  #modalForm img {\r\n    margin-right: 0.5%;\r\n    width: 2.48em; }\r\n\r\n#modalCategoryLabel {\r\n  float: left; }\r\n\r\n.modalInputRow {\r\n  line-height: 3em; }\r\n\r\n#headerModalEdit {\r\n  font-size: 2em;\r\n  text-align: center;\r\n  margin: 0;\r\n  margin-bottom: 2.5%; }\r\n\r\n#editCategory {\r\n  float: left;\r\n  margin-right: 1%; }\r\n"

/***/ }),

/***/ 858:
/***/ (function(module, exports) {

module.exports = "#welcomeText {\r\n  width: 50%;\r\n  position: absolute;\r\n  right: 4vw;\r\n  top: 5vh;\r\n  text-align: center;\r\n  font-size: 40px;\r\n  color: #444; }\r\n\r\n#quoteHr {\r\n  border-color: black; }\r\n\r\n#quoteOriginator {\r\n  font-size: 28px; }\r\n\r\n@media (min-width: 991px) {\r\n  #slideCompleteContainer {\r\n    width: 50%;\r\n    min-width: 800px;\r\n    position: absolute;\r\n    bottom: -90vh;\r\n    right: 4vw; }\r\n  #welcomeText {\r\n    min-width: 800px; }\r\n  #welcomeText2 {\r\n    display: none; } }\r\n\r\n@media (max-width: 991px) {\r\n  #slideCompleteContainer {\r\n    display: none; }\r\n  #welcomeText {\r\n    width: 80%;\r\n    background-color: rgba(221, 221, 221, 0.4);\r\n    padding: 5%;\r\n    border-radius: 15px;\r\n    position: static;\r\n    margin: 5% auto 0 auto; }\r\n  #welcomeText2 {\r\n    display: block;\r\n    background-color: rgba(221, 221, 221, 0.4);\r\n    min-height: 4em;\r\n    padding: 3%;\r\n    border-radius: 15px;\r\n    margin: 10% auto 0 auto;\r\n    width: 80%;\r\n    font-size: 2em;\r\n    cursor: pointer;\r\n    transition: background-color 0.5s ease; }\r\n    #welcomeText2:hover {\r\n      background-color: rgba(221, 221, 221, 0.8); } }\r\n\r\n.slideshow-container {\r\n  max-width: 1000px;\r\n  position: relative;\r\n  margin: auto; }\r\n\r\n.mySlides {\r\n  display: none;\r\n  opacity: 1;\r\n  -webkit-animation-name: fade;\r\n          animation-name: fade;\r\n  -webkit-animation-duration: 2.5s;\r\n          animation-duration: 2.5s; }\r\n\r\n@-webkit-keyframes fade {\r\n  from {\r\n    opacity: .4; }\r\n  to {\r\n    opacity: 1; } }\r\n\r\n@keyframes fade {\r\n  from {\r\n    opacity: .4; }\r\n  to {\r\n    opacity: 1; } }\r\n\r\n.activeSlide {\r\n  display: block !important; }\r\n\r\n.prev {\r\n  cursor: pointer;\r\n  position: absolute;\r\n  top: 50%;\r\n  width: auto;\r\n  margin-top: -22px;\r\n  padding: 16px;\r\n  color: white;\r\n  font-weight: bold;\r\n  font-size: 18px;\r\n  transition: 0.6s ease;\r\n  border-radius: 0 3px 3px 0; }\r\n\r\n.next {\r\n  cursor: pointer;\r\n  position: absolute;\r\n  top: 50%;\r\n  width: auto;\r\n  margin-top: -22px;\r\n  padding: 16px;\r\n  color: white;\r\n  font-weight: bold;\r\n  font-size: 18px;\r\n  transition: 0.6s ease;\r\n  border-radius: 0 3px 3px 0;\r\n  right: 0;\r\n  border-radius: 3px 0 0 3px; }\r\n\r\n.prev:hover, .next:hover {\r\n  background-color: rgba(0, 0, 0, 0.8); }\r\n\r\n.text {\r\n  color: #f2f2f2;\r\n  font-size: 15px;\r\n  padding: 8px 12px;\r\n  position: absolute;\r\n  bottom: 8px;\r\n  width: 100%;\r\n  text-align: center;\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n  height: 4em; }\r\n\r\n.numbertext {\r\n  color: #f2f2f2;\r\n  font-size: 12px;\r\n  padding: 8px 12px;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0; }\r\n\r\n.dot {\r\n  cursor: pointer;\r\n  height: 13px;\r\n  width: 13px;\r\n  margin: 0 2px;\r\n  background-color: #bbb;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  transition: background-color 0.6s ease; }\r\n\r\n.active, .dot:hover {\r\n  background-color: #717171; }\r\n"

/***/ }),

/***/ 859:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 860:
/***/ (function(module, exports) {

module.exports = ".navbar {\r\n  background-color: #355C7D;\r\n  border-radius: 0px;\r\n  margin-bottom: 0;\r\n  z-index: 2; }\r\n\r\n.navbar-brand {\r\n  font-size: 20px;\r\n  color: #DDD; }\r\n\r\n.navbar-right > li > a {\r\n  transition: 0.2s ease-in-out; }\r\n  .navbar-right > li > a:hover {\r\n    color: #FFF !important; }\r\n\r\n.navbar-default .navbar-nav > .active > a {\r\n  background-color: #444; }\r\n  .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus {\r\n    background-color: #444; }\r\n\r\n.navbar-default .navbar-nav > li > a {\r\n  color: #DDDDDD; }\r\n\r\n#iconStatisticHeader {\r\n  float: left;\r\n  margin: 0 6% 0 1%; }\r\n\r\n.container {\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100%; }\r\n\r\nimg {\r\n  width: 50px;\r\n  height: 50px; }\r\n\r\n#navbar {\r\n  padding-right: 5%; }\r\n\r\n@media (min-width: 991px) {\r\n  .mobileSideButton {\r\n    display: none; } }\r\n"

/***/ }),

/***/ 861:
/***/ (function(module, exports) {

module.exports = "#clearDatabase {\r\n  background-color: #C26259;\r\n  transition: background-color 0.2s ease;\r\n  line-height: 2em;\r\n  padding: 2%;\r\n  color: #444; }\r\n  #clearDatabase:hover {\r\n    background-color: #ae5850; }\r\n\r\n.profileSettingsItem > span {\r\n  display: block; }\r\n\r\n\r\n  #sampleDatabase{\r\n    transition: background-color 0.2s ease;\r\n    line-height: 2em;\r\n    padding: 2%;\r\n    color: #444;\r\n    background-color: #e8bd19;\r\n  }\r\n  #sampleDatabase:hover{\r\n    background-color:#edcc4e;\r\n  }\r\n"

/***/ }),

/***/ 862:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 863:
/***/ (function(module, exports) {

module.exports = ".row {\r\n  height: 100%; }\r\n\r\n.sidebar {\r\n  background: #444; }\r\n\r\n.clearMargPad {\r\n  padding: 0;\r\n  height: 100%; }\r\n\r\n.onTop {\r\n  z-index: 2; }\r\n\r\n#sideNavbar {\r\n  text-decoration: none;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  margin-top: 35%; }\r\n\r\n#expensList {\r\n  margin-top: 5%; }\r\n\r\n#expenseListSpan {\r\n  position: relative;\r\n  bottom: 5px; }\r\n\r\n#statisticsLink {\r\n  position: relative;\r\n  bottom: 12px;\r\n  display: none;}\r\n\r\n#dashboard {\r\n  margin-top: 5%; }\r\n\r\n#statistic {\r\n  position: relative;\r\n  bottom: 10px; }\r\n\r\n.icon-link {\r\n  display: inline-block;\r\n  text-decoration: none;\r\n  width: 100%; }\r\n  .icon-link > span {\r\n    opacity: 0;\r\n    color: #DDDDDD;\r\n    transition: opacity .15s ease-in-out;\r\n    display: block;\r\n    text-align: center; }\r\n\r\n.icon {\r\n  width: 50px;\r\n  display: block;\r\n  margin: 0 auto; }\r\n\r\n.icon1 {\r\n  fill: #DDDDDD;\r\n  transition: 0.15s ease-in-out;\r\n  width: 60%; }\r\n\r\n.icon2 {\r\n  width: 80%; }\r\n\r\n.icon3 {\r\n  fill: #DDDDDD; }\r\n\r\n.activeIcon3 {\r\n  fill: #F8B195; }\r\n\r\n.icon-link:hover > span {\r\n  opacity: 1;\r\n  color: #F8B195; }\r\n\r\n.icon-link:hover > svg > .icon1 {\r\n  fill: #F8B195; }\r\n\r\n.icon-link:hover .icon3 {\r\n  fill: #F8B195 !important; }\r\n\r\n.cls-1, .cls-2 {\r\n  fill: none;\r\n  stroke: #DDD;\r\n  stroke-linecap: round;\r\n  stroke-linejoin: round;\r\n  transition: 0.15s ease-in-out; }\r\n\r\n.cls-1 {\r\n  stroke-width: 2px; }\r\n\r\n.cls-3 {\r\n  fill: #DDD;\r\n  transition: 0.15s ease-in-out; }\r\n\r\n.icon-link:hover > svg > .cls-1, .icon-link:hover > svg > .cls-2, .icon-link:hover > svg > .cls-3 {\r\n  stroke: #F8B195; }\r\n\r\n.activeSpan {\r\n  opacity: 1 !important;\r\n  color: #F8B195 !important; }\r\n\r\n.activeIcon2 {\r\n  stroke: #F8B195; }\r\n\r\n.activeIcon1 {\r\n  fill: #F8B195; }\r\n"

/***/ }),

/***/ 864:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 865:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<app-navbar></app-navbar>\r\n\r\n<div class=\"containerBox\">\r\n  <div class=\"container row\"  [class.siteContainerForBackgroundImage]=\"_compCommunication.onHomeSite\" style=\"position:relative\">\r\n  <div  [class.gradientTest]=\"_compCommunication.onHomeSite\"></div>\r\n    <!--- - - - - - - - - - - - - - - - - - Sidebar---------------------------------------------------------->\r\n    <div class=\"col-md-1 no-float height \" id=\"appSidebar\" style=\"position:absolute; min-height:100vh\">\r\n      <app-sidebar *ngIf=\"authService.loggedIn()\"></app-sidebar>\r\n    </div>\r\n\r\n    <!-- - - - - - - - - - - - - - - - - - - Content---------------------------------------------------------->\r\n    <div class=\"col-md-11 routedStyle\" style=\"margin-left:8%\">\r\n\r\n\r\n\r\n       <flash-messages id=\"flash\"></flash-messages>\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n<!--\r\nsidebar nur bei @media >x sonst btns in navbar\r\n\r\n-->\r\n"

/***/ }),

/***/ 866:
/***/ (function(module, exports) {

module.exports = "\r\n<script src=\"../../../../node_modules/chart.js/src/chart.js\"></script> <!-- TODO: Wirklich nötig? -->\r\n\r\n\r\n\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-4\"> <!-- Wrapper Left Side -->\r\n    <div id=\"wrapperLeftSide\">\r\n\r\n      <h2 class=\"sectionHeader\">New Expense</h2>\r\n      <hr class=\"hrAddExpense\">\r\n      <form (submit)=\"onExpenseSubmit()\">\r\n\r\n      <label class=\"fullWidth\">Value:<br><input (focus)=\"focusFunctionAddValue()\" (blur)=\"onBlurAddExpenseValue()\" [(ngModel)]=\"value\" id=\"valueInput\" type=\"text\" name=\"value\"  placeholder=\"0.00 €\"></label><br>\r\n      <label class=\"fullWidth\">Date:<br><ng2-datepicker style=\"color: #DDD\" [options]=\"datepickerOptions\" [(ngModel)]=\"datepickerDate\" [ngModelOptions]=\"{standalone: true}\"></ng2-datepicker></label><br> <!-- TODO: Date foratieren und nur date.formatted in database eintragen sodass auch nutzereingaben wie \"6.2.1996\" oder \"18-6-2001\" oder \"15/06/2017\" möglich sind  -->\r\n      <hr class=\"hrAddExpense\" style=\"margin-top: 5%\">\r\n      <div id=\"categoryOptionFields\"> <!--TODO: Generate with *ngFor to enable to easily add a category later on-->\r\n          <div id=\"categoryWrapper\">\r\n\r\n          <div *ngFor=\"let category of categories; let i=index\">\r\n            <label class=\"categoryLabel\" (click)=\"setCategoryName(category.name, i)\">\r\n              <img [src]=\"category.iconPath\" [class.categoryImageActive]=\"categoriesActiveArray[i]\">\r\n            </label>\r\n          </div>\r\n\r\n          <div id=\"categoryNameField\">{{categoryName}}</div>\r\n        </div>\r\n      </div>\r\n      <hr class=\"hrAddExpense\">\r\n      <label class=\"fullWidth descriptionLabel\">Description:<br><textarea [(ngModel)]=\"description\" id=\"descriptionInput\" name=\"description\" placeholder=\"Describe your expense...\"></textarea></label><br>\r\n\r\n        <input id=\"submitNewExpense\" type=\"submit\" value=\"Eintragen\">\r\n      </form>\r\n<!-- TODO: Multiple Flash messages-->\r\n  </div>\r\n</div> <!--LEFT SECTION --> <!--  TODO: Flash Messages an verschiedenen Stellen implementieren...über #id vielleicht?-->\r\n\r\n\r\n  <div class=\"col-md-5\" >\r\n    <h1 class=\"overviewHeader\">Overview</h1>\r\n    <div id=\"wrapperGeneralInfo\">\r\n      <div id=\"currentMonthField\">{{ today| date:'MMMM'}}</div>\r\n      <div id=\"currentTotalExpensesField\">\r\n        Total <span id=\"monthTotal\">{{monthTotalString}} €</span>\r\n      </div>\r\n\r\n<!--\r\n      <ul id=\"legendList\">\r\n        <li *ngFor=\"let category of categories\">\r\n          <div [ngStyle]=\"{'background-color': category.color }\"></div>\r\n          <span>{{category.name}}</span><br>\r\n        </li>\r\n      </ul> -->\r\n\r\n      <ul class=\"legendList\" id=\"legendList1\"> <!-- TODO: GERNERIERN mot SLICE PIPE von angular 0-3 und 4-7-->\r\n        <li>\r\n          <div [ngStyle]=\"{'background-color': categories[0].color }\"></div>\r\n          <span>{{categories[0].name}}</span><br>\r\n        </li>\r\n        <li>\r\n          <div [ngStyle]=\"{'background-color': categories[1].color }\"></div>\r\n          <span>{{categories[1].name}}</span><br>\r\n        </li>\r\n        <li>\r\n          <div [ngStyle]=\"{'background-color': categories[2].color }\"></div>\r\n          <span>{{categories[2].name}}</span><br>\r\n        </li>\r\n        <li>\r\n          <div [ngStyle]=\"{'background-color': categories[3].color }\"></div>\r\n          <span>{{categories[3].name}}</span><br>\r\n        </li>\r\n      </ul>\r\n\r\n      <ul class=\"legendList\" id=\"legendList2\">\r\n        <li>\r\n          <div [ngStyle]=\"{'background-color': categories[4].color }\"></div>\r\n          <span>{{categories[4].name}}</span><br>\r\n        </li>\r\n        <li>\r\n          <div [ngStyle]=\"{'background-color': categories[5].color }\"></div>\r\n          <span>{{categories[5].name}}</span><br>\r\n        </li>\r\n        <li>\r\n          <div [ngStyle]=\"{'background-color': categories[6].color }\"></div>\r\n          <span>{{categories[6].name}}</span><br>\r\n        </li>\r\n        <li>\r\n          <div [ngStyle]=\"{'background-color': categories[7].color }\"></div>\r\n          <span>{{categories[7].name}}</span><br>\r\n        </li>\r\n      </ul>\r\n\r\n      <div style=\"display: block\">\r\n        <div id=\"noEntriesForChart\" *ngIf=\"monthSortedExpenses==undefined || monthSortedExpenses.length==0\">No expenses for current month</div>\r\n        <canvas *ngIf=\"!monthSortedExpenses==undefined || !monthSortedExpenses.length==0\"\r\n                id=\"categoryChart\"\r\n                baseChart #baseChart=\"base-chart\"\r\n                [data]=\"pieChartData\"\r\n                [labels]=\"pieChartLabels\"\r\n                [colors] =\"pieChartColor\"\r\n                [chartType]=\"pieChartType\"\r\n                [options]=\"pieChartOptions\"\r\n                (chartHover)=\"chartHovered($event)\"\r\n                (chartClick)=\"chartClicked($event)\">\r\n        </canvas>\r\n      </div> <!--CHART --> <!-- Chart-->\r\n\r\n\r\n\r\n    <!--  <section>\r\n        <h3 class=\"overviewHeader\">Fixed Expenses</h3>\r\n        <hr>\r\n        <ul>\r\n          <li><span class=\"fixkostenName\">Wohnung</span><span class=\"fixkostenBetrag\">400 €</span></li>\r\n          <li><span class=\"fixkostenName\">Creative Cloud</span><span class=\"fixkostenBetrag\">14,65 €</span></li>\r\n          <li><span class=\"fixkostenName\">Spotify</span><span class=\"fixkostenBetrag\">4,99 €</span></li>\r\n          <li><span class=\"fixkostenName\">Private Rente</span><span class=\"fixkostenBetrag\">30 €</span></li>\r\n\r\n        </ul>\r\n\r\n      </section> -->\r\n    </div> <!--wrapperGeneralInfo END -->\r\n  </div> <!-- MIDDLE SECTION -->\r\n\r\n\r\n  <div class=\"col-md-3\">\r\n  <!--  <h2 class=\"sectionHeader\" id=\"latestExpenseHeader\">Latest Expenses  |  Last added</h2>-->\r\n  <div class=\"sectionHeader\" id=\"lastLatestHeader\" >\r\n    <span id=\"latestSpan\" (click)=\"toggleLatestLast(0)\" [class.latestActive]=\"latestActive\">Latest <span>Expenses</span></span>\r\n    <span id=\"lastSpan\" (click)=\"toggleLatestLast(1)\" [class.latestActive]=\"!latestActive\"><span>Added</span> Last</span>\r\n  </div>\r\n\r\n  <div class=\"sectionHeaderNoEntries\" *ngIf=\"tenLatestExpenses.length ==0\">No entries yet</div>\r\n\r\n\r\n\r\n        <div *ngFor=\"let expense of tenLatestExpenses\" class=\"listItem\">\r\n          <div class=\"wrapperExpenseListData\" (click)=\"showDescription(expense)\" >\r\n          <div class=\"expenseCategory\">\r\n              <img [src]=\"getCategoryIconPath(expense.expenseData.category)\"><!-- Images laden - hängt zusammen mit new Expense section -> array needed mit img source ( vielleicht in category array?)-->\r\n          </div>\r\n          <div class=\"expenseData\">\r\n              <span class=\"expenseCategoryName\">{{expense.expenseData.category}}</span>\r\n              <br>\r\n              <span class=\"expenseDate\">{{expense.expenseData.date.formatted}}</span>\r\n          </div>\r\n          <br>\r\n          <div class=\"expenseAmount\">{{expense.expenseData.value}} €</div>\r\n\r\n          <br>\r\n          <div class=\"clearFloat\"></div>\r\n        <div [class.activeInfoCollapse]=\"expense.shown\" class=\"infoCollapse\">\r\n          <span class=\"expenseDateCollapse\">{{expense.expenseData.date.formatted}}</span>\r\n          <div class=\"expenseDescription\" >{{expense.expenseData.description}}</div>\r\n        </div>\r\n        </div>\r\n        <div class=\"wrapperListEdit\">\r\n          <img (click)=\"clickedEdit(expense)\" class=\"iconEdit\" src=\"resources/icons/icon_edit.png\">\r\n        </div>\r\n        <div class=clearFloat></div>\r\n        </div>\r\n\r\n\r\n  </div>\r\n\r\n\r\n  <div *ngIf=\"modalShown\" id=\"myModal\" class=\"modal\" (click)=\"outerModalClicked()\" (window:keypress)=\"keyDownModalGeneral($event)\">\r\n\r\n    <!-- Modal content -->\r\n    <div class=\"modal-content\" (click)=\"innerModalClicked()\">\r\n\r\n      <h1 id=\"headerModalEdit\">Edit Expense</h1>\r\n      <button id=\"editDeleteButton\" (click)=\"deleteUserExpense(editExpenseId)\">Delete Expense</button>\r\n      <hr class=\"hrAddExpense\">\r\n\r\n      <div id=\"modalForm\">\r\n        <div class=\"modalInputRow\"><label for=\"editValue\">Value</label>          <input (focus)=\"focusFunctionEditValue()\" (blur)=\"onBlurEditExpenseValue()\" (keydown)=\"keyDownModalEdit($event)\" type=\"text\" [(ngModel)]=\"editValue\" id=\"editValue\"></div>\r\n        <div class=\"modalInputRow\"><label for=\"editDate\">Date</label>            <input (keydown)=\"keyDownModalEdit($event)\" type=\"text\" [(ngModel)]=\"editDate.formatted\" id=\"editDate\"></div>\r\n\r\n        <div class=\"modalInputRow\"><label id=\"modalCategoryLabel\" for=\"editCategory\">Category</label>\r\n          <select [(ngModel)]=\"editCategory\" (ngModelChange)=\"modalCategoryChanged($event)\">\r\n            <option *ngFor=\"let category of categories\" [ngValue]=\"category.name\" [selected]=\"editCategory === category.name\"   >{{category.name}}</option>\r\n          </select>\r\n          <img [src]=\"editCategoryPath\"><br class=\"clearFloat\">\r\n        </div>\r\n\r\n\r\n        <div class=\"modalInputRow\"><label for=\"editDescription\">Description</label>  <input (keydown)=\"keyDownModalEdit($event)\" type=\"text\" [(ngModel)]=\"editDescription\" id=\"editDescription\"></div>\r\n      </div>\r\n\r\n      <br>\r\n\r\n      <button id=\"cancelModalButton\" (click)=\"closeModal()\">Cancel</button>\r\n      <button id=\"saveModalButton\" (click)=\"saveExpenseModalClicked()\">Save</button>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 867:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\" expenseFilterArea col-md-4\"> <!--Filter Area -->\r\n    <h1>Filter</h1>\r\n    <hr>\r\n\r\n<div class=\"filterContainer\">\r\n\r\n<!--  <div [class.monthActiveStyle]=\"everythingShown\" (click)=\"showEverything()\" id=\"showEverythingButton\">Show everything</div>   //   REMOVED FEATURE BUT STILL IMPLEMENTED\r\n<br>\r\n<h2 style=\"text-align:center\">Date Filter</h2>\r\n<hr> -->\r\n  <div class=\"yearFilterContainer\">\r\n    <span class=\"plusYearButton\" (click)=\"plusYear(-1)\">&#10094;</span>\r\n    <input type=\"text\" name=\"filterYear\" [(ngModel)]=\"filterYear\">\r\n    <span class=\"plusYearButton\" (click)=\"plusYear(1)\">&#10095;</span>\r\n  </div>\r\n\r\n  <div [class.monthActiveStyle]=\"monthActiveArray[0]\" (click)=\"activateMonthFilter(0)\" id=\"allMonthsDiv\">All Months</div>\r\n\r\n  <div class=\"monthFilterContainer\">\r\n    <div *ngFor=\"let month of monthNames; let i=index\" [class.monthActiveStyle]=\"monthActiveArray[i+1]\" (click)=\"activateMonthFilter(i+1)\">{{month}}</div>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n  </div>\r\n\r\n\r\n  <div class=\"expenseDataArea col-md-8\"> <!--Entry Area -->\r\n    <h1>Expense List</h1>\r\n    <div id=\"dataListHead\">\r\n      <div class=\"headNr\"><div>Nr.</div></div>\r\n      <div class=\"headCategory\" (click)=\"sortCategory()\"><div [class.floatingSortHeader]=\"sortedCategory\">Category</div><span [class.dropup]=\"sortedCategoryAscending\"><span [class.caret]=\"sortedCategory\"></span></span></div>\r\n      <div class=\"headAmount\" (click)=\"sortAmount()\"><div [class.floatingSortHeader]=\"sortedAmount\">Amount</div><span [class.dropup]=\"sortedAmountAscending\"><span [class.caret]=\"sortedAmount\"></span></span></div>\r\n      <div class=\"headDate\" (click)=\"sortDate()\"><div [class.floatingSortHeader]=\"sortedDate\">Date</div><span [class.dropup]=\"sortedDateAscending\"><span [class.caret]=\"sortedDate\"></span></span></div>\r\n      <div class=\"headDescription\" (click)=\"sortDescription()\"><div [class.floatingSortHeader]=\"sortedDescription\">Description</div><span [class.dropup]=\"sortedDescriptionAscending\"><span [class.caret]=\"sortedDescription\"></span></span></div>\r\n    </div>\r\n\r\n    <div id=\"noDataFoundField\" *ngIf=\"sortedList.length==0 && user\">No entries found</div>\r\n    <div class=\"dataListWrapper\" *ngIf=\"user && sortedList.length>0\">\r\n      <div *ngFor=\"let expense of sortedList; let i=index\" class=\"dataListItem row\">\r\n        <div class=\"infoColumn col-md-11\" (click)=\"showFullDescription(expense)\">\r\n            <div class=\"expenseNumber\"><div>{{i+1}}</div></div> <!-- BUG: CSS-Bug floating div has fixed height that fits the macbook screen but has tu actually be at a 100% -->\r\n            <div class=\"categoryIcon\"><img [src]=\"getCategoryIconPath(expense.expenseData.category)\" alt=\"category icon\"></div>\r\n            <div class=\"expenseValue\"><div>{{expense.expenseData.value}}</div></div>\r\n            <div class=\"expenseDate\"><div>{{expense.expenseData.date.formatted}}</div></div>\r\n            <div class=\"expenseDescription\"><div [class.expenseDescriptionShown]=\"expense.descriptionShown\">{{expense.expenseData.description}}</div></div> <!-- TODO: IF text longer then 1 line, cut strings and add \"...\" more \"button or view\" -->\r\n        </div>\r\n        <div class=\"editColumn col-md-1\" (click)=\"clickedEdit(expense)\"><img src=\"resources/icons/icon_edit.png\"></div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div *ngIf=\"modalShown\" id=\"myModal\" class=\"modal\" (click)=\"outerModalClicked()\" (window:keypress)=\"keyDownModalGeneral($event)\">\r\n\r\n    <!-- Modal content -->\r\n    <div class=\"modal-content\" (click)=\"innerModalClicked()\">\r\n\r\n      <h1 id=\"headerModalEdit\">Edit Expense</h1>\r\n      <button id=\"editDeleteButton\" (click)=\"deleteUserExpense(editExpenseId)\">Delete Expense</button>\r\n      <hr class=\"hrAddExpense\">\r\n\r\n      <div id=\"modalForm\">\r\n        <div class=\"modalInputRow\"><label for=\"editValue\">Value</label>          <input (focus)=\"focusFunctionEditValue()\" (blur)=\"onBlurEditExpenseValue()\" (keydown)=\"keyDownModalEdit($event)\" type=\"text\" [(ngModel)]=\"editValue\" id=\"editValue\"></div>\r\n        <div class=\"modalInputRow\"><label for=\"editDate\">Date</label>            <input (keydown)=\"keyDownModalEdit($event)\" type=\"text\" [(ngModel)]=\"editDate.formatted\" id=\"editDate\"></div>\r\n\r\n        <div class=\"modalInputRow\"><label id=\"modalCategoryLabel\" for=\"editCategory\">Category</label>\r\n          <select [(ngModel)]=\"editCategory\" (ngModelChange)=\"modalCategoryChanged($event)\">\r\n            <option *ngFor=\"let category of categories\" [ngValue]=\"category.name\" [selected]=\"editCategory === category.name\"   >{{category.name}}</option>\r\n          </select>\r\n          <img [src]=\"editCategoryPath\"><br class=\"clearFloat\">\r\n        </div>\r\n\r\n\r\n        <div class=\"modalInputRow\"><label for=\"editDescription\">Description</label>  <input (keydown)=\"keyDownModalEdit($event)\" type=\"text\" [(ngModel)]=\"editDescription\" id=\"editDescription\"></div>\r\n      </div>\r\n\r\n      <br>\r\n\r\n      <button id=\"cancelModalButton\" (click)=\"closeModal()\">Cancel</button>\r\n      <button id=\"saveModalButton\" (click)=\"saveExpenseModalClicked()\">Save</button>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 868:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div id=\"welcomeText\">\r\n  A budget tells us what we can't afford, <br>\r\n  but it doesn't keep us from buying it.<br>\r\n  <hr id=\"quoteHr\">\r\n  <span id=\"quoteOriginator\">- Williams Feather -</span>\r\n</div>\r\n\r\n<div id=\"welcomeText2\" [routerLink]=\"['/register']\" (click)=\"_compCommunication.deactivateHomeSite()\">Get started now and explore managing your expenses - Register</div>\r\n\r\n\r\n<div (mouseenter)='enterSlideshow()' (mouseleave)=\"leaveSlideshow()\"  id=\"slideCompleteContainer\" >\r\n<div class=\"slideshow-container\" >\r\n  <div class=\"mySlides fade\" [class.activeSlide]=\"slide1\">\r\n    <img src=\"resources/homeResources/DashboardPreview.png\" style=\"width:100%\">\r\n    <div class=\"numbertext\">1 / 3</div>\r\n\r\n    <div class=\"text text1\">Get a quick overview of the current months expenses.<br> Have quick access to add any new expenses. </div>\r\n  </div>\r\n\r\n  <div class=\"mySlides fade\" [class.activeSlide]=\"slide2\">\r\n    <img src=\"resources/homeResources/DashboardPreviewEdit.png\" style=\"width:100%\">\r\n    <div class=\"text\">Have easy access to edit or delete the latest expenses</div>\r\n    <div class=\"numbertext\">2 / 3</div>\r\n  </div>\r\n\r\n  <div class=\"mySlides fade\" [class.activeSlide]=\"slide3\">\r\n    <img src=\"resources/homeResources/planBudget.png\" style=\"width:100%\">\r\n    <div class=\"numbertext\">3 / 3</div>\r\n  </div>\r\n\r\n  <a class=\"prev\" (click)=\"plusSlidesWithoutRecursive(-1)\">&#10094;</a>\r\n  <a class=\"next\" (click)=\"plusSlidesWithoutRecursive(1)\">&#10095;</a>\r\n</div>\r\n<br>\r\n\r\n<div style=\"text-align:center\">\r\n  <span class=\"dot\" (click)=\"currentSlide(0)\"></span>\r\n  <span class=\"dot\" (click)=\"currentSlide(1)\"></span>\r\n  <span class=\"dot\" (click)=\"currentSlide(2)\"></span>\r\n</div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ 869:
/***/ (function(module, exports) {

module.exports = "\r\n<h2 class=\"page-header\">Login</h2>\r\n<form (submit)=\"onLoginSubmit()\">\r\n  <div class=\"form-group\">\r\n    <label>Username</label>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Password</label>\r\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\r\n  </div>\r\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\r\n</form>\r\n"

/***/ }),

/***/ 870:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n  <div class=\"container\">\r\n    <img  src=\"../../../resources/iconStatistic.png\" id=\"iconStatisticHeader\">\r\n\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" href=\"#\">Expense Manager</a>\r\n    </div>\r\n    <div id=\"navbar\" class=\"collapse navbar-collapse\" >\r\n      <ul class=\"nav navbar-nav navbar-left\">\r\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a (click) =\"_compCommunicationService.deactivateAll()\" (click) =\"_compCommunicationService.activateHomeSite()\" [routerLink]=\"['/']\">Home</a></li>\r\n        <li *ngIf=\"authService.loggedIn()\" class=\"mobileSideButton\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/dashboard']\" (click) =\"_compCommunicationService.deactivateHomeSite()\">Dashboard</a></li>\r\n        <li *ngIf=\"authService.loggedIn()\" class=\"mobileSideButton\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/expenseList']\" (click) =\"_compCommunicationService.deactivateHomeSite()\">Expense List</a></li>\r\n        <li *ngIf=\"authService.loggedIn()\" class=\"mobileSideButton\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/statistics']\" (click) =\"_compCommunicationService.deactivateHomeSite()\">Statistics</a></li>\r\n\r\n      </ul>\r\n\r\n      <ul class=\"nav navbar-nav navbar-right\" >\r\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a (click) =\"_compCommunicationService.deactivateAll()\" [routerLink]=\"['/profile']\" (click) =\"_compCommunicationService.deactivateHomeSite()\">Profile</a></li>\r\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a  [routerLink]=\"['/login']\" (click) =\"_compCommunicationService.deactivateHomeSite()\">Login</a></li>\r\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/register']\" (click) =\"_compCommunicationService.deactivateHomeSite()\">Register</a></li>\r\n        <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" (click) =\"_compCommunicationService.deactivateAll()\"  href=\"#\" (click) =\"_compCommunicationService.deactivateHomeSite()\">Logout</a></li>\r\n      </ul>\r\n    </div><!--/.nav-collapse -->\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ 871:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\r\n  <h2 class=\"page-header\">{{user.name}}</h2>\r\n  <ul class=\"list-group\">\r\n    <li class=\"list-group-item\"><span>Username: </span>{{user.username}}</li>\r\n    <li class=\"list-group-item\"><span>Email: </span>{{user.email}}</li>\r\n    <li class=\"list-group-item\">Amount of entries in Database: {{user.expenseData.length}}</li>\r\n    <li class=\"list-group-item profileSettingsItem\">\r\n      <span>Settings:</span>\r\n      <br>\r\n      <button (click)=\"clearDatabaseData()\" id=\"clearDatabase\"> CLEAR DATABASE</button>\r\n      <button (click)=\"initDatabase()\" id=\"sampleDatabase\">Load sample data</button>\r\n    </li>\r\n\r\n  </ul>\r\n\r\n\r\n<!--  <flash-messages></flash-messages> -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ 872:
/***/ (function(module, exports) {

module.exports = "\r\n<h2 class=\"page-header\">Register</h2>\r\n<form (submit)=\"onRegisterSubmit()\">\r\n  <div class=\"form-group\">\r\n    <label>Name</label>\r\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Username</label>\r\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Email</label>\r\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" >\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Password</label>\r\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\r\n  </div>\r\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\r\n</form>\r\n"

/***/ }),

/***/ 873:
/***/ (function(module, exports) {

module.exports = "<div class=\"row onTop\">\r\n  <div class=\"col-md-9 clearMargPad sidebar\">\r\n\r\n    <ul id=\"sideNavbar\"> <!-- TODO: Bei initSite jeweils compCommunication icon und link aktivieren -->\r\n      <li (click)=\"_compCommunicationService.activateDashboard()\" (click) =\"_compCommunicationService.deactivateHomeSite()\">\r\n        <a  class=\"icon-link\" [routerLink]=\"['/dashboard']\">\r\n          <svg class=\"icon icon1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\r\n            <path [class.activeIcon1]=\"_compCommunicationService.dashboardActive\" class=\"icon1\" fill=\"#303A3F\" d=\"M137.8 512H69.5c-10 0-18-8.3-18-18.2V354c0-10 8-18 18-18h68.3c10 0 18 8 18 18v139.8c.2 10-8 18-18 18zm149.2 0h-62c-11.6 0-21.3-9.7-21.3-21.5V288.8c0-11.7 9.6-21.4 21.4-21.4h62c12 0 21.7 9.6 21.7 21.4v201.7c0 11.8-9.6 21.4-21.4 21.4zm149.5 0h-56.3c-13.3 0-24-11-24-24.2V224.3c0-13.3 10.8-24 24-24h56.3c13.3 0 24 10.8 24 24v263.5c0 13.3-10.7 24-24 24zM445 0c-22 1-39 19.5-38 41.6l-101.7 100-86.6-76-158.5 159c-20.4 2.7-35.7 20.3-35 41.2 1 22 19.7 39 41.7 38.2s39-19.6 38-41.6c0-1.8-.8-3.5-1-5.3l119.4-114 83.5 73L446 79.8c.8 0 1.6.2 2.4 0 22-.8 39-19.5 38.2-41.5-1-22-19.5-39-41.5-38z\"/>\r\n          </svg>\r\n          <span id=\"dashboard\" [class.activeSpan]=\"_compCommunicationService.dashboardActive\"> Dashboard</span>\r\n        </a>\r\n      </li>\r\n\r\n\r\n      <li id=\"expensList\"(click)=\"_compCommunicationService.activateExpenseList()\" (click) =\"_compCommunicationService.deactivateHomeSite()\">\r\n        <a  class=\"icon-link\" [routerLink]=\"['/expenseList']\">\r\n          <svg class=\"icon\" height=\"48\" viewBox=\"0 0 48 48\" width=\"48\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <g class=\"icon3\" [class.activeIcon3]=\"_compCommunicationService.expenseListActive\" >\r\n              <circle cx=\"4\" cy=\"4\" r=\"4\"/>\r\n              <circle cx=\"4\" cy=\"20\" r=\"4\"/>\r\n              <circle cx=\"4\" cy=\"36\" r=\"4\"/>\r\n              <circle cx=\"4\" cy=\"52\" r=\"4\"/>\r\n              <path d=\"M13 1h40v6H13zM13 17h40v6H13zM13 33h40v6H13zM13 49h40v6H13z\"/>\r\n            </g>\r\n          </svg>\r\n          <span id=\"expenseListSpan\" [class.activeSpan]=\"_compCommunicationService.expenseListActive\">Expense List</span>\r\n        </a>\r\n      </li>\r\n\r\n\r\n      <li id=\"statisticsLink\" (click)=\"_compCommunicationService.activateStatistics()\" (click) =\"_compCommunicationService.deactivateHomeSite()\">\r\n        <a  class=\"icon-link\" [routerLink]=\"['/statistics']\">\r\n          <svg class=\"icon icon2\" xmlns=\"http://www.w3.org/2000/svg\" id=\"Layer_3\" data-name=\"Layer 3\" viewBox=\"0 0 32 32\">\r\n            <path [class.activeIcon2]=\"_compCommunicationService.statisticsActive\" d=\"M15 9h11M6 9h3m14 7h3M6 16h11m0 7h9M6 23h5\" class=\"cls-1\"/>\r\n            <path [class.activeIcon2]=\"_compCommunicationService.statisticsActive\" d=\"M14.5 9a2.6 2.6 0 0 1-2.5 2.5A2.6 2.6 0 0 1 9.5 9a2.5 2.5 0 0 1 5 0zm8 7a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z\" class=\"cls-2\"/>\r\n            <path [class.activeIcon2]=\"_compCommunicationService.statisticsActive\" d=\"M21 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0z\" class=\"cls-3\"/>\r\n            <path [class.activeIcon2]=\"_compCommunicationService.statisticsActive\" d=\"M16.5 23a2.6 2.6 0 0 1-2.5 2.5 2.6 2.6 0 0 1-2.5-2.6 2.5 2.5 0 0 1 5 0z\" class=\"cls-2\"/>\r\n          </svg>\r\n          <span [class.activeSpan]=\"_compCommunicationService.statisticsActive\" id=\"statistic\">Statistics</span>\r\n        </a>\r\n      </li>\r\n\r\n    </ul>\r\n  </div> <!-- Sidebar inner col-9-md wrapper-->\r\n</div>\r\n"

/***/ }),

/***/ 874:
/***/ (function(module, exports) {

module.exports = "Statistics works!\r\n"

/***/ }),

/***/ 901:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(515);


/***/ })

},[901]);
//# sourceMappingURL=main.bundle.map