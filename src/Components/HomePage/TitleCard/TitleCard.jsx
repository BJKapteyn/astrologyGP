import './TitleCard.css';
import '../../../App.css';
import logo  from '../../../Pics/Logos/MainLogoTitle.svg'

export function TitleCard() {

    return (
        <div>
            <section id='titleCard-container'>
                <img id='titleCard-logo' alt='main logo' src={logo} />
            </section>
        </div>
    );
}