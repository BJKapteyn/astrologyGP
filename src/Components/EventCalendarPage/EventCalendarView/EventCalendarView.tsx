import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { CalendarEvent, CalendarEventResource } from 'Models/Types/types';
import { EventDetail } from '../EventDetail/EventDetail';
import { EventCalendar } from '../EventCalendar/EventCalendar';
// import { useRandomImageUrl } from 'CustomHooks/useRandomImageUrl';
import { EventCalendarMobile } from '../EventCalendarMobile/EventCalendarMobile';
import { sendAPIPost } from 'UtilityFunctions/apiUtility';
import './EventCalendarView.css';
// import * as eventDataJson from '../data/calendarEvents.json';
import { buildAzureFunctionURL } from 'UtilityFunctions/urlUtility';
import { FunctionNames } from 'Enums/FunctionNames';

// Functionality and display for the Event Calendar page.
export const EventCalendarView: React.FC = () => {
    const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[] | null>(null);
    const [eventDetail, setEventDetail] = useState<CalendarEvent | null>(null);
    const getAllEventsEndpoint = buildAzureFunctionURL(FunctionNames.GetAllCalendarEvents, process.env.REACT_APP_GET_ALL_CALENDAR_EVENTS);
    // const randomImage: string | null = useRandomImageUrl();
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

    function callbackSetEventDetail(calendarEventDetails: CalendarEvent) {
        setEventDetail(calendarEventDetails);
    }

    useEffect(() => {
        const getEvents = async () => {
            const getEventsResponse = await sendAPIPost(getAllEventsEndpoint, '');

            if(getEventsResponse.ok) {
                const eventData: CalendarEventResource[] = await getEventsResponse.json();

                const events: CalendarEvent[] = eventData?.map(eventJson => {
                    let eventResources = {
                        id: eventJson.id,
                        BannerImageUrl: eventJson.BannerImageUrl,
                        SquareEventId: eventJson.SquareEventId,
                        SquareVariationId: eventJson.SquareVariationId,
                        SquareEventVersion: eventJson.SquareEventVersion,
                        EventName: eventJson.EventName,
                        StartDate: eventJson.StartDate,
                        EndDate: eventJson.EndDate,
                        EventDescription: eventJson.EventDescription,
                        EventOrganizerName: eventJson.EventOrganizerName ?? 'Vibe Collective',
                        PriceInUSD: eventJson.PriceInUSD ?? null
                    }

                    return {
                        title: eventJson.EventName,
                        start: new Date(eventJson.StartDate ?? ''),
                        end: new Date(eventJson.EndDate ?? eventJson.StartDate),
                        allDay: true,
                        resource: eventResources
                    } as CalendarEvent;
                });

                setCalendarEvents(events);
            }
        }   

        getEvents();
    }, []);

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