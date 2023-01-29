import './banner.css'
import PropTypes from "prop-types";

/**
 * Component for showing banner with title image and alt text
 * 
 * @component
 * @example
 * 
 * const img = ./img/about-banner.png
 * const title = Chez vous, partout et ailleurs
 * const alt = Bord de mer montagneux
 * 
 * return (
 * <Banner img={img} title={title} alt={alt} />
 * )
 */

function banner({ img, alt, title }) {
    if(title){
        console.log(title.length)
    }
    return (
        <div className='ksa-banner-section'>
            <img src={img} alt={alt} />
            {
                title &&
                    <h1 className='ksa-banner-title'>{title}</h1>
            }
            
        </div>
    ) 
}

banner.protoTypes = {
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string,
}

// jsdoc, modelisation, classe, maj, ligne 9 condition afficher / non si pas obligatoire

export default banner