import { useState, useEffect } from 'react';
import { InfoCardData } from '../../PageElements/InfoCard/InfoCardData';
import '../../../App.css';
import './AboutSection.css';


export const AboutSection = () => {
    let initialText = '';
    let fadeInElement = () => document.getElementById('fader');  


    const [selectedData, selectData] = useState(initialText);

    function addFade() {
        let fadeClass = 'fade';
        let elementToFade = fadeInElement();
        if(elementToFade.classList.contains(fadeClass)) {
            elementToFade.classList.remove(fadeClass);
        }
        elementToFade.style.opacity = '0';
        elementToFade.classList.add(fadeClass);
    }

    function handleClick(text) {
        addFade();
        selectData(text);
    }

    return (
        <section className="aboutsection">
            <div className="aboutsection-flexcontainer">
                {InfoCardData.map((data) => {
                    const {id, image, keywordText, text} = data;
                    return (
                        <div onClick={() => handleClick(text)} className="aboutsection-flexbox" key={id}>
                            <div className="aboutsection-image-container">
                                <img className="aboutsection-image" alt={keywordText} src={require('../../../Pics/InfoCardPics/' + image + '.jpg')}/>
                                <p className="aboutsection-keyword">{keywordText}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="aboutsection-text-container">
                <p id="fader" className="aboutsection-text">{selectedData}</p>
            </div>
        </section>
    )
}