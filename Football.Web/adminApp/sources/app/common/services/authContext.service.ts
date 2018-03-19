import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { ReplaySubject,BehaviorSubject } from "rxjs";
import { AdminUser } from "../models/adminUser.model";
import { AuthContextModel } from "../models/authContext.model";

@Injectable()
export class AuthContextService {
    private authContext: BehaviorSubject<AuthContextModel> = new BehaviorSubject({ userLoaded: false, user: null });

    returnUrl: string;

    constructor() {
    }

    getUserAuthContext(): Observable<AuthContextModel> {
        return this.authContext;
    }

    setAuthContext(authContext: AuthContextModel) {
        console.log('set', authContext);
        this.authContext.next(authContext);
    }

}

