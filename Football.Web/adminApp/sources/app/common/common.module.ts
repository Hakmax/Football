import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { UserAuthService } from "./services/userAuth.service";
import { AuthContextService } from "./services/authContext.service";
import { CommonService } from "./services/common.service";

@NgModule({
    imports: [HttpModule],
    providers: [UserAuthService,AuthContextService, CommonService]
})
export class CommonModule { }