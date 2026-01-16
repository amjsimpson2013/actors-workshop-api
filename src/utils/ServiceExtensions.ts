
import { WebhookRoutes } from "../routes/WebhookRoutes";
import { AdvertisementRoutes } from "../routes/AdvertisementRoutes";
import { PostRoutes } from "../routes/PostRoutes";
import { EmailRoutes } from "../routes/EmailRoutes";
import { EventsRoutes } from "../routes/EventsRoutes";
import { AdvertisementRepository } from "../repositories/AdvertisementRepository";
import { PostRepository } from "../repositories/PostRepository";
import { EmailRepository } from "../repositories/EmailsRepository";
import { EventsRepository } from "../repositories/EventsRepository";
import { AdvertisementService } from "../services/AdvertisementService";
import { WebhookService } from "../services/WebhookService";
import { PostService } from "../services/PostService";
import { EmailService } from "../services/EmailService";
import { EventsService } from "../services/EventsService";

const advertisementRepository: AdvertisementRepository = new AdvertisementRepository();
const postRepository: PostRepository = new PostRepository();
const emailRepository: EmailRepository = new EmailRepository();
const eventsRepository: EventsRepository = new EventsRepository();

const advertisementService: AdvertisementService = new AdvertisementService(advertisementRepository);
const webhookService: WebhookService = new WebhookService();
const postService: PostService = new PostService(postRepository);
const emailService: EmailService = new EmailService(emailRepository);
const eventsService: EventsService = new EventsService(eventsRepository);

export const advertisementRoutes: AdvertisementRoutes = new AdvertisementRoutes('/advertisements', advertisementService);
export const webhookRoutes: WebhookRoutes = new WebhookRoutes('/webhook', webhookService);
export const postRoutes: PostRoutes = new PostRoutes('/posts', postService);
export const emailRoutes: EmailRoutes = new EmailRoutes('/emails', emailService);
export const eventsRoutes: EventsRoutes = new EventsRoutes('/events', eventsService);