import { EmailDto } from "../models/EmailDto";
import { db } from "../utils/db/ActorsWorkshopContext";

export class EmailRepository {
    private readonly database = db;

    public async saveEmail(email: EmailDto): Promise<void> {
        await this.database
            .insertInto('emails')
            .values({
                name: email.name,
                email: email.address,
                message: email.message
            })
            .executeTakeFirst();
    }
}