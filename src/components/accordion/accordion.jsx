import './accordion.css'
import PropTypes from "prop-types";
import { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';

/**
 * Component for showing an accordion with tile and onclick effect to show / hide description
 * 
 * @component
 * @example
 * 
 * const title = Fiabilité
 * const description = Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
 * 
 * <Accordion title={title} description={description}/>
 * 
 * )
 */

function accordion({ title, description }) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className='ksa-accordion-container'>
            <div className='ksa-accordion' onClick={() => setIsActive(!isActive)}>
                <span className='ksa-accordion-title'>{ title }</span>
                <span className='ksa-accordion-icon'>{isActive ? <i className="fa fa-light fa-chevron-up"></i> : <i className="fa fa-light fa-chevron-down"></i>}</span>
            </div>
            {isActive && <p className='ksa-accordion-text'>{ description }</p>}
        </div>
    ) 
}

accordion.protoTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default accordion