import { Component } from "@angular/core";
import { City } from "./models/city.model";
import { SimpleModalComponent } from "ngx-simple-modal";

export interface CityEditorDataModel {
    city: City;
}

export interface CityEditorResultModel {
    city: City;
}

@Component({
    template: require("./city-editor.component.html")
})
export class CityEditorComponent extends SimpleModalComponent<CityEditorDataModel, CityEditorResultModel>{
    editedCity: City;

    mapDataObject(data: CityEditorDataModel): void {
        this.editedCity = data.city;
        console.log(data);
    }

    okClicked() {
        this.result = {
            city: this.editedCity
        };
        this.close();
    }
}