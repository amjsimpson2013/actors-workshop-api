import { mapFromDb, PostDto } from "../models/PostDto";
import { db } from "../utils/db/ActorsWorkshopContext";
import { Posts } from "../utils/db/context";

export class PostRepository {
    private readonly database = db;

    public async getTopThirtyPosts(): Promise<PostDto[]> {
        const results = await this.database.selectFrom('posts')
            .selectAll('posts')
            .limit(30)
            .execute() as unknown as Posts[];

        const mappedResults: PostDto[] = [];
        results.forEach((res) => mappedResults.push(mapFromDb(res)));
        return mappedResults;
    }
}