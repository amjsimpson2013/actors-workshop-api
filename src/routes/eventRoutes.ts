import { Router } from "express";
import { Response } from 'express';
import { getEvents } from "../controllers/eventController";

const router = Router();

router.get('/events', async (res: Response) => {
    const events = await getEvents();
    return res.json(events);
});

export default router;