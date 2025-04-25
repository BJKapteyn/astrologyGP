import { useEffect, useState } from 'react';
import { Event as CalendarEvent } from 'react-big-calendar';
import { EventDetail } from '../EventDetail/EventDetail';
import { EventCalendar } from '../EventCalendar/EventCalendar';
import * as eventData from '../data/calendarEvents.json';
// import moon from '../../../Pics/Landscapes/jpeg/girlOnBeach.jpg';

export const EventView: React.FC = () => {
    const [calendarEvents, setEventDetail] = useState<CalendarEvent[] | null>(null);
    const isEventSelected: boolean = !!calendarEvents;

    useEffect(() => {
        if(calendarEvents === null) {
            const events: CalendarEvent[] = eventData.events.map((event) => {
                return {
                    title: event.title,
                    start: new Date(event.start),
                    end: new Date(event.end),
                    allDay: true,
                    resource: event.resource,
                } as CalendarEvent;
            })
            
            setEventDetail(events);
        }
    }, [calendarEvents]);

    return (
        <div>

            <div className="flex flex-col gap-4">
                <EventCalendar events={events} callbackSelect={setEventDetail} />

            </div>
            {isEventSelected && (
                <EventDetail
                    name={calendarEvents.name}
                    description={calendarEvents.description}
                    imageURL={calendarEvents.imageURL} />
            )}
            <EventDetail
                name="Sample Event"
                description="This is a description of the sample event."
                imageURL="https://via.placeholder.com/150"
            />
        </div>
    );
};