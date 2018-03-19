import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { CommonService } from "../../../common/services/common.service";
import { CountryListItemModel } from "../models/country-listItem.model";
import { City } from "../models/city.model";
import {CountryDetails } from "../models/country-details.model";

@Injectable()
export class CountriesService {
    private readonly countriesApiUrl: string = CommonService.ApiUrl + "countries/";

    constructor(private http: Http) {

    }

    getCountries(): Observable<CountryListItemModel[]> {
        return this.http.get(this.countriesApiUrl + "getall").map(res => res.json());
    }

    getCities(countryId: number): Observable<City[]> {
        return this.http.get(this.countriesApiUrl + "getCities/" + countryId).map(res => res.json());
    }

    getCountryDetails(countryId: number): Observable<CountryDetails> {
        return this.http.get(this.countriesApiUrl + countryId).map(res => res.json());
    }

    updateCountry(country: CountryDetails): Observable<CountryDetails> {
        return this.http.put(this.countriesApiUrl, country).map(res => res.json());
    }

    createCountry(country: CountryDetails): Observable<CountryDetails> {
        return this.http.post(this.countriesApiUrl, country).map(res => res.json());
    }

    deleteCountry(id: number): Observable<boolean> {
        return this.http.delete(this.countriesApiUrl + id).map(res => res.ok);
    }

    createCity(city: City): Observable<City> {
        return this.http.post(this.countriesApiUrl + "createcity", city).map(res => res.json());
    }

    updateCity(city: City): Observable<City> {
        return this.http.put(this.countriesApiUrl + "updateCity", city).map(res => res.json());
    }

    deleteCity(cityId: number): Observable<boolean> {
        return this.http.delete(this.countriesApiUrl + "deleteCity/"+ cityId).map(res => res.ok);

    }
}