import facebook from '../../../Pics/Logos/facebook_grey.svg';
import twitter from '../../../Pics/Logos/twitter_grey.svg';
import instagram from '../../../Pics/Logos/instagram_grey.svg';
import tiktok from '../../../Pics/Logos/tiktok_grey.svg';
import './NavBar.css';

export const NavBarSocial = () => {

    return (
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
    );
}