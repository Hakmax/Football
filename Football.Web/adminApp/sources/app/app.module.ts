import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { SimpleModalModule } from "ngx-simple-modal";
import { CommonModule } from "./common/common.module";
//import { CountriesComponent } from "./pages/countries/countries.component";
import { AuthPageGuard } from "./auth/authPageGuard";
import { ConfirmDialogComponent } from "./pages/shared/confirm-dialog";

import { AppComponent } from "./app.component";
import { AuthComponent } from "./auth/auth.component";
import { UserAuthorizedGuard } from "./userAuthorized.guard";
import { PagesModule } from "./pages/pages.module";
import { CityEditorComponent } from "./pages/countries/city-editor.component";

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent, AuthComponent, ConfirmDialogComponent, CityEditorComponent],
    providers: [AuthPageGuard, UserAuthorizedGuard],
    exports: [AppComponent],
    imports: [BrowserModule, CommonModule, FormsModule, SimpleModalModule, PagesModule, RouterModule.forRoot([
        //{ path: "countries", component: CountriesComponent, canActivate: [UserAuthorizedGuard] },
        { path: "", component: AuthComponent, canActivate: [AuthPageGuard] }
        //{ path: "**", redirectTo: "/countries" }
    ])],
    entryComponents: [ConfirmDialogComponent, CityEditorComponent]
})
export class AppModule {

}