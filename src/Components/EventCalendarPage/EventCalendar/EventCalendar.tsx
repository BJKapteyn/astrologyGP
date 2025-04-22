import { Calendar, momentLocalizer } from 'react-big-calendar';
import { useMemo } from 'react';
import './EventCalendar.css'
import moment from 'moment';
import '../../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css'; 

export const EventCalendar = () => {
        const calendarLocalizer = momentLocalizer(moment); // Set the localizer by providing the moment Object to the correct localizer.
        const {startDate, endDate} = useMemo(() => ({
            startDate: new Date(2025, 4, 1, 10, 0),
            endDate: new Date(2025, 4, 30, 11, 0)
        }), []);
        
        const events = [
            {
                title: 'Board meeting',
                start: new Date(2025, 4, 14, 10, 0),
                end: new Date(2025, 4, 16, 11, 0),
                allDay: true, 
                resource: null
            },
            {
                title: 'Team lunch',
                start: new Date(2025, 4, 15),
                end: new Date(2025, 4, 20),
                allDay: true, 
                resource: null
            },
        ];
        const {calEvents} = useMemo(() => ({
            calEvents: events
          }), [])
          //...
        // const {calEvents} = useState(events);

    return (
        <div className="event-calendar-page">
            <Calendar localizer={calendarLocalizer}
                events={calEvents} 
                toolbar={false}
                startAccessor={startDate}
                endAccessor={endDate} />
        </div>
    );
};
