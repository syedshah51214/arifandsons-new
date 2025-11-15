import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// We'll add actual images later
const teamMembers = [
  {
    image: "/placeholder.jpg",
    name: "Mr. Arif",
    role: "Owner & CEO",
    description: "Founder and visionary leader with over 20 years of experience in construction."
  },
  {
    image: "/placeholder.jpg",
    name: "Mr. Ahmed",
    role: "Project Manager",
    description: "Expert project manager overseeing all major construction projects."
  },
  {
    image: "/placeholder.jpg",
    name: "Mr. Imran",
    role: "Site Manager",
    description: "Experienced site manager ensuring quality and safety standards."
  },
  {
    image: "/placeholder.jpg",
    name: "Mr. Khalid",
    role: "Chief Engineer",
    description: "Lead engineer with expertise in structural design and planning."
  },
  {
    image: "/placeholder.jpg",
    name: "Mr. Usman",
    role: "Architect",
    description: "Creative architect bringing innovative designs to life."
  }
];

interface TeamSliderProps {
  className?: string;
}

export default function TeamSlider({ className = "" }: TeamSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
      }, 5000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
    setIsAutoPlaying(false);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Main Slide */}
          <div className="overflow-hidden">
            <div className="flex items-center justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Image */}
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <img
                    src={teamMembers[currentSlide].image}
                    alt={teamMembers[currentSlide].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Content */}
                <div className="text-center md:text-left">
                  <h3 className="text-3xl font-bold text-amber-500 mb-4">
                    {teamMembers[currentSlide].name}
                  </h3>
                  <p className="text-xl text-white/80 mb-4">
                    {teamMembers[currentSlide].role}
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    {teamMembers[currentSlide].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-amber-500 p-2 rounded-full shadow-lg hover:bg-amber-400 transition-colors z-10"
          >
            <ArrowLeft className="w-6 h-6 text-gray-900" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-amber-500 p-2 rounded-full shadow-lg hover:bg-amber-400 transition-colors z-10"
          >
            <ArrowRight className="w-6 h-6 text-gray-900" />
          </button>

          {/* Dots Navigation */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-amber-500 w-6" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}