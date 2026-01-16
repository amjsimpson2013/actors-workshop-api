import { EventDetailDto, EventsByTypes, EventSummaryDto } from "../models/EventDto";
import { EventTypeKVs } from "../models/Indexes";
import { EventsRepository } from "../repositories/EventsRepository";
import { noContent, notFound, ok } from "../utils/helpers/ResponseUtil";
import { Response, Request } from 'express';

export class EventsService {
    private readonly repo: EventsRepository;

    constructor(repo: EventsRepository) {
        this.repo = repo;
    }

    public async getCurrentEvents(res: Response) {
        const eventSummaryDto: EventSummaryDto[] = await this.repo.getCurrentEvents();

        if (!eventSummaryDto || eventSummaryDto.length <= 0)
        {
            return noContent(res, 'No current events found');
        }
        eventSummaryDto.sort((event) => event.startDate?.getDate() ?? 0);

        return ok<EventSummaryDto[]>(res, eventSummaryDto);
    }

    public async getEventsByType(res: Response) {
        const eventTypes = await this.repo.getEventTypes();
        const eventsByTypes: EventsByTypes[] = [];
        for(const eventType of eventTypes) {
            const eventSummaryDtos = await this.repo.getEventsByType(eventType.id);
            eventsByTypes.push({
                type: eventType,
                events: eventSummaryDtos
            });
        }

        if (!eventsByTypes || eventsByTypes.length <= 0) {
            return noContent(res, 'No current events found');
        }

        return ok<EventsByTypes[]>(res, eventsByTypes);
    }

    public async getEventTypes(res: Response) {
        const results = await this.repo.getEventTypes();
        return ok<EventTypeKVs>(res, results);
    }

    public async getEventById(req: Request<{ id: number }>, res: Response) {
        const eventId = Number(req.params.id);
        const eventDetailDto: EventDetailDto = await this.repo.getEventById(eventId);

        if (!eventDetailDto) {
            return notFound(res, 'No event found');
        }
        return ok<EventDetailDto>(res, eventDetailDto);
    }
}