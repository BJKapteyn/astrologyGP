import { ActionButton } from '../ActionButton/ActionButton';
import './ExpandedCard.css';

export const ExpandedCard = ({ productItem }) => {
    const { image,
            name,
            info,
            description,
            buttonText } = productItem;

    const bookButtonSettings = {
        buttonText: buttonText
    };

    return (
        <div className="modalitem-grid">
            <div className="modalitem-imageflex">
                <img src={image} alt={name} />
            </div>
            <div className="modalitem-info">
                <h4 className="modalitem-productname">{name}</h4>

                <div className="modalitem-infotext">
                    {info}
                </div>
                    
            </div>
            <div className="modalitem-button">
                <ActionButton buttonSettings={bookButtonSettings}></ActionButton>
            </div>
            <div className="modalitem-description">
                <p className="modalitem-text">{description}</p>
            </div>
        </div>
    )
}