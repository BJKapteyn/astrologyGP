import { Subscribe } from './Subscribe/Subscribe';
import { Socials } from '../../PageElements/Socials/Socials';
import sublogo from '../../../Pics/Logos/VC--01.png'
import './Footer.css';
import '../../../App.css';

export const Footer = () => {

    return (
        <footer className='footer'>
            <Subscribe></Subscribe>
            <div className="footer-flexrow" id="footer-logo">
                <img id="footer-image" src={sublogo} alt="Vibe Collective" />
            </div>
            <div className="footer-flexrow" id="footer-socials-contianer">

                <Socials styleId={'footer-socials'}></Socials>

            </div>
            <div className="footer-flexrow">
                <p className="footer-disclaimer">Disclaimer: Readings, classes, and events are intended for entertainment and personal growth purposes only. They are not a substitute for professional advice or counseling. Participation in these activities does not guarantee any specific outcomes. Individuals are responsible for their own decisions and actions.</p>
            </div>
            <div className="footer-flexrow" id="footer-rights">
                <p className="footer-itemtext">THE VIBE COLLECTIVE 2024</p>
            </div>
        </footer>
    )
}