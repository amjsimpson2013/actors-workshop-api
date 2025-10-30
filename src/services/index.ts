import { advertisementRepository, postRepository } from "../repositories";
import { AdvertisementService } from "./AdvertisementService";
import { PostService } from "./PostService";
import { WebhookService } from "./WebhookService";

export const advertisementService: AdvertisementService = new AdvertisementService(advertisementRepository);
export const webhookService: WebhookService = new WebhookService();
export const postService: PostService = new PostService(postRepository);