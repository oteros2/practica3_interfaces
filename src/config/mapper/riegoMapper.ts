import { RiegoInfo } from "../entities/riegoInfo";
import { RiegoResponse } from "../responses/riegoResponse";

export const riegoMapper = (item: RiegoResponse): RiegoInfo => {
    return {
        name: item.name,
        values: item.values
    }
}