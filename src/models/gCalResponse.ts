import { eventItem } from "./eventItem";

export interface gCalResponse {
    kind: string;
    etag: string;
    summary: string;
    description: string;
    updated: string;
    timeZone: string;
    accessRole: string;
    defaultReminders: string[];
    nextSyncToken: string;
    items: eventItem[];
}