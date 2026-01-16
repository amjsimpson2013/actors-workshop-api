import { EventSummaryDto, Event } from "../../models/EventDto";


enum ReocurrenceType {
    Daily = 1,
    Weekly = 2,
    BiWeekly = 3,
    Monthly = 4,
    Yearly = 5
}

export function generateReoccuringEvents(event: Event): EventSummaryDto[] {
    const reoccuringEvents: EventSummaryDto[] = [];
    let endDate = event.end_date;
    let startDate = event.start_date ?? new Date();
    if(startDate < new Date()) {
        startDate = new Date();
    }
    
    switch (event.reoccurence_type_id) {
        case ReocurrenceType.Daily:
            if(endDate === undefined || endDate === null) {  
                endDate = new Date();
                endDate.setDate(startDate.getDate() + 7);
            }
            while(startDate < endDate) {
                const eventEndDate = new Date();
                eventEndDate.setDate(startDate.getDate() + 1);
                eventEndDate.setTime(endDate.getTime());

                reoccuringEvents.push({
                    id: event.id,
                    name: event.name,
                    startDate: startDate,
                    endDate: eventEndDate,
                    thumbnailName: event.thumbnail_name,
                    thumbnailType: event.thumbnail_type
                });
                
                startDate.setDate(eventEndDate.getDate());
                startDate.setMonth(eventEndDate.getMonth());
                startDate.setFullYear(eventEndDate.getFullYear());
            }
            break;
        case ReocurrenceType.Weekly:
            if(endDate === undefined || endDate === null) {  
                endDate = new Date();
                endDate.setMonth(startDate.getMonth() + 3);
            }

            while(startDate < endDate) {
                const eventEndDate = new Date(startDate);
                eventEndDate.setDate(eventEndDate.getDate() + 7);
                eventEndDate.setHours(endDate.getHours());
                eventEndDate.setMinutes(endDate.getMinutes());

                const reoccuringEvent = {
                    id: event.id,
                    name: event.name,
                    startDate: startDate,
                    endDate: eventEndDate,
                    thumbnailName: event.thumbnail_name,
                    thumbnailType: event.thumbnail_type
                };

                reoccuringEvents.push(reoccuringEvent);

                startDate.setDate(eventEndDate.getDate());
                startDate.setMonth(eventEndDate.getMonth());
                startDate.setFullYear(eventEndDate.getFullYear());
            }
            break;
        case ReocurrenceType.BiWeekly:
            if(endDate === undefined || endDate === null) {  
                endDate = new Date();
                endDate.setMonth(startDate.getMonth() + 3);
            }
            while(startDate.getDate() > endDate.getDate()) {
                const eventEndDate = new Date();
                eventEndDate.setDate(startDate.getDate() + 14);
                eventEndDate.setTime(endDate.getTime());

                reoccuringEvents.push({
                    id: event.id,
                    name: event.name,
                    startDate: startDate,
                    endDate: eventEndDate,
                    thumbnailName: event.thumbnail_name,
                    thumbnailType: event.thumbnail_type
                });

                startDate.setDate(eventEndDate.getDate());
                startDate.setMonth(eventEndDate.getMonth());
                startDate.setFullYear(eventEndDate.getFullYear());
            }
            break;
        case ReocurrenceType.Monthly:
            if(endDate === undefined || endDate === null) {  
                endDate = new Date();
                endDate.setMonth(startDate.getMonth() + 6);
            }
            while(startDate < endDate) {
                const eventEndDate = new Date();
                eventEndDate.setMonth(startDate.getMonth() + 1);
                eventEndDate.setTime(endDate.getTime());

                reoccuringEvents.push({
                    id: event.id,
                    name: event.name,
                    startDate: startDate,
                    endDate: eventEndDate,
                    thumbnailName: event.thumbnail_name,
                    thumbnailType: event.thumbnail_type
                });

                startDate.setDate(eventEndDate.getDate());
                startDate.setMonth(eventEndDate.getMonth());
                startDate.setFullYear(eventEndDate.getFullYear());
            }
            break;
        case ReocurrenceType.Yearly:
            if(endDate === undefined || endDate === null) {  
                endDate = new Date();
                endDate.setMonth(startDate.getFullYear() + 1);
            }
            while(startDate < endDate) {
                const eventEndDate = new Date();
                eventEndDate.setMonth(startDate.getFullYear() + 1);
                eventEndDate.setTime(endDate.getTime());

                reoccuringEvents.push({
                    id: event.id,
                    name: event.name,
                    startDate: startDate,
                    endDate: eventEndDate,
                    thumbnailName: event.thumbnail_name,
                    thumbnailType: event.thumbnail_type
                });

                startDate.setDate(eventEndDate.getDate());
                startDate.setMonth(eventEndDate.getMonth());
                startDate.setFullYear(eventEndDate.getFullYear());
            }
            break;
    }
    return reoccuringEvents;
}