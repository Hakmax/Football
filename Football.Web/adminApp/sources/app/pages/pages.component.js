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
var authContext_service_1 = require("../common/services/authContext.service");
var userAuth_service_1 = require("../common/services/userAuth.service");
var PagesComponent = /** @class */ (function () {
    function PagesComponent(authContextService, userAuthService) {
        var _this = this;
        this.authContextService = authContextService;
        this.userAuthService = userAuthService;
        authContextService.getUserAuthContext().subscribe(function (res) {
            if (res && res.user)
                _this.user = res.user;
            else
                _this.user = null;
        });
    }
    PagesComponent.prototype.logout = function () {
        var _this = this;
        this.userAuthService.logout().subscribe(function (res) {
            console.log('logged out');
            _this.authContextService.setAuthContext(null);
        });
    };
    PagesComponent = __decorate([
        core_1.Component({
            template: require("./pages.component.html")
        }),
        __metadata("design:paramtypes", [authContext_service_1.AuthContextService,
            userAuth_service_1.UserAuthService])
    ], PagesComponent);
    return PagesComponent;
}());
exports.PagesComponent = PagesComponent;
//# sourceMappingURL=pages.component.js.map