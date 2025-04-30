import { useRef, useState } from 'react';
import {  Calendar, momentLocalizer, DateLocalizer, ViewsProps, Event as CalendarEvent } from 'react-big-calendar';  
import moment from 'moment';

interface EventCalendarProps {
    events: CalendarEvent[] | null;
    callbackSelect: (calendarEventDetails: CalendarEvent) => void;
}

export const EventCalendar: React.FC<EventCalendarProps> = ({ events, callbackSelect }) => {
    const calendarLocalizer: DateLocalizer = momentLocalizer(moment);
    const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[] | null>(events);
    const toolbarViews = useRef<ViewsProps>({month: true, week: false, day: false});


    if(!!calendarEvents === false && !!events) {
        setCalendarEvents(events);
    }
    
    require('./BigCalendarScssVariableOverride.scss');

    return (
        <div className="event-calendar">
            <Calendar localizer={calendarLocalizer}
                events={calendarEvents ?? []} 
                views={toolbarViews.current}
                onSelectEvent={(event) => {
                    callbackSelect(event);
                }}
            />
        </div>
    );
};
