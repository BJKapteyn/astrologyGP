import React from 'react';
import { EventCalendarView } from 'Components/EventCalendarPage/EventCalendarView/EventCalendarView';
import '../../node_modules/react-big-calendar/lib/css/react-big-calendar.css'; 

export default function EventCalendarPage() {
    
    return (
        <div className="event-calendar-main">
            <h1>Event Calendar Page</h1>
            <EventCalendarView />
        </div>
    );
}
