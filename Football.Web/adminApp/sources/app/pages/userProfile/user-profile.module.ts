import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { UserProfileComponent } from "./user-profile.component";

@NgModule({
    declarations: [UserProfileComponent],
    imports: [RouterModule, CommonModule, FormsModule, RouterModule.forChild([{
        path: "", component: UserProfileComponent
    }])]
})
export class UserProfileModule {

}