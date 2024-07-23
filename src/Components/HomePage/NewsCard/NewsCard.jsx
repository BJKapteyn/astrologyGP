import { useMediaQuery } from 'react-responsive';
import './NewsCard.css';

export const NewsCard = ({ newsCardData }) => {
    const imagePath = require('../../../Pics/' + newsCardData.image);
    const imageId = 'newscard-image' + newsCardData.id;
    const isMobile = useMediaQuery({ query: '(max-width: 750px)' });

    const image = (
        <div className="newscard-image-container">
            <img id={imageId} src={imagePath} alt={newsCardData.id} className="newscard-image" />
        </div>
    );

    const text = (
        <div className="newscard-text-container">
            <div className="newscard-crop">
                <h3 className="newscard-text-title">{newsCardData.title}</h3>
                <div className="newscard-text-crop">
                    <p className="newscard-text">{newsCardData.text}</p>
                </div>
            </div>
        </div>
    );

    // Set order of image and text
    const newsCard = (
        <div key={newsCardData.id} className="newscard">
            {newsCardData.imageLeftSide ? image : text}
            {newsCardData.imageLeftSide ? text : image}
        </div>
    );

    const newsCardMobile = (
        <div key={newsCardData.id} className="newscard">
            {image}
            {text}
        </div>
    );

    return isMobile ? newsCardMobile : newsCard;
}