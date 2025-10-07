
import { useState } from 'react';
import { CalendarEventResource, DeleteCalendarEventRequestBody } from '../../../../Models/Types/types';
import { sendAPIPost, alertAPIResponse } from 'UtilityFunctions/apiUtility';
import { useLocation, useNavigate } from 'react-router';
import { buildAzureFunctionURL } from 'UtilityFunctions/urlUtility';
import { FunctionNames } from 'Enums/FunctionNames';
import './EditCalendarEventForm.css';

interface EditCalendarEventFormProps {
  event: CalendarEventResource;
}

export const EditCalendarEventForm: React.FC<EditCalendarEventFormProps> = ({ event = {} as CalendarEventResource }) => {
  const [eventData, setEventData] = useState<CalendarEventResource>(event);
  const [loadingText, setLoadingText] = useState<string | null>(null);
  const [deleteLoadingText, setDeleteLoadingText] = useState<string | null>(null);
  const [priceDisplay, setPriceDisplay] = useState<string>(event?.PriceInUSD ? formatPriceDisplayWithTwoDecimals(event.PriceInUSD.toString()) : '0.00');
  const upsertEndpoint = buildAzureFunctionURL(FunctionNames.UpsertCalendarEvent, process.env.REACT_APP_UPSERT_CALENDAR_EVENT);
  const location = useLocation();
  const navigate = useNavigate();

  if (location.state && location.state.id !== eventData.id) {
      setEventData(location.state as CalendarEventResource);
  }

  // Blank handle methods
  const handleSubmit = async (formEvent: React.FormEvent<HTMLFormElement>) => {
    formEvent.preventDefault();
    setLoadingText("Submitting calendar event...");

    if (!verifyCalendarEventData(eventData)) {
      setLoadingText(null);
      return;
    }

    let upsertResponse: Response = await sendAPIPost(upsertEndpoint, JSON.stringify(eventData as CalendarEventResource));

    alertAPIResponse(upsertResponse, () => setLoadingText(null),  'Calendar event submitted successfully!');
  };

  const handleDelete = async (formEvent: React.FormEvent<HTMLFormElement>, eventId: string) => {
    formEvent.preventDefault();
    setDeleteLoadingText("Deleting calendar event...");
    const deleteEndpoint = buildAzureFunctionURL(FunctionNames.DeleteCalendarEventById, process.env.REACT_APP_DELETE_CALENDAR_EVENT_BY_ID);
    let deleteResponse: Response = {} as Response;
    
    if(eventData.SquareEventId) {
      const deleteRequestBody: DeleteCalendarEventRequestBody = { id: eventId, partitionKey: eventData.EventOrganizerName, squareEventId: eventData.SquareEventId };

      deleteResponse = await sendAPIPost(deleteEndpoint, JSON.stringify(deleteRequestBody));
    }

    alertAPIResponse(deleteResponse, () => { navigate(-1); }, 'Calendar event deleted successfully!');
  };

  const updatePriceInput = ( inputElementEvent: React.ChangeEvent<HTMLInputElement>, inputPrice: string): void => {
    if(Number.MAX_SAFE_INTEGER.toString().length < inputPrice.length) {
      inputElementEvent.target.value = priceDisplay;
      return;
    }

    const unformattedPrice = removeFloatingPoint(inputPrice);
    const formattedPrice = formatPriceDisplayWithTwoDecimals(unformattedPrice.toString());

    eventData.PriceInUSD = unformattedPrice;
    setPriceDisplay(formattedPrice);

    inputElementEvent.target.value = formattedPrice;
  }
  
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
        <label className="edit-calendar-event-form-label" htmlFor="bannerImage">Banner Image:</label>
        <input
          className="edit-calendar-event-form-input"
          type="file"
          id="bannerImage"
          name="bannerImage"
          accept=".png, .jpg, .jpeg" />
        <label className="edit-calendar-event-form-label" htmlFor="priceInUSD">Price (USD):</label>
        <input
          className="edit-calendar-event-form-input"
          required
          onChange={e => updatePriceInput(e, e.target.value)}
          type="number"
          step="0.01"
          id="priceInUSD"
          name="priceInUSD"
          defaultValue={formatPriceDisplayWithTwoDecimals(eventData?.PriceInUSD?.toString())}
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

const verifyCalendarEventData = (calendarEvent: CalendarEventResource): boolean => {
  const isStartAndEndDateValid = verifyStartAndEndDates(calendarEvent.StartDate, calendarEvent.EndDate);

  if (!isStartAndEndDateValid) {
    alert('End date must be after start date, leave the end date blank if event is a single day event.');

    return false;
  }
  
  return true;
}

const verifyStartAndEndDates = (startDate: Date, endDate?: Date | null): boolean => {
  if (!endDate) 
    return true;
  const startDateObject = new Date(startDate);
  const endDateObject = new Date(endDate);

  const isStartDateBeforeEndDate = startDateObject <= endDateObject;

  if (isStartDateBeforeEndDate === false) 
    return false;

  return true;
}

// Assumes price is a string in the format "1000" for $10.00
const formatPriceDisplayWithTwoDecimals = (price: string): string => {
  if (isNaN(Number(price)) || price === '0') {
    return '0.00';
  }
  
  price = removeFloatingPoint(price).toString();
  const decimalPlacesToAddDecimal = 3;

  if(price.length < decimalPlacesToAddDecimal) {
    const leadingZeros = '0'.repeat(decimalPlacesToAddDecimal - price.length);
    price = leadingZeros + price;
  }

  const indexToAddDecimalPoint = price.length - 2;
  const cents = price.substring(indexToAddDecimalPoint, price.length);
  const dollars = price.substring(0, indexToAddDecimalPoint);
  const priceWithDecimalPoint: string = `${dollars}.${cents}`;

  return priceWithDecimalPoint;
}

const removeFloatingPoint = (price: string): number => {
  if (isNaN(Number(price))) {
    return 0;
  }

  const priceWithoutDecimalPoint: string = price.replace('.', '');
  const priceWithoutDecimalPointAsNumber: number = Number(priceWithoutDecimalPoint);

  return priceWithoutDecimalPointAsNumber;
}
