import { Link } from "react-router-dom";
import { useState } from "react";

// return Link with data or submenu if it exists
export const NavPageLink = ({linkData, callBackSelectMenuVisibility}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const {text, route, subMenu} = linkData;
    const setMenuVisibility = false;
    const link = <Link onClick={() => callBackSelectMenuVisibility(setMenuVisibility)} className="navbar-link" to={route}>{text}</Link>;

    let navLink;

    if(subMenu) {
        navLink = (
            <ul 
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
            className="navbar-submenu"
            >
                <li className="navbar-submenu-children" id="navbar-submenu-top">
                    {link}
                </li>
                {isExpanded && subMenu.map((subMenu) => {
                    return (
                        <li itemtype="http://schema.org/LocalBusiness" itemref="_name1" key={subMenu.id} className="navbar-submenu-children">
                            <Link itemProp="url" role="link" className="navbar-link" to={subMenu.route}>{subMenu.text}</Link>
                        </li>
                    )
                })}
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