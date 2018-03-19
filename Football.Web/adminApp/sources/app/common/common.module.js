"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var userAuth_service_1 = require("./services/userAuth.service");
var authContext_service_1 = require("./services/authContext.service");
var common_service_1 = require("./services/common.service");
var CommonModule = /** @class */ (function () {
    function CommonModule() {
    }
    CommonModule = __decorate([
        core_1.NgModule({
            imports: [http_1.HttpModule],
            providers: [userAuth_service_1.UserAuthService, authContext_service_1.AuthContextService, common_service_1.CommonService]
        })
    ], CommonModule);
    return CommonModule;
}());
exports.CommonModule = CommonModule;
//# sourceMappingURL=common.module.js.map