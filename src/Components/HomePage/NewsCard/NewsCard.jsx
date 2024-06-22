import './NewsCard.css';

export const NewsCard = ({newsCardData}) => {
    if(newsCardData == null) {
        console.debug('News card data is null');
    }
    
    const imagePath = require('../../../Pics/' + newsCardData.image);
    const imageId = 'newscard-image' + newsCardData.id;

    const imageAndContainer = (
        <div className="newscard-image-container">
            <img id={imageId} src={imagePath} alt={newsCardData.id} className="newscard-image" />
        </div>
    );

    const textAndContainer = (
        <div className="newscard-text-container">
            <div className="newscard-crop">
                <h3 className="newscard-text-title">{newsCardData.title}</h3>
                <div className="newscard-text-crop">
                    <p className="newscard-text">{newsCardData.text}</p>
                </div>
            </div>
        </div>
    );

    // set order of image and text
    const newsCard = (
        <div key={newsCardData.id} className="newscard">
            {newsCardData.imageLeftSide ? imageAndContainer : textAndContainer}
            {newsCardData.imageLeftSide ? textAndContainer : imageAndContainer}
        </div>
    );
    return newsCard;
}