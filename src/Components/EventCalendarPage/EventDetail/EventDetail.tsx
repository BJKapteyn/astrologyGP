import { SingleItem } from '../../PageElements/SingleItem/SingleItem';
import { ItemData } from 'Models/Interfaces/ItemData';
import './EventDetail.css'

interface EventDetailProps {
  name: string;
  description: string;
  imageURL: string;
}

export const EventDetail: React.FC<EventDetailProps> = ({ name, description, imageURL }) => {

  const itemData: ItemData = {
    id: '1',
    description: description,
    name: name,
    imageURL: imageURL,
    buyNowLink: '',
    variations: [],
  };

  return (
    <div className="event-detail-flex">
      <SingleItem itemData={itemData}  />
      <img className='hide' alt={name} />
      <div style={{backgroundImage: `url(${imageURL})`}} className="event-detail-item" />
      <div className="event-detail-item">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    </div>
  );
};
