import { useState } from 'react';
import { EventDetail } from '../EventDetail/EventDetail';
import { EventCalendar } from '../EventCalendar/EventCalendar';
import * as events from '../data/calendarEvents.json';

export const EventView: React.FC = () => {
    const [eventDetail, setEventDetail] = useState(null);
    const isEventSelected: boolean = !!eventDetail;

    return (
        <div>

        <div className="flex flex-col gap-4">
            <EventCalendar events={events} callbackSelect={setEventDetail} />

        </div>
            {eventDetail && (
                
            )}
            <EventDetail
                name="Sample Event"
                description="This is a description of the sample event."
                imageURL="https://via.placeholder.com/150"
            />
        </div>
    );
};