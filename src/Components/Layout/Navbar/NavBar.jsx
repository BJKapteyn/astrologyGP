import { NavLinkData } from "./NavLinkData";
import { NavPageLink } from "./NavPageLink";
import './NavBar.css';
import '../../../App.css'

export const NavBar = () => {
    return (
        <nav className='navbar'>
            {NavLinkData.map((linkDatas) => {
                return (
                    <ul>
                        <li>
                            <NavPageLink linkData={linkDatas}></NavPageLink>
                        </li>
                    </ul>
                );
            })}
        </nav>
        // <nav className='navbar'>
        //     <Link className="navbar-link" to="/">Home</Link>
        //     <Link className="navbar-link" to="/WhyVibe">Why Vibe?</Link>
        //     <Link className="navbar-link" to="/WhyVibe">Offerings</Link>
        //     <Link className="navbar-link" to="/Readers">Work With Us</Link>
        //     <Link className="navbar-link" to="/News">The Current Vibe</Link>
        // </nav>
    )
}