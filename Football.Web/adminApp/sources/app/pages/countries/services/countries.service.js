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
var http_1 = require("@angular/http");
var common_service_1 = require("../../../common/services/common.service");
var CountriesService = /** @class */ (function () {
    function CountriesService(http) {
        this.http = http;
        this.countriesApiUrl = common_service_1.CommonService.ApiUrl + "countries/";
    }
    CountriesService.prototype.getCountries = function () {
        return this.http.get(this.countriesApiUrl + "getall").map(function (res) { return res.json(); });
    };
    CountriesService.prototype.getCities = function (countryId) {
        return this.http.get(this.countriesApiUrl + "getCities/" + countryId).map(function (res) { return res.json(); });
    };
    CountriesService.prototype.getCountryDetails = function (countryId) {
        return this.http.get(this.countriesApiUrl + countryId).map(function (res) { return res.json(); });
    };
    CountriesService.prototype.updateCountry = function (country) {
        return this.http.put(this.countriesApiUrl, country).map(function (res) { return res.json(); });
    };
    CountriesService.prototype.createCountry = function (country) {
        return this.http.post(this.countriesApiUrl, country).map(function (res) { return res.json(); });
    };
    CountriesService.prototype.deleteCountry = function (id) {
        return this.http.delete(this.countriesApiUrl + id).map(function (res) { return res.ok; });
    };
    CountriesService.prototype.createCity = function (city) {
        return this.http.post(this.countriesApiUrl + "createcity", city).map(function (res) { return res.json(); });
    };
    CountriesService.prototype.updateCity = function (city) {
        return this.http.put(this.countriesApiUrl + "updateCity", city).map(function (res) { return res.json(); });
    };
    CountriesService.prototype.deleteCity = function (cityId) {
        return this.http.delete(this.countriesApiUrl + "deleteCity/" + cityId).map(function (res) { return res.ok; });
    };
    CountriesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], CountriesService);
    return CountriesService;
}());
exports.CountriesService = CountriesService;
//# sourceMappingURL=countries.service.js.map