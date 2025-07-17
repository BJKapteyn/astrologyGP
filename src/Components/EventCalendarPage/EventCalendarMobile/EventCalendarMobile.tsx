import { CalendarEvent } from "Models/Types/types";

interface EventCalendarProps {
    events: CalendarEvent[] | null; 
}

export const EventCalendarMobile: React.FC<EventCalendarProps> = ({ events }) => {
    
    return (
        <div>
            {/* Render your mobile calendar here */}
        </div>
    );
};