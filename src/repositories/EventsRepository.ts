import { EventDetailDto, EventSummaryDto, mapDetailsFromDb, mapSummaryFromDb } from "../models/EventDto";
import { db } from "../utils/db/ActorsWorkshopContext";
import { Events } from "../utils/db/context";

export class EventsRepository {
    private readonly database = db;

    public async getCurrentEvents(): Promise<EventSummaryDto[]> {
        const today = new Date();
        const results = await this.database.selectFrom('events')
            .select(['id', 'name', 'description', 'start_date', 'end_date', 'thumbnail_name', 'thumbnail_type'])
            .where('start_date', '>=', today)
            .limit(3)
            .execute() as unknown as Events[];

        const mappedResults: EventSummaryDto[] = [];
        results.forEach((res) => mappedResults.push(mapSummaryFromDb(res)));
        return mappedResults;
    }

    public async getEventsByType(eventTypeId: number): Promise<EventSummaryDto[]> {
        const results = await this.database.selectFrom('events')
            .select(['id', 'name', 'description', 'start_date', 'end_date', 'thumbnail_name', 'thumbnail_type'])
            .where('event_type_id', '=', eventTypeId)
            .execute() as unknown as Events[];

        const mappedResults: EventSummaryDto[] = [];
        results.forEach((res) => mappedResults.push(mapSummaryFromDb(res)));
        return mappedResults;
    }

    public async getEventById(eventId: number): Promise<EventDetailDto> {
        const result = await this.database.selectFrom('events')
            .selectAll('events')
            .where('id', '=', eventId)
            .executeTakeFirst() as unknown as Events;
        
        const mappedResult: EventDetailDto = mapDetailsFromDb(result);
        return mappedResult;
    }
}