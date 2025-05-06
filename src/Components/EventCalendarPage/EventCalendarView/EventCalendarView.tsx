import { useEffect, useState } from 'react';
import {  Event as CalendarEvent } from 'react-big-calendar';
import { EventDetail } from '../EventDetail/EventDetail';
import { EventCalendar } from '../EventCalendar/EventCalendar';
import { useRandomImageUrl } from 'CustomHooks/useRandomImageUrl';
import './EventCalendarView.css';
import * as eventDataJson from '../data/calendarEvents.json';

// Functionality and display for the Event Calendar page.
export const EventCalendarView: React.FC = () => {
    const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[] | null>(null);
    const [eventDetail, setEventDetail] = useState<CalendarEvent | null>(null);
    const isEventSelected: boolean = !!eventDetail;
    const randomImage: string | null = useRandomImageUrl();

    function callbackSetEventDetail(calendarEventDetails: CalendarEvent) {
        setEventDetail(calendarEventDetails);
    }

    useEffect(() => {
        if(!!calendarEvents === false && !!randomImage) {
            let eventData = JSON.parse(JSON.stringify(eventDataJson));
            const events: CalendarEvent[] = eventData.events.map((event: any) => {
                let eventResources = {
                    description: event.resource.description,
                    imageURL: event.resource.imageUrl ?? randomImage,
                    eventTitle: event.resource.eventName
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

    return (
        <div className="event-calendar">
            <EventCalendar
                events={calendarEvents} 
                callbackSelect={callbackSetEventDetail} />
            {isEventSelected ? 
                (<EventDetail
                    name={eventDetail?.resource?.eventTitle}
                    description={eventDetail?.resource?.description}
                    imageURL={eventDetail?.resource?.imageURL} 
                />) : 
                (<EventDetail
                    name=""
                    description="Select an event to see details"
                    imageURL=""
                />)
            }
        </div>
    );
};