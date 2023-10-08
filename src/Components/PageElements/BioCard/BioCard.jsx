import  {CardInfoData}  from "./CardInfoData";
import "./BioCard.css";


export function BioCard() {

    return (
        <div>
            <div className="biocard-flex-container">
                {CardInfoData.map((card) => {
                    const {id, image, description} = card;

                    return (
                        <section className="biocard-flexbox" key={id}>
                            <div className="biocard-image-container">
                                <img className="biocard-image" alt={description} src={require('../../../Pics/BioCardPics/' + image + '.jpg')}></img>
                            </div>
                            <div className="biocard-description-container">
                                <p className="biocard-description">{description}</p>
                            </div>
                        </section>
                    );
                })}
            </div>
        </div>
    );
}