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
var userAuth_service_1 = require("./common/services/userAuth.service");
var authContext_service_1 = require("./common/services/authContext.service");
var authContext_model_1 = require("./common/models/authContext.model");
var shared_service_1 = require("./pages/shared/shared.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(userAuthService, authContextService, sharedService) {
        var _this = this;
        this.userAuthService = userAuthService;
        this.authContextService = authContextService;
        this.loading = true;
        sharedService.preloaderDisplayed.subscribe(function (res) {
            _this.loading = res;
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var context = new authContext_model_1.AuthContextModel();
        context.userLoaded = true;
        this.userAuthService.getCurrentUser().subscribe(function (res) {
            if (res)
                context.user = res;
            _this.authContextService.setAuthContext(context);
            setTimeout(function (x) {
                _this.loading = false;
            }, 700);
        }, function (err) {
            _this.authContextService.setAuthContext(context);
            _this.loading = false;
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "admin",
            template: require("./app.component.html")
        }),
        __metadata("design:paramtypes", [userAuth_service_1.UserAuthService, authContext_service_1.AuthContextService,
            shared_service_1.SharedService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map