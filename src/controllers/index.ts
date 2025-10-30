import { advertisementService, postService, webhookService } from "../services";
import { AdvertisementController } from "./AdvertisementController";
import { PostController } from "./PostController";
import { WebhookController } from "./WebhookController";

export const advertisementController = new AdvertisementController(advertisementService);
export const webhookController = new WebhookController(webhookService);
export const postController = new PostController(postService);