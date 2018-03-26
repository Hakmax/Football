import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule, Route } from "@angular/router";
import { ClubsComponent } from "./clubs.component";
import { SharedAdminModule } from "../shared/shared-admin.module";
import { ClubsService } from "./services/clubs.service";
import {ClubEditorComponent } from "./club.editor.component";

let routes = RouterModule.forChild([
    { path: "", component: ClubsComponent },
    { path: "edit/:clubId", component: ClubEditorComponent }
]);

@NgModule({
    declarations: [ClubsComponent, ClubEditorComponent],
    providers: [ClubsService],
    imports: [CommonModule, FormsModule, RouterModule, routes, SharedAdminModule]
})
export class ClubsModule {

}