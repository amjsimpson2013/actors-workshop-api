import { EventSummaryDto } from "../models/EventDto";
import { EventsRepository } from "../repositories/EventsRepository";
import { noContent, ok } from "../utils/helpers/ResponseUtil";
import { Response } from 'express';

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
}