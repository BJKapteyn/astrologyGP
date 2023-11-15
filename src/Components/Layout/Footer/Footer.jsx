import './Footer.css';
import facebook from '../../../Pics/Logos/facebook-48.png';
import twitter from '../../../Pics/Logos/twitter-48.png';
import instagram from '../../../Pics/Logos/instagram-48.png';
import tiktok from '../../../Pics/Logos/tiktok-48.png';


export function Footer() {

    return (
        <footer className='footer-container'>
            <div className="footer-flex-item">
                <div className="footer-social">
                    <img src={twitter} alt="twitter" />
                </div>
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
            <div className="footer-companyinfo footer-flex-item">
                <div id='footer-top-item' className='footer-item'>
                    <p>Company</p>
                </div>
                <div className='footer-item'>
                    <p>Copyright 2023</p>
                </div>
                <div className='footer-item'>
                    <a href='tel:5554412345'><p>Phone</p></a>
                </div>
                <div className='footer-item'>
                    <p>Email</p>
                </div>
            </div>
            <div className="footer-flex-item">

                
            </div>
        </footer>
    )
}