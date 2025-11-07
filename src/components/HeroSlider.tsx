import { useEffect, useState } from 'react';
import backgroundImage from '../assets/background image/1.jpg';

const slides = [
  {
    image: backgroundImage,
    title: "Building Excellence",
    subtitle: "Creating Lasting Impressions"
  },
  {
    image: backgroundImage,
    title: "Quality Construction",
    subtitle: "Exceeding Expectations"
  },
  {
    image: backgroundImage,
    title: "Modern Design",
    subtitle: "Innovative Solutions"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
              filter: 'blur(2px) brightness(0.3)',
            }}
          />
          
          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 transition-all duration-500 transform translate-y-0">
              {slide.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 transition-all duration-500 delay-100 transform translate-y-0">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-amber-500 w-8'
                : 'bg-gray-400/50 hover:bg-gray-400'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}