import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { CommonService } from "../../../common/services/common.service";
import { ModelWithName } from "../../../common/models/base.model";

@Injectable()
export class SharedApiService {
    private ApiUrl: string = CommonService.ApiUrl + "common/";

    constructor(private http: Http) { }

    getCountries(): Observable<ModelWithName<number>[]> {
        return this.http.get(this.ApiUrl + "getcountries").map(res => res.json());
    }

}