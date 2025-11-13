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

        return this.router;
    }
}