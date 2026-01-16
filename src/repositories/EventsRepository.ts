import { Event, EventDetailDto, EventSummaryDto, EventType, mapDetailsFromDb, mapSummaryFromDb } from "../models/EventDto";
import { db } from "../utils/db/ActorsWorkshopContext";
import { EventTypeKVs } from "../models/Indexes";

export class EventsRepository {
    private readonly database = db;

    public async getCurrentEvents(): Promise<EventSummaryDto[]> {
        const results = await this.database.selectFrom('events')
            .select(['id', 'name', 'description', 'start_date', 'end_date', 'thumbnail_name', 'thumbnail_type'])
            .limit(3)
            .execute() as unknown as Event[];

        const mappedResults: EventSummaryDto[] = [];
        results.forEach((res) => mappedResults.push(...mapSummaryFromDb(res)));
        return mappedResults;
    }

    public async getEventsByType(eventTypeId: number): Promise<EventSummaryDto[]> {
        const results = await this.database.selectFrom('events')
            .select(['id', 'name', 'description', 'reoccurence_type_id', 'start_date', 'end_date', 'thumbnail_name', 'thumbnail_type'])
            .where('event_type_id', '=', eventTypeId)
            .execute() as unknown as Event[];

        const mappedResults: EventSummaryDto[] = [];
        results.forEach((res) => mappedResults.push(...mapSummaryFromDb(res)));
        return mappedResults;
    }

    public async getEventTypes(): Promise<EventTypeKVs> {
        const results = await this.database.selectFrom('event_types')
            .selectAll('event_types')
            .execute() as unknown as EventType[];

        const mappedResults: EventTypeKVs = [];
        results.forEach(eventType => {
            mappedResults.push({
                id: eventType.id,
                name: eventType.name ?? ''
            })
        });
        return mappedResults;
    }

    public async getEventById(eventId: number): Promise<EventDetailDto> {
        const result = await this.database.selectFrom('events')
            .selectAll('events')
            .where('id', '=', eventId)
            .executeTakeFirst() as unknown as Event;
        
        const mappedResult: EventDetailDto = mapDetailsFromDb(result);
        return mappedResult;
    }
}