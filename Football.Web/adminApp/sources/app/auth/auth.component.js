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
var auth_model_1 = require("../common/models/auth.model");
var userAuth_service_1 = require("../common/services/userAuth.service");
var shared_service_1 = require("../pages/shared/shared.service");
var authContext_service_1 = require("../common/services/authContext.service");
var router_1 = require("@angular/router");
var AuthComponent = /** @class */ (function () {
    function AuthComponent(authService, sharedService, authContext, router) {
        this.authService = authService;
        this.sharedService = sharedService;
        this.authContext = authContext;
        this.router = router;
        this.authModel = new auth_model_1.AuthModel();
    }
    AuthComponent.prototype.auth = function (form) {
        var _this = this;
        console.log(this.authModel);
        this.sharedService.showPreloader();
        this.authService.auth(this.authModel).subscribe(function (res) {
            console.log("auth success", res);
            _this.authService.getCurrentUser().subscribe(function (x) {
                if (x) {
                    var cntx = {
                        user: x,
                        userLoaded: true
                    };
                    _this.authContext.setAuthContext(cntx);
                    //this.router.navigateByUrl("pages/countries");
                }
            });
        }, function (err) {
            _this.sharedService.hidePreloader();
        });
    };
    AuthComponent = __decorate([
        core_1.Component({
            template: require("./auth.component.html")
        }),
        __metadata("design:paramtypes", [userAuth_service_1.UserAuthService, shared_service_1.SharedService, authContext_service_1.AuthContextService,
            router_1.Router])
    ], AuthComponent);
    return AuthComponent;
}());
exports.AuthComponent = AuthComponent;
//# sourceMappingURL=auth.component.js.map