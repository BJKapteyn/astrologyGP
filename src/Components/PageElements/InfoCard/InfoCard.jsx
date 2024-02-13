import { ActionButton } from "../ActionButton/ActionButton";
import blurbimage from '../../../Pics/Landscapes/groupYoga.png';
import blurbimage2 from '../../../Pics/Landscapes/findSign.png';
import { ZodiacDecor } from '../../PageElements/ZodiacDecor/ZodiacDecor';
import "./InfoCard.css";

export function InfoCard() {
    const moreButtonSettings = {
        buttonText: 'more',
        action: null, 
        buttonStyleId: 'infocard-morebutton'
    }

    return (
        <div>
            <div className="title-container">
                <h1 id="infocard-title">REMOTE DIVINATION READINGS</h1>
            </div>
            <div className="infocard-joinflex">
                <div className="infocard-joinflexitem" id="infocard-leftimage-container">
                    <img src={blurbimage} alt="yoga" id="infocard-blurbimage" />
                </div>
                <div className="infocard-joinflexitem" id="infocard-join">
                    <h3 id='infocard-joinheader'>THE VIBE</h3>
                    <p className="infocard-description">Welcome to Vibe Collective, where we provide quality divination readings online to help you access various metaphysical and healing techniques.</p>
                    <ActionButton buttonSettings={moreButtonSettings}></ActionButton>
                </div>
                <div className="infocard-joinflexitem" id="infocard-rightimage-container">
                    <img src={blurbimage2} alt="astrology" id="infocard-blurbimage" />
                </div>
            </div>
            <h1 id="infocard-split">Terrot Cards | astrology | spiritual connection</h1>
        </div>
    );
}   