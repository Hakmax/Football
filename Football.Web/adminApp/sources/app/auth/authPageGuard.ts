import { Injectable } from "@angular/core";
import { Router, ActivatedRouteSnapshot, ActivatedRoute, RouterStateSnapshot, CanActivate } from "@angular/router";
import { AuthContextService } from "../common/services/authContext.service";
import { Observable } from "rxjs/Observable";
import { Subject, ReplaySubject } from "rxjs";
@Injectable()
export class AuthPageGuard implements CanActivate {
    private canAuth: ReplaySubject<boolean> = new ReplaySubject();

    constructor(private router: Router, private authContextService: AuthContextService) {
        console.log('constr');
        authContextService.getUserAuthContext().subscribe(res => {
            this.canAuth.next(res.userLoaded && res.user == null);
            if (res.userLoaded && res.user != null) {
                setTimeout(x => {
                    let url = "pages/countries";
                    if (this.authContextService.returnUrl)
                        url = this.authContextService.returnUrl;
                    this.router.navigateByUrl(url);
                    console.log('navigate to', url);
                }, 500);
            }
        });
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.canAuth;
    }

}