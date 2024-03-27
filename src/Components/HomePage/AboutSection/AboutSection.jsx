import { useState, useRef } from 'react';
import { AboutCardData } from './AboutCardData';
import { AboutCard } from './AboutCard';
import '../../../App.css';
import './AboutSection.css';


export const AboutSection = () => {
    let initialText = '';
    const cardData = useRef(AboutCardData);

    const topCards = AboutCardData.slice(0, 4);
    // const bottomCards = cardData.slice(4, 8);

    // const [selectedData, selectData] = useState(initialText);

    // function handleClick(text) {
    //     selectData(text);
    // }
    return (
        <section className="aboutsection">
            <div className="aboutsection-flexcontainer">
                {AboutCardData.map((aboutCardData) => {
                    debugger;
                    return (
                            <AboutCard aboutCardDataa={aboutCardData} />
                    );
                })}
                {topCards.map((aboutCardData) => {
                    debugger;
                    return (
                        <AboutCard aboutCardDataa={aboutCardData} />

                    )
                })}
            </div>
            <div className="aboutsection-text-container">
                <p style={{opacity: '0', transitionProperty: 'opacity', transitionDuration: '500ms'}} id="fader" className="aboutsection-text">{}</p>
            </div>
        </section>
    )
}