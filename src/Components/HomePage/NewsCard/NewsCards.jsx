import { NewsCardData } from "./NewsCardData";
import './NewsCard.css';

export const NewsCards = ({numberOfCards}) => {
    let cardsToDisplay = numberOfCards ? NewsCardData.slice(0, numberOfCards) : NewsCardData;

    function buildNewsCard(data) {
        if(data == null) {
            console.debug('News card data is null');
        }
        
        const imagePath = require('../../../Pics/Portraits/' + data.image)
        const imageAndContainer = (
            <div className="newscard-image-container">
                <img src={imagePath} alt={data.id} className="newscard-image" />
            </div>
        );

        const textAndContainer = (
            <div className="newscard-text-container">
                <div className="newscard-crop">
                    <h3 className="newscard-text-title">{data.title}</h3>
                    <div className="newscard-text-crop">
                        <p className="newscard-text">{data.text}</p>
                    </div>
                </div>
            </div>
        );

        // set order of image and text
        const newsCard = (
            <div key={data.id} className="newscard">
                {data.imageLeftSide ? imageAndContainer : textAndContainer}
                {data.imageLeftSide ? textAndContainer : imageAndContainer}
            </div>
        );
        return newsCard;
    }

    return(
        <section className="newscards">
            {
                cardsToDisplay.map(data => {
                    return buildNewsCard(data);       
                })
            }
        </section>
    );
}