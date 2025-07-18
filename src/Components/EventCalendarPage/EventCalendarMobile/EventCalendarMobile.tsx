import { CalendarEvent } from "Models/Types/types";
import './EventCalendarMobile.css';

interface EventCalendarProps {
    events: CalendarEvent[] | null; 
}

export const EventCalendarMobile: React.FC<EventCalendarProps> = ({ events }) => {
    
    return (
        <div className="event-calendar-mobile">
            {events && events.map((event) => {
                const mapKey: string = event.start?.toString() ?? "" + event.title;   

                return (
                    <div className="event-calendar-mobile-item" key={mapKey}>
                        <div className="event-calendar-mobile-image" style={{ backgroundImage: `url(${event.resource?.imageURL})` }}>
                            
                        </div>
                        <h4 className="event-calendar-mobile-title">{event.title}</h4>
                        <div className="event-calendar-mobile-description">{event.resource?.description}</div>
                    </div>
                );
            })}
        </div>
    );
};