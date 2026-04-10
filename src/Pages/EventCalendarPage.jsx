import { EventCalendarView } from '../Components/EventCalendarPage/EventCalendarView/EventCalendarView';
import { SectionDivider } from '../Components/PageElements/SectionDivider/SectionDivider';
import '../../node_modules/react-big-calendar/lib/css/react-big-calendar.css'; 

// This is the main page for the Event Calendar. It displays the events on the calendar and a detail view for selected events
export default function EventCalendarPage() {
    
    return (
        <div className="event-calendar-main">
            <SectionDivider dividerData={{ headingText: 'Event Calendar'}} />
            <EventCalendarView />
        </div>
    );
}
