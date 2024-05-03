import { Link } from "react-router-dom";

// return Link with data or submenu if it exists
export const NavPageLink = ({linkData}) => {
    const {text, route, subMenu} = linkData;
    let navLink;
    const link = <Link className="navbar-link" to={route}>{text}</Link>;

    if(subMenu) {
        navLink = (
            <ul className="navbar-submenu">
                <li className="navbar-submenu-children" id="navbar-submenu-top">
                    {link}
                </li>
                {subMenu.map((subMenu) => {
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
        <span>
            {navLink}
        </span>
    );
}