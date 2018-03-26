import { ModelWithName } from "../../../common/models/base.model";


export class ClubListItem extends ModelWithName<number>{
    Country: ModelWithName<number>;
    ClubCreationDate?: Date;
}