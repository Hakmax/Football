import { Component, ChangeDetectorRef } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ClubsService } from "./services/clubs.service";
import { SharedService } from "../shared/shared.service";
import { Club } from "./models/club.model";
import { SharedApiService } from "../shared/services/shared-api.service";
import { ModelWithName } from "../../common/models/base.model";

@Component({
    template: require("./club.editor.component.html")
})
export class ClubEditorComponent {
    private club: Club;
    private editedClub: Club;
    private clubId?: number;
    private countries: ModelWithName<number>[];

    constructor(private router: Router, private activatedRouter: ActivatedRoute,
        private clubsService: ClubsService, private sharedService: SharedService,
        private sharedApi: SharedApiService, private cd: ChangeDetectorRef) {

        console.log("club.editor constructor");
        console.log(activatedRouter.snapshot.params["clubId"]);
        this.clubId = activatedRouter.snapshot.params["clubId"];
        if (this.clubId)
            this.loadClub();
    }

    private loadClub() {
        this.sharedService.showPreloader();
        this.clubsService.getClub(this.clubId).subscribe(res => {
            this.club = Object.assign({}, res);
            this.editedClub = res;
            this.loadCountries();
        });
    }

    private loadCountries() {
        this.sharedService.showPreloader();
        this.sharedApi.getCountries().subscribe(res => {
            this.countries = res;
            this.club.Country = res.find(x => x.Id == this.club.Country.Id);
            this.editedClub.Country = res.find(x => x.Id == this.club.Country.Id);
            console.log(this.editedClub.Country);
            this.cd.detectChanges();
        });
    }


    cancelClubChanges() {
        this.editedClub = Object.assign({}, this.club);
    }

    dateChanged(event) {
        console.log(event);
    }
}