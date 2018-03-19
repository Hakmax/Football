import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { UserAuthorizedGuard } from "../userAuthorized.guard";
import { CountriesModule } from "./countries/countries.module";
import { UserProfileModule } from "./userProfile/user-profile.module";

var routes = RouterModule.forChild([
    {
        path: "pages", component: PagesComponent, canActivate: [UserAuthorizedGuard], children: [
            { path: "countries", loadChildren: () => CountriesModule },
            { path: "userProfile", loadChildren: () => UserProfileModule }]
    }
]);

@NgModule({
    imports: [routes]
})
export class PagesRoutingModule {

}