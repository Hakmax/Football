"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var CountriesCommunicationService = /** @class */ (function () {
    function CountriesCommunicationService() {
        this._countrySaved = new rxjs_1.ReplaySubject();
        this._countryDeleted = new rxjs_1.ReplaySubject();
        this._cityAdded = new rxjs_1.ReplaySubject();
        this._cityRemoved = new rxjs_1.ReplaySubject();
    }
    Object.defineProperty(CountriesCommunicationService.prototype, "countrySaved", {
        get: function () {
            return this._countrySaved;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CountriesCommunicationService.prototype, "countryDeleted", {
        get: function () {
            return this._countryDeleted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CountriesCommunicationService.prototype, "cityAdded", {
        get: function () {
            return this._cityAdded;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CountriesCommunicationService.prototype, "cityRemoved", {
        get: function () {
            return this._cityRemoved;
        },
        enumerable: true,
        configurable: true
    });
    CountriesCommunicationService.prototype.fireCountrySavedEvent = function (country) {
        this._countrySaved.next(country);
    };
    CountriesCommunicationService.prototype.fireCountryDeletedEvent = function (country) {
        this._countryDeleted.next(country);
    };
    CountriesCommunicationService.prototype.fireCityAddedEvent = function (city) {
        this._cityAdded.next(city);
    };
    CountriesCommunicationService.prototype.fireCityRemovedEvent = function (city) {
        this._cityRemoved.next(city);
    };
    CountriesCommunicationService = __decorate([
        core_1.Injectable()
    ], CountriesCommunicationService);
    return CountriesCommunicationService;
}());
exports.CountriesCommunicationService = CountriesCommunicationService;
//# sourceMappingURL=countries-communication.service.js.map