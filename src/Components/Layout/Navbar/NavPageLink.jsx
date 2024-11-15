import { Link } from "react-router-dom";
import {ReactComponent as DownArrow} from '../../../Pics/SvgDrawings/CheveronDown.svg';
import {ReactComponent as UpArrow} from '../../../Pics/SvgDrawings/CheveronUp.svg';
import { useState } from "react";

// return Link with data or submenu if it exists
export const NavPageLink = ({linkData, callBackSelectMenuVisibility = () => {}}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const {text, route, subMenu} = linkData;
    const setMenuVisibility = false;
    const link = <Link onClick={() => callBackSelectMenuVisibility(setMenuVisibility)} className="navbar-link" to={route}>{text}</Link>;
    let navLink;

    if(subMenu) {
        let subNavMark = <DownArrow />;
        let submenuDisplayStatus = 'block'

        if(isExpanded) {
            subNavMark = <UpArrow />;
            submenuDisplayStatus = 'block';
        }
        
        navLink = (
            <ul 
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
            className="navbar-submenu"
            >
                <li className="navbar-submenu-children" id="navbar-submenu-top">
                    {link}
                </li>
                {subMenu.map((subMenu) => {
                    return (
                        <li style={{display: submenuDisplayStatus}} itemtype="http://schema.org/LocalBusiness" itemref="_name1" key={subMenu.id} className="navbar-submenu-drop">
                            <Link itemProp="url" role="link" className="navbar-link" to={subMenu.route}>{subMenu.text}</Link>
                        </li>
                    )
                })}
                <li className="navbar-submenu-children" id="navbar-submenu-mark">{subNavMark}</li>
            </ul>
        );
    } else {
        navLink = link;
    }

    return (
        <li>
            {navLink}
        </li>
    );
}