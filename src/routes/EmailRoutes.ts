import { Router, Request, Response } from 'express';
import { EmailService } from "../services/EmailService";

export class EmailRoutes {
    router: Router = Router();
    private readonly baseUrl: string;
    private readonly service: EmailService;

    constructor(baseUrl: string, service: EmailService) {
        this.baseUrl = baseUrl;
        this.service = service;
    }

    public defineRoutes(): Router {
        this.router.post(this.baseUrl + '/save', async (req: Request, res: Response) => {
            return await this.service.saveEmail(res, req);
        });
        return this.router;
    }
}