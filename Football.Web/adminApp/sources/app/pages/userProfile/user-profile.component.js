"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var common_service_1 = require("../../common/services/common.service");
var shared_service_1 = require("../shared/shared.service");
var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(http, sharedService, title) {
        var _this = this;
        this.http = http;
        this.sharedService = sharedService;
        this.title = title;
        this.ApiUrl = common_service_1.CommonService.ApiUrl + "users/";
        this.title.setTitle("Настройки профиля");
        this.sharedService.showPreloader();
        this.http.get(this.ApiUrl + "userprofile").subscribe(function (res) {
            console.log(res);
            _this.userProfile = Object.assign({}, res.json());
            _this.editedUserProfile = res.json();
            _this.sharedService.hidePreloader();
        });
    }
    UserProfileComponent.prototype.saveProfile = function (form) {
        var _this = this;
        this.sharedService.showPreloader();
        this.http.put(this.ApiUrl + "saveprofile", this.editedUserProfile).subscribe(function (res) {
            _this.sharedService.hidePreloader();
        });
    };
    UserProfileComponent.prototype.cancelChanges = function () {
        this.editedUserProfile = Object.assign({}, this.userProfile);
    };
    UserProfileComponent = __decorate([
        core_1.Component({
            template: require("./user-profile.component.html")
        }),
        __metadata("design:paramtypes", [http_1.Http, shared_service_1.SharedService, platform_browser_1.Title])
    ], UserProfileComponent);
    return UserProfileComponent;
}());
exports.UserProfileComponent = UserProfileComponent;
//# sourceMappingURL=user-profile.component.js.map