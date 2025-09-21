
import { Request, Response } from 'express';
import { getCurrentMonthEvents } from '../services/eventService';
import { eventItem } from '../models/eventItem';

export const getEvents = async (req: Request, res: Response): Promise<eventItem[]> => {
    return await getCurrentMonthEvents();
}