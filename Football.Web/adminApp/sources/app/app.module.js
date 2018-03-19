"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var ngx_simple_modal_1 = require("ngx-simple-modal");
var common_module_1 = require("./common/common.module");
//import { CountriesComponent } from "./pages/countries/countries.component";
var authPageGuard_1 = require("./auth/authPageGuard");
var confirm_dialog_1 = require("./pages/shared/confirm-dialog");
var app_component_1 = require("./app.component");
var auth_component_1 = require("./auth/auth.component");
var userAuthorized_guard_1 = require("./userAuthorized.guard");
var pages_module_1 = require("./pages/pages.module");
var city_editor_component_1 = require("./pages/countries/city-editor.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            declarations: [app_component_1.AppComponent, auth_component_1.AuthComponent, confirm_dialog_1.ConfirmDialogComponent, city_editor_component_1.CityEditorComponent],
            providers: [authPageGuard_1.AuthPageGuard, userAuthorized_guard_1.UserAuthorizedGuard],
            exports: [app_component_1.AppComponent],
            imports: [platform_browser_1.BrowserModule, common_module_1.CommonModule, forms_1.FormsModule, ngx_simple_modal_1.SimpleModalModule, pages_module_1.PagesModule, router_1.RouterModule.forRoot([
                    //{ path: "countries", component: CountriesComponent, canActivate: [UserAuthorizedGuard] },
                    { path: "", component: auth_component_1.AuthComponent, canActivate: [authPageGuard_1.AuthPageGuard] }
                    //{ path: "**", redirectTo: "/countries" }
                ])],
            entryComponents: [confirm_dialog_1.ConfirmDialogComponent, city_editor_component_1.CityEditorComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map