import { eventItem } from "../models/eventItem";
import { gCalResponse } from "../models/gCalResponse";

export function mapGCalResponseToEventItems(gCalResponse: gCalResponse): eventItem[] {
   return gCalResponse.items; 
}
