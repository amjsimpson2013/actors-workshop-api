import { Router, Response } from "express";
import { AdvertisementController } from "../controllers/AdvertisementController";
import { advertisementController } from "../controllers";

export class AdvertisementRoutes {
    router: Router = Router();
    controller: AdvertisementController = advertisementController;

    public defineRoutes(): Router {
        this.router.get('/advertisements', async (res: Response) => {
            return await this.controller.getTodaysAdvertisements(res);
        });

        return this.router;
    }
}