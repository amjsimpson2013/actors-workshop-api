import { Router } from "express";
import { Request, Response } from 'express';
import { getEvents } from "../controllers/eventController";

const router = Router();

router.get('/events', async (req: Request, res: Response) => {
    var events = await getEvents(req, res);
    return res.json(events);
});

export default router;