import { Router, Response, Request } from "express";
import { AdvertisementService } from "../services/AdvertisementService";

export class AdvertisementRoutes {
    router: Router = Router();
    private readonly baseUrl: string;
        private readonly service: AdvertisementService;
    
        constructor(baseUrl: string, service: AdvertisementService) {
            this.baseUrl = baseUrl;
            this.service = service;
        }

    public defineRoutes(): Router {
        this.router.get(this.baseUrl, async (_req: Request, res: Response) => {
            return await this.service.getScheduledAdvertisements(res);
        });

        return this.router;
    }
}