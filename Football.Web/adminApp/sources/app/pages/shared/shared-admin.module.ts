import { NgModule } from "@angular/core";
import {HttpModule } from "@angular/http";
import { SharedService } from "./shared.service";
import { SharedApiService} from "./services/shared-api.service";


@NgModule({
    imports: [HttpModule],
    providers: [SharedService, SharedApiService]
})
export class SharedAdminModule {

}
