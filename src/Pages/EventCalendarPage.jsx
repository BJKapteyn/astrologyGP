import { EventCalendarView } from 'Components/EventCalendarPage/EventCalendarView/EventCalendarView';
import { SectionDivider } from 'Components/PageElements/SectionDivider/SectionDivider';
import '../../node_modules/react-big-calendar/lib/css/react-big-calendar.css'; 

export default function EventCalendarPage() {
    
    return (
        <div className="event-calendar-main">
            {/* <h1>Event Calendar Page</h1> */}
            <SectionDivider dividerData={{ headingText: 'Event Calendar'}} />
            <EventCalendarView />
        </div>
    );
}
