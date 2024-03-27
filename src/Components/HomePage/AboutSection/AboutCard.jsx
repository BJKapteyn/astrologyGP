import '../../../App.css';
import './AboutSection.css';

export const AboutCard = ({aboutCardDataa}) => {
    debugger;   
    return (
        <div id={'aboutCard' + aboutCardDataa.id} className="aboutsection-flexbox" key={aboutCardDataa.id}>

            <div className="aboutsection-image-container">
                <img className="aboutsection-image" alt={aboutCardDataa.keywordText} src={require('../../../Pics/InfoCardPics/' + aboutCardDataa.image + '.jpg')}/>
                <p className="aboutsection-keyword">{aboutCardDataa.keywordText}</p>
            </div>
        </div>
    );
}