import { Link } from "react-router-dom";
import { CalendarEvent } from "../../../Models/Types/types";
import { ActionButton } from "../../../Components/PageElements/ActionButton/ActionButton";
import './EventCalendarMobile.css';

interface EventCalendarProps {
    events: CalendarEvent[] | null; 
}

export const EventCalendarMobile: React.FC<EventCalendarProps> = ({ events }) => {
    events?.sort((event1, event2) =>  (event2.start?.getTime() ?? 0) - (event1.start?.getTime() ?? 0));
    const purchaseButtonSettings = {
        buttonText: "BUY NOW",
        buttonStyleId: null,
        action: null
    }

    let isAnyEventActive = false;
    if (events) {
        for (const event of events) { 
            if (event.start && event.start > new Date()) {
                isAnyEventActive = true;
                break;
            }       
        }
    }
    
    return (
        <div className="event-calendar-mobile">
            {isAnyEventActive ? 
                events && events.map((event) => {
                    const mapKey: string = event.start?.toString() ?? "" + event.title;   
                    const didEventExpire = new Date(event?.start ?? Date.now()) < new Date(Date.now());
                    let dateText = event.start?.toLocaleDateString() ?? '';

                    if (didEventExpire) {
                        dateText += ' (Expired)';
                    }

                    return (
                        <div className="event-calendar-mobile-item" key={mapKey}>
                            <div className="event-calendar-mobile-image" style={{ backgroundImage: `url(${event.resource?.BannerImageUrl})` }}></div>
                            <h4 className="event-calendar-mobile-title">{event.title}</h4>
                            {!didEventExpire &&<Link target='_blank' to={event.resource?.BannerImageUrl ?? window.location.origin}><ActionButton buttonSettings={purchaseButtonSettings}></ActionButton></Link>}
                            <p className="event-calendar-mobile-date">{dateText}</p>
                            <div className="event-calendar-mobile-description">{event.resource?.EventDescription}</div>
                        </div>
                    );
                }) : 
                <h5 className="event-calendar-mobile-no-events">No upcoming events at this time, check back later!</h5>
            }
        </div>
    );
};