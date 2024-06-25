import { ActionButton } from "../../PageElements/ActionButton/ActionButton";
import '../../../App.css';
import './OfferingSection.css';

export const OfferingItem = ({offeringItemData}) => {
    const {style, title, text} = offeringItemData;

    return (
        <div className="offering-section-flexbox">
            <div id={style} className="offering-section-title-container">
                <h3 className="offering-section-title">{title}</h3>
            </div>
            <div className="offering-section-text-container">
                <p className="offering-section-text">{text}</p>
            </div>
            <ActionButton buttonSettings={{buttonText: 'Join Waitlist'}}></ActionButton>
        </div>
    );
}