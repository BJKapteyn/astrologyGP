import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

export default function EventCalendarPage() {
    const localizer = momentLocalizer(moment); // Set the localizer by providing the moment Object to the correct localizer.
    const events = [
        {
            title: 'Board meeting',
            start: new Date(2025, 4, 14, 10, 0),
            end: new Date(2025, 4, 14, 11, 0),
        },
        {
            title: 'Team lunch',
            start: new Date(2025, 4, 15, 12, 0),
            end: new Date(2025, 4, 15, 13, 0),
        },
    ];
    const calendar = Calendar({ localizer, events: events, startAccessor: 'start', endAccessor: 'end' });
    
    return (
        <div>
            <h1>Event Calendar Page</h1>
            {calendar}
        </div>
    );
}
