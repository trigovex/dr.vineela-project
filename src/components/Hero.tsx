import React, { useEffect, useState } from 'react';
import { Calendar, Phone, Heart, Award } from 'lucide-react';
import img from '../images/Doctor.png';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const heroTexts = [
    "Compassionate Care for Every Woman",
    "Your Health, My Priority",
    "Trusted Medical Excellence"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-gray-800 leading-tight">
                <span className="inline-block transition-all duration-1000 transform">
                  {heroTexts[currentTextIndex]}
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 font-inter max-w-lg">
                Dr. Veneela – Consultant Gynaecologist with 10+ years of trusted experience 
                providing advanced women's healthcare with compassion and excellence.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-pink-600">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-600">5000+</div>
                <div className="text-sm text-gray-600">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600">Care Support</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('appointment')}
                className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-2xl backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-pink-500/25"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center gap-2">
                  <Calendar size={20} />
                  Book Appointment
                </div>
              </button>
              
              <a href="tel:9160644601" className="px-8 py-4 bg-white/20 backdrop-blur-md text-gray-700 font-semibold rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <div className="flex items-center justify-center gap-2">
                  <Phone size={20} />
                  Call Now
                </div>
              </a>
            </div>
          </div>

          {/* Right Content - Doctor Image */}
          <div className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative">
              {/* Glass Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl transform -rotate-3"></div>
              
              {/* Main Content */}
              <div className="relative bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-lg rounded-3xl border border-white/30 shadow-2xl p-8 transform hover:rotate-1 transition-transform duration-500">
                {/* Doctor Image Placeholder */}
                <div className="aspect-square bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
                  <img 
                    src={img} 
                    alt="Dr. Veneela - Consultant Gynaecologist"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Doctor Details */}
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-bold font-poppins text-gray-800">Dr. Veneela</h3>
                  <p className="text-sm text-gray-600 font-inter">MBBS, MS (OBG), FICOG</p>
                  <p className="text-sm text-gray-500">Consultant Gynaecologist</p>
                </div>

                {/* Certifications */}
                <div className="flex justify-center mt-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Award size={16} className="text-pink-500" />
                    <span>Board Certified</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full animate-bounce delay-1000"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full animate-bounce delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;