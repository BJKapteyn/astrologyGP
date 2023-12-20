import { Link } from "react-router-dom";
import './NavBar.css';
import '../../../App.css'

export const NavBar = () => {
    return (
    <nav className='navbar'>
        <Link className="navbar-link" to="/">Home</Link>
        <Link className="navbar-link" to="/Readers">Readers</Link>
    </nav>
    )
}