import { Link } from 'react-router-dom';
import { ActionButton } from '../../ActionButton/ActionButton.jsx';
import { ReactComponent as Eye } from '../../../../Pics/SvgDrawings/EYE-VECTOR.svg';
import '../../../../App.css';
import './ExpandedCard.css';

export const ExpandedCard = ({ productItem, callBackDeselect, styleId }) => {
    const { imageURL, name, sign, description, threeWords, expertise } = productItem;

    const bookButtonSettings = {
        buttonText: 'BOOK',
        buttonStyleId: 'expandedcard-bookButton'
    };

    const closeButtonSettings = {
        buttonText: 'X',
        buttonStyleId: 'expandedcard-closeButton'
    };

    const imageSrc = imageURL ? imageURL : require(`../../../../Pics/Portraits/portrait-womanField2.png`);

    return (
        <div id={styleId} className="expandedcard-grid">
            <div className="expandedcard-imageflex">
                <img className="expandedcard-image" src={imageSrc} alt={name} />
            </div>
            <div className="expandedcard-info">
                <h4 className="expandedcard-productname">{name}</h4>
                <Eye id="expandedcard-eye" />
                <p className="expandedcard-infotext">{sign}</p>
                <p className="expandedcard-infotext">
                    Three words that describe me: 
                    <span className="expandedcard-attribute"> {threeWords}</span>
                </p>
                {expertise && (
                    <p className="expandedcard-infotext">
                        Expertise: 
                        <span className="expandedcard-attribute"> {expertise}</span>
                    </p>
                )}
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