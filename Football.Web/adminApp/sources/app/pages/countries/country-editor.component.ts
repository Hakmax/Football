import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { City } from "./models/city.model";
import { CountriesService } from "./services/countries.service";
import { CountryDetails } from "./models/country-details.model";
import { NgForm } from "@angular/forms";
import { SharedService } from "../shared/shared.service";
import { CountriesCommunicationService } from "./services/countries-communication.service";
import { Location } from "@angular/common";
import { CityEditorComponent } from "./city-editor.component";
import { SimpleModalService } from "ngx-simple-modal";
import { ConfirmDialogComponent } from "../shared/confirm-dialog";

@Component({
    template: require("./country-editor.component.html")
})
export class CountryEditorComponent implements OnInit {
    private id: number;
    componentMode: ComponentMode = ComponentMode.Edit;
    country: CountryDetails;
    editedCountry: CountryDetails;
    cities: City[] = [];


    constructor(private router: Router, private activatedRoute: ActivatedRoute,
        private countriesService: CountriesService, private title: Title,
        private sharedService: SharedService,
        private countriesCommunicationService: CountriesCommunicationService,
        private location: Location, private modalService: SimpleModalService) {
        activatedRoute.params.subscribe(par => {
            console.log("params", par);
            var mode = activatedRoute.snapshot.params["mode"];
            if (mode == "edit") {
                this.componentMode = ComponentMode.Edit;
                var id = par["id"];

                if (id > 0) {
                    this.sharedService.showPreloader();
                    this.id = id;
                    this.loadCities();
                    this.loadCountry();
                    this.title.setTitle("Страны - " + this.id);
                }
            }
            else if (mode == "create") {
                this.componentMode = ComponentMode.Create;
                this.country = new CountryDetails();
                this.editedCountry = Object.assign({}, this.country);
            }
        });

        this.countriesCommunicationService.countryDeleted.subscribe(x => {
            if (this.country != null && this.country.Id == x.Id) {
                this.country = null;
                this.editedCountry = null;
                /*location.go("countries");
                console.log(this.router.createUrlTree(["./"], {
                    relativeTo: this.activatedRoute
                }));*/
                this.router.navigate(["../../"], {
                    relativeTo: this.activatedRoute//, skipLocationChange: true
                });
                //this.router.navigateByUrl("pages/countries");
            }
        });
    }

    ngOnInit() {
    }

    loadCountry() {
        this.countriesService.getCountryDetails(this.id).subscribe(res => {
            this.country = res;
            this.editedCountry = Object.assign({}, res);
            this.sharedService.hidePreloader();
        });
    }

    loadCities() {
        this.countriesService.getCities(this.id).subscribe(res => {
            this.cities = res;
        });
    }

    saveCountry(form: NgForm) {
        this.sharedService.showPreloader();
        if (this.componentMode == ComponentMode.Edit) {
            this.countriesService.updateCountry(this.editedCountry).subscribe(res => {
                this.country = res;
                this.editedCountry = Object.assign({}, res);
                this.sharedService.hidePreloader();
                this.countriesCommunicationService.fireCountrySavedEvent(res);
            });
        }
        else if (this.componentMode == ComponentMode.Create) {
            this.countriesService.createCountry(this.editedCountry).subscribe(res => {
                this.country = res;
                this.editedCountry = Object.assign({}, res);
                this.sharedService.hidePreloader();
                this.countriesCommunicationService.fireCountrySavedEvent(res);
                this.router.navigate([`../edit/${res.Id}`], { relativeTo: this.activatedRoute });
            });
        }
        //console.log(this.router.parseUrl(this.router.url).root);
        //this.activatedRoute.snapshot.params["id"] = 1;
        //this.router.navigate([':id',11]);
    }

    cancelCountryChanges() {
        this.editedCountry = Object.assign({}, this.country);
    }

    editCity(city: City) {
        this.modalService.addModal(CityEditorComponent, {
            city: Object.assign({}, city)
        }, { closeOnClickOutside: true }).subscribe(res => {
            if (res) {
                this.sharedService.showPreloader();
                this.countriesService.updateCity(res.city).subscribe(x => {
                    var cityInListIndex = this.cities.findIndex(y => y.Id == x.Id);
                    if (cityInListIndex > -1)
                        this.cities[cityInListIndex] = x;
                    this.sharedService.hidePreloader();
                });
            }
        });
    }

    createCity() {
        var newCityTemplate = new City();
        newCityTemplate.CountryId = this.editedCountry.Id;
        this.modalService.addModal(CityEditorComponent, {
            city: newCityTemplate
        }, {
                closeOnClickOutside: true
            }).subscribe(res => {
                if (res && res.city) {
                    this.sharedService.showPreloader();
                    this.countriesService.createCity(res.city).subscribe(x => {
                        this.cities.push(x);
                        this.countriesCommunicationService.fireCityAddedEvent(x);
                        this.sharedService.hidePreloader();
                    });
                }
            });
    }

    deleteCity(city: City) {
        this.modalService.addModal(ConfirmDialogComponent,
            {
                title: "Удаление города",
                message: `Вы действительно хотите удалить '${city.Name}'?`
            },
            {
                closeOnClickOutside: true
            }).subscribe(res => {
                if (res && res.okClicked) {
                    this.sharedService.showPreloader();
                    this.countriesService.deleteCity(city.Id).subscribe(x => {
                        var index = this.cities.indexOf(city);
                        if (index > -1) {
                            this.cities.splice(index, 1);
                            this.countriesCommunicationService.fireCityRemovedEvent(city);
                        }
                        this.sharedService.hidePreloader();
                    });

                }
            });

    }
}

enum ComponentMode {
    Edit,
    Create
}