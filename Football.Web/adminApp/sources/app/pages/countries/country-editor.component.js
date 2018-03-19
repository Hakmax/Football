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
var platform_browser_1 = require("@angular/platform-browser");
var city_model_1 = require("./models/city.model");
var countries_service_1 = require("./services/countries.service");
var country_details_model_1 = require("./models/country-details.model");
var shared_service_1 = require("../shared/shared.service");
var countries_communication_service_1 = require("./services/countries-communication.service");
var common_1 = require("@angular/common");
var city_editor_component_1 = require("./city-editor.component");
var ngx_simple_modal_1 = require("ngx-simple-modal");
var confirm_dialog_1 = require("../shared/confirm-dialog");
var CountryEditorComponent = /** @class */ (function () {
    function CountryEditorComponent(router, activatedRoute, countriesService, title, sharedService, countriesCommunicationService, location, modalService) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.countriesService = countriesService;
        this.title = title;
        this.sharedService = sharedService;
        this.countriesCommunicationService = countriesCommunicationService;
        this.location = location;
        this.modalService = modalService;
        this.componentMode = ComponentMode.Edit;
        this.cities = [];
        activatedRoute.params.subscribe(function (par) {
            console.log("params", par);
            var mode = activatedRoute.snapshot.params["mode"];
            if (mode == "edit") {
                _this.componentMode = ComponentMode.Edit;
                var id = par["id"];
                if (id > 0) {
                    _this.sharedService.showPreloader();
                    _this.id = id;
                    _this.loadCities();
                    _this.loadCountry();
                    _this.title.setTitle("Страны - " + _this.id);
                }
            }
            else if (mode == "create") {
                _this.componentMode = ComponentMode.Create;
                _this.country = new country_details_model_1.CountryDetails();
                _this.editedCountry = Object.assign({}, _this.country);
            }
        });
        this.countriesCommunicationService.countryDeleted.subscribe(function (x) {
            if (_this.country != null && _this.country.Id == x.Id) {
                _this.country = null;
                _this.editedCountry = null;
                /*location.go("countries");
                console.log(this.router.createUrlTree(["./"], {
                    relativeTo: this.activatedRoute
                }));*/
                _this.router.navigate(["../../"], {
                    relativeTo: _this.activatedRoute //, skipLocationChange: true
                });
                //this.router.navigateByUrl("pages/countries");
            }
        });
    }
    CountryEditorComponent.prototype.ngOnInit = function () {
    };
    CountryEditorComponent.prototype.loadCountry = function () {
        var _this = this;
        this.countriesService.getCountryDetails(this.id).subscribe(function (res) {
            _this.country = res;
            _this.editedCountry = Object.assign({}, res);
            _this.sharedService.hidePreloader();
        });
    };
    CountryEditorComponent.prototype.loadCities = function () {
        var _this = this;
        this.countriesService.getCities(this.id).subscribe(function (res) {
            _this.cities = res;
        });
    };
    CountryEditorComponent.prototype.saveCountry = function (form) {
        var _this = this;
        this.sharedService.showPreloader();
        if (this.componentMode == ComponentMode.Edit) {
            this.countriesService.updateCountry(this.editedCountry).subscribe(function (res) {
                _this.country = res;
                _this.editedCountry = Object.assign({}, res);
                _this.sharedService.hidePreloader();
                _this.countriesCommunicationService.fireCountrySavedEvent(res);
            });
        }
        else if (this.componentMode == ComponentMode.Create) {
            this.countriesService.createCountry(this.editedCountry).subscribe(function (res) {
                _this.country = res;
                _this.editedCountry = Object.assign({}, res);
                _this.sharedService.hidePreloader();
                _this.countriesCommunicationService.fireCountrySavedEvent(res);
                _this.router.navigate(["../edit/" + res.Id], { relativeTo: _this.activatedRoute });
            });
        }
        //console.log(this.router.parseUrl(this.router.url).root);
        //this.activatedRoute.snapshot.params["id"] = 1;
        //this.router.navigate([':id',11]);
    };
    CountryEditorComponent.prototype.cancelCountryChanges = function () {
        this.editedCountry = Object.assign({}, this.country);
    };
    CountryEditorComponent.prototype.editCity = function (city) {
        var _this = this;
        this.modalService.addModal(city_editor_component_1.CityEditorComponent, {
            city: Object.assign({}, city)
        }, { closeOnClickOutside: true }).subscribe(function (res) {
            if (res) {
                _this.sharedService.showPreloader();
                _this.countriesService.updateCity(res.city).subscribe(function (x) {
                    var cityInListIndex = _this.cities.findIndex(function (y) { return y.Id == x.Id; });
                    if (cityInListIndex > -1)
                        _this.cities[cityInListIndex] = x;
                    _this.sharedService.hidePreloader();
                });
            }
        });
    };
    CountryEditorComponent.prototype.createCity = function () {
        var _this = this;
        var newCityTemplate = new city_model_1.City();
        newCityTemplate.CountryId = this.editedCountry.Id;
        this.modalService.addModal(city_editor_component_1.CityEditorComponent, {
            city: newCityTemplate
        }, {
            closeOnClickOutside: true
        }).subscribe(function (res) {
            if (res && res.city) {
                _this.sharedService.showPreloader();
                _this.countriesService.createCity(res.city).subscribe(function (x) {
                    _this.cities.push(x);
                    _this.countriesCommunicationService.fireCityAddedEvent(x);
                    _this.sharedService.hidePreloader();
                });
            }
        });
    };
    CountryEditorComponent.prototype.deleteCity = function (city) {
        var _this = this;
        this.modalService.addModal(confirm_dialog_1.ConfirmDialogComponent, {
            title: "Удаление города",
            message: "\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C '" + city.Name + "'?"
        }, {
            closeOnClickOutside: true
        }).subscribe(function (res) {
            if (res && res.okClicked) {
                _this.sharedService.showPreloader();
                _this.countriesService.deleteCity(city.Id).subscribe(function (x) {
                    var index = _this.cities.indexOf(city);
                    if (index > -1) {
                        _this.cities.splice(index, 1);
                        _this.countriesCommunicationService.fireCityRemovedEvent(city);
                    }
                    _this.sharedService.hidePreloader();
                });
            }
        });
    };
    CountryEditorComponent = __decorate([
        core_1.Component({
            template: require("./country-editor.component.html")
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute,
            countries_service_1.CountriesService, platform_browser_1.Title,
            shared_service_1.SharedService,
            countries_communication_service_1.CountriesCommunicationService,
            common_1.Location, ngx_simple_modal_1.SimpleModalService])
    ], CountryEditorComponent);
    return CountryEditorComponent;
}());
exports.CountryEditorComponent = CountryEditorComponent;
var ComponentMode;
(function (ComponentMode) {
    ComponentMode[ComponentMode["Edit"] = 0] = "Edit";
    ComponentMode[ComponentMode["Create"] = 1] = "Create";
})(ComponentMode || (ComponentMode = {}));
//# sourceMappingURL=country-editor.component.js.map