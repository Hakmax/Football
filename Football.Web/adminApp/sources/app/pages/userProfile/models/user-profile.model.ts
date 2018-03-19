import { ModelWithName} from "../../../common/models/base.model";

export class UserProfile extends ModelWithName<number>{
    FullName: string;
    About: string;
    Email: string;
    BirthDate: Date;
}