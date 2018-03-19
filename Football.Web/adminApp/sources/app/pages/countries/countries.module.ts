import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { CountriesComponent } from "./countries.component";
import { CountriesService } from "./services/countries.service";
import { CountriesCommunicationService} from "./services/countries-communication.service";
import { CountryEditorComponent } from "./country-editor.component";
import { ConfirmDialogComponent } from "../shared/confirm-dialog";
import { CityEditorComponent } from "./city-editor.component";

let routes = RouterModule.forChild([
    {
        path: "", component: CountriesComponent,
        children: [
            { path: ":mode/:id", component: CountryEditorComponent },
            { path: ":mode", component: CountryEditorComponent }
        ]
    }
]);

@NgModule({
    declarations: [CountriesComponent, CountryEditorComponent],
    imports: [RouterModule, CommonModule, FormsModule, routes],
    providers: [CountriesService, CountriesCommunicationService]
})
export class CountriesModule {

}