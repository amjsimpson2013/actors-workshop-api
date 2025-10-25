import { advertisementService } from "../services";
import { AdvertisementController } from "./AdvertisementController";

export const advertisementController = new AdvertisementController(advertisementService);