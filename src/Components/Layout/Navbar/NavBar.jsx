import { NavLinkData } from "./NavLinkData.jsx";
//import { Link } from "react-router-dom";
import './NavBar.css';
import '../../../App.css'

export const NavBar = () => {
    return (
    <section className='navBar-bar'>
        {NavLinkData.map((link) => {
            const {id, className, text, href} = link;
            return <a className={className} key={id} href={href}>{text}</a>
        })}
    </section>
    )
}