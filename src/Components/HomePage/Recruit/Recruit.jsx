import { ActionButton } from "../../PageElements/ActionButton/ActionButton";
import './Recruit.css';

export const Recruit = ({recruitData}) => {
    const {id, title, text, image} = recruitData;

    const imageSource = image ? require('../../../Pics/Landscapes/' + image + '.png') : null;

    return (
        <div key={id} className="recruit-flexbox">
            <div className="recruit-title-container">
                <h3 className="recruit-title">{title}</h3>
            </div>
            <div className="recruit-image-container">
                <img className="recruit-image" src={imageSource} alt={title} />
            </div>
            <div className="recruit-text-container">
                <p>{text}</p>
            </div>
            <ActionButton buttonSettings={{buttonText: 'Join Waitlist'}}></ActionButton>
        </div>
    );
}