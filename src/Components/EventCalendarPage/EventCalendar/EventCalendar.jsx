import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import '../../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css'; 

export const EventCalendar = () => {
        const calendarLocalizer = momentLocalizer(moment); // Set the localizer by providing the moment Object to the correct localizer.
        const events = [
            {
                title: 'Board meeting',
                start: new Date(2025, 4, 14, 10, 0),
                end: new Date(2025, 4, 16, 11, 0),
            },
            {
                title: 'Team lunch',
                start: new Date(2025, 4, 15, 12, 0),
                end: new Date(2025, 4, 20, 13, 0),
            },
        ];
        const calendar = <Calendar localizer={calendarLocalizer} events={events} startAccessor={'start'} endAccessor={'end'} />;

    return (
        <div className="event-calendar-page">
            <h1>Event Calendar</h1>
            {calendar}
        </div>
    );
};
