import { NavLinkData } from "./NavLinkData.jsx";
//import { Link } from "react-router-dom";
import './NavBar.css';
import '../../../App.css'

export const NavBar = () => {
    return (
    <section className='navbar-bar'>
        {NavLinkData.map((link) => {
            const {id, className, text, href} = link;
            return <a className="navbar-link" key={id} href={href}>{text}</a>
        })}
    </section>
    )
}