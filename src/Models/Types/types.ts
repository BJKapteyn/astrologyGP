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
export interface CalendarEvent extends Event {
    resource?: {
        id: string;
        BannerImageUrl?: string | null;
        SquareEventId: string | null;
        EventName?: string;
        StartDate?: string;
        EndDate?: string;
        EventDescription?: string;
        EventOrganizerName: string;
        PriceInUSD?: number | null;
    };
}
