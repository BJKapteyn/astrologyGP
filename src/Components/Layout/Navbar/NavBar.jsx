import { Link } from "react-router-dom";
import './NavBar.css';
import '../../../App.css'

export const NavBar = () => {
    return (
    <nav className='navbar'>
        <Link className="navbar-link" to="/">Home</Link>
        <Link className="navbar-link" to="/Readers">Work With Us</Link>
        <Link className="navbar-link" to="/WhyVibe">Why Vibe?</Link>
        <Link className="navbar-link" to="/News">News</Link>
    </nav>
    )
}