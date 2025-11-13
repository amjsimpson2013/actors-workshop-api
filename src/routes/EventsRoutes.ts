import { Router, Request, Response } from "express";
import { EventsController } from "../controllers/EventsController";
import { eventsController } from "../controllers";

export class EventsRoutes {
    router: Router = Router();
    controller: EventsController = eventsController;

    public defineRoutes(): Router {
        this.router.get('/events/current', async (_req: Request, res: Response) => {
            return await this.controller.getCurrentEvents(res);
        });
        
        this.router.get('/events/getByType/:eventTypeId', async (req: Request<{ eventTypeId: number }>, res: Response) => {
            return await this.controller.getEventsByType(req, res);
        });

        this.router.get('/events-types', async (_req: Request, res: Response) => {
            return await this.controller.getEventTypes(res);
        });

        this.router.get('/events/:id', async (req: Request<{ id: number }>, res: Response) => {
            return await this.controller.getEventById(req, res);
        });

        return this.router;
    }
}