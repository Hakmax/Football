import { Component, OnInit } from "@angular/core";
import { UserAuthService } from "./common/services/userAuth.service";
import { AuthContextService } from "./common/services/authContext.service";
import { AuthContextModel } from "./common/models/authContext.model";
import { SharedService } from "./pages/shared/shared.service";

@Component({
    selector: "admin",
    template: require("./app.component.html")
})
export class AppComponent implements OnInit {
    loading: boolean = true;

    constructor(private userAuthService: UserAuthService, private authContextService: AuthContextService,
        sharedService: SharedService) {
        sharedService.preloaderDisplayed.subscribe(res => {
            this.loading = res;
        });
    }


    ngOnInit() {
        var context = new AuthContextModel();
        context.userLoaded = true;
        this.userAuthService.getCurrentUser().subscribe(res => {
            if (res)
                context.user = res;
            this.authContextService.setAuthContext(context);
            setTimeout(x => {
                this.loading = false;
            }, 700);
        }, err => {
            this.authContextService.setAuthContext(context);
            this.loading = false;
        });
    }
}