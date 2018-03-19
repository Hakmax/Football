"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var pages_component_1 = require("./pages.component");
var userAuthorized_guard_1 = require("../userAuthorized.guard");
var countries_module_1 = require("./countries/countries.module");
var user_profile_module_1 = require("./userProfile/user-profile.module");
var routes = router_1.RouterModule.forChild([
    {
        path: "pages", component: pages_component_1.PagesComponent, canActivate: [userAuthorized_guard_1.UserAuthorizedGuard], children: [
            { path: "countries", loadChildren: function () { return countries_module_1.CountriesModule; } },
            { path: "userProfile", loadChildren: function () { return user_profile_module_1.UserProfileModule; } }
        ]
    }
]);
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = __decorate([
        core_1.NgModule({
            imports: [routes]
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());
exports.PagesRoutingModule = PagesRoutingModule;
//# sourceMappingURL=pages-routing.module.js.map