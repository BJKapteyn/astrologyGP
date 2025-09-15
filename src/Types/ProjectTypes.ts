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
    EndDate?: Date | null;
    EventOrganizerName?: string;
    BannerImageUrl?: string | null;
    PriceInUSD: number;
    SquareEventId?: string | null;
}