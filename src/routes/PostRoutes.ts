import { Router, Request, Response } from "express";
import { postController } from "../controllers";
import { PostController } from "../controllers/PostController";

export class PostRoutes {
    router: Router = Router();
    controller: PostController = postController;

    public defineRoutes(): Router {
        this.router.get('/posts', async (_req: Request, res: Response) => {
            return await this.controller.getTopThirtyPosts(res);
        });

        return this.router;
    }
}