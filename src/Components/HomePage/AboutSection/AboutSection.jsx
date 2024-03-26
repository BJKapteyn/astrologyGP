import { useState } from 'react';
import { InfoCardData } from '../../PageElements/InfoCard/InfoCardData';
import '../../../App.css';
import './AboutSection.css';


export const AboutSection = () => {
    let initialText = '';

    const [selectedData, selectData] = useState(initialText);

    function handleClick(text) {
        selectData(text);
    }

    return (
        <section className="aboutsection">
            <div className="aboutsection-flexcontainer">
                {InfoCardData.map((data) => {
                    const {id, image, keywordText, text} = data;
                    let actualText = null;

                    if(image) {
                        actualText = require('../../../Pics/InfoCardPics/' + image + '.jpg');
                    }
                    
                    return (
                        <div onClick={() => handleClick(text)} className="aboutsection-flexbox" key={id}>
                            <div className="aboutsection-image-container">
                                <img className="aboutsection-image" alt={keywordText} src={actualText}/>
                                <p className="aboutsection-keyword">{keywordText}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="aboutsection-text-container">
                <p style={{opacity: '0', transitionProperty: 'opacity', transitionDuration: '500ms'}} id="fader" className="aboutsection-text">{selectedData}</p>
            </div>
        </section>
    )
}