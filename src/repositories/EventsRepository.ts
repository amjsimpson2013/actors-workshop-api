import { EventSummaryDto, mapSummaryFromDb } from "../models/EventDto";
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
}