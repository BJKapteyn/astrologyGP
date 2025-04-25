import { useEffect, useState } from 'react';
import {  Event as CalendarEvent } from 'react-big-calendar';
import { EventDetail } from '../EventDetail/EventDetail';
import { EventCalendar } from '../EventCalendar/EventCalendar';
import { useRandomImageUrl } from 'CustomHooks/useRandomImageUrl';
import * as eventData from '../data/calendarEvents.json';

export const EventView: React.FC = () => {
    const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[] | null>(null);
    const [eventDetail, setEventDetail] = useState<CalendarEvent | null>(null);
    const isEventSelected: boolean = !!eventDetail;
    const randomImage = useRandomImageUrl();

    function callbackSetEventDetail(calendarEventDetails: CalendarEvent) {
        setEventDetail(calendarEventDetails);
    }

    useEffect(() => {
        if(calendarEvents === null) {
            const events: CalendarEvent[] = eventData.events.map((event) => {
                let eventResources = {
                    description: event.resource,
                    imageURL: randomImage
                }

                return {
                    title: event.title,
                    start: new Date(event.start),
                    end: new Date(event.end),
                    allDay: true,
                    resource: eventResources,
                } as CalendarEvent;
            })
            
            setCalendarEvents(events);
        }
    }, [calendarEvents, randomImage]);

    return (
        <div>
            <div className="flex flex-col gap-4">
                <EventCalendar events={calendarEvents} callbackSelect={callbackSetEventDetail} />

            </div>
            {isEventSelected ? 
                (<EventDetail
                    name="Test Selected Event"
                    description={eventDetail?.resource.description}
                    imageURL={eventDetail?.resource.imageURL} 
                />) : 
                (<EventDetail
                    name="Sample Event"
                    description="This is a description of the sample event."
                    imageURL="https://via.placeholder.com/150"
                />)
            }
        </div>
    );
};