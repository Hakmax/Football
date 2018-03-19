import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { PagesComponent } from "./pages.component";
import { PagesRoutingModule } from "./pages-routing.module";
import { SharedService } from "./shared/shared.service";

@NgModule({
    imports: [PagesRoutingModule, RouterModule, CommonModule],
    declarations: [PagesComponent],
    providers: [SharedService]
})
export class PagesModule {

}