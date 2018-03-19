import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { CommonService } from "./common.service";
import { AdminUser } from "../models/adminUser.model";
import { AuthModel } from "../models/auth.model";

@Injectable()
export class UserAuthService {
    private ApiUrl: string = CommonService.ApiUrl + "users/";
    constructor(private http: Http, private commonService: CommonService) {

    }
    
    getCurrentUser(): Observable<AdminUser> {
        return this.http.post(this.ApiUrl + "loadUser", null).
            map(res => {
            if (res.text().length)
                return res.json();
            else return null;
        });
    }

    auth(authModel: AuthModel): Observable<boolean> {
        return this.http.post(this.ApiUrl + "auth", authModel).map(res => res.ok);
    }

    logout(): Observable<any> {
        return this.http.post(this.ApiUrl + "logout", null).map(res => res.ok);
    }
}