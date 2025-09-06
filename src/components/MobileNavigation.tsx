import React, { useState, useEffect } from 'react';
import { Home, Stethoscope, Calendar, Phone } from 'lucide-react';

const MobileNavigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'appointment', 'contact'];
      const scrollPosition = window.scrollY + 200;

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'services', label: 'Services', icon: Stethoscope },
    { id: 'appointment', label: 'Book', icon: Calendar },
    { id: 'contact', label: 'Contact', icon: Phone }
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-t border-white/20 shadow-lg">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex flex-col items-center gap-1 px-4 py-3 rounded-xl transition-all duration-300 ${
                isActive
                  ? 'text-pink-600 bg-pink-100/50'
                  : 'text-gray-600 hover:text-pink-600'
              }`}
            >
              <div className={`transition-all duration-300 ${
                isActive ? 'transform scale-110' : ''
              }`}>
                <Icon size={20} />
              </div>
              <span className="text-xs font-inter font-medium">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileNavigation;