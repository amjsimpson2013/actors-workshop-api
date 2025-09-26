import { eventItem } from "../models/eventItem";
import { gCalResponse } from "../models/gCalResponse";
import { mapGCalResponseToEventItems } from "../utils/mapper";

const calendarId = process.env["GOOGLE_CAL_ID"];
const apiKey = process.env["GOOGLE_CLOUD_API"];

export async function getCurrentMonthEvents(): Promise<eventItem[]> {
    const startDate = new Date();
    const endDate = new Date(new Date().setMonth(startDate.getMonth() + 1));

    let headers = new Headers();
    headers.set('timeMin', startDate.toISOString());
    headers.set('timeMax', endDate.toISOString());
    headers.set('singleEvents', 'true');
    headers.set('orderBy', "startTime");

    const url = new URL(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}`);
    
    const response = await fetch(url, {
        method: 'GET',
        headers: headers
    });
    console.log(response);

    let mappedRes = await response.json().then((res: unknown) => { return res as gCalResponse });


    return await mapGCalResponseToEventItems(mappedRes); 
}