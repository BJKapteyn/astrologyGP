import { useState } from 'react';
import { ActionButton } from '../../../PageElements/ActionButton/ActionButton.jsx';
import { NavPageLink } from '../NavPageLink.jsx';
import { ReactComponent as  MenuExpand} from '../../../../Pics/Logos/MenuExpand.svg';
import { ReactComponent as  MenuRetract} from '../../../../Pics/Logos/MenuRetract.svg';
import yellowLogo from '../../../../Pics/Logos/MainLogoYellow.svg';
import '../../../../App.css';
import './NavBarMobile.css';

export const NavBarMobile = () => {
    const [menuVisibility, setMenuVisibility] = useState(false);
    
    const expanded = <MenuExpand></MenuExpand>;
    const retracted = <MenuRetract></MenuRetract>;

    function getToggleButtonGraphic() {
        if(menuVisibility === true) {
            return retracted;
        } else {
            return expanded;
        }
    }

    const expandButtonSettings = {
        buttonText: getToggleButtonGraphic(),
        buttonStyleId: 'navbarmobile-menuButton'
    }

    const navbarShow = (
        <ul className="navbar-mainMobile">
            <li className="navbar-logoMobile">
                <img alt='The Vibe Collective' src={yellowLogo} className="navbar-logoMobile" />
            </li>
            <NavPageLink linkData={{text: 'HOME', route: '/', submenu: null}} />
            <NavPageLink linkData={{text: 'WORK WITH US', route: '/Readers', submenu: null}} />
            <NavPageLink linkData={{text: 'OFFERINGS', route: '/Offerings', submenu: null}} />
            <NavPageLink linkData={{text: 'CURRENT VIBE', route: '/WhyVibe', submenu: null}} />
            <NavPageLink linkData={{text: 'SHOP THE VIBE', route: '/Store', submenu: null}} />
        </ul>
    );

    return (
        <div className="navbar-mobile">
            {menuVisibility === true && navbarShow}
            <ActionButton callback={() => setMenuVisibility(!menuVisibility)} buttonSettings={expandButtonSettings}></ActionButton>
        </div>
    );
}