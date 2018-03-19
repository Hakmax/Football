import { Injectable } from "@angular/core";
import { ReplaySubject } from "rxjs";
import { Observable } from "rxjs";
import { CountryDetails } from "../models/country-details.model";
import { CountryListItemModel } from "../models/country-listItem.model";
import {City } from "../models/city.model";

@Injectable()
export class CountriesCommunicationService {
    private _countrySaved: ReplaySubject<CountryDetails> = new ReplaySubject();
    private _countryDeleted: ReplaySubject<CountryListItemModel> = new ReplaySubject();
    private _cityAdded: ReplaySubject<City> = new ReplaySubject();
    private _cityRemoved: ReplaySubject<City> = new ReplaySubject();

    get countrySaved(): Observable<CountryDetails> {
        return this._countrySaved;
    }

    get countryDeleted(): Observable<CountryListItemModel> {
        return this._countryDeleted;
    }

    get cityAdded(): Observable<City> {
        return this._cityAdded;
    }

    get cityRemoved(): Observable<City> {
        return this._cityRemoved;
    }

    fireCountrySavedEvent(country: CountryDetails) {
        this._countrySaved.next(country);
    }

    fireCountryDeletedEvent(country: CountryListItemModel) {
        this._countryDeleted.next(country);
    }

    fireCityAddedEvent(city: City) {
        this._cityAdded.next(city);
    }

    fireCityRemovedEvent(city: City) {
        this._cityRemoved.next(city);
    }
}