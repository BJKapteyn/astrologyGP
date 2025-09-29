import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { CalendarEvent } from 'Models/Types/types';
import { EventDetail } from '../EventDetail/EventDetail';
import { EventCalendar } from '../EventCalendar/EventCalendar';
import { useRandomImageUrl } from 'CustomHooks/useRandomImageUrl';
import { EventCalendarMobile } from '../EventCalendarMobile/EventCalendarMobile';
import { sendAPIPost } from 'UtilityFunctions/apiUtility';
import './EventCalendarView.css';
import * as eventDataJson from '../data/calendarEvents.json';
import { buildAzureFunctionURL } from 'UtilityFunctions/urlUtility';
import { FunctionNames } from 'Enums/FunctionNames';

// Functionality and display for the Event Calendar page.
export const EventCalendarView: React.FC = () => {
    const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[] | null>(null);
    const [eventDetail, setEventDetail] = useState<CalendarEvent | null>(null);
    const getAllEventsEndpoint = buildAzureFunctionURL(FunctionNames.GetAllCalendarEvents, process.env.REACT_APP_GET_ALL_CALENDAR_EVENTS);
    const randomImage: string | null = useRandomImageUrl();
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

    function callbackSetEventDetail(calendarEventDetails: CalendarEvent) {
        setEventDetail(calendarEventDetails);
    }

    useEffect(() => {
        const getEvents = async () => {
            const getEventsResponse: Response = await sendAPIPost(getAllEventsEndpoint, '');
        }

        getEvents();
    }, []);

    useEffect(() => {
        if(!!calendarEvents === false && !!randomImage) {
            let eventData = JSON.parse(JSON.stringify(eventDataJson));
            const events: CalendarEvent[] = eventData.events.map((event: any) => {
                let eventResources = {
                    BannerImageUrl: event.resource.BannerImageUrl,
                    EventName: event.resource.EventName,
                    StartDate: event.resource.StartDate,
                    EndDate: event.resource.EndDate,
                    id: event.resource.id,
                    SquareEventId: event.resource.SquareEventId,
                    BannerImageURL: event.resource.BannerImageURL ?? randomImage,
                    EventDescription: event.resource.EventDescription ?? '',
                    EventOrganizerName: event.resource.EventOrganizerName ?? 'Vibe Collective',
                    PriceInUSD: event.resource.PriceInUSD ?? null
                } 

                return {
                    title: event.title,
                    start: new Date(event.start),
                    end: new Date(event.end),
                    allDay: true,
                    resource: eventResources,
                } as CalendarEvent;
            });
            
            setCalendarEvents(events);
        }
    }, [calendarEvents, randomImage]);

    const eventCalendar = (
        <div className="event-calendar">
            <EventCalendar
                events={calendarEvents}
                callbackSelect={callbackSetEventDetail} />
            { eventDetail ? <EventDetail eventData={eventDetail} /> : <h4 className="event-calendar-no-event">Select an event for more details</h4>}
        </div>
    )

    return (
        <div className="event-calendar">
            {isMobile 
                ? <EventCalendarMobile events={calendarEvents} />
                : eventCalendar
            }
        </div>
    );
};