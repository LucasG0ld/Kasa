import Logo from './img/logo.svg';
import { Link } from 'react-router-dom';
import './footer.css'

/**
 * Component for showing the footer
 * 
 * @component
 * @example
 * 
 * return (
 * <Footer />
 * )
 */

function footer() {
    return (
        <footer className='ksa-footer'>
                <img src={ Logo } alt="Logo" />
                <p className='ksa-footer-text'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default footer