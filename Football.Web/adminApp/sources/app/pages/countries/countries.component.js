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
var countries_service_1 = require("./services/countries.service");
var shared_service_1 = require("../shared/shared.service");
var countries_communication_service_1 = require("./services/countries-communication.service");
var ngx_simple_modal_1 = require("ngx-simple-modal");
var confirm_dialog_1 = require("../shared/confirm-dialog");
var CountriesComponent = /** @class */ (function () {
    function CountriesComponent(countriesService, title, sharedService, countriesCommunication, dialogService) {
        var _this = this;
        this.countriesService = countriesService;
        this.title = title;
        this.sharedService = sharedService;
        this.countriesCommunication = countriesCommunication;
        this.dialogService = dialogService;
        this.countries = [];
        countriesCommunication.countrySaved.subscribe(function (res) {
            _this.loadCountries();
        });
        countriesCommunication.cityAdded.subscribe(function (res) {
            var country = _this.countries.find(function (x) { return x.Id == res.CountryId; });
            if (country != null) {
                country.CitiesNumber += 1;
            }
        });
        countriesCommunication.cityRemoved.subscribe(function (res) {
            var country = _this.countries.find(function (x) { return x.Id == res.CountryId; });
            if (country != null) {
                country.CitiesNumber -= 1;
            }
        });
    }
    CountriesComponent.prototype.ngOnInit = function () {
        this.loadCountries();
    };
    CountriesComponent.prototype.loadCountries = function () {
        var _this = this;
        this.sharedService.showPreloader();
        this.title.setTitle("Страны");
        this.countriesService.getCountries().subscribe(function (res) {
            _this.countries = res;
            _this.sharedService.hidePreloader();
        });
    };
    CountriesComponent.prototype.deleteCountry = function (country) {
        var _this = this;
        var callback = this.dialogService.addModal(confirm_dialog_1.ConfirmDialogComponent, { title: "Удаление", message: "\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C '" + country.Name + "'?" }, { closeOnClickOutside: true }).subscribe(function (res) {
            if (res && res.okClicked) {
                _this.sharedService.showPreloader();
                _this.countriesService.deleteCountry(country.Id).subscribe(function (deleted) {
                    if (deleted) {
                        _this.sharedService.hidePreloader();
                        _this.countries.splice(_this.countries.indexOf(country), 1);
                        _this.countriesCommunication.fireCountryDeletedEvent(country);
                    }
                });
            }
            callback.unsubscribe();
        });
    };
    CountriesComponent = __decorate([
        core_1.Component({
            template: require("./countries.component.html"),
            selector: "countries"
        }),
        __metadata("design:paramtypes", [countries_service_1.CountriesService, platform_browser_1.Title,
            shared_service_1.SharedService,
            countries_communication_service_1.CountriesCommunicationService,
            ngx_simple_modal_1.SimpleModalService])
    ], CountriesComponent);
    return CountriesComponent;
}());
exports.CountriesComponent = CountriesComponent;
//# sourceMappingURL=countries.component.js.map