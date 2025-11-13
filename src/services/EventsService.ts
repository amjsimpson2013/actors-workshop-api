import { EventDetailDto, EventSummaryDto } from "../models/EventDto";
import { EventTypes } from "../models/Indexes";
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

    public async getEventsByType(req: Request<{ eventTypeId: number }>, res: Response) {
        const eventTypeId = Number(req.params.eventTypeId);
        const eventSummaryDtos: EventSummaryDto[] = await this.repo.getEventsByType(eventTypeId);

        if (!eventSummaryDtos || eventSummaryDtos.length <= 0) {
            return noContent(res, 'No current events found');
        }
        eventSummaryDtos.sort((event) => event.startDate?.getDate() ?? 0);

        return ok<EventSummaryDto[]>(res, eventSummaryDtos);
    }

    public async getEventTypes(res: Response) {
        return ok(res, EventTypes);
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