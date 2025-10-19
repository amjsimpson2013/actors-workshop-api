import { advertisementRepository } from "../repositories";
import { AdvertisementService } from "./AdvertisementService";

export const advertisementService: AdvertisementService = new AdvertisementService(advertisementRepository);