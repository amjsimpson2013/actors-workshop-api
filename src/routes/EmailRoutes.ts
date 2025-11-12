import { emailController } from "../controllers";
import { EmailController } from "../controllers/EmailController";
import { Router, Request, Response } from 'express';

export class EmailRoutes {
    router: Router = Router();
    controller: EmailController = emailController;

    public defineRoutes(): Router {
        this.router.post('/emails/save', async (req: Request, res: Response) => {
            return await this.controller.saveEmail(res, req);
        });
        return this.router;
    }
}