import { useMediaQuery } from "react-responsive";
import { NavPageLink } from "./NavPageLink";
import { Socials } from "../../PageElements/Socials/Socials";
import { NavBarMobile } from "./Mobile/NavBarMobile";
import yellowLogo from '../../../Pics/Logos/MainLogoYellow.svg';
import '../../../App.css'
import './NavBar.css';

export const NavBar = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

    const defaultNavBar = (
        <nav className='navbar'>
            <ul className="navbar-main-nav">
                <NavPageLink linkData={{text: 'HOME', route: '/', submenu: null}} />
                <NavPageLink linkData={{text: 'OFFERINGS', route: '/Offerings', submenu: null}} />
                <NavPageLink linkData={{text: 'THE COLLECTIVE', route: '/Readers', submenu: null}} />
                <li className="navbar-logo-container">
                    <img alt='Yellow main logo' src={yellowLogo} className="navbar-logo" />
                </li>
                <NavPageLink linkData={{text: 'SHOP THE VIBE', route: '/Store', submenu: null}} />
                <NavPageLink linkData={{text: 'THE CURRENT VIBE', route: '/CurrentVibe', submenu: null}} />
                <NavPageLink linkData={{text: 'WORK WITH US', route: '/WhyVibe', submenu: null}} />
            </ul>
            <div className="navbar-social-flex">
                <Socials></Socials>
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