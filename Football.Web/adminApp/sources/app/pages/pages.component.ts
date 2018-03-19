import { Component } from "@angular/core";
import { AdminUser } from "../common/models/adminUser.model";
import { AuthContextModel } from "../common/models/authContext.model";
import { AuthContextService } from "../common/services/authContext.service";
import { UserAuthService} from "../common/services/userAuth.service";

@Component({
    template: require("./pages.component.html")
})
export class PagesComponent {
    public user: AdminUser;

    constructor(private authContextService: AuthContextService,
        private userAuthService: UserAuthService) {
        authContextService.getUserAuthContext().subscribe(res => {
            if (res && res.user)
                this.user = res.user;
            else this.user = null;
        });
    }

    logout() {
        
        this.userAuthService.logout().subscribe(res => {
            console.log('logged out');
            this.authContextService.setAuthContext(null);
        });
    }
}