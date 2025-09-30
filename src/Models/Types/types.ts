import { Event } from "react-big-calendar";

export interface ItemData {
    id: string;
    description: string;
    name: string;
    imageURL: string;
    buyNowLink: string;
    variations: ItemData[];
}

// Event is used to populate the calendar, resource is for updating the event
// Resource is from the Big Calendar library
export interface CalendarEvent extends Event {
    resource?: CalendarEventResource;
}
export interface CalendarEventResource {
    id: string;
    BannerImageUrl?: string | null;
    SquareEventId: string | null;
    EventName?: string;
    StartDate?: string;
    EndDate?: string;
    EventDescription?: string;
    EventOrganizerName: string;
    PriceInUSD?: number | null;
}
