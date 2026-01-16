import { Router, Request, Response } from "express";
import { WebhookService } from "../services/WebhookService";

export class WebhookRoutes {
    router: Router = Router();
    private readonly baseUrl: string;
    private readonly service: WebhookService;

    constructor(baseUrl: string, service: WebhookService) {
        this.baseUrl = baseUrl;
        this.service = service;
    }

    public defineRoutes(): Router {
        this.router.get(this.baseUrl, async (req: Request, res: Response) => {
            await this.service.verifyWebhookCall(req, res);
        });

        this.router.post(this.baseUrl, async (req: Request, res: Response) => {
            await this.service.savePost(req, res);
        });

        return this.router;
    }
}