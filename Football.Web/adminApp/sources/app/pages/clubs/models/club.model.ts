import { ModelWithName } from "../../../common/models/base.model";


export class Club extends ModelWithName<number>{
    ClubCreationDate?: Date;
    Country: ModelWithName<number>;
}