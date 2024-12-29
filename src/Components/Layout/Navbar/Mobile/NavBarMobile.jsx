import { useState } from 'react';
import { ActionButton } from '../../../PageElements/ActionButton/ActionButton.jsx';
import { NavPageLink } from '../NavPageLink.jsx';
import { ReactComponent as MenuExpand} from '../../../../Pics/Logos/MenuExpand.svg';
import { ReactComponent as MenuRetract} from '../../../../Pics/Logos/MenuRetract.svg';
import { NavLinkData } from '../NavLinkData.jsx';
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

    function closeMenu() {
        setMenuVisibility(false);
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
            {NavLinkData.map(navData => {
                return <NavPageLink key={navData.id} callBackSelectCloseMenu={() => closeMenu()} linkData={navData} />
            })}
        </ul>
    );

    return (
        <nav id="navbar-mobile">
            {menuVisibility === true && navbarShow}
            <ActionButton callback={() => setMenuVisibility(!menuVisibility)} buttonSettings={expandButtonSettings}></ActionButton>
        </nav>
    );
}