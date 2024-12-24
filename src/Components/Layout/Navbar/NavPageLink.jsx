import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { ReactComponent as DownArrow } from '../../../Pics/SvgDrawings/CheveronDown.svg';
import { ReactComponent as UpArrow } from '../../../Pics/SvgDrawings/CheveronUp.svg';
import { useState } from "react";

// linkData - objects containing link display and behavior definition
// callBackSelectMenuVisibility
// return Link with data or optional submenu
export const NavPageLink = ({linkData, callBackSelectCloseMenu}) => {
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
    const [isExpanded, setIsExpanded] = useState(false);
    const {text, route, subMenu} = linkData;
    let link = <Link onClick={callBackSelectCloseMenu} className="navbar-link" to={route}>{text}</Link>;
    let navLink;
    
    function handleSubmenuVisibility(isExpanded) {
        setIsExpanded(isExpanded);
    }

    if(subMenu) {
        let subNavMark = <DownArrow className="navbar-submenu-arrow" />;
        let displayStatus = 'none';
        
        if(isExpanded) {
            subNavMark = <UpArrow className="navbar-submenu-arrow" />;
            displayStatus = 'block';
        }
        
        if(!isExpanded) {
            link = <Link onClick={() => handleSubmenuVisibility(true)} className="navbar-link">{text}</Link>;
        }
        
        const arrow = <li onClick={() => handleSubmenuVisibility(!isExpanded)} className="navbar-submenu-children" id="navbar-submenu-mark">{subNavMark}</li>
        navLink = (
            <ul 
            onMouseEnter={() => handleSubmenuVisibility(true)}
            onMouseLeave={() => handleSubmenuVisibility(false)}
            className="navbar-submenu"
            >
                <li id="navbar-submenu-top">
                    {link}
                    {isMobile && arrow}
                </li>
                {subMenu.map(subMenuLink => {
                    return (
                        <li  
                            style={{display: displayStatus}} 
                            onClick={() => handleSubmenuVisibility(false)}
                            onMouseEnter={() => handleSubmenuVisibility(true)} 
                            onMouseLeave={() => handleSubmenuVisibility(true)} 
                            key={subMenuLink.id} 
                            className="navbar-submenu-drop">

                            <Link onClick={callBackSelectCloseMenu} itemProp="url" role="link" className="navbar-link" to={subMenuLink.route}>{subMenuLink.text}</Link>

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