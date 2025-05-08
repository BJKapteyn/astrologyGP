import { SingleItem } from '../../PageElements/SingleItem/SingleItem';
import { ItemData } from 'Models/Types/types';
import { CalendarEvent } from 'Models/Types/types';
import './EventDetail.css'
import { useEffect, useCallback, useState } from 'react';

interface EventDetailProps {
  eventData?: CalendarEvent;
  // itemData: ItemData;
  // name: string;
  // description: string;
  // imageURL: string;
  // buyNowLink?: string;
}

export const EventDetail: React.FC<EventDetailProps> = ({ eventData }) => {
  let convertedItemData : ItemData | null = null;
  const eventDataToItemData = useCallback((calendarEvent: CalendarEvent) : ItemData => { 
    const itemData: ItemData = {
      id: '1',
      description: calendarEvent?.resource?.description,
      name: calendarEvent?.resource?.eventName,
      imageURL: calendarEvent?.resource?.imageURL,
      buyNowLink: calendarEvent?.resource?.buyNowLink,
      variations: [],
    }

    return itemData;
  }, [])

  convertedItemData = eventDataToItemData(eventData as CalendarEvent);

  return (
    <div className="event-detail-flex">
      {eventData && <SingleItem itemData={convertedItemData}  />}
      {/* <img className='hide' alt={name} />
      <div style={{backgroundImage: `url(${imageURL})`}} className="event-detail-item" />
      <div className="event-detail-item">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-sm text-gray-700">{description}</p>
      </div> */}
    </div>
  );
};
