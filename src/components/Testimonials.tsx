import React, { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "New Mother",
      content: "Dr. Veneela made my pregnancy journey so comfortable and stress-free. Her care and expertise gave me confidence throughout. I couldn't have asked for a better doctor.",
      rating: 5,
      image: "https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Anjali Patel",
      role: "PCOS Patient",
      content: "After struggling with PCOS for years, Dr. Veneela's holistic approach finally gave me the relief I needed. She's not just a doctor, but a true healer.",
      rating: 5,
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Meera Kumar",
      role: "Fertility Patient",
      content: "Thanks to Dr. Veneela's expertise and compassionate care, I'm now a proud mother. She guided us through our fertility journey with such patience and understanding.",
      rating: 5,
      image: "https://images.pexels.com/photos/3768997/pexels-photo-3768997.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Kavya Reddy",
      role: "Preventive Care",
      content: "Dr. Veneela's thorough approach to women's health has been life-changing. She takes time to listen and explain everything clearly. Highly recommend her!",
      rating: 5,
      image: "https://images.pexels.com/photos/3769113/pexels-photo-3769113.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Ritu Singh",
      role: "Surgical Patient",
      content: "I had laparoscopic surgery with Dr. Veneela and the experience was excellent. Minimal pain, quick recovery, and constant support throughout the process.",
      rating: 5,
      image: "https://images.pexels.com/photos/3768142/pexels-photo-3768142.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-pink-300/30 to-purple-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-gradient-to-br from-blue-300/30 to-pink-300/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-800 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto">
            Read testimonials from women whose lives have been positively impacted 
            by Dr. Veneela's compassionate care and medical expertise.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className={`relative transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          {/* Main Testimonial Card */}
          <div className="relative bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-lg rounded-3xl border border-white/30 shadow-2xl p-8 md:p-12 max-w-4xl mx-auto">
            
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-pink-300">
              <Quote size={48} />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              
              {/* Patient Image */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white/50 shadow-lg">
                    <img 
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-2">
                    <Star className="text-white" size={16} />
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="mb-4">
                  <div className="flex justify-center md:justify-start gap-1 mb-3">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-lg md:text-xl text-gray-700 font-lora italic leading-relaxed mb-4">
                    "{testimonials[currentIndex].content}"
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold font-poppins text-gray-800 text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600 font-inter">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-6 md:-left-16">
              <button
                onClick={prevTestimonial}
                className="bg-white/80 backdrop-blur-md rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-white/30"
              >
                <ChevronLeft className="text-gray-600" size={24} />
              </button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 -right-6 md:-right-16">
              <button
                onClick={nextTestimonial}
                className="bg-white/80 backdrop-blur-md rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-white/30"
              >
                <ChevronRight className="text-gray-600" size={24} />
              </button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg'
                    : 'bg-white/50 backdrop-blur-md border border-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {[
            { value: "4.9/5", label: "Average Rating" },
            { value: "500+", label: "Happy Reviews" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-lg rounded-2xl border border-white/30 shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-2xl md:text-3xl font-bold font-poppins text-gray-800 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-inter">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;