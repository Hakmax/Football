import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { UserAuthorizedGuard } from "../userAuthorized.guard";
import { CountriesModule } from "./countries/countries.module";
import { UserProfileModule } from "./userProfile/user-profile.module";
import { ClubsModule } from "./clubs/clubs.module";

var routes = RouterModule.forChild([
    {
        path: "pages", component: PagesComponent, canActivate: [UserAuthorizedGuard], children: [
            { path: "countries", loadChildren: () => CountriesModule },
            { path: "userProfile", loadChildren: () => UserProfileModule },
            { path: "clubs", loadChildren: () => ClubsModule }
        ]
    }
]);

@NgModule({
    imports: [routes]
})
export class PagesRoutingModule {

}