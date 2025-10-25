
import { getCurrentMonthEvents } from '../services/eventService';
import { eventItem } from '../models/eventItem';

export const getEvents = async (): Promise<eventItem[]> => {
    return await getCurrentMonthEvents();
}