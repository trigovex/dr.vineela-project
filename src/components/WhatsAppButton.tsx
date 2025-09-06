import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+919160644601';
    const message = encodeURIComponent('Hello Dr. Veneela, I would like to schedule an appointment.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-20 md:bottom-6 right-6 z-50 bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-110 animate-pulse hover:animate-none group"
      aria-label="Contact via WhatsApp"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-full blur opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
      <MessageCircle className="relative" size={28} />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black/80 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with Dr. Veneela
        <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-black/80"></div>
      </div>
    </button>
  );
};

export default WhatsAppButton;