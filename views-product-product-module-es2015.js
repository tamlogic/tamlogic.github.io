(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-product-product-module"],{

/***/ "/wWl":
/*!*******************************************************************************************************!*\
  !*** ./src/app/views/product/lesson/listen-read/listen-read-content/listen-read-content.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ListenReadContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListenReadContentComponent", function() { return ListenReadContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_listen_read_content_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./listen-read-content.component.html */ "0gkf");
/* harmony import */ var _listen_read_content_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listen-read-content.component.scss */ "sPYa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let ListenReadContentComponent = class ListenReadContentComponent {
    constructor() { }
    ngOnInit() {
    }
    // Mute a singular HTML5 element
    stopMe(elem) {
        elem.load();
    }
    // Try to mute all video and audio elements on the page
    stopAll() {
        document.querySelectorAll(`video, audio`).forEach(elem => this.stopMe(elem));
    }
};
ListenReadContentComponent.ctorParameters = () => [];
ListenReadContentComponent.propDecorators = {
    contents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ListenReadContentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-listen-read-content',
        template: _raw_loader_listen_read_content_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_listen_read_content_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ListenReadContentComponent);



/***/ }),

/***/ "0gkf":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/product/lesson/listen-read/listen-read-content/listen-read-content.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-md-12\">\n    <!-- Nav tabs -->\n    <tabset>\n      <tab *ngFor=\"let item of contents\">\n        <ng-template tabHeading>\n          <i class=\"icon-calendar\"></i> {{item.case}}\n        </ng-template>\n        <span class=\"text-danger font-weight-bold\" style=\"font-size: 20px;\">\n          {{item.title}}\n        </span>\n        <tabset>\n          <tab *ngFor=\"let topic of item.content\">\n            <ng-template tabHeading>\n              {{topic.title}}\n            </ng-template>\n            <div class=\"row\">\n              <div class=\"col-8\">\n                <div [innerHTML]=\"topic.data\"></div>\n              </div>\n              <div class=\"col-4 text-right pt-2 d-flex flex-column text-right\">\n                <span *ngIf=\"!topic.audioLinkReflection\" class=\"p-1\">\n                  <span class=\"badge badge-danger badge-pill p-1 mb-2\" style=\"position: static;\">Slow speaking</span>\n                  <audio controls>\n                    <source src=\"{{topic.audioLinkSlow}}\" type=\"audio/mpeg\">\n                  </audio>\n                </span>\n                <span *ngIf=\"!topic.audioLinkReflection\" class=\"p-1\">\n                  <span class=\"badge badge-danger badge-pill p-1 mb-2\" style=\"position: static;\">Native speaking</span>\n                  <audio controls>\n                    <source src=\"{{topic.audioLinkNative}}\" type=\"audio/mpeg\">\n                  </audio>\n                </span>\n                <span *ngIf=\"topic.audioLinkReflection\" class=\"p-1\">\n                  <span class=\"badge badge-danger badge-pill p-1 mb-2\" style=\"position: static;\">Multi Reflection</span>\n                  <audio controls>\n                    <source src=\"{{topic.audioLinkReflection}}\" type=\"audio/mpeg\">\n                  </audio>\n                </span>\n                <button type=\"button\" class=\"btn btn-info text-light p-1\"\n                        (click)=\"stopAll()\">Reload all audio\n                </button>\n              </div>\n            </div>\n          </tab>\n        </tabset>\n      </tab>\n    </tabset>\n  </div><!--/.col-->\n</div><!--/.row-->\n");

/***/ }),

/***/ "2zWu":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/product/lesson/grammar/grammar.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div *ngFor=\"let item of lessons\" class=\"card\">\n    <div class=\"card-header\">\n      <button type=\"button\" class=\"btn btn-info text-light\"\n              (click)=\"item.openCollapse = !item.openCollapse\">{{item.title}}\n      </button>\n      <div class=\"card-header-actions\">\n        <button type=\"button\" class=\"btn btn-success\"\n                (click)=\"item.openCollapse = !item.openCollapse\">Try it\n        </button>\n      </div>\n    </div>\n    <div class=\"card-body\"\n         (collapsed)=\"collapsed($event)\"\n         (expanded)=\"expanded($event)\"\n         [collapse]=\"item.openCollapse\">\n      <div class=\"row\">\n        <div class=\"col-8\">\n          <div [innerHTML]=\"item.data\"></div>\n        </div>\n        <div class=\"col-4 text-right pt-2 d-flex flex-column text-right\">\n          <span class=\"badge badge-danger badge-pill p-1 mb-2\" style=\"position: static;\">Further practice</span>\n          <audio controls>\n            <source src=\"{{item.audioLink}}\" type=\"audio/mpeg\">\n          </audio>\n          <button type=\"button\" class=\"btn btn-info text-light p-1 mt-3\"\n                  (click)=\"stopAll()\">Reload all audio\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "3A6n":
/*!************************************************************!*\
  !*** ./src/app/views/product/lesson/lesson.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep .chat-custom > #ng-chat > ng-chat-friends-list > #ng-chat-people {\n  height: 600px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxsZXNzb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSx3QkFBQTtBQUFKIiwiZmlsZSI6Imxlc3Nvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCB7XG4gIC5jaGF0LWN1c3RvbT4jbmctY2hhdD5uZy1jaGF0LWZyaWVuZHMtbGlzdD4jbmctY2hhdC1wZW9wbGUge1xuICAgIGhlaWdodDogNjAwcHggIWltcG9ydGFudDtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "3GoJ":
/*!***************************************************************************!*\
  !*** ./src/app/views/product/lesson/listen-read/listen-read.component.ts ***!
  \***************************************************************************/
/*! exports provided: ListenReadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListenReadComponent", function() { return ListenReadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_listen_read_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./listen-read.component.html */ "C7vD");
/* harmony import */ var _listen_read_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listen-read.component.scss */ "amVz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _listen_read__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listen-read */ "ufJO");





let ListenReadComponent = class ListenReadComponent {
    constructor() { }
    ngOnInit() {
        this.getLessons();
    }
    getLessons() {
        this.lessons = _listen_read__WEBPACK_IMPORTED_MODULE_4__["ListenReads"];
    }
    collapsed(event) {
        // console.log(event);
    }
    expanded(event) {
        // console.log(event);
    }
};
ListenReadComponent.ctorParameters = () => [];
ListenReadComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-listen-read',
        template: _raw_loader_listen_read_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_listen_read_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ListenReadComponent);



/***/ }),

/***/ "4Z7N":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/product/firebase-demo/firebase-demo.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let user of users\">\n  {{user | json}}<br/>\n</div>\n\n<div [hidden]=\"user\">\n  <h1>Sign In with Your Phone Number</h1>\n  <input type=\"text\" [(ngModel)]=\"phoneNumber.country\" class=\"input\" placeholder=\"1\">\n  <input type=\"text\" [(ngModel)]=\"phoneNumber.area\" class=\"input\" placeholder=\"1\">\n  <input type=\"text\" [(ngModel)]=\"phoneNumber.prefix\" class=\"input\" placeholder=\"1\">\n  <input type=\"text\" [(ngModel)]=\"phoneNumber.line\" class=\"input\" placeholder=\"1\">\n\n  <div id=\"recaptcha-container\"></div>\n\n<!--  <button (click)=\"sendLoginCode()\">SMS Text Login Code</button>-->\n\n<!--  <div *ngIf=\"windowRef.confirmationResult\">-->\n<!--    <label for=\"code\">Enter your Verification Code Here</label><br/>-->\n<!--    <input type=\"text\" id=\"code\" name=\"code\" [(ngModel)]=\"verificationCode\" class=\"input\">-->\n<!--    <button (click)=\"verifyLoginCode()\">Verify</button>-->\n<!--  </div>-->\n</div>\n");

/***/ }),

/***/ "5psD":
/*!*******************************************************************!*\
  !*** ./src/app/views/product/lesson/grammar/grammar.component.ts ***!
  \*******************************************************************/
/*! exports provided: GrammarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrammarComponent", function() { return GrammarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_grammar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./grammar.component.html */ "2zWu");
/* harmony import */ var _grammar_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grammar.component.scss */ "ngqT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _grammar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grammar */ "BTHO");





let GrammarComponent = class GrammarComponent {
    constructor() { }
    ngOnInit() {
        this.getLessons();
    }
    getLessons() {
        this.lessons = _grammar__WEBPACK_IMPORTED_MODULE_4__["Grammars"];
    }
    collapsed(event) {
        // console.log(event);
    }
    expanded(event) {
        // console.log(event);
    }
    // Mute a singular HTML5 element
    stopMe(elem) {
        elem.load();
    }
    // Try to mute all video and audio elements on the page
    stopAll() {
        document.querySelectorAll(`video, audio`).forEach(elem => this.stopMe(elem));
    }
};
GrammarComponent.ctorParameters = () => [];
GrammarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-grammar',
        template: _raw_loader_grammar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_grammar_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], GrammarComponent);



/***/ }),

/***/ "5th+":
/*!**********************************************************!*\
  !*** ./src/app/views/product/lesson/lesson.component.ts ***!
  \**********************************************************/
/*! exports provided: LessonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonComponent", function() { return LessonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lesson_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lesson.component.html */ "wjxX");
/* harmony import */ var _lesson_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lesson.component.scss */ "3A6n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _MyAdapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MyAdapter */ "ieBf");
/* harmony import */ var _services_authenticate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/authenticate.service */ "DtyL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var canvas_confetti__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! canvas-confetti */ "cSmn");








let LessonComponent = class LessonComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.userId = 999;
        this.adapter = new _MyAdapter__WEBPACK_IMPORTED_MODULE_4__["MyAdapter"]();
    }
    ngOnInit() {
        const checkExistAuth = localStorage.getItem('authUser');
        if (!checkExistAuth) {
            this.router.navigate(['/login']);
        }
        else {
            const authUser = JSON.parse(localStorage.getItem('authUser'));
        }
    }
    showVideo() {
        this.largeModal.show();
        const duration = 15 * 1000;
        const animationEnd = Date.now() + duration;
        let skew = 1;
        const end = Date.now() + (15 * 1000);
        // go Buckeyes!
        const colors = ['#90EE90', '#ffffff'];
        (function frame() {
            const timeLeft = animationEnd - Date.now();
            const ticks = Math.max(200, 500 * (timeLeft / duration));
            skew = Math.max(0.8, skew - 0.001);
            Object(canvas_confetti__WEBPACK_IMPORTED_MODULE_7__["default"])({
                particleCount: 2,
                angle: 60,
                spread: 1000,
                origin: { x: 0 },
                colors: colors
            });
            Object(canvas_confetti__WEBPACK_IMPORTED_MODULE_7__["default"])({
                particleCount: 2,
                angle: 120,
                spread: 1000,
                origin: { x: 1 },
                colors: colors
            });
            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    }
};
LessonComponent.ctorParameters = () => [
    { type: _services_authenticate_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
LessonComponent.propDecorators = {
    largeModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['largeModal',] }]
};
LessonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-lesson',
        template: _raw_loader_lesson_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lesson_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_authenticate_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticateService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], LessonComponent);



/***/ }),

/***/ "B+Za":
/*!*********************************************************!*\
  !*** ./src/app/views/product/product-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ProductRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRoutingModule", function() { return ProductRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _lesson_lesson_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lesson/lesson.component */ "5th+");
/* harmony import */ var _firebase_demo_firebase_demo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./firebase-demo/firebase-demo.component */ "LBOD");
/* harmony import */ var _lesson_chat_chat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lesson/chat/chat.component */ "E110");
/* harmony import */ var _happy_birthday_bx_happy_birthday_bx_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./happy-birthday-bx/happy-birthday-bx.component */ "NPdh");







const routes = [
    {
        path: 'lesson',
        data: {
            title: 'Lesson'
        },
        component: _lesson_lesson_component__WEBPACK_IMPORTED_MODULE_3__["LessonComponent"],
        children: []
    },
    {
        path: 'chat',
        data: {
            title: 'Chat'
        },
        component: _lesson_chat_chat_component__WEBPACK_IMPORTED_MODULE_5__["ChatComponent"],
        children: []
    },
    {
        path: 'firebase-demo',
        data: {
            title: 'Firebase demo'
        },
        component: _firebase_demo_firebase_demo_component__WEBPACK_IMPORTED_MODULE_4__["FirebaseDemoComponent"],
        children: []
    },
    {
        path: 'happy-birthday-ba-xa',
        data: {
            title: 'Happy birthday bà xã'
        },
        component: _happy_birthday_bx_happy_birthday_bx_component__WEBPACK_IMPORTED_MODULE_6__["HappyBirthdayBxComponent"],
        children: []
    }
];
let ProductRoutingModule = class ProductRoutingModule {
};
ProductRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ProductRoutingModule);



/***/ }),

/***/ "BTHO":
/*!*********************************************************!*\
  !*** ./src/app/views/product/lesson/grammar/grammar.ts ***!
  \*********************************************************/
/*! exports provided: Grammars */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grammars", function() { return Grammars; });
let Grammars = [
    {
        title: 'Lesson 01 - Introduction',
        openCollapse: true,
        name: `Introduction`,
        displayOrder: 1,
        audioLink: `assets/audio/LESSON 01 - INTRODUCTION/Recording 1.7 - Immersion.mp3`,
        data: `<!-- #######  YAY, I AM THE SOURCE EDITOR! #########-->
      <div data-v-e07f9eaa="">
      <div data-v-e07f9eaa="">
      <div data-v-e07f9eaa="">
      <h3>Topic 01: Introducing a Friend</h3>
      <p><strong>Vocabulary</strong></p>
      <p>1. Meet /miːt/ (verb) - Nice to&nbsp;<strong>meet</strong>&nbsp;you, Peter.<br /><em>Gặp, gặp gỡ&nbsp;</em></p>
      <p>2. Holiday /ˈhɑːlədeɪ/ (noun) - I&rsquo;m just here on&nbsp;<strong>holiday</strong>.<br /><em>Kỳ nghỉ&nbsp;</em></p>
      <p>3. Spell /spel/ (verb) - How do you&nbsp;<strong>spell</strong>&nbsp;that?<br /><em>Đ&aacute;nh vần&nbsp;</em></p>
      <p>4. Australia /ɔːˈstreɪliə/ (noun) - Are you from around here? - No,&nbsp;<strong>Australia</strong>.<br /><em>Nước &Uacute;c</em>&nbsp;</p>
      <p>5. Mateys /ˈmeɪtis/ (noun) - Good day,&nbsp;<strong>mateys!</strong><br /><em>Bạn (một từ kh&aacute;c chỉ bạn b&egrave;)&nbsp;</em></p>
      <p>6. Peace /piːs/ (noun) - Good day, mateys! -&nbsp;<strong>Peace</strong>.<br /><em>Lời ch&agrave;o tạm biệt&nbsp;</em></p>
      <p><strong>Expression&nbsp;</strong></p>
      <p>1. How&rsquo;s it going? - Hey, Peter!&nbsp;<strong>How&rsquo;s it going?</strong><br /><em>Dạo n&agrave;y cậu thế n&agrave;o?&nbsp;</em></p>
      <p>2. How are you? - Hi, Anna! Good.<strong>&nbsp;How are you?</strong><br /><em>Cậu khỏe chứ?&nbsp;</em></p>
      <p>3. This is &hellip; -&nbsp;<strong>This is</strong>&nbsp;my friend, Felice Lachlan. Felice,&nbsp;<strong>this is</strong>&nbsp;Peter.<br /><em>Đ&acirc;y l&agrave; &hellip;</em>&nbsp;</p>
      <p>4. Nice to meet you -&nbsp;<strong>Nice to meet you</strong>, Peter.<br /><em>Rất vui được gặp cậu.&nbsp;</em></p>
      <p>5. How do you spell that? - That&rsquo;s a pretty name.&nbsp;<strong>How do you spell that?</strong><br /><em>Cậu đ&aacute;nh vần t&ecirc;n đ&oacute; như thế n&agrave;o?&nbsp;</em></p>
      <p>6. Hit the books - Yeah, me too. Gotta&nbsp;<strong>hit the books</strong>, as they say.<br /><em>D&ugrave;i m&agrave;i đ&egrave;n s&aacute;ch</em></p>
      <p>7. It was great meeting you -&nbsp;<strong>It was great meeting you</strong>, Peter.<br /><em>Rất vui được gặp cậu.&nbsp;</em></p>
      <p>8. Catch ya later -&nbsp;<strong>Catch ya later!</strong><br /><em>&nbsp;Hẹn gặp lại sau.</em>&nbsp;</p>
      <h3>Topic 02: Where do you live?</h3>
      <p><strong>Vocabulary</strong></p>
      <p>1.Staying /ˈsteɪɪŋ/ (verb) - No, I&rsquo;m British. Where are you&nbsp;<strong>staying</strong>?<br /><em>Ở lại, lưu lại</em></p>
      <p>2. Business card /ˈbɪznəs kɑːrd/ (noun) - I&rsquo;ll check. Do you have a&nbsp;<strong>business card</strong>?<br /><em>Danh thiếp&nbsp;</em></p>
      <p>3. Employee /ɪmˈplɔɪiː/ (noun) - Are you the new&nbsp;<strong>employee</strong>?<br /><em>Nh&acirc;n vi&ecirc;n&nbsp;</em></p>
      <p><strong>Expression&nbsp;</strong></p>
      <p>1. You can call me - My name is Jennifer, but&nbsp;<strong>you can call me</strong>&nbsp;Jennie.<br /><em>Cậu c&oacute; thể gọi t&ocirc;i l&agrave;</em>&nbsp;</p>
      <p>2. Where are you from? - My name is Jennifer, but you can call me Jennie.&nbsp;<strong>Where are you from?</strong><br /><em>Cậu đến từ đ&acirc;u?</em>&nbsp;</p>
      <p>3. I&rsquo;m from Japan -&nbsp;<strong>I&rsquo;m from Japan.</strong>&nbsp;Are you American?<br /><em>T&ocirc;i đến từ Nhật Bản.</em>&nbsp;</p>
      <p>4. Where are you staying? - No, I&rsquo;m British.&nbsp;<strong>Where are you staying?</strong><br /><em>Cậu đang ở đ&acirc;u?&nbsp;</em></p>
      <p>5. I&rsquo;m staying in -<strong>&nbsp;I&rsquo;m staying in</strong>&nbsp;a hotel, but I&rsquo;m looking for an apartment.<br /><em>T&ocirc;i đang ở&nbsp;</em></p>
      <p>6. Where do you live? - I&rsquo;m staying in a hotel, but I&rsquo;m looking for an apartment.&nbsp;<strong>Where do you live?</strong><br /><em>Chị sống ở đ&acirc;u?&nbsp;</em></p>
      <p>7. I live by -<strong>&nbsp;I live by</strong>&nbsp;the park. It&rsquo;s a very nice, safe and quiet place.<br /><em>T&ocirc;i sống gần</em>&nbsp;</p>
      <p>8. Same here -<strong>&nbsp;Same</strong>&nbsp;<strong>here.</strong>&nbsp;Are there any apartments available by the park?<br /><em>T&ocirc;i cũng thế&nbsp;</em></p>
      <p>9. Contact me via - Sorry, not yet, but you can&nbsp;<strong>contact me via</strong>&nbsp;yoshi1@gmail.com or at this phone number, 215-034-6890.<br /><em>Li&ecirc;n hệ với t&ocirc;i qua&nbsp;</em></p>
      <h3>Topic 03: What is your job?</h3>
      <p><strong>Vocabulary&nbsp;</strong></p>
      <p>1. Expert /ˈekspɜːrt/ (noun) - Can I check? I&rsquo;m sort of an&nbsp;<strong>expert</strong>.<br /><em>Chuy&ecirc;n gia&nbsp;</em></p>
      <p>2. Doctor /ˈdɑːktər/ (noun) - Wow, really? Are you a&nbsp;<strong>doctor</strong>?<br /><em>B&aacute;c sĩ&nbsp;</em></p>
      <p>3. Foot doctor /fʊt ˈdɑːktər/ (noun) &ndash; Are you a doctor? &ndash; Yes, I&rsquo;m a&nbsp;<strong>foot doctor</strong>.<br /><em>B&aacute;c sĩ chuy&ecirc;n về ch&acirc;n</em></p>
      <p>4. Tailor /ˈteɪlər/ (noun) &ndash; Wait, are you sewing them? &ndash; Yes, I also work as&nbsp;<strong>a tailor</strong>.<br /><em>Thợ may&nbsp;</em></p>
      <p><strong>Expression</strong>&nbsp;</p>
      <p>1. Look beat - You&nbsp;<strong>look beat</strong>, what&rsquo;s wrong?<br /><em>Tr&ocirc;ng mệt mỏi&nbsp;</em></p>
      <p>2. I&rsquo;m sort of - Can I check?&nbsp;<strong>I&rsquo;m sort of</strong>&nbsp;an expert.<br /><em>Phần n&agrave;o, đại loại&nbsp;</em></p>
      <p>3. Are you a doctor? - Wow, really?&nbsp;<strong>Are you a doctor?</strong><br /><em>Anh l&agrave; b&aacute;c sĩ &agrave;?&nbsp;</em></p>
      <p>4. I&rsquo;m a foot doctor - Yes,&nbsp;<strong>I&rsquo;m a foot doctor.</strong><br /><em>T&ocirc;i l&agrave; một b&aacute;c sĩ chuy&ecirc;n về ch&acirc;n</em></p>
      <p>5. It&rsquo;s very kind of you - Great.&nbsp;<strong>It&rsquo;s very kind of you.</strong><br /><em>Anh thật tốt bụng.</em></p>
      <p>6. Work as - Yes, I also&nbsp;<strong>work as</strong>&nbsp;a tailor.<br /><em>L&agrave;m việc như&nbsp;</em></p>
      </div>
      </div>
      </div>`
    },
    {
        title: 'Lesson 02 - People',
        openCollapse: true,
        name: `People`,
        displayOrder: 2,
        audioLink: `assets/audio/LESSON 02 - PEOPLE/Recording 2.7 - Immersion.mp3`,
        data: `<!-- #######  YAY, I AM THE SOURCE EDITOR! #########-->
      <div data-v-e07f9eaa="">
      <div data-v-e07f9eaa="">
      <div data-v-e07f9eaa="">
      <h3>Topic 01: Jack&rsquo;s Family Portrait</h3>
      <p><strong>Vocabulary</strong></p>
      <p>1. Grandparents /ˈɡr&aelig;nperənts/ (noun) - These are my&nbsp;<strong>grandparents</strong>&nbsp;at their old house in Thailand.<br /><em>&Ocirc;ng b&agrave;</em></p>
      <p>2. Aunt /&aelig;nt/ (noun) - They moved to the US when my dad and&nbsp;<strong>aunt</strong>&nbsp;were babies.<br /><em>C&ocirc;</em></p>
      <p>3. Grandfather /ˈɡr&aelig;nfɑː&eth;ər/ (noun) - My&nbsp;<strong>grandfather</strong>&nbsp;was a doctor in Thailand.<br /><em>&Ocirc;ng</em></p>
      <p>4. Doctor /ˈdɑːktər/ (noun) - My grandfather was a&nbsp;<strong>doctor</strong>&nbsp;in Thailand.<br /><em>B&aacute;c sĩ</em></p>
      <p>5. Work /wɜːrk/ (verb) - He had to&nbsp;<strong>work</strong>&nbsp;as a cleaner.<br /><em>L&agrave;m việc</em></p>
      <p>6. Cleaner /ˈkliːnər/ (noun) - He had to work as a&nbsp;<strong>cleaner</strong>.<br /><em>Người lao c&ocirc;ng</em></p>
      <p>7. Inspiring /ɪnˈspaɪərɪŋ/ (adjective) - That&rsquo;s really&nbsp;<strong>inspiring</strong>.<br /><em>Truyền cảm hứng</em></p>
      <p>8. Blood /blʌd/ (noun) - I guess it&rsquo;s in our&nbsp;<strong>blood</strong>.&nbsp;<br /><em>M&aacute;u</em></p>
      <p>7. Cousin /ˈkʌzn/ (noun) - No, that&rsquo;s my&nbsp;<strong>cousin</strong>.<br /><em>Anh (em) họ</em></p>
      <p>8. Pregnant /ˈpreɡnənt/ (adjective) - Yep,&nbsp;<strong>pregnant</strong>&nbsp;with me!<br /><em>Mang thai</em></p>
      <p><strong>Expression</strong></p>
      <p>1. Is this &hellip;? - Oh,&nbsp;<strong>is this</strong>&nbsp;your family?<br /><em>Đ&acirc;y c&oacute; phải l&agrave; &hellip;?</em></p>
      <p>2. These are&hellip; -&nbsp;<strong>These are</strong>&nbsp;my grandparents at their old house in Thailand.<br /><em>Đ&acirc;y l&agrave; &hellip; &nbsp;(d&ugrave;ng với danh từ số nhiều)</em></p>
      <p>3. Moved to - They&nbsp;<strong>moved to</strong>&nbsp;the US when my dad and aunt were babies.<br /><em>Chuyển tới</em></p>
      <p>4. Was a doctor - My grandfather&nbsp;<strong>was a doctor</strong>&nbsp;in Thailand.<br /><em>L&agrave; một b&aacute;c sĩ (trong qu&aacute; khứ)</em></p>
      <p>5. Work as a cleaner - My grandfather was a doctor in Thailand, but when they moved here, he had to&nbsp;<strong>work as a cleaner</strong>.<br /><em>L&agrave;m việc như một lao c&ocirc;ng</em></p>
      <p>6. Follow in his dad&rsquo;s footsteps - He wanted to&nbsp;<strong>follow in his dad&rsquo;s footsteps</strong>.<br /><em>Đi theo con đường của cha anh ấy</em></p>
      <p>7. It&rsquo;s in our blood - Yes, my sister and I wanna be doctors, too. I guess<strong>&nbsp;it&rsquo;s in our blood</strong>.<br /><em>N&oacute; đ&atilde; ngấm v&agrave;o m&aacute;u của ch&uacute;ng t&ocirc;i</em></p>
      <p>8. That&rsquo;s&hellip; - No,&nbsp;<strong>that&rsquo;s</strong>&nbsp;my cousin. I&rsquo;m over here.&nbsp;<br /><em>Đ&oacute; l&agrave; &hellip;</em></p>
      <p>9. Pregnant with me - Yep,&nbsp;<strong>pregnant with me</strong>!<br /><em>Mang thai t&ocirc;i</em></p>
      <h3>Topic 02: A High School Reunion</h3>
      <p><strong>Vocabulary</strong></p>
      <p>1. Fantastic /f&aelig;nˈt&aelig;stɪk/ (adjective) - You look&nbsp;<strong>fantastic</strong>!<br /><em>Tuyệt vời&nbsp;</em></p>
      <p>2. Reunion /ˌriːˈjuːniən/ (noun) - Do you know if Nick is coming to the&nbsp;<strong>reunion</strong>?&nbsp;<br /><em>Cuộc họp mặt</em></p>
      <p>3. Married /ˈm&aelig;rid/ (verb) - I&rsquo;m so happy to see that you two got&nbsp;<strong>married</strong>!<br /><em>Kết h&ocirc;n</em></p>
      <p>4. Couple /ˈkʌpl/ (noun) - You are always such a good&nbsp;<strong>couple</strong>.<br /><em>Cặp đ&ocirc;i</em></p>
      <p>5. Classmates /ˈkl&aelig;smeɪts/ (noun) - I remember you two were not just&nbsp;<strong>classmates</strong>&nbsp;but &hellip;a couple in high school.<br /><em>Bạn c&ugrave;ng lớp</em></p>
      <p><strong>Expression</strong></p>
      <p>1. You look fantastic! - Rose? Is that you? Oh,&nbsp;<strong>you look fantastic!</strong><br /><em>Tr&ocirc;ng cậu tuyệt qu&aacute;!&nbsp;</em></p>
      <p>2. It&rsquo;s so good to see you - Angie!&nbsp;<strong>It&rsquo;s so good to see you!</strong><br /><em>Thật tốt khi gặp cậu Angie!</em></p>
      <p>3. Got married - I&rsquo;m so happy to see that you two&nbsp;<strong>got married</strong>!<br /><em>Kết h&ocirc;n</em></p>
      <p>4. Work out - Our relationship didn&rsquo;t&nbsp;<strong>work out.</strong><br /><em>Tập thể dục; tiến triển tốt, đến đ&acirc;u, tới đ&acirc;u</em></p>
      <h3>Topic 03: Just in Time for the Company Trip</h3>
      <p><strong>Vocabulary</strong></p>
      <p>1. Department /dɪˈpɑːrtmənt/ (noun) - What&nbsp;<strong>department</strong>&nbsp;are you in?<br /><em>Bộ phận, ph&ograve;ng, ban</em></p>
      <p>2. R&amp;D /ɑːr ən ˈdiː/ (noun) - I&rsquo;m in&nbsp;<strong>R&amp;D</strong>.<br /><em>Nghi&ecirc;n cứu v&agrave; ph&aacute;t triển</em></p>
      <p>3. Trip /trɪp/ (noun) -&nbsp; Are you going to join the company&nbsp;<strong>trip</strong>&nbsp;next week, Jenny?<br /><em>Chuyến đi, chuyến du lịch</em></p>
      <p>4. Newcomers /ˈnuːkʌmərz/ (noun) - Are&nbsp;<strong>newcomers</strong>&nbsp;allowed to come?<br /><em>Người mới</em></p>
      <p>5. Relaxation /ˌriːl&aelig;kˈseɪʃn/ (noun) - I think everybody is eager for a little&nbsp;<strong>relaxation</strong>.<br /><em>Nghỉ ngơi, thư gi&atilde;n</em></p>
      <p><strong>Expression</strong></p>
      <p>1. What department are you in? - I work in sales.&nbsp;<strong>What department are you in?</strong><br /><em>Em ở bộ phận n&agrave;o?</em>&nbsp;</p>
      <p>2. Allowed to - Are newcomers&nbsp;<strong>allowed to</strong>&nbsp;come?<br /><em>Được ph&eacute;p</em></p>
      <p>3. Team building - We want everyone there for the<strong>&nbsp;team building</strong>.<br /><em>X&acirc;y dựng đội nh&oacute;m</em></p>
      <p>4. I am always up for - Well,&nbsp;<strong>I am always up for a beach trip</strong>.<br /><em>Em lu&ocirc;n muốn</em></p>
      <p>5. Is eager for - I think everybody&nbsp;<strong>is eager for</strong>&nbsp;a little relaxation.<br /><em>H&aacute;o hức</em></p>
      </div>
      </div>
      </div>`
    },
    {
        title: 'Lesson 03 - Time',
        openCollapse: true,
        name: `Time`,
        displayOrder: 3,
        audioLink: `assets/audio/LESSON 03 - TIME/Recording 3.7 - Immersion.mp3`,
        data: `<!-- #######  YAY, I AM THE SOURCE EDITOR! #########-->
      <div data-v-e07f9eaa="">
      <div data-v-e07f9eaa="">
      <div data-v-e07f9eaa="">
      <h3>Topic 01: The Triathlete</h3>
      <p><strong>Vocabulary</strong></p>
      <p>1. Triathlon /traɪˈ&aelig;&theta;lən/ (noun) - I can&rsquo;t believe you&rsquo;re really doing a&nbsp;<strong>triathlon</strong>&nbsp;next week!<br /><em>Cuộc thi thể thao 3 m&ocirc;n phối hợp (chạy, bơi, đạp xe)</em></p>
      <p>2. Awake /əˈweɪk/ (adjective) - Usually I&rsquo;m&nbsp;<strong>awake</strong>&nbsp;by 4:30 or 5:00, and then I run 10 miles.<br /><em>Thức dậy</em></p>
      <p>3. Thankfully /ˈ&theta;&aelig;ŋkfəli/ (adv) -&nbsp;<strong>Thankfully</strong>, there&rsquo;s a pool near my office, so I use that.<br /><em>Thật may mắn</em></p>
      <p>4. Cycling /ˈsaɪklɪŋ/ (noun) - What about&nbsp;<strong>cycling</strong>?<br /><em>Đạp xe</em></p>
      <p>5. Spend /spend/ (verb) - I&nbsp;<strong>spend</strong>&nbsp;pretty much all of Saturday and Sunday cycling around my neighborhood.<br /><em>D&agrave;nh ra</em></p>
      <p>6. Neighborhood /ˈneɪbərhʊd/ (noun) - I spend pretty much all of Saturday and Sunday cycling around my&nbsp;<strong>neighborhood</strong>.<br /><em>Khu phố, khu nh&agrave;</em></p>
      <p>7. Gym /dʒɪm/ (noun) - Well, I go to the&nbsp;<strong>gym</strong>&nbsp;and use an exercise bike on rainy days.<br /><em>Ph&ograve;ng luyện tập thể dục</em></p>
      <p>8. Rainy /ˈreɪni/ (adjective) - Well, I go to the gym and use an exercise bike on&nbsp;<strong>rainy</strong>&nbsp;days.<br /><em>Mưa</em></p>
      <p><strong>Expression</strong></p>
      <p>1. Doing a triathlon - I can&rsquo;t believe you&rsquo;re really&nbsp;<strong>doing a triathlon</strong>&nbsp;next week! How are you training for it?<br /><em>Tham gia cuộc thi phối hợp</em></p>
      <p>2. Get up - I&nbsp;<strong>get up</strong>&nbsp;early every day to run.<br /><em>Thức dậy</em></p>
      <p>3. What time do you - Wow.&nbsp;<strong>What time do you</strong>&nbsp;finish running?<br /><em>Mấy giờ th&igrave; cậu&nbsp;</em></p>
      <p>4. It&rsquo;s time to - I run for about an hour, and then I swim until&nbsp;<strong>it&rsquo;s time to</strong>&nbsp;go to work.<br /><em>Đến giờ l&agrave;m g&igrave;</em></p>
      <p>5. On the weekends - I cycle&nbsp;<strong>on the weekends</strong>. I spend pretty much all of Saturday and Sunday cycling around my neighborhood.<br /><em>V&agrave;o những ng&agrave;y cuối tuần</em></p>
      <p>6. Good luck - Wow,&nbsp;<strong>good luck</strong>&nbsp;Jackson!<br /><em>Ch&uacute;c may mắn</em></p>
      <h3>Topic 02: Invitation to What?</h3>
      <p><strong>Vocabulary</strong></p>
      <p>1. Party /ˈpɑːrti/ (noun) - Hey, Sharon, what time will you be at the&nbsp;<strong>party</strong>?<br /><em>Bữa tiệc</em></p>
      <p>2. Inviting /ɪnˈvaɪtɪŋ/ (verb) - Is this a party &hellip; or &hellip; are you&nbsp;<strong>inviting</strong>&nbsp;me to dinner, Robert?<br /><em>Mời</em></p>
      <p>3. Afraid /əˈfreɪd/ (adjective) - Thanks, but I&rsquo;m&nbsp;<strong>afraid</strong>&nbsp;I&rsquo;m busy tomorrow.<br /><em>E rằng, sợ l&agrave;</em></p>
      <p>4. Busy /ˈbɪzi/ (adjective) - Thanks, but I&rsquo;m afraid I&rsquo;m&nbsp;<strong>busy</strong>&nbsp;tomorrow.<br /><em>Bận rộn</em></p>
      <p><strong>Expression</strong></p>
      <p>1. Are you free? - My party. It&rsquo;s at 8:00 PM tomorrow night. Me, you, an Italian restaurant.&nbsp;<strong>Are you free?</strong><br /><em>Cậu c&oacute; rảnh kh&ocirc;ng?</em></p>
      <p>2. Pick you up at - I&rsquo;ll&nbsp;<strong>pick you up</strong>&nbsp;at seven, okay?<br /><em>Đ&oacute;n cậu v&agrave;o l&uacute;c It&rsquo;s a party.</em></p>
      <p>3. I&rsquo;m afraid I&rsquo;m busy tomorrow. - Thanks, but&nbsp;<strong>I&rsquo;m afraid I&rsquo;m busy tomorrow</strong>. I&rsquo;m going to a real party.<br /><em>T&ocirc;i e rằng ng&agrave;y mai t&ocirc;i bận rồi.</em></p>
      <p>4. Maybe another time - Yeah, no. I understand.&nbsp;<strong>Maybe another time.</strong><br /><em>C&oacute; lẽ l&agrave; để dịp kh&aacute;c</em></p>
      <p>5. Would you like to come with me? - Well&hellip;&nbsp;<strong>Would you like to come with me?</strong><br /><em>Cậu c&oacute; muốn đi c&ugrave;ng t&ocirc;i kh&ocirc;ng?</em></p>
      <p>6. Got it! - Uhm&hellip; A swimsuit. There&rsquo;s a pool. -&nbsp;<strong>Got it!</strong>&nbsp;I&rsquo;m looking forward to it!<br /><em>Hiểu rồi</em></p>
      <p>7. I&rsquo;m looking forward to - Uhm&hellip; A swimsuit. There&rsquo;s a pool. - Got it!&nbsp;<strong>I&rsquo;m looking forward to</strong>&nbsp;it!<br /><em>T&ocirc;i đang tr&ocirc;ng chờ đến</em></p>
      <p>8. What time is it? - Yeah, same! &hellip; Oops!&nbsp;<strong>What time is it?</strong><br /><em>Mấy giờ rồi?</em></p>
      <p>9. It&rsquo;s 10:30 -&nbsp; Yeah, same! &hellip; Oops! What time is it? -<strong>&nbsp;It&rsquo;s 10:30.</strong><br /><em>10h30</em></p>
      <p>10. Oh, I&rsquo;ve gotta go. - Oh,&nbsp;<strong>I&rsquo;ve gotta go.</strong>&nbsp;See ya.<br /><em>Ồ, t&ocirc;i phải đi rồi</em></p>
      <p>11. You bet! -&nbsp;<strong>You bet!</strong>&nbsp;What time? &hellip; And &hellip; where?<br /><em>Được th&ocirc;i, tất nhi&ecirc;n</em></p>
      <p>12. How&rsquo;s that sound? - Let&rsquo;s meet here tomorrow at noon. Bring something to grill.<strong>&nbsp;How&rsquo;s that sound?</strong><br /><em>Nghe &yacute; đ&oacute; thế n&agrave;o</em></p>
      <p>13. Let&rsquo;s -&nbsp;<strong>Let&rsquo;s</strong>&nbsp;meet here tomorrow at noon.<br /><em>H&atilde;y</em></p>
      <h3>Topic 03: Why didn&rsquo;t you Come to My Party?</h3>
      <p><strong>Vocabulary</strong></p>
      <p>1. Birthday /ˈbɜːr&theta;deɪ/ (noun) - Tom, isn&rsquo;t your&nbsp;<strong>birthday</strong>&nbsp;coming up soon?<br /><em>Sinh nhật</em></p>
      <p>2. Born /bɔːrn/ (past participle-ph&acirc;n từ 2 của động từ &ldquo;bear&rdquo;) - I was&nbsp;<strong>born</strong>&nbsp;in 1981.<br /><em>Sinh ra&nbsp;</em></p>
      <p>3. Romantic /rəʊˈm&aelig;ntɪk/ (adjective) - No, I think this year my girlfriend and I are going to the beach for a&nbsp;<strong>romantic</strong>&nbsp;weekend together.<br /><em>L&atilde;ng mạn</em></p>
      <p>4. Together /təˈɡe&eth;ər/ (adverb) - No, I think this year my girlfriend and I are going to the beach for a romantic weekend&nbsp;<strong>together</strong>.<br /><em>C&ugrave;ng nhau</em></p>
      <p>5. Celebrate /ˈselɪbreɪt/ (verb) - Awesome! How are we going to&nbsp;<strong>celebrate</strong>?<br /><em>Ch&uacute;c mừng</em></p>
      <p>6. Boring /ˈbɔːrɪŋ/ (adjective) - No offense, but you guys are&nbsp;<strong>boring</strong>.<br /><em>Nh&agrave;m ch&aacute;n</em></p>
      <p>7. Great /ɡreɪt/ (adjective) - The party was&nbsp;<strong>great</strong>, wasn&rsquo;t it?<br /><em>Tuyệt vời</em></p>
      <p><strong>Expression</strong></p>
      <p>1. Coming up - Tom, isn&rsquo;t your birthday&nbsp;<strong>coming up</strong>&nbsp;soon?<br /><em>Sắp tới</em></p>
      <p>2. I was born in - 37.&nbsp;<strong>I was born in</strong>&nbsp;1981.<br /><em>T&ocirc;i sinh năm</em></p>
      <p>3. When is your birthday? - Oh, okay! &hellip;. Liam,&nbsp;<strong>when is your birthday</strong>&nbsp;again?<br /><em>Sinh nhật cậu khi n&agrave;o?</em></p>
      <p>4. A month away - It&rsquo;s on February 19th, so about&nbsp;<strong>a month away.</strong><br /><em>Một th&aacute;ng nữa</em></p>
      <p>5. No offense -&nbsp;<strong>No offense</strong>, but you guys are boring. I always throw a huge party for my birthday!<br /><em>Kh&ocirc;ng c&oacute; &yacute; g&igrave; đ&acirc;u</em></p>
      <p>6. Throw a huge party - I always&nbsp;<strong>throw a huge party</strong>&nbsp;for my birthday!<br /><em>Tổ chức một bữa tiệc lớn</em></p>
      <p>7. Wasn&rsquo;t it? - The party was great,&nbsp;<strong>wasn&rsquo;t it?</strong><br /><em>Phải kh&ocirc;ng?</em></p>
      <p>8. Showed up - No, it wasn&rsquo;t. Nobody&nbsp;<strong>showed up.</strong><br /><em>Đến, xuất hiện</em></p>
      </div>
      </div>
      </div>`,
    },
    {
        title: 'Lesson 04 - RENTING AND SHOPPING',
        openCollapse: true,
        name: `Renting and shopping`,
        displayOrder: 4,
        audioLink: `assets/audio/LESSON 04 - RENTING AND SHOPPING/Recording 4.7 - Immersion.mp3`,
        data: `<!-- #######  YAY, I AM THE SOURCE EDITOR! #########-->
      <div data-v-e07f9eaa="">
      <div data-v-e07f9eaa="">
      <div data-v-e07f9eaa="">
      <h3>Topic 01: Apartment Hunting</h3>
      <p><strong>Vocabulary</strong></p>
      <p>1. Living room /ˈlɪvɪŋ ruːm/ (noun) - This is the&nbsp;<strong>living room</strong>.<br /><em>Ph&ograve;ng kh&aacute;ch</em></p>
      <p>2. View /vjuː/ (noun) - It has a nice&nbsp;<strong>view</strong>&nbsp;of the park from that window.<br /><em>Tầm nh&igrave;n</em></p>
      <p>3. Pets /pets/ (noun) - Oh, by the way, are&nbsp;<strong>pets</strong>&nbsp;allowed?<br /><em>Vật nu&ocirc;i, th&uacute; cưng</em></p>
      <p>4. Allowed /əˈlaʊd/ (verb) - Oh, by the way, are pets&nbsp;<strong>allowed</strong>?<br /><em>Được ph&eacute;p</em></p>
      <p>5. Extra /ˈekstrə/ (adjective) - Of course, but you need to pay an&nbsp;<strong>extra</strong>&nbsp;fee of 50 dollars per month.<br /><em>Phụ, th&ecirc;m</em></p>
      <p>6. Fee /fiː/ (noun) - Of course, but you need to pay an extra&nbsp;<strong>fee</strong>&nbsp;of 50 dollars per month.<br /><em>Ph&iacute;, lệ ph&iacute;</em></p>
      <p>7. Doable /ˈduːəbl/ (adjective) - That sounds&nbsp;<strong>doable</strong>.<br /><em>C&oacute; thể thực hiện</em></p>
      <p>8. Neighborhood /ˈneɪbərhʊd/ (noun) - Is the&nbsp;<strong>neighborhood</strong>&nbsp;safe?<br /><em>Khu d&acirc;n cư</em></p>
      <p>9. Safe /seɪf/ (adjective) - Is the neighborhood&nbsp;<strong>safe</strong>?<br /><em>An to&agrave;n</em></p>
      <p>10. Crime /kraɪm/ (noun) - There is some&nbsp;<strong>crime</strong>&nbsp;in the park, but nothing serious.<br /><em>Tội phạm</em></p>
      <p>11. Bedrooms /ˈbedruːmz/&nbsp; (noun) - Would you like to see the&nbsp;<strong>bedrooms</strong>?<br /><em>Ph&ograve;ng ngủ</em></p>
      <p>12. Upstairs /ʌpˈsterz/ (noun) - Let&rsquo;s go&nbsp;<strong>upstairs</strong>&nbsp;then.<br /><em>Tầng tr&ecirc;n</em></p>
      <p>13. Bathroom /ˈb&aelig;&theta;ruːm/ (noun) - This is the master bedroom, with its own<strong>&nbsp;bathroom</strong>.<br /><em>Ph&ograve;ng tắm</em></p>
      <p>14. Cozy /ˈkəʊzi/ (adjective) - It&rsquo;s&nbsp;<strong>cozy</strong>.<br /><em>Ấm c&uacute;ng</em></p>
      <p>15. Downstairs /ˌdaʊnˈsterz/ (noun) - It&rsquo;s&nbsp;<strong>downstairs</strong>.<br /><em>Tầng dưới</em></p>
      <p>16. Rent /rent/ (noun) - And how much is the&nbsp;<strong>rent</strong>?<br /><em>Tiền thu&ecirc;</em></p>
      <p>17. Sign /saɪn/ (verb) - Sounds good. Let&rsquo;s&nbsp;<strong>sign</strong>&nbsp;the lease.<br /><em>K&yacute;, k&yacute; t&ecirc;n</em></p>
      <p>18. Lease /liːs/ (noun) - Sounds good. Let&rsquo;s sign the&nbsp;<strong>lease</strong>.<br /><em>Hợp đồng cho thu&ecirc; (bất động sản)</em></p>
      <p><strong>Expression</strong></p>
      <p>1. A nice view of - It has&nbsp;<strong>a nice view of</strong>&nbsp;the park from that window.<br /><em>Một tầm nh&igrave;n đẹp ra</em></p>
      <p>2. By the way - Oh,&nbsp;<strong>by the way</strong>, are pets allowed?<br /><em>Nh&acirc;n tiện, nh&acirc;n đ&acirc;y</em></p>
      <p>3. Master bedroom - This is the&nbsp;<strong>master bedroom</strong>, with its own bathroom.<br /><em>Ph&ograve;ng ngủ ch&iacute;nh</em></p>
      <p>4. Home office - You can also use it as a&nbsp;<strong>home office</strong>.<br /><em>Văn ph&ograve;ng tại nh&agrave;</em></p>
      <p>5. Where is the second bathroom? &ndash;&nbsp;<strong>Where is the second bathroom?</strong>&ndash; It&rsquo;s downstairs.<br /><em>Ph&ograve;ng tắm thứ hai ở đ&acirc;u?</em></p>
      <p>6. How much is the rent? &ndash; And&nbsp;<strong>how much is the rent?</strong>&ndash; It&rsquo;s $800 a month&hellip; plus $50, if you have pets.<br /><em>Tiền thu&ecirc; l&agrave; bao nhi&ecirc;u?</em></p>
      <p>7. It&rsquo;s $800 a month &ndash; And how much is the rent?&ndash;&nbsp;<strong>It&rsquo;s $800 a month&hellip;</strong>&nbsp;plus $50, if you have pets.<br /><em>800 đ&ocirc; la một th&aacute;ng</em></p>
      <p>8. Sign the lease - Sounds good. Let&rsquo;s&nbsp;<strong>sign the lease</strong>.<br /><em>K&yacute; hợp đồng thu&ecirc;</em></p>
      <h3>Topic 02: The Super Shopper</h3>
      <p><strong>Vocabulary</strong></p>
      <p>1. Total /ˈtəʊtl/ (noun) - Your&nbsp;<strong>total</strong>&nbsp;will be seventy two.<br /><em>Tổng cộng,to&agrave;n bộ</em></p>
      <p>2. Expected /ɪkˈspektɪd/ (verb) - That&rsquo;s more than I&nbsp;<strong>expected</strong>. How much is that fancy jelly?<br /><em>Liệu trước, đo&aacute;n trước</em></p>
      <p>3. Fancy /ˈf&aelig;nsi/ (adjective) - How much is that&nbsp;<strong>fancy</strong>&nbsp;jelly?<br /><em>Nhiều m&agrave;u</em></p>
      <p>4. Jelly /ˈdʒeli/ (noun) - How much is that fancy&nbsp;<strong>jelly</strong>?<br /><em>Mứt</em></p>
      <p>5. Organic /ɔːrˈɡ&aelig;nɪk/ (adjective) - The&nbsp;<strong>organic</strong>&nbsp;jelly is sixteen dollars.<br /><em>Hữu cơ</em></p>
      <p>6. Steep /stiːp/ (adjective) - Well, sixteen dollars is a little&nbsp;<strong>steep</strong>&nbsp;for one, but twenty-four dollars for two might be worth it.<br /><em>Qu&aacute; cao</em></p>
      <p>7. Coupons /ˈkuːpɑːn/ (noun) - And I have some&nbsp;<strong>coupons</strong>&hellip;<br /><em>Phiếu giảm gi&aacute;</em></p>
      <p>8. Cash /k&aelig;ʃ/ (noun) - How would you like to pay?&nbsp;<strong>Cash</strong>&nbsp;or credit?<br /><em>Tiền mặt</em></p>
      <p>9. Credit /ˈkredɪt/ (noun) - How would you like to pay? Cash or&nbsp;<strong>credit</strong>?<br /><em>T&iacute;n dụng</em></p>
      <p><strong>Expression</strong></p>
      <p>1. How would you like to pay? - Your total will be seventy two.&nbsp;<strong>How would you like to pay?</strong><br /><em>Chị muốn thanh to&aacute;n như thế n&agrave;o?</em></p>
      <p>2. More than I expected - That&rsquo;s&nbsp;<strong>more than I expected</strong>. How much is that fancy jelly?<br /><em>Nhiều hơn t&ocirc;i nghĩ</em></p>
      <p>3. How much is - That&rsquo;s more than I expected.&nbsp;<strong>How much is</strong>&nbsp;that fancy jelly?<br /><em>Bao nhi&ecirc;u</em></p>
      <p>4. Put that back - Oh no. My daughter likes it, but that&rsquo;s too much. I have to<strong>&nbsp;put that back</strong>.<br /><em>Để c&aacute;i đ&oacute; lại</em></p>
      <p>5. On sale - That&rsquo;s actually&nbsp;<strong>on sale</strong>&nbsp;now, buy one get one half off. Would you like to do that?<br /><em>Đang giảm gi&aacute;</em></p>
      <p>6. Buy one get one half off - That&rsquo;s actually on sale now,&nbsp;<strong>buy one get one half off</strong>. Would you like to do that?<br /><em>Mua 1 tặng 1 nửa</em></p>
      <p>7. Be worth - Well, sixteen dollars is a little steep for one, but twenty-four dollars for two might<strong>&nbsp;be worth</strong>&nbsp;it.<br /><em>Đ&aacute;ng gi&aacute;</em></p>
      <p>8. Would you like to -&nbsp;<strong>Would you like to</strong>&nbsp;use all of those?<br /><em>Chị c&oacute; muốn</em></p>
      <h3>Topic 03: What&rsquo;s Your Style?</h3>
      <p><strong>Vocabulary</strong></p>
      <p>1. Outfit /ˈaʊtfɪt/ (noun) -Oh my gosh, look at this&nbsp;<strong>outfit</strong>. Isn&rsquo;t it great?<br /><em>Bộ đồ, trang phục</em></p>
      <p>2. Tomboy /ˈtɑːmbɔɪ/ (noun) - You don&rsquo;t like the&nbsp;<strong>tomboy</strong>&nbsp;look?<br /><em>C&ocirc; n&agrave;ng đẹp trai, chỉ những c&ocirc; g&aacute;i thể hiện c&aacute; t&iacute;nh giống một cậu con trai</em></p>
      <p>3. Trendy /ˈtrendi/ (adjective) - It&rsquo;s&nbsp;<strong>trendy</strong>, but I think women should dress like women.<br /><em>Hợp thời, theo mốt</em></p>
      <p>4. Respect /rɪˈspekt/ (verb) - I&nbsp;<strong>respect</strong>&nbsp;that. I think it&rsquo;s fun and cool to be a little different sometimes.<br /><em>T&ocirc;n trọng</em></p>
      <p>5. Different /ˈdɪfrənt/ (adjective) - I respect that. I think it&rsquo;s fun and cool to be a little&nbsp;<strong>different</strong>&nbsp;sometimes.<br /><em>Kh&aacute;c, thay đổi</em></p>
      <p>6. Shoulders /ˈʃəʊldərz/ (noun) - You&rsquo;re right. But my&nbsp;<strong>shoulders</strong>&nbsp;are too wide to pull it off.<br /><em>Vai</em></p>
      <p>8. Wish /wɪʃ/ (verb) - No! I&nbsp;<strong>wish</strong>&nbsp;I had your shoulders.<br /><em>Ước muốn</em></p>
      <p>9. Style /staɪl/ (noun) - It sounds like someone is going to have a whole new&nbsp;<strong>style</strong>!<br /><em>Phong c&aacute;ch</em></p>
      <p>10. Tomboy-ish /ˈtɒmbɔɪ-ɪʃ/ (adjective) - Yes. Maybe I&rsquo;ll try on some<strong>&nbsp;tomboy-ish</strong>&nbsp;stuff. Who knows, I might like it.<br /><em>Kiểu tomboy</em></p>
      <p><strong>Expression</strong></p>
      <p>1. Dress like - It&rsquo;s trendy, but I think women should<strong>&nbsp;dress like</strong>&nbsp;women.<br /><em>Mặc giống, mặc như</em></p>
      <p>2. Pull it off - You&rsquo;re right. But my shoulders are too wide to&nbsp;<strong>pull it off</strong>. I look like a man.<br /><em>Mặc c&aacute;i g&igrave; đẹp</em></p>
      <p>3. Go shopping - No! I wish I had your shoulders. Anyway, do you want to&nbsp;<strong>go shopping</strong>?<br /><em>Đi mua sắm</em></p>
      <p>4. Try on - Yes. Maybe I&rsquo;ll&nbsp;<strong>try on</strong>&nbsp;some tomboy-ish stuff. Who knows, I might like it.<br /><em>Thử, mặc thử</em></p>
      <p>5. It sounds like -&nbsp;<strong>It sounds like</strong>&nbsp;someone is going to have a whole new style!<br /><em>Nghe c&oacute; vẻ như</em></p>
      </div>
      </div>
      </div>`
    }
];


/***/ }),

/***/ "C7vD":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/product/lesson/listen-read/listen-read.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div *ngFor=\"let item of lessons\" class=\"card\">\n    <div class=\"card-header\">\n      <button type=\"button\" class=\"btn btn-info text-light\"\n              (click)=\"item.openCollapse = !item.openCollapse\">{{item.title}}\n      </button>\n      <div class=\"card-header-actions\">\n        <button type=\"button\" class=\"btn btn-success\"\n              (click)=\"item.openCollapse = !item.openCollapse\">Try it\n        </button>\n      </div>\n    </div>\n    <div class=\"card-body\"\n         (collapsed)=\"collapsed($event)\"\n         (expanded)=\"expanded($event)\"\n         [collapse]=\"item.openCollapse\">\n      <p [innerHTML]=\"item.description\"></p>\n      <app-listen-read-content [contents]=\"item.contents\"></app-listen-read-content>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "E110":
/*!*************************************************************!*\
  !*** ./src/app/views/product/lesson/chat/chat.component.ts ***!
  \*************************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chat_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chat.component.html */ "x+5p");
/* harmony import */ var _chat_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.component.scss */ "WdlL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let ChatComponent = class ChatComponent {
    constructor() { }
    ngOnInit() {
    }
};
ChatComponent.ctorParameters = () => [];
ChatComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-chat',
        template: _raw_loader_chat_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_chat_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ChatComponent);



/***/ }),

/***/ "IheW":
/*!*******************************************************!*\
  !*** ./node_modules/@angular/common/fesm2015/http.js ***!
  \*******************************************************/
/*! exports provided: HTTP_INTERCEPTORS, HttpBackend, HttpClient, HttpClientJsonpModule, HttpClientModule, HttpClientXsrfModule, HttpErrorResponse, HttpEventType, HttpHandler, HttpHeaderResponse, HttpHeaders, HttpParams, HttpRequest, HttpResponse, HttpResponseBase, HttpUrlEncodingCodec, HttpXhrBackend, HttpXsrfTokenExtractor, JsonpClientBackend, JsonpInterceptor, XhrFactory, ɵHttpInterceptingHandler, ɵangular_packages_common_http_http_a, ɵangular_packages_common_http_http_b, ɵangular_packages_common_http_http_c, ɵangular_packages_common_http_http_d, ɵangular_packages_common_http_http_e, ɵangular_packages_common_http_http_f, ɵangular_packages_common_http_http_g, ɵangular_packages_common_http_http_h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_INTERCEPTORS", function() { return HTTP_INTERCEPTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpBackend", function() { return HttpBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClient", function() { return HttpClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientJsonpModule", function() { return HttpClientJsonpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientModule", function() { return HttpClientModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientXsrfModule", function() { return HttpClientXsrfModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorResponse", function() { return HttpErrorResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpEventType", function() { return HttpEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHandler", function() { return HttpHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHeaderResponse", function() { return HttpHeaderResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHeaders", function() { return HttpHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpParams", function() { return HttpParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequest", function() { return HttpRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponse", function() { return HttpResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponseBase", function() { return HttpResponseBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpUrlEncodingCodec", function() { return HttpUrlEncodingCodec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpXhrBackend", function() { return HttpXhrBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpXsrfTokenExtractor", function() { return HttpXsrfTokenExtractor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpClientBackend", function() { return JsonpClientBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpInterceptor", function() { return JsonpInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XhrFactory", function() { return XhrFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵHttpInterceptingHandler", function() { return HttpInterceptingHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_a", function() { return NoopInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_b", function() { return JsonpCallbackContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_c", function() { return jsonpCallbackContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_d", function() { return BrowserXhr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_e", function() { return XSRF_COOKIE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_f", function() { return XSRF_HEADER_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_g", function() { return HttpXsrfCookieExtractor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_h", function() { return HttpXsrfInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/**
 * @license Angular v11.2.14
 * (c) 2010-2021 Google LLC. https://angular.io/
 * License: MIT
 */






/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Transforms an `HttpRequest` into a stream of `HttpEvent`s, one of which will likely be a
 * `HttpResponse`.
 *
 * `HttpHandler` is injectable. When injected, the handler instance dispatches requests to the
 * first interceptor in the chain, which dispatches to the second, etc, eventually reaching the
 * `HttpBackend`.
 *
 * In an `HttpInterceptor`, the `HttpHandler` parameter is the next interceptor in the chain.
 *
 * @publicApi
 */

class HttpHandler {
}
/**
 * A final `HttpHandler` which will dispatch the request via browser HTTP APIs to a backend.
 *
 * Interceptors sit between the `HttpClient` interface and the `HttpBackend`.
 *
 * When injected, `HttpBackend` dispatches requests directly to the backend, without going
 * through the interceptor chain.
 *
 * @publicApi
 */
class HttpBackend {
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Represents the header configuration options for an HTTP request.
 * Instances are immutable. Modifying methods return a cloned
 * instance with the change. The original object is never changed.
 *
 * @publicApi
 */
class HttpHeaders {
    /**  Constructs a new HTTP header object with the given values.*/
    constructor(headers) {
        /**
         * Internal map of lowercased header names to the normalized
         * form of the name (the form seen first).
         */
        this.normalizedNames = new Map();
        /**
         * Queued updates to be materialized the next initialization.
         */
        this.lazyUpdate = null;
        if (!headers) {
            this.headers = new Map();
        }
        else if (typeof headers === 'string') {
            this.lazyInit = () => {
                this.headers = new Map();
                headers.split('\n').forEach(line => {
                    const index = line.indexOf(':');
                    if (index > 0) {
                        const name = line.slice(0, index);
                        const key = name.toLowerCase();
                        const value = line.slice(index + 1).trim();
                        this.maybeSetNormalizedName(name, key);
                        if (this.headers.has(key)) {
                            this.headers.get(key).push(value);
                        }
                        else {
                            this.headers.set(key, [value]);
                        }
                    }
                });
            };
        }
        else {
            this.lazyInit = () => {
                this.headers = new Map();
                Object.keys(headers).forEach(name => {
                    let values = headers[name];
                    const key = name.toLowerCase();
                    if (typeof values === 'string') {
                        values = [values];
                    }
                    if (values.length > 0) {
                        this.headers.set(key, values);
                        this.maybeSetNormalizedName(name, key);
                    }
                });
            };
        }
    }
    /**
     * Checks for existence of a given header.
     *
     * @param name The header name to check for existence.
     *
     * @returns True if the header exists, false otherwise.
     */
    has(name) {
        this.init();
        return this.headers.has(name.toLowerCase());
    }
    /**
     * Retrieves the first value of a given header.
     *
     * @param name The header name.
     *
     * @returns The value string if the header exists, null otherwise
     */
    get(name) {
        this.init();
        const values = this.headers.get(name.toLowerCase());
        return values && values.length > 0 ? values[0] : null;
    }
    /**
     * Retrieves the names of the headers.
     *
     * @returns A list of header names.
     */
    keys() {
        this.init();
        return Array.from(this.normalizedNames.values());
    }
    /**
     * Retrieves a list of values for a given header.
     *
     * @param name The header name from which to retrieve values.
     *
     * @returns A string of values if the header exists, null otherwise.
     */
    getAll(name) {
        this.init();
        return this.headers.get(name.toLowerCase()) || null;
    }
    /**
     * Appends a new value to the existing set of values for a header
     * and returns them in a clone of the original instance.
     *
     * @param name The header name for which to append the values.
     * @param value The value to append.
     *
     * @returns A clone of the HTTP headers object with the value appended to the given header.
     */
    append(name, value) {
        return this.clone({ name, value, op: 'a' });
    }
    /**
     * Sets or modifies a value for a given header in a clone of the original instance.
     * If the header already exists, its value is replaced with the given value
     * in the returned object.
     *
     * @param name The header name.
     * @param value The value or values to set or overide for the given header.
     *
     * @returns A clone of the HTTP headers object with the newly set header value.
     */
    set(name, value) {
        return this.clone({ name, value, op: 's' });
    }
    /**
     * Deletes values for a given header in a clone of the original instance.
     *
     * @param name The header name.
     * @param value The value or values to delete for the given header.
     *
     * @returns A clone of the HTTP headers object with the given value deleted.
     */
    delete(name, value) {
        return this.clone({ name, value, op: 'd' });
    }
    maybeSetNormalizedName(name, lcName) {
        if (!this.normalizedNames.has(lcName)) {
            this.normalizedNames.set(lcName, name);
        }
    }
    init() {
        if (!!this.lazyInit) {
            if (this.lazyInit instanceof HttpHeaders) {
                this.copyFrom(this.lazyInit);
            }
            else {
                this.lazyInit();
            }
            this.lazyInit = null;
            if (!!this.lazyUpdate) {
                this.lazyUpdate.forEach(update => this.applyUpdate(update));
                this.lazyUpdate = null;
            }
        }
    }
    copyFrom(other) {
        other.init();
        Array.from(other.headers.keys()).forEach(key => {
            this.headers.set(key, other.headers.get(key));
            this.normalizedNames.set(key, other.normalizedNames.get(key));
        });
    }
    clone(update) {
        const clone = new HttpHeaders();
        clone.lazyInit =
            (!!this.lazyInit && this.lazyInit instanceof HttpHeaders) ? this.lazyInit : this;
        clone.lazyUpdate = (this.lazyUpdate || []).concat([update]);
        return clone;
    }
    applyUpdate(update) {
        const key = update.name.toLowerCase();
        switch (update.op) {
            case 'a':
            case 's':
                let value = update.value;
                if (typeof value === 'string') {
                    value = [value];
                }
                if (value.length === 0) {
                    return;
                }
                this.maybeSetNormalizedName(update.name, key);
                const base = (update.op === 'a' ? this.headers.get(key) : undefined) || [];
                base.push(...value);
                this.headers.set(key, base);
                break;
            case 'd':
                const toDelete = update.value;
                if (!toDelete) {
                    this.headers.delete(key);
                    this.normalizedNames.delete(key);
                }
                else {
                    let existing = this.headers.get(key);
                    if (!existing) {
                        return;
                    }
                    existing = existing.filter(value => toDelete.indexOf(value) === -1);
                    if (existing.length === 0) {
                        this.headers.delete(key);
                        this.normalizedNames.delete(key);
                    }
                    else {
                        this.headers.set(key, existing);
                    }
                }
                break;
        }
    }
    /**
     * @internal
     */
    forEach(fn) {
        this.init();
        Array.from(this.normalizedNames.keys())
            .forEach(key => fn(this.normalizedNames.get(key), this.headers.get(key)));
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Provides encoding and decoding of URL parameter and query-string values.
 *
 * Serializes and parses URL parameter keys and values to encode and decode them.
 * If you pass URL query parameters without encoding,
 * the query parameters can be misinterpreted at the receiving end.
 *
 *
 * @publicApi
 */
class HttpUrlEncodingCodec {
    /**
     * Encodes a key name for a URL parameter or query-string.
     * @param key The key name.
     * @returns The encoded key name.
     */
    encodeKey(key) {
        return standardEncoding(key);
    }
    /**
     * Encodes the value of a URL parameter or query-string.
     * @param value The value.
     * @returns The encoded value.
     */
    encodeValue(value) {
        return standardEncoding(value);
    }
    /**
     * Decodes an encoded URL parameter or query-string key.
     * @param key The encoded key name.
     * @returns The decoded key name.
     */
    decodeKey(key) {
        return decodeURIComponent(key);
    }
    /**
     * Decodes an encoded URL parameter or query-string value.
     * @param value The encoded value.
     * @returns The decoded value.
     */
    decodeValue(value) {
        return decodeURIComponent(value);
    }
}
function paramParser(rawParams, codec) {
    const map = new Map();
    if (rawParams.length > 0) {
        // The `window.location.search` can be used while creating an instance of the `HttpParams` class
        // (e.g. `new HttpParams({ fromString: window.location.search })`). The `window.location.search`
        // may start with the `?` char, so we strip it if it's present.
        const params = rawParams.replace(/^\?/, '').split('&');
        params.forEach((param) => {
            const eqIdx = param.indexOf('=');
            const [key, val] = eqIdx == -1 ?
                [codec.decodeKey(param), ''] :
                [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))];
            const list = map.get(key) || [];
            list.push(val);
            map.set(key, list);
        });
    }
    return map;
}
function standardEncoding(v) {
    return encodeURIComponent(v)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/gi, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%2B/gi, '+')
        .replace(/%3D/gi, '=')
        .replace(/%3F/gi, '?')
        .replace(/%2F/gi, '/');
}
/**
 * An HTTP request/response body that represents serialized parameters,
 * per the MIME type `application/x-www-form-urlencoded`.
 *
 * This class is immutable; all mutation operations return a new instance.
 *
 * @publicApi
 */
class HttpParams {
    constructor(options = {}) {
        this.updates = null;
        this.cloneFrom = null;
        this.encoder = options.encoder || new HttpUrlEncodingCodec();
        if (!!options.fromString) {
            if (!!options.fromObject) {
                throw new Error(`Cannot specify both fromString and fromObject.`);
            }
            this.map = paramParser(options.fromString, this.encoder);
        }
        else if (!!options.fromObject) {
            this.map = new Map();
            Object.keys(options.fromObject).forEach(key => {
                const value = options.fromObject[key];
                this.map.set(key, Array.isArray(value) ? value : [value]);
            });
        }
        else {
            this.map = null;
        }
    }
    /**
     * Reports whether the body includes one or more values for a given parameter.
     * @param param The parameter name.
     * @returns True if the parameter has one or more values,
     * false if it has no value or is not present.
     */
    has(param) {
        this.init();
        return this.map.has(param);
    }
    /**
     * Retrieves the first value for a parameter.
     * @param param The parameter name.
     * @returns The first value of the given parameter,
     * or `null` if the parameter is not present.
     */
    get(param) {
        this.init();
        const res = this.map.get(param);
        return !!res ? res[0] : null;
    }
    /**
     * Retrieves all values for a  parameter.
     * @param param The parameter name.
     * @returns All values in a string array,
     * or `null` if the parameter not present.
     */
    getAll(param) {
        this.init();
        return this.map.get(param) || null;
    }
    /**
     * Retrieves all the parameters for this body.
     * @returns The parameter names in a string array.
     */
    keys() {
        this.init();
        return Array.from(this.map.keys());
    }
    /**
     * Appends a new value to existing values for a parameter.
     * @param param The parameter name.
     * @param value The new value to add.
     * @return A new body with the appended value.
     */
    append(param, value) {
        return this.clone({ param, value, op: 'a' });
    }
    /**
     * Constructs a new body with appended values for the given parameter name.
     * @param params parameters and values
     * @return A new body with the new value.
     */
    appendAll(params) {
        const updates = [];
        Object.keys(params).forEach(param => {
            const value = params[param];
            if (Array.isArray(value)) {
                value.forEach(_value => {
                    updates.push({ param, value: _value, op: 'a' });
                });
            }
            else {
                updates.push({ param, value, op: 'a' });
            }
        });
        return this.clone(updates);
    }
    /**
     * Replaces the value for a parameter.
     * @param param The parameter name.
     * @param value The new value.
     * @return A new body with the new value.
     */
    set(param, value) {
        return this.clone({ param, value, op: 's' });
    }
    /**
     * Removes a given value or all values from a parameter.
     * @param param The parameter name.
     * @param value The value to remove, if provided.
     * @return A new body with the given value removed, or with all values
     * removed if no value is specified.
     */
    delete(param, value) {
        return this.clone({ param, value, op: 'd' });
    }
    /**
     * Serializes the body to an encoded string, where key-value pairs (separated by `=`) are
     * separated by `&`s.
     */
    toString() {
        this.init();
        return this.keys()
            .map(key => {
            const eKey = this.encoder.encodeKey(key);
            // `a: ['1']` produces `'a=1'`
            // `b: []` produces `''`
            // `c: ['1', '2']` produces `'c=1&c=2'`
            return this.map.get(key).map(value => eKey + '=' + this.encoder.encodeValue(value))
                .join('&');
        })
            // filter out empty values because `b: []` produces `''`
            // which results in `a=1&&c=1&c=2` instead of `a=1&c=1&c=2` if we don't
            .filter(param => param !== '')
            .join('&');
    }
    clone(update) {
        const clone = new HttpParams({ encoder: this.encoder });
        clone.cloneFrom = this.cloneFrom || this;
        clone.updates = (this.updates || []).concat(update);
        return clone;
    }
    init() {
        if (this.map === null) {
            this.map = new Map();
        }
        if (this.cloneFrom !== null) {
            this.cloneFrom.init();
            this.cloneFrom.keys().forEach(key => this.map.set(key, this.cloneFrom.map.get(key)));
            this.updates.forEach(update => {
                switch (update.op) {
                    case 'a':
                    case 's':
                        const base = (update.op === 'a' ? this.map.get(update.param) : undefined) || [];
                        base.push(update.value);
                        this.map.set(update.param, base);
                        break;
                    case 'd':
                        if (update.value !== undefined) {
                            let base = this.map.get(update.param) || [];
                            const idx = base.indexOf(update.value);
                            if (idx !== -1) {
                                base.splice(idx, 1);
                            }
                            if (base.length > 0) {
                                this.map.set(update.param, base);
                            }
                            else {
                                this.map.delete(update.param);
                            }
                        }
                        else {
                            this.map.delete(update.param);
                            break;
                        }
                }
            });
            this.cloneFrom = this.updates = null;
        }
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Determine whether the given HTTP method may include a body.
 */
function mightHaveBody(method) {
    switch (method) {
        case 'DELETE':
        case 'GET':
        case 'HEAD':
        case 'OPTIONS':
        case 'JSONP':
            return false;
        default:
            return true;
    }
}
/**
 * Safely assert whether the given value is an ArrayBuffer.
 *
 * In some execution environments ArrayBuffer is not defined.
 */
function isArrayBuffer(value) {
    return typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer;
}
/**
 * Safely assert whether the given value is a Blob.
 *
 * In some execution environments Blob is not defined.
 */
function isBlob(value) {
    return typeof Blob !== 'undefined' && value instanceof Blob;
}
/**
 * Safely assert whether the given value is a FormData instance.
 *
 * In some execution environments FormData is not defined.
 */
function isFormData(value) {
    return typeof FormData !== 'undefined' && value instanceof FormData;
}
/**
 * An outgoing HTTP request with an optional typed body.
 *
 * `HttpRequest` represents an outgoing request, including URL, method,
 * headers, body, and other request configuration options. Instances should be
 * assumed to be immutable. To modify a `HttpRequest`, the `clone`
 * method should be used.
 *
 * @publicApi
 */
class HttpRequest {
    constructor(method, url, third, fourth) {
        this.url = url;
        /**
         * The request body, or `null` if one isn't set.
         *
         * Bodies are not enforced to be immutable, as they can include a reference to any
         * user-defined data type. However, interceptors should take care to preserve
         * idempotence by treating them as such.
         */
        this.body = null;
        /**
         * Whether this request should be made in a way that exposes progress events.
         *
         * Progress events are expensive (change detection runs on each event) and so
         * they should only be requested if the consumer intends to monitor them.
         */
        this.reportProgress = false;
        /**
         * Whether this request should be sent with outgoing credentials (cookies).
         */
        this.withCredentials = false;
        /**
         * The expected response type of the server.
         *
         * This is used to parse the response appropriately before returning it to
         * the requestee.
         */
        this.responseType = 'json';
        this.method = method.toUpperCase();
        // Next, need to figure out which argument holds the HttpRequestInit
        // options, if any.
        let options;
        // Check whether a body argument is expected. The only valid way to omit
        // the body argument is to use a known no-body method like GET.
        if (mightHaveBody(this.method) || !!fourth) {
            // Body is the third argument, options are the fourth.
            this.body = (third !== undefined) ? third : null;
            options = fourth;
        }
        else {
            // No body required, options are the third argument. The body stays null.
            options = third;
        }
        // If options have been passed, interpret them.
        if (options) {
            // Normalize reportProgress and withCredentials.
            this.reportProgress = !!options.reportProgress;
            this.withCredentials = !!options.withCredentials;
            // Override default response type of 'json' if one is provided.
            if (!!options.responseType) {
                this.responseType = options.responseType;
            }
            // Override headers if they're provided.
            if (!!options.headers) {
                this.headers = options.headers;
            }
            if (!!options.params) {
                this.params = options.params;
            }
        }
        // If no headers have been passed in, construct a new HttpHeaders instance.
        if (!this.headers) {
            this.headers = new HttpHeaders();
        }
        // If no parameters have been passed in, construct a new HttpUrlEncodedParams instance.
        if (!this.params) {
            this.params = new HttpParams();
            this.urlWithParams = url;
        }
        else {
            // Encode the parameters to a string in preparation for inclusion in the URL.
            const params = this.params.toString();
            if (params.length === 0) {
                // No parameters, the visible URL is just the URL given at creation time.
                this.urlWithParams = url;
            }
            else {
                // Does the URL already have query parameters? Look for '?'.
                const qIdx = url.indexOf('?');
                // There are 3 cases to handle:
                // 1) No existing parameters -> append '?' followed by params.
                // 2) '?' exists and is followed by existing query string ->
                //    append '&' followed by params.
                // 3) '?' exists at the end of the url -> append params directly.
                // This basically amounts to determining the character, if any, with
                // which to join the URL and parameters.
                const sep = qIdx === -1 ? '?' : (qIdx < url.length - 1 ? '&' : '');
                this.urlWithParams = url + sep + params;
            }
        }
    }
    /**
     * Transform the free-form body into a serialized format suitable for
     * transmission to the server.
     */
    serializeBody() {
        // If no body is present, no need to serialize it.
        if (this.body === null) {
            return null;
        }
        // Check whether the body is already in a serialized form. If so,
        // it can just be returned directly.
        if (isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) ||
            typeof this.body === 'string') {
            return this.body;
        }
        // Check whether the body is an instance of HttpUrlEncodedParams.
        if (this.body instanceof HttpParams) {
            return this.body.toString();
        }
        // Check whether the body is an object or array, and serialize with JSON if so.
        if (typeof this.body === 'object' || typeof this.body === 'boolean' ||
            Array.isArray(this.body)) {
            return JSON.stringify(this.body);
        }
        // Fall back on toString() for everything else.
        return this.body.toString();
    }
    /**
     * Examine the body and attempt to infer an appropriate MIME type
     * for it.
     *
     * If no such type can be inferred, this method will return `null`.
     */
    detectContentTypeHeader() {
        // An empty body has no content type.
        if (this.body === null) {
            return null;
        }
        // FormData bodies rely on the browser's content type assignment.
        if (isFormData(this.body)) {
            return null;
        }
        // Blobs usually have their own content type. If it doesn't, then
        // no type can be inferred.
        if (isBlob(this.body)) {
            return this.body.type || null;
        }
        // Array buffers have unknown contents and thus no type can be inferred.
        if (isArrayBuffer(this.body)) {
            return null;
        }
        // Technically, strings could be a form of JSON data, but it's safe enough
        // to assume they're plain strings.
        if (typeof this.body === 'string') {
            return 'text/plain';
        }
        // `HttpUrlEncodedParams` has its own content-type.
        if (this.body instanceof HttpParams) {
            return 'application/x-www-form-urlencoded;charset=UTF-8';
        }
        // Arrays, objects, boolean and numbers will be encoded as JSON.
        if (typeof this.body === 'object' || typeof this.body === 'number' ||
            typeof this.body === 'boolean') {
            return 'application/json';
        }
        // No type could be inferred.
        return null;
    }
    clone(update = {}) {
        // For method, url, and responseType, take the current value unless
        // it is overridden in the update hash.
        const method = update.method || this.method;
        const url = update.url || this.url;
        const responseType = update.responseType || this.responseType;
        // The body is somewhat special - a `null` value in update.body means
        // whatever current body is present is being overridden with an empty
        // body, whereas an `undefined` value in update.body implies no
        // override.
        const body = (update.body !== undefined) ? update.body : this.body;
        // Carefully handle the boolean options to differentiate between
        // `false` and `undefined` in the update args.
        const withCredentials = (update.withCredentials !== undefined) ? update.withCredentials : this.withCredentials;
        const reportProgress = (update.reportProgress !== undefined) ? update.reportProgress : this.reportProgress;
        // Headers and params may be appended to if `setHeaders` or
        // `setParams` are used.
        let headers = update.headers || this.headers;
        let params = update.params || this.params;
        // Check whether the caller has asked to add headers.
        if (update.setHeaders !== undefined) {
            // Set every requested header.
            headers =
                Object.keys(update.setHeaders)
                    .reduce((headers, name) => headers.set(name, update.setHeaders[name]), headers);
        }
        // Check whether the caller has asked to set params.
        if (update.setParams) {
            // Set every requested param.
            params = Object.keys(update.setParams)
                .reduce((params, param) => params.set(param, update.setParams[param]), params);
        }
        // Finally, construct the new HttpRequest using the pieces from above.
        return new HttpRequest(method, url, body, {
            params,
            headers,
            reportProgress,
            responseType,
            withCredentials,
        });
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Type enumeration for the different kinds of `HttpEvent`.
 *
 * @publicApi
 */
var HttpEventType;
(function (HttpEventType) {
    /**
     * The request was sent out over the wire.
     */
    HttpEventType[HttpEventType["Sent"] = 0] = "Sent";
    /**
     * An upload progress event was received.
     */
    HttpEventType[HttpEventType["UploadProgress"] = 1] = "UploadProgress";
    /**
     * The response status code and headers were received.
     */
    HttpEventType[HttpEventType["ResponseHeader"] = 2] = "ResponseHeader";
    /**
     * A download progress event was received.
     */
    HttpEventType[HttpEventType["DownloadProgress"] = 3] = "DownloadProgress";
    /**
     * The full response including the body was received.
     */
    HttpEventType[HttpEventType["Response"] = 4] = "Response";
    /**
     * A custom event from an interceptor or a backend.
     */
    HttpEventType[HttpEventType["User"] = 5] = "User";
})(HttpEventType || (HttpEventType = {}));
/**
 * Base class for both `HttpResponse` and `HttpHeaderResponse`.
 *
 * @publicApi
 */
class HttpResponseBase {
    /**
     * Super-constructor for all responses.
     *
     * The single parameter accepted is an initialization hash. Any properties
     * of the response passed there will override the default values.
     */
    constructor(init, defaultStatus = 200, defaultStatusText = 'OK') {
        // If the hash has values passed, use them to initialize the response.
        // Otherwise use the default values.
        this.headers = init.headers || new HttpHeaders();
        this.status = init.status !== undefined ? init.status : defaultStatus;
        this.statusText = init.statusText || defaultStatusText;
        this.url = init.url || null;
        // Cache the ok value to avoid defining a getter.
        this.ok = this.status >= 200 && this.status < 300;
    }
}
/**
 * A partial HTTP response which only includes the status and header data,
 * but no response body.
 *
 * `HttpHeaderResponse` is a `HttpEvent` available on the response
 * event stream, only when progress events are requested.
 *
 * @publicApi
 */
class HttpHeaderResponse extends HttpResponseBase {
    /**
     * Create a new `HttpHeaderResponse` with the given parameters.
     */
    constructor(init = {}) {
        super(init);
        this.type = HttpEventType.ResponseHeader;
    }
    /**
     * Copy this `HttpHeaderResponse`, overriding its contents with the
     * given parameter hash.
     */
    clone(update = {}) {
        // Perform a straightforward initialization of the new HttpHeaderResponse,
        // overriding the current parameters with new ones if given.
        return new HttpHeaderResponse({
            headers: update.headers || this.headers,
            status: update.status !== undefined ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined,
        });
    }
}
/**
 * A full HTTP response, including a typed response body (which may be `null`
 * if one was not returned).
 *
 * `HttpResponse` is a `HttpEvent` available on the response event
 * stream.
 *
 * @publicApi
 */
class HttpResponse extends HttpResponseBase {
    /**
     * Construct a new `HttpResponse`.
     */
    constructor(init = {}) {
        super(init);
        this.type = HttpEventType.Response;
        this.body = init.body !== undefined ? init.body : null;
    }
    clone(update = {}) {
        return new HttpResponse({
            body: (update.body !== undefined) ? update.body : this.body,
            headers: update.headers || this.headers,
            status: (update.status !== undefined) ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined,
        });
    }
}
/**
 * A response that represents an error or failure, either from a
 * non-successful HTTP status, an error while executing the request,
 * or some other failure which occurred during the parsing of the response.
 *
 * Any error returned on the `Observable` response stream will be
 * wrapped in an `HttpErrorResponse` to provide additional context about
 * the state of the HTTP layer when the error occurred. The error property
 * will contain either a wrapped Error object or the error response returned
 * from the server.
 *
 * @publicApi
 */
class HttpErrorResponse extends HttpResponseBase {
    constructor(init) {
        // Initialize with a default status of 0 / Unknown Error.
        super(init, 0, 'Unknown Error');
        this.name = 'HttpErrorResponse';
        /**
         * Errors are never okay, even when the status code is in the 2xx success range.
         */
        this.ok = false;
        // If the response was successful, then this was a parse error. Otherwise, it was
        // a protocol-level failure of some sort. Either the request failed in transit
        // or the server returned an unsuccessful status code.
        if (this.status >= 200 && this.status < 300) {
            this.message = `Http failure during parsing for ${init.url || '(unknown url)'}`;
        }
        else {
            this.message = `Http failure response for ${init.url || '(unknown url)'}: ${init.status} ${init.statusText}`;
        }
        this.error = init.error || null;
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Constructs an instance of `HttpRequestOptions<T>` from a source `HttpMethodOptions` and
 * the given `body`. This function clones the object and adds the body.
 *
 * Note that the `responseType` *options* value is a String that identifies the
 * single data type of the response.
 * A single overload version of the method handles each response type.
 * The value of `responseType` cannot be a union, as the combined signature could imply.
 *
 */
function addBody(options, body) {
    return {
        body,
        headers: options.headers,
        observe: options.observe,
        params: options.params,
        reportProgress: options.reportProgress,
        responseType: options.responseType,
        withCredentials: options.withCredentials,
    };
}
/**
 * Performs HTTP requests.
 * This service is available as an injectable class, with methods to perform HTTP requests.
 * Each request method has multiple signatures, and the return type varies based on
 * the signature that is called (mainly the values of `observe` and `responseType`).
 *
 * Note that the `responseType` *options* value is a String that identifies the
 * single data type of the response.
 * A single overload version of the method handles each response type.
 * The value of `responseType` cannot be a union, as the combined signature could imply.

 *
 * @usageNotes
 * Sample HTTP requests for the [Tour of Heroes](/tutorial/toh-pt0) application.
 *
 * ### HTTP Request Example
 *
 * ```
 *  // GET heroes whose name contains search term
 * searchHeroes(term: string): observable<Hero[]>{
 *
 *  const params = new HttpParams({fromString: 'name=term'});
 *    return this.httpClient.request('GET', this.heroesUrl, {responseType:'json', params});
 * }
 * ```
 *
 * Alternatively, the parameter string can be used without invoking HttpParams
 * by directly joining to the URL.
 * ```
 * this.httpClient.request('GET', this.heroesUrl + '?' + 'name=term', {responseType:'json'});
 * ```
 *
 *
 * ### JSONP Example
 * ```
 * requestJsonp(url, callback = 'callback') {
 *  return this.httpClient.jsonp(this.heroesURL, callback);
 * }
 * ```
 *
 * ### PATCH Example
 * ```
 * // PATCH one of the heroes' name
 * patchHero (id: number, heroName: string): Observable<{}> {
 * const url = `${this.heroesUrl}/${id}`;   // PATCH api/heroes/42
 *  return this.httpClient.patch(url, {name: heroName}, httpOptions)
 *    .pipe(catchError(this.handleError('patchHero')));
 * }
 * ```
 *
 * @see [HTTP Guide](guide/http)
 * @see [HTTP Request](api/common/http/HttpRequest)
 *
 * @publicApi
 */
class HttpClient {
    constructor(handler) {
        this.handler = handler;
    }
    /**
     * Constructs an observable for a generic HTTP request that, when subscribed,
     * fires the request through the chain of registered interceptors and on to the
     * server.
     *
     * You can pass an `HttpRequest` directly as the only parameter. In this case,
     * the call returns an observable of the raw `HttpEvent` stream.
     *
     * Alternatively you can pass an HTTP method as the first parameter,
     * a URL string as the second, and an options hash containing the request body as the third.
     * See `addBody()`. In this case, the specified `responseType` and `observe` options determine the
     * type of returned observable.
     *   * The `responseType` value determines how a successful response body is parsed.
     *   * If `responseType` is the default `json`, you can pass a type interface for the resulting
     * object as a type parameter to the call.
     *
     * The `observe` value determines the return type, according to what you are interested in
     * observing.
     *   * An `observe` value of events returns an observable of the raw `HttpEvent` stream, including
     * progress events by default.
     *   * An `observe` value of response returns an observable of `HttpResponse<T>`,
     * where the `T` parameter depends on the `responseType` and any optionally provided type
     * parameter.
     *   * An `observe` value of body returns an observable of `<T>` with the same `T` body type.
     *
     */
    request(first, url, options = {}) {
        let req;
        // First, check whether the primary argument is an instance of `HttpRequest`.
        if (first instanceof HttpRequest) {
            // It is. The other arguments must be undefined (per the signatures) and can be
            // ignored.
            req = first;
        }
        else {
            // It's a string, so it represents a URL. Construct a request based on it,
            // and incorporate the remaining arguments (assuming `GET` unless a method is
            // provided.
            // Figure out the headers.
            let headers = undefined;
            if (options.headers instanceof HttpHeaders) {
                headers = options.headers;
            }
            else {
                headers = new HttpHeaders(options.headers);
            }
            // Sort out parameters.
            let params = undefined;
            if (!!options.params) {
                if (options.params instanceof HttpParams) {
                    params = options.params;
                }
                else {
                    params = new HttpParams({ fromObject: options.params });
                }
            }
            // Construct the request.
            req = new HttpRequest(first, url, (options.body !== undefined ? options.body : null), {
                headers,
                params,
                reportProgress: options.reportProgress,
                // By default, JSON is assumed to be returned for all calls.
                responseType: options.responseType || 'json',
                withCredentials: options.withCredentials,
            });
        }
        // Start with an Observable.of() the initial request, and run the handler (which
        // includes all interceptors) inside a concatMap(). This way, the handler runs
        // inside an Observable chain, which causes interceptors to be re-run on every
        // subscription (this also makes retries re-run the handler, including interceptors).
        const events$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])((req) => this.handler.handle(req)));
        // If coming via the API signature which accepts a previously constructed HttpRequest,
        // the only option is to get the event stream. Otherwise, return the event stream if
        // that is what was requested.
        if (first instanceof HttpRequest || options.observe === 'events') {
            return events$;
        }
        // The requested stream contains either the full response or the body. In either
        // case, the first step is to filter the event stream to extract a stream of
        // responses(s).
        const res$ = events$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((event) => event instanceof HttpResponse));
        // Decide which stream to return.
        switch (options.observe || 'body') {
            case 'body':
                // The requested stream is the body. Map the response stream to the response
                // body. This could be done more simply, but a misbehaving interceptor might
                // transform the response body into a different format and ignore the requested
                // responseType. Guard against this by validating that the response is of the
                // requested type.
                switch (req.responseType) {
                    case 'arraybuffer':
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
                            // Validate that the body is an ArrayBuffer.
                            if (res.body !== null && !(res.body instanceof ArrayBuffer)) {
                                throw new Error('Response is not an ArrayBuffer.');
                            }
                            return res.body;
                        }));
                    case 'blob':
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
                            // Validate that the body is a Blob.
                            if (res.body !== null && !(res.body instanceof Blob)) {
                                throw new Error('Response is not a Blob.');
                            }
                            return res.body;
                        }));
                    case 'text':
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
                            // Validate that the body is a string.
                            if (res.body !== null && typeof res.body !== 'string') {
                                throw new Error('Response is not a string.');
                            }
                            return res.body;
                        }));
                    case 'json':
                    default:
                        // No validation needed for JSON responses, as they can be of any type.
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => res.body));
                }
            case 'response':
                // The response stream was requested directly, so return it.
                return res$;
            default:
                // Guard against new future observe types being added.
                throw new Error(`Unreachable: unhandled observe type ${options.observe}}`);
        }
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `DELETE` request to execute on the server. See the individual overloads for
     * details on the return type.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     */
    delete(url, options = {}) {
        return this.request('DELETE', url, options);
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `GET` request to execute on the server. See the individual overloads for
     * details on the return type.
     */
    get(url, options = {}) {
        return this.request('GET', url, options);
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `HEAD` request to execute on the server. The `HEAD` method returns
     * meta information about the resource without transferring the
     * resource itself. See the individual overloads for
     * details on the return type.
     */
    head(url, options = {}) {
        return this.request('HEAD', url, options);
    }
    /**
     * Constructs an `Observable` that, when subscribed, causes a request with the special method
     * `JSONP` to be dispatched via the interceptor pipeline.
     * The [JSONP pattern](https://en.wikipedia.org/wiki/JSONP) works around limitations of certain
     * API endpoints that don't support newer,
     * and preferable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) protocol.
     * JSONP treats the endpoint API as a JavaScript file and tricks the browser to process the
     * requests even if the API endpoint is not located on the same domain (origin) as the client-side
     * application making the request.
     * The endpoint API must support JSONP callback for JSONP requests to work.
     * The resource API returns the JSON response wrapped in a callback function.
     * You can pass the callback function name as one of the query parameters.
     * Note that JSONP requests can only be used with `GET` requests.
     *
     * @param url The resource URL.
     * @param callbackParam The callback function name.
     *
     */
    jsonp(url, callbackParam) {
        return this.request('JSONP', url, {
            params: new HttpParams().append(callbackParam, 'JSONP_CALLBACK'),
            observe: 'body',
            responseType: 'json',
        });
    }
    /**
     * Constructs an `Observable` that, when subscribed, causes the configured
     * `OPTIONS` request to execute on the server. This method allows the client
     * to determine the supported HTTP methods and other capabilites of an endpoint,
     * without implying a resource action. See the individual overloads for
     * details on the return type.
     */
    options(url, options = {}) {
        return this.request('OPTIONS', url, options);
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `PATCH` request to execute on the server. See the individual overloads for
     * details on the return type.
     */
    patch(url, body, options = {}) {
        return this.request('PATCH', url, addBody(options, body));
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `POST` request to execute on the server. The server responds with the location of
     * the replaced resource. See the individual overloads for
     * details on the return type.
     */
    post(url, body, options = {}) {
        return this.request('POST', url, addBody(options, body));
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `PUT` request to execute on the server. The `PUT` method replaces an existing resource
     * with a new set of values.
     * See the individual overloads for details on the return type.
     */
    put(url, body, options = {}) {
        return this.request('PUT', url, addBody(options, body));
    }
}
HttpClient.ɵfac = function HttpClient_Factory(t) { return new (t || HttpClient)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](HttpHandler)); };
HttpClient.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpClient, factory: HttpClient.ɵfac });
HttpClient.ctorParameters = () => [
    { type: HttpHandler }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpClient, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: HttpHandler }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * `HttpHandler` which applies an `HttpInterceptor` to an `HttpRequest`.
 *
 *
 */
class HttpInterceptorHandler {
    constructor(next, interceptor) {
        this.next = next;
        this.interceptor = interceptor;
    }
    handle(req) {
        return this.interceptor.intercept(req, this.next);
    }
}
/**
 * A multi-provider token that represents the array of registered
 * `HttpInterceptor` objects.
 *
 * @publicApi
 */
const HTTP_INTERCEPTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('HTTP_INTERCEPTORS');
class NoopInterceptor {
    intercept(req, next) {
        return next.handle(req);
    }
}
NoopInterceptor.ɵfac = function NoopInterceptor_Factory(t) { return new (t || NoopInterceptor)(); };
NoopInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NoopInterceptor, factory: NoopInterceptor.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoopInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Every request made through JSONP needs a callback name that's unique across the
// whole page. Each request is assigned an id and the callback name is constructed
// from that. The next id to be assigned is tracked in a global variable here that
// is shared among all applications on the page.
let nextRequestId = 0;
// Error text given when a JSONP script is injected, but doesn't invoke the callback
// passed in its URL.
const JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
// Error text given when a request is passed to the JsonpClientBackend that doesn't
// have a request method JSONP.
const JSONP_ERR_WRONG_METHOD = 'JSONP requests must use JSONP request method.';
const JSONP_ERR_WRONG_RESPONSE_TYPE = 'JSONP requests must use Json response type.';
/**
 * DI token/abstract type representing a map of JSONP callbacks.
 *
 * In the browser, this should always be the `window` object.
 *
 *
 */
class JsonpCallbackContext {
}
/**
 * Processes an `HttpRequest` with the JSONP method,
 * by performing JSONP style requests.
 * @see `HttpHandler`
 * @see `HttpXhrBackend`
 *
 * @publicApi
 */
class JsonpClientBackend {
    constructor(callbackMap, document) {
        this.callbackMap = callbackMap;
        this.document = document;
        /**
         * A resolved promise that can be used to schedule microtasks in the event handlers.
         */
        this.resolvedPromise = Promise.resolve();
    }
    /**
     * Get the name of the next callback method, by incrementing the global `nextRequestId`.
     */
    nextCallback() {
        return `ng_jsonp_callback_${nextRequestId++}`;
    }
    /**
     * Processes a JSONP request and returns an event stream of the results.
     * @param req The request object.
     * @returns An observable of the response events.
     *
     */
    handle(req) {
        // Firstly, check both the method and response type. If either doesn't match
        // then the request was improperly routed here and cannot be handled.
        if (req.method !== 'JSONP') {
            throw new Error(JSONP_ERR_WRONG_METHOD);
        }
        else if (req.responseType !== 'json') {
            throw new Error(JSONP_ERR_WRONG_RESPONSE_TYPE);
        }
        // Everything else happens inside the Observable boundary.
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            // The first step to make a request is to generate the callback name, and replace the
            // callback placeholder in the URL with the name. Care has to be taken here to ensure
            // a trailing &, if matched, gets inserted back into the URL in the correct place.
            const callback = this.nextCallback();
            const url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, `=${callback}$1`);
            // Construct the <script> tag and point it at the URL.
            const node = this.document.createElement('script');
            node.src = url;
            // A JSONP request requires waiting for multiple callbacks. These variables
            // are closed over and track state across those callbacks.
            // The response object, if one has been received, or null otherwise.
            let body = null;
            // Whether the response callback has been called.
            let finished = false;
            // Whether the request has been cancelled (and thus any other callbacks)
            // should be ignored.
            let cancelled = false;
            // Set the response callback in this.callbackMap (which will be the window
            // object in the browser. The script being loaded via the <script> tag will
            // eventually call this callback.
            this.callbackMap[callback] = (data) => {
                // Data has been received from the JSONP script. Firstly, delete this callback.
                delete this.callbackMap[callback];
                // Next, make sure the request wasn't cancelled in the meantime.
                if (cancelled) {
                    return;
                }
                // Set state to indicate data was received.
                body = data;
                finished = true;
            };
            // cleanup() is a utility closure that removes the <script> from the page and
            // the response callback from the window. This logic is used in both the
            // success, error, and cancellation paths, so it's extracted out for convenience.
            const cleanup = () => {
                // Remove the <script> tag if it's still on the page.
                if (node.parentNode) {
                    node.parentNode.removeChild(node);
                }
                // Remove the response callback from the callbackMap (window object in the
                // browser).
                delete this.callbackMap[callback];
            };
            // onLoad() is the success callback which runs after the response callback
            // if the JSONP script loads successfully. The event itself is unimportant.
            // If something went wrong, onLoad() may run without the response callback
            // having been invoked.
            const onLoad = (event) => {
                // Do nothing if the request has been cancelled.
                if (cancelled) {
                    return;
                }
                // We wrap it in an extra Promise, to ensure the microtask
                // is scheduled after the loaded endpoint has executed any potential microtask itself,
                // which is not guaranteed in Internet Explorer and EdgeHTML. See issue #39496
                this.resolvedPromise.then(() => {
                    // Cleanup the page.
                    cleanup();
                    // Check whether the response callback has run.
                    if (!finished) {
                        // It hasn't, something went wrong with the request. Return an error via
                        // the Observable error path. All JSONP errors have status 0.
                        observer.error(new HttpErrorResponse({
                            url,
                            status: 0,
                            statusText: 'JSONP Error',
                            error: new Error(JSONP_ERR_NO_CALLBACK),
                        }));
                        return;
                    }
                    // Success. body either contains the response body or null if none was
                    // returned.
                    observer.next(new HttpResponse({
                        body,
                        status: 200,
                        statusText: 'OK',
                        url,
                    }));
                    // Complete the stream, the response is over.
                    observer.complete();
                });
            };
            // onError() is the error callback, which runs if the script returned generates
            // a Javascript error. It emits the error via the Observable error channel as
            // a HttpErrorResponse.
            const onError = (error) => {
                // If the request was already cancelled, no need to emit anything.
                if (cancelled) {
                    return;
                }
                cleanup();
                // Wrap the error in a HttpErrorResponse.
                observer.error(new HttpErrorResponse({
                    error,
                    status: 0,
                    statusText: 'JSONP Error',
                    url,
                }));
            };
            // Subscribe to both the success (load) and error events on the <script> tag,
            // and add it to the page.
            node.addEventListener('load', onLoad);
            node.addEventListener('error', onError);
            this.document.body.appendChild(node);
            // The request has now been successfully sent.
            observer.next({ type: HttpEventType.Sent });
            // Cancellation handler.
            return () => {
                // Track the cancellation so event listeners won't do anything even if already scheduled.
                cancelled = true;
                // Remove the event listeners so they won't run if the events later fire.
                node.removeEventListener('load', onLoad);
                node.removeEventListener('error', onError);
                // And finally, clean up the page.
                cleanup();
            };
        });
    }
}
JsonpClientBackend.ɵfac = function JsonpClientBackend_Factory(t) { return new (t || JsonpClientBackend)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](JsonpCallbackContext), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])); };
JsonpClientBackend.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JsonpClientBackend, factory: JsonpClientBackend.ɵfac });
JsonpClientBackend.ctorParameters = () => [
    { type: JsonpCallbackContext },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JsonpClientBackend, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: JsonpCallbackContext }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }] }]; }, null); })();
/**
 * Identifies requests with the method JSONP and
 * shifts them to the `JsonpClientBackend`.
 *
 * @see `HttpInterceptor`
 *
 * @publicApi
 */
class JsonpInterceptor {
    constructor(jsonp) {
        this.jsonp = jsonp;
    }
    /**
     * Identifies and handles a given JSONP request.
     * @param req The outgoing request object to handle.
     * @param next The next interceptor in the chain, or the backend
     * if no interceptors remain in the chain.
     * @returns An observable of the event stream.
     */
    intercept(req, next) {
        if (req.method === 'JSONP') {
            return this.jsonp.handle(req);
        }
        // Fall through for normal HTTP requests.
        return next.handle(req);
    }
}
JsonpInterceptor.ɵfac = function JsonpInterceptor_Factory(t) { return new (t || JsonpInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](JsonpClientBackend)); };
JsonpInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JsonpInterceptor, factory: JsonpInterceptor.ɵfac });
JsonpInterceptor.ctorParameters = () => [
    { type: JsonpClientBackend }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JsonpInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: JsonpClientBackend }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Determine an appropriate URL for the response, by checking either
 * XMLHttpRequest.responseURL or the X-Request-URL header.
 */
function getResponseUrl(xhr) {
    if ('responseURL' in xhr && xhr.responseURL) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return null;
}
/**
 * A wrapper around the `XMLHttpRequest` constructor.
 *
 * @publicApi
 */
class XhrFactory {
}
/**
 * A factory for `HttpXhrBackend` that uses the `XMLHttpRequest` browser API.
 *
 */
class BrowserXhr {
    constructor() { }
    build() {
        return (new XMLHttpRequest());
    }
}
BrowserXhr.ɵfac = function BrowserXhr_Factory(t) { return new (t || BrowserXhr)(); };
BrowserXhr.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BrowserXhr, factory: BrowserXhr.ɵfac });
BrowserXhr.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrowserXhr, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();
/**
 * Uses `XMLHttpRequest` to send requests to a backend server.
 * @see `HttpHandler`
 * @see `JsonpClientBackend`
 *
 * @publicApi
 */
class HttpXhrBackend {
    constructor(xhrFactory) {
        this.xhrFactory = xhrFactory;
    }
    /**
     * Processes a request and returns a stream of response events.
     * @param req The request object.
     * @returns An observable of the response events.
     */
    handle(req) {
        // Quick check to give a better error message when a user attempts to use
        // HttpClient.jsonp() without installing the HttpClientJsonpModule
        if (req.method === 'JSONP') {
            throw new Error(`Attempted to construct Jsonp request without HttpClientJsonpModule installed.`);
        }
        // Everything happens on Observable subscription.
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            // Start by setting up the XHR object with request method, URL, and withCredentials flag.
            const xhr = this.xhrFactory.build();
            xhr.open(req.method, req.urlWithParams);
            if (!!req.withCredentials) {
                xhr.withCredentials = true;
            }
            // Add all the requested headers.
            req.headers.forEach((name, values) => xhr.setRequestHeader(name, values.join(',')));
            // Add an Accept header if one isn't present already.
            if (!req.headers.has('Accept')) {
                xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
            }
            // Auto-detect the Content-Type header if one isn't present already.
            if (!req.headers.has('Content-Type')) {
                const detectedType = req.detectContentTypeHeader();
                // Sometimes Content-Type detection fails.
                if (detectedType !== null) {
                    xhr.setRequestHeader('Content-Type', detectedType);
                }
            }
            // Set the responseType if one was requested.
            if (req.responseType) {
                const responseType = req.responseType.toLowerCase();
                // JSON responses need to be processed as text. This is because if the server
                // returns an XSSI-prefixed JSON response, the browser will fail to parse it,
                // xhr.response will be null, and xhr.responseText cannot be accessed to
                // retrieve the prefixed JSON data in order to strip the prefix. Thus, all JSON
                // is parsed by first requesting text and then applying JSON.parse.
                xhr.responseType = ((responseType !== 'json') ? responseType : 'text');
            }
            // Serialize the request body if one is present. If not, this will be set to null.
            const reqBody = req.serializeBody();
            // If progress events are enabled, response headers will be delivered
            // in two events - the HttpHeaderResponse event and the full HttpResponse
            // event. However, since response headers don't change in between these
            // two events, it doesn't make sense to parse them twice. So headerResponse
            // caches the data extracted from the response whenever it's first parsed,
            // to ensure parsing isn't duplicated.
            let headerResponse = null;
            // partialFromXhr extracts the HttpHeaderResponse from the current XMLHttpRequest
            // state, and memoizes it into headerResponse.
            const partialFromXhr = () => {
                if (headerResponse !== null) {
                    return headerResponse;
                }
                // Read status and normalize an IE9 bug (https://bugs.jquery.com/ticket/1450).
                const status = xhr.status === 1223 ? 204 : xhr.status;
                const statusText = xhr.statusText || 'OK';
                // Parse headers from XMLHttpRequest - this step is lazy.
                const headers = new HttpHeaders(xhr.getAllResponseHeaders());
                // Read the response URL from the XMLHttpResponse instance and fall back on the
                // request URL.
                const url = getResponseUrl(xhr) || req.url;
                // Construct the HttpHeaderResponse and memoize it.
                headerResponse = new HttpHeaderResponse({ headers, status, statusText, url });
                return headerResponse;
            };
            // Next, a few closures are defined for the various events which XMLHttpRequest can
            // emit. This allows them to be unregistered as event listeners later.
            // First up is the load event, which represents a response being fully available.
            const onLoad = () => {
                // Read response state from the memoized partial data.
                let { headers, status, statusText, url } = partialFromXhr();
                // The body will be read out if present.
                let body = null;
                if (status !== 204) {
                    // Use XMLHttpRequest.response if set, responseText otherwise.
                    body = (typeof xhr.response === 'undefined') ? xhr.responseText : xhr.response;
                }
                // Normalize another potential bug (this one comes from CORS).
                if (status === 0) {
                    status = !!body ? 200 : 0;
                }
                // ok determines whether the response will be transmitted on the event or
                // error channel. Unsuccessful status codes (not 2xx) will always be errors,
                // but a successful status code can still result in an error if the user
                // asked for JSON data and the body cannot be parsed as such.
                let ok = status >= 200 && status < 300;
                // Check whether the body needs to be parsed as JSON (in many cases the browser
                // will have done that already).
                if (req.responseType === 'json' && typeof body === 'string') {
                    // Save the original body, before attempting XSSI prefix stripping.
                    const originalBody = body;
                    body = body.replace(XSSI_PREFIX, '');
                    try {
                        // Attempt the parse. If it fails, a parse error should be delivered to the user.
                        body = body !== '' ? JSON.parse(body) : null;
                    }
                    catch (error) {
                        // Since the JSON.parse failed, it's reasonable to assume this might not have been a
                        // JSON response. Restore the original body (including any XSSI prefix) to deliver
                        // a better error response.
                        body = originalBody;
                        // If this was an error request to begin with, leave it as a string, it probably
                        // just isn't JSON. Otherwise, deliver the parsing error to the user.
                        if (ok) {
                            // Even though the response status was 2xx, this is still an error.
                            ok = false;
                            // The parse error contains the text of the body that failed to parse.
                            body = { error, text: body };
                        }
                    }
                }
                if (ok) {
                    // A successful response is delivered on the event stream.
                    observer.next(new HttpResponse({
                        body,
                        headers,
                        status,
                        statusText,
                        url: url || undefined,
                    }));
                    // The full body has been received and delivered, no further events
                    // are possible. This request is complete.
                    observer.complete();
                }
                else {
                    // An unsuccessful request is delivered on the error channel.
                    observer.error(new HttpErrorResponse({
                        // The error in this case is the response body (error from the server).
                        error: body,
                        headers,
                        status,
                        statusText,
                        url: url || undefined,
                    }));
                }
            };
            // The onError callback is called when something goes wrong at the network level.
            // Connection timeout, DNS error, offline, etc. These are actual errors, and are
            // transmitted on the error channel.
            const onError = (error) => {
                const { url } = partialFromXhr();
                const res = new HttpErrorResponse({
                    error,
                    status: xhr.status || 0,
                    statusText: xhr.statusText || 'Unknown Error',
                    url: url || undefined,
                });
                observer.error(res);
            };
            // The sentHeaders flag tracks whether the HttpResponseHeaders event
            // has been sent on the stream. This is necessary to track if progress
            // is enabled since the event will be sent on only the first download
            // progerss event.
            let sentHeaders = false;
            // The download progress event handler, which is only registered if
            // progress events are enabled.
            const onDownProgress = (event) => {
                // Send the HttpResponseHeaders event if it hasn't been sent already.
                if (!sentHeaders) {
                    observer.next(partialFromXhr());
                    sentHeaders = true;
                }
                // Start building the download progress event to deliver on the response
                // event stream.
                let progressEvent = {
                    type: HttpEventType.DownloadProgress,
                    loaded: event.loaded,
                };
                // Set the total number of bytes in the event if it's available.
                if (event.lengthComputable) {
                    progressEvent.total = event.total;
                }
                // If the request was for text content and a partial response is
                // available on XMLHttpRequest, include it in the progress event
                // to allow for streaming reads.
                if (req.responseType === 'text' && !!xhr.responseText) {
                    progressEvent.partialText = xhr.responseText;
                }
                // Finally, fire the event.
                observer.next(progressEvent);
            };
            // The upload progress event handler, which is only registered if
            // progress events are enabled.
            const onUpProgress = (event) => {
                // Upload progress events are simpler. Begin building the progress
                // event.
                let progress = {
                    type: HttpEventType.UploadProgress,
                    loaded: event.loaded,
                };
                // If the total number of bytes being uploaded is available, include
                // it.
                if (event.lengthComputable) {
                    progress.total = event.total;
                }
                // Send the event.
                observer.next(progress);
            };
            // By default, register for load and error events.
            xhr.addEventListener('load', onLoad);
            xhr.addEventListener('error', onError);
            xhr.addEventListener('timeout', onError);
            xhr.addEventListener('abort', onError);
            // Progress events are only enabled if requested.
            if (req.reportProgress) {
                // Download progress is always enabled if requested.
                xhr.addEventListener('progress', onDownProgress);
                // Upload progress depends on whether there is a body to upload.
                if (reqBody !== null && xhr.upload) {
                    xhr.upload.addEventListener('progress', onUpProgress);
                }
            }
            // Fire the request, and notify the event stream that it was fired.
            xhr.send(reqBody);
            observer.next({ type: HttpEventType.Sent });
            // This is the return from the Observable function, which is the
            // request cancellation handler.
            return () => {
                // On a cancellation, remove all registered event listeners.
                xhr.removeEventListener('error', onError);
                xhr.removeEventListener('abort', onError);
                xhr.removeEventListener('load', onLoad);
                xhr.removeEventListener('timeout', onError);
                if (req.reportProgress) {
                    xhr.removeEventListener('progress', onDownProgress);
                    if (reqBody !== null && xhr.upload) {
                        xhr.upload.removeEventListener('progress', onUpProgress);
                    }
                }
                // Finally, abort the in-flight request.
                if (xhr.readyState !== xhr.DONE) {
                    xhr.abort();
                }
            };
        });
    }
}
HttpXhrBackend.ɵfac = function HttpXhrBackend_Factory(t) { return new (t || HttpXhrBackend)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](XhrFactory)); };
HttpXhrBackend.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpXhrBackend, factory: HttpXhrBackend.ɵfac });
HttpXhrBackend.ctorParameters = () => [
    { type: XhrFactory }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpXhrBackend, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: XhrFactory }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const XSRF_COOKIE_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('XSRF_COOKIE_NAME');
const XSRF_HEADER_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('XSRF_HEADER_NAME');
/**
 * Retrieves the current XSRF token to use with the next outgoing request.
 *
 * @publicApi
 */
class HttpXsrfTokenExtractor {
}
/**
 * `HttpXsrfTokenExtractor` which retrieves the token from a cookie.
 */
class HttpXsrfCookieExtractor {
    constructor(doc, platform, cookieName) {
        this.doc = doc;
        this.platform = platform;
        this.cookieName = cookieName;
        this.lastCookieString = '';
        this.lastToken = null;
        /**
         * @internal for testing
         */
        this.parseCount = 0;
    }
    getToken() {
        if (this.platform === 'server') {
            return null;
        }
        const cookieString = this.doc.cookie || '';
        if (cookieString !== this.lastCookieString) {
            this.parseCount++;
            this.lastToken = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵparseCookieValue"])(cookieString, this.cookieName);
            this.lastCookieString = cookieString;
        }
        return this.lastToken;
    }
}
HttpXsrfCookieExtractor.ɵfac = function HttpXsrfCookieExtractor_Factory(t) { return new (t || HttpXsrfCookieExtractor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](XSRF_COOKIE_NAME)); };
HttpXsrfCookieExtractor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpXsrfCookieExtractor, factory: HttpXsrfCookieExtractor.ɵfac });
HttpXsrfCookieExtractor.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [XSRF_COOKIE_NAME,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpXsrfCookieExtractor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [XSRF_COOKIE_NAME]
            }] }]; }, null); })();
/**
 * `HttpInterceptor` which adds an XSRF token to eligible outgoing requests.
 */
class HttpXsrfInterceptor {
    constructor(tokenService, headerName) {
        this.tokenService = tokenService;
        this.headerName = headerName;
    }
    intercept(req, next) {
        const lcUrl = req.url.toLowerCase();
        // Skip both non-mutating requests and absolute URLs.
        // Non-mutating requests don't require a token, and absolute URLs require special handling
        // anyway as the cookie set
        // on our origin is not the same as the token expected by another origin.
        if (req.method === 'GET' || req.method === 'HEAD' || lcUrl.startsWith('http://') ||
            lcUrl.startsWith('https://')) {
            return next.handle(req);
        }
        const token = this.tokenService.getToken();
        // Be careful not to overwrite an existing header of the same name.
        if (token !== null && !req.headers.has(this.headerName)) {
            req = req.clone({ headers: req.headers.set(this.headerName, token) });
        }
        return next.handle(req);
    }
}
HttpXsrfInterceptor.ɵfac = function HttpXsrfInterceptor_Factory(t) { return new (t || HttpXsrfInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](HttpXsrfTokenExtractor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](XSRF_HEADER_NAME)); };
HttpXsrfInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpXsrfInterceptor, factory: HttpXsrfInterceptor.ɵfac });
HttpXsrfInterceptor.ctorParameters = () => [
    { type: HttpXsrfTokenExtractor },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [XSRF_HEADER_NAME,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpXsrfInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: HttpXsrfTokenExtractor }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [XSRF_HEADER_NAME]
            }] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * An injectable `HttpHandler` that applies multiple interceptors
 * to a request before passing it to the given `HttpBackend`.
 *
 * The interceptors are loaded lazily from the injector, to allow
 * interceptors to themselves inject classes depending indirectly
 * on `HttpInterceptingHandler` itself.
 * @see `HttpInterceptor`
 */
class HttpInterceptingHandler {
    constructor(backend, injector) {
        this.backend = backend;
        this.injector = injector;
        this.chain = null;
    }
    handle(req) {
        if (this.chain === null) {
            const interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
            this.chain = interceptors.reduceRight((next, interceptor) => new HttpInterceptorHandler(next, interceptor), this.backend);
        }
        return this.chain.handle(req);
    }
}
HttpInterceptingHandler.ɵfac = function HttpInterceptingHandler_Factory(t) { return new (t || HttpInterceptingHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](HttpBackend), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
HttpInterceptingHandler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpInterceptingHandler, factory: HttpInterceptingHandler.ɵfac });
HttpInterceptingHandler.ctorParameters = () => [
    { type: HttpBackend },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpInterceptingHandler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: HttpBackend }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();
/**
 * Constructs an `HttpHandler` that applies interceptors
 * to a request before passing it to the given `HttpBackend`.
 *
 * Use as a factory function within `HttpClientModule`.
 *
 *
 */
function interceptingHandler(backend, interceptors = []) {
    if (!interceptors) {
        return backend;
    }
    return interceptors.reduceRight((next, interceptor) => new HttpInterceptorHandler(next, interceptor), backend);
}
/**
 * Factory function that determines where to store JSONP callbacks.
 *
 * Ordinarily JSONP callbacks are stored on the `window` object, but this may not exist
 * in test environments. In that case, callbacks are stored on an anonymous object instead.
 *
 *
 */
function jsonpCallbackContext() {
    if (typeof window === 'object') {
        return window;
    }
    return {};
}
/**
 * Configures XSRF protection support for outgoing requests.
 *
 * For a server that supports a cookie-based XSRF protection system,
 * use directly to configure XSRF protection with the correct
 * cookie and header names.
 *
 * If no names are supplied, the default cookie name is `XSRF-TOKEN`
 * and the default header name is `X-XSRF-TOKEN`.
 *
 * @publicApi
 */
class HttpClientXsrfModule {
    /**
     * Disable the default XSRF protection.
     */
    static disable() {
        return {
            ngModule: HttpClientXsrfModule,
            providers: [
                { provide: HttpXsrfInterceptor, useClass: NoopInterceptor },
            ],
        };
    }
    /**
     * Configure XSRF protection.
     * @param options An object that can specify either or both
     * cookie name or header name.
     * - Cookie name default is `XSRF-TOKEN`.
     * - Header name default is `X-XSRF-TOKEN`.
     *
     */
    static withOptions(options = {}) {
        return {
            ngModule: HttpClientXsrfModule,
            providers: [
                options.cookieName ? { provide: XSRF_COOKIE_NAME, useValue: options.cookieName } : [],
                options.headerName ? { provide: XSRF_HEADER_NAME, useValue: options.headerName } : [],
            ],
        };
    }
}
HttpClientXsrfModule.ɵfac = function HttpClientXsrfModule_Factory(t) { return new (t || HttpClientXsrfModule)(); };
HttpClientXsrfModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HttpClientXsrfModule });
HttpClientXsrfModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [
        HttpXsrfInterceptor,
        { provide: HTTP_INTERCEPTORS, useExisting: HttpXsrfInterceptor, multi: true },
        { provide: HttpXsrfTokenExtractor, useClass: HttpXsrfCookieExtractor },
        { provide: XSRF_COOKIE_NAME, useValue: 'XSRF-TOKEN' },
        { provide: XSRF_HEADER_NAME, useValue: 'X-XSRF-TOKEN' },
    ] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpClientXsrfModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                providers: [
                    HttpXsrfInterceptor,
                    { provide: HTTP_INTERCEPTORS, useExisting: HttpXsrfInterceptor, multi: true },
                    { provide: HttpXsrfTokenExtractor, useClass: HttpXsrfCookieExtractor },
                    { provide: XSRF_COOKIE_NAME, useValue: 'XSRF-TOKEN' },
                    { provide: XSRF_HEADER_NAME, useValue: 'X-XSRF-TOKEN' },
                ]
            }]
    }], null, null); })();
/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for XSRF. Automatically imported by `HttpClientModule`.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * @publicApi
 */
class HttpClientModule {
}
HttpClientModule.ɵfac = function HttpClientModule_Factory(t) { return new (t || HttpClientModule)(); };
HttpClientModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HttpClientModule });
HttpClientModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [
        HttpClient,
        { provide: HttpHandler, useClass: HttpInterceptingHandler },
        HttpXhrBackend,
        { provide: HttpBackend, useExisting: HttpXhrBackend },
        BrowserXhr,
        { provide: XhrFactory, useExisting: BrowserXhr },
    ], imports: [[
            HttpClientXsrfModule.withOptions({
                cookieName: 'XSRF-TOKEN',
                headerName: 'X-XSRF-TOKEN'
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HttpClientModule, { imports: [HttpClientXsrfModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpClientModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                /**
                 * Optional configuration for XSRF protection.
                 */
                imports: [
                    HttpClientXsrfModule.withOptions({
                        cookieName: 'XSRF-TOKEN',
                        headerName: 'X-XSRF-TOKEN'
                    }),
                ],
                /**
                 * Configures the [dependency injector](guide/glossary#injector) where it is imported
                 * with supporting services for HTTP communications.
                 */
                providers: [
                    HttpClient,
                    { provide: HttpHandler, useClass: HttpInterceptingHandler },
                    HttpXhrBackend,
                    { provide: HttpBackend, useExisting: HttpXhrBackend },
                    BrowserXhr,
                    { provide: XhrFactory, useExisting: BrowserXhr },
                ]
            }]
    }], null, null); })();
/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for JSONP.
 * Without this module, Jsonp requests reach the backend
 * with method JSONP, where they are rejected.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * @publicApi
 */
class HttpClientJsonpModule {
}
HttpClientJsonpModule.ɵfac = function HttpClientJsonpModule_Factory(t) { return new (t || HttpClientJsonpModule)(); };
HttpClientJsonpModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HttpClientJsonpModule });
HttpClientJsonpModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [
        JsonpClientBackend,
        { provide: JsonpCallbackContext, useFactory: jsonpCallbackContext },
        { provide: HTTP_INTERCEPTORS, useClass: JsonpInterceptor, multi: true },
    ] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpClientJsonpModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                providers: [
                    JsonpClientBackend,
                    { provide: JsonpCallbackContext, useFactory: jsonpCallbackContext },
                    { provide: HTTP_INTERCEPTORS, useClass: JsonpInterceptor, multi: true },
                ]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=http.js.map

/***/ }),

/***/ "LBOD":
/*!************************************************************************!*\
  !*** ./src/app/views/product/firebase-demo/firebase-demo.component.ts ***!
  \************************************************************************/
/*! exports provided: FirebaseDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseDemoComponent", function() { return FirebaseDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_firebase_demo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./firebase-demo.component.html */ "4Z7N");
/* harmony import */ var _firebase_demo_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./firebase-demo.component.scss */ "s0Rt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _window_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./window.service */ "p1AC");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "iqUP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);







let FirebaseDemoComponent = class FirebaseDemoComponent {
    constructor(db, windowService) {
        this.windowService = windowService;
        this.db = db;
        this.phoneNumber = { country: '', prefix: '', area: '', line: '' };
    }
    ngOnInit() {
        // this.addData();
        // this.getList('users');
        // this.removeValue('users', '1234567');
        // this.windowRef = this.windowService.windowRef;
        // this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        // this.windowRef.recaptchaVerifier.render();
        this.sendMessaging();
    }
    getList(tableName) {
        this.db.list(tableName).valueChanges().subscribe(users => {
            this.users = users;
            console.log(this.users);
        });
    }
    addData() {
        const value = {
            id: this.db.createPushId(),
            username: 'tam456',
            email: 'tamlogic123@gmail.com',
            profile_picture: '456.jpg'
        };
        this.addValue('users', '12345678', value);
    }
    addValue(tableName, id, value) {
        tableName += '/';
        // this.db.list('courses').push('abc');
        this.db.database.ref(tableName + id).set(value, (error) => {
            if (error) {
                // The write failed...
            }
            else {
                // Data saved successfully!
            }
        });
    }
    removeValue(tableName, id) {
        this.db.database.ref(tableName + '/' + id).remove();
    }
    // Send authenticate to phone number
    e164() {
        const num = this.phoneNumber.country + this.phoneNumber.area + this.phoneNumber.prefix + this.phoneNumber.line;
        return `+${num}`;
    }
    sendLoginCode() {
        const appVerifier = this.windowRef.recaptchaVerifier;
        const num = this.e164();
        firebase__WEBPACK_IMPORTED_MODULE_6__["auth"]().signInWithPhoneNumber(num, appVerifier)
            .then(result => {
            this.windowRef.confirmationResult = result;
        })
            .catch(error => console.log(error));
    }
    verifyLoginCode() {
        this.windowRef.confirmationResult.confirm(this.verificationCode)
            .then(result => {
            this.user = result.user;
        })
            .catch(error => console.log(error, 'Incorrect code entered?'));
    }
    sendMessaging() {
        console.log(firebase__WEBPACK_IMPORTED_MODULE_6__["messaging"]().getToken());
        // firebase.messaging().requestPermission()
        //   .then(function () {
        //     MsgElem.innerHTML = 'Notification permission granted.';
        //     console.log('Notification permission granted.');
        //
        //     // get the token in the form of promise
        //     return ;
        //   })
        //   .then(function (token) {
        //     TokenElem.innerHTML = 'Device token is : <br>' + token;
        //   })
        //   .catch(function (err) {
        //     ErrElem.innerHTML = ErrElem.innerHTML + '; ' + err;
        //     console.log('Unable to get permission to notify.', err);
        //   });
        //
        // const enableForegroundNotification = true;
        // messaging.onMessage(function (payload) {
        //   console.log('Message received. ', payload);
        //   NotisElem.innerHTML =
        //     NotisElem.innerHTML + JSON.stringify(payload);
        //
        //   if (enableForegroundNotification) {
        //     let notification = payload.notification;
        //     navigator.serviceWorker
        //       .getRegistrations()
        //       .then((registration) => {
        //         registration[0].showNotification(notification.title);
        //       });
        //   }
        // });
    }
};
FirebaseDemoComponent.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"] },
    { type: _window_service__WEBPACK_IMPORTED_MODULE_5__["WindowService"] }
];
FirebaseDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-firebase-demo',
        template: _raw_loader_firebase_demo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [_window_service__WEBPACK_IMPORTED_MODULE_5__["WindowService"]],
        styles: [_firebase_demo_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"], _window_service__WEBPACK_IMPORTED_MODULE_5__["WindowService"]])
], FirebaseDemoComponent);



/***/ }),

/***/ "NPdh":
/*!********************************************************************************!*\
  !*** ./src/app/views/product/happy-birthday-bx/happy-birthday-bx.component.ts ***!
  \********************************************************************************/
/*! exports provided: HappyBirthdayBxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HappyBirthdayBxComponent", function() { return HappyBirthdayBxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_happy_birthday_bx_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./happy-birthday-bx.component.html */ "qcOx");
/* harmony import */ var _happy_birthday_bx_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./happy-birthday-bx.component.scss */ "WUq3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let HappyBirthdayBxComponent = class HappyBirthdayBxComponent {
    constructor() { }
    ngOnInit() {
    }
};
HappyBirthdayBxComponent.ctorParameters = () => [];
HappyBirthdayBxComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-happy-birthday-bx',
        template: _raw_loader_happy_birthday_bx_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_happy_birthday_bx_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], HappyBirthdayBxComponent);



/***/ }),

/***/ "P9i9":
/*!*************************************************!*\
  !*** ./src/app/views/product/product.module.ts ***!
  \*************************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _product_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-routing.module */ "B+Za");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "St1U");
/* harmony import */ var _lesson_lesson_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lesson/lesson.component */ "5th+");
/* harmony import */ var _lesson_grammar_grammar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lesson/grammar/grammar.component */ "5psD");
/* harmony import */ var _lesson_listen_read_listen_read_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lesson/listen-read/listen-read.component */ "3GoJ");
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @coreui/angular */ "Iluq");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "FE24");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "2ZVE");
/* harmony import */ var _lesson_listen_read_listen_read_content_listen_read_content_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lesson/listen-read/listen-read-content/listen-read-content.component */ "/wWl");
/* harmony import */ var _firebase_demo_firebase_demo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./firebase-demo/firebase-demo.component */ "LBOD");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ng_chat__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-chat */ "yU/L");
/* harmony import */ var _lesson_chat_chat_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lesson/chat/chat.component */ "E110");
/* harmony import */ var _happy_birthday_bx_happy_birthday_bx_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./happy-birthday-bx/happy-birthday-bx.component */ "NPdh");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");

// Angular


// Notifications Routing

// Collapse Module

// Lesson Component

















let ProductModule = class ProductModule {
};
ProductModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _product_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductRoutingModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_8__["AppSidebarModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_8__["AppBreadcrumbModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__["BsDropdownModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_8__["AppHeaderModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_8__["AppAsideModule"],
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_11__["TabsModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_8__["AppFooterModule"],
            ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_4__["CollapseModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_14__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].firebase),
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_16__["AngularFireDatabaseModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
            ng_chat__WEBPACK_IMPORTED_MODULE_18__["NgChatModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_21__["ModalModule"]
        ],
        declarations: [
            _lesson_lesson_component__WEBPACK_IMPORTED_MODULE_5__["LessonComponent"],
            _lesson_listen_read_listen_read_component__WEBPACK_IMPORTED_MODULE_7__["ListenReadComponent"],
            _lesson_grammar_grammar_component__WEBPACK_IMPORTED_MODULE_6__["GrammarComponent"],
            _lesson_listen_read_listen_read_content_listen_read_content_component__WEBPACK_IMPORTED_MODULE_12__["ListenReadContentComponent"],
            _firebase_demo_firebase_demo_component__WEBPACK_IMPORTED_MODULE_13__["FirebaseDemoComponent"],
            _lesson_chat_chat_component__WEBPACK_IMPORTED_MODULE_19__["ChatComponent"],
            _happy_birthday_bx_happy_birthday_bx_component__WEBPACK_IMPORTED_MODULE_20__["HappyBirthdayBxComponent"]
        ]
    })
], ProductModule);



/***/ }),

/***/ "UbJi":
/*!*******************************************************************************!*\
  !*** ./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js ***!
  \*******************************************************************************/
/*! exports provided: AngularFireAuth, AngularFireAuthModule, LANGUAGE_CODE, PERSISTENCE, SETTINGS, TENANT_ID, USE_DEVICE_LANGUAGE, USE_EMULATOR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFireAuth", function() { return AngularFireAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFireAuthModule", function() { return AngularFireAuthModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGE_CODE", function() { return LANGUAGE_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERSISTENCE", function() { return PERSISTENCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SETTINGS", function() { return SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TENANT_ID", function() { return TENANT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USE_DEVICE_LANGUAGE", function() { return USE_DEVICE_LANGUAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USE_EMULATOR", function() { return USE_EMULATOR; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");










const proxyPolyfillCompat = {
    app: null,
    applyActionCode: null,
    checkActionCode: null,
    confirmPasswordReset: null,
    createUserWithEmailAndPassword: null,
    currentUser: null,
    fetchSignInMethodsForEmail: null,
    isSignInWithEmailLink: null,
    getRedirectResult: null,
    languageCode: null,
    settings: null,
    onAuthStateChanged: null,
    onIdTokenChanged: null,
    sendSignInLinkToEmail: null,
    sendPasswordResetEmail: null,
    setPersistence: null,
    signInAndRetrieveDataWithCredential: null,
    signInAnonymously: null,
    signInWithCredential: null,
    signInWithCustomToken: null,
    signInWithEmailAndPassword: null,
    signInWithPhoneNumber: null,
    signInWithEmailLink: null,
    signInWithPopup: null,
    signInWithRedirect: null,
    signOut: null,
    tenantId: null,
    updateCurrentUser: null,
    useDeviceLanguage: null,
    useEmulator: null,
    verifyPasswordResetCode: null,
};

const USE_EMULATOR = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angularfire2.auth.use-emulator');
const SETTINGS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angularfire2.auth.settings');
const TENANT_ID = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angularfire2.auth.tenant-id');
const LANGUAGE_CODE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angularfire2.auth.langugage-code');
const USE_DEVICE_LANGUAGE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angularfire2.auth.use-device-language');
const PERSISTENCE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angularfire.auth.persistence');
class AngularFireAuth {
    constructor(options, nameOrConfig, 
    // tslint:disable-next-line:ban-types
    platformId, zone, _useEmulator, // can't use the tuple here
    _settings, // can't use firebase.auth.AuthSettings here
    tenantId, languageCode, useDeviceLanguage, persistence) {
        const schedulers = new _angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵAngularFireSchedulers"](zone);
        const keepUnstableUntilFirst = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵkeepUnstableUntilFirstFactory"])(schedulers);
        const logins = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        const auth = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["observeOn"])(schedulers.outsideAngular), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => zone.runOutsideAngular(() => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! firebase/auth */ "6nsN")))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵfirebaseAppFactory"])(options, zone, nameOrConfig)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(app => zone.runOutsideAngular(() => {
            const useEmulator = _useEmulator;
            const settings = _settings;
            return Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵfetchInstance"])(`${app.name}.auth`, 'AngularFireAuth', app, () => {
                const auth = zone.runOutsideAngular(() => app.auth());
                if (useEmulator) {
                    // Firebase Auth doesn't conform to the useEmulator convention, let's smooth that over
                    auth.useEmulator(`http://${useEmulator.join(':')}`);
                }
                if (tenantId) {
                    auth.tenantId = tenantId;
                }
                auth.languageCode = languageCode;
                if (useDeviceLanguage) {
                    auth.useDeviceLanguage();
                }
                if (settings) {
                    for (const [k, v] of Object.entries(settings)) {
                        auth.settings[k] = v;
                    }
                }
                if (persistence) {
                    auth.setPersistence(persistence);
                }
                return auth;
            }, [useEmulator, tenantId, languageCode, useDeviceLanguage, settings, persistence]);
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])({ bufferSize: 1, refCount: false }));
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformServer"])(platformId)) {
            this.authState = this.user = this.idToken = this.idTokenResult = this.credential = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        else {
            // HACK, as we're exporting auth.Auth, rather than auth, developers importing firebase.auth
            //       (e.g, `import { auth } from 'firebase/app'`) are getting an undefined auth object unexpectedly
            //       as we're completely lazy. Let's eagerly load the Auth SDK here.
            //       There could potentially be race conditions still... but this greatly decreases the odds while
            //       we reevaluate the API.
            const _ = auth.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe();
            const redirectResult = auth.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(auth => auth.getRedirectResult().then(it => it, () => null)), keepUnstableUntilFirst, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])({ bufferSize: 1, refCount: false }));
            const fromCallback = (cb) => new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](subscriber => ({ unsubscribe: zone.runOutsideAngular(() => cb(subscriber)) }));
            const authStateChanged = auth.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(auth => fromCallback(auth.onAuthStateChanged.bind(auth))));
            const idTokenChanged = auth.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(auth => fromCallback(auth.onIdTokenChanged.bind(auth))));
            this.authState = redirectResult.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMapTo"])(authStateChanged), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["subscribeOn"])(schedulers.outsideAngular), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["observeOn"])(schedulers.insideAngular));
            this.user = redirectResult.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMapTo"])(idTokenChanged), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["subscribeOn"])(schedulers.outsideAngular), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["observeOn"])(schedulers.insideAngular));
            this.idToken = this.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(user => user ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(user.getIdToken()) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null)));
            this.idTokenResult = this.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(user => user ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(user.getIdTokenResult()) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null)));
            this.credential = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(redirectResult, logins, 
            // pipe in null authState to make credential zipable, just a weird devexp if
            // authState and user go null to still have a credential
            this.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(it => !it))).pipe(
            // handle the { user: { } } when a user is already logged in, rather have null
            // TODO handle the type corcersion better
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(credential => (credential === null || credential === void 0 ? void 0 : credential.user) ? credential : null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["subscribeOn"])(schedulers.outsideAngular), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["observeOn"])(schedulers.insideAngular));
        }
        return Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵlazySDKProxy"])(this, auth, zone, { spy: {
                apply: (name, _, val) => {
                    // If they call a signIn or createUser function listen into the promise
                    // this will give us the user credential, push onto the logins Subject
                    // to be consumed in .credential
                    if (name.startsWith('signIn') || name.startsWith('createUser')) {
                        // TODO fix the types, the trouble is UserCredential has everything optional
                        val.then((user) => logins.next(user));
                    }
                }
            } });
    }
}
AngularFireAuth.ɵfac = function AngularFireAuth_Factory(t) { return new (t || AngularFireAuth)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](USE_EMULATOR, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](SETTINGS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](TENANT_ID, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LANGUAGE_CODE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](USE_DEVICE_LANGUAGE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](PERSISTENCE, 8)); };
/** @nocollapse */ AngularFireAuth.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function AngularFireAuth_Factory() { return new AngularFireAuth(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](USE_EMULATOR, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](SETTINGS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](TENANT_ID, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LANGUAGE_CODE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](USE_DEVICE_LANGUAGE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](PERSISTENCE, 8)); }, token: AngularFireAuth, providedIn: "any" });
/** @nocollapse */
AngularFireAuth.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"],] }] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [USE_EMULATOR,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [SETTINGS,] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [TENANT_ID,] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [LANGUAGE_CODE,] }] },
    { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [USE_DEVICE_LANGUAGE,] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [PERSISTENCE,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularFireAuth, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'any'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"]]
            }] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [USE_EMULATOR]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [SETTINGS]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [TENANT_ID]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [LANGUAGE_CODE]
            }] }, { type: Boolean, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [USE_DEVICE_LANGUAGE]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [PERSISTENCE]
            }] }]; }, null); })();
Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵapplyMixins"])(AngularFireAuth, [proxyPolyfillCompat]);

class AngularFireAuthModule {
}
AngularFireAuthModule.ɵfac = function AngularFireAuthModule_Factory(t) { return new (t || AngularFireAuthModule)(); };
AngularFireAuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AngularFireAuthModule });
AngularFireAuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [AngularFireAuth] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularFireAuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                providers: [AngularFireAuth]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=angular-fire-auth.js.map

/***/ }),

/***/ "WUq3":
/*!**********************************************************************************!*\
  !*** ./src/app/views/product/happy-birthday-bx/happy-birthday-bx.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoYXBweS1iaXJ0aGRheS1ieC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "Wcq6":
/*!*****************************************************!*\
  !*** ./node_modules/firebase/app/dist/index.cjs.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var firebase = __webpack_require__(/*! @firebase/app */ "wj3C");

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var firebase__default = /*#__PURE__*/_interopDefaultLegacy(firebase);

var name = "firebase";
var version = "7.24.0";

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
firebase__default['default'].registerVersion(name, version, 'app');

module.exports = firebase__default['default'];
//# sourceMappingURL=index.cjs.js.map


/***/ }),

/***/ "WdlL":
/*!***************************************************************!*\
  !*** ./src/app/views/product/lesson/chat/chat.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGF0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "Zs65":
/*!**********************************************************!*\
  !*** ./node_modules/firebase/database/dist/index.esm.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/database */ "NSPt");
/* harmony import */ var _firebase_database__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_database__WEBPACK_IMPORTED_MODULE_0__);

//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "amVz":
/*!*****************************************************************************!*\
  !*** ./src/app/views/product/lesson/listen-read/listen-read.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0ZW4tcmVhZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "cSmn":
/*!***************************************************************!*\
  !*** ./node_modules/canvas-confetti/dist/confetti.module.mjs ***!
  \***************************************************************/
/*! exports provided: default, create */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
// canvas-confetti v1.4.0 built on 2021-03-10T12:32:33.488Z
var module = {};

// source content
(function main(global, module, isWorker, workerSize) {
  var canUseWorker = !!(
    global.Worker &&
    global.Blob &&
    global.Promise &&
    global.OffscreenCanvas &&
    global.OffscreenCanvasRenderingContext2D &&
    global.HTMLCanvasElement &&
    global.HTMLCanvasElement.prototype.transferControlToOffscreen &&
    global.URL &&
    global.URL.createObjectURL);

  function noop() {}

  // create a promise if it exists, otherwise, just
  // call the function directly
  function promise(func) {
    var ModulePromise = module.exports.Promise;
    var Prom = ModulePromise !== void 0 ? ModulePromise : global.Promise;

    if (typeof Prom === 'function') {
      return new Prom(func);
    }

    func(noop, noop);

    return null;
  }

  var raf = (function () {
    var TIME = Math.floor(1000 / 60);
    var frame, cancel;
    var frames = {};
    var lastFrameTime = 0;

    if (typeof requestAnimationFrame === 'function' && typeof cancelAnimationFrame === 'function') {
      frame = function (cb) {
        var id = Math.random();

        frames[id] = requestAnimationFrame(function onFrame(time) {
          if (lastFrameTime === time || lastFrameTime + TIME - 1 < time) {
            lastFrameTime = time;
            delete frames[id];

            cb();
          } else {
            frames[id] = requestAnimationFrame(onFrame);
          }
        });

        return id;
      };
      cancel = function (id) {
        if (frames[id]) {
          cancelAnimationFrame(frames[id]);
        }
      };
    } else {
      frame = function (cb) {
        return setTimeout(cb, TIME);
      };
      cancel = function (timer) {
        return clearTimeout(timer);
      };
    }

    return { frame: frame, cancel: cancel };
  }());

  var getWorker = (function () {
    var worker;
    var prom;
    var resolves = {};

    function decorate(worker) {
      function execute(options, callback) {
        worker.postMessage({ options: options || {}, callback: callback });
      }
      worker.init = function initWorker(canvas) {
        var offscreen = canvas.transferControlToOffscreen();
        worker.postMessage({ canvas: offscreen }, [offscreen]);
      };

      worker.fire = function fireWorker(options, size, done) {
        if (prom) {
          execute(options, null);
          return prom;
        }

        var id = Math.random().toString(36).slice(2);

        prom = promise(function (resolve) {
          function workerDone(msg) {
            if (msg.data.callback !== id) {
              return;
            }

            delete resolves[id];
            worker.removeEventListener('message', workerDone);

            prom = null;
            done();
            resolve();
          }

          worker.addEventListener('message', workerDone);
          execute(options, id);

          resolves[id] = workerDone.bind(null, { data: { callback: id }});
        });

        return prom;
      };

      worker.reset = function resetWorker() {
        worker.postMessage({ reset: true });

        for (var id in resolves) {
          resolves[id]();
          delete resolves[id];
        }
      };
    }

    return function () {
      if (worker) {
        return worker;
      }

      if (!isWorker && canUseWorker) {
        var code = [
          'var CONFETTI, SIZE = {}, module = {};',
          '(' + main.toString() + ')(this, module, true, SIZE);',
          'onmessage = function(msg) {',
          '  if (msg.data.options) {',
          '    CONFETTI(msg.data.options).then(function () {',
          '      if (msg.data.callback) {',
          '        postMessage({ callback: msg.data.callback });',
          '      }',
          '    });',
          '  } else if (msg.data.reset) {',
          '    CONFETTI.reset();',
          '  } else if (msg.data.resize) {',
          '    SIZE.width = msg.data.resize.width;',
          '    SIZE.height = msg.data.resize.height;',
          '  } else if (msg.data.canvas) {',
          '    SIZE.width = msg.data.canvas.width;',
          '    SIZE.height = msg.data.canvas.height;',
          '    CONFETTI = module.exports.create(msg.data.canvas);',
          '  }',
          '}',
        ].join('\n');
        try {
          worker = new Worker(URL.createObjectURL(new Blob([code])));
        } catch (e) {
          // eslint-disable-next-line no-console
          typeof console !== undefined && typeof console.warn === 'function' ? console.warn('🎊 Could not load worker', e) : null;

          return null;
        }

        decorate(worker);
      }

      return worker;
    };
  })();

  var defaults = {
    particleCount: 50,
    angle: 90,
    spread: 45,
    startVelocity: 45,
    decay: 0.9,
    gravity: 1,
    drift: 0,
    ticks: 200,
    x: 0.5,
    y: 0.5,
    shapes: ['square', 'circle'],
    zIndex: 100,
    colors: [
      '#26ccff',
      '#a25afd',
      '#ff5e7e',
      '#88ff5a',
      '#fcff42',
      '#ffa62d',
      '#ff36ff'
    ],
    // probably should be true, but back-compat
    disableForReducedMotion: false,
    scalar: 1
  };

  function convert(val, transform) {
    return transform ? transform(val) : val;
  }

  function isOk(val) {
    return !(val === null || val === undefined);
  }

  function prop(options, name, transform) {
    return convert(
      options && isOk(options[name]) ? options[name] : defaults[name],
      transform
    );
  }

  function onlyPositiveInt(number){
    return number < 0 ? 0 : Math.floor(number);
  }

  function randomInt(min, max) {
    // [min, max)
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function toDecimal(str) {
    return parseInt(str, 16);
  }

  function colorsToRgb(colors) {
    return colors.map(hexToRgb);
  }

  function hexToRgb(str) {
    var val = String(str).replace(/[^0-9a-f]/gi, '');

    if (val.length < 6) {
        val = val[0]+val[0]+val[1]+val[1]+val[2]+val[2];
    }

    return {
      r: toDecimal(val.substring(0,2)),
      g: toDecimal(val.substring(2,4)),
      b: toDecimal(val.substring(4,6))
    };
  }

  function getOrigin(options) {
    var origin = prop(options, 'origin', Object);
    origin.x = prop(origin, 'x', Number);
    origin.y = prop(origin, 'y', Number);

    return origin;
  }

  function setCanvasWindowSize(canvas) {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
  }

  function setCanvasRectSize(canvas) {
    var rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }

  function getCanvas(zIndex) {
    var canvas = document.createElement('canvas');

    canvas.style.position = 'fixed';
    canvas.style.top = '0px';
    canvas.style.left = '0px';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = zIndex;

    return canvas;
  }

  function ellipse(context, x, y, radiusX, radiusY, rotation, startAngle, endAngle, antiClockwise) {
    context.save();
    context.translate(x, y);
    context.rotate(rotation);
    context.scale(radiusX, radiusY);
    context.arc(0, 0, 1, startAngle, endAngle, antiClockwise);
    context.restore();
  }

  function randomPhysics(opts) {
    var radAngle = opts.angle * (Math.PI / 180);
    var radSpread = opts.spread * (Math.PI / 180);

    return {
      x: opts.x,
      y: opts.y,
      wobble: Math.random() * 10,
      velocity: (opts.startVelocity * 0.5) + (Math.random() * opts.startVelocity),
      angle2D: -radAngle + ((0.5 * radSpread) - (Math.random() * radSpread)),
      tiltAngle: Math.random() * Math.PI,
      color: opts.color,
      shape: opts.shape,
      tick: 0,
      totalTicks: opts.ticks,
      decay: opts.decay,
      drift: opts.drift,
      random: Math.random() + 5,
      tiltSin: 0,
      tiltCos: 0,
      wobbleX: 0,
      wobbleY: 0,
      gravity: opts.gravity * 3,
      ovalScalar: 0.6,
      scalar: opts.scalar
    };
  }

  function updateFetti(context, fetti) {
    fetti.x += Math.cos(fetti.angle2D) * fetti.velocity + fetti.drift;
    fetti.y += Math.sin(fetti.angle2D) * fetti.velocity + fetti.gravity;
    fetti.wobble += 0.1;
    fetti.velocity *= fetti.decay;
    fetti.tiltAngle += 0.1;
    fetti.tiltSin = Math.sin(fetti.tiltAngle);
    fetti.tiltCos = Math.cos(fetti.tiltAngle);
    fetti.random = Math.random() + 5;
    fetti.wobbleX = fetti.x + ((10 * fetti.scalar) * Math.cos(fetti.wobble));
    fetti.wobbleY = fetti.y + ((10 * fetti.scalar) * Math.sin(fetti.wobble));

    var progress = (fetti.tick++) / fetti.totalTicks;

    var x1 = fetti.x + (fetti.random * fetti.tiltCos);
    var y1 = fetti.y + (fetti.random * fetti.tiltSin);
    var x2 = fetti.wobbleX + (fetti.random * fetti.tiltCos);
    var y2 = fetti.wobbleY + (fetti.random * fetti.tiltSin);

    context.fillStyle = 'rgba(' + fetti.color.r + ', ' + fetti.color.g + ', ' + fetti.color.b + ', ' + (1 - progress) + ')';
    context.beginPath();

    if (fetti.shape === 'circle') {
      context.ellipse ?
        context.ellipse(fetti.x, fetti.y, Math.abs(x2 - x1) * fetti.ovalScalar, Math.abs(y2 - y1) * fetti.ovalScalar, Math.PI / 10 * fetti.wobble, 0, 2 * Math.PI) :
        ellipse(context, fetti.x, fetti.y, Math.abs(x2 - x1) * fetti.ovalScalar, Math.abs(y2 - y1) * fetti.ovalScalar, Math.PI / 10 * fetti.wobble, 0, 2 * Math.PI);
    } else {
      context.moveTo(Math.floor(fetti.x), Math.floor(fetti.y));
      context.lineTo(Math.floor(fetti.wobbleX), Math.floor(y1));
      context.lineTo(Math.floor(x2), Math.floor(y2));
      context.lineTo(Math.floor(x1), Math.floor(fetti.wobbleY));
    }

    context.closePath();
    context.fill();

    return fetti.tick < fetti.totalTicks;
  }

  function animate(canvas, fettis, resizer, size, done) {
    var animatingFettis = fettis.slice();
    var context = canvas.getContext('2d');
    var animationFrame;
    var destroy;

    var prom = promise(function (resolve) {
      function onDone() {
        animationFrame = destroy = null;

        context.clearRect(0, 0, size.width, size.height);

        done();
        resolve();
      }

      function update() {
        if (isWorker && !(size.width === workerSize.width && size.height === workerSize.height)) {
          size.width = canvas.width = workerSize.width;
          size.height = canvas.height = workerSize.height;
        }

        if (!size.width && !size.height) {
          resizer(canvas);
          size.width = canvas.width;
          size.height = canvas.height;
        }

        context.clearRect(0, 0, size.width, size.height);

        animatingFettis = animatingFettis.filter(function (fetti) {
          return updateFetti(context, fetti);
        });

        if (animatingFettis.length) {
          animationFrame = raf.frame(update);
        } else {
          onDone();
        }
      }

      animationFrame = raf.frame(update);
      destroy = onDone;
    });

    return {
      addFettis: function (fettis) {
        animatingFettis = animatingFettis.concat(fettis);

        return prom;
      },
      canvas: canvas,
      promise: prom,
      reset: function () {
        if (animationFrame) {
          raf.cancel(animationFrame);
        }

        if (destroy) {
          destroy();
        }
      }
    };
  }

  function confettiCannon(canvas, globalOpts) {
    var isLibCanvas = !canvas;
    var allowResize = !!prop(globalOpts || {}, 'resize');
    var globalDisableForReducedMotion = prop(globalOpts, 'disableForReducedMotion', Boolean);
    var shouldUseWorker = canUseWorker && !!prop(globalOpts || {}, 'useWorker');
    var worker = shouldUseWorker ? getWorker() : null;
    var resizer = isLibCanvas ? setCanvasWindowSize : setCanvasRectSize;
    var initialized = (canvas && worker) ? !!canvas.__confetti_initialized : false;
    var preferLessMotion = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion)').matches;
    var animationObj;

    function fireLocal(options, size, done) {
      var particleCount = prop(options, 'particleCount', onlyPositiveInt);
      var angle = prop(options, 'angle', Number);
      var spread = prop(options, 'spread', Number);
      var startVelocity = prop(options, 'startVelocity', Number);
      var decay = prop(options, 'decay', Number);
      var gravity = prop(options, 'gravity', Number);
      var drift = prop(options, 'drift', Number);
      var colors = prop(options, 'colors', colorsToRgb);
      var ticks = prop(options, 'ticks', Number);
      var shapes = prop(options, 'shapes');
      var scalar = prop(options, 'scalar');
      var origin = getOrigin(options);

      var temp = particleCount;
      var fettis = [];

      var startX = canvas.width * origin.x;
      var startY = canvas.height * origin.y;

      while (temp--) {
        fettis.push(
          randomPhysics({
            x: startX,
            y: startY,
            angle: angle,
            spread: spread,
            startVelocity: startVelocity,
            color: colors[temp % colors.length],
            shape: shapes[randomInt(0, shapes.length)],
            ticks: ticks,
            decay: decay,
            gravity: gravity,
            drift: drift,
            scalar: scalar
          })
        );
      }

      // if we have a previous canvas already animating,
      // add to it
      if (animationObj) {
        return animationObj.addFettis(fettis);
      }

      animationObj = animate(canvas, fettis, resizer, size , done);

      return animationObj.promise;
    }

    function fire(options) {
      var disableForReducedMotion = globalDisableForReducedMotion || prop(options, 'disableForReducedMotion', Boolean);
      var zIndex = prop(options, 'zIndex', Number);

      if (disableForReducedMotion && preferLessMotion) {
        return promise(function (resolve) {
          resolve();
        });
      }

      if (isLibCanvas && animationObj) {
        // use existing canvas from in-progress animation
        canvas = animationObj.canvas;
      } else if (isLibCanvas && !canvas) {
        // create and initialize a new canvas
        canvas = getCanvas(zIndex);
        document.body.appendChild(canvas);
      }

      if (allowResize && !initialized) {
        // initialize the size of a user-supplied canvas
        resizer(canvas);
      }

      var size = {
        width: canvas.width,
        height: canvas.height
      };

      if (worker && !initialized) {
        worker.init(canvas);
      }

      initialized = true;

      if (worker) {
        canvas.__confetti_initialized = true;
      }

      function onResize() {
        if (worker) {
          // TODO this really shouldn't be immediate, because it is expensive
          var obj = {
            getBoundingClientRect: function () {
              if (!isLibCanvas) {
                return canvas.getBoundingClientRect();
              }
            }
          };

          resizer(obj);

          worker.postMessage({
            resize: {
              width: obj.width,
              height: obj.height
            }
          });
          return;
        }

        // don't actually query the size here, since this
        // can execute frequently and rapidly
        size.width = size.height = null;
      }

      function done() {
        animationObj = null;

        if (allowResize) {
          global.removeEventListener('resize', onResize);
        }

        if (isLibCanvas && canvas) {
          document.body.removeChild(canvas);
          canvas = null;
          initialized = false;
        }
      }

      if (allowResize) {
        global.addEventListener('resize', onResize, false);
      }

      if (worker) {
        return worker.fire(options, size, done);
      }

      return fireLocal(options, size, done);
    }

    fire.reset = function () {
      if (worker) {
        worker.reset();
      }

      if (animationObj) {
        animationObj.reset();
      }
    };

    return fire;
  }

  module.exports = confettiCannon(null, { useWorker: true, resize: true });
  module.exports.create = confettiCannon;
}((function () {
  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof self !== 'undefined') {
    return self;
  }

  return this || {};
})(), module, false));

// end source content

/* harmony default export */ __webpack_exports__["default"] = (module.exports);
var create = module.exports.create;


/***/ }),

/***/ "ieBf":
/*!***************************************************!*\
  !*** ./src/app/views/product/lesson/MyAdapter.ts ***!
  \***************************************************/
/*! exports provided: MyAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAdapter", function() { return MyAdapter; });
/* harmony import */ var ng_chat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-chat */ "yU/L");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");



class MyAdapter extends ng_chat__WEBPACK_IMPORTED_MODULE_0__["ChatAdapter"] {
    listFriends() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(MyAdapter.mockedParticipants.map(user => {
            const participantResponse = new ng_chat__WEBPACK_IMPORTED_MODULE_0__["ParticipantResponse"]();
            participantResponse.participant = user;
            participantResponse.metadata = {
                totalUnreadMessages: Math.floor(Math.random() * 10)
            };
            return participantResponse;
        }));
    }
    getMessageHistory(destinataryId) {
        let mockedHistory;
        mockedHistory = [
            {
                fromId: 1,
                toId: 999,
                message: 'Hi there, just type any message bellow to test this Angular module.',
                dateSent: new Date()
            }
        ];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(mockedHistory).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(2000));
    }
    sendMessage(message) {
        setTimeout(() => {
            const replyMessage = new ng_chat__WEBPACK_IMPORTED_MODULE_0__["Message"]();
            replyMessage.message = "You have typed '" + message.message + "'";
            replyMessage.dateSent = new Date();
            if (isNaN(message.toId)) {
                const group = MyAdapter.mockedParticipants.find(x => x.id === message.toId);
                // Message to a group. Pick up any participant for this
                const randomParticipantIndex = Math.floor(Math.random() * group.chattingTo.length);
                replyMessage.fromId = group.chattingTo[randomParticipantIndex].id;
                replyMessage.toId = message.toId;
                this.onMessageReceived(group, replyMessage);
            }
            else {
                replyMessage.fromId = message.toId;
                replyMessage.toId = message.fromId;
                const user = MyAdapter.mockedParticipants.find(x => x.id === replyMessage.fromId);
                this.onMessageReceived(user, replyMessage);
            }
        }, 1000);
    }
    groupCreated(group) {
        MyAdapter.mockedParticipants.push(group);
        MyAdapter.mockedParticipants = MyAdapter.mockedParticipants.sort((first, second) => second.displayName > first.displayName ? -1 : 1);
        // Trigger update of friends list
        this.listFriends().subscribe(response => {
            this.onFriendsListChanged(response);
        });
    }
}
MyAdapter.mockedParticipants = [
    {
        participantType: ng_chat__WEBPACK_IMPORTED_MODULE_0__["ChatParticipantType"].User,
        id: 1,
        displayName: 'Arya Stark',
        avatar: 'https://66.media.tumblr.com/avatar_9dd9bb497b75_128.pnj',
        status: ng_chat__WEBPACK_IMPORTED_MODULE_0__["ChatParticipantStatus"].Online
    },
    {
        participantType: ng_chat__WEBPACK_IMPORTED_MODULE_0__["ChatParticipantType"].User,
        id: 2,
        displayName: 'Cersei Lannister',
        avatar: null,
        status: ng_chat__WEBPACK_IMPORTED_MODULE_0__["ChatParticipantStatus"].Online
    },
    {
        participantType: ng_chat__WEBPACK_IMPORTED_MODULE_0__["ChatParticipantType"].User,
        id: 3,
        displayName: 'Daenerys Targaryen',
        avatar: 'https://68.media.tumblr.com/avatar_d28d7149f567_128.png',
        status: ng_chat__WEBPACK_IMPORTED_MODULE_0__["ChatParticipantStatus"].Busy
    },
    {
        participantType: ng_chat__WEBPACK_IMPORTED_MODULE_0__["ChatParticipantType"].User,
        id: 4,
        displayName: 'Eddard Stark',
        avatar: 'https://pbs.twimg.com/profile_images/600707945911844864/MNogF757_400x400.jpg',
        status: ng_chat__WEBPACK_IMPORTED_MODULE_0__["ChatParticipantStatus"].Offline
    },
    {
        participantType: ng_chat__WEBPACK_IMPORTED_MODULE_0__["ChatParticipantType"].User,
        id: 5,
        displayName: 'Hodor',
        avatar: 'https://pbs.twimg.com/profile_images/378800000449071678/27f2e27edd119a7133110f8635f2c130.jpeg',
        status: ng_chat__WEBPACK_IMPORTED_MODULE_0__["ChatParticipantStatus"].Offline
    },
    {
        participantType: ng_chat__WEBPACK_IMPORTED_MODULE_0__["ChatParticipantType"].User,
        id: 6,
        displayName: 'Jaime Lannister',
        avatar: 'https://pbs.twimg.com/profile_images/378800000243930208/4fa8efadb63777ead29046d822606a57.jpeg',
        status: ng_chat__WEBPACK_IMPORTED_MODULE_0__["ChatParticipantStatus"].Busy
    },
    {
        participantType: ng_chat__WEBPACK_IMPORTED_MODULE_0__["ChatParticipantType"].User,
        id: 7,
        displayName: 'John Snow',
        avatar: 'https://pbs.twimg.com/profile_images/3456602315/aad436e6fab77ef4098c7a5b86cac8e3.jpeg',
        status: ng_chat__WEBPACK_IMPORTED_MODULE_0__["ChatParticipantStatus"].Busy
    },
    {
        participantType: ng_chat__WEBPACK_IMPORTED_MODULE_0__["ChatParticipantType"].User,
        id: 8,
        displayName: 'Lorde Petyr Littlefinger Baelish',
        avatar: 'http://68.media.tumblr.com/avatar_ba75cbb26da7_128.png',
        status: ng_chat__WEBPACK_IMPORTED_MODULE_0__["ChatParticipantStatus"].Offline
    },
    {
        participantType: ng_chat__WEBPACK_IMPORTED_MODULE_0__["ChatParticipantType"].User,
        id: 9,
        displayName: 'Sansa Stark',
        avatar: 'http://pm1.narvii.com/6201/dfe7ad75cd32130a5c844d58315cbca02fe5b804_128.jpg',
        status: ng_chat__WEBPACK_IMPORTED_MODULE_0__["ChatParticipantStatus"].Online
    },
    {
        participantType: ng_chat__WEBPACK_IMPORTED_MODULE_0__["ChatParticipantType"].User,
        id: 10,
        displayName: 'Theon Greyjoy',
        avatar: 'https://thumbnail.myheritageimages.com/502/323/78502323/000/000114_884889c3n33qfe004v5024_C_64x64C.jpg',
        status: ng_chat__WEBPACK_IMPORTED_MODULE_0__["ChatParticipantStatus"].Away
    }
];


/***/ }),

/***/ "ngqT":
/*!*********************************************************************!*\
  !*** ./src/app/views/product/lesson/grammar/grammar.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncmFtbWFyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "p1AC":
/*!***************************************************************!*\
  !*** ./src/app/views/product/firebase-demo/window.service.ts ***!
  \***************************************************************/
/*! exports provided: WindowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowService", function() { return WindowService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let WindowService = class WindowService {
    get windowRef() {
        return window;
    }
};
WindowService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], WindowService);



/***/ }),

/***/ "qcOx":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/product/happy-birthday-bx/happy-birthday-bx.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>happy-birthday-bx works!</p>\n");

/***/ }),

/***/ "s0Rt":
/*!**************************************************************************!*\
  !*** ./src/app/views/product/firebase-demo/firebase-demo.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaXJlYmFzZS1kZW1vLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "sPYa":
/*!*********************************************************************************************************!*\
  !*** ./src/app/views/product/lesson/listen-read/listen-read-content/listen-read-content.component.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0ZW4tcmVhZC1jb250ZW50LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "sSZD":
/*!***********************************************************************************!*\
  !*** ./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js ***!
  \***********************************************************************************/
/*! exports provided: AngularFireDatabase, AngularFireDatabaseModule, URL, USE_EMULATOR, auditTrail, createListReference, fromRef, listChanges, snapshotChanges, stateChanges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFireDatabase", function() { return AngularFireDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFireDatabaseModule", function() { return AngularFireDatabaseModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USE_EMULATOR", function() { return USE_EMULATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auditTrail", function() { return auditTrail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createListReference", function() { return createListReference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRef", function() { return fromRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listChanges", function() { return listChanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapshotChanges", function() { return snapshotChanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateChanges", function() { return stateChanges; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/database */ "Zs65");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/app */ "Wcq6");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_6__);












function isString(value) {
    return typeof value === 'string';
}
function isFirebaseDataSnapshot(value) {
    return typeof value.exportVal === 'function';
}
function isNil(obj) {
    return obj === undefined || obj === null;
}
function isFirebaseRef(value) {
    return typeof value.set === 'function';
}
/**
 * Returns a database reference given a Firebase App and an
 * absolute or relative path.
 * @param database - Firebase Database
 * @param pathRef - Database path, relative or absolute
 */
function getRef(database, pathRef) {
    // if a db ref was passed in, just return it
    return isFirebaseRef(pathRef) ? pathRef
        : database.ref(pathRef);
}
function checkOperationCases(item, cases) {
    if (isString(item)) {
        return cases.stringCase();
    }
    else if (isFirebaseRef(item)) {
        return cases.firebaseCase();
    }
    else if (isFirebaseDataSnapshot(item)) {
        return cases.snapshotCase();
    }
    throw new Error(`Expects a string, snapshot, or reference. Got: ${typeof item}`);
}

/**
 * Create an observable from a Database Reference or Database Query.
 * @param ref Database Reference
 * @param event Listen event type ('value', 'added', 'changed', 'removed', 'moved')
 * @param listenType 'on' or 'once'
 * @param scheduler - Rxjs scheduler
 */
function fromRef(ref, event, listenType = 'on', scheduler = rxjs__WEBPACK_IMPORTED_MODULE_1__["asyncScheduler"]) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](subscriber => {
        let fn = null;
        fn = ref[listenType](event, (snapshot, prevKey) => {
            scheduler.schedule(() => {
                subscriber.next({ snapshot, prevKey });
            });
            if (listenType === 'once') {
                scheduler.schedule(() => subscriber.complete());
            }
        }, err => {
            scheduler.schedule(() => subscriber.error(err));
        });
        if (listenType === 'on') {
            return {
                unsubscribe() {
                    if (fn != null) {
                        ref.off(event, fn);
                    }
                }
            };
        }
        else {
            return {
                unsubscribe() {
                }
            };
        }
    }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(payload => {
        const { snapshot, prevKey } = payload;
        let key = null;
        if (snapshot.exists()) {
            key = snapshot.key;
        }
        return { type: event, payload: snapshot, prevKey, key };
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
}

function listChanges(ref, events, scheduler) {
    return fromRef(ref, 'value', 'once', scheduler).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(snapshotAction => {
        const childEvent$ = [Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(snapshotAction)];
        events.forEach(event => childEvent$.push(fromRef(ref, event, 'on', scheduler)));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(...childEvent$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])(buildView, []));
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])());
}
function positionFor(changes, key) {
    const len = changes.length;
    for (let i = 0; i < len; i++) {
        if (changes[i].payload.key === key) {
            return i;
        }
    }
    return -1;
}
function positionAfter(changes, prevKey) {
    if (isNil(prevKey)) {
        return 0;
    }
    else {
        const i = positionFor(changes, prevKey);
        if (i === -1) {
            return changes.length;
        }
        else {
            return i + 1;
        }
    }
}
function buildView(current, action) {
    const { payload, prevKey, key } = action;
    const currentKeyPosition = positionFor(current, key);
    const afterPreviousKeyPosition = positionAfter(current, prevKey);
    switch (action.type) {
        case 'value':
            if (action.payload && action.payload.exists()) {
                let prevKey = null;
                action.payload.forEach(payload => {
                    const action = { payload, type: 'value', prevKey, key: payload.key };
                    prevKey = payload.key;
                    current = [...current, action];
                    return false;
                });
            }
            return current;
        case 'child_added':
            if (currentKeyPosition > -1) {
                // check that the previouskey is what we expect, else reorder
                const previous = current[currentKeyPosition - 1];
                if ((previous && previous.key || null) !== prevKey) {
                    current = current.filter(x => x.payload.key !== payload.key);
                    current.splice(afterPreviousKeyPosition, 0, action);
                }
            }
            else if (prevKey == null) {
                return [action, ...current];
            }
            else {
                current = current.slice();
                current.splice(afterPreviousKeyPosition, 0, action);
            }
            return current;
        case 'child_removed':
            return current.filter(x => x.payload.key !== payload.key);
        case 'child_changed':
            return current.map(x => x.payload.key === key ? action : x);
        case 'child_moved':
            if (currentKeyPosition > -1) {
                const data = current.splice(currentKeyPosition, 1)[0];
                current = current.slice();
                current.splice(afterPreviousKeyPosition, 0, data);
                return current;
            }
            return current;
        // default will also remove null results
        default:
            return current;
    }
}

function validateEventsArray(events) {
    if (isNil(events) || events.length === 0) {
        events = ['child_added', 'child_removed', 'child_changed', 'child_moved'];
    }
    return events;
}

function snapshotChanges(query, events, scheduler) {
    events = validateEventsArray(events);
    return listChanges(query, events, scheduler);
}

function stateChanges(query, events, scheduler) {
    events = validateEventsArray(events);
    const childEvent$ = events.map(event => fromRef(query, event, 'on', scheduler));
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(...childEvent$);
}

function auditTrail(query, events, scheduler) {
    const auditTrail$ = stateChanges(query, events)
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])((current, action) => [...current, action], []));
    return waitForLoaded(query, auditTrail$, scheduler);
}
function loadedData(query, scheduler) {
    // Create an observable of loaded values to retrieve the
    // known dataset. This will allow us to know what key to
    // emit the "whole" array at when listening for child events.
    return fromRef(query, 'value', 'on', scheduler)
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
        // Store the last key in the data set
        let lastKeyToLoad;
        // Loop through loaded dataset to find the last key
        data.payload.forEach(child => {
            lastKeyToLoad = child.key;
            return false;
        });
        // return data set and the current last key loaded
        return { data, lastKeyToLoad };
    }));
}
function waitForLoaded(query, action$, scheduler) {
    const loaded$ = loadedData(query, scheduler);
    return loaded$
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(action$), 
    // Get the latest values from the "loaded" and "child" datasets
    // We can use both datasets to form an array of the latest values.
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(([loaded, actions]) => {
        // Store the last key in the data set
        const lastKeyToLoad = loaded.lastKeyToLoad;
        // Store all child keys loaded at this point
        const loadedKeys = actions.map(snap => snap.key);
        return { actions, lastKeyToLoad, loadedKeys };
    }), 
    // This is the magical part, only emit when the last load key
    // in the dataset has been loaded by a child event. At this point
    // we can assume the dataset is "whole".
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["skipWhile"])(meta => meta.loadedKeys.indexOf(meta.lastKeyToLoad) === -1), 
    // Pluck off the meta data because the user only cares
    // to iterate through the snapshots
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(meta => meta.actions));
}

function createDataOperationMethod(ref, operation) {
    return function dataOperation(item, value) {
        return checkOperationCases(item, {
            stringCase: () => ref.child(item)[operation](value),
            firebaseCase: () => item[operation](value),
            snapshotCase: () => item.ref[operation](value)
        });
    };
}

// TODO(davideast): Find out why TS thinks this returns firebase.Primise
// instead of Promise.
function createRemoveMethod(ref) {
    return function remove(item) {
        if (!item) {
            return ref.remove();
        }
        return checkOperationCases(item, {
            stringCase: () => ref.child(item).remove(),
            firebaseCase: () => item.remove(),
            snapshotCase: () => item.ref.remove()
        });
    };
}

function createListReference(query, afDatabase) {
    const outsideAngularScheduler = afDatabase.schedulers.outsideAngular;
    const refInZone = afDatabase.schedulers.ngZone.run(() => query.ref);
    return {
        query,
        update: createDataOperationMethod(refInZone, 'update'),
        set: createDataOperationMethod(refInZone, 'set'),
        push: (data) => refInZone.push(data),
        remove: createRemoveMethod(refInZone),
        snapshotChanges(events) {
            return snapshotChanges(query, events, outsideAngularScheduler).pipe(afDatabase.keepUnstableUntilFirst);
        },
        stateChanges(events) {
            return stateChanges(query, events, outsideAngularScheduler).pipe(afDatabase.keepUnstableUntilFirst);
        },
        auditTrail(events) {
            return auditTrail(query, events, outsideAngularScheduler).pipe(afDatabase.keepUnstableUntilFirst);
        },
        valueChanges(events, options) {
            const snapshotChanges$ = snapshotChanges(query, events, outsideAngularScheduler);
            return snapshotChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(actions => actions.map(a => {
                if (options && options.idField) {
                    return Object.assign(Object.assign({}, a.payload.val()), {
                        [options.idField]: a.key
                    });
                }
                else {
                    return a.payload.val();
                }
            })), afDatabase.keepUnstableUntilFirst);
        }
    };
}

function createObjectSnapshotChanges(query, scheduler) {
    return function snapshotChanges() {
        return fromRef(query, 'value', 'on', scheduler);
    };
}

function createObjectReference(query, afDatabase) {
    return {
        query,
        snapshotChanges() {
            return createObjectSnapshotChanges(query, afDatabase.schedulers.outsideAngular)().pipe(afDatabase.keepUnstableUntilFirst);
        },
        update(data) { return query.ref.update(data); },
        set(data) { return query.ref.set(data); },
        remove() { return query.ref.remove(); },
        valueChanges() {
            const snapshotChanges$ = createObjectSnapshotChanges(query, afDatabase.schedulers.outsideAngular)();
            return snapshotChanges$.pipe(afDatabase.keepUnstableUntilFirst, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(action => action.payload.exists() ? action.payload.val() : null));
        },
    };
}

const URL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angularfire2.realtimeDatabaseURL');
const USE_EMULATOR = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angularfire2.database.use-emulator');
class AngularFireDatabase {
    constructor(options, nameOrConfig, databaseURL, 
    // tslint:disable-next-line:ban-types
    platformId, zone, _useEmulator, // tuple isn't working here
    useAuthEmulator) {
        this.schedulers = new _angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵAngularFireSchedulers"](zone);
        this.keepUnstableUntilFirst = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵkeepUnstableUntilFirstFactory"])(this.schedulers);
        const useEmulator = _useEmulator;
        const app = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵfirebaseAppFactory"])(options, zone, nameOrConfig);
        if (!firebase_app__WEBPACK_IMPORTED_MODULE_6___default.a.auth && useAuthEmulator) {
            Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵlogAuthEmulatorError"])();
        }
        this.database = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵfetchInstance"])(`${app.name}.database.${databaseURL}`, 'AngularFireDatabase', app, () => {
            const database = zone.runOutsideAngular(() => app.database(databaseURL || undefined));
            if (useEmulator) {
                database.useEmulator(...useEmulator);
            }
            return database;
        }, [useEmulator]);
    }
    list(pathOrRef, queryFn) {
        const ref = this.schedulers.ngZone.runOutsideAngular(() => getRef(this.database, pathOrRef));
        let query = ref;
        if (queryFn) {
            query = queryFn(ref);
        }
        return createListReference(query, this);
    }
    object(pathOrRef) {
        const ref = this.schedulers.ngZone.runOutsideAngular(() => getRef(this.database, pathOrRef));
        return createObjectReference(ref, this);
    }
    createPushId() {
        const ref = this.schedulers.ngZone.runOutsideAngular(() => this.database.ref());
        return ref.push().key;
    }
}
AngularFireDatabase.ɵfac = function AngularFireDatabase_Factory(t) { return new (t || AngularFireDatabase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](URL, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](USE_EMULATOR, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["USE_EMULATOR"], 8)); };
/** @nocollapse */ AngularFireDatabase.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function AngularFireDatabase_Factory() { return new AngularFireDatabase(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](URL, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](USE_EMULATOR, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["USE_EMULATOR"], 8)); }, token: AngularFireDatabase, providedIn: "any" });
/** @nocollapse */
AngularFireDatabase.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [URL,] }] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [USE_EMULATOR,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["USE_EMULATOR"],] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularFireDatabase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'any'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"]]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [URL]
            }] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [USE_EMULATOR]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["USE_EMULATOR"]]
            }] }]; }, null); })();

class AngularFireDatabaseModule {
}
AngularFireDatabaseModule.ɵfac = function AngularFireDatabaseModule_Factory(t) { return new (t || AngularFireDatabaseModule)(); };
AngularFireDatabaseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AngularFireDatabaseModule });
AngularFireDatabaseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [AngularFireDatabase] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularFireDatabaseModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                providers: [AngularFireDatabase]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=angular-fire-database.js.map

/***/ }),

/***/ "spgP":
/*!**************************************************************************!*\
  !*** ./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js ***!
  \**************************************************************************/
/*! exports provided: AngularFireModule, FIREBASE_APP_NAME, FIREBASE_OPTIONS, FirebaseApp, VERSION, ɵ0, ɵAngularFireSchedulers, ɵBlockUntilFirstOperator, ɵZoneScheduler, ɵapplyMixins, ɵfetchInstance, ɵfirebaseAppFactory, ɵkeepUnstableUntilFirstFactory, ɵlazySDKProxy, ɵlogAuthEmulatorError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFireModule", function() { return AngularFireModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIREBASE_APP_NAME", function() { return FIREBASE_APP_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIREBASE_OPTIONS", function() { return FIREBASE_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseApp", function() { return FirebaseApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵAngularFireSchedulers", function() { return ɵAngularFireSchedulers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵBlockUntilFirstOperator", function() { return ɵBlockUntilFirstOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵZoneScheduler", function() { return ɵZoneScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵapplyMixins", function() { return ɵapplyMixins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵfetchInstance", function() { return ɵfetchInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵfirebaseAppFactory", function() { return ɵfirebaseAppFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵkeepUnstableUntilFirstFactory", function() { return ɵkeepUnstableUntilFirstFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵlazySDKProxy", function() { return ɵlazySDKProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵlogAuthEmulatorError", function() { return ɵlogAuthEmulatorError; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "Wcq6");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);






function noop() {
}
/**
 * Schedules tasks so that they are invoked inside the Zone that is passed in the constructor.
 */
// tslint:disable-next-line:class-name
class ɵZoneScheduler {
    constructor(zone, delegate = rxjs__WEBPACK_IMPORTED_MODULE_0__["queueScheduler"]) {
        this.zone = zone;
        this.delegate = delegate;
    }
    now() {
        return this.delegate.now();
    }
    schedule(work, delay, state) {
        const targetZone = this.zone;
        // Wrap the specified work function to make sure that if nested scheduling takes place the
        // work is executed in the correct zone
        const workInZone = function (state) {
            targetZone.runGuarded(() => {
                work.apply(this, [state]);
            });
        };
        // Scheduling itself needs to be run in zone to ensure setInterval calls for async scheduling are done
        // inside the correct zone. This scheduler needs to schedule asynchronously always to ensure that
        // firebase emissions are never synchronous. Specifying a delay causes issues with the queueScheduler delegate.
        return this.delegate.schedule(workInZone, delay, state);
    }
}
// tslint:disable-next-line:class-name
class ɵBlockUntilFirstOperator {
    constructor(zone) {
        this.zone = zone;
        this.task = null;
    }
    call(subscriber, source) {
        const unscheduleTask = this.unscheduleTask.bind(this);
        this.task = this.zone.run(() => Zone.current.scheduleMacroTask('firebaseZoneBlock', noop, {}, noop, noop));
        return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])({ next: unscheduleTask, complete: unscheduleTask, error: unscheduleTask })).subscribe(subscriber).add(unscheduleTask);
    }
    unscheduleTask() {
        // maybe this is a race condition, invoke in a timeout
        // hold for 10ms while I try to figure out what is going on
        setTimeout(() => {
            if (this.task != null && this.task.state === 'scheduled') {
                this.task.invoke();
                this.task = null;
            }
        }, 10);
    }
}
// tslint:disable-next-line:class-name
class ɵAngularFireSchedulers {
    constructor(ngZone) {
        this.ngZone = ngZone;
        this.outsideAngular = ngZone.runOutsideAngular(() => new ɵZoneScheduler(Zone.current));
        this.insideAngular = ngZone.run(() => new ɵZoneScheduler(Zone.current, rxjs__WEBPACK_IMPORTED_MODULE_0__["asyncScheduler"]));
    }
}
/**
 * Operator to block the zone until the first value has been emitted or the observable
 * has completed/errored. This is used to make sure that universal waits until the first
 * value from firebase but doesn't block the zone forever since the firebase subscription
 * is still alive.
 */
function ɵkeepUnstableUntilFirstFactory(schedulers) {
    return function keepUnstableUntilFirst(obs$) {
        obs$ = obs$.lift(new ɵBlockUntilFirstOperator(schedulers.ngZone));
        return obs$.pipe(
        // Run the subscribe body outside of Angular (e.g. calling Firebase SDK to add a listener to a change event)
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["subscribeOn"])(schedulers.outsideAngular), 
        // Run operators inside the angular zone (e.g. side effects via tap())
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["observeOn"])(schedulers.insideAngular)
        // INVESTIGATE https://github.com/angular/angularfire/pull/2315
        // share()
        );
    };
}
// DEBUG quick debugger function for inline logging that typescript doesn't complain about
//       wrote it for debugging the ɵlazySDKProxy, commenting out for now; should consider exposing a
//       verbose mode for AngularFire in a future release that uses something like this in multiple places
//       usage: () => log('something') || returnValue
// const log = (...args: any[]): false => { console.log(...args); return false }
// The problem here are things like ngOnDestroy are missing, then triggering the service
// rather than dig too far; I'm capturing these as I go.
const noopFunctions = ['ngOnDestroy'];
// INVESTIGATE should we make the Proxy revokable and do some cleanup?
//             right now it's fairly simple but I'm sure this will grow in complexity
const ɵlazySDKProxy = (klass, observable, zone, options = {}) => {
    return new Proxy(klass, {
        get: (_, name) => zone.runOutsideAngular(() => {
            var _a;
            if (klass[name]) {
                if ((_a = options === null || options === void 0 ? void 0 : options.spy) === null || _a === void 0 ? void 0 : _a.get) {
                    options.spy.get(name, klass[name]);
                }
                return klass[name];
            }
            if (noopFunctions.indexOf(name) > -1) {
                return () => {
                };
            }
            const promise = observable.toPromise().then(mod => {
                const ret = mod && mod[name];
                // TODO move to proper type guards
                if (typeof ret === 'function') {
                    return ret.bind(mod);
                }
                else if (ret && ret.then) {
                    return ret.then((res) => zone.run(() => res));
                }
                else {
                    return zone.run(() => ret);
                }
            });
            // recurse the proxy
            return new Proxy(() => { }, {
                get: (_, name) => promise[name],
                // TODO handle callbacks as transparently as I can
                apply: (self, _, args) => promise.then(it => {
                    var _a;
                    const res = it && it(...args);
                    if ((_a = options === null || options === void 0 ? void 0 : options.spy) === null || _a === void 0 ? void 0 : _a.apply) {
                        options.spy.apply(name, args, res);
                    }
                    return res;
                })
            });
        })
    });
};
const ɵapplyMixins = (derivedCtor, constructors) => {
    constructors.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype || baseCtor).forEach((name) => {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype || baseCtor, name));
        });
    });
};

const FIREBASE_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('angularfire2.app.options');
const FIREBASE_APP_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('angularfire2.app.nameOrConfig');
// Have to implement as we need to return a class from the provider, we should consider exporting
// this in the firebase/app types as this is our highest risk of breaks
class FirebaseApp {
}
const VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["Version"]('6.1.5');
function ɵfirebaseAppFactory(options, zone, nameOrConfig) {
    const name = typeof nameOrConfig === 'string' && nameOrConfig || '[DEFAULT]';
    const config = typeof nameOrConfig === 'object' && nameOrConfig || {};
    config.name = config.name || name;
    // Added any due to some inconsistency between @firebase/app and firebase types
    const existingApp = firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.apps.filter(app => app && app.name === config.name)[0];
    // We support FirebaseConfig, initializeApp's public type only accepts string; need to cast as any
    // Could be solved with https://github.com/firebase/firebase-js-sdk/pull/1206
    const app = (existingApp || zone.runOutsideAngular(() => firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.initializeApp(options, config)));
    try {
        if (JSON.stringify(options) !== JSON.stringify(app.options)) {
            const hmr = !!module.hot;
            log('error', `${app.name} Firebase App already initialized with different options${hmr ? ', you may need to reload as Firebase is not HMR aware.' : '.'}`);
        }
    }
    catch (e) { }
    return app;
}
const ɵlogAuthEmulatorError = () => {
    // TODO sort this out, https://github.com/angular/angularfire/issues/2656
    log('warn', 'You may need to import \'firebase/auth\' manually in your component rather than rely on AngularFireAuth\'s dynamic import, when using the emulator suite https://github.com/angular/angularfire/issues/2656');
};
const log = (level, ...args) => {
    if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["isDevMode"])() && typeof console !== 'undefined') {
        console[level](...args);
    }
};
const ɵ0 = log;
globalThis.ɵAngularfireInstanceCache || (globalThis.ɵAngularfireInstanceCache = new Map());
function ɵfetchInstance(cacheKey, moduleName, app, fn, args) {
    const [instance, ...cachedArgs] = globalThis.ɵAngularfireInstanceCache.get(cacheKey) || [];
    if (instance) {
        try {
            if (args.some((arg, i) => {
                const cachedArg = cachedArgs[i];
                if (arg && typeof arg === 'object') {
                    return JSON.stringify(arg) !== JSON.stringify(cachedArg);
                }
                else {
                    return arg !== cachedArg;
                }
            })) {
                const hmr = !!module.hot;
                log('error', `${moduleName} was already initialized on the ${app.name} Firebase App instance with different settings.${hmr ? ' You may need to reload as Firebase is not HMR aware.' : ''}`);
            }
        }
        catch (e) { }
        return instance;
    }
    else {
        const newInstance = fn();
        globalThis.ɵAngularfireInstanceCache.set(cacheKey, [newInstance, ...args]);
        return newInstance;
    }
}
const FIREBASE_APP_PROVIDER = {
    provide: FirebaseApp,
    useFactory: ɵfirebaseAppFactory,
    deps: [
        FIREBASE_OPTIONS,
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
        [new _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"](), FIREBASE_APP_NAME]
    ]
};
class AngularFireModule {
    // tslint:disable-next-line:ban-types
    constructor(platformId) {
        firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.registerVersion('angularfire', VERSION.full, platformId.toString());
        firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.registerVersion('angular', _angular_core__WEBPACK_IMPORTED_MODULE_2__["VERSION"].full);
    }
    static initializeApp(options, nameOrConfig) {
        return {
            ngModule: AngularFireModule,
            providers: [
                { provide: FIREBASE_OPTIONS, useValue: options },
                { provide: FIREBASE_APP_NAME, useValue: nameOrConfig }
            ]
        };
    }
}
AngularFireModule.ɵfac = function AngularFireModule_Factory(t) { return new (t || AngularFireModule)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"])); };
AngularFireModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AngularFireModule });
AngularFireModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [FIREBASE_APP_PROVIDER] });
/** @nocollapse */
AngularFireModule.ctorParameters = () => [
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"],] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AngularFireModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                providers: [FIREBASE_APP_PROVIDER]
            }]
    }], function () { return [{ type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]]
            }] }]; }, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=angular-fire.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "ufJO":
/*!*****************************************************************!*\
  !*** ./src/app/views/product/lesson/listen-read/listen-read.ts ***!
  \*****************************************************************/
/*! exports provided: ListenReads */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListenReads", function() { return ListenReads; });
let ListenReads = [
    {
        title: 'Lesson 01 - Introduction',
        openCollapse: true,
        name: `Introduction`,
        displayOrder: `1`,
        description: `Lesson 01 sẽ hướng dẫn bạn:<br/>
                  ✔️ Chào hỏi, chào tạm biệt.<br/>
                  ✔️ Giới thiệu thông tin cơ bản.<br/>
                  ✔️ Giới thiệu tên, địa chỉ, thông tin liên hệ (email, số điện thoại).`,
        contents: [
            {
                case: `Day 1`,
                title: `Nghe ngấm`,
                content: [
                    {
                        title: `Topic 1: Introducing a friend`,
                        audioLinkSlow: `assets/audio/LESSON 01 - INTRODUCTION/Recording 1.1- Slow speech - Topic 1 - Introducing a friend.mp3`,
                        audioLinkNative: `assets/audio/LESSON 01 - INTRODUCTION/Recording 1.2 - Native speech - Topic 1 - Introducing a friend.mp3`,
                        data: `<!-- #######  YAY, I AM THE SOURCE EDITOR! #########-->
              <p>Anna and Felice are walking out of the library, when they suddenly bump into Peter.<br /><em>Anna v&agrave; Felice đang đi ra khỏi thư viện th&igrave; bất ngờ gặp Peter.</em></p>
              <p><strong>Anna:</strong>&nbsp;Hey, Peter!&nbsp;<strong>How&rsquo;s it going?&nbsp;</strong><br /><em><strong>Anna:</strong>&nbsp;Ch&agrave;o, Peter!&nbsp;<strong>Dạo n&agrave;y cậu thế n&agrave;o?</strong></em></p>
              <p><strong>Peter:</strong>&nbsp;Hi, Anna! Good.&nbsp;<strong>How are you?</strong><br /><em><strong>Peter:</strong>&nbsp;Ch&agrave;o Anna! T&ocirc;i rất tốt.&nbsp;<strong>Cậu khỏe kh&ocirc;ng?</strong></em></p>
              <p><strong>Anna:</strong>&nbsp;Great!&nbsp;<strong>This is my friend</strong>, Felice Lachlan. Felice, this is Peter.<br /><em><strong>Anna:</strong>&nbsp;Tuyệt qu&aacute;!&nbsp;<strong>Đ&acirc;y l&agrave;</strong>&nbsp;bạn của t&ocirc;i, Felice Lachlan. Felice, đ&acirc;y l&agrave; Peter.</em></p>
              <p><strong>Felice: Nice to meet you</strong>, Peter.&nbsp;<br /><em><strong>Felice:</strong>&nbsp;<strong>Rất vui được gặp cậu</strong>, Peter..</em></p>
              <p><strong>Peter:</strong>&nbsp;Nice to meet you too, Felice. That&rsquo;s a pretty name.&nbsp;<strong>How do you spell that?</strong>&nbsp;<br /><em><strong>Peter:&nbsp;</strong>Rất vui được gặp cậu, Felice. Đ&oacute; l&agrave; một c&aacute;i t&ecirc;n đẹp.&nbsp;</em><strong><em>Cậu đ&aacute;nh vần n&oacute; như thế n&agrave;o?</em></strong></p>
              <p><strong>Felice:</strong>&nbsp;F-E-L-I-C-E. It means &ldquo;happy&rdquo; in Latin.&nbsp;<br /><em><strong>Felice:</strong>&nbsp;F-E-L-I-C-E. N&oacute; c&oacute; nghĩa l&agrave; &ldquo;hạnh ph&uacute;c&rdquo; trong tiếng Latin.</em></p>
              <p><strong>Peter:</strong>&nbsp;Oh, are you Latin?&nbsp;<br /><em><strong>Peter:</strong>&nbsp;Ồ, cậu l&agrave; người Latin &agrave;?</em></p>
              <p><strong>Felice:</strong>&nbsp;No, but I am happy.&nbsp;<br /><em><strong>Felice:</strong>&nbsp;Kh&ocirc;ng, nhưng t&ocirc;i hạnh ph&uacute;c.</em></p>
              <p><strong>Peter:</strong>&nbsp;Are you from around here?&nbsp;<br /><em><strong>Peter:</strong>&nbsp;Cậu c&oacute; ở gần đ&acirc;y kh&ocirc;ng?</em></p>
              <p><strong>Felice:</strong>&nbsp;No, Australia. I&rsquo;m just here on&nbsp;<strong>holiday.</strong>&nbsp;<br /><em><strong>Felice:</strong>&nbsp;Kh&ocirc;ng, t&ocirc;i ở &Uacute;c. T&ocirc;i chỉ đến đ&acirc;y v&agrave;o kỳ nghỉ.<strong>.</strong></em></p>
              <p><strong>Anna:</strong>&nbsp;Well, we&rsquo;d better get going.<br /><em><strong>Anna:</strong>&nbsp;N&agrave;o, ch&uacute;ng ta n&ecirc;n đi th&ocirc;i.</em></p>
              <p><strong>Peter:</strong>&nbsp;Yeah, me too. Gotta&nbsp;<strong>hit the books</strong>, as they say.<br /><em><strong>Peter:</strong>&nbsp;Ừ, t&ocirc;i cũng thế. Phải&nbsp;<strong>d&ugrave;i m&agrave;i đ&egrave;n s&aacute;ch th&ocirc;i,&nbsp;</strong>như người ta vẫn n&oacute;i.</em></p>
              <p><strong>Felice:</strong>&nbsp;<strong>It was great meeting you</strong>, Peter.&nbsp;<br /><em><strong>Felice: Thật tuyệt khi gặp cậu,&nbsp;</strong>Peter.</em></p>
              <p><strong>Peter:</strong>&nbsp;You too, Felice.&nbsp;<br /><em><strong>Peter:</strong>&nbsp;Thật tuyệt khi gặp cậu, Felice.</em></p>
              <p><strong>Anna:</strong>&nbsp;<strong>Catch ya later!</strong><br /><em><strong>Anna:</strong>&nbsp;<strong>Gặp nhau sau nh&eacute;!</strong></em></p>
              <p><strong>Peter:</strong>&nbsp;Good day,&nbsp;<strong>mateys!</strong>&nbsp;<br /><em><strong>Peter:</strong>&nbsp;Ch&uacute;c&nbsp;<strong>c&aacute;c cậu</strong>&nbsp;một ng&agrave;y tốt l&agrave;nh!</em></p>
              <p><strong>Felice:</strong>&nbsp;<strong>Peace.</strong>&nbsp;<br /><em><strong>Felice:</strong>&nbsp;Tạm biệt.</em></p>`
                    },
                    {
                        title: `Topic 2: Where do you live`,
                        audioLinkSlow: `assets/audio/LESSON 01 - INTRODUCTION/Recording 1.3 - Slow speech - Topic 2 - Where do you live.mp3`,
                        audioLinkNative: `assets/audio/LESSON 01 - INTRODUCTION/Recording 1.4 - Native speech - Topic 2 - Where do you live.mp3`,
                        data: `<!-- #######  YAY, I AM THE SOURCE EDITOR! #########-->
              <p>Jennifer meets Yoshi, a newcomer for the first time, so she&rsquo;s eager to know more about him.&nbsp;<br /><em>Jennifer lần đầu ti&ecirc;n gặp Yoshi, một nh&acirc;n vi&ecirc;n mới, v&igrave; thế c&ocirc; ấy h&aacute;o hức muốn biết th&ecirc;m về anh ấy.</em></p>
              <p><strong>Jennifer:</strong>&nbsp;Are you the new&nbsp;<strong>employee</strong>?&nbsp;<br /><em><strong>Jennifer:</strong>&nbsp;Cậu c&oacute; phải l&agrave;&nbsp;<strong>nh&acirc;n vi&ecirc;n</strong>&nbsp;mới kh&ocirc;ng?</em></p>
              <p><strong>Yoshi</strong>: Yes, I&rsquo;m Yoshi.&nbsp;<br /><strong>Yoshi:</strong>&nbsp;V&acirc;ng, t&ocirc;i l&agrave; Yoshi.</p>
              <p><strong>Jennifer:</strong>&nbsp;My name is Jennifer, but&nbsp;<strong>you can call me</strong>&nbsp;Jennie.&nbsp;<strong>Where are you from?&nbsp;</strong><br /><em><strong>Jennifer:</strong>&nbsp;T&ocirc;i t&ecirc;n l&agrave; Jennifer, nhưng&nbsp;<strong>cậu c&oacute; thể gọi t&ocirc;i l&agrave;</strong>&nbsp;Jennie.<strong>&nbsp;Cậu đến từ đ&acirc;u?</strong></em></p>
              <p><strong>Yoshi:</strong>&nbsp;<strong>I&rsquo;m from Japan</strong>. Are you American?&nbsp;<br /><em><strong>Yoshi: T&ocirc;i đến từ Nhật Bản</strong>. Chị c&oacute; phải l&agrave; người Mỹ kh&ocirc;ng?</em></p>
              <p><strong>Jennifer:</strong>&nbsp;No, I&rsquo;m British.&nbsp;<strong>Where are you staying?</strong>&nbsp;<br /><em><strong>Jennifer:</strong>&nbsp;Kh&ocirc;ng, t&ocirc;i l&agrave; người Anh.&nbsp;<strong>Cậu đang ở đ&acirc;u?</strong></em></p>
              <p><strong>Yoshi:</strong>&nbsp;<strong>I&rsquo;m staying in a hotel</strong>, but I&rsquo;m looking for an apartment.&nbsp;<strong>Where do you live?&nbsp;</strong><br /><em><strong>Yoshi:</strong>&nbsp;<strong>T&ocirc;i đang ở một kh&aacute;ch sạn</strong>, nhưng t&ocirc;i đang t&igrave;m một căn hộ.&nbsp;<strong>Chị sống ở đ&acirc;u?</strong></em></p>
              <p><strong>Jennifer:</strong>&nbsp;<strong>I live by</strong>&nbsp;the park. It&rsquo;s a very nice, safe and quiet place.&nbsp;<br /><em><strong>Jennifer:</strong>&nbsp;<strong>T&ocirc;i sống ở</strong>&nbsp;<strong>gần</strong>&nbsp;c&ocirc;ng vi&ecirc;n. Đ&oacute; l&agrave; một nơi rất đẹp, an to&agrave;n v&agrave; y&ecirc;n tĩnh.</em></p>
              <p><strong>Yoshi:</strong>&nbsp;That&rsquo;s great. My room is quite noisy.&nbsp;<br /><em><strong>Yoshi:</strong>&nbsp;Tuyệt qu&aacute;. Ph&ograve;ng của t&ocirc;i th&igrave; kh&aacute; ồn &agrave;o.</em></p>
              <p><strong>Jennifer:</strong>&nbsp;Well, I prefer quiet places.&nbsp;<br /><em><strong>Jennifer:</strong>&nbsp;T&ocirc;i th&iacute;ch những nơi y&ecirc;n tĩnh hơn.</em></p>
              <p><strong>Yoshi:</strong>&nbsp;<strong>Same here</strong>. Are there any apartments available by the park?&nbsp;<br /><em><strong>Yoshi: T&ocirc;i cũng thế.</strong>&nbsp;C&oacute; căn hộ n&agrave;o gần c&ocirc;ng vi&ecirc;n kh&ocirc;ng?</em></p>
              <p><strong>Jennifer:</strong>&nbsp;I&rsquo;ll check. Do you have a&nbsp;<strong>business card</strong>?&nbsp;<br /><em><strong>Jennifer:</strong>&nbsp;T&ocirc;i sẽ kiểm tra xem. Cậu c&oacute;<strong>&nbsp;danh thiếp</strong>&nbsp;kh&ocirc;ng?</em></p>
              <p><strong>Yoshi:</strong>&nbsp;Sorry, not yet, but&nbsp;<strong>you can contact me via</strong>&nbsp;yoshi1@gmail.com or at this phone number, 215-034-6890. My phone number doesn&rsquo;t have 7. I always try to avoid 7.&nbsp;<br /><em><strong>Yoshi:</strong>&nbsp;Xin lỗi, t&ocirc;i chưa c&oacute;, nhưng<strong>&nbsp;chị c&oacute; thể li&ecirc;n hệ với t&ocirc;i qua</strong>&nbsp;địa chỉ yoshi1@gmail.com hoặc số điện thoại n&agrave;y, 215-034-6890. Số điện thoại của t&ocirc;i kh&ocirc;ng c&oacute; số 7. T&ocirc;i lu&ocirc;n cố tr&aacute;nh số 7.</em></p>
              <p><strong>Jennifer</strong>: Oh. Why?&nbsp;<br /><em><strong>Jennifer</strong>: Ồ. Tại sao?</em></p>
              <p><strong>Yoshi:</strong>&nbsp;Because 7 &ldquo;ate&rdquo; 9.&nbsp;<br /><em><strong>Yoshi</strong>: Bởi v&igrave; 7 &ldquo;ăn&rdquo; 9.</em></p>
              <p>Chơi chữ: Ate. Từ đồng &acirc;m: Eight. (Ở đ&acirc;y chỉ cần hiểu đơn giản l&agrave; c&aacute;ch n&oacute;i đ&ugrave;a của Yoshi.)</p>`
                    },
                    {
                        title: `Topic 3: What is your job`,
                        audioLinkSlow: `assets/audio/LESSON 01 - INTRODUCTION/Recording 1.5 - Slow speech - Topic 3 - What is your job.mp3`,
                        audioLinkNative: `assets/audio/LESSON 01 - INTRODUCTION/Recording 1.6 - Native speech - Topic 3 - What is your job.mp3`,
                        data: `<!-- #######  YAY, I AM THE SOURCE EDITOR! #########-->
              <p>Ellie is dancing passionately. Suddenly, she falls down and twists her ankle.&nbsp;<br /><em>Ellie đang nhảy một c&aacute;ch say m&ecirc;. Đột nhi&ecirc;n, c&ocirc; ng&atilde; xuống v&agrave; bị trật mắt c&aacute; ch&acirc;n.</em></p>
              <p><strong>Will:</strong>&nbsp;You&nbsp;<strong>look beat</strong>, what&rsquo;s wrong?&nbsp;<br /><em><strong>Will:&nbsp;</strong>C&ocirc;&nbsp;<strong>tr&ocirc;ng c&oacute; vẻ mệt</strong>&nbsp;<strong>mỏi,</strong>&nbsp;c&oacute; chuyện g&igrave; vậy?</em></p>
              <p><strong>Ellie:</strong>&nbsp;My foot hurts. I was dancing and I fell over.&nbsp;<br /><em><strong>Ellie:</strong>&nbsp;T&ocirc;i bị đau ch&acirc;n. T&ocirc;i đang nhảy th&igrave; bị ng&atilde;.</em></p>
              <p><strong>Will:&nbsp;</strong>Can I check?&nbsp;<strong>I&rsquo;m</strong>&nbsp;<strong>sort of an expert.</strong>&nbsp;<br /><em><strong>Will:&nbsp;</strong>T&ocirc;i c&oacute; thể kiểm tra kh&ocirc;ng?&nbsp;<strong>T&ocirc;i đại loại cũng l&agrave; một chuy&ecirc;n gia.</strong></em></p>
              <p><strong>Ellie:</strong>&nbsp;Wow, really?&nbsp;<strong>Are you a doctor?&nbsp;</strong><br /><em><strong>Ellie:</strong>&nbsp;Wow, thật sao?&nbsp;<strong>Anh l&agrave; b&aacute;c sĩ &agrave;?</strong></em></p>
              <p><strong>Will:&nbsp;</strong>Yes,&nbsp;<strong>I&rsquo;m a foot doctor.</strong>&nbsp;<br /><em><strong>Will:</strong>&nbsp;Đ&uacute;ng,<strong>&nbsp;t&ocirc;i l&agrave; b&aacute;c sĩ chuy&ecirc;n về ch&acirc;n.</strong></em></p>
              <p><strong>Ellie:</strong>&nbsp;Great.&nbsp;<strong>It&rsquo;s very kind of you.&nbsp;</strong><br /><em><strong>Ellie:</strong>&nbsp;Tuyệt qu&aacute;.&nbsp;<strong>Anh thật tốt bụng.</strong></em></p>
              <p><strong>Will:</strong>&nbsp;Hmm&hellip; Your foot is OK, but your pants are torn.&nbsp;<br /><em><strong>Will:</strong>&nbsp;Hmm &hellip; Ch&acirc;n của c&ocirc; th&igrave; ổn, nhưng quần của c&ocirc; bị r&aacute;ch rồi.</em></p>
              <p><strong>Ellie:</strong>&nbsp;Oh no, this is my favorite pair. Wait, are you sewing them?&nbsp;<br /><em><strong>Ellie:</strong>&nbsp;&Ocirc;i kh&ocirc;ng, đ&acirc;y l&agrave; c&aacute;i m&agrave; t&ocirc;i y&ecirc;u th&iacute;ch nhất. Đợi đ&atilde;, anh đang may n&oacute; lại &agrave;?</em></p>
              <p><strong>Will:</strong>&nbsp;Yes,<strong>&nbsp;I also work as a tailor.&nbsp;</strong><br /><em><strong>Will:</strong>&nbsp;Đ&uacute;ng,<strong>&nbsp;t&ocirc;i cũng l&agrave;m việc như một thợ may.</strong></em></p>
              <p><strong>Ellie:</strong>&nbsp;I&rsquo;m wondering what exactly your job is.&nbsp;<br /><em><strong>Ellie:</strong>&nbsp;T&ocirc;i tự hỏi ch&iacute;nh x&aacute;c th&igrave; c&ocirc;ng việc của anh l&agrave; g&igrave;.</em></p>
              <p><strong>Will:</strong>&nbsp;Well, I&rsquo;m a superman.&nbsp;<br /><em><strong>Will:</strong>&nbsp;T&ocirc;i l&agrave; một si&ecirc;u nh&acirc;n.</em></p>`
                    }
                ]
            },
            {
                case: `Day 2`,
                title: `Nói đuổi`,
                content: [
                    {
                        title: `Topic 1: Introducing a friend`,
                        audioLinkSlow: `assets/audio/LESSON 01 - INTRODUCTION/Recording 1.1- Slow speech - Topic 1 - Introducing a friend.mp3`,
                        audioLinkNative: `assets/audio/LESSON 01 - INTRODUCTION/Recording 1.2 - Native speech - Topic 1 - Introducing a friend.mp3`,
                        data: `<!-- #######  YAY, I AM THE SOURCE EDITOR! #########-->
              <p>Anna and Felice are walking out of the library, when they suddenly bump into Peter.<br /><em>Anna v&agrave; Felice đang đi ra khỏi thư viện th&igrave; bất ngờ gặp Peter.</em></p>
              <p><strong>Anna:</strong>&nbsp;Hey, Peter!&nbsp;<strong>How&rsquo;s it going?&nbsp;</strong><br /><em><strong>Anna:</strong>&nbsp;Ch&agrave;o, Peter!&nbsp;<strong>Dạo n&agrave;y cậu thế n&agrave;o?</strong></em></p>
              <p><strong>Peter:</strong>&nbsp;Hi, Anna! Good.&nbsp;<strong>How are you?</strong><br /><em><strong>Peter:</strong>&nbsp;Ch&agrave;o Anna! T&ocirc;i rất tốt.&nbsp;<strong>Cậu khỏe kh&ocirc;ng?</strong></em></p>
              <p><strong>Anna:</strong>&nbsp;Great!&nbsp;<strong>This is my friend</strong>, Felice Lachlan. Felice, this is Peter.<br /><em><strong>Anna:</strong>&nbsp;Tuyệt qu&aacute;!&nbsp;<strong>Đ&acirc;y l&agrave;</strong>&nbsp;bạn của t&ocirc;i, Felice Lachlan. Felice, đ&acirc;y l&agrave; Peter.</em></p>
              <p><strong>Felice: Nice to meet you</strong>, Peter.&nbsp;<br /><em><strong>Felice:</strong>&nbsp;<strong>Rất vui được gặp cậu</strong>, Peter..</em></p>
              <p><strong>Peter:</strong>&nbsp;Nice to meet you too, Felice. That&rsquo;s a pretty name.&nbsp;<strong>How do you spell that?</strong>&nbsp;<br /><em><strong>Peter:&nbsp;</strong>Rất vui được gặp cậu, Felice. Đ&oacute; l&agrave; một c&aacute;i t&ecirc;n đẹp.&nbsp;</em><strong><em>Cậu đ&aacute;nh vần n&oacute; như thế n&agrave;o?</em></strong></p>
              <p><strong>Felice:</strong>&nbsp;F-E-L-I-C-E. It means &ldquo;happy&rdquo; in Latin.&nbsp;<br /><em><strong>Felice:</strong>&nbsp;F-E-L-I-C-E. N&oacute; c&oacute; nghĩa l&agrave; &ldquo;hạnh ph&uacute;c&rdquo; trong tiếng Latin.</em></p>
              <p><strong>Peter:</strong>&nbsp;Oh, are you Latin?&nbsp;<br /><em><strong>Peter:</strong>&nbsp;Ồ, cậu l&agrave; người Latin &agrave;?</em></p>
              <p><strong>Felice:</strong>&nbsp;No, but I am happy.&nbsp;<br /><em><strong>Felice:</strong>&nbsp;Kh&ocirc;ng, nhưng t&ocirc;i hạnh ph&uacute;c.</em></p>
              <p><strong>Peter:</strong>&nbsp;Are you from around here?&nbsp;<br /><em><strong>Peter:</strong>&nbsp;Cậu c&oacute; ở gần đ&acirc;y kh&ocirc;ng?</em></p>
              <p><strong>Felice:</strong>&nbsp;No, Australia. I&rsquo;m just here on&nbsp;<strong>holiday.</strong>&nbsp;<br /><em><strong>Felice:</strong>&nbsp;Kh&ocirc;ng, t&ocirc;i ở &Uacute;c. T&ocirc;i chỉ đến đ&acirc;y v&agrave;o kỳ nghỉ.<strong>.</strong></em></p>
              <p><strong>Anna:</strong>&nbsp;Well, we&rsquo;d better get going.<br /><em><strong>Anna:</strong>&nbsp;N&agrave;o, ch&uacute;ng ta n&ecirc;n đi th&ocirc;i.</em></p>
              <p><strong>Peter:</strong>&nbsp;Yeah, me too. Gotta&nbsp;<strong>hit the books</strong>, as they say.<br /><em><strong>Peter:</strong>&nbsp;Ừ, t&ocirc;i cũng thế. Phải&nbsp;<strong>d&ugrave;i m&agrave;i đ&egrave;n s&aacute;ch th&ocirc;i,&nbsp;</strong>như người ta vẫn n&oacute;i.</em></p>
              <p><strong>Felice:</strong>&nbsp;<strong>It was great meeting you</strong>, Peter.&nbsp;<br /><em><strong>Felice: Thật tuyệt khi gặp cậu,&nbsp;</strong>Peter.</em></p>
              <p><strong>Peter:</strong>&nbsp;You too, Felice.&nbsp;<br /><em><strong>Peter:</strong>&nbsp;Thật tuyệt khi gặp cậu, Felice.</em></p>
              <p><strong>Anna:</strong>&nbsp;<strong>Catch ya later!</strong><br /><em><strong>Anna:</strong>&nbsp;<strong>Gặp nhau sau nh&eacute;!</strong></em></p>
              <p><strong>Peter:</strong>&nbsp;Good day,&nbsp;<strong>mateys!</strong>&nbsp;<br /><em><strong>Peter:</strong>&nbsp;Ch&uacute;c&nbsp;<strong>c&aacute;c cậu</strong>&nbsp;một ng&agrave;y tốt l&agrave;nh!</em></p>
              <p><strong>Felice:</strong>&nbsp;<strong>Peace.</strong>&nbsp;<br /><em><strong>Felice:</strong>&nbsp;Tạm biệt.</em></p>`
                    },
                    {
                        title: `Topic 2: Where do you live`,
                        audioLinkSlow: `assets/audio/LESSON 01 - INTRODUCTION/Recording 1.3 - Slow speech - Topic 2 - Where do you live.mp3`,
                        audioLinkNative: `assets/audio/LESSON 01 - INTRODUCTION/Recording 1.4 - Native speech - Topic 2 - Where do you live.mp3`,
                        data: `<!-- #######  YAY, I AM THE SOURCE EDITOR! #########-->
              <p>Jennifer meets Yoshi, a newcomer for the first time, so she&rsquo;s eager to know more about him.&nbsp;<br /><em>Jennifer lần đầu ti&ecirc;n gặp Yoshi, một nh&acirc;n vi&ecirc;n mới, v&igrave; thế c&ocirc; ấy h&aacute;o hức muốn biết th&ecirc;m về anh ấy.</em></p>
              <p><strong>Jennifer:</strong>&nbsp;Are you the new&nbsp;<strong>employee</strong>?&nbsp;<br /><em><strong>Jennifer:</strong>&nbsp;Cậu c&oacute; phải l&agrave;&nbsp;<strong>nh&acirc;n vi&ecirc;n</strong>&nbsp;mới kh&ocirc;ng?</em></p>
              <p><strong>Yoshi</strong>: Yes, I&rsquo;m Yoshi.&nbsp;<br /><strong>Yoshi:</strong>&nbsp;V&acirc;ng, t&ocirc;i l&agrave; Yoshi.</p>
              <p><strong>Jennifer:</strong>&nbsp;My name is Jennifer, but&nbsp;<strong>you can call me</strong>&nbsp;Jennie.&nbsp;<strong>Where are you from?&nbsp;</strong><br /><em><strong>Jennifer:</strong>&nbsp;T&ocirc;i t&ecirc;n l&agrave; Jennifer, nhưng&nbsp;<strong>cậu c&oacute; thể gọi t&ocirc;i l&agrave;</strong>&nbsp;Jennie.<strong>&nbsp;Cậu đến từ đ&acirc;u?</strong></em></p>
              <p><strong>Yoshi:</strong>&nbsp;<strong>I&rsquo;m from Japan</strong>. Are you American?&nbsp;<br /><em><strong>Yoshi: T&ocirc;i đến từ Nhật Bản</strong>. Chị c&oacute; phải l&agrave; người Mỹ kh&ocirc;ng?</em></p>
              <p><strong>Jennifer:</strong>&nbsp;No, I&rsquo;m British.&nbsp;<strong>Where are you staying?</strong>&nbsp;<br /><em><strong>Jennifer:</strong>&nbsp;Kh&ocirc;ng, t&ocirc;i l&agrave; người Anh.&nbsp;<strong>Cậu đang ở đ&acirc;u?</strong></em></p>
              <p><strong>Yoshi:</strong>&nbsp;<strong>I&rsquo;m staying in a hotel</strong>, but I&rsquo;m looking for an apartment.&nbsp;<strong>Where do you live?&nbsp;</strong><br /><em><strong>Yoshi:</strong>&nbsp;<strong>T&ocirc;i đang ở một kh&aacute;ch sạn</strong>, nhưng t&ocirc;i đang t&igrave;m một căn hộ.&nbsp;<strong>Chị sống ở đ&acirc;u?</strong></em></p>
              <p><strong>Jennifer:</strong>&nbsp;<strong>I live by</strong>&nbsp;the park. It&rsquo;s a very nice, safe and quiet place.&nbsp;<br /><em><strong>Jennifer:</strong>&nbsp;<strong>T&ocirc;i sống ở</strong>&nbsp;<strong>gần</strong>&nbsp;c&ocirc;ng vi&ecirc;n. Đ&oacute; l&agrave; một nơi rất đẹp, an to&agrave;n v&agrave; y&ecirc;n tĩnh.</em></p>
              <p><strong>Yoshi:</strong>&nbsp;That&rsquo;s great. My room is quite noisy.&nbsp;<br /><em><strong>Yoshi:</strong>&nbsp;Tuyệt qu&aacute;. Ph&ograve;ng của t&ocirc;i th&igrave; kh&aacute; ồn &agrave;o.</em></p>
              <p><strong>Jennifer:</strong>&nbsp;Well, I prefer quiet places.&nbsp;<br /><em><strong>Jennifer:</strong>&nbsp;T&ocirc;i th&iacute;ch những nơi y&ecirc;n tĩnh hơn.</em></p>
              <p><strong>Yoshi:</strong>&nbsp;<strong>Same here</strong>. Are there any apartments available by the park?&nbsp;<br /><em><strong>Yoshi: T&ocirc;i cũng thế.</strong>&nbsp;C&oacute; căn hộ n&agrave;o gần c&ocirc;ng vi&ecirc;n kh&ocirc;ng?</em></p>
              <p><strong>Jennifer:</strong>&nbsp;I&rsquo;ll check. Do you have a&nbsp;<strong>business card</strong>?&nbsp;<br /><em><strong>Jennifer:</strong>&nbsp;T&ocirc;i sẽ kiểm tra xem. Cậu c&oacute;<strong>&nbsp;danh thiếp</strong>&nbsp;kh&ocirc;ng?</em></p>
              <p><strong>Yoshi:</strong>&nbsp;Sorry, not yet, but&nbsp;<strong>you can contact me via</strong>&nbsp;yoshi1@gmail.com or at this phone number, 215-034-6890. My phone number doesn&rsquo;t have 7. I always try to avoid 7.&nbsp;<br /><em><strong>Yoshi:</strong>&nbsp;Xin lỗi, t&ocirc;i chưa c&oacute;, nhưng<strong>&nbsp;chị c&oacute; thể li&ecirc;n hệ với t&ocirc;i qua</strong>&nbsp;địa chỉ yoshi1@gmail.com hoặc số điện thoại n&agrave;y, 215-034-6890. Số điện thoại của t&ocirc;i kh&ocirc;ng c&oacute; số 7. T&ocirc;i lu&ocirc;n cố tr&aacute;nh số 7.</em></p>
              <p><strong>Jennifer</strong>: Oh. Why?&nbsp;<br /><em><strong>Jennifer</strong>: Ồ. Tại sao?</em></p>
              <p><strong>Yoshi:</strong>&nbsp;Because 7 &ldquo;ate&rdquo; 9.&nbsp;<br /><em><strong>Yoshi</strong>: Bởi v&igrave; 7 &ldquo;ăn&rdquo; 9.</em></p>
              <p>Chơi chữ: Ate. Từ đồng &acirc;m: Eight. (Ở đ&acirc;y chỉ cần hiểu đơn giản l&agrave; c&aacute;ch n&oacute;i đ&ugrave;a của Yoshi.)</p>`
                    },
                    {
                        title: `Topic 3: What is your job`,
                        audioLinkSlow: `assets/audio/LESSON 01 - INTRODUCTION/Recording 1.5 - Slow speech - Topic 3 - What is your job.mp3`,
                        audioLinkNative: `assets/audio/LESSON 01 - INTRODUCTION/Recording 1.6 - Native speech - Topic 3 - What is your job.mp3`,
                        data: `<!-- #######  YAY, I AM THE SOURCE EDITOR! #########-->
              <p>Ellie is dancing passionately. Suddenly, she falls down and twists her ankle.&nbsp;<br /><em>Ellie đang nhảy một c&aacute;ch say m&ecirc;. Đột nhi&ecirc;n, c&ocirc; ng&atilde; xuống v&agrave; bị trật mắt c&aacute; ch&acirc;n.</em></p>
              <p><strong>Will:</strong>&nbsp;You&nbsp;<strong>look beat</strong>, what&rsquo;s wrong?&nbsp;<br /><em><strong>Will:&nbsp;</strong>C&ocirc;&nbsp;<strong>tr&ocirc;ng c&oacute; vẻ mệt</strong>&nbsp;<strong>mỏi,</strong>&nbsp;c&oacute; chuyện g&igrave; vậy?</em></p>
              <p><strong>Ellie:</strong>&nbsp;My foot hurts. I was dancing and I fell over.&nbsp;<br /><em><strong>Ellie:</strong>&nbsp;T&ocirc;i bị đau ch&acirc;n. T&ocirc;i đang nhảy th&igrave; bị ng&atilde;.</em></p>
              <p><strong>Will:&nbsp;</strong>Can I check?&nbsp;<strong>I&rsquo;m</strong>&nbsp;<strong>sort of an expert.</strong>&nbsp;<br /><em><strong>Will:&nbsp;</strong>T&ocirc;i c&oacute; thể kiểm tra kh&ocirc;ng?&nbsp;<strong>T&ocirc;i đại loại cũng l&agrave; một chuy&ecirc;n gia.</strong></em></p>
              <p><strong>Ellie:</strong>&nbsp;Wow, really?&nbsp;<strong>Are you a doctor?&nbsp;</strong><br /><em><strong>Ellie:</strong>&nbsp;Wow, thật sao?&nbsp;<strong>Anh l&agrave; b&aacute;c sĩ &agrave;?</strong></em></p>
              <p><strong>Will:&nbsp;</strong>Yes,&nbsp;<strong>I&rsquo;m a foot doctor.</strong>&nbsp;<br /><em><strong>Will:</strong>&nbsp;Đ&uacute;ng,<strong>&nbsp;t&ocirc;i l&agrave; b&aacute;c sĩ chuy&ecirc;n về ch&acirc;n.</strong></em></p>
              <p><strong>Ellie:</strong>&nbsp;Great.&nbsp;<strong>It&rsquo;s very kind of you.&nbsp;</strong><br /><em><strong>Ellie:</strong>&nbsp;Tuyệt qu&aacute;.&nbsp;<strong>Anh thật tốt bụng.</strong></em></p>
              <p><strong>Will:</strong>&nbsp;Hmm&hellip; Your foot is OK, but your pants are torn.&nbsp;<br /><em><strong>Will:</strong>&nbsp;Hmm &hellip; Ch&acirc;n của c&ocirc; th&igrave; ổn, nhưng quần của c&ocirc; bị r&aacute;ch rồi.</em></p>
              <p><strong>Ellie:</strong>&nbsp;Oh no, this is my favorite pair. Wait, are you sewing them?&nbsp;<br /><em><strong>Ellie:</strong>&nbsp;&Ocirc;i kh&ocirc;ng, đ&acirc;y l&agrave; c&aacute;i m&agrave; t&ocirc;i y&ecirc;u th&iacute;ch nhất. Đợi đ&atilde;, anh đang may n&oacute; lại &agrave;?</em></p>
              <p><strong>Will:</strong>&nbsp;Yes,<strong>&nbsp;I also work as a tailor.&nbsp;</strong><br /><em><strong>Will:</strong>&nbsp;Đ&uacute;ng,<strong>&nbsp;t&ocirc;i cũng l&agrave;m việc như một thợ may.</strong></em></p>
              <p><strong>Ellie:</strong>&nbsp;I&rsquo;m wondering what exactly your job is.&nbsp;<br /><em><strong>Ellie:</strong>&nbsp;T&ocirc;i tự hỏi ch&iacute;nh x&aacute;c th&igrave; c&ocirc;ng việc của anh l&agrave; g&igrave;.</em></p>
              <p><strong>Will:</strong>&nbsp;Well, I&rsquo;m a superman.&nbsp;<br /><em><strong>Will:</strong>&nbsp;T&ocirc;i l&agrave; một si&ecirc;u nh&acirc;n.</em></p>`
                    }
                ]
            },
            {
                case: `Day 3`,
                title: `Phản xạ đa chiều - Introducing a Friend`,
                content: [
                    {
                        title: `Topic 1: Introducing a friend`,
                        // tslint:disable-next-line:max-line-length
                        audioLinkReflection: `assets/audio/LESSON 01 - INTRODUCTION/Recording 1.8 - Rapid Response - Topic 1 - Introducing a friend.mp3`,
                        data: `<!-- #######  YAY, I AM THE SOURCE EDITOR! #########-->
              <p>1,&nbsp;<strong>Who is Felice?</strong>&nbsp;- She is Anna&rsquo;s friend./ Felice is a friend of Anna.<br /><em><strong>Felice l&agrave; ai?</strong>&nbsp;- C&ocirc; ấy l&agrave; bạn của Anna./ Felice l&agrave; một người bạn của Anna.</em></p>
              <p>2,&nbsp;<strong>Who is Anna introducing to Peter?</strong>&nbsp;- She&rsquo;s introducing Felice./ Anna is introducing Felice to Peter.<br /><em><strong>Anna giới thiệu ai với Peter?</strong>&nbsp;- C&ocirc; ấy giới thiệu Felice./ Anna giới thiệu Felice với Peter.</em></p>
              <p>3,&nbsp;<strong>Where does Felice come from?</strong>&nbsp;- Australia./ She comes from Australia.<br /><em><strong>Felice đến từ đ&acirc;u?</strong>&nbsp;- Nước &Uacute;c./ Felice đến từ &Uacute;c.</em></p>
              <p>4,&nbsp;<strong>Is Felice on holiday?</strong>&nbsp;- Yes, she is./ Yes, Felice is on holiday.<br /><em><strong>Felice c&oacute; đang trong kỳ nghỉ kh&ocirc;ng?</strong>&nbsp;- C&oacute;, c&ocirc; ấy c&oacute;./ C&oacute;, Felice đang đi nghỉ.</em></p>
              <p>5,&nbsp;<strong>What does Peter do after meeting Anna?</strong>&nbsp;- He gotta hit the books./ He needs to hit the books.<br /><em><strong>Peter l&agrave;m g&igrave; sau khi gặp Anna?</strong>&nbsp;- Anh ấy phải đi học h&agrave;nh chăm chỉ./ Anh ấy phải đi học h&agrave;nh chăm chỉ.</em></p>
              <p>6,&nbsp;<strong>Who has an interesting name?</strong>&nbsp;- It&rsquo;s Felice./ Felice has an interesting name.<br /><em><strong>Ai c&oacute; một c&aacute;i t&ecirc;n th&uacute; vị?</strong>&nbsp;- Felice./ Felice c&oacute; một c&aacute;i t&ecirc;n th&uacute; vị.</em></p>
              <p>7,&nbsp;<strong>What does the name Felice mean in Latin?</strong>&nbsp;- It means &lsquo;happy&rsquo;./ In Latin, the name Felice means &lsquo;happy&rsquo;.<br /><em><strong>C&aacute;i t&ecirc;n Felice c&oacute; &yacute; nghĩa g&igrave; trong tiếng Latin?</strong>&nbsp;- N&oacute; c&oacute; nghĩa l&agrave; &lsquo;hạnh ph&uacute;c&rsquo;./ Trong tiếng Latin, c&aacute;i t&ecirc;n Felice c&oacute; nghĩa l&agrave; &lsquo;hạnh ph&uacute;c&rsquo;.</em></p>
              <p>8,<strong>&nbsp;Is Felice Latin?</strong>&nbsp;- No, Australian./ No, Felice isn&rsquo;t Latin. She is Australian.<br /><em><strong>Felice c&oacute; phải l&agrave; người Latin kh&ocirc;ng?</strong>&nbsp;- Kh&ocirc;ng, người &Uacute;c./ Kh&ocirc;ng, Felice kh&ocirc;ng phải người Latin. C&ocirc; ấy l&agrave; người &Uacute;c.</em></p>
              <p>9,&nbsp;<strong>How does Felice feel when meeting Peter?</strong>&nbsp;- She is happy./ Felice feels great to meet Peter.<br /><em><strong>Felice cảm thấy như thế n&agrave;o khi gặp Peter? -&nbsp;</strong>C&ocirc; ấy vui./ Felice cảm thấy tuyệt vời khi gặp Peter.</em></p>
              <p>10,&nbsp;<strong>Does Peter meet Felice at the library?</strong>&nbsp;- Yes, they meet at the library./ Yes, Peter bumps into Felice when she&rsquo;s walking out of the library.<br /><em><strong>Peter c&oacute; gặp Felice ở thư viện kh&ocirc;ng?</strong>&nbsp;- C&oacute;, họ gặp nhau ở thư viện./ C&oacute;, Peter t&igrave;nh cờ gặp Felice khi c&ocirc; ấy đang đi ra khỏi thư viện.</em></p>
              <p>11,&nbsp;<strong>How does Felice spell her name?</strong>&nbsp;- It&rsquo;s F.E.L.I.C.E./ She spells it F.E.L.I.C.E.<br /><em><strong>Felice đ&aacute;nh vần t&ecirc;n c&ocirc; ấy thế n&agrave;o?</strong>&nbsp;- Đ&oacute; l&agrave; F.E.L.I.C.E./ C&ocirc; ấy đ&aacute;nh vần n&oacute; l&agrave; F.E.L.I.C.E.</em></p>
              <p>12,<strong>&nbsp;Does Peter think that Felice&rsquo;s name is interesting?</strong>&nbsp;- Yes, he does./ Yes, Peter thinks that Felice&rsquo;s name is interesting.<br /><em><strong>Peter c&oacute; nghĩ rằng t&ecirc;n của Felice th&uacute; vị kh&ocirc;ng?</strong>&nbsp;- C&oacute;, anh ấy c&oacute; nghĩ./ C&oacute;, Peter nghĩ rằng t&ecirc;n của Felice th&uacute; vị.</em></p>`
                    }
                ]
            },
            {
                case: `Day 4`,
                title: `Phản xạ đa chiều - Where Do You Live?`,
                content: [
                    {
                        title: `Topic 2: Where do you live`,
                        // tslint:disable-next-line:max-line-length
                        audioLinkReflection: `assets/audio/LESSON 01 - INTRODUCTION/Recording 1.9 - Rapid Response - Topic 2 - Where do you live.mp3`,
                        data: `<!-- #######  YAY, I AM THE SOURCE EDITOR! #########-->
              <p>1.&nbsp;<strong>Who is the new employee?</strong>&nbsp;- Yoshi is the new employee./ The new employee is Yoshi.<br /><em><strong>Nh&acirc;n vi&ecirc;n mới l&agrave; ai?</strong>&nbsp;- Yoshi l&agrave; nh&acirc;n vi&ecirc;n mới./ Nh&acirc;n vi&ecirc;n mới l&agrave; Yoshi.</em></p>
              <p>2.&nbsp;<strong>Where is Yoshi from?</strong>&nbsp;- Japan./ Yoshi comes from Japan.<br /><em><strong>Yoshi đến từ đ&acirc;u?</strong>&nbsp;- Nhật Bản./ Yoshi đến từ Nhật Bản.&nbsp;</em></p>
              <p>3.&nbsp;<strong>Is Jennifer American?</strong>&nbsp;- No, she is British./ No, Jennifer isn&rsquo;t American.<br /><em><strong>Jennifer c&oacute; phải l&agrave; người Mỹ kh&ocirc;ng?</strong>&nbsp;- Kh&ocirc;ng, c&ocirc; ấy l&agrave; người Anh./ Kh&ocirc;ng, Jennifer kh&ocirc;ng phải l&agrave; người Mỹ.</em></p>
              <p>4.&nbsp;<strong>Is Yoshi staying with Jennifer?</strong>&nbsp;- No, he isn&rsquo;t./ No, Yoshi is staying in a hotel.&nbsp;<br /><em><strong>C&oacute; phải Yoshi đang ở với Jennifer kh&ocirc;ng?</strong>&nbsp;- Kh&ocirc;ng, anh ấy kh&ocirc;ng./ Kh&ocirc;ng, Yoshi đang ở một kh&aacute;ch sạn.</em></p>
              <p>5.<strong>&nbsp;Where does Jennifer live?</strong>&nbsp;- By the park./ She lives in the park area.<br /><em><strong>Jennifer sống ở đ&acirc;u?</strong>&nbsp;- Gần c&ocirc;ng vi&ecirc;n./ C&ocirc; ấy sống ở khu vực c&ocirc;ng vi&ecirc;n.</em></p>
              <p>6.<strong>&nbsp;Does Yoshi stay in a noisy hotel room?</strong>&nbsp;- Yes, he does.Yes, Yoshi stays in a noisy hotel room.&nbsp;<br /><em><strong>C&oacute; phải Yoshi ở trong một căn ph&ograve;ng kh&aacute;ch sạn ồn &agrave;o kh&ocirc;ng?</strong>&nbsp;- Đ&uacute;ng, anh ấy đang ở./ Đ&uacute;ng, Yoshi ở một căn ph&ograve;ng kh&aacute;ch sạn ồn &agrave;o.</em></p>
              <p>7.&nbsp;<strong>Which place does Jennifer prefer?</strong>&nbsp;- She prefers quiet ones./ Jennifer prefers quiet places.&nbsp;<br /><em><strong>Jennifer th&iacute;ch ở nơi n&agrave;o hơn?</strong>&nbsp;- C&ocirc; ấy th&iacute;ch những nơi y&ecirc;n tĩnh hơn./ Jennifer th&iacute;ch những nơi y&ecirc;n tĩnh hơn.</em></p>
              <p>8.<strong>&nbsp;Is Yoshi looking for an apartment?</strong>&nbsp;- Yes, he is./ Yes, Yoshi is looking for an apartment.<br /><em><strong>C&oacute; phải Yoshi đang t&igrave;m kiếm một căn hộ kh&ocirc;ng?</strong>&nbsp;- Đ&uacute;ng, anh ấy đang t&igrave;m./ Đ&uacute;ng, Yoshi đang t&igrave;m kiếm một căn hộ.</em></p>
              <p>9.&nbsp;<strong>What&rsquo;s Yoshi&rsquo;s phone number?</strong>&nbsp;- It&rsquo;s 215-034-6890./ Yoshi&rsquo;s phone number is 215-034-6890.<br /><em><strong>Số điện thoại của Yoshi l&agrave; g&igrave;?</strong>&nbsp;- Đ&oacute; l&agrave; 215-034-6890./ Số điện thoại của Yoshi l&agrave; 215-034-6890.</em></p>
              <p>10.&nbsp;<strong>What is Yoshi&rsquo;s email address?</strong>&nbsp;- It&rsquo;s yoshi1@gmail.com./ Yoshi&rsquo;s email address is yoshi1@gmail.com.<br /><em><strong>Địa chỉ email của Yoshi l&agrave; g&igrave;?</strong>&nbsp;- Đ&oacute; l&agrave; yoshi1@gmail.com./ Địa chỉ email của Yoshi l&agrave; yoshi1@gmail.com.</em></p>
              <p>11.<strong>&nbsp;Does Yoshi have a business card?</strong>&nbsp;- Not yet./ No, Yoshi doesn&rsquo;t have a business&nbsp;<br /><em><strong>Yoshi c&oacute; danh thiếp kh&ocirc;ng?</strong>&nbsp;- Chưa c&oacute;./ Kh&ocirc;ng, Yoshi kh&ocirc;ng c&oacute; danh thiếp.</em></p>
              <p>12.&nbsp;<strong>How is the park?</strong>&nbsp;- It&rsquo;s a nice, safe and quiet place./ The park is a very nice, safe and quiet place.&nbsp;<br /><em><strong>C&ocirc;ng vi&ecirc;n l&agrave; nơi như thế n&agrave;o?</strong>&nbsp;- N&oacute; đẹp, an to&agrave;n v&agrave; y&ecirc;n tĩnh./ C&ocirc;ng vi&ecirc;n l&agrave; một nơi rất đẹp, an to&agrave;n v&agrave; y&ecirc;n tĩnh.</em></p>`
                    }
                ]
            },
            {
                case: `Day 5`,
                title: `Phản xạ đa chiều - What is Your Job?`,
                content: [
                    {
                        title: `Topic 3: What is your job`,
                        // tslint:disable-next-line:max-line-length
                        audioLinkReflection: `assets/audio/LESSON 01 - INTRODUCTION/Recording 1.10 - Rapid Response - Topic 3 - What is your job.mp3`,
                        data: `<!-- #######  YAY, I AM THE SOURCE EDITOR! #########-->
              <p>1.&nbsp;<strong>What&rsquo;s wrong with Ellie?</strong>&nbsp;- Her foot hurts./ Ellie&rsquo;s foot hurts.&nbsp;<br /><em><strong>C&oacute; chuyện g&igrave; xảy ra với Ellie vậy?</strong>&nbsp;- Ch&acirc;n c&ocirc; ấy đau./ Ch&acirc;n của Ellie đau.</em></p>
              <p>2.&nbsp;<strong>What is Will an expert in?</strong>&nbsp;- Foot treating./ Will is an expert in treating feet.&nbsp;<br /><em><strong>Will l&agrave; một chuy&ecirc;n gia về lĩnh vực g&igrave;?</strong>&nbsp;- Chữa trị ch&acirc;n./ Will l&agrave; một chuy&ecirc;n gia chữa trị ch&acirc;n.</em></p>
              <p>3.&nbsp;<strong>What is Will&rsquo;s job?</strong>&nbsp;- A doctor./ Will works as a doctor.&nbsp;<br /><em><strong>C&ocirc;ng việc của Will l&agrave; g&igrave;?</strong>&nbsp;- B&aacute;c sĩ./ Will l&agrave;m việc như một b&aacute;c sĩ.</em></p>
              <p>4.&nbsp;<strong>What doctor is Will?</strong>&nbsp;- A foot doctor./ Will is a doctor for feet.<br /><em><strong>Will l&agrave; b&aacute;c sĩ g&igrave;?</strong>&nbsp;- B&aacute;c sĩ ch&acirc;n./ Will l&agrave; một b&aacute;c sĩ ch&acirc;n.</em></p>
              <p>5.&nbsp;<strong>Are Ellie&rsquo;s pants torn?</strong>&nbsp;- Yes, they are./ Yes, Ellie&rsquo;s pants are torn.<br /><em><strong>C&oacute; phải quần của Ellie bị r&aacute;ch kh&ocirc;ng?</strong>&nbsp;- Đ&uacute;ng, n&oacute; r&aacute;ch./ Đ&uacute;ng, quần của Ellie bị r&aacute;ch.</em></p>
              <p>6.&nbsp;<strong>What is Will doing with Ellie&rsquo;s pants?</strong>&nbsp;- He is sewing them./ Will is sewing Ellie&rsquo;s pants.<br /><em><strong>Will đang l&agrave;m g&igrave; với quần của Ellie?</strong>&nbsp;- Anh ấy đang may n&oacute; lại./ Will đang may quần của Ellie lại.</em></p>
              <p>7.&nbsp;<strong>What else does Will work?</strong>&nbsp;- Will also works as a tailor./ He works as a tailor as well.<br /><em><strong>Will c&ograve;n l&agrave;m việc g&igrave; nữa?</strong>&nbsp;- Will c&ograve;n l&agrave;m việc như một thợ may./ Anh ấy c&ograve;n l&agrave;m việc như một thợ may.</em></p>
              <p>8.<strong>&nbsp;How does Ellie look?</strong>&nbsp;- Ellie looks beat./ She looks tired.<br /><em><strong>Tr&ocirc;ng Ellie thế n&agrave;o?</strong>&nbsp;- Ellie tr&ocirc;ng c&oacute; vẻ mệt mỏi./ C&ocirc; ấy tr&ocirc;ng c&oacute; vẻ mệt mỏi.</em></p>
              <p>9.&nbsp;<strong>Why does Ellie look beat?</strong>&nbsp;- Her foot hurts./ Because her foot is hurt.<br /><em><strong>Tại sao Ellie tr&ocirc;ng mệt mỏi?</strong>&nbsp;- Ch&acirc;n c&ocirc; ấy đau./ Bởi v&igrave; ch&acirc;n của c&ocirc; ấy đau.</em></p>
              <p>10.&nbsp;<strong>Does Ellie let Will check her foot?</strong>&nbsp;- Yes, she does./ Yes, Ellie lets Will check her foot.<br /><em><strong>Ellie c&oacute; cho Will kiểm tra ch&acirc;n m&igrave;nh kh&ocirc;ng?</strong>&nbsp;- C&oacute;, c&ocirc; ấy c&oacute;./ C&oacute;, Ellie cho Will kiểm tra ch&acirc;n m&igrave;nh.</em></p>
              <p>11.&nbsp;<strong>Does Ellie say Will is a superman?</strong>&nbsp;- No, she doesn&rsquo;t./ No, Ellie doesn&rsquo;t say that Will is a superman.<br /><em><strong>C&oacute; phải Ellie n&oacute;i rằng Will l&agrave; một si&ecirc;u nh&acirc;n kh&ocirc;ng?</strong>&nbsp;- Kh&ocirc;ng, c&ocirc; ấy kh&ocirc;ng n&oacute;i./ Kh&ocirc;ng, Ellie kh&ocirc;ng n&oacute;i rằng Will l&agrave; một si&ecirc;u nh&acirc;n.</em></p>
              <p>12.&nbsp;<strong>Does Ellie like the torn pants?</strong>&nbsp;- Yes, she does./ Yes, the torn pants are her favorite pair.&nbsp;<br /><em><strong>Ellie c&oacute; th&iacute;ch c&aacute;i quần bị r&aacute;ch kh&ocirc;ng?</strong>&nbsp;- C&oacute;, c&ocirc; ấy c&oacute; th&iacute;ch./ C&oacute;, chiếc quần r&aacute;ch l&agrave; chiếc quần y&ecirc;u th&iacute;ch của c&ocirc; ấy.</em></p>`
                    }
                ]
            },
            {
                case: `Day 6`,
                title: `Thử thách`,
                content: [
                    {
                        title: `Topic 3: What is your job`,
                        // tslint:disable-next-line:max-line-length
                        audioLinkReflection: `assets/audio/LESSON 01 - INTRODUCTION/Recording 1.11 - Production.mp3`,
                        data: `
              ✔️ Tải phần tài liệu production sau đây về máy – bấm vào đây để download (nếu bạn đang truy cập khóa học trên app, vui lòng vào web để tải trực tiếp tài liệu này) – Luyện tập từ 2-3 lần (Có thể nhìn phần dịch và từ điển nếu cần).<br/>
              ✔️ Nghe Recording 1.11 và trả lời vào khoảng trống từ 3-5 lần<br/>
              ✔️ Hãy tưởng tượng bạn vô tình gặp một người nước ngoài tại một địa điểm du lịch nào đó, bạn hãy chủ động là người hỏi chuyện và làm quen với người bạn đó.<br/>
              ✔️ Hãy tạo ra một kịch bản từ 10 – 15 câu hỏi đáp và thực hành nói trước gương sao cho thật tự nhiên.<br/>
              ✔️ Bạn cũng có thể tìm một người bạn để đối thoại cùng nhau như các nhân vật tại Lesson 01!<br/>
              Bạn đã hoàn thành việc luyện tập Lesson 01 – Eng Breaking. Ngay bây giờ, hãy đến với bài Đánh giá (Assessment) để nâng cao kỹ năng và ôn luyện kiến thức ở Lesson 01.`
                    }
                ]
            }
        ]
    },
    {
        title: 'Lesson 02 - People',
        name: `People`,
        displayOrder: `2`,
        description: `MY NAME IS DAO DAO, this lesson is tell you about people.`,
        openCollapse: true,
        contents: [
            {
                case: `Day 1`,
                title: `Nghe ngấm`,
                content: [
                    {
                        title: `Topic 1: Jack’s Family Portrait`,
                        audioLinkSlow: `assets/audio/LESSON 02 - PEOPLE/Recording 2.1 - Slow Speech - Topic 1 - Jack_s Family Portrait.mp3`,
                        audioLinkNative: `assets/audio/LESSON 02 - PEOPLE/Recording 2.2 - Native speech - Topic 1 - Jack_s family.mp3`,
                        data: `<!-- #######  YAY, I AM THE SOURCE EDITOR! #########-->
              <p>Lisa and Jack are talking about Jack&rsquo;s family portrait on the wall.</p>
              <p><em>Lisa v&agrave; Jack đang n&oacute;i về bước ảnh ch&acirc;n dung gia đ&igrave;nh Jack treo tr&ecirc;n tường.</em></p>
              <p><strong>Lisa</strong>: Oh, <strong>is this</strong> your family?</p>
              <p><strong><em>Lisa</em></strong><em>: Ồ, <strong>đ&acirc;y c&oacute; phải l&agrave;</strong> gia đ&igrave;nh cậu kh&ocirc;ng?</em></p>
              <p><strong>Jack</strong>: It is. <strong>These are</strong> my <strong>grandparents</strong> at their old hourse in Thailand.</p>
              <p><strong><em>Jack</em></strong><em>: Đ&uacute;ng rồi. <strong>Đ&acirc;y l&agrave; &ocirc;ng b&agrave; t&ocirc;i</strong> ở nh&agrave; cũ của họ ở Th&aacute;i lan.</em></p>
              <p><strong>Lisa</strong>: Do they live there?</p>
              <p><strong><em>Lisa</em></strong><em>: Họ c&oacute; sống ở đ&oacute; kh&ocirc;ng?</em></p>
              <p><strong>Jack</strong>: No, they were just visiting. They <strong>moved to</strong> the US when my dad and <strong>aunt</strong> were babies.</p>
              <p><strong><em>Jack</em></strong><em>: Kh&ocirc;ng họ chỉ gh&eacute; thăm th&ocirc;i. Họ <strong>chuyển đến</strong> Mỹ khi bố v&agrave; <strong>c&ocirc; </strong>t&ocirc;i c&ograve;n nhỏ.</em></p>
              <p><strong>Lisa</strong>: Who, I didn&rsquo;t know that.</p>
              <p><strong><em>Lisa</em></strong><em>: Ch&agrave;, t&ocirc;i kh&ocirc;ng biết đấy.</em></p>
              <p><strong>Jack</strong>: Yeah. My <strong>grandfather was a doctor</strong> in Thailand, but when they moved here, he had to <strong>work as a cleaner</strong>.</p>
              <p><strong><em>Jack</em></strong><em>: Ừ<strong>. &Ocirc;ng t&ocirc;i l&agrave; b&aacute;c sĩ</strong> ở Th&aacute;i Lan, nhưng khi họ đến đ&acirc;y, &ocirc;ng phải <strong>l&agrave;m việc như một lao c&ocirc;ng</strong>.</em></p>
              <p><strong>Lisa</strong>: Your dad&rsquo;s a doctor, right?</p>
              <p><strong><em>Lisa</em></strong><em>: Bố cậu l&agrave; b&aacute;c sĩ, đ&uacute;ng kh&ocirc;ng?</em></p>
              <p><strong>Jack</strong>: He is. He wanted to <strong>follow in his dad&rsquo;s footsteps</strong>. And those are my <strong>parents</strong>.</p>
              <p><strong><em>Jack</em></strong><em>: Đ&uacute;ng rồi. &Ocirc;ng ấy muốn đi theo con đường của cha m&igrave;nh. V&agrave; đ&oacute; l&agrave; <strong>bố mẹ</strong> t&ocirc;i.</em></p>
              <p><strong>Lisa</strong>: That&rsquo;s really <strong>inspiring</strong>.</p>
              <p><strong><em>Lisa</em></strong><em>: Điều đ&oacute; thực sự <strong>truyền cảm hứng</strong> đấy.</em></p>
              <p><strong>Jack</strong>: Yes, my sister and I wanna be doctors, too. I guess <strong>it&rsquo;s in our blood</strong>.</p>
              <p><strong><em>Jack</em></strong><em>: Ừ, em g&aacute;i t&ocirc;i v&agrave; t&ocirc;i cũng muốn l&agrave; b&aacute;c sĩ. T&ocirc;i đo&aacute;n <strong>n&oacute; đ&atilde; ngấm v&agrave;o m&aacute;u của ch&uacute;ng t&ocirc;i</strong>.</em></p>
              <p><strong>Lisa</strong>: Hey are you in the picture? Is this you?</p>
              <p><strong><em>Lisa</em></strong><em>: N&agrave;y, cậu c&oacute; mặt trong bức ảnh n&agrave;y kh&ocirc;ng? Đ&acirc;y c&oacute; phải l&agrave; cậu kh&ocirc;ng?</em></p>
              <p><strong>Jack</strong>: No, <strong>that&rsquo;s</strong> my <strong>cousin</strong>. I&rsquo;m over here.</p>
              <p><strong><em>Jack</em></strong><em>: Kh&ocirc;ng, <strong>đ&oacute; l&agrave; anh họ</strong> của t&ocirc;i. T&ocirc;i ở đ&acirc;y cơ.</em></p>
              <p><strong>Lisa</strong>: That&rsquo;s your mom!</p>
              <p><strong><em>Lisa</em></strong><em>: Đ&oacute; l&agrave; mẹ cậu!</em></p>
              <p><strong>Jack</strong>: Yep, <strong>pregnant with me!</strong></p>
              <p><strong><em>Jack</em></strong><em>: Đ&uacute;ng, <strong>đang mang thai t&ocirc;i!</strong></em></p>
              <p><em>Ghi ch&uacute;: Từ &ldquo;<strong>Pregnant</strong>&rdquo; trong t&igrave;nh huống h&agrave;i hước n&agrave;y của hoại thoại được ph&aacute;t &acirc;m với t&ocirc;ng cao hơn một ch&uacute;t so với c&aacute;ch đọc th&ocirc;ng thường. C&aacute;ch đọc theo từ điển sẽ được đề cập tại phần luyện từ v&agrave; mẫu chủ đạo của ng&agrave;y 09</em></p>`
                    },
                    {
                        title: `Topic 2: A High School Reunion`,
                        audioLinkSlow: `assets/audio/LESSON 02 - PEOPLE/Recording 2.3 - Slow Speech -Topic 2 - A High School Reunion.mp3`,
                        audioLinkNative: `assets/audio/LESSON 02 - PEOPLE/Recording 2.4 - Native Speech - Topic 2 - A High School Reunion.mp3`,
                        data: `<!-- #######  YAY, I AM THE SOURCE EDITOR! #########-->
              <p>Angela joins a high school reunion where she meets her two old school friends. They haven&rsquo;t met for more than 10 years.</p>
              <p><em>Angela tham gia v&agrave;o một cuộc họp mặt trường trung học nơi c&ocirc; gặp hai người bạn học cũ của m&igrave;nh. Họ đ&atilde; kh&ocirc;ng gặp những hơn 10 năm.</em></p>
              <p><strong>Angela</strong>: Rose? Is that you? Oh, <strong>you look fantastic!</strong></p>
              <p><strong><em>Angela</em></strong><em>: Rose? L&agrave; cậu đ&uacute;ng kh&ocirc;ng? &Ocirc;i, <strong>tr&ocirc;ng cậu tuyệt qu&aacute;!</strong></em></p>
              <p><strong>Rose</strong>: Angie! <strong>It&rsquo;s so good to see you!</strong> How long has it been, 15 years!</p>
              <p><strong><em>Rose</em></strong><em>: Angie!(C&aacute;ch gọi th&acirc;n mật của Angela). <strong>Thật tốt khi gặp lại cậu</strong>! Đ&atilde; bao l&acirc;u rồi nhỉ,</em> <em>15 năm &agrave;?</em></p>
              <p><strong>Angela</strong>: I feel like we were in calculus class just yesterday!</p>
              <p><strong><em>Angela</em></strong><em>: T&ocirc;i cảm thấy như ch&uacute;ng ta ngồi l&agrave;m to&aacute;n với nhau chỉ mới h&ocirc;m qua th&ocirc;i!</em></p>
              <p><strong>Angela</strong>: Edward, how are you doing? Time flies. I&rsquo;m so happy to see that you two <strong>got married!</strong> You are always such a good <strong>couple</strong>.</p>
              <p><strong><em>Angela</em></strong><em>: Edward, cậu dạo n&agrave;y thế n&agrave;o? Thời gian tr&ocirc;i đi thật nhanh. T&ocirc; rất vui mừng khi thấy hai người <strong>đ&atilde; kết h&ocirc;n!</strong> Hai người lu&ocirc;n l&agrave; một <strong>cặp </strong>rất đẹp<strong> đ&ocirc;i.</strong></em></p>
              <p><strong>Edward:</strong> Thank you.</p>
              <p><strong><em>Edward</em></strong><em>: Cảm ơn cậu.</em></p>
              <p><strong>Angela</strong>: Where is your daughter? She looks so cute in the pictures online.</p>
              <p><strong><em>Angela</em></strong><em>: Con g&aacute;i cậu đ&acirc;u? C&ocirc; b&eacute; tr&ocirc;ng rất dễ thương trong mấy bức h&igrave;nh tr&ecirc;n mạng.</em></p>
              <p><strong>Rose</strong>: She&rsquo;s at home tonight. Do you know if Nick is coming to the <strong>reunion?</strong> I remember you two were not just <strong>classmates</strong> but ... a couple in high school.</p>
              <p><strong><em>Rose</em></strong><em>: Tối nay con b&eacute; ở nh&agrave;. Cậu c&oacute; biết l&agrave; liệu Nick c&oacute; đến <strong>cuộc họp mặt</strong> kh&ocirc;ng? T&ocirc;i nhớ hai người kh&ocirc;ng chỉ l&agrave; <strong>bạn học c&ugrave;ng lớp</strong>, m&agrave; c&ograve;n l&agrave; ... một cặp đ&ocirc;i ở trường học.</em></p>
              <p><strong>Angela</strong>: Well, we didn&rsquo;t go to the gym.</p>
              <p><strong><em>Angela</em></strong><em>: Xem n&agrave;o, ch&uacute;ng t&ocirc;i đ&atilde; kh&ocirc;ng đến ph&ograve;ng tập thể dục.</em></p>
              <p><strong>Edward</strong>: ..Uh... huh?</p>
              <p><strong><em>Edward</em></strong><em>: ..Ừ... hả?</em></p>
              <p><strong>Angela</strong>: Our relationship didn&rsquo;t <strong>work out.</strong></p>
              <p><strong><em>Angela</em></strong><em>: Mối quan hệ của ch&uacute;ng t&ocirc;i đ&atilde; <strong>kh&ocirc;ng đi đến đ&acirc;u.</strong></em></p>
              <p><em>Trong trường hợp n&agrave;y, Angela d&ugrave;ng ph&eacute;p chơi chữ, n&oacute;i &ldquo;work out&rdquo; với 2 nghĩa:</em></p>
              <ol>
              <li><em>Tập thể dục</em></li>
              <li><em>Tiến triển tốt, đến đ&acirc;u, tới đ&acirc;u</em></li>
              </ol>`
                    },
                    {
                        title: `Topic 3: Just In Time For the Company Trip`,
                        audioLinkSlow: `assets/audio/LESSON 02 - PEOPLE/Recording 2.5 - Slow Speech -Topic 3 - Just In Time For the Company Trip.mp3`,
                        audioLinkNative: `assets/audio/LESSON 02 - PEOPLE/Recording 2.6 - Native Speech - Topic 3 - Just In Time For the Company Trip.mp3`,
                        data: `<!-- #######  YAY, I AM THE SOURCE EDITOR! #########-->
              <p>Howie and Top are going together, then they meet Jenny, a new staff in R&amp;D team. So, Howie introduces Jenny to Tom.</p>
              <p><em>Howie v&agrave; Tom đang đi với nhau th&igrave; họ gặp Jenny, nh&acirc;n vi&ecirc;n mới trong nh&oacute;m Nghi&ecirc;n cứu v&agrave; Ph&aacute;t triển. V&igrave; vậy, Howie giới thiệu Jenny với Tom.</em></p>
              <p>Howie: Hey Tom, have you met jenny? She just started two weeks ago.</p>
              <p><em>Howie: N&agrave;y Tom, anh đ&atilde; gặp Jenny chưa? C&ocirc; ấy vừa mới bắt đầu l&agrave;m việc từ hai tuần trước.</em></p>
              <p>Tom: Nice to meet you, Jenny. I work in sales. <strong>What department are you in?</strong></p>
              <p><em>Tom: Rất vui được gặp em, Jenny. Anh l&agrave;m việc ở bộ phận b&aacute;n h&agrave;ng. <strong>Em thuộc bộ phận n&agrave;o?</strong></em></p>
              <p>Jenny: Hello Tom, I&rsquo;m in <strong>R&amp;D</strong>.</p>
              <p><em>Jenny: Ch&agrave;o Tom, em ở bộ phận <strong>Nghi&ecirc;n cứu v&agrave; Ph&aacute;t triển</strong>.</em></p>
              <p>Tom: Are you going to join the company <strong>trip</strong> next week, Jenny?</p>
              <p><em>T&ocirc;m: Em c&oacute; tham gia <strong>chuyến du lịch</strong> c&ocirc;ng ty v&agrave;o tuần tới kh&ocirc;ng, Jenny?</em></p>
              <p>Jenny: I&rsquo;m not sure. <strong>Are newcomers allowed to</strong> come?</p>
              <p><em>Jenny: Em kh&ocirc;ng chắc lắm. <strong>Người mới</strong> c&oacute; <strong>được ph&eacute;p</strong> đi kh&ocirc;ng?</em></p>
              <p>Howie: Of course. We want everyone there for the <strong>team building</strong>.</p>
              <p><em>Howie: Tất nhi&ecirc;n. Bọn anh muốn tất cả mọi người ở đ&oacute; để tham gia <strong>x&acirc;y dựng đội nh&oacute;m</strong>.</em></p>
              <p>Jenny: Well, <strong>I am always up for</strong> a beach trip.</p>
              <p><em>Jenny: V&acirc;ng, em lu&ocirc;n lu&ocirc;n muốn một chuyến du lịch biển.</em></p>
              <p>Tom: It&rsquo;s going to be great. I think everybody <strong>is eager for</strong> a little <strong>relaxation</strong>.</p>
              <p><em>Tom: N&oacute; sẽ rất tuyệt. Anh nghĩ rằng tất cả mọi người đều <strong>h&aacute;o hức cho</strong> một ch&uacute;t <strong>thư gi&atilde;n</strong>.</em></p>
              <p>Jenny: Could I bring my husband with me?</p>
              <p><em>Jenny: Em co thế đưa chồng đi c&ugrave;ng được kh&ocirc;ng?</em></p>
              <p>Howie: What? You said you haven&rsquo;t got a boyfriend?</p>
              <p><em>Howi: C&aacute;i g&igrave;? Em n&oacute;i em kh&ocirc;ng c&oacute; bạn trai?</em></p>
              <p>Jenny: Yes, it&rsquo;s so true!</p>
              <p><em>Jenny: Đ&uacute;ng, đ&oacute; l&agrave; sự thật.</em></p>`
                    }
                ]
            },
            {
                case: `Day 2`,
                title: `Nói đuổi`,
                content: [
                    {
                        title: `Topic 1: Jack’s Family Portrait`,
                        audioLinkSlow: `assets/audio/LESSON 02 - PEOPLE/Recording 2.1 - Slow Speech - Topic 1 - Jack_s Family Portrait.mp3`,
                        audioLinkNative: `assets/audio/LESSON 02 - PEOPLE/Recording 2.2 - Native speech - Topic 1 - Jack_s family.mp3`,
                        data: `<!-- #######  YAY, I AM THE SOURCE EDITOR! #########-->
              <p>Lisa and Jack are talking about Jack&rsquo;s family portrait on the wall.</p>
              <p><em>Lisa v&agrave; Jack đang n&oacute;i về bước ảnh ch&acirc;n dung gia đ&igrave;nh Jack treo tr&ecirc;n tường.</em></p>
              <p><strong>Lisa</strong>: Oh, <strong>is this</strong> your family?</p>
              <p><strong><em>Lisa</em></strong><em>: Ồ, <strong>đ&acirc;y c&oacute; phải l&agrave;</strong> gia đ&igrave;nh cậu kh&ocirc;ng?</em></p>
              <p><strong>Jack</strong>: It is. <strong>These are</strong> my <strong>grandparents</strong> at their old hourse in Thailand.</p>
              <p><strong><em>Jack</em></strong><em>: Đ&uacute;ng rồi. <strong>Đ&acirc;y l&agrave; &ocirc;ng b&agrave; t&ocirc;i</strong> ở nh&agrave; cũ của họ ở Th&aacute;i lan.</em></p>
              <p><strong>Lisa</strong>: Do they live there?</p>
              <p><strong><em>Lisa</em></strong><em>: Họ c&oacute; sống ở đ&oacute; kh&ocirc;ng?</em></p>
              <p><strong>Jack</strong>: No, they were just visiting. They <strong>moved to</strong> the US when my dad and <strong>aunt</strong> were babies.</p>
              <p><strong><em>Jack</em></strong><em>: Kh&ocirc;ng họ chỉ gh&eacute; thăm th&ocirc;i. Họ <strong>chuyển đến</strong> Mỹ khi bố v&agrave; <strong>c&ocirc; </strong>t&ocirc;i c&ograve;n nhỏ.</em></p>
              <p><strong>Lisa</strong>: Who, I didn&rsquo;t know that.</p>
              <p><strong><em>Lisa</em></strong><em>: Ch&agrave;, t&ocirc;i kh&ocirc;ng biết đấy.</em></p>
              <p><strong>Jack</strong>: Yeah. My <strong>grandfather was a doctor</strong> in Thailand, but when they moved here, he had to <strong>work as a cleaner</strong>.</p>
              <p><strong><em>Jack</em></strong><em>: Ừ<strong>. &Ocirc;ng t&ocirc;i l&agrave; b&aacute;c sĩ</strong> ở Th&aacute;i Lan, nhưng khi họ đến đ&acirc;y, &ocirc;ng phải <strong>l&agrave;m việc như một lao c&ocirc;ng</strong>.</em></p>
              <p><strong>Lisa</strong>: Your dad&rsquo;s a doctor, right?</p>
              <p><strong><em>Lisa</em></strong><em>: Bố cậu l&agrave; b&aacute;c sĩ, đ&uacute;ng kh&ocirc;ng?</em></p>
              <p><strong>Jack</strong>: He is. He wanted to <strong>follow in his dad&rsquo;s footsteps</strong>. And those are my <strong>parents</strong>.</p>
              <p><strong><em>Jack</em></strong><em>: Đ&uacute;ng rồi. &Ocirc;ng ấy muốn đi theo con đường của cha m&igrave;nh. V&agrave; đ&oacute; l&agrave; <strong>bố mẹ</strong> t&ocirc;i.</em></p>
              <p><strong>Lisa</strong>: That&rsquo;s really <strong>inspiring</strong>.</p>
              <p><strong><em>Lisa</em></strong><em>: Điều đ&oacute; thực sự <strong>truyền cảm hứng</strong> đấy.</em></p>
              <p><strong>Jack</strong>: Yes, my sister and I wanna be doctors, too. I guess <strong>it&rsquo;s in our blood</strong>.</p>
              <p><strong><em>Jack</em></strong><em>: Ừ, em g&aacute;i t&ocirc;i v&agrave; t&ocirc;i cũng muốn l&agrave; b&aacute;c sĩ. T&ocirc;i đo&aacute;n <strong>n&oacute; đ&atilde; ngấm v&agrave;o m&aacute;u của ch&uacute;ng t&ocirc;i</strong>.</em></p>
              <p><strong>Lisa</strong>: Hey are you in the picture? Is this you?</p>
              <p><strong><em>Lisa</em></strong><em>: N&agrave;y, cậu c&oacute; mặt trong bức ảnh n&agrave;y kh&ocirc;ng? Đ&acirc;y c&oacute; phải l&agrave; cậu kh&ocirc;ng?</em></p>
              <p><strong>Jack</strong>: No, <strong>that&rsquo;s</strong> my <strong>cousin</strong>. I&rsquo;m over here.</p>
              <p><strong><em>Jack</em></strong><em>: Kh&ocirc;ng, <strong>đ&oacute; l&agrave; anh họ</strong> của t&ocirc;i. T&ocirc;i ở đ&acirc;y cơ.</em></p>
              <p><strong>Lisa</strong>: That&rsquo;s your mom!</p>
              <p><strong><em>Lisa</em></strong><em>: Đ&oacute; l&agrave; mẹ cậu!</em></p>
              <p><strong>Jack</strong>: Yep, <strong>pregnant with me!</strong></p>
              <p><strong><em>Jack</em></strong><em>: Đ&uacute;ng, <strong>đang mang thai t&ocirc;i!</strong></em></p>
              <p><em>Ghi ch&uacute;: Từ &ldquo;<strong>Pregnant</strong>&rdquo; trong t&igrave;nh huống h&agrave;i hước n&agrave;y của hoại thoại được ph&aacute;t &acirc;m với t&ocirc;ng cao hơn một ch&uacute;t so với c&aacute;ch đọc th&ocirc;ng thường. C&aacute;ch đọc theo từ điển sẽ được đề cập tại phần luyện từ v&agrave; mẫu chủ đạo của ng&agrave;y 09</em></p>`
                    },
                    {
                        title: `Topic 2: A High School Reunion`,
                        audioLinkSlow: `assets/audio/LESSON 02 - PEOPLE/Recording 2.3 - Slow Speech -Topic 2 - A High School Reunion.mp3`,
                        audioLinkNative: `assets/audio/LESSON 02 - PEOPLE/Recording 2.4 - Native Speech - Topic 2 - A High School Reunion.mp3`,
                        data: `<!-- #######  YAY, I AM THE SOURCE EDITOR! #########-->
              <p>Angela joins a high school reunion where she meets her two old school friends. They haven&rsquo;t met for more than 10 years.</p>
              <p><em>Angela tham gia v&agrave;o một cuộc họp mặt trường trung học nơi c&ocirc; gặp hai người bạn học cũ của m&igrave;nh. Họ đ&atilde; kh&ocirc;ng gặp những hơn 10 năm.</em></p>
              <p><strong>Angela</strong>: Rose? Is that you? Oh, <strong>you look fantastic!</strong></p>
              <p><strong><em>Angela</em></strong><em>: Rose? L&agrave; cậu đ&uacute;ng kh&ocirc;ng? &Ocirc;i, <strong>tr&ocirc;ng cậu tuyệt qu&aacute;!</strong></em></p>
              <p><strong>Rose</strong>: Angie! <strong>It&rsquo;s so good to see you!</strong> How long has it been, 15 years!</p>
              <p><strong><em>Rose</em></strong><em>: Angie!(C&aacute;ch gọi th&acirc;n mật của Angela). <strong>Thật tốt khi gặp lại cậu</strong>! Đ&atilde; bao l&acirc;u rồi nhỉ,</em> <em>15 năm &agrave;?</em></p>
              <p><strong>Angela</strong>: I feel like we were in calculus class just yesterday!</p>
              <p><strong><em>Angela</em></strong><em>: T&ocirc;i cảm thấy như ch&uacute;ng ta ngồi l&agrave;m to&aacute;n với nhau chỉ mới h&ocirc;m qua th&ocirc;i!</em></p>
              <p><strong>Angela</strong>: Edward, how are you doing? Time flies. I&rsquo;m so happy to see that you two <strong>got married!</strong> You are always such a good <strong>couple</strong>.</p>
              <p><strong><em>Angela</em></strong><em>: Edward, cậu dạo n&agrave;y thế n&agrave;o? Thời gian tr&ocirc;i đi thật nhanh. T&ocirc; rất vui mừng khi thấy hai người <strong>đ&atilde; kết h&ocirc;n!</strong> Hai người lu&ocirc;n l&agrave; một <strong>cặp </strong>rất đẹp<strong> đ&ocirc;i.</strong></em></p>
              <p><strong>Edward:</strong> Thank you.</p>
              <p><strong><em>Edward</em></strong><em>: Cảm ơn cậu.</em></p>
              <p><strong>Angela</strong>: Where is your daughter? She looks so cute in the pictures online.</p>
              <p><strong><em>Angela</em></strong><em>: Con g&aacute;i cậu đ&acirc;u? C&ocirc; b&eacute; tr&ocirc;ng rất dễ thương trong mấy bức h&igrave;nh tr&ecirc;n mạng.</em></p>
              <p><strong>Rose</strong>: She&rsquo;s at home tonight. Do you know if Nick is coming to the <strong>reunion?</strong> I remember you two were not just <strong>classmates</strong> but ... a couple in high school.</p>
              <p><strong><em>Rose</em></strong><em>: Tối nay con b&eacute; ở nh&agrave;. Cậu c&oacute; biết l&agrave; liệu Nick c&oacute; đến <strong>cuộc họp mặt</strong> kh&ocirc;ng? T&ocirc;i nhớ hai người kh&ocirc;ng chỉ l&agrave; <strong>bạn học c&ugrave;ng lớp</strong>, m&agrave; c&ograve;n l&agrave; ... một cặp đ&ocirc;i ở trường học.</em></p>
              <p><strong>Angela</strong>: Well, we didn&rsquo;t go to the gym.</p>
              <p><strong><em>Angela</em></strong><em>: Xem n&agrave;o, ch&uacute;ng t&ocirc;i đ&atilde; kh&ocirc;ng đến ph&ograve;ng tập thể dục.</em></p>
              <p><strong>Edward</strong>: ..Uh... huh?</p>
              <p><strong><em>Edward</em></strong><em>: ..Ừ... hả?</em></p>
              <p><strong>Angela</strong>: Our relationship didn&rsquo;t <strong>work out.</strong></p>
              <p><strong><em>Angela</em></strong><em>: Mối quan hệ của ch&uacute;ng t&ocirc;i đ&atilde; <strong>kh&ocirc;ng đi đến đ&acirc;u.</strong></em></p>
              <p><em>Trong trường hợp n&agrave;y, Angela d&ugrave;ng ph&eacute;p chơi chữ, n&oacute;i &ldquo;work out&rdquo; với 2 nghĩa:</em></p>
              <ol>
              <li><em>Tập thể dục</em></li>
              <li><em>Tiến triển tốt, đến đ&acirc;u, tới đ&acirc;u</em></li>
              </ol>`
                    },
                    {
                        title: `Topic 3: Just In Time For the Company Trip`,
                        audioLinkSlow: `assets/audio/LESSON 02 - PEOPLE/Recording 2.5 - Slow Speech -Topic 3 - Just In Time For the Company Trip.mp3`,
                        audioLinkNative: `assets/audio/LESSON 02 - PEOPLE/Recording 2.6 - Native Speech - Topic 3 - Just In Time For the Company Trip.mp3`,
                        data: `<!-- #######  YAY, I AM THE SOURCE EDITOR! #########-->
              <p>Howie and Top are going together, then they meet Jenny, a new staff in R&amp;D team. So, Howie introduces Jenny to Tom.</p>
              <p><em>Howie v&agrave; Tom đang đi với nhau th&igrave; họ gặp Jenny, nh&acirc;n vi&ecirc;n mới trong nh&oacute;m Nghi&ecirc;n cứu v&agrave; Ph&aacute;t triển. V&igrave; vậy, Howie giới thiệu Jenny với Tom.</em></p>
              <p>Howie: Hey Tom, have you met jenny? She just started two weeks ago.</p>
              <p><em>Howie: N&agrave;y Tom, anh đ&atilde; gặp Jenny chưa? C&ocirc; ấy vừa mới bắt đầu l&agrave;m việc từ hai tuần trước.</em></p>
              <p>Tom: Nice to meet you, Jenny. I work in sales. <strong>What department are you in?</strong></p>
              <p><em>Tom: Rất vui được gặp em, Jenny. Anh l&agrave;m việc ở bộ phận b&aacute;n h&agrave;ng. <strong>Em thuộc bộ phận n&agrave;o?</strong></em></p>
              <p>Jenny: Hello Tom, I&rsquo;m in <strong>R&amp;D</strong>.</p>
              <p><em>Jenny: Ch&agrave;o Tom, em ở bộ phận <strong>Nghi&ecirc;n cứu v&agrave; Ph&aacute;t triển</strong>.</em></p>
              <p>Tom: Are you going to join the company <strong>trip</strong> next week, Jenny?</p>
              <p><em>T&ocirc;m: Em c&oacute; tham gia <strong>chuyến du lịch</strong> c&ocirc;ng ty v&agrave;o tuần tới kh&ocirc;ng, Jenny?</em></p>
              <p>Jenny: I&rsquo;m not sure. <strong>Are newcomers allowed to</strong> come?</p>
              <p><em>Jenny: Em kh&ocirc;ng chắc lắm. <strong>Người mới</strong> c&oacute; <strong>được ph&eacute;p</strong> đi kh&ocirc;ng?</em></p>
              <p>Howie: Of course. We want everyone there for the <strong>team building</strong>.</p>
              <p><em>Howie: Tất nhi&ecirc;n. Bọn anh muốn tất cả mọi người ở đ&oacute; để tham gia <strong>x&acirc;y dựng đội nh&oacute;m</strong>.</em></p>
              <p>Jenny: Well, <strong>I am always up for</strong> a beach trip.</p>
              <p><em>Jenny: V&acirc;ng, em lu&ocirc;n lu&ocirc;n muốn một chuyến du lịch biển.</em></p>
              <p>Tom: It&rsquo;s going to be great. I think everybody <strong>is eager for</strong> a little <strong>relaxation</strong>.</p>
              <p><em>Tom: N&oacute; sẽ rất tuyệt. Anh nghĩ rằng tất cả mọi người đều <strong>h&aacute;o hức cho</strong> một ch&uacute;t <strong>thư gi&atilde;n</strong>.</em></p>
              <p>Jenny: Could I bring my husband with me?</p>
              <p><em>Jenny: Em co thế đưa chồng đi c&ugrave;ng được kh&ocirc;ng?</em></p>
              <p>Howie: What? You said you haven&rsquo;t got a boyfriend?</p>
              <p><em>Howi: C&aacute;i g&igrave;? Em n&oacute;i em kh&ocirc;ng c&oacute; bạn trai?</em></p>
              <p>Jenny: Yes, it&rsquo;s so true!</p>
              <p><em>Jenny: Đ&uacute;ng, đ&oacute; l&agrave; sự thật.</em></p>`
                    }
                ]
            },
            {
                case: `Day 3`,
                title: `Phản xạ đa chiều - Introducing a Friend`,
                content: [
                    {
                        title: `Topic 1: The Triathlete`,
                        audioLinkSlow: `assets/audio/LESSON 03 - TIME/Recording 3.1 - Slow Speech - Topic 1 - The Triathlete.mp3`,
                        audioLinkNative: `assets/audio/LESSON 03 - TIME/Recording 3.2 - Native Speech - Topic 1 - The Triathlete.mp3`,
                        data: `<!-- #######  YAY, I AM THE SOURCE EDITOR! #########-->
               <p>Janet was very surprised at Jackson&rsquo;s plan to complete in a triathlon next week. She&rsquo;s also curious about his triathlon training schedule.</p>
              <p><em>Janet rất ngạc nhi&ecirc;n với kế hoạch thi đấu ở cuộc thi ba m&ocirc;n phối hợp v&agrave;o tuần tới của Jackson. C&ocirc; cũng t&ograve; m&ograve; về lịch tập luyện ba m&ocirc;n phối hợp của anh ấy.</em></p>
              <p><strong>Janet</strong>: I can&rsquo;t believe you&rsquo;re really <strong>doing a triathlon</strong> next week! How are you training for it?</p>
              <p><strong><em>Janet</em></strong><em>: T&ocirc;i kh&ocirc;ng thể tin được l&agrave; cậu thực sự sẽ <strong>tham gia một cuộc thi ba m&ocirc;n phối hợp</strong> v&agrave;o tuần tới! Cậu tập luyện cho cuộc thi thế n&agrave;o?</em></p>
              <p><strong>Jackson</strong>: I <strong>get up</strong> early everyday to run. Usually I&rsquo;m <strong>awake</strong> by 4:30 or 5:00, and then I run 10 miles.</p>
              <p><strong><em>Jackson</em></strong><em>: T&ocirc;i <strong>dậy</strong> sớm mỗi ng&agrave;y để chạy. Th&ocirc;ng thường t&ocirc;i <strong>thức dậy</strong> l&uacute;c 4:30 hoặc 5:00 v&agrave; sau đ&oacute; t&ocirc;i chạy 10 dặm.</em></p>
              <p><strong>Janet</strong>: Wow. <strong>What time do you</strong> finish running?</p>
              <p><strong><em>Janet</em></strong><em>: Woa. <strong>Mấy giờ th&igrave; cậu</strong> chạy xong?</em></p>
              <p><strong>Jackson</strong>: I run for about an hour, and then I swim util <strong>it&rsquo;s time to</strong> go to work.</p>
              <p><strong><em>Jackson</em></strong><em>: T&ocirc;i chạy trong khoảng một giờ, v&agrave; sau đ&oacute; t&ocirc;i bơi cho tới khi <strong>đến giờ</strong> đi l&agrave;m.</em></p>
              <p><strong>Janet</strong>: Where do you swim?</p>
              <p><strong><em>Janet</em></strong><em>: Cậu bơi ở đ&acirc;u?</em></p>
              <p><strong>Jackson</strong>: <strong>Thankfully</strong>, there&rsquo;s a pool near my office, so I use that.</p>
              <p><strong><em>Jackson</em></strong><em>: <strong>Thật may mắn</strong>, c&oacute; một hồ bơi gần văn ph&ograve;ng của t&ocirc;i n&ecirc;n t&ocirc;i sử dụng n&oacute;.</em></p>
              <p><strong>Janet</strong>: What about<strong> cycling?</strong></p>
              <p><strong><em>Janet</em></strong><em>: C&ograve;n m&ocirc;n <strong>đạp xe</strong> th&igrave; sao?</em></p>
              <p><strong>Jackson</strong>: I cycle <strong>on the weekends.</strong> <strong>I spend</strong> pretty much all of Saturday and Sunday cycling around my <strong>neighborhood</strong>.</p>
              <p><strong><em>Jackson</em></strong><em>: T&ocirc;i đạp xe v&agrave;o <strong>những ng&agrave;y cuối tuần.</strong> T&ocirc;i <strong>d&agrave;nh</strong> gần như cả ng&agrave;y thứ bảy v&agrave; chủ nhật để đạp xe đạp quanh <strong>khu nh&agrave; m&igrave;nh</strong>.</em></p>
              <p><strong>Janet</strong>: What if it rains?</p>
              <p><strong><em>Janet</em></strong><em>: Thế nếu trời mưa th&igrave; sao?</em></p>
              <p><strong>Jackson</strong>: Well, I go to the <strong>gym</strong> and use an exercise bike on <strong>rainy</strong> days.</p>
              <p><strong><em>Jackson</em></strong><em>: Ồ, t&ocirc;i đến <strong>ph&ograve;ng tập thể dục</strong> v&agrave; sử dụng xe đạp thể dục v&agrave;o những ng&agrave;y <strong>mưa</strong>.</em></p>
              <p><strong>Janet</strong>: Wow, <strong>good luck</strong> Jackson!</p>
              <p><strong><em>Janet</em></strong><em>: Wow, <strong>ch&uacute;c may mắn</strong> nh&eacute; Jackson!</em></p>
              <p><strong>Jackson</strong>: Why don&rsquo;t you join me next time? It would be fun to have a workout buddy!</p>
              <p><strong>Jackson</strong>: Sao cậu kh&ocirc;ng tham gia c&ugrave;ng với t&ocirc;i trong lần tới nhỉ? Sẽ rất th&uacute; vị khi c&oacute; một người bạn tập đ&oacute;!</p>
              <p><strong>Janet</strong>: Sure, just let me know if they ever start my kind of triathlon: sleeping, eating and binge watching TV. Because I&rsquo;m already in perfect shape for that!</p>
              <p><strong>Janet</strong>: Chắc chắn rồi, h&atilde;y cho t&ocirc;i biết khi n&agrave;o bạn bắt đầu cuộc thi ba m&ocirc;n phối hợp theo kiểu của t&ocirc;i: ngủ, ăn v&agrave; say sưa xem tivi. Bởi v&igrave; t&ocirc;i đ&atilde; ở trạng th&aacute;i ho&agrave;n hảo cho cuộc thi đ&oacute; rồi!</p>`
                    },
                    {
                        title: `Topic 2: Invitation to What`,
                        audioLinkSlow: `assets/audio/LESSON 03 - TIME/Recording 3.3 - Slow Speech -Topic 2 - Invitation to What.mp3`,
                        audioLinkNative: `assets/audio/LESSON 03 - TIME/Recording 3.4 -Native Speech - Topic 2 - Invitation to What.mp3`,
                        data: `<!-- #######  YAY, I AM THE SOURCE EDITOR! #########-->
               <p>Robert wants to invite Sharon to his party. Unfortunately, she has another appointment at that time.</p>
              <p>Robert muốn mời Sharon đến bữa tiệc của anh ấy. Thật kh&ocirc;ng may, c&ocirc; ấy c&oacute; một cuộc hẹn kh&aacute;c v&agrave;o thời điểm đ&oacute;.</p>
              <p><strong>Robert</strong>: Hey Sharon, what time will you be at the <strong>party</strong>?</p>
              <p><strong><em>Robert</em></strong><em>: Ch&agrave;o Sharon, mấy giờ cậu sẽ c&oacute; mặt ở <strong>bữa tiệc?</strong></em></p>
              <p><strong>Sharon</strong>: Party? What party?</p>
              <p><strong><em>Sharon</em></strong><em>: Bữa tiệc? Bữa tiệc n&agrave;o nhỉ?</em></p>
              <p><strong>Robert</strong>: My party. It&rsquo;s at 8:00 PM tomorrow night. Me, you, an Italian restaurant. <strong>Are you free?</strong></p>
              <p><strong><em>Robert</em></strong><em>: Bữa tiệc của t&ocirc;i. L&uacute;c 8:00 tối mai. T&ocirc;i, cậu, tại một nh&agrave; h&agrave;ng &Yacute;. <strong>Cậu c&oacute; r&atilde;nh kh&ocirc;ng?</strong></em></p>
              <p><strong>Sharon</strong>: Is this a party ... or ... are you <strong>inviting</strong> me to dinner, Robert?</p>
              <p><strong><em>Sharon</em></strong><em>: Đ&oacute; c&oacute; phải l&agrave; một bữa tiệc ... hay .... l&agrave; cậu <strong>đang</strong> <strong>mời</strong> t&ocirc;i đi ăn tối, Robert?</em></p>
              <p><strong>Robert</strong>: It&rsquo;s a party, I&rsquo;ll <strong>pick you up</strong> at seven, okay?</p>
              <p><strong><em>Robert</em></strong><em>: Đ&oacute; l&agrave; một bữa tiệc. T&ocirc;i sẽ <strong>đ&oacute;n cậu v&agrave;o l&uacute;c</strong> 7 giờ, được chứ?</em></p>
              <p><strong>Sharon</strong>: Uhhhhhh...</p>
              <p><strong><em>Sharon</em></strong><em>: Uhhhhhh...</em></p>
              <p><strong>Robert</strong>: That sounds like a yes. Is that ... that a yes?</p>
              <p><strong><em>Robert</em></strong><em>: C&oacute; vẻ đ&oacute; l&agrave; một lời đồng &yacute;. L&agrave; ... l&agrave; đồng &yacute; đ&uacute;ng kh&ocirc;ng?</em></p>
              <p><strong>Sharon</strong>: Thanks, but <strong>I&rsquo;m afraid I&rsquo;m busy tomorrow.</strong> I&rsquo;m going to a real party.</p>
              <p><strong><em>Sharon</em></strong><em>: Cảm ơn, nhưng <strong>t&ocirc;i e l&agrave; ng&agrave;y mai t&ocirc;i bận rồi.</strong> T&ocirc;i sẽ tham gia một bữa tiệc thật sự.</em></p>
              <p><strong>Robert</strong>: Oh... Okay. Well, call me later, or something...</p>
              <p><strong><em>Robert</em></strong><em>: Ồ... Được rồi. Vậy, h&atilde;y gọi cho t&ocirc;i sau, hay g&igrave; đ&oacute;...</em></p>
              <p><strong>Sharon</strong>: It&rsquo;s kind of short notice, ya know...</p>
              <p><strong><em>Sharon</em></strong><em>: Đ&oacute; l&agrave; một lời b&aacute;o mời hơi gấp, cậu biết đấy...</em></p>
              <p><strong>Robert</strong>: Yeah, no. I understand. <strong>May be another time.</strong></p>
              <p><strong><em>Robert</em></strong><em>: Ừ, t&ocirc;i hiểu. <strong>C&oacute; lẽ để lần kh&aacute;c vậy.</strong></em></p>
              <p><strong>Sharon</strong>: Well... <strong>Would you like to come with me?</strong></p>
              <p><strong><em>Sharon</em></strong><em>: M&agrave;... <strong>Cậu c&oacute; muốn đi với t&ocirc;i kh&ocirc;ng?</strong></em></p>
              <p><strong>Robert</strong>: <strong>You bet!</strong> What time? ... And ... where?</p>
              <p><strong><em>Robert</em></strong><em>: <strong>Chắc chắn rồi!</strong> Mấy giờ? ... V&agrave; ... ở đ&acirc;u?</em></p>
              <p><strong>Sharon</strong>: Let&rsquo;s meet here tomorrow at noon. Bring something to grill. <strong>How&rsquo;s that sound?</strong></p>
              <p><strong><em>Sharon</em></strong><em>: Ch&uacute;ng ta h&atilde;y gặp nhau ở đ&acirc;y v&agrave;o trưa mai nh&eacute;. Mang theo v&agrave;i thứ để nướng. <strong>Nghe &yacute; đ&oacute; thế n&agrave;o?</strong></em></p>
              <p><strong>Robert</strong>: That sounds great! Should I wear a suit?</p>
              <p><strong><em>Robert</em></strong><em>: Nghe tuyệt đấy! T&ocirc;i c&oacute; n&ecirc;n mặc một bộ vest?</em></p>
              <p><strong>Sharon</strong>: Uhm... A swimsuit. There&rsquo;s a pool.</p>
              <p><strong><em>Sharon</em></strong><em>: Uhm... Một bộ đồ bơi. C&oacute; một bể bơi ở đ&oacute;.</em></p>
              <p><strong>Robert</strong>: <strong>Got it! I&rsquo;m looking forward to it!</strong></p>
              <p><strong><em>Robert</em></strong><em>: <strong>T&ocirc;i hiểu rổi! T&ocirc;i rất mong đợi</strong> bữa tiệc đấy!</em></p>
              <p><strong>Sharon</strong>: Yeah, same! ... Oops! <strong>What time is it?</strong></p>
              <p><strong><em>Sharon</em></strong><em>: Ừ, t&ocirc;i cũng thế! ... Ối! <strong>Mấy giờ rồi?</strong></em></p>
              <p><strong>Robert</strong>: <strong>It&rsquo;s 10:30</strong>.</p>
              <p><strong><em>Robert</em></strong><em>: <strong>B&acirc;y giờ l&agrave; 10:30</strong>.</em></p>
              <p><strong>Sharon</strong>: <strong>Oh, I&rsquo;ve gotta go</strong>. See ya.</p>
              <p><strong><em>Sharon</em></strong><em>: <strong>Ồ, t&ocirc;i phải đi đ&acirc;y</strong>. Hẹn gặp lại.</em></p>`
                    },
                    {
                        title: `Topic 3: Why Didn_t You Come to My Party`,
                        audioLinkSlow: `assets/audio/LESSON 03 - TIME/Recording 3.5 - Slow Speech-Topic 3- Why Didn_t You Come to My Party.mp3`,
                        audioLinkNative: `assets/audio/LESSON 03 - TIME/Recording 3.6 - Native Speech - Topic 3 - Why Didn_t You Come to My Party.mp3`,
                        data: `<!-- #######  YAY, I AM THE SOURCE EDITOR! #########-->
               <p>Three friends are talking about how they want to celebrate their birthdays.</p>
              <p>Ba người bạn đang n&oacute;i về c&aacute;ch họ muốn tổ chức sinh nhật của m&igrave;nh.</p>
              <p><strong>Christina</strong>: Tom, isn&rsquo;t your <strong>birthday coming up</strong> soon?</p>
              <p><strong><em>Christina</em></strong><em>: Tom, kh&ocirc;ng phải l&agrave; <strong>sinh nhật</strong> cậu <strong>sắp tới</strong> sao?</em></p>
              <p><strong>Tom</strong>: Yeah, it&rsquo;s March 21<sup>st</sup>.</p>
              <p><strong><em>Tom</em></strong><em>: Đ&uacute;ng, v&agrave;o ng&agrave;y 21 th&aacute;ng 3.</em></p>
              <p><strong>Christina</strong>: And you&rsquo;re turning... 43?</p>
              <p><strong><em>Christina</em></strong><em>: V&agrave; cậu đang bước sang tuổi ... 43?</em></p>
              <p><strong>Tom</strong>: 37. I <strong>was born in</strong> 1981.</p>
              <p><strong><em>Tom</em></strong><em>: 37. <strong>T&ocirc;i sinh năm</strong> 1981.</em></p>
              <p><strong>Christina</strong>: Well, are going to have a big party?</p>
              <p><strong><em>Christina</em></strong><em>: Vậy, ch&uacute;ng ta sẽ c&oacute; một bữa tiệc party?</em></p>
              <p><strong>Tom</strong>: No, I think this year my girlfriend and I are going to the beach for a <strong>romantic</strong> weekend <strong>together</strong>.</p>
              <p><strong><em>Tom</em></strong><em>: Kh&ocirc;ng, t&ocirc;i nghĩ năm nay t&ocirc;i v&agrave; bạn g&aacute;i sẽ đi biển cho một cuối tuần <strong>l&atilde;ng mạn b&ecirc;n nhau.</strong></em></p>
              <p><strong>Christina</strong>: Oh, okay! ... Liam, when is your birthday again?</p>
              <p><strong><em>Christina</em></strong><em>: Ồ, được rồi! ... Liam, khi n&agrave;o sinh nhật cậu ấy nhỉ?</em></p>
              <p><strong>Liam</strong>: It&rsquo;s on February 19<sup>th</sup>, so about <strong>a month away</strong>.</p>
              <p><strong><em>Liam</em></strong><em>: Ng&agrave;y 19 th&aacute;ng 2, vậy khoảng <strong>một th&aacute;ng nữa</strong>.</em></p>
              <p><strong>Christina</strong>: Awesome! How are we going to <strong>celebrate</strong>?</p>
              <p><strong><em>Christina</em></strong><em>: Tuyệt vời! Ch&uacute;ng ta sẽ <strong>ch&uacute;c mừng</strong> như thế n&agrave;o đ&acirc;y?</em></p>
              <p><strong>Liam</strong>: I always just celebrate my birthday with my family. I don&rsquo;t like big parties or bars.</p>
              <p><strong><em>Liam</em></strong><em>: T&ocirc;i lu&ocirc;n lu&ocirc;n chỉ tổ chức sinh nhật với gia đ&igrave;nh m&igrave;nh. T&ocirc;i kh&ocirc;ng th&iacute;ch những bữa tiệc lớn hay c&aacute;c qu&aacute;n bar.</em></p>
              <p><strong>Christina</strong>: <strong>No offense</strong>, but you guys are <strong>boring</strong>. I always <strong>throw a huge party</strong> for my birthday!</p>
              <p><strong><em>Christina</em></strong><em>: <strong>Kh&ocirc;ng c&oacute; &yacute; g&igrave; đ&acirc;u</strong>, nhưng c&aacute;c cậu thật <strong>nh&agrave;m ch&aacute;n</strong>. T&ocirc;i lu&ocirc;n lu&ocirc;n <strong>tổ chức một bữa tiệc lớn</strong> cho sinh nhật của t&ocirc;i!</em></p>
              <p><strong>Liam</strong>: When is your birthday, Christina?</p>
              <p><strong><em>Liam</em></strong><em>: Khi n&agrave;o sinh nhật cậu, Christina?</em></p>
              <p><strong>Christina</strong>: It was last week, the 10<sup>th</sup>.</p>
              <p><strong><em>Christina</em></strong><em>: V&agrave;o tuần trước, ng&agrave;y m&ugrave;ng 10.</em></p>
              <p><strong>Tom</strong>: The party was <strong>great</strong>, <strong>wasn&rsquo;t it</strong>?</p>
              <p><strong><em>Tom</em></strong><em>: Bữa tiệc hẳn l&agrave; <strong>tuyệt vời phải kh&ocirc;ng?</strong></em></p>
              <p><strong>Christina</strong>: No, it wasn&rsquo;t. Nobody <strong>showed up</strong>.</p>
              <p><strong><em>Christina</em></strong><em>: Kh&ocirc;ng, kh&ocirc;ng hề. Kh&ocirc;ng ai xuất hiện cả.</em></p>`
                    }
                ]
            },
            {
                case: `Day 4`,
                title: `Phản xạ đa chiều - Where Do You Live?`,
                content: [
                    {
                        title: `Topic 1: Apartment Hunting`,
                        audioLinkSlow: `assets/audio/LESSON 04 - RENTING AND SHOPPING/Recording 4.1 - Slow Speech - Topic 1 - Apartment Hunting.mp3`,
                        audioLinkNative: `assets/audio/LESSON 04 - RENTING AND SHOPPING/Recording 4.2 - Native Speech - topic 1 - Apartment Hunting.mp3`,
                        data: `<!-- #######  YAY, I AM THE SOURCE EDITOR! #########--> <p>Mary and Howard like an apartment. The Realty Agent takes them round the apartment before they decide to rent it.</p>
              <p><em>Mary v&agrave; Howard th&iacute;ch một căn hộ. Chuy&ecirc;n vi&ecirc;n Bất động sản (BĐS) đưa họ đi xem căn hộ trước khi họ quyết định thu&ecirc; n&oacute;.</em></p>
              <p><strong>Realty Agent:</strong> This is the <strong>living room.</strong> It has <strong>a nice view of</strong> the part from that window.</p>
              <p><strong><em>Realty Agent:</em></strong><em> Đ&acirc;y l&agrave; <strong>ph&ograve;ng kh&aacute;ch.</strong> N&oacute; c&oacute; <strong>một tầm nh&igrave;n đẹp ra</strong> c&ocirc;ng vi&ecirc;n từ cửa sổ đ&oacute;.</em></p>
              <p><strong>Mary</strong>: How nice, our cats would love it. Oh, <strong>by the way,</strong> are <strong>pets allowed?</strong></p>
              <p><strong><em>Mary</em></strong><em>: Thật tuyệt l&agrave;m sao, mấy ch&uacute; m&egrave;o của ch&uacute;ng t&ocirc;i sẽ th&iacute;ch n&oacute;. &Agrave;, <strong>nh&acirc;n tiện</strong>, <strong>th&uacute; cưng</strong> c&oacute; <strong>được ph&eacute;p</strong> nu&ocirc;i kh&ocirc;ng?</em></p>
              <p><strong>Realty Agent:</strong> Of course, but you need to pay an <strong>extra fee</strong> of 50 dollars per month.</p>
              <p><strong><em>Realty Agent:</em></strong><em> Tất nhi&ecirc;n, nhưng anh chị cần phải trả một khoản <strong>phụ ph&iacute;</strong> l&agrave; 50 đ&ocirc; la mỗi th&aacute;ng.</em></p>
              <p><strong>Howard</strong>: That sounds <strong>doable</strong>. Is the <strong>neighborthood safe?</strong></p>
              <p><strong><em>Howard</em></strong><em>: Nghe c&oacute; vẻ thực hiện được. <strong>Khu d&acirc;n cư</strong> c&oacute; <strong>an to&agrave;n</strong> kh&ocirc;ng?</em></p>
              <p><strong>Realty Agent:</strong> There is some <strong>crime</strong> in the park, but nothing serious. Would you like to see the <strong>bedrooms</strong>?</p>
              <p><strong><em>Realty Agent:</em></strong><em> Một số <strong>tội phạm</strong> ở c&ocirc;ng vi&ecirc;n, nhưng kh&ocirc;ng c&oacute; g&igrave; nghiệm trọng. Anh chị c&oacute; muốn xem <strong>c&aacute;c ph&ograve;ng ngủ</strong> kh&ocirc;ng?</em></p>
              <p><strong>Mary:</strong> Yes, please!</p>
              <p><strong><em>Mary:</em></strong><em> C&oacute;, cảm ơn anh!</em></p>
              <p><strong>Realty Agent:</strong> Let&rsquo;s go upstairs then... This is the master bedroom, with is own bathroom.</p>
              <p><strong><em>Realty Agent:</em></strong><em> H&atilde;y đi l&ecirc;n tầng tr&ecirc;n rồi... Đ&acirc;y l&agrave; ph&ograve;ng ngủ ch&iacute;nh, với ph&ograve;ng tắm ri&ecirc;ng.</em></p>
              <p><strong>Mary</strong>: It&rsquo;s <strong>cozy.</strong></p>
              <p><strong><em>Mary</em></strong><em>: Thật <strong>ấm c&uacute;ng.</strong></em></p>
              <p><strong>Realty Agent:</strong> And this is the second bedroom. You could also use it as a <strong>home office.</strong></p>
              <p><strong><em>Realty Agent:</em></strong><em> V&agrave; đ&acirc;y l&agrave; ph&ograve;ng ngủ thứ hai. Anh chị cũng c&oacute; thể sử dụng n&oacute; như l&agrave; một <strong>văn ph&ograve;ng tại nh&agrave;.</strong></em></p>
              <p><strong>Mary:</strong> <strong>Where is the second bathroom?</strong></p>
              <p><strong><em>Mary:</em></strong><em> <strong>Ph&ograve;ng tắm thứ hai ở đ&acirc;u.</strong></em></p>
              <p><strong>Realty Agent:</strong> It&rsquo;s <strong>downstairs</strong>.</p>
              <p><strong><em>Realty Agent:</em></strong><em> N&oacute; ở <strong>tầng dưới</strong>.</em></p>
              <p><strong>Howard:</strong> And <strong>how much is the rent?</strong></p>
              <p><strong><em>Howard:</em></strong><em> V&agrave; <strong>tiền thu&ecirc;</strong> nh&agrave; l&agrave; <strong>bao nhi&ecirc;u?</strong></em></p>
              <p><strong>Realty Agent:</strong> <strong>It&rsquo;s $800 a month</strong>... plus $50, if you have pets.</p>
              <p><strong><em>Realty Agent:</em></strong><em> <strong>800 đ&ocirc; la một th&aacute;ng</strong>... cộng với 50 đ&ocirc; la, nếu anh chị c&oacute; vật nu&ocirc;i.</em></p>
              <p><strong>Howard</strong>: Sound good. Let&rsquo;s <strong>sign the lease.</strong></p>
              <p><strong><em>Howard</em></strong><em>: Nghe c&oacute; vẻ tốt đấy. H&atilde;y <strong>k&yacute; hợp đồng thu&ecirc;</strong> th&ocirc;i.</em></p>
              <p><strong>Mary (Sigh):</strong> Okey. My purse is like an onion, opening it makes me cry!!!</p>
              <p><strong><em>Mary:</em></strong><em> Ok. V&iacute; của em giống như một củ h&agrave;nh, mở n&oacute; ra khiến em bật kh&oacute;c.</em></p>`
                    },
                    {
                        title: `Topic 2: The Super Shopper`,
                        audioLinkSlow: `assets/audio/LESSON 04 - RENTING AND SHOPPING/Recording 4.3 - Slow Speech - Topic 2 - The Super Shopper.mp3`,
                        audioLinkNative: `assets/audio/LESSON 04 - RENTING AND SHOPPING/Recording 4.4 - Native Speech - Topic 2 - The Super Shopper.mp3`,
                        data: `<!-- #######  YAY, I AM THE SOURCE EDITOR! #########--> <p>Mary goes to a local supermarket. Unfortunately, she has to pay a little too much for what she wants to buy.</p>
              <p>Mary đến một si&ecirc;u thị trong v&ugrave;ng. Thật kh&ocirc;ng may, c&ocirc; ấy phải trả qu&aacute; nhiều cho những g&igrave; c&ocirc; ấy muốn mua.</p>
              <p><strong>Cashier</strong>: Your <strong>total</strong> will be seventy two. <strong>How would you like to pay?</strong></p>
              <p><strong><em>Cashier</em></strong><em>: Của chị <strong>tổng cộng</strong> l&agrave; bảy mươi hai đ&ocirc; la. <strong>Chị muốn thanh to&aacute;n như thế n&agrave;o?</strong></em></p>
              <p><strong>Mary</strong>: That&rsquo;s <strong>more than I expected.</strong> <strong>How much is</strong> that <strong>fancy jelly?</strong></p>
              <p><strong><em>Mary</em></strong><em>: Số đ&oacute; <strong>nhiều hơn t&ocirc;i nghĩ.</strong> <strong>Lọ mứt nhiều m&agrave;u</strong> kia <strong>bao nhi&ecirc;u</strong> tiền?</em></p>
              <p><strong>Cashier</strong>: The <strong>organic</strong> jelly is sixteen dollars.</p>
              <p><strong><em>Cashier</em></strong><em>: Mứt <strong>hữu cơ</strong> c&oacute; gi&aacute; l&agrave; mười s&aacute;u đ&ocirc; la.</em></p>
              <p><strong>Mary</strong>: Oh no. My daughter likes it, but that&rsquo;s too much. I&rsquo;ll have to <strong>put that back.</strong></p>
              <p><strong><em>Mary</em></strong><em>: &Ocirc;i kh&ocirc;ng. Con g&aacute;i t&ocirc;i th&iacute;ch n&oacute;, nhưng n&oacute; qu&aacute; đắt. T&ocirc;i phải <strong>để n&oacute; lại.</strong></em></p>
              <p><strong>Cashier</strong>: That&rsquo;s actually <strong>on sale</strong> now, <strong>buy one get one half off.</strong> Would you like to do that?</p>
              <p><strong><em>Cashier</em></strong><em>: Thật ra th&igrave; c&aacute;i đ&oacute; đang được giảm gi&aacute;, mua một tặng một nửa. Chị c&oacute; muốn nhận ưu đ&atilde;i đ&oacute; kh&ocirc;ng?</em></p>
              <p><strong>Mary</strong>: Well, sixteen dollars is a little <strong>steep</strong> for one, but twenty-four dollars for two might <strong>be worth</strong> it.</p>
              <p><strong><em>Mary</em></strong><em>: Để xem, mười s&aacute;u đ&ocirc; la cho một lọ th&igrave; <strong>qu&aacute; đắt</strong>, nhưng hai tư đ&ocirc; la cho hai lọ th&igrave; <strong>đ&aacute;ng gi&aacute;.</strong></em></p>
              <p><strong>Cashier</strong>: So your new total is eighty dollars.</p>
              <p><strong><em>Cashier</em></strong><em>: Như vậy tổng số mới của chị l&agrave; t&aacute;m mươi đ&ocirc; la.</em></p>
              <p><strong>Mary</strong>: And I have some <strong>coupons</strong>...</p>
              <p><strong><em>Mary</em></strong><em>: V&agrave; t&ocirc;i c&oacute; v&agrave;i <strong>phiếu giảm gi&aacute;</strong>...</em></p>
              <p><strong>Cashier</strong>: <strong>Would you like to</strong> use all of those?</p>
              <p><strong><em>Cashier</em></strong><em>: <strong>Chị c&oacute; muốn</strong> sử dụng tất cả ch&uacute;ng kh&ocirc;ng?</em></p>
              <p><strong>Mary</strong>: Yes.</p>
              <p><strong><em>Mary</em></strong><em>: C&oacute;.</em></p>
              <p><strong>Cashier</strong>: ... So your new total is ... 1 dollar. How would you like to pay? <strong>Cash</strong> or <strong>credit?</strong></p>
              <p><strong><em>Cashier</em></strong><em>: ... Tổng số mới của chị l&agrave; ... 1 đ&ocirc; la. Chị muốn thanh to&aacute;n như thế n&agrave;o? <strong>Tiền mặt</strong> hay <strong>thẻ t&iacute;n dụng?</strong></em></p>
              <p><strong>Mary</strong>: Cash, please.</p>
              <p><strong><em>Mary</em></strong><em>: Tiền mặt, l&agrave;m ơn.</em></p>`
                    },
                    {
                        title: `Topic 3: What’s Your Style`,
                        audioLinkSlow: `assets/audio/LESSON 04 - RENTING AND SHOPPING/Recording 4.5 - Slow Speech -Topic 3 - What’s Your Style.mp3`,
                        audioLinkNative: `assets/audio/LESSON 04 - RENTING AND SHOPPING/Recording 4.6 - Native Speech - Topic 3 - What_s Your Style.mp3`,
                        data: `<!-- #######  YAY, I AM THE SOURCE EDITOR! #########--><p>Sonya and Alice are walking on the street, then they&rsquo;re attracted by a cute tomboy outfit in the window of a nearby shop.</p>
              <p><em>Sonya v&agrave; Alice đang đi bộ tr&ecirc;n phố th&igrave; bị thu h&uacute;t bởi một bộ đồ kiểu tomboy dễ thương ở của sổ của một cửa h&agrave;ng gần đ&oacute;.</em></p>
              <p><strong>Sonya</strong>: Oh my gosh, look at this <strong>outfit</strong>. Isn&rsquo;t it great?</p>
              <p><strong><em>Sonya</em></strong><em>: &Ocirc;i trời ơi, nh&igrave;n <strong>bộ đồ</strong> n&agrave;y đi. Kh&ocirc;ng phải n&oacute; rất tuyệt sao?</em></p>
              <p><strong>Alice</strong>: Maybe for a guy, but not girls.</p>
              <p><strong><em>Alick</em></strong><em>: C&oacute; thể l&agrave; tuyệt với con trai, nhưng kh&ocirc;ng phải với con g&aacute;i.</em></p>
              <p><strong>Sonya</strong>: What&rsquo;s wrong? You don&rsquo;t like the <strong>tomboy</strong> look?</p>
              <p><strong><em>Sonya</em></strong><em>: Sao thế? Cậu kh&ocirc;ng th&iacute;ch phong c&aacute;ch <strong>tomboy</strong> &agrave;?</em></p>
              <p><strong>Alice</strong>: Erm. I like the tomboy look like how I like fast food... And I don&rsquo;t eat fast food... It&rsquo;s <strong>trendy,</strong> but I think women should <strong>dress like women.</strong></p>
              <p><strong><em>Alcie</em></strong><em>: Xem n&agrave;o. T&ocirc;i th&iacute;ch phong c&aacute;ch tomboy, giống như c&aacute;ch t&ocirc;i th&iacute;ch đồ ăn nhanh... V&agrave; t&ocirc;i kh&ocirc;ng ăn đồ ăn nhanh... N&oacute; <strong>hợp thời,</strong> nhưng t&ocirc;i nghĩ rằng phụ nữ th&igrave; n&ecirc;n <strong>mặc giống phụ nữ.</strong></em></p>
              <p><strong>Sonya</strong>: I <strong>respect</strong> that. I think it&rsquo;s fun and cool to be a little <strong>different</strong> sometimes. Some guys like it, too.</p>
              <p><strong><em>Sonya</em></strong><em>: T&ocirc;i <strong>t&ocirc;n trọng</strong> điều đ&oacute;. T&ocirc;i cho l&agrave; thỉnh thoảng <strong>thay đổi</strong> một ch&uacute;t cũng rất th&uacute; vị. Một v&agrave;i anh ch&agrave;ng cũng th&iacute;ch thế m&agrave;.</em></p>
              <p><strong>Alice</strong>: You&rsquo;re right. But my <strong>shoulders</strong> are too wide to <strong>pull it off.</strong> I look like a man.</p>
              <p><strong><em>Alice</em></strong><em>: Cậu n&oacute;i đ&uacute;ng. Nhưng <strong>vai</strong> của t&ocirc;i qu&aacute; rộng n&ecirc;n kh&ocirc;ng thể <strong>mặc c&aacute;i n&agrave;y đẹp được.</strong> Tr&ocirc;ng t&ocirc;i như một người đ&agrave;n &ocirc;ng vậy.</em></p>
              <p><strong>Sonya</strong>: No! I <strong>wish</strong> I had your shoulders. Anyway, do you want to <strong>go shopping?</strong></p>
              <p><strong><em>Sonya</em></strong><em>: Kh&ocirc;ng! T&ocirc;i <strong>ước</strong> t&ocirc;i c&oacute; đ&ocirc;i vai của cậu. D&ugrave; sao th&igrave;, cậu c&oacute; muốn <strong>đi mua sắm kh&ocirc;ng?</strong></em></p>
              <p><strong>Alice</strong>: Yes. Maybe I&rsquo;ll <strong>try on</strong> some <strong>tomboy-ish</strong> stuff. Who knows, I might like it.</p>
              <p><strong><em>Alice</em></strong><em>: C&oacute; chứ. C&oacute; lẽ t&ocirc;i sẽ <strong>thử</strong> v&agrave;i <strong>kiểu tomboy.</strong> Ai m&agrave; biết được c&oacute; thể t&ocirc;i sẽ th&iacute;ch.</em></p>
              <p><strong>Sonya</strong>: <strong>It sounds like</strong> someone is going to have a whole new <strong>style</strong>!</p>
              <p><strong><em>Sonya</em></strong><em>: <strong>Nghe c&oacute; vẻ như</strong> ai đ&oacute; sắp c&oacute; một phong c&aacute;ch ho&agrave;n to&agrave;n mới k&igrave;a!</em></p>`
                    }
                ]
            },
            {
                case: `Day 5`,
                title: `Phản xạ đa chiều - What is Your Job?`,
                content: [
                    {
                        title: `Topic 3: Why Didn_t You Come to My Party`,
                        audioLinkSlow: `assets/audio/LESSON 03 - TIME/Recording 3.5 - Slow Speech-Topic 3- Why Didn_t You Come to My Party.mp3`,
                        audioLinkNative: `assets/audio/LESSON 03 - TIME/Recording 3.6 - Native Speech - Topic 3 - Why Didn_t You Come to My Party.mp3`,
                        data: `<!-- #######  YAY, I AM THE SOURCE EDITOR! #########-->`
                    }
                ]
            },
            {
                case: `Day 6`,
                title: `Thử thách`,
                content: [
                    {
                        title: `Topic 3: What is your job`,
                        // tslint:disable-next-line:max-line-length
                        audioLinkReflection: `assets/audio/LESSON 01 - INTRODUCTION/Recording 1.11 - Production.mp3`,
                        data: `
              ✔️ Tải phần tài liệu production sau đây về máy – bấm vào đây để download (nếu bạn đang truy cập khóa học trên app, vui lòng vào web để tải trực tiếp tài liệu này) – Luyện tập từ 2-3 lần (Có thể nhìn phần dịch và từ điển nếu cần).<br/>
              ✔️ Nghe Recording 1.11 và trả lời vào khoảng trống từ 3-5 lần<br/>
              ✔️ Hãy tưởng tượng bạn vô tình gặp một người nước ngoài tại một địa điểm du lịch nào đó, bạn hãy chủ động là người hỏi chuyện và làm quen với người bạn đó.<br/>
              ✔️ Hãy tạo ra một kịch bản từ 10 – 15 câu hỏi đáp và thực hành nói trước gương sao cho thật tự nhiên.<br/>
              ✔️ Bạn cũng có thể tìm một người bạn để đối thoại cùng nhau như các nhân vật tại Lesson 01!<br/>
              Bạn đã hoàn thành việc luyện tập Lesson 01 – Eng Breaking. Ngay bây giờ, hãy đến với bài Đánh giá (Assessment) để nâng cao kỹ năng và ôn luyện kiến thức ở Lesson 01.`
                    }
                ]
            }
        ]
    }
];


/***/ }),

/***/ "wjxX":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/product/lesson/lesson.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-md-12 mb-4\">\n      <!-- Nav tabs -->\n      <tabset>\n        <tab>\n          <ng-template tabHeading><i class=\"icon-user\"></i> Listen and read document &nbsp;<span class=\"badge badge-success\">Pro</span></ng-template>\n          <app-listen-read></app-listen-read>\n        </tab>\n        <tab>\n          <ng-template tabHeading><i class=\"icon-layers\"></i> Grammar &nbsp;<span class=\"badge badge-pill badge-danger\">Basic</span></ng-template>\n          <app-grammar></app-grammar>\n        </tab>\n      </tabset>\n    </div><!--/.col-->\n  </div><!--/.row-->\n</div>\n\n<div *ngIf=\"false\">\n  <ng-chat class=\"chat-custom\" [adapter]=\"adapter\" [userId]=\"userId\"></ng-chat>\n</div>\n\n<button type=\"button\" class=\"btn btn-success mr-1\" data-toggle=\"modal\" (click)=\"showVideo()\">\n  Gửi bà xã\n</button>\n\n<div bsModal #largeModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content text-center\">\n      <div class=\"modal-header\">\n        <h4 class=\"font-weight-bold font-italic\"\n            style=\"color: dodgerblue;\">💖💖💖 Happy birthday bà xã 💖💖💖</h4>\n        <button type=\"button\" class=\"close\" (click)=\"largeModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n<!--        <video width=\"320\" height=\"240\" controls autoplay loop>-->\n<!--          <source src=\"assets/video/happy_birthday_bx.mp4\" type=\"video/mp4\">-->\n<!--          Your browser does not support the video tag.-->\n<!--        </video>-->\n        <iframe src=\"https://www.youtube.com/embed/guOcPdleXws\" allow=\"fullscreen\"\n                width=\"100%\" height=\"500\">\n        </iframe>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"largeModal.hide()\">Close</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n");

/***/ }),

/***/ "x+5p":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/product/lesson/chat/chat.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>chat works!</p>\n");

/***/ }),

/***/ "yU/L":
/*!***************************************************************!*\
  !*** ./node_modules/ng-chat/__ivy_ngcc__/fesm2015/ng-chat.js ***!
  \***************************************************************/
/*! exports provided: ChatAdapter, ChatParticipantStatus, ChatParticipantType, Group, Message, MessageType, NgChatModule, PagedHistoryChatAdapter, ParticipantMetadata, ParticipantResponse, Theme, User, Window, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatAdapter", function() { return ChatAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatParticipantStatus", function() { return ChatParticipantStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatParticipantType", function() { return ChatParticipantType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageType", function() { return MessageType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgChatModule", function() { return NgChatModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagedHistoryChatAdapter", function() { return PagedHistoryChatAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipantMetadata", function() { return ParticipantMetadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipantResponse", function() { return ParticipantResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Theme", function() { return Theme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Window", function() { return Window; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NgChat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return EmojifyPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return LinkfyPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return SanitizePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return GroupMessageDisplayNamePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return NgChatOptionsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return NgChatFriendsListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return NgChatWindowComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");














const _c0 = ["chatWindow"];
function NgChat_link_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "link", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "sanitize");
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx_r0.customTheme), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeResourceUrl"]);
} }
const _c1 = function (a2) { return { "ng-chat-window": true, "primary-outline-color": true, "ng-chat-window-collapsed": a2 }; };
const _c2 = function (a0) { return { "right": a0 }; };
function NgChat_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ng-chat-window", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onMessagesSeen", function NgChat_div_1_div_2_Template_ng_chat_window_onMessagesSeen_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r6.onWindowMessagesSeen($event); })("onMessageSent", function NgChat_div_1_div_2_Template_ng_chat_window_onMessageSent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.onWindowMessageSent($event); })("onTabTriggered", function NgChat_div_1_div_2_Template_ng_chat_window_onTabTriggered_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r9.onWindowTabTriggered($event); })("onChatWindowClosed", function NgChat_div_1_div_2_Template_ng_chat_window_onChatWindowClosed_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r10.onWindowChatClosed($event); })("onOptionTriggered", function NgChat_div_1_div_2_Template_ng_chat_window_onOptionTriggered_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r11.onWindowOptionTriggered($event); })("onLoadHistoryTriggered", function NgChat_div_1_div_2_Template_ng_chat_window_onLoadHistoryTriggered_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r12.fetchMessageHistory($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const window_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c1, window_r3.isCollapsed))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c2, (!ctx_r2.hideFriendsList ? ctx_r2.friendsListWidth : 0) + 20 + ctx_r2.windowSizeFactor * i_r4 + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fileUploadAdapter", ctx_r2.fileUploadAdapter)("localization", ctx_r2.localization)("userId", ctx_r2.userId)("window", window_r3)("showOptions", ctx_r2.groupAdapter)("emojisEnabled", ctx_r2.emojisEnabled)("linkfyEnabled", ctx_r2.linkfyEnabled)("showMessageDate", ctx_r2.showMessageDate)("messageDatePipeFormat", ctx_r2.messageDatePipeFormat)("hasPagedHistory", ctx_r2.hasPagedHistory);
} }
function NgChat_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ng-chat-friends-list", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onParticipantClicked", function NgChat_div_1_Template_ng_chat_friends_list_onParticipantClicked_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.onParticipantClickedFromFriendsList($event); })("onOptionPromptCanceled", function NgChat_div_1_Template_ng_chat_friends_list_onOptionPromptCanceled_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.onOptionPromptCanceled(); })("onOptionPromptConfirmed", function NgChat_div_1_Template_ng_chat_friends_list_onOptionPromptConfirmed_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.onOptionPromptConfirmed($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NgChat_div_1_div_2_Template, 3, 16, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r1.theme);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("localization", ctx_r1.localization)("shouldDisplay", !ctx_r1.hideFriendsList)("userId", ctx_r1.userId)("isCollapsed", ctx_r1.isCollapsed)("searchEnabled", ctx_r1.searchEnabled)("participants", ctx_r1.participants)("participantsResponse", ctx_r1.participantsResponse)("participantsInteractedWith", ctx_r1.participantsInteractedWith)("windows", ctx_r1.windows)("currentActiveOption", ctx_r1.currentActiveOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.windows);
} }
function NgChatOptionsComponent_div_0_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgChatOptionsComponent_div_0_a_5_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const option_r2 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r4.onOptionClicked(option_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "primary-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", option_r2.displayLabel, " ");
} }
function NgChatOptionsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, NgChatOptionsComponent_div_0_a_5_Template, 2, 2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.options);
} }
function NgChatFriendsListComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgChatFriendsListComponent_div_0_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r4.onFriendsListActionCancelClicked(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgChatFriendsListComponent_div_0_div_4_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r6.onFriendsListActionConfirmClicked(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NgChatFriendsListComponent_div_0_input_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NgChatFriendsListComponent_div_0_input_5_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7.searchInput = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", ctx_r2.localization.searchPlaceholder)("ngModel", ctx_r2.searchInput);
} }
function NgChatFriendsListComponent_div_0_ul_6_li_1_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function NgChatFriendsListComponent_div_0_ul_6_li_1_input_1_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const user_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r15.onFriendsListCheckboxChange(user_r10, $event.target.checked); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r11.isUserSelectedFromFriendsList(user_r10));
} }
function NgChatFriendsListComponent_div_0_ul_6_li_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NgChatFriendsListComponent_div_0_ul_6_li_1_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "sanitize");
} if (rf & 2) {
    const user_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, user_r10.avatar), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function NgChatFriendsListComponent_div_0_ul_6_li_1_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r14.unreadMessagesTotalByParticipant(user_r10));
} }
const _c3 = function (a0) { return { "ng-chat-friends-list-selectable-offset": a0, "ng-chat-friends-list-container": true }; };
const _c4 = function (a1, a2, a3, a4) { return { "ng-chat-participant-status": true, "online": a1, "busy": a2, "away": a3, "offline": a4 }; };
function NgChatFriendsListComponent_div_0_ul_6_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NgChatFriendsListComponent_div_0_ul_6_li_1_input_1_Template, 1, 1, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgChatFriendsListComponent_div_0_ul_6_li_1_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const user_r10 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r21.onUserClick(user_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NgChatFriendsListComponent_div_0_ul_6_li_1_div_3_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NgChatFriendsListComponent_div_0_ul_6_li_1_img_4_Template, 2, 3, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "strong", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, NgChatFriendsListComponent_div_0_ul_6_li_1_span_8_Template, 2, 1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.currentActiveOption && ctx_r9.currentActiveOption.validateContext(user_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c3, ctx_r9.currentActiveOption));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !user_r10.avatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", user_r10.avatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", user_r10.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r10.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx_r9.chatParticipantStatusDescriptor(user_r10.status, ctx_r9.localization));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction4"](11, _c4, user_r10.status == ctx_r9.ChatParticipantStatus.Online, user_r10.status == ctx_r9.ChatParticipantStatus.Busy, user_r10.status == ctx_r9.ChatParticipantStatus.Away, user_r10.status == ctx_r9.ChatParticipantStatus.Offline));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.unreadMessagesTotalByParticipant(user_r10).length > 0);
} }
const _c5 = function (a0) { return { "offset-search": a0 }; };
function NgChatFriendsListComponent_div_0_ul_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NgChatFriendsListComponent_div_0_ul_6_li_1_Template, 9, 16, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c5, ctx_r3.searchEnabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.filteredParticipants);
} }
const _c6 = function (a2) { return { "primary-outline-color": true, "primary-background": true, "ng-chat-people-collapsed": a2 }; };
function NgChatFriendsListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgChatFriendsListComponent_div_0_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.onChatTitleClicked(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NgChatFriendsListComponent_div_0_div_4_Template, 5, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, NgChatFriendsListComponent_div_0_input_5_Template, 1, 2, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, NgChatFriendsListComponent_div_0_ul_6_Template, 2, 4, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c6, ctx_r0.isCollapsed));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.localization.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.currentActiveOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.searchEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.isCollapsed);
} }
const _c7 = ["chatMessages"];
const _c8 = ["nativeFileInput"];
const _c9 = ["chatWindowInput"];
function NgChatWindowComponent_ng_container_0_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.unreadMessagesTotal(ctx_r2.window));
} }
function NgChatWindowComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgChatWindowComponent_ng_container_0_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.onChatWindowClicked(ctx_r3.window); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, NgChatWindowComponent_ng_container_0_span_6_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgChatWindowComponent_ng_container_0_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.onCloseChatWindow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx_r0.window.participant.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.window.participant.displayName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx_r0.chatParticipantStatusDescriptor(ctx_r0.window.participant.status, ctx_r0.localization));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction4"](5, _c4, ctx_r0.window.participant.status == ctx_r0.ChatParticipantStatus.Online, ctx_r0.window.participant.status == ctx_r0.ChatParticipantStatus.Busy, ctx_r0.window.participant.status == ctx_r0.ChatParticipantStatus.Away, ctx_r0.window.participant.status == ctx_r0.ChatParticipantStatus.Offline));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.unreadMessagesTotal(ctx_r0.window).length > 0);
} }
function NgChatWindowComponent_ng_container_1_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.unreadMessagesTotal(ctx_r6.window));
} }
function NgChatWindowComponent_ng_container_1_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Loading history...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NgChatWindowComponent_ng_container_1_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgChatWindowComponent_ng_container_1_div_13_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r13.fetchMessageHistory(ctx_r13.window); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.localization.loadMessageHistoryPlaceholder);
} }
function NgChatWindowComponent_ng_container_1_div_14_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NgChatWindowComponent_ng_container_1_div_14_ng_container_1_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "sanitize");
} if (rf & 2) {
    const message_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx_r22.getChatWindowAvatar(ctx_r22.window.participant, message_r15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function NgChatWindowComponent_ng_container_1_div_14_ng_container_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "groupMessageDisplayName");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, ctx_r23.window.participant, message_r15));
} }
function NgChatWindowComponent_ng_container_1_div_14_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NgChatWindowComponent_ng_container_1_div_14_ng_container_1_div_1_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NgChatWindowComponent_ng_container_1_div_14_ng_container_1_img_2_Template, 2, 3, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NgChatWindowComponent_ng_container_1_div_14_ng_container_1_span_3_Template, 3, 4, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const message_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r17.getChatWindowAvatar(ctx_r17.window.participant, message_r15));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r17.getChatWindowAvatar(ctx_r17.window.participant, message_r15));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r17.window.participant.participantType == ctx_r17.ChatParticipantType.Group);
} }
function NgChatWindowComponent_ng_container_1_div_14_div_3_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, message_r15.dateSent, ctx_r27.messageDatePipeFormat));
} }
const _c10 = function (a0, a1) { return { "sent-chat-message-container": a0, "received-chat-message-container": a1 }; };
function NgChatWindowComponent_ng_container_1_div_14_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "linkfy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "emojify");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NgChatWindowComponent_ng_container_1_div_14_div_3_span_4_Template, 3, 4, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](9, _c10, message_r15.fromId == ctx_r18.userId, message_r15.fromId != ctx_r18.userId));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 6, message_r15.message, ctx_r18.emojisEnabled), ctx_r18.linkfyEnabled), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r18.showMessageDate && message_r15.dateSent);
} }
function NgChatWindowComponent_ng_container_1_div_14_div_4_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, message_r15.dateSent, ctx_r30.messageDatePipeFormat));
} }
function NgChatWindowComponent_ng_container_1_div_14_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NgChatWindowComponent_ng_container_1_div_14_div_4_span_2_Template, 3, 4, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c10, message_r15.fromId == ctx_r19.userId, message_r15.fromId != ctx_r19.userId));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", message_r15.message, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r19.showMessageDate && message_r15.dateSent);
} }
function NgChatWindowComponent_ng_container_1_div_14_div_5_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", message_r15.fileSizeInBytes, " Bytes");
} }
const _c11 = function (a1) { return { "file-message-container": true, "received": a1 }; };
function NgChatWindowComponent_ng_container_1_div_14_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgChatWindowComponent_ng_container_1_div_14_div_5_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37); const message_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r35.markMessagesAsRead([message_r15]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, NgChatWindowComponent_ng_container_1_div_14_div_5_span_6_Template, 2, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c11, message_r15.fromId != ctx_r20.userId));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("href", message_r15.downloadUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("title", message_r15.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](message_r15.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", message_r15.fileSizeInBytes);
} }
const _c12 = function (a1) { return { "ng-chat-message": true, "ng-chat-message-received": a1 }; };
function NgChatWindowComponent_ng_container_1_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NgChatWindowComponent_ng_container_1_div_14_ng_container_1_Template, 4, 3, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NgChatWindowComponent_ng_container_1_div_14_div_3_Template, 5, 12, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NgChatWindowComponent_ng_container_1_div_14_div_4_Template, 3, 6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, NgChatWindowComponent_ng_container_1_div_14_div_5_Template, 7, 7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c12, message_r15.fromId != ctx_r10.userId));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.isAvatarVisible(ctx_r10.window, message_r15, i_r16));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", message_r15.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx_r10.MessageType.Text);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx_r10.MessageType.Image);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx_r10.MessageType.File);
} }
function NgChatWindowComponent_ng_container_1_ng_container_19_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgChatWindowComponent_ng_container_1_ng_container_19_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r42.triggerNativeFileUpload(ctx_r42.window); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NgChatWindowComponent_ng_container_1_ng_container_19_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 18);
} }
function NgChatWindowComponent_ng_container_1_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NgChatWindowComponent_ng_container_1_ng_container_19_a_1_Template, 2, 0, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 42, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function NgChatWindowComponent_ng_container_1_ng_container_19_Template_input_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r44.onFileChosen(ctx_r44.window); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NgChatWindowComponent_ng_container_1_ng_container_19_div_4_Template, 1, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r12.isUploadingFile(ctx_r12.window));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx_r12.getUniqueFileUploadInstanceId(ctx_r12.window));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.isUploadingFile(ctx_r12.window));
} }
const _c13 = function (a1) { return { "chat-window-input": true, "has-side-action": a1 }; };
function NgChatWindowComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgChatWindowComponent_ng_container_1_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r46.onChatWindowClicked(ctx_r46.window); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, NgChatWindowComponent_ng_container_1_span_6_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgChatWindowComponent_ng_container_1_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r48.onCloseChatWindow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ng-chat-options", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("activeOptionTrackerChange", function NgChatWindowComponent_ng_container_1_Template_ng_chat_options_activeOptionTrackerChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r49.activeOptionTrackerChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, NgChatWindowComponent_ng_container_1_div_12_Template, 3, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, NgChatWindowComponent_ng_container_1_div_13_Template, 3, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, NgChatWindowComponent_ng_container_1_div_14_Template, 6, 8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NgChatWindowComponent_ng_container_1_Template_input_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r50.window.newMessage = $event; })("keydown", function NgChatWindowComponent_ng_container_1_Template_input_keydown_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r51.onChatInputTyped($event, ctx_r51.window); })("blur", function NgChatWindowComponent_ng_container_1_Template_input_blur_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r52.toggleWindowFocus(ctx_r52.window); })("focus", function NgChatWindowComponent_ng_container_1_Template_input_focus_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r53.toggleWindowFocus(ctx_r53.window); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "emojify");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, NgChatWindowComponent_ng_container_1_ng_container_19_Template, 5, 3, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx_r1.window.participant.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.window.participant.displayName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx_r1.chatParticipantStatusDescriptor(ctx_r1.window.participant.status, ctx_r1.localization));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction4"](17, _c4, ctx_r1.window.participant.status == ctx_r1.ChatParticipantStatus.Online, ctx_r1.window.participant.status == ctx_r1.ChatParticipantStatus.Busy, ctx_r1.window.participant.status == ctx_r1.ChatParticipantStatus.Away, ctx_r1.window.participant.status == ctx_r1.ChatParticipantStatus.Offline));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.unreadMessagesTotal(ctx_r1.window).length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "ng-chat-options-container")("options", ctx_r1.defaultWindowOptions(ctx_r1.window));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.window.isLoadingHistory);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.hasPagedHistory && ctx_r1.window.hasMoreMessages && !ctx_r1.window.isLoadingHistory);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.window.messages);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](18, 14, ctx_r1.window.newMessage, ctx_r1.emojisEnabled))("placeholder", ctx_r1.localization.messagePlaceholder)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](22, _c13, ctx_r1.fileUploadAdapter));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.fileUploadAdapter);
} }
class ChatAdapter {
    constructor() {
        // ### Abstract adapter methods ###
        // Event handlers
        /** @internal */
        this.friendsListChangedHandler = (participantsResponse) => { };
        /** @internal */
        this.messageReceivedHandler = (participant, message) => { };
    }
    // ### Adapter/Chat income/ingress events ###
    onFriendsListChanged(participantsResponse) {
        this.friendsListChangedHandler(participantsResponse);
    }
    onMessageReceived(participant, message) {
        this.messageReceivedHandler(participant, message);
    }
}

var MessageType;
(function (MessageType) {
    MessageType[MessageType["Text"] = 1] = "Text";
    MessageType[MessageType["File"] = 2] = "File";
    MessageType[MessageType["Image"] = 3] = "Image";
})(MessageType || (MessageType = {}));

class Message {
    constructor() {
        this.type = MessageType.Text;
    }
}

var ChatParticipantStatus;
(function (ChatParticipantStatus) {
    ChatParticipantStatus[ChatParticipantStatus["Online"] = 0] = "Online";
    ChatParticipantStatus[ChatParticipantStatus["Busy"] = 1] = "Busy";
    ChatParticipantStatus[ChatParticipantStatus["Away"] = 2] = "Away";
    ChatParticipantStatus[ChatParticipantStatus["Offline"] = 3] = "Offline";
})(ChatParticipantStatus || (ChatParticipantStatus = {}));

var ChatParticipantType;
(function (ChatParticipantType) {
    ChatParticipantType[ChatParticipantType["User"] = 0] = "User";
    ChatParticipantType[ChatParticipantType["Group"] = 1] = "Group";
})(ChatParticipantType || (ChatParticipantType = {}));

class User {
    constructor() {
        this.participantType = ChatParticipantType.User;
    }
}

class ParticipantResponse {
}

class ParticipantMetadata {
    constructor() {
        this.totalUnreadMessages = 0;
    }
}

class Window {
    constructor(participant, isLoadingHistory, isCollapsed) {
        this.messages = [];
        this.newMessage = "";
        // UI Behavior properties
        this.isCollapsed = false;
        this.isLoadingHistory = false;
        this.hasFocus = false;
        this.hasMoreMessages = true;
        this.historyPage = 0;
        this.participant = participant;
        this.messages = [];
        this.isLoadingHistory = isLoadingHistory;
        this.hasFocus = false; // This will be triggered when the 'newMessage' input gets the current focus
        this.isCollapsed = isCollapsed;
        this.hasMoreMessages = false;
        this.historyPage = 0;
    }
}

/**
 * @description Chat Adapter decorator class that adds pagination to load the history of messagesr.
 * You will need an existing @see ChatAdapter implementation
 */
class PagedHistoryChatAdapter extends ChatAdapter {
}

var Theme;
(function (Theme) {
    Theme["Custom"] = "custom-theme";
    Theme["Light"] = "light-theme";
    Theme["Dark"] = "dark-theme";
})(Theme || (Theme = {}));

// Poached from: https://github.com/Steve-Fenton/TypeScriptUtilities
// @dynamic
class Guid {
    static newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}

class Group {
    constructor(participants) {
        this.id = Guid.newGuid();
        this.participantType = ChatParticipantType.Group;
        this.chattingTo = participants;
        this.status = ChatParticipantStatus.Online;
        // TODO: Add some customization for this in future releases
        this.displayName = participants.map((p) => p.displayName).sort((first, second) => second > first ? -1 : 1).join(", ");
    }
}

var ScrollDirection;
(function (ScrollDirection) {
    ScrollDirection[ScrollDirection["Top"] = 0] = "Top";
    ScrollDirection[ScrollDirection["Bottom"] = 1] = "Bottom";
})(ScrollDirection || (ScrollDirection = {}));

class DefaultFileUploadAdapter {
    /**
     * @summary Basic file upload adapter implementation for HTTP request form file consumption
     * @param _serverEndpointUrl The API endpoint full qualified address that will receive a form file to process and return the metadata.
     */
    constructor(_serverEndpointUrl, _http) {
        this._serverEndpointUrl = _serverEndpointUrl;
        this._http = _http;
    }
    uploadFile(file, participantId) {
        const formData = new FormData();
        //formData.append('ng-chat-sender-userid', currentUserId);
        formData.append('ng-chat-participant-id', participantId);
        formData.append('file', file, file.name);
        return this._http.post(this._serverEndpointUrl, formData);
        // TODO: Leaving this if we want to track upload progress in detail in the future. Might need a different Subject generic type wrapper
        // const fileRequest = new HttpRequest('POST', this._serverEndpointUrl, formData, {
        //     reportProgress: true
        // });
        // const uploadProgress = new Subject<number>();
        // const uploadStatus = uploadProgress.asObservable();
        //const responsePromise = new Subject<Message>();
        // this._http
        //     .request(fileRequest)
        //     .subscribe(event => {
        //         // if (event.type == HttpEventType.UploadProgress)
        //         // {
        //         //     const percentDone = Math.round(100 * event.loaded / event.total);
        //         //     uploadProgress.next(percentDone);
        //         // }
        //         // else if (event instanceof HttpResponse)
        //         // {
        //         //     uploadProgress.complete();
        //         // }
        //     });
    }
}

class NgChat {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        // Exposes enums for the ng-template
        this.ChatParticipantType = ChatParticipantType;
        this.ChatParticipantStatus = ChatParticipantStatus;
        this.MessageType = MessageType;
        this._isDisabled = false;
        this.isCollapsed = false;
        this.maximizeWindowOnNewMessage = true;
        this.pollFriendsList = false;
        this.pollingInterval = 5000;
        this.historyEnabled = true;
        this.emojisEnabled = true;
        this.linkfyEnabled = true;
        this.audioEnabled = true;
        this.searchEnabled = true;
        this.audioSource = 'https://raw.githubusercontent.com/rpaschoal/ng-chat/master/src/ng-chat/assets/notification.wav';
        this.persistWindowsState = true;
        this.title = "Friends";
        this.messagePlaceholder = "Type a message";
        this.searchPlaceholder = "Search";
        this.browserNotificationsEnabled = true;
        this.browserNotificationIconSource = 'https://raw.githubusercontent.com/rpaschoal/ng-chat/master/src/ng-chat/assets/notification.png';
        this.browserNotificationTitle = "New message from";
        this.historyPageSize = 10;
        this.hideFriendsList = false;
        this.hideFriendsListOnUnsupportedViewport = true;
        this.theme = Theme.Light;
        this.messageDatePipeFormat = "short";
        this.showMessageDate = true;
        this.isViewportOnMobileEnabled = false;
        this.onParticipantClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onParticipantChatOpened = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onParticipantChatClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onMessagesSeen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.browserNotificationsBootstrapped = false;
        this.hasPagedHistory = false;
        // Don't want to add this as a setting to simplify usage. Previous placeholder and title settings available to be used, or use full Localization object.
        this.statusDescription = {
            online: 'Online',
            busy: 'Busy',
            away: 'Away',
            offline: 'Offline'
        };
        this.participantsInteractedWith = [];
        // Defines the size of each opened window to calculate how many windows can be opened on the viewport at the same time.
        this.windowSizeFactor = 320;
        // Total width size of the friends list section
        this.friendsListWidth = 262;
        // Set to true if there is no space to display at least one chat window and 'hideFriendsListOnUnsupportedViewport' is true
        this.unsupportedViewport = false;
        this.windows = [];
        this.isBootstrapped = false;
    }
    get isDisabled() {
        return this._isDisabled;
    }
    set isDisabled(value) {
        this._isDisabled = value;
        if (value) {
            // To address issue https://github.com/rpaschoal/ng-chat/issues/120
            window.clearInterval(this.pollingIntervalWindowInstance);
        }
        else {
            this.activateFriendListFetch();
        }
    }
    get localStorageKey() {
        return `ng-chat-users-${this.userId}`; // Appending the user id so the state is unique per user in a computer.
    }
    ;
    ngOnInit() {
        this.bootstrapChat();
    }
    onResize(event) {
        this.viewPortTotalArea = event.target.innerWidth;
        this.NormalizeWindows();
    }
    // Checks if there are more opened windows than the view port can display
    NormalizeWindows() {
        const maxSupportedOpenedWindows = Math.floor((this.viewPortTotalArea - (!this.hideFriendsList ? this.friendsListWidth : 0)) / this.windowSizeFactor);
        const difference = this.windows.length - maxSupportedOpenedWindows;
        if (difference >= 0) {
            this.windows.splice(this.windows.length - difference);
        }
        this.updateWindowsState(this.windows);
        // Viewport should have space for at least one chat window but should show in mobile if option is enabled.
        this.unsupportedViewport = this.isViewportOnMobileEnabled ? false : this.hideFriendsListOnUnsupportedViewport && maxSupportedOpenedWindows < 1;
    }
    // Initializes the chat plugin and the messaging adapter
    bootstrapChat() {
        let initializationException = null;
        if (this.adapter != null && this.userId != null) {
            try {
                this.viewPortTotalArea = window.innerWidth;
                this.initializeTheme();
                this.initializeDefaultText();
                this.initializeBrowserNotifications();
                // Binding event listeners
                this.adapter.messageReceivedHandler = (participant, msg) => this.onMessageReceived(participant, msg);
                this.adapter.friendsListChangedHandler = (participantsResponse) => this.onFriendsListChanged(participantsResponse);
                this.activateFriendListFetch();
                this.bufferAudioFile();
                this.hasPagedHistory = this.adapter instanceof PagedHistoryChatAdapter;
                if (this.fileUploadUrl && this.fileUploadUrl !== "") {
                    this.fileUploadAdapter = new DefaultFileUploadAdapter(this.fileUploadUrl, this._httpClient);
                }
                this.NormalizeWindows();
                this.isBootstrapped = true;
            }
            catch (ex) {
                initializationException = ex;
            }
        }
        if (!this.isBootstrapped) {
            console.error("ng-chat component couldn't be bootstrapped.");
            if (this.userId == null) {
                console.error("ng-chat can't be initialized without an user id. Please make sure you've provided an userId as a parameter of the ng-chat component.");
            }
            if (this.adapter == null) {
                console.error("ng-chat can't be bootstrapped without a ChatAdapter. Please make sure you've provided a ChatAdapter implementation as a parameter of the ng-chat component.");
            }
            if (initializationException) {
                console.error(`An exception has occurred while initializing ng-chat. Details: ${initializationException.message}`);
                console.error(initializationException);
            }
        }
    }
    activateFriendListFetch() {
        if (this.adapter) {
            // Loading current users list
            if (this.pollFriendsList) {
                // Setting a long poll interval to update the friends list
                this.fetchFriendsList(true);
                this.pollingIntervalWindowInstance = window.setInterval(() => this.fetchFriendsList(false), this.pollingInterval);
            }
            else {
                // Since polling was disabled, a friends list update mechanism will have to be implemented in the ChatAdapter.
                this.fetchFriendsList(true);
            }
        }
    }
    // Initializes browser notifications
    initializeBrowserNotifications() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.browserNotificationsEnabled && ("Notification" in window)) {
                if ((yield Notification.requestPermission()) === "granted") {
                    this.browserNotificationsBootstrapped = true;
                }
            }
        });
    }
    // Initializes default text
    initializeDefaultText() {
        if (!this.localization) {
            this.localization = {
                messagePlaceholder: this.messagePlaceholder,
                searchPlaceholder: this.searchPlaceholder,
                title: this.title,
                statusDescription: this.statusDescription,
                browserNotificationTitle: this.browserNotificationTitle,
                loadMessageHistoryPlaceholder: "Load older messages"
            };
        }
    }
    initializeTheme() {
        if (this.customTheme) {
            this.theme = Theme.Custom;
        }
        else if (this.theme != Theme.Light && this.theme != Theme.Dark) {
            // TODO: Use es2017 in future with Object.values(Theme).includes(this.theme) to do this check
            throw new Error(`Invalid theme configuration for ng-chat. "${this.theme}" is not a valid theme value.`);
        }
    }
    // Sends a request to load the friends list
    fetchFriendsList(isBootstrapping) {
        this.adapter.listFriends()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((participantsResponse) => {
            this.participantsResponse = participantsResponse;
            this.participants = participantsResponse.map((response) => {
                return response.participant;
            });
        })).subscribe(() => {
            if (isBootstrapping) {
                this.restoreWindowsState();
            }
        });
    }
    fetchMessageHistory(window) {
        // Not ideal but will keep this until we decide if we are shipping pagination with the default adapter
        if (this.adapter instanceof PagedHistoryChatAdapter) {
            window.isLoadingHistory = true;
            this.adapter.getMessageHistoryByPage(window.participant.id, this.historyPageSize, ++window.historyPage)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((result) => {
                result.forEach((message) => this.assertMessageType(message));
                window.messages = result.concat(window.messages);
                window.isLoadingHistory = false;
                const direction = (window.historyPage == 1) ? ScrollDirection.Bottom : ScrollDirection.Top;
                window.hasMoreMessages = result.length == this.historyPageSize;
                setTimeout(() => this.onFetchMessageHistoryLoaded(result, window, direction, true));
            })).subscribe();
        }
        else {
            this.adapter.getMessageHistory(window.participant.id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((result) => {
                result.forEach((message) => this.assertMessageType(message));
                window.messages = result.concat(window.messages);
                window.isLoadingHistory = false;
                setTimeout(() => this.onFetchMessageHistoryLoaded(result, window, ScrollDirection.Bottom));
            })).subscribe();
        }
    }
    onFetchMessageHistoryLoaded(messages, window, direction, forceMarkMessagesAsSeen = false) {
        this.scrollChatWindow(window, direction);
        if (window.hasFocus || forceMarkMessagesAsSeen) {
            const unseenMessages = messages.filter(m => !m.dateSeen);
            this.markMessagesAsRead(unseenMessages);
        }
    }
    // Updates the friends list via the event handler
    onFriendsListChanged(participantsResponse) {
        if (participantsResponse) {
            this.participantsResponse = participantsResponse;
            this.participants = participantsResponse.map((response) => {
                return response.participant;
            });
            this.participantsInteractedWith = [];
        }
    }
    // Handles received messages by the adapter
    onMessageReceived(participant, message) {
        if (participant && message) {
            const chatWindow = this.openChatWindow(participant);
            this.assertMessageType(message);
            if (!chatWindow[1] || !this.historyEnabled) {
                chatWindow[0].messages.push(message);
                this.scrollChatWindow(chatWindow[0], ScrollDirection.Bottom);
                if (chatWindow[0].hasFocus) {
                    this.markMessagesAsRead([message]);
                }
            }
            this.emitMessageSound(chatWindow[0]);
            // Github issue #58
            // Do not push browser notifications with message content for privacy purposes if the 'maximizeWindowOnNewMessage' setting is off and this is a new chat window.
            if (this.maximizeWindowOnNewMessage || (!chatWindow[1] && !chatWindow[0].isCollapsed)) {
                // Some messages are not pushed because they are loaded by fetching the history hence why we supply the message here
                this.emitBrowserNotification(chatWindow[0], message);
            }
        }
    }
    onParticipantClickedFromFriendsList(participant) {
        this.openChatWindow(participant, true, true);
    }
    cancelOptionPrompt() {
        if (this.currentActiveOption) {
            this.currentActiveOption.isActive = false;
            this.currentActiveOption = null;
        }
    }
    onOptionPromptCanceled() {
        this.cancelOptionPrompt();
    }
    onOptionPromptConfirmed(event) {
        // For now this is fine as there is only one option available. Introduce option types and type checking if a new option is added.
        this.confirmNewGroup(event);
        // Canceling current state
        this.cancelOptionPrompt();
    }
    confirmNewGroup(users) {
        const newGroup = new Group(users);
        this.openChatWindow(newGroup);
        if (this.groupAdapter) {
            this.groupAdapter.groupCreated(newGroup);
        }
    }
    // Opens a new chat whindow. Takes care of available viewport
    // Works for opening a chat window for an user or for a group
    // Returns => [Window: Window object reference, boolean: Indicates if this window is a new chat window]
    openChatWindow(participant, focusOnNewWindow = false, invokedByUserClick = false) {
        // Is this window opened?
        const openedWindow = this.windows.find(x => x.participant.id == participant.id);
        if (!openedWindow) {
            if (invokedByUserClick) {
                this.onParticipantClicked.emit(participant);
            }
            // Refer to issue #58 on Github
            const collapseWindow = invokedByUserClick ? false : !this.maximizeWindowOnNewMessage;
            const newChatWindow = new Window(participant, this.historyEnabled, collapseWindow);
            // Loads the chat history via an RxJs Observable
            if (this.historyEnabled) {
                this.fetchMessageHistory(newChatWindow);
            }
            this.windows.unshift(newChatWindow);
            // Is there enough space left in the view port ? but should be displayed in mobile if option is enabled
            if (!this.isViewportOnMobileEnabled) {
                if (this.windows.length * this.windowSizeFactor >= this.viewPortTotalArea - (!this.hideFriendsList ? this.friendsListWidth : 0)) {
                    this.windows.pop();
                }
            }
            this.updateWindowsState(this.windows);
            if (focusOnNewWindow && !collapseWindow) {
                this.focusOnWindow(newChatWindow);
            }
            this.participantsInteractedWith.push(participant);
            this.onParticipantChatOpened.emit(participant);
            return [newChatWindow, true];
        }
        else {
            // Returns the existing chat window
            return [openedWindow, false];
        }
    }
    // Focus on the input element of the supplied window
    focusOnWindow(window, callback = () => { }) {
        const windowIndex = this.windows.indexOf(window);
        if (windowIndex >= 0) {
            setTimeout(() => {
                if (this.chatWindows) {
                    const chatWindowToFocus = this.chatWindows.toArray()[windowIndex];
                    chatWindowToFocus.chatWindowInput.nativeElement.focus();
                }
                callback();
            });
        }
    }
    assertMessageType(message) {
        // Always fallback to "Text" messages to avoid rendenring issues
        if (!message.type) {
            message.type = MessageType.Text;
        }
    }
    // Marks all messages provided as read with the current time.
    markMessagesAsRead(messages) {
        const currentDate = new Date();
        messages.forEach((msg) => {
            msg.dateSeen = currentDate;
        });
        this.onMessagesSeen.emit(messages);
    }
    // Buffers audio file (For component's bootstrapping)
    bufferAudioFile() {
        if (this.audioSource && this.audioSource.length > 0) {
            this.audioFile = new Audio();
            this.audioFile.src = this.audioSource;
            this.audioFile.load();
        }
    }
    // Emits a message notification audio if enabled after every message received
    emitMessageSound(window) {
        if (this.audioEnabled && !window.hasFocus && this.audioFile) {
            this.audioFile.play();
        }
    }
    // Emits a browser notification
    emitBrowserNotification(window, message) {
        if (this.browserNotificationsBootstrapped && !window.hasFocus && message) {
            const notification = new Notification(`${this.localization.browserNotificationTitle} ${window.participant.displayName}`, {
                'body': message.message,
                'icon': this.browserNotificationIconSource
            });
            setTimeout(() => {
                notification.close();
            }, message.message.length <= 50 ? 5000 : 7000); // More time to read longer messages
        }
    }
    // Saves current windows state into local storage if persistence is enabled
    updateWindowsState(windows) {
        if (this.persistWindowsState) {
            const participantIds = windows.map((w) => {
                return w.participant.id;
            });
            localStorage.setItem(this.localStorageKey, JSON.stringify(participantIds));
        }
    }
    restoreWindowsState() {
        try {
            if (this.persistWindowsState) {
                const stringfiedParticipantIds = localStorage.getItem(this.localStorageKey);
                if (stringfiedParticipantIds && stringfiedParticipantIds.length > 0) {
                    const participantIds = JSON.parse(stringfiedParticipantIds);
                    const participantsToRestore = this.participants.filter(u => participantIds.indexOf(u.id) >= 0);
                    participantsToRestore.forEach((participant) => {
                        this.openChatWindow(participant);
                    });
                }
            }
        }
        catch (ex) {
            console.error(`An error occurred while restoring ng-chat windows state. Details: ${ex}`);
        }
    }
    // Gets closest open window if any. Most recent opened has priority (Right)
    getClosestWindow(window) {
        const index = this.windows.indexOf(window);
        if (index > 0) {
            return this.windows[index - 1];
        }
        else if (index == 0 && this.windows.length > 1) {
            return this.windows[index + 1];
        }
    }
    closeWindow(window) {
        const index = this.windows.indexOf(window);
        this.windows.splice(index, 1);
        this.updateWindowsState(this.windows);
        this.onParticipantChatClosed.emit(window.participant);
    }
    getChatWindowComponentInstance(targetWindow) {
        const windowIndex = this.windows.indexOf(targetWindow);
        if (this.chatWindows) {
            let targetWindow = this.chatWindows.toArray()[windowIndex];
            return targetWindow;
        }
        return null;
    }
    // Scrolls a chat window message flow to the bottom
    scrollChatWindow(window, direction) {
        const chatWindow = this.getChatWindowComponentInstance(window);
        if (chatWindow) {
            chatWindow.scrollChatWindow(window, direction);
        }
    }
    onWindowMessagesSeen(messagesSeen) {
        this.markMessagesAsRead(messagesSeen);
    }
    onWindowChatClosed(payload) {
        const { closedWindow, closedViaEscapeKey } = payload;
        if (closedViaEscapeKey) {
            let closestWindow = this.getClosestWindow(closedWindow);
            if (closestWindow) {
                this.focusOnWindow(closestWindow, () => { this.closeWindow(closedWindow); });
            }
            else {
                this.closeWindow(closedWindow);
            }
        }
        else {
            this.closeWindow(closedWindow);
        }
    }
    onWindowTabTriggered(payload) {
        const { triggeringWindow, shiftKeyPressed } = payload;
        const currentWindowIndex = this.windows.indexOf(triggeringWindow);
        let windowToFocus = this.windows[currentWindowIndex + (shiftKeyPressed ? 1 : -1)]; // Goes back on shift + tab
        if (!windowToFocus) {
            // Edge windows, go to start or end
            windowToFocus = this.windows[currentWindowIndex > 0 ? 0 : this.chatWindows.length - 1];
        }
        this.focusOnWindow(windowToFocus);
    }
    onWindowMessageSent(messageSent) {
        this.adapter.sendMessage(messageSent);
    }
    onWindowOptionTriggered(option) {
        this.currentActiveOption = option;
    }
    triggerOpenChatWindow(user) {
        if (user) {
            this.openChatWindow(user);
        }
    }
    triggerCloseChatWindow(userId) {
        const openedWindow = this.windows.find(x => x.participant.id == userId);
        if (openedWindow) {
            this.closeWindow(openedWindow);
        }
    }
    triggerToggleChatWindowVisibility(userId) {
        const openedWindow = this.windows.find(x => x.participant.id == userId);
        if (openedWindow) {
            const chatWindow = this.getChatWindowComponentInstance(openedWindow);
            if (chatWindow) {
                chatWindow.onChatWindowClicked(openedWindow);
            }
        }
    }
}
NgChat.ɵfac = function NgChat_Factory(t) { return new (t || NgChat)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
NgChat.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NgChat, selectors: [["ng-chat"]], viewQuery: function NgChat_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.chatWindows = _t);
    } }, hostBindings: function NgChat_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function NgChat_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, inputs: { isCollapsed: "isCollapsed", maximizeWindowOnNewMessage: "maximizeWindowOnNewMessage", pollFriendsList: "pollFriendsList", pollingInterval: "pollingInterval", historyEnabled: "historyEnabled", emojisEnabled: "emojisEnabled", linkfyEnabled: "linkfyEnabled", audioEnabled: "audioEnabled", searchEnabled: "searchEnabled", audioSource: "audioSource", persistWindowsState: "persistWindowsState", title: "title", messagePlaceholder: "messagePlaceholder", searchPlaceholder: "searchPlaceholder", browserNotificationsEnabled: "browserNotificationsEnabled", browserNotificationIconSource: "browserNotificationIconSource", browserNotificationTitle: "browserNotificationTitle", historyPageSize: "historyPageSize", hideFriendsList: "hideFriendsList", hideFriendsListOnUnsupportedViewport: "hideFriendsListOnUnsupportedViewport", theme: "theme", messageDatePipeFormat: "messageDatePipeFormat", showMessageDate: "showMessageDate", isViewportOnMobileEnabled: "isViewportOnMobileEnabled", isDisabled: "isDisabled", fileUploadAdapter: "fileUploadAdapter", localization: "localization", adapter: "adapter", groupAdapter: "groupAdapter", userId: "userId", fileUploadUrl: "fileUploadUrl", customTheme: "customTheme" }, outputs: { onParticipantClicked: "onParticipantClicked", onParticipantChatOpened: "onParticipantChatOpened", onParticipantChatClosed: "onParticipantChatClosed", onMessagesSeen: "onMessagesSeen" }, decls: 2, vars: 2, consts: [["rel", "stylesheet", 3, "href", 4, "ngIf"], ["id", "ng-chat", 3, "ngClass", 4, "ngIf"], ["rel", "stylesheet", 3, "href"], ["id", "ng-chat", 3, "ngClass"], [3, "localization", "shouldDisplay", "userId", "isCollapsed", "searchEnabled", "participants", "participantsResponse", "participantsInteractedWith", "windows", "currentActiveOption", "onParticipantClicked", "onOptionPromptCanceled", "onOptionPromptConfirmed"], [3, "ngClass", "ngStyle", 4, "ngFor", "ngForOf"], [3, "ngClass", "ngStyle"], [3, "fileUploadAdapter", "localization", "userId", "window", "showOptions", "emojisEnabled", "linkfyEnabled", "showMessageDate", "messageDatePipeFormat", "hasPagedHistory", "onMessagesSeen", "onMessageSent", "onTabTriggered", "onChatWindowClosed", "onOptionTriggered", "onLoadHistoryTriggered"], ["chatWindow", ""]], template: function NgChat_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NgChat_link_0_Template, 2, 3, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NgChat_div_1_Template, 3, 12, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.customTheme);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isDisabled && ctx.isBootstrapped && !ctx.unsupportedViewport);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"], NgChatFriendsListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgStyle"], NgChatWindowComponent]; }, pipes: function () { return [SanitizePipe]; }, styles: [".user-icon{box-sizing:border-box;background-color:#fff;border:2px solid;width:32px;height:20px;border-radius:64px 64px 0 0/64px;margin-top:14px;margin-left:-1px;display:inline-block;vertical-align:middle;position:relative;font-style:normal;color:#ddd;text-align:left;text-indent:-9999px}.user-icon:before{border:2px solid;background-color:#fff;width:12px;height:12px;top:-19px;border-radius:50%;position:absolute;left:50%;transform:translateX(-50%)}.user-icon:after,.user-icon:before{content:\"\";pointer-events:none}.upload-icon{position:absolute;margin-left:3px;margin-top:12px;width:13px;height:4px;border:1px solid;border-top:none;border-radius:1px}.upload-icon:before{content:\"\";position:absolute;top:-8px;left:6px;width:1px;height:9px;background-color:currentColor}.upload-icon:after{content:\"\";top:-8px;left:4px;width:4px;height:4px;transform:rotate(-45deg)}.paperclip-icon,.upload-icon:after{position:absolute;border-top:1px solid;border-right:1px solid}.paperclip-icon{margin-left:9px;margin-top:2px;width:6px;height:12px;border-radius:4px 4px 0 0;border-left:1px solid;transform:rotate(45deg)}.paperclip-icon:before{top:11px;left:-1px;width:4px;height:6px;border-radius:0 0 3px 3px;border-bottom:1px solid}.paperclip-icon:after,.paperclip-icon:before{content:\"\";position:absolute;border-left:1px solid;border-right:1px solid}.paperclip-icon:after{left:1px;top:1px;width:2px;height:10px;border-radius:4px 4px 0 0;border-top:1px solid}.check-icon{margin-top:4px;width:14px;height:8px;border-bottom:1px solid;border-left:1px solid;transform:rotate(-45deg)}.check-icon,.remove-icon{color:#000;position:absolute;margin-left:3px}.remove-icon{margin-top:10px}.remove-icon:before{transform:rotate(45deg)}.remove-icon:after,.remove-icon:before{content:\"\";position:absolute;width:15px;height:1px;background-color:currentColor}.remove-icon:after{transform:rotate(-45deg)}", ".loader,.loader:after,.loader:before{background:#e3e3e3;-webkit-animation:load1 1s ease-in-out infinite;animation:load1 1s ease-in-out infinite;width:1em;height:4em}.loader{color:#e3e3e3;text-indent:-9999em;margin:4px auto 0;position:relative;font-size:4px;transform:translateZ(0);-webkit-animation-delay:-.16s;animation-delay:-.16s}.loader:after,.loader:before{position:absolute;top:0;content:\"\"}.loader:before{left:-1.5em;-webkit-animation-delay:-.32s;animation-delay:-.32s}.loader:after{left:1.5em}@-webkit-keyframes load1{0%,80%,to{box-shadow:0 0;height:4em}40%{box-shadow:0 -2em;height:5em}}@keyframes load1{0%,80%,to{box-shadow:0 0;height:4em}40%{box-shadow:0 -2em;height:5em}}", "#ng-chat{position:fixed;z-index:999;right:0;bottom:0;box-sizing:content-box;box-sizing:initial;font-size:11pt;text-align:left}#ng-chat input{outline:none}#ng-chat .shadowed{box-shadow:0 4px 8px rgba(0,0,0,.25)}.ng-chat-loading-wrapper{height:30px;text-align:center;font-size:.9em}.ng-chat-close{text-decoration:none;float:right}.ng-chat-title,.ng-chat-title:hover{position:relative;z-index:2;height:30px;line-height:30px;font-size:.9em;padding:0 10px;display:block;text-decoration:none;color:inherit;font-weight:400;cursor:pointer}.ng-chat-title .ng-chat-title-visibility-toggle-area{display:inline-block;width:85%}.ng-chat-title .ng-chat-title-visibility-toggle-area>strong{font-weight:600;display:block;overflow:hidden;height:30px;text-overflow:ellipsis;white-space:nowrap;max-width:85%;float:left}.ng-chat-title .ng-chat-title-visibility-toggle-area .ng-chat-participant-status{float:left;margin-left:5px}.ng-chat-participant-status{display:inline-block;border-radius:25px;width:8px;height:8px;margin-top:10px}.ng-chat-participant-status.online{background-color:#92a400}.ng-chat-participant-status.busy{background-color:#f91c1e}.ng-chat-participant-status.away{background-color:#f7d21b}.ng-chat-participant-status.offline{background-color:#bababa}.ng-chat-unread-messages-count{margin-left:5px;padding:0 5px;border-radius:25px;font-size:.9em;line-height:30px}.ng-chat-options-container{float:right;margin-right:5px}", "#ng-chat.light-theme,#ng-chat.light-theme .primary-text{color:#5c5c5c;font-family:Arial,Helvetica,sans-serif}#ng-chat.light-theme .primary-background{background-color:#fff}#ng-chat.light-theme .secondary-background{background-color:#fafafa}#ng-chat.light-theme .primary-outline-color{border-color:#a3a3a3}#ng-chat.light-theme .friends-search-bar{background-color:#fff}#ng-chat.light-theme .ng-chat-people-action,#ng-chat.light-theme .ng-chat-people-action>i,#ng-chat.light-theme .unread-messages-counter-container{color:#5c5c5c;background-color:#e3e3e3}#ng-chat.light-theme .load-history-action{background-color:#e3e3e3}#ng-chat.light-theme .chat-window-input{background-color:#fff}#ng-chat.light-theme .file-message-container,#ng-chat.light-theme .sent-chat-message-container{background-color:#e3e3e3;border-color:#e3e3e3}#ng-chat.light-theme .file-message-container.received,#ng-chat.light-theme .received-chat-message-container{background-color:#fff;border-color:#e3e3e3}", "#ng-chat.dark-theme,#ng-chat.dark-theme .primary-text{color:#fff;font-family:Arial,Helvetica,sans-serif}#ng-chat.dark-theme .primary-background{background-color:#565656}#ng-chat.dark-theme .secondary-background{background-color:#444}#ng-chat.dark-theme .primary-outline-color{border-color:#353535}#ng-chat.dark-theme .friends-search-bar{background-color:#444;border:1px solid #444;color:#fff}#ng-chat.dark-theme .ng-chat-people-action,#ng-chat.dark-theme .ng-chat-people-action>i,#ng-chat.dark-theme .unread-messages-counter-container{background-color:#fff;color:#444}#ng-chat.dark-theme .load-history-action{background-color:#444}#ng-chat.dark-theme .chat-window-input{background-color:#444;color:#fff}#ng-chat.dark-theme .file-message-container,#ng-chat.dark-theme .sent-chat-message-container{border-color:#444;background-color:#444}#ng-chat.dark-theme .file-message-container.received,#ng-chat.dark-theme .received-chat-message-container{background-color:#565656;border-color:#444}#ng-chat.dark-theme .ng-chat-footer{background-color:#444}#ng-chat.dark-theme .ng-chat-message a{color:#fff}"], encapsulation: 2 });
NgChat.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
NgChat.propDecorators = {
    isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    adapter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    groupAdapter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    userId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    isCollapsed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    maximizeWindowOnNewMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    pollFriendsList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    pollingInterval: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    historyEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    emojisEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    linkfyEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    audioEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    searchEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    audioSource: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    persistWindowsState: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    messagePlaceholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    searchPlaceholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    browserNotificationsEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    browserNotificationIconSource: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    browserNotificationTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    historyPageSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    localization: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    hideFriendsList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    hideFriendsListOnUnsupportedViewport: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    fileUploadUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    theme: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    customTheme: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    messageDatePipeFormat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    showMessageDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    isViewportOnMobileEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    fileUploadAdapter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    onParticipantClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    onParticipantChatOpened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    onParticipantChatClosed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    onMessagesSeen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    chatWindows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"], args: ['chatWindow',] }],
    onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['window:resize', ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgChat, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ng-chat',
                template: "<link *ngIf=\"customTheme\" rel=\"stylesheet\" [href]='customTheme | sanitize'>\r\n\r\n<div id=\"ng-chat\" *ngIf=\"!isDisabled && isBootstrapped && !unsupportedViewport\" [ngClass]=\"theme\">\r\n    <ng-chat-friends-list\r\n        [localization]=\"localization\"\r\n        [shouldDisplay]=\"!hideFriendsList\"\r\n        [userId]=\"userId\"\r\n        [isCollapsed]=\"isCollapsed\"\r\n        [searchEnabled]=\"searchEnabled\"\r\n        [participants]=\"participants\"\r\n        [participantsResponse]=\"participantsResponse\"\r\n        [participantsInteractedWith]=\"participantsInteractedWith\"\r\n        [windows]=\"windows\"\r\n        [currentActiveOption]=\"currentActiveOption\"\r\n        (onParticipantClicked)=\"onParticipantClickedFromFriendsList($event)\"\r\n        (onOptionPromptCanceled)=\"onOptionPromptCanceled()\"\r\n        (onOptionPromptConfirmed)=\"onOptionPromptConfirmed($event)\"\r\n    >\r\n    </ng-chat-friends-list>\r\n\r\n    <div *ngFor=\"let window of windows; let i = index\" [ngClass]=\"{'ng-chat-window': true, 'primary-outline-color': true, 'ng-chat-window-collapsed': window.isCollapsed}\" [ngStyle]=\"{'right': (!hideFriendsList ? friendsListWidth : 0) + 20 + windowSizeFactor * i + 'px'}\">\r\n        <ng-chat-window\r\n            #chatWindow\r\n            [fileUploadAdapter]=\"fileUploadAdapter\"\r\n            [localization]=\"localization\"\r\n            [userId]=\"userId\"\r\n            [window]=\"window\"\r\n            [showOptions]=\"groupAdapter\"\r\n            [emojisEnabled]=\"emojisEnabled\"\r\n            [linkfyEnabled]=\"linkfyEnabled\"\r\n            [showMessageDate]=\"showMessageDate\"\r\n            [messageDatePipeFormat]=\"messageDatePipeFormat\"\r\n            [hasPagedHistory]=\"hasPagedHistory\"\r\n            (onMessagesSeen)=\"onWindowMessagesSeen($event)\"\r\n            (onMessageSent)=\"onWindowMessageSent($event)\"\r\n            (onTabTriggered)=\"onWindowTabTriggered($event)\"\r\n            (onChatWindowClosed)=\"onWindowChatClosed($event)\"\r\n            (onOptionTriggered)=\"onWindowOptionTriggered($event)\"\r\n            (onLoadHistoryTriggered)=\"fetchMessageHistory($event)\"\r\n        >\r\n        </ng-chat-window>\r\n    </div>\r\n</div>\r\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                styles: [".user-icon{box-sizing:border-box;background-color:#fff;border:2px solid;width:32px;height:20px;border-radius:64px 64px 0 0/64px;margin-top:14px;margin-left:-1px;display:inline-block;vertical-align:middle;position:relative;font-style:normal;color:#ddd;text-align:left;text-indent:-9999px}.user-icon:before{border:2px solid;background-color:#fff;width:12px;height:12px;top:-19px;border-radius:50%;position:absolute;left:50%;transform:translateX(-50%)}.user-icon:after,.user-icon:before{content:\"\";pointer-events:none}.upload-icon{position:absolute;margin-left:3px;margin-top:12px;width:13px;height:4px;border:1px solid;border-top:none;border-radius:1px}.upload-icon:before{content:\"\";position:absolute;top:-8px;left:6px;width:1px;height:9px;background-color:currentColor}.upload-icon:after{content:\"\";top:-8px;left:4px;width:4px;height:4px;transform:rotate(-45deg)}.paperclip-icon,.upload-icon:after{position:absolute;border-top:1px solid;border-right:1px solid}.paperclip-icon{margin-left:9px;margin-top:2px;width:6px;height:12px;border-radius:4px 4px 0 0;border-left:1px solid;transform:rotate(45deg)}.paperclip-icon:before{top:11px;left:-1px;width:4px;height:6px;border-radius:0 0 3px 3px;border-bottom:1px solid}.paperclip-icon:after,.paperclip-icon:before{content:\"\";position:absolute;border-left:1px solid;border-right:1px solid}.paperclip-icon:after{left:1px;top:1px;width:2px;height:10px;border-radius:4px 4px 0 0;border-top:1px solid}.check-icon{margin-top:4px;width:14px;height:8px;border-bottom:1px solid;border-left:1px solid;transform:rotate(-45deg)}.check-icon,.remove-icon{color:#000;position:absolute;margin-left:3px}.remove-icon{margin-top:10px}.remove-icon:before{transform:rotate(45deg)}.remove-icon:after,.remove-icon:before{content:\"\";position:absolute;width:15px;height:1px;background-color:currentColor}.remove-icon:after{transform:rotate(-45deg)}", ".loader,.loader:after,.loader:before{background:#e3e3e3;-webkit-animation:load1 1s ease-in-out infinite;animation:load1 1s ease-in-out infinite;width:1em;height:4em}.loader{color:#e3e3e3;text-indent:-9999em;margin:4px auto 0;position:relative;font-size:4px;transform:translateZ(0);-webkit-animation-delay:-.16s;animation-delay:-.16s}.loader:after,.loader:before{position:absolute;top:0;content:\"\"}.loader:before{left:-1.5em;-webkit-animation-delay:-.32s;animation-delay:-.32s}.loader:after{left:1.5em}@-webkit-keyframes load1{0%,80%,to{box-shadow:0 0;height:4em}40%{box-shadow:0 -2em;height:5em}}@keyframes load1{0%,80%,to{box-shadow:0 0;height:4em}40%{box-shadow:0 -2em;height:5em}}", "#ng-chat{position:fixed;z-index:999;right:0;bottom:0;box-sizing:content-box;box-sizing:initial;font-size:11pt;text-align:left}#ng-chat input{outline:none}#ng-chat .shadowed{box-shadow:0 4px 8px rgba(0,0,0,.25)}.ng-chat-loading-wrapper{height:30px;text-align:center;font-size:.9em}.ng-chat-close{text-decoration:none;float:right}.ng-chat-title,.ng-chat-title:hover{position:relative;z-index:2;height:30px;line-height:30px;font-size:.9em;padding:0 10px;display:block;text-decoration:none;color:inherit;font-weight:400;cursor:pointer}.ng-chat-title .ng-chat-title-visibility-toggle-area{display:inline-block;width:85%}.ng-chat-title .ng-chat-title-visibility-toggle-area>strong{font-weight:600;display:block;overflow:hidden;height:30px;text-overflow:ellipsis;white-space:nowrap;max-width:85%;float:left}.ng-chat-title .ng-chat-title-visibility-toggle-area .ng-chat-participant-status{float:left;margin-left:5px}.ng-chat-participant-status{display:inline-block;border-radius:25px;width:8px;height:8px;margin-top:10px}.ng-chat-participant-status.online{background-color:#92a400}.ng-chat-participant-status.busy{background-color:#f91c1e}.ng-chat-participant-status.away{background-color:#f7d21b}.ng-chat-participant-status.offline{background-color:#bababa}.ng-chat-unread-messages-count{margin-left:5px;padding:0 5px;border-radius:25px;font-size:.9em;line-height:30px}.ng-chat-options-container{float:right;margin-right:5px}", "#ng-chat.light-theme,#ng-chat.light-theme .primary-text{color:#5c5c5c;font-family:Arial,Helvetica,sans-serif}#ng-chat.light-theme .primary-background{background-color:#fff}#ng-chat.light-theme .secondary-background{background-color:#fafafa}#ng-chat.light-theme .primary-outline-color{border-color:#a3a3a3}#ng-chat.light-theme .friends-search-bar{background-color:#fff}#ng-chat.light-theme .ng-chat-people-action,#ng-chat.light-theme .ng-chat-people-action>i,#ng-chat.light-theme .unread-messages-counter-container{color:#5c5c5c;background-color:#e3e3e3}#ng-chat.light-theme .load-history-action{background-color:#e3e3e3}#ng-chat.light-theme .chat-window-input{background-color:#fff}#ng-chat.light-theme .file-message-container,#ng-chat.light-theme .sent-chat-message-container{background-color:#e3e3e3;border-color:#e3e3e3}#ng-chat.light-theme .file-message-container.received,#ng-chat.light-theme .received-chat-message-container{background-color:#fff;border-color:#e3e3e3}", "#ng-chat.dark-theme,#ng-chat.dark-theme .primary-text{color:#fff;font-family:Arial,Helvetica,sans-serif}#ng-chat.dark-theme .primary-background{background-color:#565656}#ng-chat.dark-theme .secondary-background{background-color:#444}#ng-chat.dark-theme .primary-outline-color{border-color:#353535}#ng-chat.dark-theme .friends-search-bar{background-color:#444;border:1px solid #444;color:#fff}#ng-chat.dark-theme .ng-chat-people-action,#ng-chat.dark-theme .ng-chat-people-action>i,#ng-chat.dark-theme .unread-messages-counter-container{background-color:#fff;color:#444}#ng-chat.dark-theme .load-history-action{background-color:#444}#ng-chat.dark-theme .chat-window-input{background-color:#444;color:#fff}#ng-chat.dark-theme .file-message-container,#ng-chat.dark-theme .sent-chat-message-container{border-color:#444;background-color:#444}#ng-chat.dark-theme .file-message-container.received,#ng-chat.dark-theme .received-chat-message-container{background-color:#565656;border-color:#444}#ng-chat.dark-theme .ng-chat-footer{background-color:#444}#ng-chat.dark-theme .ng-chat-message a{color:#fff}"]
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, { isCollapsed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], maximizeWindowOnNewMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], pollFriendsList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], pollingInterval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], historyEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], emojisEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], linkfyEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], audioEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], searchEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], audioSource: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], persistWindowsState: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], messagePlaceholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], searchPlaceholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], browserNotificationsEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], browserNotificationIconSource: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], browserNotificationTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], historyPageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], hideFriendsList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], hideFriendsListOnUnsupportedViewport: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], theme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], messageDatePipeFormat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showMessageDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], isViewportOnMobileEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], onParticipantClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onParticipantChatOpened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onParticipantChatClosed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onMessagesSeen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], isDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:resize', ['$event']]
        }], fileUploadAdapter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], localization: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], adapter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], groupAdapter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], userId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], fileUploadUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], customTheme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], chatWindows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"],
            args: ['chatWindow']
        }] }); })();

let emojiDictionary = [
    { patterns: [':)', ':-)', '=)'], unicode: '😃' },
    { patterns: [':D', ':-D', '=D'], unicode: '😀' },
    { patterns: [':(', ':-(', '=('], unicode: '🙁' },
    { patterns: [':|', ':-|', '=|'], unicode: '😐' },
    { patterns: [':*', ':-*', '=*'], unicode: '😙' },
    { patterns: ['T_T', 'T.T'], unicode: '😭' },
    { patterns: [':O', ':-O', '=O', ':o', ':-o', '=o'], unicode: '😮' },
    { patterns: [':P', ':-P', '=P', ':p', ':-p', '=p'], unicode: '😋' },
    { patterns: ['>.<'], unicode: '😣' },
    { patterns: ['@.@'], unicode: '😵' },
    { patterns: ['*.*'], unicode: '😍' },
    { patterns: ['<3'], unicode: '❤️' },
    { patterns: ['^.^'], unicode: '😊' },
    { patterns: [':+1'], unicode: '👍' },
    { patterns: [':-1'], unicode: '👎' }
];
/*
 * Transforms common emoji text to UTF encoded emojis
*/
class EmojifyPipe {
    transform(message, pipeEnabled) {
        if (pipeEnabled && message && message.length > 1) {
            emojiDictionary.forEach(emoji => {
                emoji.patterns.forEach(pattern => {
                    message = message.replace(pattern, emoji.unicode);
                });
            });
        }
        return message;
    }
}
EmojifyPipe.ɵfac = function EmojifyPipe_Factory(t) { return new (t || EmojifyPipe)(); };
EmojifyPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "emojify", type: EmojifyPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EmojifyPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{ name: 'emojify' }]
    }], null, null); })();

/*
 * Transforms text containing URLs or E-mails to valid links/mailtos
*/
class LinkfyPipe {
    transform(message, pipeEnabled) {
        if (pipeEnabled && message && message.length > 1) {
            let replacedText;
            let replacePatternProtocol;
            let replacePatternWWW;
            let replacePatternMailTo;
            // URLs starting with http://, https://, or ftp://
            replacePatternProtocol = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
            replacedText = message.replace(replacePatternProtocol, '<a href="$1" target="_blank">$1</a>');
            // URLs starting with "www." (ignoring // before it).
            replacePatternWWW = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
            replacedText = replacedText.replace(replacePatternWWW, '$1<a href="http://$2" target="_blank">$2</a>');
            // Change email addresses to mailto:: links.
            replacePatternMailTo = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
            replacedText = replacedText.replace(replacePatternMailTo, '<a href="mailto:$1">$1</a>');
            return replacedText;
        }
        else
            return message;
    }
}
LinkfyPipe.ɵfac = function LinkfyPipe_Factory(t) { return new (t || LinkfyPipe)(); };
LinkfyPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "linkfy", type: LinkfyPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LinkfyPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{ name: 'linkfy' }]
    }], null, null); })();

/*
 * Sanitizes an URL resource
*/
class SanitizePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
SanitizePipe.ɵfac = function SanitizePipe_Factory(t) { return new (t || SanitizePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"])); };
SanitizePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "sanitize", type: SanitizePipe, pure: true });
SanitizePipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SanitizePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{ name: 'sanitize' }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] }]; }, null); })();

/*
 * Renders the display name of a participant in a group based on who's sent the message
*/
class GroupMessageDisplayNamePipe {
    transform(participant, message) {
        if (participant && participant.participantType == ChatParticipantType.Group) {
            let group = participant;
            let userIndex = group.chattingTo.findIndex(x => x.id == message.fromId);
            return group.chattingTo[userIndex >= 0 ? userIndex : 0].displayName;
        }
        else
            return "";
    }
}
GroupMessageDisplayNamePipe.ɵfac = function GroupMessageDisplayNamePipe_Factory(t) { return new (t || GroupMessageDisplayNamePipe)(); };
GroupMessageDisplayNamePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "groupMessageDisplayName", type: GroupMessageDisplayNamePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GroupMessageDisplayNamePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{ name: 'groupMessageDisplayName' }]
    }], null, null); })();

class NgChatOptionsComponent {
    constructor() {
        this.activeOptionTrackerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onOptionClicked(option) {
        option.isActive = true;
        if (option.action) {
            option.action(option.chattingTo);
        }
        this.activeOptionTrackerChange.emit(option);
    }
}
NgChatOptionsComponent.ɵfac = function NgChatOptionsComponent_Factory(t) { return new (t || NgChatOptionsComponent)(); };
NgChatOptionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NgChatOptionsComponent, selectors: [["ng-chat-options"]], inputs: { options: "options", activeOptionTracker: "activeOptionTracker" }, outputs: { activeOptionTrackerChange: "activeOptionTrackerChange" }, decls: 1, vars: 1, consts: [["class", "ng-chat-options", 4, "ngIf"], [1, "ng-chat-options"], [1, "ng-chat-options-activator"], [1, "primary-text"], [1, "ng-chat-options-content", "primary-background", "shadowed"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "ngClass", "click"]], template: function NgChatOptionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NgChatOptionsComponent_div_0_Template, 6, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.options && ctx.options.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"]], styles: [".ng-chat-options-activator[_ngcontent-%COMP%]{background-color:unset;color:#fff;line-height:28px;border:none;position:relative}.ng-chat-options-activator[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{position:relative;top:-5px;left:0}.ng-chat-options[_ngcontent-%COMP%]{position:relative;display:inline-block}.ng-chat-options[_ngcontent-%COMP%]:hover   .ng-chat-options-content[_ngcontent-%COMP%]{display:block}.ng-chat-options[_ngcontent-%COMP%]:hover   .ng-chat-options-activator[_ngcontent-%COMP%]{background-color:#ddd}.ng-chat-options-content[_ngcontent-%COMP%]{display:none;position:absolute;min-width:160px;z-index:1}.ng-chat-options-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#ddd}.ng-chat-options-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:6px 16px;text-decoration:none;display:block}@media only screen and (max-width:581px){.ng-chat-options-content[_ngcontent-%COMP%]{right:0}}"] });
NgChatOptionsComponent.ctorParameters = () => [];
NgChatOptionsComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    activeOptionTracker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    activeOptionTrackerChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgChatOptionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ng-chat-options',
                template: "<div *ngIf=\"options && options.length > 0\" class=\"ng-chat-options\">\r\n\t\t<button class=\"ng-chat-options-activator\">\r\n\t\t\t<span class=\"primary-text\">...</span>\r\n\t\t</button>\r\n\t<div class=\"ng-chat-options-content primary-background shadowed\">\r\n\t\t<a *ngFor=\"let option of options; let i = index\" [ngClass]=\"'primary-text'\" (click)=\"onOptionClicked(option)\">\r\n\t\t\t{{option.displayLabel}}\r\n\t\t</a>\r\n\t</div>      \r\n</div>\r\n",
                styles: [".ng-chat-options-activator{background-color:unset;color:#fff;line-height:28px;border:none;position:relative}.ng-chat-options-activator>span{position:relative;top:-5px;left:0}.ng-chat-options{position:relative;display:inline-block}.ng-chat-options:hover .ng-chat-options-content{display:block}.ng-chat-options:hover .ng-chat-options-activator{background-color:#ddd}.ng-chat-options-content{display:none;position:absolute;min-width:160px;z-index:1}.ng-chat-options-content a:hover{background-color:#ddd}.ng-chat-options-content a{padding:6px 16px;text-decoration:none;display:block}@media only screen and (max-width:581px){.ng-chat-options-content{right:0}}"]
            }]
    }], function () { return []; }, { activeOptionTrackerChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], activeOptionTracker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

class MessageCounter {
    static formatUnreadMessagesTotal(totalUnreadMessages) {
        if (totalUnreadMessages > 0) {
            if (totalUnreadMessages > 99)
                return "99+";
            else
                return String(totalUnreadMessages);
        }
        // Empty fallback.
        return "";
    }
    /**
     * Returns a formatted string containing the total unread messages of a chat window.
     * @param window The window instance to count the unread total messages.
     * @param currentUserId The current chat instance user id. In this context it would be the sender.
     */
    static unreadMessagesTotal(window, currentUserId) {
        let totalUnreadMessages = 0;
        if (window) {
            totalUnreadMessages = window.messages.filter(x => x.fromId != currentUserId && !x.dateSeen).length;
        }
        return MessageCounter.formatUnreadMessagesTotal(totalUnreadMessages);
    }
}

function chatParticipantStatusDescriptor(status, localization) {
    const currentStatus = ChatParticipantStatus[status].toString().toLowerCase();
    return localization.statusDescription[currentStatus];
}

class NgChatFriendsListComponent {
    constructor() {
        this.participantsInteractedWith = [];
        this.onParticipantClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onOptionPromptCanceled = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onOptionPromptConfirmed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedUsersFromFriendsList = [];
        this.searchInput = '';
        // Exposes enums and functions for the ng-template
        this.ChatParticipantStatus = ChatParticipantStatus;
        this.chatParticipantStatusDescriptor = chatParticipantStatusDescriptor;
        this.cleanUpUserSelection = () => this.selectedUsersFromFriendsList = [];
    }
    ngOnChanges(changes) {
        if (this.currentActiveOption) {
            const currentOptionTriggeredBy = this.currentActiveOption && this.currentActiveOption.chattingTo.participant.id;
            const isActivatedUserInSelectedList = (this.selectedUsersFromFriendsList.filter(item => item.id == currentOptionTriggeredBy)).length > 0;
            if (!isActivatedUserInSelectedList) {
                this.selectedUsersFromFriendsList = this.selectedUsersFromFriendsList.concat(this.currentActiveOption.chattingTo.participant);
            }
        }
    }
    get filteredParticipants() {
        if (this.searchInput.length > 0) {
            // Searches in the friend list by the inputted search string
            return this.participants.filter(x => x.displayName.toUpperCase().includes(this.searchInput.toUpperCase()));
        }
        return this.participants;
    }
    isUserSelectedFromFriendsList(user) {
        return (this.selectedUsersFromFriendsList.filter(item => item.id == user.id)).length > 0;
    }
    unreadMessagesTotalByParticipant(participant) {
        let openedWindow = this.windows.find(x => x.participant.id == participant.id);
        if (openedWindow) {
            return MessageCounter.unreadMessagesTotal(openedWindow, this.userId);
        }
        else {
            let totalUnreadMessages = this.participantsResponse
                .filter(x => x.participant.id == participant.id && !this.participantsInteractedWith.find(u => u.id == participant.id) && x.metadata && x.metadata.totalUnreadMessages > 0)
                .map((participantResponse) => {
                return participantResponse.metadata.totalUnreadMessages;
            })[0];
            return MessageCounter.formatUnreadMessagesTotal(totalUnreadMessages);
        }
    }
    // Toggle friends list visibility
    onChatTitleClicked() {
        this.isCollapsed = !this.isCollapsed;
    }
    onFriendsListCheckboxChange(selectedUser, isChecked) {
        if (isChecked) {
            this.selectedUsersFromFriendsList.push(selectedUser);
        }
        else {
            this.selectedUsersFromFriendsList.splice(this.selectedUsersFromFriendsList.indexOf(selectedUser), 1);
        }
    }
    onUserClick(clickedUser) {
        this.onParticipantClicked.emit(clickedUser);
    }
    onFriendsListActionCancelClicked() {
        this.onOptionPromptCanceled.emit();
        this.cleanUpUserSelection();
    }
    onFriendsListActionConfirmClicked() {
        this.onOptionPromptConfirmed.emit(this.selectedUsersFromFriendsList);
        this.cleanUpUserSelection();
    }
}
NgChatFriendsListComponent.ɵfac = function NgChatFriendsListComponent_Factory(t) { return new (t || NgChatFriendsListComponent)(); };
NgChatFriendsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NgChatFriendsListComponent, selectors: [["ng-chat-friends-list"]], inputs: { participantsInteractedWith: "participantsInteractedWith", isCollapsed: "isCollapsed", participants: "participants", participantsResponse: "participantsResponse", windows: "windows", userId: "userId", localization: "localization", shouldDisplay: "shouldDisplay", searchEnabled: "searchEnabled", currentActiveOption: "currentActiveOption" }, outputs: { onParticipantClicked: "onParticipantClicked", onOptionPromptCanceled: "onOptionPromptCanceled", onOptionPromptConfirmed: "onOptionPromptConfirmed" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["id", "ng-chat-people", 3, "ngClass", 4, "ngIf"], ["id", "ng-chat-people", 3, "ngClass"], ["href", "javascript:void(0);", 1, "ng-chat-title", "secondary-background", "shadowed", 3, "click"], ["class", "ng-chat-people-actions", 3, "click", 4, "ngIf"], ["id", "ng-chat-search_friend", "class", "friends-search-bar", "type", "search", 3, "placeholder", "ngModel", "ngModelChange", 4, "ngIf"], ["id", "ng-chat-users", 3, "ngClass", 4, "ngIf"], [1, "ng-chat-people-actions", 3, "click"], ["href", "javascript:void(0);", 1, "ng-chat-people-action"], [1, "remove-icon"], ["href", "javascript:void(0);", 1, "ng-chat-people-action", 3, "click"], [1, "check-icon"], ["id", "ng-chat-search_friend", "type", "search", 1, "friends-search-bar", 3, "placeholder", "ngModel", "ngModelChange"], ["id", "ng-chat-users", 3, "ngClass"], [4, "ngFor", "ngForOf"], ["type", "checkbox", "class", "ng-chat-users-checkbox", 3, "checked", "change", 4, "ngIf"], [3, "ngClass", "click"], ["class", "icon-wrapper", 4, "ngIf"], ["alt", "", "class", "avatar", "height", "30", "width", "30", 3, "src", 4, "ngIf"], [3, "title"], [3, "ngClass", "title"], ["class", "ng-chat-unread-messages-count unread-messages-counter-container primary-text", 4, "ngIf"], ["type", "checkbox", 1, "ng-chat-users-checkbox", 3, "checked", "change"], [1, "icon-wrapper"], [1, "user-icon"], ["alt", "", "height", "30", "width", "30", 1, "avatar", 3, "src"], [1, "ng-chat-unread-messages-count", "unread-messages-counter-container", "primary-text"]], template: function NgChatFriendsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NgChatFriendsListComponent_div_0_Template, 7, 7, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.shouldDisplay);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"]], pipes: [SanitizePipe], styles: ["#ng-chat-people{position:relative;width:240px;height:360px;border-width:1px;border-style:solid;margin-right:20px;box-shadow:0 4px 8px rgba(0,0,0,.25);border-bottom:0}#ng-chat-people.ng-chat-people-collapsed{height:30px}#ng-chat-search_friend{display:block;padding:7px 10px;width:calc(100% - 20px);margin:10px auto 0;font-size:.9em;-webkit-appearance:searchfield}#ng-chat-users{padding:0 10px;list-style:none;margin:0;overflow:auto;position:absolute;top:42px;bottom:0;width:100%;box-sizing:border-box}#ng-chat-users.offset-search{top:84px}#ng-chat-users .ng-chat-users-checkbox{float:left;margin-right:5px;margin-top:8px}#ng-chat-users li{clear:both;margin-bottom:10px;overflow:hidden;cursor:pointer;max-height:30px}#ng-chat-users li>.ng-chat-friends-list-selectable-offset{margin-left:22px}#ng-chat-users li .ng-chat-friends-list-container{display:inline-block;width:100%}#ng-chat-users li>.ng-chat-friends-list-selectable-offset.ng-chat-friends-list-container{display:block;width:auto}#ng-chat-users li .ng-chat-friends-list-container>.icon-wrapper,#ng-chat-users li .ng-chat-friends-list-container>img.avatar{float:left;margin-right:5px;border-radius:25px}#ng-chat-users li .ng-chat-friends-list-container>.icon-wrapper{background-color:#bababa;overflow:hidden;width:30px;height:30px}#ng-chat-users li .ng-chat-friends-list-container>.icon-wrapper>i{color:#fff;transform:scale(.7)}#ng-chat-users li .ng-chat-friends-list-container>strong{float:left;line-height:30px;font-size:.8em;max-width:57%;max-height:30px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#ng-chat-users li .ng-chat-friends-list-container>.ng-chat-participant-status{float:right}.ng-chat-people-actions{position:absolute;top:4px;right:5px;margin:0;padding:0;z-index:2}.ng-chat-people-actions>a.ng-chat-people-action{display:inline-block;width:21px;height:21px;margin-right:8px;text-decoration:none;border:none;border-radius:25px;padding:1px}@media only screen and (max-width:581px){#ng-chat-people{width:300px;height:360px;margin-right:0}}"], encapsulation: 2 });
NgChatFriendsListComponent.ctorParameters = () => [];
NgChatFriendsListComponent.propDecorators = {
    participants: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    participantsResponse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    participantsInteractedWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    windows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    userId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    localization: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    shouldDisplay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    isCollapsed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    searchEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    currentActiveOption: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    onParticipantClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    onOptionPromptCanceled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    onOptionPromptConfirmed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgChatFriendsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ng-chat-friends-list',
                template: "<div *ngIf=\"shouldDisplay\" id=\"ng-chat-people\" [ngClass]=\"{'primary-outline-color': true, 'primary-background': true, 'ng-chat-people-collapsed': isCollapsed}\">\r\n\t<a href=\"javascript:void(0);\" class=\"ng-chat-title secondary-background shadowed\" (click)=\"onChatTitleClicked()\">\r\n\t\t<span>\r\n\t\t\t{{localization.title}}\r\n\t\t</span>\r\n\t</a>\r\n\t<div *ngIf=\"currentActiveOption\" class=\"ng-chat-people-actions\" (click)=\"onFriendsListActionCancelClicked()\">\r\n\t\t<a href=\"javascript:void(0);\" class=\"ng-chat-people-action\">\r\n\t\t\t<i class=\"remove-icon\"></i>\r\n\t\t</a>\r\n\t\t<a href=\"javascript:void(0);\" class=\"ng-chat-people-action\" (click)=\"onFriendsListActionConfirmClicked()\">\r\n\t\t\t<i class=\"check-icon\"></i>\r\n\t\t</a>\r\n\t</div>\r\n\t<input *ngIf=\"searchEnabled\" id=\"ng-chat-search_friend\" class=\"friends-search-bar\" type=\"search\" [placeholder]=\"localization.searchPlaceholder\" [(ngModel)]=\"searchInput\" />\r\n\t<ul id=\"ng-chat-users\" *ngIf=\"!isCollapsed\" [ngClass]=\"{'offset-search': searchEnabled}\">\r\n\t\t<li *ngFor=\"let user of filteredParticipants\">\r\n\t\t\t<input \r\n\t\t\t\t*ngIf=\"currentActiveOption && currentActiveOption.validateContext(user)\" \r\n\t\t\t\ttype=\"checkbox\" \r\n\t\t\t\tclass=\"ng-chat-users-checkbox\" \r\n\t\t\t\t(change)=\"onFriendsListCheckboxChange(user, $event.target.checked)\" \r\n\t\t\t\t[checked]=\"isUserSelectedFromFriendsList(user)\"/>\r\n\t\t\t<div [ngClass]=\"{'ng-chat-friends-list-selectable-offset': currentActiveOption, 'ng-chat-friends-list-container': true}\" (click)=\"onUserClick(user)\">\r\n\t\t\t\t<div *ngIf=\"!user.avatar\" class=\"icon-wrapper\">\r\n\t\t\t\t\t<i class=\"user-icon\"></i>\r\n\t\t\t\t</div>\r\n\t\t\t\t<img *ngIf=\"user.avatar\" alt=\"\" class=\"avatar\" height=\"30\" width=\"30\"  [src]=\"user.avatar | sanitize\"/>\r\n\t\t\t\t<strong title=\"{{user.displayName}}\">{{user.displayName}}</strong>\r\n\t\t\t\t<span [ngClass]=\"{'ng-chat-participant-status': true, 'online': user.status == ChatParticipantStatus.Online, 'busy': user.status == ChatParticipantStatus.Busy, 'away': user.status == ChatParticipantStatus.Away, 'offline': user.status == ChatParticipantStatus.Offline}\" title=\"{{chatParticipantStatusDescriptor(user.status, localization)}}\"></span>\r\n\t\t\t\t<span *ngIf=\"unreadMessagesTotalByParticipant(user).length > 0\" class=\"ng-chat-unread-messages-count unread-messages-counter-container primary-text\">{{unreadMessagesTotalByParticipant(user)}}</span>\r\n\t\t\t</div>\r\n\t\t</li>\r\n\t</ul>\r\n</div>",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                styles: ["#ng-chat-people{position:relative;width:240px;height:360px;border-width:1px;border-style:solid;margin-right:20px;box-shadow:0 4px 8px rgba(0,0,0,.25);border-bottom:0}#ng-chat-people.ng-chat-people-collapsed{height:30px}#ng-chat-search_friend{display:block;padding:7px 10px;width:calc(100% - 20px);margin:10px auto 0;font-size:.9em;-webkit-appearance:searchfield}#ng-chat-users{padding:0 10px;list-style:none;margin:0;overflow:auto;position:absolute;top:42px;bottom:0;width:100%;box-sizing:border-box}#ng-chat-users.offset-search{top:84px}#ng-chat-users .ng-chat-users-checkbox{float:left;margin-right:5px;margin-top:8px}#ng-chat-users li{clear:both;margin-bottom:10px;overflow:hidden;cursor:pointer;max-height:30px}#ng-chat-users li>.ng-chat-friends-list-selectable-offset{margin-left:22px}#ng-chat-users li .ng-chat-friends-list-container{display:inline-block;width:100%}#ng-chat-users li>.ng-chat-friends-list-selectable-offset.ng-chat-friends-list-container{display:block;width:auto}#ng-chat-users li .ng-chat-friends-list-container>.icon-wrapper,#ng-chat-users li .ng-chat-friends-list-container>img.avatar{float:left;margin-right:5px;border-radius:25px}#ng-chat-users li .ng-chat-friends-list-container>.icon-wrapper{background-color:#bababa;overflow:hidden;width:30px;height:30px}#ng-chat-users li .ng-chat-friends-list-container>.icon-wrapper>i{color:#fff;transform:scale(.7)}#ng-chat-users li .ng-chat-friends-list-container>strong{float:left;line-height:30px;font-size:.8em;max-width:57%;max-height:30px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#ng-chat-users li .ng-chat-friends-list-container>.ng-chat-participant-status{float:right}.ng-chat-people-actions{position:absolute;top:4px;right:5px;margin:0;padding:0;z-index:2}.ng-chat-people-actions>a.ng-chat-people-action{display:inline-block;width:21px;height:21px;margin-right:8px;text-decoration:none;border:none;border-radius:25px;padding:1px}@media only screen and (max-width:581px){#ng-chat-people{width:300px;height:360px;margin-right:0}}"]
            }]
    }], function () { return []; }, { participantsInteractedWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], onParticipantClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onOptionPromptCanceled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onOptionPromptConfirmed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], isCollapsed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], participants: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], participantsResponse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], windows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], userId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], localization: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], shouldDisplay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], searchEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], currentActiveOption: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

class NgChatWindowComponent {
    constructor() {
        this.emojisEnabled = true;
        this.linkfyEnabled = true;
        this.showMessageDate = true;
        this.messageDatePipeFormat = "short";
        this.hasPagedHistory = true;
        this.onChatWindowClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onMessagesSeen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onMessageSent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onTabTriggered = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onOptionTriggered = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onLoadHistoryTriggered = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // File upload state
        this.fileUploadersInUse = []; // Id bucket of uploaders in use
        // Exposes enums and functions for the ng-template
        this.ChatParticipantType = ChatParticipantType;
        this.ChatParticipantStatus = ChatParticipantStatus;
        this.MessageType = MessageType;
        this.chatParticipantStatusDescriptor = chatParticipantStatusDescriptor;
    }
    defaultWindowOptions(currentWindow) {
        if (this.showOptions && currentWindow.participant.participantType == ChatParticipantType.User) {
            return [{
                    isActive: false,
                    chattingTo: currentWindow,
                    validateContext: (participant) => {
                        return participant.participantType == ChatParticipantType.User;
                    },
                    displayLabel: 'Add People' // TODO: Localize this
                }];
        }
        return [];
    }
    // Asserts if a user avatar is visible in a chat cluster
    isAvatarVisible(window, message, index) {
        if (message.fromId != this.userId) {
            if (index == 0) {
                return true; // First message, good to show the thumbnail
            }
            else {
                // Check if the previous message belongs to the same user, if it belongs there is no need to show the avatar again to form the message cluster
                if (window.messages[index - 1].fromId != message.fromId) {
                    return true;
                }
            }
        }
        return false;
    }
    getChatWindowAvatar(participant, message) {
        if (participant.participantType == ChatParticipantType.User) {
            return participant.avatar;
        }
        else if (participant.participantType == ChatParticipantType.Group) {
            let group = participant;
            let userIndex = group.chattingTo.findIndex(x => x.id == message.fromId);
            return group.chattingTo[userIndex >= 0 ? userIndex : 0].avatar;
        }
        return null;
    }
    isUploadingFile(window) {
        const fileUploadInstanceId = this.getUniqueFileUploadInstanceId(window);
        return this.fileUploadersInUse.indexOf(fileUploadInstanceId) > -1;
    }
    // Generates a unique file uploader id for each participant
    getUniqueFileUploadInstanceId(window) {
        if (window && window.participant) {
            return `ng-chat-file-upload-${window.participant.id}`;
        }
        return 'ng-chat-file-upload';
    }
    unreadMessagesTotal(window) {
        return MessageCounter.unreadMessagesTotal(window, this.userId);
    }
    // Scrolls a chat window message flow to the bottom
    scrollChatWindow(window, direction) {
        if (!window.isCollapsed) {
            setTimeout(() => {
                if (this.chatMessages) {
                    let element = this.chatMessages.nativeElement;
                    let position = (direction === ScrollDirection.Top) ? 0 : element.scrollHeight;
                    element.scrollTop = position;
                }
            });
        }
    }
    activeOptionTrackerChange(option) {
        this.onOptionTriggered.emit(option);
    }
    // Triggers native file upload for file selection from the user
    triggerNativeFileUpload(window) {
        if (window) {
            if (this.nativeFileInput)
                this.nativeFileInput.nativeElement.click();
        }
    }
    // Toggles a window focus on the focus/blur of a 'newMessage' input
    toggleWindowFocus(window) {
        window.hasFocus = !window.hasFocus;
        if (window.hasFocus) {
            const unreadMessages = window.messages
                .filter(message => message.dateSeen == null
                && (message.toId == this.userId || window.participant.participantType === ChatParticipantType.Group));
            if (unreadMessages && unreadMessages.length > 0) {
                this.onMessagesSeen.emit(unreadMessages);
            }
        }
    }
    markMessagesAsRead(messages) {
        this.onMessagesSeen.emit(messages);
    }
    fetchMessageHistory(window) {
        this.onLoadHistoryTriggered.emit(window);
    }
    // Closes a chat window via the close 'X' button
    onCloseChatWindow() {
        this.onChatWindowClosed.emit({ closedWindow: this.window, closedViaEscapeKey: false });
    }
    /*  Monitors pressed keys on a chat window
        - Dispatches a message when the ENTER key is pressed
        - Tabs between windows on TAB or SHIFT + TAB
        - Closes the current focused window on ESC
    */
    onChatInputTyped(event, window) {
        switch (event.keyCode) {
            case 13:
                if (window.newMessage && window.newMessage.trim() != "") {
                    let message = new Message();
                    message.fromId = this.userId;
                    message.toId = window.participant.id;
                    message.message = window.newMessage;
                    message.dateSent = new Date();
                    window.messages.push(message);
                    this.onMessageSent.emit(message);
                    window.newMessage = ""; // Resets the new message input
                    this.scrollChatWindow(window, ScrollDirection.Bottom);
                }
                break;
            case 9:
                event.preventDefault();
                this.onTabTriggered.emit({ triggeringWindow: window, shiftKeyPressed: event.shiftKey });
                break;
            case 27:
                this.onChatWindowClosed.emit({ closedWindow: window, closedViaEscapeKey: true });
                break;
        }
    }
    // Toggles a chat window visibility between maximized/minimized
    onChatWindowClicked(window) {
        window.isCollapsed = !window.isCollapsed;
        this.scrollChatWindow(window, ScrollDirection.Bottom);
    }
    clearInUseFileUploader(fileUploadInstanceId) {
        const uploaderInstanceIdIndex = this.fileUploadersInUse.indexOf(fileUploadInstanceId);
        if (uploaderInstanceIdIndex > -1) {
            this.fileUploadersInUse.splice(uploaderInstanceIdIndex, 1);
        }
    }
    // Handles file selection and uploads the selected file using the file upload adapter
    onFileChosen(window) {
        const fileUploadInstanceId = this.getUniqueFileUploadInstanceId(window);
        const uploadElementRef = this.nativeFileInput;
        if (uploadElementRef) {
            const file = uploadElementRef.nativeElement.files[0];
            this.fileUploadersInUse.push(fileUploadInstanceId);
            this.fileUploadAdapter.uploadFile(file, window.participant.id)
                .subscribe(fileMessage => {
                this.clearInUseFileUploader(fileUploadInstanceId);
                fileMessage.fromId = this.userId;
                // Push file message to current user window   
                window.messages.push(fileMessage);
                this.onMessageSent.emit(fileMessage);
                this.scrollChatWindow(window, ScrollDirection.Bottom);
                // Resets the file upload element
                uploadElementRef.nativeElement.value = '';
            }, (error) => {
                this.clearInUseFileUploader(fileUploadInstanceId);
                // Resets the file upload element
                uploadElementRef.nativeElement.value = '';
                // TODO: Invoke a file upload adapter error here
            });
        }
    }
}
NgChatWindowComponent.ɵfac = function NgChatWindowComponent_Factory(t) { return new (t || NgChatWindowComponent)(); };
NgChatWindowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NgChatWindowComponent, selectors: [["ng-chat-window"]], viewQuery: function NgChatWindowComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c7, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c8, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c9, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.chatMessages = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.nativeFileInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.chatWindowInput = _t.first);
    } }, inputs: { emojisEnabled: "emojisEnabled", linkfyEnabled: "linkfyEnabled", showMessageDate: "showMessageDate", messageDatePipeFormat: "messageDatePipeFormat", hasPagedHistory: "hasPagedHistory", fileUploadAdapter: "fileUploadAdapter", window: "window", userId: "userId", localization: "localization", showOptions: "showOptions" }, outputs: { onChatWindowClosed: "onChatWindowClosed", onMessagesSeen: "onMessagesSeen", onMessageSent: "onMessageSent", onTabTriggered: "onTabTriggered", onOptionTriggered: "onOptionTriggered", onLoadHistoryTriggered: "onLoadHistoryTriggered" }, decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "ng-chat-title", "secondary-background"], [1, "ng-chat-title-visibility-toggle-area", 3, "click"], [3, "title"], [3, "ngClass", "title"], ["class", "ng-chat-unread-messages-count unread-messages-counter-container primary-text", 4, "ngIf"], ["href", "javascript:void(0);", 1, "ng-chat-close", "primary-text", 3, "click"], [1, "ng-chat-unread-messages-count", "unread-messages-counter-container", "primary-text"], [3, "ngClass", "options", "activeOptionTrackerChange"], [1, "ng-chat-messages", "primary-background"], ["chatMessages", ""], ["class", "ng-chat-loading-wrapper", 4, "ngIf"], ["class", "ng-chat-load-history", 4, "ngIf"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "ng-chat-footer", "primary-outline-color", "primary-background"], ["type", "text", 3, "ngModel", "placeholder", "ngClass", "ngModelChange", "keydown", "blur", "focus"], ["chatWindowInput", ""], [1, "ng-chat-loading-wrapper"], [1, "loader"], [1, "ng-chat-load-history"], [1, "load-history-action", 3, "click"], [3, "ngClass"], [3, "ngSwitch"], [3, "ngClass", 4, "ngSwitchCase"], ["class", "icon-wrapper", 4, "ngIf"], ["alt", "", "class", "avatar", "height", "30", "width", "30", 3, "src", 4, "ngIf"], ["class", "ng-chat-participant-name", 4, "ngIf"], [1, "icon-wrapper"], [1, "user-icon"], ["alt", "", "height", "30", "width", "30", 1, "avatar", 3, "src"], [1, "ng-chat-participant-name"], [3, "innerHtml"], ["class", "message-sent-date", 4, "ngIf"], [1, "message-sent-date"], [1, "image-message", 3, "src"], [1, "file-message-icon-container"], [1, "paperclip-icon"], ["target", "_blank", "rel", "noopener noreferrer", "download", "", 1, "file-details", 3, "click"], [1, "file-message-title"], ["class", "file-message-size", 4, "ngIf"], [1, "file-message-size"], ["class", "btn-add-file", 3, "click", 4, "ngIf"], ["type", "file", 2, "display", "none", 3, "change"], ["nativeFileInput", ""], ["class", "loader", 4, "ngIf"], [1, "btn-add-file", 3, "click"], [1, "upload-icon"]], template: function NgChatWindowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NgChatWindowComponent_ng_container_0_Template, 9, 10, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NgChatWindowComponent_ng_container_1_Template, 20, 24, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.window && ctx.window.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.window && !ctx.window.isCollapsed);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"], NgChatOptionsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgSwitchCase"]], pipes: [EmojifyPipe, SanitizePipe, GroupMessageDisplayNamePipe, LinkfyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]], styles: [".ng-chat-window{right:260px;height:360px;z-index:999;bottom:0;width:300px;position:fixed;border-width:1px;border-style:solid;border-bottom:0;box-shadow:0 4px 8px rgba(0,0,0,.25)}.ng-chat-window-collapsed{height:30px!important}.ng-chat-window .ng-chat-footer{box-sizing:border-box;padding:0;display:block;height:calc(10%);width:100%;border:none;border-top:1px solid transparent;border-color:inherit}.ng-chat-window .ng-chat-footer>input{font-size:.8em;box-sizing:border-box;padding:0 5px;display:block;height:100%;width:100%;border:none}.ng-chat-window .ng-chat-footer>input.has-side-action{width:calc(100% - 30px)}.ng-chat-window .ng-chat-footer .btn-add-file{position:absolute;right:5px;bottom:7px;height:20px;width:20px;cursor:pointer}.ng-chat-window .ng-chat-footer .loader{position:absolute;right:14px;bottom:8px}.ng-chat-window .ng-chat-load-history{height:30px;text-align:center;font-size:.8em}.ng-chat-window .ng-chat-load-history>a{border-radius:15px;cursor:pointer;padding:5px 10px}.ng-chat-window .ng-chat-messages{padding:10px;width:100%;height:calc(90% - 30px);box-sizing:border-box;position:relative;overflow:auto}.ng-chat-window .ng-chat-messages .ng-chat-message{clear:both}.ng-chat-window .ng-chat-messages .ng-chat-message>.icon-wrapper,.ng-chat-window .ng-chat-messages .ng-chat-message>img.avatar{position:absolute;left:10px;border-radius:25px}.ng-chat-window .ng-chat-messages .ng-chat-message .ng-chat-participant-name{display:inline-block;margin-left:40px;padding-bottom:5px;font-weight:700;font-size:.8em;text-overflow:ellipsis;max-width:180px}.ng-chat-window .ng-chat-messages .ng-chat-message>.icon-wrapper{background-color:#bababa;overflow:hidden;width:30px;height:30px;padding:0}.ng-chat-window .ng-chat-messages .ng-chat-message>.icon-wrapper>i{color:#fff;transform:scale(.7)}.ng-chat-window .ng-chat-messages .ng-chat-message .message-sent-date{font-size:.8em;display:block;text-align:right;margin-top:5px}.ng-chat-window .ng-chat-messages .ng-chat-message>div{float:right;width:182px;border-radius:5px;padding:10px;margin-top:0;margin-bottom:5px;font-size:.9em;word-wrap:break-word}.ng-chat-window .ng-chat-messages .ng-chat-message.ng-chat-message-received>div.received-chat-message-container{float:left;margin-left:40px;padding-top:7px;padding-bottom:7px;border-style:solid;border-width:3px;margin-top:0;margin-bottom:5px}.ng-chat-window .ng-chat-messages .ng-chat-message .file-message-container{float:right;width:202px;border-style:solid;border-width:3px;border-radius:5px;overflow:hidden;margin-bottom:5px;display:block;text-decoration:none;font-size:.9em;padding:0;box-sizing:border-box}.ng-chat-window .ng-chat-messages .ng-chat-message .file-message-container.received{float:left;margin-left:40px;width:208px}.ng-chat-window .ng-chat-messages .ng-chat-message .file-message-container>.file-message-icon-container{width:20px;height:35px;padding:10px 5px;float:left}.ng-chat-window .ng-chat-messages .ng-chat-message .file-message-container>.file-message-icon-container i{margin-top:8px}.ng-chat-window .ng-chat-messages .ng-chat-message .file-message-container>.file-details{float:left;padding:10px;width:calc(100% - 60px);color:currentColor;text-decoration:none}.ng-chat-window .ng-chat-messages .ng-chat-message .file-message-container>.file-details:hover{text-decoration:underline}.ng-chat-window .ng-chat-messages .ng-chat-message .file-message-container>.file-details span{display:block;width:100%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.ng-chat-window .ng-chat-messages .ng-chat-message .file-message-container>.file-details .file-message-title{font-weight:700}.ng-chat-window .ng-chat-messages .ng-chat-message .file-message-container>.file-details .file-message-size{font-size:.8em;margin-top:5px}.ng-chat-window .image-message{width:100%;height:auto}@media only screen and (max-width:581px){.ng-chat-window{position:static}}"], encapsulation: 2 });
NgChatWindowComponent.ctorParameters = () => [];
NgChatWindowComponent.propDecorators = {
    fileUploadAdapter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    window: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    userId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    localization: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    showOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    emojisEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    linkfyEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    showMessageDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    messageDatePipeFormat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    hasPagedHistory: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    onChatWindowClosed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    onMessagesSeen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    onMessageSent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    onTabTriggered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    onOptionTriggered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    onLoadHistoryTriggered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    chatMessages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['chatMessages',] }],
    nativeFileInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['nativeFileInput',] }],
    chatWindowInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['chatWindowInput',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgChatWindowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ng-chat-window',
                template: "<ng-container *ngIf=\"window && window.isCollapsed\">\r\n\t<div class=\"ng-chat-title secondary-background\">\r\n\t\t<div class=\"ng-chat-title-visibility-toggle-area\" (click)=\"onChatWindowClicked(window)\">\r\n\t\t\t<strong title=\"{{window.participant.displayName}}\">\r\n\t\t\t\t{{window.participant.displayName}}\r\n\t\t\t</strong>\r\n\t\t\t<span [ngClass]=\"{'ng-chat-participant-status': true, 'online': window.participant.status == ChatParticipantStatus.Online, 'busy': window.participant.status == ChatParticipantStatus.Busy, 'away': window.participant.status == ChatParticipantStatus.Away, 'offline': window.participant.status == ChatParticipantStatus.Offline}\" title=\"{{chatParticipantStatusDescriptor(window.participant.status, localization)}}\"></span>\r\n\t\t\t<span *ngIf=\"unreadMessagesTotal(window).length > 0\" class=\"ng-chat-unread-messages-count unread-messages-counter-container primary-text\">{{unreadMessagesTotal(window)}}</span>\r\n\t\t</div>\r\n\t\t<a href=\"javascript:void(0);\" class=\"ng-chat-close primary-text\" (click)=\"onCloseChatWindow()\">X</a>\r\n\t</div>\r\n</ng-container>\r\n<ng-container *ngIf=\"window && !window.isCollapsed\">\r\n\t<div class=\"ng-chat-title secondary-background\">\r\n\t\t<div class=\"ng-chat-title-visibility-toggle-area\" (click)=\"onChatWindowClicked(window)\">\r\n\t\t\t<strong title=\"{{window.participant.displayName}}\">\r\n\t\t\t\t{{window.participant.displayName}}\r\n\t\t\t</strong>\r\n\t\t\t<span [ngClass]=\"{'ng-chat-participant-status': true, 'online': window.participant.status == ChatParticipantStatus.Online, 'busy': window.participant.status == ChatParticipantStatus.Busy, 'away': window.participant.status == ChatParticipantStatus.Away, 'offline': window.participant.status == ChatParticipantStatus.Offline}\" title=\"{{chatParticipantStatusDescriptor(window.participant.status, localization)}}\"></span>\r\n\t\t\t<span *ngIf=\"unreadMessagesTotal(window).length > 0\" class=\"ng-chat-unread-messages-count unread-messages-counter-container primary-text\">{{unreadMessagesTotal(window)}}</span>\r\n\t\t</div>\r\n\t\t<a href=\"javascript:void(0);\" class=\"ng-chat-close primary-text\" (click)=\"onCloseChatWindow()\">X</a>\r\n\t\t<ng-chat-options [ngClass]=\"'ng-chat-options-container'\" [options]=\"defaultWindowOptions(window)\" (activeOptionTrackerChange)=\"activeOptionTrackerChange($event)\"></ng-chat-options>\r\n\t</div>\r\n\t<div #chatMessages class=\"ng-chat-messages primary-background\">\r\n\t\t<div *ngIf=\"window.isLoadingHistory\" class=\"ng-chat-loading-wrapper\">\r\n\t\t\t<div class=\"loader\">Loading history...</div>\r\n\t\t</div>\r\n\t\t<div *ngIf=\"hasPagedHistory && window.hasMoreMessages && !window.isLoadingHistory\" class=\"ng-chat-load-history\">\r\n\t\t\t<a class=\"load-history-action\" (click)=\"fetchMessageHistory(window)\">{{localization.loadMessageHistoryPlaceholder}}</a>\r\n\t\t</div>\r\n\r\n\t\t<div *ngFor=\"let message of window.messages; let i = index\" [ngClass]=\"{'ng-chat-message': true, 'ng-chat-message-received': message.fromId != userId}\">\r\n\t\t\t<ng-container *ngIf=\"isAvatarVisible(window, message, i)\">\r\n\t\t\t\t<div *ngIf=\"!getChatWindowAvatar(window.participant, message)\" class=\"icon-wrapper\">\r\n\t\t\t\t\t<i class=\"user-icon\"></i>\r\n\t\t\t\t</div>\r\n\t\t\t\t<img *ngIf=\"getChatWindowAvatar(window.participant, message)\" alt=\"\" class=\"avatar\" height=\"30\" width=\"30\" [src]=\"getChatWindowAvatar(window.participant, message) | sanitize\" />\r\n\t\t\t\t<span *ngIf=\"window.participant.participantType == ChatParticipantType.Group\" class=\"ng-chat-participant-name\">{{window.participant | groupMessageDisplayName:message}}</span>\r\n\t\t\t</ng-container>\r\n\t\t\t<ng-container [ngSwitch]=\"message.type\">\r\n\t\t\t\t<div *ngSwitchCase=\"MessageType.Text\" [ngClass]=\"{'sent-chat-message-container': message.fromId == userId, 'received-chat-message-container': message.fromId != userId}\">\r\n          <span [innerHtml]=\"message.message | emojify:emojisEnabled | linkfy:linkfyEnabled\"></span>\r\n\t\t\t\t\t<span *ngIf=\"showMessageDate && message.dateSent\" class=\"message-sent-date\">{{message.dateSent | date:messageDatePipeFormat}}</span>\r\n\t\t\t\t</div>\r\n        <div *ngSwitchCase=\"MessageType.Image\" [ngClass]=\"{'sent-chat-message-container': message.fromId == userId, 'received-chat-message-container': message.fromId != userId}\">\r\n\r\n          <img src=\"{{message.message}}\" class=\"image-message\" />\r\n\r\n\t\t\t\t\t<span *ngIf=\"showMessageDate && message.dateSent\" class=\"message-sent-date\">{{message.dateSent | date:messageDatePipeFormat}}</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngSwitchCase=\"MessageType.File\" [ngClass]=\"{'file-message-container': true, 'received': message.fromId != userId}\">\r\n\t\t\t\t\t<div class=\"file-message-icon-container\">\r\n\t\t\t\t\t\t<i class=\"paperclip-icon\"></i>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<a class=\"file-details\" [attr.href]=\"message.downloadUrl\" target=\"_blank\" rel=\"noopener noreferrer\" (click)=\"this.markMessagesAsRead([message])\" download>\r\n\t\t\t\t\t\t<span class=\"file-message-title\" [attr.title]=\"message.message\">{{message.message}}</span>\r\n\t\t\t\t\t\t<span *ngIf=\"message.fileSizeInBytes\"  class=\"file-message-size\">{{message.fileSizeInBytes}} Bytes</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t</ng-container>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"ng-chat-footer primary-outline-color primary-background\">\r\n\t\t<input #chatWindowInput\r\n\t\t\ttype=\"text\"\r\n\t\t\t[ngModel]=\"window.newMessage | emojify:emojisEnabled\"\r\n\t\t\t(ngModelChange)=\"window.newMessage=$event\"\r\n\t\t\t[placeholder]=\"localization.messagePlaceholder\"\r\n\t\t\t[ngClass]=\"{'chat-window-input': true, 'has-side-action': fileUploadAdapter}\"\r\n\t\t\t(keydown)=\"onChatInputTyped($event, window)\"\r\n\t\t\t(blur)=\"toggleWindowFocus(window)\"\r\n\t\t\t(focus)=\"toggleWindowFocus(window)\"/>\r\n\r\n\t\t<!-- File Upload -->\r\n\t\t<ng-container *ngIf=\"fileUploadAdapter\">\r\n\t\t\t<a *ngIf=\"!isUploadingFile(window)\" class=\"btn-add-file\" (click)=\"triggerNativeFileUpload(window)\">\r\n\t\t\t\t<i class=\"upload-icon\"></i>\r\n\t\t\t</a>\r\n\t\t\t<input\r\n\t\t\t\ttype=\"file\"\r\n\t\t\t\t#nativeFileInput\r\n\t\t\t\tstyle=\"display: none;\"\r\n\t\t\t\t[attr.id]=\"getUniqueFileUploadInstanceId(window)\"\r\n\t\t\t\t(change)=\"onFileChosen(window)\" />\r\n\t\t\t<div *ngIf=\"isUploadingFile(window)\" class=\"loader\"></div>\r\n\t\t</ng-container>\r\n\t</div>\r\n</ng-container>\r\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                styles: [".ng-chat-window{right:260px;height:360px;z-index:999;bottom:0;width:300px;position:fixed;border-width:1px;border-style:solid;border-bottom:0;box-shadow:0 4px 8px rgba(0,0,0,.25)}.ng-chat-window-collapsed{height:30px!important}.ng-chat-window .ng-chat-footer{box-sizing:border-box;padding:0;display:block;height:calc(10%);width:100%;border:none;border-top:1px solid transparent;border-color:inherit}.ng-chat-window .ng-chat-footer>input{font-size:.8em;box-sizing:border-box;padding:0 5px;display:block;height:100%;width:100%;border:none}.ng-chat-window .ng-chat-footer>input.has-side-action{width:calc(100% - 30px)}.ng-chat-window .ng-chat-footer .btn-add-file{position:absolute;right:5px;bottom:7px;height:20px;width:20px;cursor:pointer}.ng-chat-window .ng-chat-footer .loader{position:absolute;right:14px;bottom:8px}.ng-chat-window .ng-chat-load-history{height:30px;text-align:center;font-size:.8em}.ng-chat-window .ng-chat-load-history>a{border-radius:15px;cursor:pointer;padding:5px 10px}.ng-chat-window .ng-chat-messages{padding:10px;width:100%;height:calc(90% - 30px);box-sizing:border-box;position:relative;overflow:auto}.ng-chat-window .ng-chat-messages .ng-chat-message{clear:both}.ng-chat-window .ng-chat-messages .ng-chat-message>.icon-wrapper,.ng-chat-window .ng-chat-messages .ng-chat-message>img.avatar{position:absolute;left:10px;border-radius:25px}.ng-chat-window .ng-chat-messages .ng-chat-message .ng-chat-participant-name{display:inline-block;margin-left:40px;padding-bottom:5px;font-weight:700;font-size:.8em;text-overflow:ellipsis;max-width:180px}.ng-chat-window .ng-chat-messages .ng-chat-message>.icon-wrapper{background-color:#bababa;overflow:hidden;width:30px;height:30px;padding:0}.ng-chat-window .ng-chat-messages .ng-chat-message>.icon-wrapper>i{color:#fff;transform:scale(.7)}.ng-chat-window .ng-chat-messages .ng-chat-message .message-sent-date{font-size:.8em;display:block;text-align:right;margin-top:5px}.ng-chat-window .ng-chat-messages .ng-chat-message>div{float:right;width:182px;border-radius:5px;padding:10px;margin-top:0;margin-bottom:5px;font-size:.9em;word-wrap:break-word}.ng-chat-window .ng-chat-messages .ng-chat-message.ng-chat-message-received>div.received-chat-message-container{float:left;margin-left:40px;padding-top:7px;padding-bottom:7px;border-style:solid;border-width:3px;margin-top:0;margin-bottom:5px}.ng-chat-window .ng-chat-messages .ng-chat-message .file-message-container{float:right;width:202px;border-style:solid;border-width:3px;border-radius:5px;overflow:hidden;margin-bottom:5px;display:block;text-decoration:none;font-size:.9em;padding:0;box-sizing:border-box}.ng-chat-window .ng-chat-messages .ng-chat-message .file-message-container.received{float:left;margin-left:40px;width:208px}.ng-chat-window .ng-chat-messages .ng-chat-message .file-message-container>.file-message-icon-container{width:20px;height:35px;padding:10px 5px;float:left}.ng-chat-window .ng-chat-messages .ng-chat-message .file-message-container>.file-message-icon-container i{margin-top:8px}.ng-chat-window .ng-chat-messages .ng-chat-message .file-message-container>.file-details{float:left;padding:10px;width:calc(100% - 60px);color:currentColor;text-decoration:none}.ng-chat-window .ng-chat-messages .ng-chat-message .file-message-container>.file-details:hover{text-decoration:underline}.ng-chat-window .ng-chat-messages .ng-chat-message .file-message-container>.file-details span{display:block;width:100%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.ng-chat-window .ng-chat-messages .ng-chat-message .file-message-container>.file-details .file-message-title{font-weight:700}.ng-chat-window .ng-chat-messages .ng-chat-message .file-message-container>.file-details .file-message-size{font-size:.8em;margin-top:5px}.ng-chat-window .image-message{width:100%;height:auto}@media only screen and (max-width:581px){.ng-chat-window{position:static}}"]
            }]
    }], function () { return []; }, { emojisEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], linkfyEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showMessageDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], messageDatePipeFormat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], hasPagedHistory: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], onChatWindowClosed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onMessagesSeen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onMessageSent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onTabTriggered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onOptionTriggered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onLoadHistoryTriggered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], fileUploadAdapter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], window: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], userId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], localization: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], chatMessages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['chatMessages']
        }], nativeFileInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['nativeFileInput']
        }], chatWindowInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['chatWindowInput']
        }] }); })();

class NgChatModule {
}
NgChatModule.ɵfac = function NgChatModule_Factory(t) { return new (t || NgChatModule)(); };
NgChatModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NgChatModule });
NgChatModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgChatModule, { declarations: function () { return [NgChat, EmojifyPipe, LinkfyPipe, SanitizePipe, GroupMessageDisplayNamePipe, NgChatOptionsComponent, NgChatFriendsListComponent, NgChatWindowComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]]; }, exports: function () { return [NgChat]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgChatModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
                declarations: [
                    NgChat,
                    EmojifyPipe,
                    LinkfyPipe,
                    SanitizePipe,
                    GroupMessageDisplayNamePipe,
                    NgChatOptionsComponent,
                    NgChatFriendsListComponent,
                    NgChatWindowComponent
                ],
                exports: [NgChat]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-chat.js.map

/***/ })

}]);
//# sourceMappingURL=views-product-product-module-es2015.js.map