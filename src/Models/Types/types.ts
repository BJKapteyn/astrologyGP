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
    SquareEventId?: string | null;
    SquareEventVersion: number | null;
    EventName: string;
    EventDescription: string;
    StartDate: Date;
    EndDate?: Date | null;
    EventOrganizerName: string;
    BannerImageUrl?: string | null;
    PriceInUSD: number;
    SquareVariationId?: string | null;
}

export interface Blog {
    id: string;
    Title: string;
    Author: string;
    PublishDate: Date;
    Content: string;
    ImageUrl?: string;
};

export interface DeleteCalendarEventRequestBody {
    id: string;
    partitionKey: string;
    squareEventId: string;
}
