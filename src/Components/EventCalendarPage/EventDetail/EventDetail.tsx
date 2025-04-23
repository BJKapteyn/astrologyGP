
interface EventDetailProps {
  name: string;
  description: string;
  imageURL: string;
}

export const EventDetail: React.FC<EventDetailProps> = ({ name, description, imageURL }) => {
  return (
    <div className="flex items-start">
      <img src={imageURL} alt={name} className="w-1/3 h-auto object-cover" />
      <div className="ml-0">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    </div>
  );
};
