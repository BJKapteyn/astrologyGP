import { NavLinks } from "./NavLinks";
import { Link } from "../Content/Link";
import '../../App.css';

export const NavBar = () => {
    return (
    <section className='navBar'>
        {NavLinks.map((link) => {
            const {id, className, text, href} = link;
            return <a className={className} key={id} href={href}>{text}</a>
        })}
    </section>
    )
}