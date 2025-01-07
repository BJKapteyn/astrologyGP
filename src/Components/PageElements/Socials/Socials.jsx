import { Link } from 'react-router-dom';
import { ReactComponent as FaceBook } from '../../../Pics/Logos/facebook_yellow.svg';
import { ReactComponent as Instagram } from '../../../Pics/Logos/instagram_icon_yellow.svg'
import { ReactComponent as Tiktok } from '../../../Pics/Logos/tiktok_yellow.svg';
import { socialLinks } from '../../../Data/Socials/socialLinks';
import '../../../App.css';
import './Socials.css';

// Links to social media pages
export const Socials = ({ styleId = null }) => {
    const styleid = styleId ?? '';

    return(
        <div className="socials-flex">
            <div className="socials-flexitem">
                <Link to={socialLinks.instagram}>
                    <Instagram id={styleid} className="socials-image"></Instagram>
                </Link>
            </div>
            <div className="socials-flexitem">
                <Link to={socialLinks.tiktok}>
                    <Tiktok id={styleid} className="socials-image"></Tiktok>
                </Link>
            </div>
            <div className="socials-flexitem">
                <Link to={socialLinks.facebook}>
                    <FaceBook id={styleid} className="socials-image"></FaceBook>
                </Link>
            </div>
        </div>
    );
}
