import { useMediaQuery } from 'react-responsive';
import { ReactComponent as EyeDrawing } from '../../../Pics/SvgDrawings/EYE-VECTOR.svg'

import '../../../App.css';
import './NewsCard.css';

export const NewsCard = ({ newscard }) => {
    const { id, title, image, text, text2, text3, styleId, imageLeftSide } = newscard;
    const imagePath = require('../../../Pics/' + image);
    const isMobile = useMediaQuery({ query: '(max-width: 750px)' });

    const cardImage = (
        <div style={{backgroundImage: `url(${imagePath})`}} className="newscard-image-container">
        </div>
    );

    const cardText = (
        <div id={styleId} className="newscard-text-container">
            <h3 className="newscard-text-title">{title}</h3>
            <EyeDrawing className='newscard-eyedrawing'></EyeDrawing>
            <p className="newscard-text">{text}</p>
            {text2 && <p className="newscard-text">{text2}</p>}
            {text3 && <p className="newscard-text">{text3}</p>}
        </div>
    );

    // Set order of image and text
    const newsCard = (
        <div key={id} className="newscard">
            {imageLeftSide ? cardImage : cardText}
            {imageLeftSide ? cardText : cardImage}
        </div>
    );

    const newsCardMobile = (
        <div key={id} className="newscard">
            {cardImage}
            {cardText}
        </div>
    );

    return isMobile ? newsCardMobile : newsCard;
}