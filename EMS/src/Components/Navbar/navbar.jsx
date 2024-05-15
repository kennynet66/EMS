import './navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
        <nav>
            <Link className="logo" to="/">EMS</Link>
            <ul className="nav-links">
                <Link to="/login" className='link'>Login</Link>
                <Link className='link' to="register">Signup</Link>
            </ul>
        </nav>
        </>
    )
}