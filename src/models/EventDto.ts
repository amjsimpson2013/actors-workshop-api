import { Events } from "../utils/db/context";

export interface IEventData {
    id: number;
    name: string | null;
    description: string | null;
    startDate: Date | undefined;
    endDate: Date | undefined;
    imageName: string | null;
    imageType: string | null;
    eventTypeId: number;
    statusTypeId: number | undefined;
    reoccurenceTypeId: number | null;
    thumbnailName: string | null;
    thumbnailType: string | null;
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

export function mapDetailsFromDb(table: Events): EventDetailDto {
    return {
        id: table.id.__select__,
        name: table.name,
        description: table.description,
        startDate: table.start_date?.__select__,
        endDate: table.end_date?.__select__,
        thumbnailName: table.thumbnail_name,
        thumbnailType: table.thumbnail_type,
        imageName: table.image_name,
        imageType: table.image_type,
        eventTypeId: table.event_type_id,
        statusTypeId: table.status_type_id?.__select__,
        reoccurenceTypeId: table.reoccurence_type_id
    }
}