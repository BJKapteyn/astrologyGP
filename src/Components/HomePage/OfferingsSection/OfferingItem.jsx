import { ActionButton } from "../../PageElements/ActionButton/ActionButton";
import './OfferingSection.css';

export const OfferingItem = ({offeringItemData}) => {
    const {id, title, text, image} = offeringItemData;

    const imageSource = image ? require('../../../Pics/Landscapes/' + image) : null;

    return (
        <div className="offering-section--flexbox">
            <div className="offering-section--title-container">
                <h3 className="offering-section--title">{title}</h3>
            </div>
            <div className="offering-section--image-container">
                <img className="offering-section--image" src={imageSource} alt={title} />
            </div>
            <div className="offering-section--text-container">
                <p>{text}</p>
            </div>
            <ActionButton buttonSettings={{buttonText: 'Join Waitlist'}}></ActionButton>
        </div>
    );
}