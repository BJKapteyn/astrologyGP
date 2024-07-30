import { Subscribe } from './Subscribe/Subscribe';
import facebook from '../../../Pics/Logos/facebook-48.png';
import instagram from '../../../Pics/Logos/instagram-48.png';
import tiktok from '../../../Pics/Logos/tiktok-48.png';
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
            {/* <div className="footer-flexrow" id="footer-links">
                <div className="footer-item">
                    <p className="footer-itemtext">CONSULTATIONS</p>
                </div>
                <div className="footer-item">
                    <p className="footer-itemtext">ABOUT ME</p>
                </div>
                <div className="footer-item">
                    <p className="footer-itemtext">FAQ</p>
                </div>
                <div className="footer-item">
                    <p className="footer-itemtext">UPCOMING EVENTS</p>
                </div>
                <div className="footer-item">
                    <p className="footer-itemtext">BLOG</p>
                </div>
                <div className='footer-item'>
                    <p className="footer-itemtext">CONNECT</p>
                </div>
            </div> */}
            <div className="footer-flexrow" id="footer-socials">
                <div className="footer-social">
                    <img src={facebook} alt="facebook" />
                </div>
                <div className="footer-social">
                    <img src={instagram} alt="instagram" />
                </div>
                <div className="footer-social">
                    <img src={tiktok} alt="tiktok" />
                </div>
            </div>
            <div className="footer-flexrow" id="footer-rights">
                <p className="footer-itemtext">THE VIBE COLLECTIVE 2024</p>
            </div>
        </footer>
    )
}