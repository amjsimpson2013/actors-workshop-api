import { AdvertisementRepository } from "./AdvertisementRepository";
import { EmailRepository } from "./EmailsRepository";
import { EventsRepository } from "./EventsRepository";
import { PostRepository } from "./PostRepository";

export const advertisementRepository: AdvertisementRepository = new AdvertisementRepository();
export const postRepository: PostRepository = new PostRepository();
export const emailRepository: EmailRepository = new EmailRepository();
export const eventsRepository: EventsRepository = new EventsRepository();