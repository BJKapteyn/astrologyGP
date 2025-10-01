
import { useState } from "react";
import { Link } from "react-router-dom";
import { ActionButton } from "../../PageElements/ActionButton/ActionButton";
import { useGetAzureFunction } from "../../../CustomHooks/useGetAzureFunction";
import { LoadingIndicator } from "../../PageElements/LoadingIndicator/LoadingIndicator";
import { buildAzureFunctionURL } from "../../../UtilityFunctions/urlUtility";
import { CalendarEventResource } from "../../../Models/Types/types";
import { FunctionNames } from "Enums/FunctionNames";
import './EditCalendarEvent.css';

export const EditCalendarEvent: React.FC = () => {
  const getAllCalendarEventsEndpoint = buildAzureFunctionURL(FunctionNames.GetAllCalendarEvents, process.env.REACT_APP_GET_ALL_CALENDAR_EVENTS);
  const [calendarEvents, setCalendarEvents] = useState<CalendarEventResource[] | null>(null);

  const eventData = useGetAzureFunction(getAllCalendarEventsEndpoint);

  if (!!eventData && !!calendarEvents === false) {
    setCalendarEvents(eventData);
  }

  return (
    <div className="edit-buttons">  
      <h2 style={{ marginBottom: '0px' }}>Calendar Event Content</h2>
      <h3>Create New</h3>
      <Link to={'./editCalendarEventForm'}>
        <ActionButton buttonSettings={{ buttonText: 'New Calendar Event' }}></ActionButton>
      </Link>
      <h3>Edit Existing</h3>
      {calendarEvents ? 
        calendarEvents.map((calendarEvent: CalendarEventResource) => {
        return (
          <div className="edit-calendar-event" key={calendarEvent.id}>
            <h4>{calendarEvent.EventName}</h4>
            <Link className="edit-calendar-event-link" to={`./${calendarEvent.id}`} state={calendarEvent}>
              <ActionButton buttonSettings={{ buttonText: 'Edit' }}></ActionButton>
            </Link>
          </div>
        );
      }) : 
      (
        <LoadingIndicator message="No Calendar Events Found" />
      )}
    </div>
  );
};
