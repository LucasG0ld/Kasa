import './post.css'
import { Link } from 'react-router-dom';
import React, { useState, useEffect} from 'react';
import getAll from '../../fetch'

/**
 * Component for showing properties list from the JSON file
 * 
 * @component
 * @example
 * 
 * return (
 * <Post />
 * )
 */


function post() {
    const [data, setData] = useState([]);
    useEffect (() => {
        fetch("logements.json")
            .then(response => response.json())
            .then(data => setData(data))
    }, [])
    return (
        data.map( lodging => {
            const lodgingId = lodging.id
            console.log(typeof lodgingId)
            return (
                <Link key={ lodging.id } to={`/lodging/${ lodgingId }`}>
                <article className='ksa-post-container'>
                    <img className='ksa-post-img' src={ lodging.cover } alt="Post image" />
                    <div className='ksa-post-filter'></div>
                    <h2 className='ksa-post-title'>{ lodging.title }</h2>
                </article>
                </Link>
                )
            })   
    )
}

export default post