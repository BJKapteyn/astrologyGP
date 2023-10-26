import './TitleCard.css';
import '../../../App.css';
import logo  from '../../../Pics/Logos/MainLogoTitle.svg'

// Homepage Landing
export function TitleCard() {
    

    return (
        <div>
            <section id='titleCard-container'>
                <img alt='main logo' src={logo} />
            </section>
        </div>
    );
}