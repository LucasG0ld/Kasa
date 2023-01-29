import './error.css'
import { Link } from 'react-router-dom';

/**
 * Component for showing an an error message if the URL did not exist
 * 
 * @component
 * @example
 * 
 * return (
 * <Error />
 * )
 */

function Error() {
    return(
        <section>
            <h1 className='ksa-notfound-h1'>404</h1>
            <h2 className='ksa-notfound-h2'>Oups! La page que vous demandez n'existe pas.</h2>
            <Link className='ksa-notfound-link' to="/">Retourner sur la page d’accueil</Link>
        </section>
    )
}

export default Error;