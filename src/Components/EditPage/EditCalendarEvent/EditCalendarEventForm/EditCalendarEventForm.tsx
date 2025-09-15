
import { useState } from 'react';
import { CalendarEvent } from '../../../../Types/ProjectTypes';
import './EditCalendarEventForm.css';
import { sendAPIPost } from 'UtilityFunctions/apiUtility';
import { useLocation, useNavigate } from 'react-router';

interface EditCalendarEventFormProps {
  event: CalendarEvent;
}

export const EditCalendarEventForm: React.FC<EditCalendarEventFormProps> = ({ event = {} as CalendarEvent }) => {
  const [eventData, setEventData] = useState<CalendarEvent>(event);
  const [loadingText, setLoadingText] = useState<string | null>(null);
  const [deleteLoadingText, setDeleteLoadingText] = useState<string | null>(null);
  const upsertEndpoint = process.env.REACT_APP_UPSERT_CALENDAR_EVENT;
  const location = useLocation();
  const navigate = useNavigate();

  if (location.state && location.state.id !== eventData.id) {
      setEventData(location.state as CalendarEvent);
  }

  // Blank handle methods
  const handleSubmit = async (formEvent: React.FormEvent<HTMLFormElement>) => {
    formEvent.preventDefault();
    
    setLoadingText("Submitting calendar event...");

    if (!verifyCalendarEventData(eventData)) {
      setLoadingText(null);
      return;
    }

    let upsertResponse: Response = await sendAPIPost(upsertEndpoint!, JSON.stringify(eventData));

    if (upsertResponse.ok) {
      setLoadingText(null);
      alert('Calendar event submitted successfully!');
      navigate(-1);
    } else {
      alert('Something went wrong, please try again later...')
    }
  };

  const handleDelete = async (formEvent: React.FormEvent<HTMLFormElement>, eventId: string) => {
    formEvent.preventDefault();
    // TODO: Implement delete logic
  };

  return (
    <div className="edit-calendar-event-form">
      <h2>Create/Edit Calendar Event</h2>
      <form className="edit-calendar-event-form-form" onSubmit={handleSubmit}>
        <label className="edit-calendar-event-form-label" htmlFor="eventName">Event Name:</label>
        <input
          className="edit-calendar-event-form-input"
          required
          onChange={e => eventData.EventName = e.target.value}
          type="text"
          id="eventName"
          name="eventName"
          defaultValue={eventData?.EventName || ''}
        />
        <label className="edit-calendar-event-form-label" htmlFor="eventDescription">Event Description:</label>
        <textarea
          className="edit-calendar-event-form-textarea"
          required
          onChange={e => eventData.EventDescription = e.target.value}
          id="eventDescription"
          name="eventDescription"
          defaultValue={eventData?.EventDescription || ''}
        />
        <label className="edit-calendar-event-form-label" htmlFor="startDate">Start Date:</label>
        <input
          className="edit-calendar-event-form-input"
          required
          onChange={e => eventData.StartDate = new Date(e.target.value)}
          type="date"
          id="startDate"
          name="startDate"
          defaultValue={eventData?.StartDate ? new Date(eventData.StartDate).toISOString().split('T')[0] : ''}
        />
        <label className="edit-calendar-event-form-label" htmlFor="endDate">End Date:</label>
        <input
          className="edit-calendar-event-form-input"
          onChange={e => eventData.EndDate = new Date(e.target.value)}
          type="date"
          id="endDate"
          name="endDate"
          defaultValue={eventData?.EndDate ? new Date(eventData.EndDate).toISOString().split('T')[0] : ''}
        />
        <label className="edit-calendar-event-form-label" htmlFor="eventOrganizerName">Organizer Name:</label>
        <input
          className="edit-calendar-event-form-input"
          onChange={e => eventData.EventOrganizerName = e.target.value}
          type="text"
          id="eventOrganizerName"
          name="eventOrganizerName"
          defaultValue={eventData?.EventOrganizerName || ''}
        />
        <label className="edit-calendar-event-form-label" htmlFor="bannerImageUrl">Banner Image URL:</label>
        <input
          className="edit-calendar-event-form-input"
          onChange={e => eventData.BannerImageUrl = e.target.value}
          type="text"
          id="bannerImageUrl"
          name="bannerImageUrl"
          defaultValue={eventData?.BannerImageUrl || ''}
        />
        <label className="edit-calendar-event-form-label" htmlFor="priceInUSD">Price (USD):</label>
        <input
          className="edit-calendar-event-form-input"
          required
          onChange={e => eventData.PriceInUSD = Number(e.target.value)}
          type="number"
          step="0.01"
          id="priceInUSD"
          name="priceInUSD"
          defaultValue={eventData?.PriceInUSD || 0}
        />
        {loadingText ? (
          <p className="edit-calendar-event-form-loading">{loadingText}</p>
        ) : (
          <button className="edit-calendar-event-form-submit" type="submit">Submit</button>
        )}
      </form>
      {eventData?.id && eventData?.SquareEventId && (
        <form className="edit-calendar-event-form-delete-form" onSubmit={(event) => handleDelete(event, eventData.id)}>
          {deleteLoadingText ? (
            <p className="edit-calendar-event-form-loading">{deleteLoadingText}</p>
          ) : (
            <button className="edit-calendar-event-form-delete-button" type="submit">Delete</button>
          )}
        </form>
      )}
    </div>
  );
}

const verifyCalendarEventData = (calendarEvent: CalendarEvent): boolean => {
  const isStartAndEndDateValid = verifyStartAndEndDates(calendarEvent.StartDate, calendarEvent.EndDate);

  if (!isStartAndEndDateValid) {
    alert('End date must be after start date, leave end date blank if event is a single day event.');

    return false;
  }
  
  return true;
}

const verifyStartAndEndDates = (startDate: Date, endDate?: Date): boolean => {
  if (!endDate) 
    return true;

  const isStartDateBeforeEndDate = startDate <= endDate;

  if (isStartDateBeforeEndDate === false) 
    return false;

  return true;
}

const addFloatingPoint = (price: string): number => {
  
  if (isNaN(Number(price))) {
    return 0;
  }
  const indexToAddDecimalPoint = price.length - 3;

  const cents = price.substring(indexToAddDecimalPoint, price.length);
  const dollars = price.substring(0, indexToAddDecimalPoint);

  const priceWithDecimalPoint: string = `${dollars}.${cents}`;
  const priceNumber = Number(price);

  return isNaN(priceNumber) ? 0 : priceNumber;
}
