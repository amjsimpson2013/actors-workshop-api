import { EventsService } from "../services/EventsService";
import { Response, Request } from 'express';

export class EventsController {
    private readonly service: EventsService;

    constructor(service: EventsService) {
        this.service = service;
    }

    public async getCurrentEvents(res: Response): Promise<Response> {
        res = await this.service.getCurrentEvents(res);
        return res;
    }

    public async getEventsByType(req: Request<{ eventTypeId: number }>, res: Response): Promise<Response> {
        res = await this.service.getEventsByType(req, res);
        return res;
    }

    public async getEventTypes(res: Response): Promise<Response> {
        res = await this.service.getEventTypes(res);
        return res;
    }

    public async getEventById(req: Request<{ id: number }>, res: Response): Promise<Response> {
        res = await this.service.getEventById(req, res);
        return res;
    }
}