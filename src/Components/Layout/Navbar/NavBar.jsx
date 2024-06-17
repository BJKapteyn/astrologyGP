import yellowLogo from '../../../Pics/Logos/MainLogoYellow.png';
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
                <img alt='Yellow main logo' src={yellowLogo} className="navbar-logo" />
                <NavPageLink linkData={{text: 'OFFERINGS', route: '/', submenu: null}} />
                <NavPageLink linkData={{text: 'CURRENT VIBE', route: '/News', submenu: null}} />
                {/* {NavLinkData.map((linkDatas) => {

                    return (
                        <NavPageLink key={linkDatas.id} linkData={linkDatas}></NavPageLink>
                    );
                })} */}
            </ul>
            <div className="navbar-social-flex">
                <div className="navbar-social">
                    <img src={instagram} alt="" />
                </div>
                <div className="navbar-social">
                    <img src={facebook} alt="" />
                </div>
                <div className="navbar-social">
                    <img src={twitter} alt="" />
                </div>
                <div className="navbar-social">
                    <img src={tiktok} alt="" />
                </div>
            </div>
        </nav>
    )
}