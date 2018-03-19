import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthModel } from "../common/models/auth.model";
import { UserAuthService } from "../common/services/userAuth.service";
import { SharedService } from "../pages/shared/shared.service";
import { AuthContextService } from "../common/services/authContext.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    template: require("./auth.component.html")
})
export class AuthComponent {
    public authModel: AuthModel;

    constructor(private authService: UserAuthService, private sharedService: SharedService, private authContext: AuthContextService,
        private router: Router) {
        this.authModel = new AuthModel();
    }

    auth(form: NgForm) {
        console.log(this.authModel);
        this.sharedService.showPreloader();
        this.authService.auth(this.authModel).subscribe(res => {
            console.log("auth success", res);
            this.authService.getCurrentUser().subscribe(x => {
                if (x) {
                    var cntx = {
                        user: x,
                        userLoaded: true
                    };
                    this.authContext.setAuthContext(cntx);
                    //this.router.navigateByUrl("pages/countries");
                }
            });
        }, err => {
            this.sharedService.hidePreloader();
        });
    }
}