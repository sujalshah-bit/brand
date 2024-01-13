import { useState } from 'react';
import './Carousel.css';

const images = [
  'https://via.placeholder.com/400x200',
  'https://via.placeholder.com/400x500',
  'https://via.placeholder.com/400x600',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={goToPrevSlide}>
        &#8249;
      </button>
      <img
        className="carousel-image"
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
      />
      <button className="carousel-button next" onClick={goToNextSlide}>
        &#8250;
      </button>
    </div>
  );
};

export default Carousel;
