import { EmailService } from "../services/EmailService";
import { Response, Request } from 'express';

export class EmailController {
    private readonly service: EmailService;

    constructor(service: EmailService) {
        this.service = service;
    }

    public async saveEmail(res: Response, req: Request): Promise<Response> {
        res = await this.service.saveEmail(res, req);
        return res;
    }
}