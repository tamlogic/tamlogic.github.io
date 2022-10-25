webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n\n<div>\n  <app-authentication [(token)]='token'></app-authentication>\n</div>\n\n<div>\n  <user-list *ngIf='token'></user-list>\n</div>\n\n<div>\n  <post-list [token]='token'></post-list>\n</div>\n\n<div>\n  <h3 *ngIf='token == null'> Please, authorize to create a post </h3>\n  <post-new *ngIf='token' [token]='token'></post-new>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.token = null;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export WpApiLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__post_edit_post_edit_component__ = __webpack_require__("./src/app/post-edit/post-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__post_list_post_list_component__ = __webpack_require__("./src/app/post-list/post-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_list_user_list_component__ = __webpack_require__("./src/app/user-list/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__post_new_post_new_component__ = __webpack_require__("./src/app/post-new/post-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__authentication_authentication_component__ = __webpack_require__("./src/app/authentication/authentication.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_wp_api_angular__ = __webpack_require__("./node_modules/wp-api-angular/wp-api-angular.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_wp_api_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_wp_api_angular__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












function WpApiLoaderFactory(http) {
    // http://localhost:8080/wptest/wp-json/wp/v2
    // http://la-theatre.ru:82/wp-json/wp/v2
    // https://didonghieuvu.com/wp-json/wp/v2
    return new __WEBPACK_IMPORTED_MODULE_11_wp_api_angular__["WpApiStaticLoader"](http, 'https://didonghieuvu.com/wp-json/wp/v2', '');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__post_edit_post_edit_component__["a" /* PostEditComponent */],
                __WEBPACK_IMPORTED_MODULE_6__post_list_post_list_component__["a" /* PostListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__user_list_user_list_component__["a" /* UserListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__post_new_post_new_component__["a" /* PostNewComponent */],
                __WEBPACK_IMPORTED_MODULE_10__authentication_authentication_component__["a" /* AuthenticationComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11_wp_api_angular__["WpApiModule"].forRoot({
                    provide: __WEBPACK_IMPORTED_MODULE_11_wp_api_angular__["WpApiLoader"],
                    useFactory: (WpApiLoaderFactory),
                    deps: [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]]
                })
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authentication/authentication.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/authentication/authentication.component.html":
/***/ (function(module, exports) {

module.exports = "<form *ngIf='token == null' (ngSubmit)='auth()'>\n  {{ user | json }}\n  <div class='form-group'>\n    <label for='login'>Login</label>\n    <input type='text' class='form-control' [(ngModel)]='user.login' name='login' id='login' required>\n  </div>\n\n  <div class='form-group'>\n    <label for='password'>Password</label>\n    <input type='text' class='form-control' [(ngModel)]='user.password' name='password' id='password' required>\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n</form>\n\n<h3 *ngIf='token'> We got a token </h3>"

/***/ }),

/***/ "./src/app/authentication/authentication.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationComponent = /** @class */ (function () {
    function AuthenticationComponent(http) {
        this.http = http;
        this.user = {
            login: '',
            password: ''
        };
        this.tokenChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AuthenticationComponent.prototype.ngOnInit = function () {
    };
    AuthenticationComponent.prototype.auth = function () {
        var _this = this;
        // url API:
        // http://localhost:8080/wptest/wp-json/jwt-auth/v1/token
        // https://didonghieuvu.com/wp-json/jwt-auth/v1/token
        // path login jwt token wp
        this.http.post('https://didonghieuvu.com/wp-json/jwt-auth/v1/token', {
            username: this.user.login,
            password: this.user.password
        }).subscribe(function (data) {
            if (data['token']) {
                _this.token = data['token'];
                _this.tokenChange.emit(_this.token);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AuthenticationComponent.prototype, "token", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], AuthenticationComponent.prototype, "tokenChange", void 0);
    AuthenticationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-authentication',
            template: __webpack_require__("./src/app/authentication/authentication.component.html"),
            styles: [__webpack_require__("./src/app/authentication/authentication.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthenticationComponent);
    return AuthenticationComponent;
}());



/***/ }),

/***/ "./src/app/post-edit/post-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/post-edit/post-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2> Post Creation </h2>\n    <form (ngSubmit)='updatePost()'>\n      <div class=\"form-group\">\n        <label for=\"title\">Post title</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]='post_edit.title' name='title' id=\"title\" required>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"content\">Post content</label>\n        <textarea class=\"form-control\" id=\"content\" required [(ngModel)]='post_edit.content' name='content'></textarea>\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/post-edit/post-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wp_api_angular__ = __webpack_require__("./node_modules/wp-api-angular/wp-api-angular.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wp_api_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_wp_api_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostEditComponent = /** @class */ (function () {
    function PostEditComponent(wpApiPosts) {
        this.wpApiPosts = wpApiPosts;
        this.finish = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.post_edit = {
            title: '',
            content: ''
        };
    }
    PostEditComponent.prototype.ngOnInit = function () {
        this.post_edit['title'] = this.post.title.rendered;
        this.post_edit['content'] = this.post.content.rendered;
    };
    PostEditComponent.prototype.updatePost = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({
            'Authorization': 'Bearer ' + this.token
        });
        this.wpApiPosts.update(this.post.id, this.post_edit, { headers: headers })
            .toPromise()
            .then(function (response) {
            _this.finish.emit(null);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PostEditComponent.prototype, "token", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PostEditComponent.prototype, "post", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], PostEditComponent.prototype, "finish", void 0);
    PostEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'post-edit',
            template: __webpack_require__("./src/app/post-edit/post-edit.component.html"),
            styles: [__webpack_require__("./src/app/post-edit/post-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_wp_api_angular__["WpApiPosts"]])
    ], PostEditComponent);
    return PostEditComponent;
}());



/***/ }),

/***/ "./src/app/post-list/post-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/post-list/post-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2>Latests Posts:</h2>\n  <hr>\n  <div *ngFor='let post of posts'>\n    <div *ngIf='editingPost != post; else postEdit'>\n    <h1 [innerHTML]='post.title.rendered'></h1>\n    <p [innerHTML]='post.content.rendered'></p>\n    <button *ngIf='token' (click)='deletePost(post.id, $index)'>Delete</button>\n    <button *ngIf='token' (click)='updatePost(post)'>Edit</button>\n    <hr>\n  </div>\n</div>\n\n<ng-template #postEdit>\n  <post-edit [post]='editingPost' [token]='token' (finish)='editingPost = null; getPosts()'></post-edit>\n</ng-template>"

/***/ }),

/***/ "./src/app/post-list/post-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wp_api_angular__ = __webpack_require__("./node_modules/wp-api-angular/wp-api-angular.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wp_api_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_wp_api_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostListComponent = /** @class */ (function () {
    function PostListComponent(wpApiPosts) {
        this.wpApiPosts = wpApiPosts;
        this.posts = [];
        this.editingPost = null;
        this.getPosts();
    }
    PostListComponent.prototype.ngOnInit = function () {
    };
    PostListComponent.prototype.getPosts = function () {
        var _this = this;
        this.wpApiPosts.getList()
            .toPromise()
            .then(function (response) {
            var json = response.json();
            _this.posts = json;
        });
    };
    PostListComponent.prototype.deletePost = function (id, index) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({
            'Authorization': 'Bearer ' + this.token
        });
        this.wpApiPosts.delete(id, { headers: headers })
            .toPromise()
            .then(function (response) {
            if (response['ok'] == true) {
                _this.posts.splice(index, 1);
            }
        });
    };
    PostListComponent.prototype.updatePost = function (post) {
        this.editingPost = post;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PostListComponent.prototype, "token", void 0);
    PostListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'post-list',
            template: __webpack_require__("./src/app/post-list/post-list.component.html"),
            styles: [__webpack_require__("./src/app/post-list/post-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_wp_api_angular__["WpApiPosts"]])
    ], PostListComponent);
    return PostListComponent;
}());



/***/ }),

/***/ "./src/app/post-new/post-new.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/post-new/post-new.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2> Post Creation </h2>\n    <form (ngSubmit)='createPost()'>\n      <div class=\"form-group\">\n        <label for=\"title\">Post title</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]='new_post.title' name='title' id=\"title\" required>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"content\">Post content</label>\n        <textarea class=\"form-control\" id=\"content\" required [(ngModel)]='new_post.content' name='content'></textarea>\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/post-new/post-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wp_api_angular__ = __webpack_require__("./node_modules/wp-api-angular/wp-api-angular.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wp_api_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_wp_api_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostNewComponent = /** @class */ (function () {
    function PostNewComponent(wpApiPosts) {
        this.wpApiPosts = wpApiPosts;
        this.new_post = {
            title: '',
            content: '',
            status: 'publish'
        };
    }
    PostNewComponent.prototype.ngOnInit = function () {
    };
    PostNewComponent.prototype.createPost = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({
            'Authorization': 'Bearer ' + this.token
        });
        this.wpApiPosts.create(this.new_post, { headers: headers })
            .toPromise()
            .then(function (response) {
            console.log(response);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PostNewComponent.prototype, "token", void 0);
    PostNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'post-new',
            template: __webpack_require__("./src/app/post-new/post-new.component.html"),
            styles: [__webpack_require__("./src/app/post-new/post-new.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_wp_api_angular__["WpApiPosts"]])
    ], PostNewComponent);
    return PostNewComponent;
}());



/***/ }),

/***/ "./src/app/user-list/user-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-list/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2>Users:</h2>\n  <div *ngFor=\"let user of users\">\n     Name: {{user.name}}\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user-list/user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wp_api_angular__ = __webpack_require__("./node_modules/wp-api-angular/wp-api-angular.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wp_api_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_wp_api_angular__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserListComponent = /** @class */ (function () {
    function UserListComponent(wpApiUsers) {
        this.wpApiUsers = wpApiUsers;
        this.users = [];
        this.getUserList();
    }
    UserListComponent.prototype.ngOnInit = function () {
    };
    UserListComponent.prototype.getUserList = function () {
        var _this = this;
        this.wpApiUsers.getList()
            .toPromise()
            .then(function (response) {
            var json = response.json();
            _this.users = json;
        });
    };
    UserListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'user-list',
            template: __webpack_require__("./src/app/user-list/user-list.component.html"),
            styles: [__webpack_require__("./src/app/user-list/user-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_wp_api_angular__["WpApiUsers"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map