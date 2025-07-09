import { Event } from "react-big-calendar";

export interface ItemData {
    id: string;
    description: string;
    name: string;
    imageURL: string;
    buyNowLink: string;
    variations: ItemData[];
}

// Avoid using event as a name
export interface CalendarEvent extends Event {}
