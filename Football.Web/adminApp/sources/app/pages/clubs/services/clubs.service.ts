import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { CommonService } from "../../../common/services/common.service";
import { ClubListItem } from "../models/club-listItem.model";
import {Club } from "../models/club.model";

@Injectable()
export class ClubsService {
    private ApiUrl: string = CommonService.ApiUrl + "clubs/";

    constructor(private http: Http) {

    }

    getClubs(countryId?: number): Observable<ClubListItem[]> {
        let url = this.ApiUrl+ "getall";
        if (countryId)
            url += `/${countryId}`;
        return this.http.get(url).map(res => res.json());
    }

    getClub(clubId: number): Observable<Club> {
        return this.http.get(this.ApiUrl+`/${clubId}`).map(res => res.json());
    }
}