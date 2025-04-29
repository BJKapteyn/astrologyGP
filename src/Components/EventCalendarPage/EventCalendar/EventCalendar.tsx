import { useState } from 'react';
import {  Calendar, momentLocalizer, DateLocalizer, Event as CalendarEvent } from 'react-big-calendar';  
import moment from 'moment';
import './EventCalendar.css';

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
    
    require('./BigCalendarScssVariableOverride.scss');
    
    
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
