export type Indexes<K extends number>  = { [key in K]: string };
export type EventType = 1 | 2 | 3;
export type StatusType = 1 | 2;
export type ReoccurenceType = 1 | 2 | 3 | 4 | 5;

export const EventTypes: Indexes<EventType> = { 
    1: `Performance`, 
    2: `Workshop`, 
    3: `Children's Theater` };

export const StatusTypes: Indexes<StatusType> = {
    1: `Scheduled`,
    2: `Cancelled` };

export const ReoccurenceTypes: Indexes<ReoccurenceType> = {
    1: `Daily`,
    2: `Weekly`,
    3: `Bi-Weekly`,
    4: `Monthly`,
    5: `Yearly` };