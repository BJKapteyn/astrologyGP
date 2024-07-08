import { useState } from 'react';
import { ActionButton } from '../../../PageElements/ActionButton/ActionButton.jsx'
import '../../../../App.css';
import './NavBarMobile.css';

export const NavBarMobile = () => {
    const [menuVisibility, setMenuVisibility] = useState(false);
    const visibleOrHidden = {
        visible: 'X',
        hidden: 'O'
    }

    function getMenuText() {
        if(menuVisibility === true) {
            return visibleOrHidden.visible;
        } else {
            return visibleOrHidden.hidden;
        }
    }

    const expandButtonSettings = {
        buttonText: getMenuText(),
        buttonStyleId: 'navbarmobile-menuButton'
    }


    return (
        <div className="navbar-mainMobile">
            <ActionButton callback={() => setMenuVisibility(!menuVisibility)} buttonSettings={expandButtonSettings}></ActionButton>
        </div>
    );
}