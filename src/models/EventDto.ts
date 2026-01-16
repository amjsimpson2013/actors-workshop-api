import { Selectable } from "kysely";
import { Events, EventTypes } from "../utils/db/context";
import { generateReoccuringEvents } from "../utils/helpers/ReoccuringEventUtil";
import { IKeyValueItems } from "./Indexes";

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
    startDate: Date;
    endDate: Date;
    thumbnailName: string | null;
    thumbnailType: string | null;
}

export type EventsByTypes = {
    type: IKeyValueItems,
    events: EventSummaryDto[]
}

export type EventSummaryDto = IEventSummary;
export type EventDetailDto = IEventData;

export function mapSummaryFromDb(table: Event): EventSummaryDto[] {
    if (table.reoccurence_type_id !== null && table.reoccurence_type_id !== undefined) {
        return generateReoccuringEvents(table);
    }
    return [{
        id: table.id,
        name: table.name,
        startDate: table.start_date ?? new Date(),
        endDate: table.end_date ?? new Date(),
        thumbnailName: table.thumbnail_name,
        thumbnailType: table.thumbnail_type
    }]
}

export function mapDetailsFromDb(table: Event): EventDetailDto {
    return {
        id: table.id,
        name: table.name,
        description: table.description,
        startDate: table.start_date ?? undefined,
        endDate: table.end_date ?? undefined,
        thumbnailName: table.thumbnail_name,
        thumbnailType: table.thumbnail_type,
        imageName: table.image_name,
        imageType: table.image_type,
        eventTypeId: table.event_type_id,
        statusTypeId: table.status_type_id,
        reoccurenceTypeId: table.reoccurence_type_id
    }
}

export type EventType = Selectable<EventTypes>;
export type Event = Selectable<Events>;