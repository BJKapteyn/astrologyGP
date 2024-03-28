import { ActionButton } from "../ActionButton/ActionButton";
import { useRef } from "react";
import blurbimage from '../../../Pics/Landscapes/groupYoga.png';
import blurbimage2 from '../../../Pics/Landscapes/findSign.png';
import "./InfoCard.css";

export const InfoCard = () => {
    const moreButtonRef = useRef(null);

    const moreButtonSettings = {
        buttonText: 'JOIN THE COLLECTIVE',
        action: null, 
        buttonStyleId: 'infocard-morebutton'
    }

    return (
        <div className="child-scroll-snap">
            <div className="title-container">
                <h1 id="infocard-title">VIRTUAL METAPHYSICAL READINGS</h1>
            </div>
            <div className="infocard-joinflex">

                <div className="infocard-joinflexitem" id="infocard-join">
                    <h3 id='infocard-joinheader'>THE VIBE</h3>
                    <p className="infocard-description">Guiding you towards a fulfilling life</p>
                    <a href='#joinus-header-id'><ActionButton buttonSettings={moreButtonSettings}></ActionButton></a>
                </div>

            </div>
            <h1 id="infocard-split">Terrot Readings | Astrology | Mediumship</h1>
        </div>
    );
}   