export interface eventItem {
    kind: string;
    etag: string;
    id: string;
    status: string;
    htmlLink: string;
    created: string;
    updated: string;
    summary: string;
    description: string;
    creator: any;
    organizer: any;
    start: any;
    end: any;
    recurringEventId: string;
    originalStartTime: any;
    iCalUID: string;
    sequence: number;
    eventType: string;
}