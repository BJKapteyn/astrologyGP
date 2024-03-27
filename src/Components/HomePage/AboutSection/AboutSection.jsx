import { useState, useRef } from 'react';
import { AboutCardData } from './AboutCardData';
import { AboutCard } from './AboutCard';
import '../../../App.css';
import './AboutSection.css';


export const AboutSection = () => {
    const [text, setText] = useState('');

    const topCards = useRef(AboutCardData.slice(0, 4));
    const bottomCards = useRef(AboutCardData.slice(4, 8));

    // const [selectedData, selectData] = useState(initialText);

    // function handleClick(text) {
    //     selectData(text);
    // }
    return (
        <section className="aboutsection">
            <div className="aboutsection-flexcontainer">
                {topCards.current.map((aboutCardData) => {
                    return (
                        <AboutCard setOutText={setText} key={aboutCardData.id} aboutCardDataa={aboutCardData} />
                    );
                })}
            </div>
            <div id='aboutsection-textoutput'>
                <p>{text}</p>
            </div>
            <div className="aboutsection-flexcontainer">
                {bottomCards.current.map((aboutCardData) => {
                    return (
                        <AboutCard setOutText={setText} key={aboutCardData.id} aboutCardDataa={aboutCardData} />
                    );
                })}
            </div>
            <div className="aboutsection-text-container">
                <p style={{opacity: '0', transitionProperty: 'opacity', transitionDuration: '500ms'}} id="fader" className="aboutsection-text">{}</p>
            </div>
        </section>
    )
}