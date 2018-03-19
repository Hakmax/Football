import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { CountriesService } from "./services/countries.service";
import { CountryListItemModel } from "./models/country-listItem.model";
import { SharedService } from "../shared/shared.service";
import { CountriesCommunicationService } from "./services/countries-communication.service";
import { SimpleModalService } from "ngx-simple-modal";
import { ConfirmDialogComponent } from "../shared/confirm-dialog";

@Component({
    template: require("./countries.component.html"),
    selector: "countries"
})
export class CountriesComponent implements OnInit {
    countries: CountryListItemModel[] = [];

    constructor(private countriesService: CountriesService, private title: Title,
        private sharedService: SharedService,
        private countriesCommunication: CountriesCommunicationService,
        private dialogService: SimpleModalService) {
        countriesCommunication.countrySaved.subscribe(res => {
            this.loadCountries();
        });
        countriesCommunication.cityAdded.subscribe(res => {
            var country = this.countries.find(x => x.Id == res.CountryId);
            if (country != null) {
                country.CitiesNumber += 1;
            }
        });

        countriesCommunication.cityRemoved.subscribe(res => {
            var country = this.countries.find(x => x.Id == res.CountryId);
            if (country != null) {
                country.CitiesNumber -= 1;
            }
        });
    }

    ngOnInit() {
        this.loadCountries();
    }

    private loadCountries() {
        this.sharedService.showPreloader();
        this.title.setTitle("Страны");
        this.countriesService.getCountries().subscribe(res => {
            this.countries = res;
            this.sharedService.hidePreloader();
        });
    }

    deleteCountry(country: CountryListItemModel) {
        var callback = this.dialogService.addModal(ConfirmDialogComponent, { title: "Удаление", message: `Вы действительно хотите удалить '${country.Name}'?` },
            { closeOnClickOutside: true }).subscribe(res => {
                if (res && res.okClicked) {
                    this.sharedService.showPreloader();
                    this.countriesService.deleteCountry(country.Id).subscribe(deleted => {
                        if (deleted) {
                            this.sharedService.hidePreloader();
                            this.countries.splice(this.countries.indexOf(country), 1);
                            this.countriesCommunication.fireCountryDeletedEvent(country);
                        }
                    });
                }
                callback.unsubscribe();
            });
    }

}