import { Router, Response, Request } from "express";
import { AdvertisementController } from "../controllers/AdvertisementController";
import { advertisementController } from "../controllers";

export class AdvertisementRoutes {
    router: Router = Router();
    controller: AdvertisementController = advertisementController;

    public defineRoutes(): Router {
        this.router.get('/advertisements', async (_req: Request, res: Response) => {
            return await this.controller.getTodaysAdvertisements(res);
        });

        return this.router;
    }
}