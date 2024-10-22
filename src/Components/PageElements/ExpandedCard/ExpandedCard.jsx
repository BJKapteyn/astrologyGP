import { Link } from 'react-router-dom';
import { ActionButton } from '../ActionButton/ActionButton';
import '../../../App.css';
import './ExpandedCard.css';

export const ExpandedCard = ({ productItem, callBackDeselect, styleId }) => {
    const { imageURL, name, sign, description} = productItem;

    const bookButtonSettings = {
        buttonText: 'BOOK',
        buttonStyleId: 'expandedcard-bookButton'
    };

    const closeButtonSettings = {
        buttonText: 'X',
        buttonStyleId: 'expandedcard-closeButton'
    };

    const imageSrc = imageURL ? imageURL : require(`../../../Pics/Portraits/portrait-womanField2.png`);

    return (
        <div id={styleId} className="expandedcard-grid">
            <div className="expandedcard-imageflex">
                <img className="expandedcard-image" src={imageSrc} alt={name} />
            </div>
            <div className="expandedcard-info">
                <h4 className="expandedcard-productname">{name}</h4>
                <p className="expandedcard-infotext">{sign}</p>
            </div>
            <div className="expandedcard-button">
                <Link to={"https://the-vibe-collective.square.site/"}><ActionButton buttonSettings={bookButtonSettings}></ActionButton></Link>
                <ActionButton callback={callBackDeselect} buttonSettings={closeButtonSettings}></ActionButton>

            </div> 
            <div className="expandedcard-description">
                <p className="expandedcard-text">{description}</p>
            </div>
        </div>
    )
}