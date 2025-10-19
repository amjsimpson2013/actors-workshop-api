import { AdvertisementDTO } from "../models/AdvertisementDto";
import { db } from "../utils/db/ActorsWorkshopContext";

export class AdvertisementRepository {
    private readonly database = db;

    public async getAdvertisementsByDate(date: Date): Promise<AdvertisementDTO[]> {
        return await this.database.selectFrom('advertisements')
            .selectAll('advertisements')
            .where((eb) => 
                eb('startDate', '<=', date)
                .and('endDate', '>=', date))
            .execute() as AdvertisementDTO[];
    }
}
