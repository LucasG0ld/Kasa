import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect} from 'react';
import Accordion from "../components/accordion/accordion"
import Carousel from '../components/carousel/carousel';
import HostInfo from '../components/hostInfo/hostInfo';
import 'font-awesome/css/font-awesome.min.css';

function Lodging() {
    const params = useParams();
    

    const [lodging, setLodging] = useState([]);
    useEffect (() => {
        fetch("../logements.json/")
            .then(response => response.json())
            .then(lodging => {
                const logement = lodging.find(logement => logement.id === params.id);
                if (logement) {
                    setLodging(logement)
                } else {
                    navigate("/404")
                }
                
            } 
            )
    }, [params])

    const navigate = useNavigate();

    return(
        <main>
            <Carousel />
            
            <HostInfo/>

            <div className='ksa-lodging-accordion'>
                <Accordion title="Description" description={ lodging.description}/>
                {
                    lodging.equipments != undefined &&
                    <div className='ksa-lodging-accordion-break'>
                        <Accordion title="Equipements" description={ lodging.equipments.toString().split(',').join("\r\n") }/>
                    </div>
                    
                }
                
            </div> 
        </main>
        
    )
}

export default Lodging;

/*{
    lodging.pictures != undefined &&
    lodging.pictures.length === 1 ? <div className='ksa-carousel-container'><img className='ksa-lodging-pic' src={ lodging.pictures } alt={ lodging.title }/></div> : <Carousel/>
}*/