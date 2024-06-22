import yellowLogo from '../../../Pics/Logos/MainLogoYellow.svg';
import { NavPageLink } from "./NavPageLink";
import facebook from '../../../Pics/Logos/facebook_grey.svg';
import twitter from '../../../Pics/Logos/twitter_grey.svg';
import instagram from '../../../Pics/Logos/instagram_grey.svg';
import tiktok from '../../../Pics/Logos/tiktok_grey.svg';
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
                    <img className="navbar-socialimage" src={instagram} alt="instagram logo" />
                </div>
                <div className="navbar-social">
                    <img className="navbar-socialimage" src={facebook} alt="facebook logo" />
                </div>
                <div className="navbar-social">
                    <img className="navbar-socialimage" src={twitter} alt="twitter logo" />
                </div>
                <div className="navbar-social">
                    <img className="navbar-socialimage" src={tiktok} alt="tiktok logo" />
                </div>
            </div>
        </nav>
    )
}