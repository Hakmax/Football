import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { PagesComponent } from "./pages.component";
import { PagesRoutingModule } from "./pages-routing.module";
import { SharedAdminModule } from "./shared/shared-admin.module";

@NgModule({
    imports: [PagesRoutingModule, RouterModule, CommonModule, SharedAdminModule],
    declarations: [PagesComponent]
})
export class PagesModule {

}