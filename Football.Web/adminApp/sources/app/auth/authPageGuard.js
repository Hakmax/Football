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
var router_1 = require("@angular/router");
var authContext_service_1 = require("../common/services/authContext.service");
var rxjs_1 = require("rxjs");
var AuthPageGuard = /** @class */ (function () {
    function AuthPageGuard(router, authContextService) {
        var _this = this;
        this.router = router;
        this.authContextService = authContextService;
        this.canAuth = new rxjs_1.ReplaySubject();
        console.log('constr');
        authContextService.getUserAuthContext().subscribe(function (res) {
            _this.canAuth.next(res.userLoaded && res.user == null);
            if (res.userLoaded && res.user != null) {
                setTimeout(function (x) {
                    var url = "pages/countries";
                    if (_this.authContextService.returnUrl)
                        url = _this.authContextService.returnUrl;
                    _this.router.navigateByUrl(url);
                    console.log('navigate to', url);
                }, 500);
            }
        });
    }
    AuthPageGuard.prototype.canActivate = function (route, state) {
        return this.canAuth;
    };
    AuthPageGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router, authContext_service_1.AuthContextService])
    ], AuthPageGuard);
    return AuthPageGuard;
}());
exports.AuthPageGuard = AuthPageGuard;
//# sourceMappingURL=authPageGuard.js.map