import Logo from './img/logo.svg';
import { NavLink, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './header.css'

/**
 * Component for showing the header
 * 
 * @component
 * @example
 * 
 * return (
 * <Header />
 * )
 */

function header() {
        //assigning location variable
        const location = useLocation();

        //destructuring pathname from location
        const { pathname } = location;
    
        //Javascript split method to get the name of the path in array
        const splitLocation = pathname.split("/");

    return (
        <header className='ksa-header'>
            <img src={Logo} alt="" />
            <nav className='ksa-nav'>
                <li className={splitLocation[1] === "" ? "ksa-li-active ksa-li" : "ksa-li"}>
                    <Link to="/" className='ksa-li-link'>Accueil</Link>
                </li>
                <li className={splitLocation[1] === "about" ? "ksa-li-active ksa-li" : "ksa-li"}>
                    <Link to="/about" className='ksa-li-link'>A Propos</Link>
                </li>
            </nav>
        </header>
    )
}

export default header