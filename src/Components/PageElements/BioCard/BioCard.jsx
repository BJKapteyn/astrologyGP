import  {CardInfoData}  from "./CardInfoData";
import "./BioCard.css";


export function BioCards() {

    return (
        <div className="biocard-flex-container">
            {CardInfoData.map((card) => {
                return <BioCard id={card.id} description={card.description} image={card.image} />;
                })}
        </div>
    );
}

export function BioCard(cardData) {
    return (
        <section className="biocard-flexbox" key={cardData.id}>
            <div className="biocard-image-container">
                <img className="biocard-image" alt={cardData.description} src={require('../../../Pics/BioCardPics/' + cardData.image + '.jpg')}></img>
            </div>
            <div className="biocard-description-container">
                <p className="biocard-description">{cardData.description}</p>
            </div>
        </section>
    );
}