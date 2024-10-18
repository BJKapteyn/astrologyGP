import '../../../App.css';
import './BioCard.css';

// cardData         - data to populate the card
// callBackSelect   - call back function to select this card's data for the modal
export const BioCard = ({cardData, callbackSelect})  => {
    let imageSource = cardData.imageURL ? cardData.imageURL : require(`../../../Pics/Landscapes/jpeg/girlOnBeach.jpg`);
    
    return (
        <section onClick={() => callbackSelect(cardData)} className="biocard-flexbox" key={cardData.id}>
            <div className="biocard-image-container" style={{backgroundImage: `url(${imageSource})`}}>
                <div className="biocard-image" style={{backgroundImage: `url(${imageSource})`}}></div>
            </div>
            <p className="biocard-button">+</p>
            <div className="biocard-info-container">
                <h4 className="biocard-infoName">{cardData.name}</h4>
                <p className="biocard-infoSign">{cardData.sign}</p>
            </div>
        </section>
    );
}