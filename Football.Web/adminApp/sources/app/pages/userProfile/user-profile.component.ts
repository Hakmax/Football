import { Component } from "@angular/core";
import { Title} from "@angular/platform-browser";
import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";
import { CommonService } from "../../common/services/common.service";
import { UserProfile } from "./models/user-profile.model";
import { SharedService } from "../shared/shared.service";
import { NgForm } from "@angular/forms";

@Component({
    template: require("./user-profile.component.html")
})
export class UserProfileComponent {
    private ApiUrl = CommonService.ApiUrl + "users/";

    private userProfile: UserProfile;
    editedUserProfile: UserProfile;

    constructor(private http: Http, private sharedService: SharedService, private title: Title) {
        this.title.setTitle( "Настройки профиля");
        this.sharedService.showPreloader();

        this.http.get(this.ApiUrl + "userprofile").subscribe(res => {
            console.log(res);
            this.userProfile = Object.assign({}, res.json());
            this.editedUserProfile = res.json();
            this.sharedService.hidePreloader();
        });
    }

    saveProfile(form: NgForm) {
        this.sharedService.showPreloader();
        this.http.put(this.ApiUrl + "saveprofile", this.editedUserProfile).subscribe(res => {

            this.sharedService.hidePreloader();
        });
    }

    cancelChanges() {
        this.editedUserProfile = Object.assign({}, this.userProfile);
    }
}