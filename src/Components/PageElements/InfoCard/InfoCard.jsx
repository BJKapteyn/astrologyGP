import {InfoCardData} from "./InfoCardData";
import "./InfoCard.css";

export function InfoCard() {
    return (
        <div className="infocard-flex-container">
            {InfoCardData.map((data) => {
                const {id, image, keywordText} = data;

                return (
                    <section className="infocard-flexbox" key={id}>
                        <div className="infocard-image-container">
                            <img className="infocard-image" alt={keywordText} src={require('../../../Pics/InfoCardPics/' + image + '.jpg')}/>
                            <div>
                                <p className="infocard-keyword">{keywordText}</p>
                            </div>
                        </div>
                        
                    </section>
                );
            })}

        </div>
    );
}   