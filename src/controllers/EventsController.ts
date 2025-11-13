import { EventsService } from "../services/EventsService";
import { Response } from 'express';

export class EventsController {
    private readonly service: EventsService;

    constructor(service: EventsService) {
        this.service = service;
    }

    public async getCurrentEvents(res: Response): Promise<Response> {
        res = await this.service.getCurrentEvents(res);
        return res;
    }
}