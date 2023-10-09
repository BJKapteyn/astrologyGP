import './TitleCard.css';
import { logo } from '../../../Pics/Logos/MainLogoTitle.svg'

export default function TitleCard() {
    
    return 
    (
        <section id='titleCard-container'>
            <img src={logo} />
        </section>
    );
}