// import '../../../../node_modules/react-big-calendar/lib/sass/variables.scss'
import {  Calendar, momentLocalizer, DateLocalizer, Event as CalendarEvent } from 'react-big-calendar';  
import './BigCalendarScssVariableOverride.scss'; // Import the SCSS file to override variables
import '../../../../node_modules/react-big-calendar/lib/sass/styles.scss';
import { useState } from 'react';
import moment from 'moment';
import './EventCalendar.css'

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
