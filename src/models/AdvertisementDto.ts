import { Saveable } from "./BaseObjects";

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
    image: Buffer;
}

export type Advertisement = IAdvertisementData & IAdvertisementDisplay;
export type AdvertisementDTO = Saveable<Advertisement>;
export type AdvertisementDisplay = IAdvertisementDisplay;