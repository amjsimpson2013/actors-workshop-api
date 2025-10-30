import { PostDisplay, PostDto } from "../models/PostDto";
import { PostRepository } from "../repositories/PostRepository";
import { noContent, ok } from "../utils/helpers/ResponseUtil";
import { Response } from 'express';

export class PostService {
    private readonly repo: PostRepository;

    constructor(repo: PostRepository) {
        this.repo = repo;
    }

    public async getTopThirtyPosts(res: Response) {
        const postDto: PostDto[] = await this.repo.getTopThirtyPosts();

        if (!postDto || postDto.length <= 0)
        {
            return noContent(res, 'No posts found');
        }
        postDto.sort((post) => post.createdDate?.getDate() ?? 0);
        
        const postDisplay = postDto as PostDisplay[];
        return ok<PostDisplay[]>(res, postDisplay);
    }
}