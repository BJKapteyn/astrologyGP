import { useState, useEffect } from 'react';
import { InfoCardData } from '../../PageElements/InfoCard/InfoCardData';
import './AboutSection.css';


export const AboutSection = () => {
    let initialText = '';

    useEffect(() => {
        if(InfoCardData != null) {
            initialText = InfoCardData[0].text;
        } else {
            console.log(`Infocard data is ${InfoCardData}`);
        }
    }, []);

    const [selectedData, selectData] = useState(initialText);

    return (
        <section className="aboutsection">
            <div className="aboutsection-flexcontainer">
                {InfoCardData.map((data) => {
                    const {id, image, keywordText, text} = data;
                    return (
                        <div onClick={() => selectData(text)} className="aboutsection-flexbox" key={id}>
                            <div className="aboutsection-image-container">
                                <img className="aboutsection-image" alt={keywordText} src={require('../../../Pics/InfoCardPics/' + image + '.jpg')}/>
                                <p className="aboutsection-keyword">{keywordText}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="aboutsection-text-container">
                <p className="aboutsection-text">{selectedData}</p>
            </div>
        </section>
    )
}