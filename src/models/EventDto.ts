import { Events } from "../utils/db/context";

export interface IEventData {
    id: number;
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    imageName: string;
    imageType: string;
    eventTypeId: number;
    statusTypeId: number;
    ReoccurenceTypeId: number;
    thumbnailName: string;
    thumbnailType: string;
}

export interface IEventSummary {
    id: number;
    name: string | null;
    description: string | null;
    startDate: Date | undefined;
    endDate: Date | undefined;
    thumbnailName: string | null;
    thumbnailType: string | null;
}

export type EventSummaryDto = IEventSummary;
export type EventDetailDto = IEventData;

export function mapSummaryFromDb(table: Events): EventSummaryDto {
    return {
        id: table.id.__select__,
        name: table.name,
        description: table.description,
        startDate: table.start_date?.__select__,
        endDate: table.end_date?.__select__,
        thumbnailName: table.thumbnail_name,
        thumbnailType: table.thumbnail_type
    }
} 