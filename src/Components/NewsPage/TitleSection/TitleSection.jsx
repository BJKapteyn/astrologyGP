import moonfade from '../../../Pics/Landscapes/jpeg/moonFade.jpg'
import './TitleSection.css';

export const TitleSection = () => {
    
    return (
        <div className="titlesection">
            <div className="titlesection-image-container">
                <img id="moonfade-image" src={moonfade} alt="moon and clouds" />
            </div>
            <div className="titlesection-container">
                <h1 className="titlesection-title">Recent News</h1>
            </div>
        </div>
    )
}