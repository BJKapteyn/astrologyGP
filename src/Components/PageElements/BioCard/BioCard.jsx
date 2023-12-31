import "./BioCard.css";

// cardData         - data to populate the card
// callBackSelect   - call back function to select this card's data for the modal in the parent page
export const BioCard = ({cardData, callbackSelect})  => {
    return (
        <section onClick={() => callbackSelect(cardData)} className="biocard-flexbox" key={cardData.id}>
            <div className="biocard-image-container">
                <span className="biocard-name">{cardData.name}</span>
                <img className="biocard-image" alt={cardData.description} src={require('../../../Pics/Headshots/' + cardData.image)}></img>
            </div>
            <div className="biocard-description-container">
                <p className="biocard-description">{cardData.description}</p>
            </div>
        </section>
    );
}