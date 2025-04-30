import { useEffect, useState } from 'react';
import {  Event as CalendarEvent } from 'react-big-calendar';
import { EventDetail } from '../EventDetail/EventDetail';
import { EventCalendar } from '../EventCalendar/EventCalendar';
import { useRandomImageUrl } from 'CustomHooks/useRandomImageUrl';
import * as eventDataJson from '../data/calendarEvents.json';


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
                    imageURL: event.resource.imageUrl,
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
        <div>
            <div className="event-calendar-calendar">
                <EventCalendar
                    events={calendarEvents} 
                    callbackSelect={callbackSetEventDetail} />
            </div>
            <div className='event-calendar-detail'>
                {isEventSelected ? 
                    (<EventDetail
                        name={eventDetail?.resource?.eventTitle}
                        description={eventDetail?.resource?.description}
                        imageURL={eventDetail?.resource?.imageURL} 
                    />) : 
                    (<EventDetail
                        name="Sample Event"
                        description="This is a description of the sample event."
                        imageURL="https://via.placeholder.com/150"
                    />)
                }
            </div>
        </div>
    );
};