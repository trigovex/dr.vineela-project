import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Appointment from './components/Appointment';
import Blog from './components/Blog';
import Contact from './components/Contact';
import MobileNavigation from './components/MobileNavigation';
import ParticleBackground from './components/ParticleBackground';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 overflow-x-hidden">
      <ParticleBackground />
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Appointment />
        <Blog />
        <Contact />
      </main>
      <MobileNavigation />
      <WhatsAppButton />
    </div>
  );
}

export default App;