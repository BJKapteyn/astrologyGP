import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { ReactComponent as DownArrow } from '../../../Pics/SvgDrawings/CheveronDown.svg';
import { ReactComponent as UpArrow } from '../../../Pics/SvgDrawings/CheveronUp.svg';
import { useState } from "react";

// return Link with data or optional submenu
export const NavPageLink = ({linkData}) => {
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
    const [isExpanded, setIsExpanded] = useState(false);
    const {text, route, subMenu} = linkData;
    let link = <Link className="navbar-link" to={route}>{text}</Link>;
    let navLink;
    
    function handleSubmenuVisibility(isVisible) {
        setIsExpanded(isVisible);
    }

    if(subMenu) {
        let subNavMark = <DownArrow className="navbar-submenu-arrow" />;
        let displayStatus = 'none';
        
        if(isExpanded) {
            subNavMark = <UpArrow className="navbar-submenu-arrow" />;
            displayStatus = 'block';
        }
        
        if(!isExpanded) {
            link = <Link className="navbar-link">{text}</Link>;
        }
        
        const arrow = <li onClick={() => handleSubmenuVisibility(!isExpanded)} className="navbar-submenu-children" id="navbar-submenu-mark">{subNavMark}</li>
        navLink = (
            <ul 
            onMouseEnter={() => handleSubmenuVisibility(true)}
            onMouseLeave={() => handleSubmenuVisibility(false)}
            className="navbar-submenu"
            >
                <li onClick={() => handleSubmenuVisibility(true)} id="navbar-submenu-top">
                    {link}
                    {isMobile && arrow}
                </li>
                {subMenu.map((subMenu) => {
                    return (
                        <li style={{display: displayStatus}} onClick={() => handleSubmenuVisibility(true)} key={subMenu.id} className="navbar-submenu-drop">
                            <Link itemProp="url" role="link" className="navbar-link" to={subMenu.route}>{subMenu.text}</Link>
                        </li>
                    )
                })}
                {!isMobile && arrow}
            </ul>
        );
    } else {
        navLink = link;
    }

    return (
        <li className="navbar-navbutton">
            {navLink}
        </li>
    );
}