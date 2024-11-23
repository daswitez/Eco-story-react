import { useState } from 'react';
import '../styles/carousel.css';

import bosquePoblado from '../assets/images/bosquepoblado.jpeg';
import bosqueQuemado from '../assets/images/BOSQUE.jpg';

function Carousel() {
    const slides = [
        {
            image: bosquePoblado,
            caption: 'Antes: Una selva vibrante y llena de vida',
        },
        {
            image: bosqueQuemado,
            caption: 'Después: La devastación causada por el fuego',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="carousel">
            <div className="carousel-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div className="carousel-slide" key={index}>
                        <img src={slide.image} alt={slide.caption} />
                        <p className="slide-caption">{slide.caption}</p>
                    </div>
                ))}
            </div>
            <div className="carousel-controls">
                <button className="prev-btn" onClick={prevSlide}>
                    &larr;
                </button>
                <button className="next-btn" onClick={nextSlide}>
                    &rarr;
                </button>
            </div>
        </div>
    );
}

export default Carousel;
