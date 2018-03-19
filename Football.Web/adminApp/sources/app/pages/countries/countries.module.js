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
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var countries_component_1 = require("./countries.component");
var countries_service_1 = require("./services/countries.service");
var countries_communication_service_1 = require("./services/countries-communication.service");
var country_editor_component_1 = require("./country-editor.component");
var routes = router_1.RouterModule.forChild([
    {
        path: "", component: countries_component_1.CountriesComponent,
        children: [
            { path: ":mode/:id", component: country_editor_component_1.CountryEditorComponent },
            { path: ":mode", component: country_editor_component_1.CountryEditorComponent }
        ]
    }
]);
var CountriesModule = /** @class */ (function () {
    function CountriesModule() {
    }
    CountriesModule = __decorate([
        core_1.NgModule({
            declarations: [countries_component_1.CountriesComponent, country_editor_component_1.CountryEditorComponent],
            imports: [router_1.RouterModule, common_1.CommonModule, forms_1.FormsModule, routes],
            providers: [countries_service_1.CountriesService, countries_communication_service_1.CountriesCommunicationService]
        })
    ], CountriesModule);
    return CountriesModule;
}());
exports.CountriesModule = CountriesModule;
//# sourceMappingURL=countries.module.js.map