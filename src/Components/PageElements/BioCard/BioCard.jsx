import '../../../App.css';
import './BioCard.css';

// cardData         - data to populate the card
// callBackSelect   - call back function to select this card's data for the modal
export const BioCard = ({cardData, callbackSelect})  => {
    let imageSource = cardData.imageURL ? cardData.imageURL : require('../../../Pics/Headshots/' + cardData.image);
    
    return (
        <section onClick={() => callbackSelect(cardData)} className="biocard-flexbox" key={cardData.id}>
            <div className="biocard-image-container">
                <img className="biocard-image" alt={cardData.description} src={imageSource}></img>
            </div>
            <p className="biocard-button">+</p>
            <div className="biocard-info-container">
                <h4 className="biocard-infoName">{cardData.name}</h4>
                <p className="biocard-infoSign">{cardData.sign}</p>
            </div>
        </section>
    );
}