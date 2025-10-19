import { AdvertisementService } from "../services/AdvertisementService";
import { Response } from 'express';

export class AdvertisementController {
    private readonly service: AdvertisementService;

    constructor(service: AdvertisementService) {
        this.service = service;
    } 

    public async getTodaysAdvertisements(res: Response): Promise<Response> {
        res = await this.service.getScheduledAdvertisements();
        return res;
    }
}