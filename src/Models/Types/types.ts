import { Event } from "react-big-calendar";

export interface ItemData {
    id: string;
    description: string;
    name: string;
    imageURL: string;
    buyNowLink: string;
    variations: ItemData[];
}

// Name change for consistency with CalendarEvent
export interface CalendarEvent extends Event {
    resource?: {
        buyNowLink?: string | null;
        eventName?: string;
        imageURL?: string;
        description?: string;
    };
}
