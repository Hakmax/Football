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
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var rxjs_1 = require("rxjs");
var authContext_service_1 = require("./common/services/authContext.service");
var UserAuthorizedGuard = /** @class */ (function () {
    function UserAuthorizedGuard(router, authContext, location) {
        var _this = this;
        this.router = router;
        this.authContext = authContext;
        this.location = location;
        this.userAuthorized = new rxjs_1.BehaviorSubject(false);
        authContext.getUserAuthContext().subscribe(function (res) {
            console.log('userAuthorized', res);
            _this.userAuthorized.next(res.userLoaded && res.user != null);
            //this.userAuthorized.repeat();
            if (!res || res.user == null) {
                console.log("navigate to login");
                console.log(_this.location.path());
                _this.router.navigate([""]);
                _this.authContext.returnUrl = _this.location.path();
            }
        });
    }
    UserAuthorizedGuard.prototype.canActivate = function (route, state) {
        console.log('canactivate');
        /*return this.authContext.getUserAuthContext().map(res => res.user != null).do(res => {
            console.log("res", res);
            if (!res)
                this.router.navigateByUrl("");
        });*/
        return this.userAuthorized;
    };
    UserAuthorizedGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router, authContext_service_1.AuthContextService, common_1.Location])
    ], UserAuthorizedGuard);
    return UserAuthorizedGuard;
}());
exports.UserAuthorizedGuard = UserAuthorizedGuard;
//# sourceMappingURL=userAuthorized.guard.js.map