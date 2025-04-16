import React from 'react';
import { EventCalendar } from '../Components/EventCalendarPage/EventCalendar/EventCalendar';
import '../../node_modules/react-big-calendar/lib/css/react-big-calendar.css'; 

export default function EventCalendarPage() {
    
    return (
        <div className="event-calendar-main">
            <h1>Event Calendar Page</h1>
            <EventCalendar />
        </div>
    );
}
