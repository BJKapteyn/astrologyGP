import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { NavPageLink } from "./NavPageLink";
import { Socials } from "../../PageElements/Socials/Socials";
import { NavBarMobile } from "./Mobile/NavBarMobile";
import { NavLinkData } from "./NavLinkData";
import yellowLogo from '../../../Pics/Logos/MainLogoYellow.svg';
import '../../../App.css'
import './NavBar.css';

export const NavBar = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
    
    const defaultNavBar = (
        <div className='navbar'>
            <ul className="navbar-main-nav">
                {NavLinkData.slice(0, 3).map(navLinkData => {
                    return <NavPageLink key={navLinkData.id} linkData={navLinkData}></NavPageLink>
                })}
                <li className="navbar-logo-container">
                    <Link to={'./'}>
                        <img alt='Yellow main logo' src={yellowLogo} className="navbar-logo" />
                    </Link>
                </li>
                {NavLinkData.slice(3, 6).map(navLinkData => {
                    return <NavPageLink key={navLinkData.id} linkData={navLinkData}></NavPageLink>
                })}
            </ul>
            <div className="navbar-social-flex">
                <Socials></Socials>
            </div>
        </div>
    );

    const navBar = isMobile ? <NavBarMobile></NavBarMobile> : defaultNavBar; 
    
    return (
        <nav id="navbar-container">
            {navBar}
        </nav>
    )
}