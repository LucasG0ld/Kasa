import { useParams } from 'react-router-dom';
import React, { useState, useEffect} from 'react';
import './carousel.css'
import 'font-awesome/css/font-awesome.min.css';

/**
 * Component for showing a carousel
 * 
 * @component
 * @example
 * 
 * return (
 * <Carousel />
 * )
 */

function Carousel() {
    /* */

    const slides = document.querySelectorAll(".ksa-lodging-pic");
    const domNbImg = document.getElementById("ksa-carousel-current")
    let curNbImg = 1

    slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
    });

    const nextSlide = document.querySelector(".ksa-carousel-next");
    let curSlide = 0;
    let maxSlide = slides.length - 1;

    if (nextSlide) {
    nextSlide.addEventListener("click", function () {
        if (curSlide === maxSlide) {
        curSlide = 0;
        curNbImg = 1;
        if (!domNbImg) return;
        domNbImg.innerHTML = curNbImg;
        } else {
        curSlide++;
        curNbImg++;
        if (!domNbImg) return;
        domNbImg.innerHTML = curNbImg;
        }

        slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
        });
    });
    }

    const prevSlide = document.querySelector(".ksa-carousel-prev");

    if (prevSlide) {
    prevSlide.addEventListener("click", function () {
        if (curSlide === 0) {
        curSlide = maxSlide;
        curNbImg = maxSlide + 1;
        if (!domNbImg) return;
        domNbImg.innerHTML = curNbImg;
        } else {
        curSlide--;
        curNbImg--;
        if (!domNbImg) return;
        domNbImg.innerHTML = curNbImg;
        }

        slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
        });
    });
    }

    /* */

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
        <div>
            {
                lodging.pictures != undefined &&
                lodging.pictures.length === 1 ? 
                <div className='ksa-image-container'><img className='ksa-lodging-pic' src={ lodging.pictures } alt={ lodging.title }/></div> 
                : 
                <div className='ksa-carousel-container'>
                    {
                    lodging.pictures != undefined &&
                    lodging.pictures.map(picture => [
                        <img className='ksa-lodging-pic' src={ picture } alt={ lodging.title } key={ picture }/>
                    ])
                }
                {
                    lodging.pictures != undefined &&
                    <span className='ksa-carousel-number'><span id='ksa-carousel-current'>1</span> / {lodging.pictures.length}</span>
                }

                    
                <button className='ksa-carousel-btn ksa-carousel-next'> &gt; </button>
                <button className='ksa-carousel-btn ksa-carousel-prev'> &lt; </button>
                </div>
                
            }
            
                
        </div>
    )
}

export default Carousel;