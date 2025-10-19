import { AdvertisementDisplay, AdvertisementDTO } from "../models/AdvertisementDto";
import { AdvertisementRepository } from "../repositories/AdvertisementRepository";
import { noContent, ok } from "../utils/helpers/ResponseUtil";

export class AdvertisementService {
    private readonly repo: AdvertisementRepository;

    constructor(repo: AdvertisementRepository) {
        this.repo = repo;
    }

    public async getScheduledAdvertisements() {
        const today: Date = new Date();
        const advertisementsDto: AdvertisementDTO[] = await this.repo.getAdvertisementsByDate(today);
        
        if(!advertisementsDto || advertisementsDto.length <= 0)
        {
            return noContent('No scheduled ads found');
        }
        advertisementsDto.sort((advertisementsDto) => advertisementsDto.priorityId);
        
        const advertismentsDisplay = advertisementsDto as AdvertisementDisplay[];
        return ok<AdvertisementDisplay[]>(advertismentsDisplay);
    }
}
