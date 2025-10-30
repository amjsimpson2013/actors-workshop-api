import { Request, Response } from 'express';
import { WebhookService } from '../services/WebhookService';

export class WebhookController {
    private readonly service: WebhookService;

    constructor(service: WebhookService) {
        this.service = service;
    }

    public async verifyWebhookCall(req: Request, res: Response): Promise<void> {
        await this.service.verifyWebhookCall(req, res);
    }

    public async savePost(req: Request, res: Response): Promise<void> {
        await this.service.savePost(req, res);
    }
}