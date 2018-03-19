import { Injectable } from "@angular/core";
import { ReplaySubject } from "rxjs";

@Injectable()
export class SharedService {
    private _preloaderDisplayed: ReplaySubject<boolean> = new ReplaySubject();

    constructor() {
        this._preloaderDisplayed.next(true);
    }

    get preloaderDisplayed(): ReplaySubject<boolean>{
        return this._preloaderDisplayed;
    }

    showPreloader() {
        this._preloaderDisplayed.next(true);
    }

    hidePreloader() {
        setTimeout(x => {
            this._preloaderDisplayed.next(false);
        }, 500);
    }
}