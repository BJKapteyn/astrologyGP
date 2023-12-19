import { Link } from "react-router-dom";
import './NavBar.css';
import '../../../App.css'

export const NavBar = () => {
    return (
    <nav className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/Readers">Readers</Link>
    </nav>
    )
}