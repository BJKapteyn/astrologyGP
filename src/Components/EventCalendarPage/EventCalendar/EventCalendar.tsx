import {  Calendar, momentLocalizer, DateLocalizer, Event } from 'react-big-calendar';     
import { useMemo, useState } from 'react';
import './EventCalendar.css'
import moment from 'moment';
import '../../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css';

export const EventCalendar = () => {
        const calendarLocalizer: DateLocalizer = momentLocalizer(moment);

        const [calendarEvents, setCalendarEvents] = useState<Event[]>([]);
            console.log( moment(new Date(2025, 4, 7)).toDate());

        if(calendarEvents.length === 0) {
            setCalendarEvents(
                [
                    {
                        title: 'Long Event',
                        start: moment(new Date(2025, 3, 7)).toDate(),
                        end: moment(new Date(2025, 3, 11)).toDate(),
                        allDay: true,
                        resource: null
                    }
                ]
            )
        }

        // const {startDate, endDate} = useMemo(() => ({
        //     startDate: new Date(2025, 4, 1, 10, 0),
        //     endDate: new Date(2025, 4, 30, 11, 0)
        // }), []);
        const date = moment(new Date(2025, 4, 14), 'MM-D-YYYY');
        const date2 = moment(new Date(2025, 4, 16), 'MM-DD-YYYY');
        // const calEvents = useMemo<Event[]>(() => {
        //     return [
        //         {
        //             title: 'Long Event',
        //             start: moment(new Date(2025, 4, 7)).toDate(),
        //             end: moment(new Date(2025, 4, 11)).toDate(),
        //             allDay: true,
        //             resource: null
        //         }
        //         // {
        //         //     title: 'Team lunch',
        //         //     start: new Date(2025, 4, 15),
        //         //     end: new Date(2025, 4, 20),
        //         //     allDay: true, 
        //         //     resource: null
        //         // },
        //     ];
        //   }, [])
          //...
        // const {calEvents} = useState(events);

    return (
        <div className="event-calendar">
            <Calendar localizer={calendarLocalizer}
                events={calendarEvents} 
                // toolbar={false}

                showAllEvents={true}
                />
        </div>
    );
};
