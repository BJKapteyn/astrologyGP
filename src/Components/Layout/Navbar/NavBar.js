import { NavLinks } from "./NavLinks";
import { Link } from "react-router-dom";
import './NavBar.css';
import '../../../App.css'

export const NavBar = () => {
    return (
    <section className='navBar-bar'>
        {NavLinks.map((link) => {
            const {id, className, text, href} = link;
            return <a className={className} key={id} href={href}>{text}</a>
        })}
    </section>
    )
}