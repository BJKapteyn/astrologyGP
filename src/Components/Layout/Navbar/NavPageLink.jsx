import { Link } from "react-router-dom";
import { useState } from "react";

// return Link with data or submenu if it exists
export const NavPageLink = ({linkData}) => {
    const {text, route, subMenu} = linkData;
    const link = <Link className="navbar-link" to={route}>{text}</Link>;
    const [isHovering, setIsHovering] = useState(false);

    let navLink;

    if(subMenu) {
        navLink = (
            <ul 
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="navbar-submenu"
            >
                <li className="navbar-submenu-children" id="navbar-submenu-top">
                    {link}
                </li>
                {isHovering && subMenu.map((subMenu) => {
                    return (
                        <li key={subMenu.id} className="navbar-submenu-children">
                            <Link role="link" className="navbar-link" to={subMenu.route}>{subMenu.text}</Link>
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