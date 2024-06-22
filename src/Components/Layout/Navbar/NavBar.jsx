import yellowLogo from '../../../Pics/Logos/MainLogoYellow.svg';
import { NavPageLink } from "./NavPageLink";
import facebook from '../../../Pics/Logos/facebook.svg';
import twitter from '../../../Pics/Logos/twitter.svg';
import instagram from '../../../Pics/Logos/instagram.svg';
import tiktok from '../../../Pics/Logos/tiktok.svg';
import '../../../App.css'
import './NavBar.css';
import '../../../App.css'

export const NavBar = () => {

    return (
        <nav className='navbar'>
            <ul className="navbar-main-nav">
                <NavPageLink linkData={{text: 'HOME', route: '/', submenu: null}} />
                <NavPageLink linkData={{text: 'WORK WITH US', route: '/Readers', submenu: null}} />
                <li className="navbar-logo-container">
                    <img alt='Yellow main logo' src={yellowLogo} className="navbar-logo" />
                </li>
                <NavPageLink linkData={{text: 'OFFERINGS', route: '/', submenu: null}} />
                <NavPageLink linkData={{text: 'CURRENT VIBE', route: '/News', submenu: null}} />
            </ul>
            <div className="navbar-social-flex">
                <div className="navbar-social">
                    <img src={instagram} alt="instagram logo" />
                </div>
                <div className="navbar-social">
                    <img src={facebook} alt="facebook logo" />
                </div>
                <div className="navbar-social">
                    <img src={twitter} alt="twitter logo" />
                </div>
                <div className="navbar-social">
                    <img src={tiktok} alt="tiktok logo" />
                </div>
            </div>
        </nav>
    )
}