import { mapFromNullable } from "../models/EmailDto";
import { EmailRepository } from "../repositories/EmailsRepository";
import { ok, uncaught } from "../utils/helpers/ResponseUtil";
import { Response, Request } from 'express';

export class EmailService {
    private readonly repo: EmailRepository;

    constructor(repo: EmailRepository) {
        this.repo = repo;
    }

    public async saveEmail(res: Response, req: Request) {
        const email = req.body;
        console.log(email);

        if (email.name == null) return uncaught(res, 'A name is required to send message.');
        if (email.email == null) return uncaught(res, 'An email is required to send message.');
        if (email.message == null) return uncaught(res, 'A message is required to send message.');

        const dto = mapFromNullable(email);
        await this.repo.saveEmail(dto);
        return ok(res, dto);
    }
}