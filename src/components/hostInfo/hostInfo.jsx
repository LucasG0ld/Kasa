import { useParams } from 'react-router-dom';
import React, { useState, useEffect} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './hostInfo.css'

/**
 * Component for showing info from the host
 * 
 * @component
 * @example
 * 
 * return (
 * <Info />
 * )
 */

function Info() {

    const ratingStars = [1, 2, 3, 4, 5]
    const params = useParams();

    const [lodging, setLodging] = useState([]);
    useEffect (() => {
        fetch("../logements.json/")
            .then(response => response.json())
            .then(lodging => {
                const logement = lodging.find(logement => logement.id === params.id);
                setLodging(logement)
            } 
            )
    }, [params])
    
    return(
            <section className='ksa-lodging-info'>
            <div>
            <h1>{ lodging.title }</h1>
            <h2>{ lodging.location }</h2>
            <div>
                {
                    lodging.tags != undefined &&
                        lodging.tags.map(tag => {
                            return(
                                <span className='ksa-lodging-tag' key={ tag }>{tag}</span>
                            )
                        })
                }
            </div>
            </div>
            
            
                {
                    lodging.host != undefined &&
                    <div className='ksa-lodging-host-container'>
                    <div className='ksa-lodging-host'>
                        <h3>{ lodging.host.name }</h3>
                        <img src={ lodging.host.picture } alt={ lodging.host.name } />
                    </div>
                    <div className='ksa-raiting-container'>
                        {
                            ratingStars.map(star => {
                                return(
                                    <i className={`fa fa-duotone fa-star ksa-lodging-star${star <= lodging.rating ? " ksa-lodging-star-colored" : ""}`} key={ star }></i>
                                )
                            })
                        }
                    </div>
                    </div>
                }
            </section>
        
    )
}

export default Info;