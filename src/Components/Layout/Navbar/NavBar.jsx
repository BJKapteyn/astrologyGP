import { NavLinkData } from "./NavLinkData";
import { NavPageLink } from "./NavPageLink";
import './NavBar.css';
import '../../../App.css'

export const NavBar = () => {
    return (
        <nav className='navbar'>
            <ul className="navbar-main-nav">
                {NavLinkData.map((linkDatas) => {
                    return (
                        <NavPageLink key={linkDatas.id} linkData={linkDatas}></NavPageLink>
                    );
                })}
            </ul>
        </nav>
    )
}