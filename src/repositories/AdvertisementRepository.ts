import { AdvertisementDTO, mapFromDb } from "../models/AdvertisementDto";
import { db } from "../utils/db/ActorsWorkshopContext";
import { Advertisements } from "../utils/db/context";

export class AdvertisementRepository {
    private readonly database = db;

    public async getAdvertisementsByDate(date: Date): Promise<AdvertisementDTO[]> {
        const results = await this.database.selectFrom('advertisements')
            .selectAll('advertisements')
            .where((eb) => eb('start_date', '<=', date)
                .and('end_date', '>=', date))
            .execute() as unknown as Advertisements[];

        const mappedResults: AdvertisementDTO[] = [];
        results.forEach((res) => mappedResults.push(mapFromDb(res)));
        return mappedResults;
    }
}
