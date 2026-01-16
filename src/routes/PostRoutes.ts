import { Router, Request, Response } from "express";
import { PostService } from "../services/PostService";

export class PostRoutes {
    router: Router = Router();
    private readonly baseUrl: string;
    private readonly service: PostService;
    
    constructor(baseUrl: string, service: PostService) {
        this.baseUrl = baseUrl;
        this.service = service;
    }

    public defineRoutes(): Router {
        this.router.get(this.baseUrl, async (_req: Request, res: Response) => {
            return await this.service.getTopThirtyPosts(res);
        });

        return this.router;
    }
}