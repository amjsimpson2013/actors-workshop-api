import { Router, Request, Response } from "express";
import { EventsService } from "../services/EventsService";

export class EventsRoutes {
    router: Router = Router();
    private readonly baseUrl: string;
    private readonly service: EventsService;

    constructor(baseUrl: string, service: EventsService) {
        this.baseUrl = baseUrl;
        this.service = service;
    }

    public defineRoutes(): Router {
        this.router.get(this.baseUrl + '/current', async (_req: Request, res: Response) => {
            return await this.service.getCurrentEvents(res);
        });
        
        this.router.get(this.baseUrl + '/getByType', async (_req: Request, res: Response) => {
            return await this.service.getEventsByType(res);
        });

        this.router.get(this.baseUrl + '/types', async (_req: Request, res: Response) => {
            return await this.service.getEventTypes(res);
        });

        this.router.get(this.baseUrl + '/:id', async (req: Request<{ id: number }>, res: Response) => {
            return await this.service.getEventById(req, res);
        });

        return this.router;
    }
}