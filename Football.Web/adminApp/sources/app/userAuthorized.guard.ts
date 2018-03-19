import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Location } from "@angular/common";
import { Observable } from "rxjs/Observable";
import { ReplaySubject, BehaviorSubject } from "rxjs";

import { AuthContextService } from "./common/services/authContext.service";

@Injectable()
export class UserAuthorizedGuard implements CanActivate{
    private readonly userAuthorized: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor(private router: Router, private authContext: AuthContextService, private location: Location) {
        authContext.getUserAuthContext().subscribe(res => {
            console.log('userAuthorized', res);
            this.userAuthorized.next(res.userLoaded && res.user != null);
            //this.userAuthorized.repeat();
            if (!res || res.user == null) {
                console.log("navigate to login");
                console.log(this.location.path());
                this.router.navigate([""]);
                this.authContext.returnUrl = this.location.path();
            }
        });
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        console.log('canactivate');
        /*return this.authContext.getUserAuthContext().map(res => res.user != null).do(res => {
            console.log("res", res);
            if (!res)
                this.router.navigateByUrl("");
        });*/

        return this.userAuthorized;
    }
}
