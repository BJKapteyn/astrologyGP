import { useCallback } from 'react';
import { SingleItem } from '../../PageElements/SingleItem/SingleItem';
import { ItemData } from 'Models/Types/types';
import { CalendarEvent } from 'Models/Types/types';
import './EventDetail.css'

interface EventDetailProps {
  eventData?: CalendarEvent;
}

export const EventDetail: React.FC<EventDetailProps> = ({ eventData }) => {
  let convertedItemData: ItemData | null = null;
  const eventDataToItemData = useCallback((calendarEvent: CalendarEvent): ItemData => {
    const itemData: ItemData = {
      id: '1',
      description: calendarEvent?.resource?.EventDescription ?? '',
      name: calendarEvent?.resource?.EventName ?? '',
      imageURL: calendarEvent?.resource?.BannerImageUrl ?? '',
      buyNowLink: '',
      variations: [],
    }

    return itemData;
  }, [])

  convertedItemData = eventDataToItemData(eventData as CalendarEvent);

  return (
    <div className="event-detail-flex">
      {eventData && <SingleItem itemData={convertedItemData} />}
    </div>
  );
};
