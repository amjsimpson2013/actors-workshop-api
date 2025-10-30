import { Request, Response } from 'express';

export class WebhookService {

    constructor() {}

    public async verifyWebhookCall(req: Request, res: Response) {
        if (req.query['hub.verify_token'] === "") {
            res.status(200).send(req.query['hub.challenge']);
        } else {
            res.sendStatus(403);
        }
    }

    public async savePost(req: Request, res: Response) {
        if (req.body.object === 'feed') {
            req.body.entry.forEach(() => {
                //check if the item of the feed is a post
                //for each post we will save the information provided
            });
        }
        res.sendStatus(200);
    }
}