import { PostService } from "../services/PostService";
import { Response } from 'express';

export class PostController {
    private readonly service: PostService;

    constructor(service: PostService) {
        this.service = service;
    }

    public async getTopThirtyPosts(res: Response): Promise<Response> {
        res = await this.service.getTopThirtyPosts(res);
        return res;
    }
}