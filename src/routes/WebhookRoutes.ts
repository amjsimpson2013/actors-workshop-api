import { Router, Request, Response } from "express";
import { webhookController } from "../controllers";
import { WebhookController } from "../controllers/WebhookController";

export class WebhookRoutes {
    router: Router = Router();
    controller: WebhookController = webhookController;

    public defineRoutes(): Router {
        this.router.get('/webhook', async (req: Request, res: Response) => {
            await this.controller.verifyWebhookCall(req, res);
        });

        this.router.post('/webhook', async (req: Request, res: Response) => {
            await this.controller.savePost(req, res);
        });

        return this.router;
    }
}