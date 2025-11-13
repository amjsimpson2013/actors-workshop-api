import { advertisementService, emailService, eventsService, postService, webhookService } from "../services";
import { AdvertisementController } from "./AdvertisementController";
import { EmailController } from "./EmailController";
import { EventsController } from "./EventsController";
import { PostController } from "./PostController";
import { WebhookController } from "./WebhookController";

export const advertisementController = new AdvertisementController(advertisementService);
export const webhookController = new WebhookController(webhookService);
export const postController = new PostController(postService);
export const emailController = new EmailController(emailService);
export const eventsController = new EventsController(eventsService);