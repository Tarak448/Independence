import { useState, useEffect } from 'react';
import { Heart, Users, Award, ArrowRight, Gift, BookOpen, Droplet } from 'lucide-react';

// Import your images
import SchoolKit1 from '../assets/Schholkit1.jpeg';
import CleanWater from '../assets/Schoolkit2.jpeg';
import FoodProgram from '../assets/Schoolkit3.jpeg';
import CommunityHelp from '../assets/SchoolKit4.jpeg';
import EducationSupport from '../assets/Schoolkit5 (2).jpeg';
import Logo from '../assets/logo1.jpeg';
import AdditionalImage from '../assets/Rakhi.png'; // Add this import for your new image

const Index = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Carousel images array
  const carouselImages = [
    SchoolKit1,
    CleanWater,
    FoodProgram,
    CommunityHelp,
    EducationSupport
  ];

  // Carousel auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  // Animation trigger on load
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleLearnMoreClick = () => {
    window.open('https://www.lightsofhappiness.org/donation/', '_blank');
  };

  const handleDonateClick = () => {
    window.open('https://www.lightsofhappiness.org/donation-3/', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-30">
            {/* Logo and Title */}
            <div className="flex items-center space-x-3">
              <img 
                src={Logo} 
                alt="Lights of Happiness Logo" 
                className="h-20 w-20" 
              />
              <span className="text-2xl font-bold text-orange-600">
                Lights of Happiness
              </span>
            </div>
            
            {/* Mobile Menu Button (optional) */}
            <div className="md:hidden flex items-center">
              <button className="text-gray-700 hover:text-orange-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Carousel Section */}
      <section id="home" className="relative h-[85vh] w-full overflow-hidden">
        <div className="absolute inset-0 flex transition-transform duration-1000 ease-in-out" 
             style={{ transform: `translateX(-${currentImage * 100}%)` }}>
          {carouselImages.map((image, index) => (
            <div key={index} className="min-w-full h-full relative">
              <img 
                src={image} 
                alt={`Slide ${index + 1}`} 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[3000ms]" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
            </div>
          ))}
        </div>
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`text-center text-white px-4 max-w-4xl transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="mb-6 flex justify-center">
             
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight animate-fade-in-up">
              Remember your First School Bag? This Rakhi give This Joy to another Child
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-orange-200 animate-fade-in-up delay-300">
              Make a Difference Today
            </h2>
            
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200 animate-fade-in-up delay-500">
              Join our mission to support communities in need through education, sanitation and food security.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-700">
              <button
                onClick={handleLearnMoreClick}
                className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-orange-500/25"
              >
                <span className="flex items-center justify-center">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              
              <button
                onClick={handleDonateClick}
                className="group bg-white/10 backdrop-blur-sm border-2 border-white hover:bg-white hover:text-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center justify-center">
                  <Heart className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Donate Now
                </span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Carousel Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full transition-all duration-300 transform hover:scale-125 ${
                currentImage === index 
                  ? 'bg-white shadow-lg scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              onClick={() => setCurrentImage(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-20 right-8 hidden lg:block">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white animate-fade-in-left">
            <div className="text-3xl font-bold text-orange-300">1000+</div>
            <div className="text-sm opacity-90">Children Helped</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;