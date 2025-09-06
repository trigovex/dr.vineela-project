import React, { useEffect, useRef, useState } from 'react';
import { Award, Users, Clock, Heart, BookOpen, Star } from 'lucide-react';
import img from '../images/Doctor.png';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const achievements = [
    { icon: Award, label: "Board Certified", value: "MBBS, MS (OBG)" },
    { icon: Users, label: "Patients Treated", value: "5000+" },
    { icon: Clock, label: "Years Experience", value: "10+" },
    { icon: Star, label: "Patient Rating", value: "4.9/5" }
  ];

  const expertise = [
    "High-Risk Pregnancy Management",
    "Advanced Infertility Treatments",
    "Minimally Invasive Surgery",
    "PCOS & Hormonal Disorders",
    "Adolescent Gynecology",
    "Menopause Management"
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 bg-gradient-to-br from-pink-50/50 via-purple-50/50 to-blue-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left - Doctor Image */}
          <div className={`relative transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="relative">
              {/* Background Glass Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl transform rotate-2"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl transform -rotate-2"></div>
              
              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-lg rounded-3xl border border-white/30 shadow-2xl p-6 overflow-hidden">
                <div className="aspect-[4/5] bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl overflow-hidden">
                  <img 
                    src={img}
                    alt="Dr. Veneela in medical consultation"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Achievement Badge */}
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white p-4 rounded-2xl shadow-lg backdrop-blur-md">
                  <div className="text-center">
                    <div className="text-lg font-bold">10+</div>
                    <div className="text-xs">Years</div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-6 left-8 w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full animate-bounce delay-1000"></div>
            </div>
          </div>

          {/* Right - Content */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            
            {/* Main Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-800">
                Meet Dr. Veneela
              </h2>
              
              <p className="text-lg text-gray-700 font-inter leading-relaxed">
                Dr. Veneela is a compassionate and highly skilled Consultant Gynaecologist 
                with over 10 years of dedicated experience in women's healthcare. She believes 
                in empowering women through personalized, advanced medical care delivered with 
                warmth and understanding.
              </p>

              <p className="text-gray-600 font-inter leading-relaxed">
                Having guided thousands of women through their most important health journeys, 
                Dr. Veneela combines cutting-edge medical expertise with genuine care to ensure 
                every patient receives the attention and treatment they deserve.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-lg rounded-2xl border border-white/30 shadow-lg p-4 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Icon className="mx-auto text-pink-500 mb-2" size={24} />
                    <div className="font-bold text-gray-800 font-poppins">{achievement.value}</div>
                    <div className="text-sm text-gray-600 font-inter">{achievement.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Expertise */}
            <div className="bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-lg rounded-2xl border border-white/30 shadow-lg p-6">
              <h3 className="text-xl font-bold font-poppins text-gray-800 mb-4 flex items-center gap-2">
                <BookOpen className="text-pink-500" size={24} />
                Areas of Expertise
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {expertise.map((area, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-700 font-inter">
                    <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
                    {area}
                  </div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <blockquote className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 backdrop-blur-lg rounded-2xl border border-white/30 shadow-lg p-6">
              <p className="text-gray-700 font-lora italic text-lg leading-relaxed">
                "Every woman deserves compassionate, personalized healthcare. My mission is to 
                provide not just medical treatment, but emotional support and guidance throughout 
                every stage of a woman's health journey."
              </p>
              <footer className="text-right mt-4 text-gray-600 font-inter">
                — Dr. Veneela
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;