(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a [routerLink]=\"['/main']\">Strona główna</a>\r\n<span>{{x}}:{{i}}</span>\r\n<div nz-row>\r\n  <div nz-col nzSpan=\"12\">\r\n    <p style=\"font-size:3rem; text-align:center;\">Zamówienia do odbioru: {{countOrder}}\r\n    </p>\r\n\r\n    <div *ngFor=\"let order of listOfOrder\" class=\"item\">\r\n      <p> <b>Numer zamówienia:</b> {{ order.number | json }}\r\n      </p>\r\n      <p> <b>Info:</b> {{ order.decision | json }}\r\n      </p>\r\n      <p> <b>Czas: </b>{{order.date* 1000| date:'mediumTime'}}\r\n      </p>\r\n      <a (click)=deleteOrder(order.id)>Usuń</a>\r\n    </div>\r\n  </div>\r\n  <div nz-col nzSpan=\"12\">\r\n    <p style=\"font-size:3rem; text-align:center;\">RMA do odbioru: {{countRMA}}</p>\r\n\r\n    <div *ngFor=\"let rma of listOfRMA \" class=\"item\">\r\n      <p> <b>Numer RMA:</b> {{ rma.number | json }}\r\n      </p>\r\n      <p> <b>Info:</b> {{ rma.decision | json }}\r\n      </p>\r\n      <p> <b>Czas: </b>{{rma.date* 1000| date:'mediumTime'}}</p>\r\n\r\n        <a (click)=deleteRMA(rma.id)>Usuń</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/end/end.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/end/end.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"info\">\r\n    <i nz-icon nzType=\"check-circle\" nzTheme=\"outline\"></i>\r\n    <p>Brawo ! Nasz pracownik przygotowuje sprzęt</p>\r\n    <p>Co chcesz teraz zrobić ?</p>\r\n    <div class=\"buttons\">\r\n      <button [routerLink]=\"['/main']\">Chcę odebrać kolejny sprzęt</button>\r\n      <button [routerLink]=\"['/startpage']\">To wszystko na ten moment</button>\r\n    </div>\r\n  </div>\r\n  <img src=\"../../assets/programista-Tomek-8.png\" alt=\"\">\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-order/form-order.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-order/form-order.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"logo\">\r\n      <img src=\"../assets/amso_logo.png\" alt=\"\">\r\n    </div>\r\n    <form nz-form [formGroup]=\"validateForm\" (ngSubmit)=\"submitForm()\">\r\n\r\n      <nz-form-item>\r\n        <nz-form-control nzErrorTip=\"Potrzebujemy twojego numeru zamówienia!\">\r\n          <nz-input-group>\r\n            <input formControlName=\"number\" maxlength=\"10\" nz-input placeholder=\"Wpisz tutaj numer zamówienia\" />\r\n          </nz-input-group>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n\r\n\r\n      <nz-form-item>\r\n        <nz-radio-group formControlName=\"decision\" class=\"decision\">\r\n          <label nz-radio nzValue=\"Chce odebrac oplacone zamowienie\"><span>Chcę odebrać opłacone zamówienie</span>\r\n            </label>\r\n          <label nz-radio nzValue=\"Chce odebrac nieoplacone zamowienie\">Chcę odebrać nieopłacone zamówienie</label>\r\n        </nz-radio-group>\r\n      </nz-form-item>\r\n\r\n\r\n      <nz-form-item>\r\n        <nz-form-control>\r\n          <button nz-button nzType=\"primary\" [disabled]=\"!validateForm.valid\">Wyślij</button>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n\r\n    </form>\r\n\r\n    <i nz-icon nzType=\"rollback\" nzTheme=\"outline\" [routerLink]=\"['/main']\"></i>\r\n    <p  [routerLink]=\"['/main']\">Wróć do porzedniej strony</p>\r\n  </div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-service/form-service.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-service/form-service.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"logo\">\r\n    <img src=\"../assets/amso_logo.png\" alt=\"\">\r\n  </div>\r\n  <form nz-form  [nzLayout]=\"''\" [formGroup]=\"validateForm\" (ngSubmit)=\"submitForm()\">\r\n\r\n    <nz-form-item>\r\n      <nz-form-control nzErrorTip=\"Potrzebujemy twojego numeru zamówienia!\">\r\n        <nz-input-group >\r\n          <input formControlName=\"number\" maxlength=\"10\" nz-input placeholder=\"Wpisz tutaj numer RMA\" />\r\n        </nz-input-group>\r\n      </nz-form-control>\r\n    </nz-form-item>\r\n\r\n\r\n    <nz-form-item>\r\n      <nz-radio-group formControlName=\"decision\" class=\"decision\">\r\n        <label nz-radio nzValue=\"Chce tylko odebrac RMA\">Chcę tylko odebrać sprzęt</label>\r\n        <label nz-radio nzValue=\"Chce odebrac RMA i potrzebuje pomocy sprzedawcy\">Chcę odebrać sprzęt i mam dodatkowe\r\n          pytania</label>\r\n      </nz-radio-group>\r\n    </nz-form-item>\r\n\r\n\r\n    <nz-form-item>\r\n      <nz-form-control>\r\n        <button nz-button nzType=\"primary\" [disabled]=\"!validateForm.valid\">Wyślij</button>\r\n      </nz-form-control>\r\n    </nz-form-item>\r\n\r\n  </form>\r\n\r\n  <i nz-icon nzType=\"rollback\" nzTheme=\"outline\" [routerLink]=\"['/main']\"></i>\r\n  <p [routerLink]=\"['/main']\">Wróć do porzedniej strony</p>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"loginContainer\">\r\n  \r\n\r\n  <h1>Login to StandApp</h1>\r\n  <form nz-form [formGroup]=\"validateForm\" class=\"login-form\" (ngSubmit)=\"submitForm()\">\r\n    <nz-form-item>\r\n      <nz-form-control nzErrorTip=\"Please input your username!\">\r\n        <nz-input-group nzPrefixIcon=\"user\">\r\n          <input type=\"text\" nz-input formControlName=\"userName\" placeholder=\"Username\" #userName />\r\n          \r\n        </nz-input-group>\r\n      </nz-form-control>\r\n    </nz-form-item>\r\n    <nz-form-item>\r\n      <nz-form-control nzErrorTip=\"Please input your Password!\">\r\n        <nz-input-group nzPrefixIcon=\"lock\">\r\n          <input type=\"password\" nz-input formControlName=\"password\" placeholder=\"Password\" #userPassword />\r\n        </nz-input-group>\r\n      </nz-form-control>\r\n    </nz-form-item>\r\n    <nz-form-item>\r\n      <nz-form-control>\r\n        <label nz-checkbox formControlName=\"remember\">\r\n          <span>Remember me</span>\r\n        </label>\r\n        <button nz-button class=\"login-form-button\" [nzType]=\"'primary'\"\r\n          (click)=\"authService.SignIn(userName.value, userPassword.value)\">Log in</button>\r\n      </nz-form-control>\r\n    </nz-form-item>\r\n  </form>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"logo\">\r\n    <img src=\"../assets/amso_logo.png\" alt=\"\">\r\n  </div>\r\n  <p>Wybierz z jedną opcji poniżej</p>\r\n  <div class=\"choose\">\r\n    <a class=\"choose_order\" [routerLink]=\"['/form-order']\">\r\n      Chcę odebrać zamówienie\r\n\r\n    </a>\r\n    <a class=\"choose_service\" [routerLink]=\"['/form-service']\">\r\n       Chcę odebrać sprzęt z serwisu\r\n      \r\n    </a>\r\n\r\n  </div>\r\n  <button nz-button nzType=\"primary\" [routerLink]=\"['/dashboard']\">dashboard</button>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/startpage/startpage.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/startpage/startpage.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <img src=\"../../assets/programista-Tomek-10.png\" alt=\"\" class=\"tomek\">\r\n  <div class=\"navigation\">\r\n    <img src=\"../../assets/amso_logo.png\" alt=\"\">\r\n    <div class=\"start\">\r\n      <p>Cześć ! Chętnie pomogę ci odebrać zamówienie lub sprzęt z serwisu</p>\r\n      <button [routerLink]=\"['/main']\">Start</button>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _form_order_form_order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-order/form-order.component */ "./src/app/form-order/form-order.component.ts");
/* harmony import */ var _form_service_form_service_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-service/form-service.component */ "./src/app/form-service/form-service.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _end_end_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./end/end.component */ "./src/app/end/end.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _startpage_startpage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./startpage/startpage.component */ "./src/app/startpage/startpage.component.ts");










const routes = [
    { path: '', redirectTo: '/startpage', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'main', component: _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"], },
    { path: 'form-order', component: _form_order_form_order_component__WEBPACK_IMPORTED_MODULE_3__["FormOrderComponent"] },
    { path: 'form-service', component: _form_service_form_service_component__WEBPACK_IMPORTED_MODULE_4__["FormServiceComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"] },
    { path: 'startpage', component: _startpage_startpage_component__WEBPACK_IMPORTED_MODULE_9__["StartpageComponent"] },
    { path: 'end', component: _end_end_component__WEBPACK_IMPORTED_MODULE_6__["EndComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'AMSO';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_locales_pl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/locales/pl */ "./node_modules/@angular/common/locales/pl.js");
/* harmony import */ var _angular_common_locales_pl__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pl__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _form_order_form_order_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./form-order/form-order.component */ "./src/app/form-order/form-order.component.ts");
/* harmony import */ var _form_service_form_service_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./form-service/form-service.component */ "./src/app/form-service/form-service.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _end_end_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./end/end.component */ "./src/app/end/end.component.ts");
/* harmony import */ var _bcodes_ngx_routerlink_delay__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @bcodes/ngx-routerlink-delay */ "./node_modules/@bcodes/ngx-routerlink-delay/fesm2015/bcodes-ngx-routerlink-delay.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _startpage_startpage_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./startpage/startpage.component */ "./src/app/startpage/startpage.component.ts");
























Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["registerLocaleData"])(_angular_common_locales_pl__WEBPACK_IMPORTED_MODULE_11___default.a);
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
            _form_order_form_order_component__WEBPACK_IMPORTED_MODULE_12__["FormOrderComponent"],
            _form_service_form_service_component__WEBPACK_IMPORTED_MODULE_13__["FormServiceComponent"],
            _main_main_component__WEBPACK_IMPORTED_MODULE_14__["MainComponent"],
            _end_end_component__WEBPACK_IMPORTED_MODULE_15__["EndComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
            _startpage_startpage_component__WEBPACK_IMPORTED_MODULE_23__["StartpageComponent"],
        ],
        imports: [
            angularfire2__WEBPACK_IMPORTED_MODULE_18__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].firebaseConfig),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _bcodes_ngx_routerlink_delay__WEBPACK_IMPORTED_MODULE_16__["RouterLinkDelayModule"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_17__["AngularFireAuthModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_22__["AngularFirestoreModule"],
        ],
        providers: [{ provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["pl_PL"] }, _shared_auth_service__WEBPACK_IMPORTED_MODULE_21__["AuthService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".item {\n  border: 1px solid black;\n  margin: 5%;\n  padding: 1%;\n  font-size: 1.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0M6XFxBTVNPIFByb2dyYW1vd2FuaWVcXG9kYmlvcnlhbXNvL3NyY1xcYXBwXFxkYXNoYm9hcmRcXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVte1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcclxuICAgIG1hcmdpbjogNSU7XHJcbiAgICBwYWRkaW5nOiAxJTtcclxuICAgIGZvbnQtc2l6ZToxLjJyZW07XHJcbn0iLCIuaXRlbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBtYXJnaW46IDUlO1xuICBwYWRkaW5nOiAxJTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _shared_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/crud.service */ "./src/app/shared/crud.service.ts");




let DashboardComponent = class DashboardComponent {
    constructor(afs, firebaseService) {
        this.afs = afs;
        this.firebaseService = firebaseService;
        this.listOfOrder = [];
        this.listOfRMA = [];
        this.i = 1;
        this.x = 1;
    }
    ngOnInit() {
        this.firebaseService.getOrders().subscribe(data => {
            this.listOfOrder = data.map(e => {
                return Object.assign({ id: e.payload.doc.id }, e.payload.doc.data());
            });
            this.countOrder = this.listOfOrder.length;
            /*
            setInterval(() => {
              this.listOfOrder.forEach(element => {
                let now=new Date();
                let secounds,minutes;
                secounds=now.getUTCSeconds();
                minutes=now.getUTCMinutes();
      
                this.i=secounds;
                this.x=minutes;
      
                console.log(now.getUTCMinutes())
                console.log(now.getUTCSeconds())
        
                console.log(element.date);
              });      }, 1000);
            */
        });
        this.firebaseService.getRMA().subscribe(data => {
            this.listOfRMA = data.map(e => {
                return Object.assign({ id: e.payload.doc.id }, e.payload.doc.data());
            });
            this.countRMA = this.listOfRMA.length;
        });
    }
    deleteOrder(id) {
        this.firebaseService.deleteOrder(id);
    }
    deleteRMA(id) {
        this.firebaseService.deleteRma(id);
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _shared_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/end/end.component.scss":
/*!****************************************!*\
  !*** ./src/app/end/end.component.scss ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  display: flex;\n  flex-direction: row;\n  height: 100vh;\n  justify-content: center;\n}\n.container p {\n  font-size: 2rem;\n}\n.info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 50px;\n  -webkit-animation: anim 0.5s alternate ease-in;\n          animation: anim 0.5s alternate ease-in;\n}\ni {\n  font-size: 20rem;\n  color: green;\n  margin-bottom: 100px;\n}\n@-webkit-keyframes anim {\n  0% {\n    transform: scale(0.8);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes anim {\n  0% {\n    transform: scale(0.8);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\nbutton {\n  width: 400px;\n  height: 100px;\n  margin-right: 10px;\n  background: #ffde00;\n  background: radial-gradient(circle, #ffde00 0%, #ffb10c 100%);\n  color: black;\n  border-radius: 50px;\n  border: none;\n  font-size: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW5kL0M6XFxBTVNPIFByb2dyYW1vd2FuaWVcXG9kYmlvcnlhbXNvL3NyY1xcYXBwXFxlbmRcXGVuZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZW5kL2VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ0NGO0FEQ0U7RUFDRSxlQUFBO0FDQ0o7QURHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0FDQUY7QURJQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FDREY7QURJQTtFQUNFO0lBQ0UscUJBQUE7SUFFQSxVQUFBO0VDRkY7RURLQTtJQUNFLG1CQUFBO0lBRUEsVUFBQTtFQ0pGO0FBQ0Y7QURQQTtFQUNFO0lBQ0UscUJBQUE7SUFFQSxVQUFBO0VDRkY7RURLQTtJQUNFLG1CQUFBO0lBRUEsVUFBQTtFQ0pGO0FBQ0Y7QURPQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZEQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9lbmQvZW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmluZm8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgYW5pbWF0aW9uOiBhbmltIDAuNXMgYWx0ZXJuYXRlICBlYXNlLWluO1xyXG5cclxufVxyXG5cclxuaSB7XHJcbiAgZm9udC1zaXplOiAyMHJlbTtcclxuICBjb2xvcjogZ3JlZW47XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYW5pbSB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG5cclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuXHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuYnV0dG9uIHtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjIyLCAwKTtcclxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDI1NSwgMjIyLCAwLCAxKSAwJSwgcmdiYSgyNTUsIDE3NywgMTIsIDEpIDEwMCUpO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG4iLCIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgYW5pbWF0aW9uOiBhbmltIDAuNXMgYWx0ZXJuYXRlIGVhc2UtaW47XG59XG5cbmkge1xuICBmb250LXNpemU6IDIwcmVtO1xuICBjb2xvcjogZ3JlZW47XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuXG5Aa2V5ZnJhbWVzIGFuaW0ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5idXR0b24ge1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZGUwMDtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgI2ZmZGUwMCAwJSwgI2ZmYjEwYyAxMDAlKTtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/end/end.component.ts":
/*!**************************************!*\
  !*** ./src/app/end/end.component.ts ***!
  \**************************************/
/*! exports provided: EndComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndComponent", function() { return EndComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let EndComponent = class EndComponent {
    constructor(router) {
        this.router = router;
    }
    goToHome() {
        this.router.navigateByUrl('/end');
    }
    ngOnInit() {
        //setTimeout(this.goToHome, 2000);
        setTimeout(() => {
            this.router.navigateByUrl('/startpage');
        }, 10000);
    }
};
EndComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
EndComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-end',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./end.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/end/end.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./end.component.scss */ "./src/app/end/end.component.scss")).default]
    })
], EndComponent);



/***/ }),

/***/ "./src/app/form-order/form-order.component.scss":
/*!******************************************************!*\
  !*** ./src/app/form-order/form-order.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("form {\n  display: flex;\n  flex-direction: column;\n  width: 50vw;\n  text-align: center;\n}\n\n.logo {\n  margin-top: 30px;\n  margin-bottom: 20px;\n}\n\ninput {\n  height: 15vh;\n  font-size: 4rem;\n}\n\n.decision {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 50vw;\n}\n\nlabel {\n  width: 50%;\n  height: 10vh;\n  font-size: 1.8em;\n  display: flex;\n  flex-direction: column;\n  justify-items: center;\n  align-items: center;\n  margin-top: 30px;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  justify-items: center;\n  align-items: center;\n  text-align: center;\n  height: 100vh;\n}\n\nbutton {\n  width: 50vw;\n  height: 10vh;\n  font-size: 1.5rem;\n  background: #EC6404;\n  border-radius: 20px;\n}\n\nbutton:hover {\n  background: #EC6404;\n  transform: scale(1.05);\n}\n\ni {\n  font-size: 4rem;\n  margin-top: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS1vcmRlci9DOlxcQU1TTyBQcm9ncmFtb3dhbmllXFxvZGJpb3J5YW1zby9zcmNcXGFwcFxcZm9ybS1vcmRlclxcZm9ybS1vcmRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9ybS1vcmRlci9mb3JtLW9yZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBRENBO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtBQ0VGOztBRENBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9mb3JtLW9yZGVyL2Zvcm0tb3JkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDUwdnc7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgaGVpZ2h0OiAxNXZoO1xyXG4gIGZvbnQtc2l6ZTogNHJlbTtcclxufVxyXG5cclxuLmRlY2lzaW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHdpZHRoOiA1MHZ3O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDEwdmg7XHJcbiAgZm9udC1zaXplOiAxLjhlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIHdpZHRoOiA1MHZ3O1xyXG4gIGhlaWdodDogMTB2aDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBiYWNrZ3JvdW5kOiAjRUM2NDA0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjRUM2NDA0O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbn1cclxuXHJcbmkge1xyXG4gIGZvbnQtc2l6ZTogNHJlbTtcclxuICBtYXJnaW4tdG9wOiAxNTBweDtcclxufVxyXG4iLCJmb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDUwdnc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ28ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pbnB1dCB7XG4gIGhlaWdodDogMTV2aDtcbiAgZm9udC1zaXplOiA0cmVtO1xufVxuXG4uZGVjaXNpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiA1MHZ3O1xufVxuXG5sYWJlbCB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTB2aDtcbiAgZm9udC1zaXplOiAxLjhlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbmJ1dHRvbiB7XG4gIHdpZHRoOiA1MHZ3O1xuICBoZWlnaHQ6IDEwdmg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBiYWNrZ3JvdW5kOiAjRUM2NDA0O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjRUM2NDA0O1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuXG5pIHtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBtYXJnaW4tdG9wOiAxNTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/form-order/form-order.component.ts":
/*!****************************************************!*\
  !*** ./src/app/form-order/form-order.component.ts ***!
  \****************************************************/
/*! exports provided: FormOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormOrderComponent", function() { return FormOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/crud.service */ "./src/app/shared/crud.service.ts");





let FormOrderComponent = class FormOrderComponent {
    constructor(fb, router, firebaseService) {
        this.fb = fb;
        this.router = router;
        this.firebaseService = firebaseService;
        this.now = new Date();
    }
    submitForm() {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
        this.model = {
            number: this.validateForm.value.number,
            decision: this.validateForm.value.decision,
            date: this.now
        };
        this.firebaseService.createOrder(this.model);
        this.router.navigateByUrl('/end');
    }
    ngOnInit() {
        this.validateForm = this.fb.group({
            number: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            decision: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        setTimeout(() => {
            this.router.navigateByUrl('/startpage');
        }, 30000);
    }
};
FormOrderComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _shared_crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"] }
];
FormOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-order',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-order/form-order.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-order.component.scss */ "./src/app/form-order/form-order.component.scss")).default]
    })
], FormOrderComponent);



/***/ }),

/***/ "./src/app/form-service/form-service.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/form-service/form-service.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("form {\n  display: flex;\n  flex-direction: column;\n  width: 50vw;\n  text-align: center;\n}\n\n.logo {\n  margin-top: 30px;\n  margin-bottom: 20px;\n}\n\ninput {\n  height: 15vh;\n  font-size: 4rem;\n}\n\n.decision {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 50vw;\n}\n\nlabel {\n  width: 50%;\n  height: 10vh;\n  font-size: 1.5em;\n  display: flex;\n  flex-direction: column;\n  justify-items: center;\n  align-items: center;\n  margin-top: 30px;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  justify-items: center;\n  align-items: center;\n  text-align: center;\n}\n\nbutton {\n  width: 50vw;\n  height: 10vh;\n  font-size: 1.5rem;\n  border-radius: 20px;\n  background: #EC6404;\n}\n\nbutton:hover {\n  background: #EC6404;\n  transform: scale(1.05);\n}\n\ni {\n  font-size: 4rem;\n  margin-top: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS1zZXJ2aWNlL0M6XFxBTVNPIFByb2dyYW1vd2FuaWVcXG9kYmlvcnlhbXNvL3NyY1xcYXBwXFxmb3JtLXNlcnZpY2VcXGZvcm0tc2VydmljZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9ybS1zZXJ2aWNlL2Zvcm0tc2VydmljZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9mb3JtLXNlcnZpY2UvZm9ybS1zZXJ2aWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiA1MHZ3O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGhlaWdodDogMTV2aDtcclxuICBmb250LXNpemU6IDRyZW07XHJcbn1cclxuXHJcbi5kZWNpc2lvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB3aWR0aDogNTB2dztcclxufVxyXG5cclxubGFiZWwge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiAxMHZoO1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgd2lkdGg6IDUwdnc7XHJcbiAgaGVpZ2h0OiAxMHZoO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogI0VDNjQwNDtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjRUM2NDA0O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbn1cclxuXHJcbmkge1xyXG4gIGZvbnQtc2l6ZTogNHJlbTtcclxuICBtYXJnaW4tdG9wOiAxNTBweDtcclxufVxyXG4iLCJmb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDUwdnc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ28ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pbnB1dCB7XG4gIGhlaWdodDogMTV2aDtcbiAgZm9udC1zaXplOiA0cmVtO1xufVxuXG4uZGVjaXNpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiA1MHZ3O1xufVxuXG5sYWJlbCB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTB2aDtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmJ1dHRvbiB7XG4gIHdpZHRoOiA1MHZ3O1xuICBoZWlnaHQ6IDEwdmg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjRUM2NDA0O1xufVxuXG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjRUM2NDA0O1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuXG5pIHtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBtYXJnaW4tdG9wOiAxNTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/form-service/form-service.component.ts":
/*!********************************************************!*\
  !*** ./src/app/form-service/form-service.component.ts ***!
  \********************************************************/
/*! exports provided: FormServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormServiceComponent", function() { return FormServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/crud.service */ "./src/app/shared/crud.service.ts");





let FormServiceComponent = class FormServiceComponent {
    constructor(fb, router, firebaseService) {
        this.fb = fb;
        this.router = router;
        this.firebaseService = firebaseService;
        this.now = new Date();
    }
    submitForm() {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
        this.model = {
            number: this.validateForm.value.number,
            decision: this.validateForm.value.decision,
            date: this.now
        };
        console.log(this.model);
        this.firebaseService.createRma(this.model);
        this.router.navigateByUrl('/end');
    }
    ngOnInit() {
        this.validateForm = this.fb.group({
            number: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            decision: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        setTimeout(() => {
            this.router.navigateByUrl('/startpage');
        }, 30000);
    }
};
FormServiceComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _shared_crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"] }
];
FormServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-service',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-service.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-service/form-service.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-service.component.scss */ "./src/app/form-service/form-service.component.scss")).default]
    })
], FormServiceComponent);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-form {\n  max-width: 100%;\n}\n\n.login-form-button {\n  width: 100%;\n}\n\n.loginContainer {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nform {\n  width: 30vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXEFNU08gUHJvZ3JhbW93YW5pZVxcb2RiaW9yeWFtc28vc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7O0FERUU7RUFDRSxXQUFBO0FDQ0o7O0FEQ0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURBRTtFQUNFLFdBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWZvcm0ge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAubG9naW4tZm9ybS1idXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5sb2dpbkNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBmb3Jte1xyXG4gICAgd2lkdGg6IDMwdnc7XHJcbiAgfSIsIi5sb2dpbi1mb3JtIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4ubG9naW4tZm9ybS1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxvZ2luQ29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuZm9ybSB7XG4gIHdpZHRoOiAzMHZ3O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let LoginComponent = class LoginComponent {
    constructor(fb, authService) {
        this.fb = fb;
        this.authService = authService;
    }
    submitForm() {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
    }
    ngOnInit() {
        this.validateForm = this.fb.group({
            userName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            remember: [true]
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/main/main.component.scss":
/*!******************************************!*\
  !*** ./src/app/main/main.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.container p {\n  font-size: 2em;\n}\n.choose {\n  width: 80vw;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-top: 40px;\n}\n.choose_order {\n  border-radius: 50px;\n  font-size: 3rem;\n  color: black;\n}\n.choose_service {\n  border-radius: 50px;\n  font-size: 3rem;\n  color: black;\n}\na {\n  width: 700px;\n  height: 300px;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  background: #ffde00;\n  background: radial-gradient(circle, #ffde00 0%, #ffb10c 100%);\n  color: black;\n  border-radius: 50px;\n  border: none;\n}\n.logo {\n  margin-bottom: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9DOlxcQU1TTyBQcm9ncmFtb3dhbmllXFxvZGJpb3J5YW1zby9zcmNcXGFwcFxcbWFpblxcbWFpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQUU7RUFDRSxjQUFBO0FDRUo7QURFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FDQ0Y7QURDRTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNDSjtBREVFO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0FKO0FESUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2REFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNERjtBRElBO0VBQ0UsbUJBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHB7XHJcbiAgICBmb250LXNpemU6MmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmNob29zZSB7XHJcbiAgd2lkdGg6IDgwdnc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG5cclxuICAmX29yZGVyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuICAmX3NlcnZpY2Uge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbn1cclxuXHJcbmEge1xyXG4gIHdpZHRoOiA3MDBweDtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyMjIsIDApO1xyXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMjU1LCAyMjIsIDAsIDEpIDAlLCByZ2JhKDI1NSwgMTc3LCAxMiwgMSkgMTAwJSk7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG4iLCIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAyZW07XG59XG5cbi5jaG9vc2Uge1xuICB3aWR0aDogODB2dztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuLmNob29zZV9vcmRlciB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmNob29zZV9zZXJ2aWNlIHtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmEge1xuICB3aWR0aDogNzAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZmZkZTAwO1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjZmZkZTAwIDAlLCAjZmZiMTBjIDEwMCUpO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmxvZ28ge1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let MainComponent = class MainComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        setTimeout(() => {
            this.router.navigateByUrl('/startpage');
        }, 30000);
    }
};
MainComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main.component.scss */ "./src/app/main/main.component.scss")).default]
    })
], MainComponent);



/***/ }),

/***/ "./src/app/shared/auth.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/auth.service.ts ***!
  \****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let AuthService = class AuthService {
    constructor(afs, afAuth, router, ngZone) {
        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.ngZone = ngZone;
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.userData = user;
                localStorage.setItem('user', JSON.stringify(this.userData));
                JSON.parse(localStorage.getItem('user'));
            }
            else {
                localStorage.setItem('user', null);
                JSON.parse(localStorage.getItem('user'));
            }
        });
    }
    SignIn(email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then((result) => {
            this.isLoggedIn = true;
            this.ngZone.run(() => {
                this.router.navigate(['main']);
            });
            this.SetUserData(result.user);
            console.log(this.isLoggedIn);
        }).catch((error) => {
            this.isLoggedIn = false;
            window.alert(error.message);
        });
    }
    SetUserData(user) {
        const userRef = this.afs.doc(`users/${user.uid}`);
        const userData = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            emailVerified: user.emailVerified
        };
        return userRef.set(userData, {
            merge: true
        });
    }
    SignOut() {
        return this.afAuth.auth.signOut().then(() => {
            localStorage.removeItem('user');
            this.router.navigate(['userLogin']);
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AuthService);



/***/ }),

/***/ "./src/app/shared/crud.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/crud.service.ts ***!
  \****************************************/
/*! exports provided: CrudService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudService", function() { return CrudService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");



let CrudService = class CrudService {
    constructor(db) {
        this.db = db;
    }
    getOrders() {
        return this.db.collection('order').snapshotChanges();
    }
    getRMA() {
        return this.db.collection('rma').snapshotChanges();
    }
    createOrder(item) {
        return this.db.collection('order').add(item);
    }
    createRma(item) {
        return this.db.collection('rma').add(item);
    }
    deleteOrder(id) {
        this.db.doc('order/' + id).delete();
    }
    deleteRma(id) {
        this.db.doc('rma/' + id).delete();
    }
};
CrudService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
CrudService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CrudService);



/***/ }),

/***/ "./src/app/startpage/startpage.component.scss":
/*!****************************************************!*\
  !*** ./src/app/startpage/startpage.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  display: flex;\n  flex-direction: row;\n  font-size: 2rem;\n}\n.container .tomek {\n  height: 100vh;\n}\n.container button {\n  width: 500px;\n  height: 200px;\n  margin-top: 50px;\n}\n.navigation {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.navigation .start {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 100px;\n}\n.navigation .start button {\n  background: #ffde00;\n  background: radial-gradient(circle, #ffde00 0%, #ffb10c 100%);\n  color: black;\n  border-radius: 50px;\n  border: none;\n  transition: all 0.2s ease-in-out;\n  -webkit-animation: anim 2s alternate infinite ease-in;\n          animation: anim 2s alternate infinite ease-in;\n}\n@-webkit-keyframes anim {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(1.1);\n  }\n}\n@keyframes anim {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(1.1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhcnRwYWdlL0M6XFxBTVNPIFByb2dyYW1vd2FuaWVcXG9kYmlvcnlhbXNvL3NyY1xcYXBwXFxzdGFydHBhZ2VcXHN0YXJ0cGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3RhcnRwYWdlL3N0YXJ0cGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQVlBLGVBQUE7QUNWRjtBREFFO0VBQ0UsYUFBQTtBQ0VKO0FEQ0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDQ0o7QURNQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDSEY7QURNRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNKSjtBRE1JO0VBQ0UsbUJBQUE7RUFDQSw2REFBQTtFQUNJLFlBQUE7RUFDSixtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLHFEQUFBO1VBQUEsNkNBQUE7QUNKTjtBRFVBO0VBQ0U7SUFDRSxtQkFBQTtFQ1BGO0VEVUE7SUFDRSxxQkFBQTtFQ1JGO0FBQ0Y7QURDQTtFQUNFO0lBQ0UsbUJBQUE7RUNQRjtFRFVBO0lBQ0UscUJBQUE7RUNSRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc3RhcnRwYWdlL3N0YXJ0cGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbiAgLnRvbWVrIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgfVxyXG5cclxuICBmb250LXNpemU6MnJlbTtcclxuXHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcblxyXG4gIC5zdGFydCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyMjIsIDApO1xyXG4gICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDI1NSwgMjIyLCAwLCAxKSAwJSwgcmdiYSgyNTUsIDE3NywgMTIsIDEpIDEwMCUpO1xyXG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIGFuaW1hdGlvbjogYW5pbSAycyBhbHRlcm5hdGUgaW5maW5pdGUgZWFzZS1pbjtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW0ge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIH1cclxufVxyXG4iLCIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZm9udC1zaXplOiAycmVtO1xufVxuLmNvbnRhaW5lciAudG9tZWsge1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuLmNvbnRhaW5lciBidXR0b24ge1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5uYXZpZ2F0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5uYXZpZ2F0aW9uIC5zdGFydCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuLm5hdmlnYXRpb24gLnN0YXJ0IGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICNmZmRlMDA7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNmZmRlMDAgMCUsICNmZmIxMGMgMTAwJSk7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uOiBhbmltIDJzIGFsdGVybmF0ZSBpbmZpbml0ZSBlYXNlLWluO1xufVxuXG5Aa2V5ZnJhbWVzIGFuaW0ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/startpage/startpage.component.ts":
/*!**************************************************!*\
  !*** ./src/app/startpage/startpage.component.ts ***!
  \**************************************************/
/*! exports provided: StartpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartpageComponent", function() { return StartpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StartpageComponent = class StartpageComponent {
    constructor() { }
    ngOnInit() {
    }
};
StartpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-startpage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./startpage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/startpage/startpage.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./startpage.component.scss */ "./src/app/startpage/startpage.component.scss")).default]
    })
], StartpageComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyANkBMhtjc5bbCxeP-LQx0UTNiAFpzqi9c",
        authDomain: "standdevice-971a6.firebaseapp.com",
        databaseURL: "https://standdevice-971a6.firebaseio.com",
        projectId: "standdevice-971a6",
        storageBucket: "standdevice-971a6.appspot.com",
        messagingSenderId: "128996089145",
        appId: "1:128996089145:web:d24563e31a288b9c5e9ce8",
        measurementId: "G-3JJ1Z7ZFRY"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\AMSO Programowanie\odbioryamso\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map