import { useMediaQuery } from "react-responsive";
import { NavPageLink } from "./NavPageLink";
import { NavBarMobile } from "./Mobile/NavBarMobile";
import yellowLogo from '../../../Pics/Logos/MainLogoYellow.svg';
import {ReactComponent as FaceBook} from '../../../Pics/Logos/facebook_yellow.svg';
import {ReactComponent as Twitter} from '../../../Pics/Logos/twitter_yellow.svg';
import {ReactComponent as Instagram} from '../../../Pics/Logos/instagram_icon_yellow.svg'
import {ReactComponent as Tiktok} from '../../../Pics/Logos/tiktok_yellow.svg';
import '../../../App.css'
import './NavBar.css';

export const NavBar = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

    const defaultNavBar = (
        <nav className='navbar'>
            <ul className="navbar-main-nav">
                <NavPageLink linkData={{text: 'HOME', route: '/', submenu: null}} />
                <NavPageLink linkData={{text: 'THE COLLECTIVE', route: '/Readers', submenu: null}} />
                <li className="navbar-logo-container">
                    <img alt='Yellow main logo' src={yellowLogo} className="navbar-logo" />
                </li>
                <NavPageLink linkData={{text: 'OFFERINGS', route: '/Offerings', submenu: null}} />
                <NavPageLink linkData={{text: 'CURRENT VIBE', route: '/News', submenu: null}} />
            </ul>
            <div className="navbar-social-flex">
                <div className="navbar-social">
                    <Instagram className="navbar-socialimage"></Instagram>
                </div>
                <div className="navbar-social">
                    <Tiktok className="navbar-socialimage"></Tiktok>
                </div>
                <div className="navbar-social">
                    <Twitter className="navbar-socialimage"></Twitter>
                </div>
                <div className="navbar-social">
                    <FaceBook className="navbar-socialimage"></FaceBook>
                </div>
            </div>
        </nav>
    );

    const navBar = isMobile ? <NavBarMobile></NavBarMobile> : defaultNavBar; 
    
    return (
        <div>
            {navBar}
        </div>
    )
}