import './TitleCard.css';
import '../../../App.css';
import logo  from '../../../Pics/Logos/MainLogoTitle.svg'

export function TitleCard() {
    
    return (
        <section id='titleCard-container'>
            <img alt='Nice purple beach' id='titleCard-logo' src={logo} />
        </section>
    );
}