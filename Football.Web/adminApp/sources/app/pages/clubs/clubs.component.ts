import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { ModelWithName } from "../../common/models/base.model";
import { SharedService } from "../shared/shared.service";
import { SharedApiService } from "../shared/services/shared-api.service";
import { ClubsService } from "./services/clubs.service";
import { ClubListItem } from "./models/club-listItem.model";

@Component({
    template: require("./clubs.component.html")
})
export class ClubsComponent {
    countries: ModelWithName<number>[];
    selectedCountry: ModelWithName<number> = null;
    clubs: ClubListItem[];
    filter: ClubsComponentFilter = new ClubsComponentFilter();
    initialized: boolean;

    constructor(private sharedApi: SharedApiService, private sharedService: SharedService,
        private clubsService: ClubsService, private router: Router, private activatedRouter: ActivatedRoute) {
        console.log("clubs constructor");

        this.activatedRouter.queryParams.subscribe(res => {
            this.filter.country = res["country"];
            if (this.initialized)
                this.loadClubs();
        });
    }

    ngOnInit() {
        this.initialized = true;
        console.log("init");
        this.sharedService.showPreloader();
        this.sharedApi.getCountries().subscribe(res => {
            this.countries = res;
            if (this.filter.country)
                this.selectedCountry = this.countries.find(x => x.Id == this.filter.country);
            this.sharedService.hidePreloader();
            this.loadClubs();
        });
    }

    countryChanged() {
        console.log(this.selectedCountry);
        var param: Params;
        if (this.selectedCountry)
            param = {
                country: this.selectedCountry.Id
            };
        this.router.navigate([], {
            queryParams: param,
            relativeTo: this.activatedRouter
        });
        //this.loadClubs();
    }


    private loadClubs() {
        this.sharedService.showPreloader();
        let countryId = this.selectedCountry != null ? this.selectedCountry.Id : null;
        this.clubsService.getClubs(countryId).subscribe(res => {
            this.clubs = res;
            this.sharedService.hidePreloader();
        });
    }
}

export class ClubsComponentFilter {
    country?: number;
}