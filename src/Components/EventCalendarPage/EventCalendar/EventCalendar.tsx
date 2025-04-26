import {  Calendar, momentLocalizer, DateLocalizer, Event as CalendarEvent } from 'react-big-calendar';     
import { useState } from 'react';
import './EventCalendar.css'
import moment from 'moment';
import '../../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css';

interface EventCalendarProps {
    events: CalendarEvent[] | null;
    callbackSelect: (calendarEventDetails: CalendarEvent) => void;
}

export const EventCalendar: React.FC<EventCalendarProps> = ({ events, callbackSelect }) => {
    const calendarLocalizer: DateLocalizer = momentLocalizer(moment);

    const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[] | null>(events);

    if(!!calendarEvents === false && !!events) {
        setCalendarEvents(events);
    }
    
    return (
        <div className="event-calendar">
            <Calendar localizer={calendarLocalizer}
                events={calendarEvents ?? []} 
                onSelectEvent={(event) => {
                    callbackSelect(event);
                }}
            />
        </div>
    );
};
