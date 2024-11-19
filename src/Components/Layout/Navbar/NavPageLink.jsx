import { Link } from "react-router-dom";
import { ReactComponent as DownArrow } from '../../../Pics/SvgDrawings/CheveronDown.svg';
import { ReactComponent as UpArrow } from '../../../Pics/SvgDrawings/CheveronUp.svg';
import { useState } from "react";

// return Link with data or optional submenu
export const NavPageLink = ({linkData}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const {text, route, subMenu} = linkData;
    let link = <Link className="navbar-link" to={route}>{text}</Link>;
    let navLink;
    
    function handleSubmenuVisibility(isVisible) {
        setIsExpanded(isVisible);
    }

    if(subMenu) {
        let subNavMark = <DownArrow className="navbar-submenu-arrow" />;
        let displayStatus = 'relative';
        

        if(isExpanded) {
            subNavMark = <UpArrow className="navbar-submenu-arrow" />;
            displayStatus = 'absolute';
        }

        if(!isExpanded) {
            link = <Link className="navbar-link">{text}</Link>;
        }
        
        navLink = (
            <ul 
            style={{position: displayStatus, top: '36%'}}
            onMouseEnter={() => handleSubmenuVisibility(true)}
            onMouseLeave={() => handleSubmenuVisibility(false)}
            className="navbar-submenu"
            >
                <li onClick={() => handleSubmenuVisibility(true)} className="navbar-submenu-children" id="navbar-submenu-top">
                    {link}
                </li>
                {isExpanded && subMenu.map((subMenu) => {
                    return (
                        <li onClick={() => handleSubmenuVisibility(true)} key={subMenu.id} className="navbar-submenu-drop">
                            <Link itemProp="url" role="link" className="navbar-link" to={subMenu.route}>{subMenu.text}</Link>
                        </li>
                    )
                })}
                <li onClick={() => handleSubmenuVisibility(!isExpanded)} className="navbar-submenu-children" id="navbar-submenu-mark">{subNavMark}</li>
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