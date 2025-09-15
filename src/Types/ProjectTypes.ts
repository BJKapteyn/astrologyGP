export type Blog = {
    id: string;
    Title: string;
    Author: string;
    PublishDate: Date;
    Content: string;
    ImageUrl?: string;
};

export type CalendarEvent = {
    id: string;
    EventName: string;
    EventDescription: string;
    StartDate: Date;
    EndDate?: Date;
    EventOrganizerName?: string;
    BannerImageUrl?: string;
    PriceInUSD: number;
    SquareEventId?: string;
}