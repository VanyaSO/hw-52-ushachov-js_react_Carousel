import React, {useState} from 'react';

export const Carousel = ({children}) => {

    const [slideIndex, setSlideIndex] = useState(1);


    const nextSlide = () =>{
        if(slideIndex !== children.length){
            setSlideIndex(slideIndex + 1)
        }else if(slideIndex === children.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () =>{
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }else if(slideIndex === 1){
            setSlideIndex(children.length)
        }
    }

    return (

        <div className="container d-flex mt-5">
            <button className="slidePrev btn btn-outline-primary" onClick={prevSlide}>prev</button>
            <div className="carousel slide">

                <div className="carousel-inner">
                    {children.map((item, index) => (
                        <div className={`animate__animated carousel-item animate__fadeIn ${slideIndex === index + 1 ? " active " : ""}`}>{item}</div>
                    ))}
                </div>
            </div>
            <button className="slideNex btn btn-outline-primary" onClick={nextSlide}>next</button>
        </div>

    );
}

export default Carousel;

