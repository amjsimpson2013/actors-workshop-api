import { advertisementRepository, emailRepository, eventsRepository, postRepository } from "../repositories";
import { AdvertisementService } from "./AdvertisementService";
import { EmailService } from "./EmailService";
import { EventsService } from "./EventsService";
import { PostService } from "./PostService";
import { WebhookService } from "./WebhookService";

export const advertisementService: AdvertisementService = new AdvertisementService(advertisementRepository);
export const webhookService: WebhookService = new WebhookService();
export const postService: PostService = new PostService(postRepository);
export const emailService: EmailService = new EmailService(emailRepository);
export const eventsService: EventsService = new EventsService(eventsRepository);