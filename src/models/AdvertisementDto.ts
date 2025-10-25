import { Saveable } from "./BaseObjects";
import { Advertisements } from "../utils/db/context";

export interface IAdvertisementData {
    linkTypeId: number | null;
    linkedId: number | null;
    priorityId: number;
    startDate: Date;
    endDate: Date; 
}

export interface IAdvertisementDisplay {
    id: number;
    name: string;
    summary: string | null;
    imageName: string;
    imageType: string;
}

export type Advertisement = IAdvertisementData & IAdvertisementDisplay;
export type AdvertisementDTO = Saveable<Advertisement>;
export type AdvertisementDisplay = IAdvertisementDisplay;

export function mapFromDb(table: Advertisements): AdvertisementDTO {
    return {
        id: table.id.__select__,
        name: table.name,
        summary: table.summary,
        imageName: table.image_name,
        imageType: table.image_type,
        linkTypeId: table.link_type_id,
        linkedId: table.linked_id,
        priorityId: table.priority_id,
        startDate: table.start_date.__select__,
        endDate: table.end_date.__select__,
        createdDate: table.created_date.__select__,
        createdUser: table.created_user.__select__,
        updatedDate: table.updated_date?.__select__,
        updatedUser: table.updated_user
    }
}