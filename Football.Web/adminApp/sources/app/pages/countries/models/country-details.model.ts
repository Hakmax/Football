import { ModelWithName } from "../../../common/models/base.model";
import { City } from "./city.model";

export class CountryDetails extends ModelWithName<number> {
    LatinName: string;
}