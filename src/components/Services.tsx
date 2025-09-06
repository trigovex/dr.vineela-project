import React, { useEffect, useRef, useState } from 'react';
import { Baby, Heart, Flower, Stethoscope, Shield, Calendar } from 'lucide-react';

const Services: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: Baby,
      title: "Pregnancy Care",
      description: "Comprehensive antenatal and postnatal support throughout your journey to motherhood.",
      color: "from-pink-500 to-rose-400"
    },
    {
      icon: Heart,
      title: "Infertility Solutions",
      description: "Advanced fertility treatments and counseling to help you achieve your dream of parenthood.",
      color: "from-purple-500 to-pink-400"
    },
    {
      icon: Flower,
      title: "Hormonal Health",
      description: "PCOS management, menstrual disorders, and comprehensive hormonal wellness care.",
      color: "from-blue-500 to-purple-400"
    },
    {
      icon: Stethoscope,
      title: "Preventive Care",
      description: "Regular screenings, pap smears, and preventive healthcare to keep you healthy.",
      color: "from-teal-500 to-blue-400"
    },
    {
      icon: Shield,
      title: "Advanced Surgeries",
      description: "Minimally invasive laparoscopic and hysteroscopic procedures with faster recovery.",
      color: "from-indigo-500 to-purple-400"
    },
    {
      icon: Calendar,
      title: "Menstrual Wellness",
      description: "Comprehensive care for menstrual irregularities and reproductive health concerns.",
      color: "from-rose-500 to-pink-400"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...new Set([...prev, cardIndex])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = sectionRef.current?.querySelectorAll('.service-card');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-800 mb-4">
            Comprehensive Women's Healthcare
          </h2>
          <p className="text-lg text-gray-600 font-inter max-w-3xl mx-auto">
            From pregnancy care to advanced treatments, we provide complete healthcare solutions 
            tailored to every woman's unique needs with compassion and expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <div
                key={index}
                data-index={index}
                className={`service-card group relative transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Glass Card */}
                <div className="relative bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-lg rounded-3xl border border-white/30 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1 p-8 h-full">
                  
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 rounded-3xl group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  {/* Icon */}
                  <div className={`relative mb-6 w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl blur opacity-70 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <Icon className="relative text-white" size={32} />
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-bold font-poppins text-gray-800 mb-3 group-hover:text-gray-900 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 font-inter leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Floating Decorative Elements */}
                <div className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br ${service.color} rounded-full animate-pulse opacity-60`}></div>
                <div className={`absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-br ${service.color} rounded-full animate-pulse delay-1000 opacity-40`}></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-white/40 to-white/20 backdrop-blur-lg rounded-3xl border border-white/30 shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold font-poppins text-gray-800 mb-4">
              Need Specialized Care?
            </h3>
            <p className="text-gray-600 font-inter mb-6">
              Book a consultation to discuss your specific healthcare needs with Dr. Veneela
            </p>
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;