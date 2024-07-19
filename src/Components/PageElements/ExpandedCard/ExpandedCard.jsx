import { ActionButton } from '../ActionButton/ActionButton';
import '../../../App.css';
import './ExpandedCard.css';

export const ExpandedCard = ({ productItem, callBackDeselect }) => {
    const { image,
            name,
            info,
            description} = productItem;

    const bookButtonSettings = {
        buttonText: 'BOOK',
        buttonStyleId: 'modalitem-bookButton'
    };

    const closeButtonSettings = {
        buttonText: 'CLOSE',
        buttonStyleId: 'modalitem-closeButton'
    };


    const imageSrc = require(`../../../Pics/Headshots/${image}`);

    return (
        <div className="modalitem-grid">
            <div className="modalitem-imageflex">
                <img className="modalitem-image" src={imageSrc} alt={name} />
            </div>
            <div className="modalitem-info">
                <h4 className="modalitem-productname">{name}</h4>

                <p className="modalitem-infotext">{info}</p>
                    
            </div>
            <div className="modalitem-button">
                <ActionButton buttonSettings={bookButtonSettings}></ActionButton>
                <ActionButton callback={callBackDeselect} buttonSettings={closeButtonSettings}></ActionButton>
            </div> 
            <div className="modalitem-description">
                <p className="modalitem-text">{description}</p>
            </div>
        </div>
    )
}