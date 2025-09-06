import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, MapPin, CheckCircle } from 'lucide-react';

const Appointment: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    'General Consultation',
    'Pregnancy Care',
    'Infertility Treatment',
    'PCOS Management',
    'Surgical Consultation',
    'Preventive Screening'
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: '',
          date: '',
          time: '',
          message: ''
        });
      }, 3000);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <section id="appointment" className="py-20 px-4 bg-gradient-to-br from-green-50/50 via-blue-50/50 to-purple-50/50">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-lg rounded-3xl border border-white/30 shadow-2xl p-12">
            <div className="mb-6">
              <CheckCircle className="mx-auto text-green-500" size={80} />
            </div>
            <h2 className="text-3xl font-bold font-poppins text-gray-800 mb-4">
              Appointment Booked Successfully!
            </h2>
            <p className="text-lg text-gray-600 font-inter">
              Thank you for choosing Dr. Veneela. We will contact you shortly to confirm your appointment details.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="appointment" ref={sectionRef} className="py-20 px-4 bg-gradient-to-br from-pink-50/50 via-purple-50/50 to-blue-50/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-800 mb-4">
            Book Your Appointment
          </h2>
          <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto">
            Take the first step towards better health. Schedule your consultation with 
            Dr. Veneela and experience compassionate, personalized care.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Appointment Form */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-lg rounded-3xl border border-white/30 shadow-2xl p-8">
              <h3 className="text-2xl font-bold font-poppins text-gray-800 mb-6">
                Schedule Your Visit
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-white/50 backdrop-blur-md rounded-xl border border-white/30 focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 transition-all duration-300 font-inter"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-white/50 backdrop-blur-md rounded-xl border border-white/30 focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 transition-all duration-300 font-inter"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-white/50 backdrop-blur-md rounded-xl border border-white/30 focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 transition-all duration-300 font-inter"
                      placeholder="Enter email address"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Service *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 backdrop-blur-md rounded-xl border border-white/30 focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 transition-all duration-300 font-inter"
                  >
                    <option value="">Choose a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                {/* Date and Time */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full pl-10 pr-4 py-3 bg-white/50 backdrop-blur-md rounded-xl border border-white/30 focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 transition-all duration-300 font-inter"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time *
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-white/50 backdrop-blur-md rounded-xl border border-white/30 focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 transition-all duration-300 font-inter"
                      >
                        <option value="">Select time</option>
                        {timeSlots.map((time, index) => (
                          <option key={index} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-gray-400" size={18} />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full pl-10 pr-4 py-3 bg-white/50 backdrop-blur-md rounded-xl border border-white/30 focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 transition-all duration-300 font-inter resize-none"
                      placeholder="Any specific concerns or questions?"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-pink-500/25"
                >
                  Book Appointment
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information & Map */}
          <div className={`space-y-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            
            {/* Contact Info */}
            <div className="bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-lg rounded-3xl border border-white/30 shadow-2xl p-8">
              <h3 className="text-2xl font-bold font-poppins text-gray-800 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-3 rounded-xl shadow-lg">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 font-poppins">Clinic Address</h4>
                    <p className="text-gray-600 font-inter">
                      123 Healthcare Plaza, Medical District<br />
                      Hyderabad, Telangana 400001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl shadow-lg">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 font-poppins">Phone Numbers</h4>
                    <p className="text-gray-600 font-inter">
                      Clinic: +91 98765 43210<br />
                      Emergency: +91 98765 43211
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-teal-500 to-blue-500 p-3 rounded-xl shadow-lg">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 font-poppins">Clinic Hours</h4>
                    <p className="text-gray-600 font-inter">
                      Mon - Sat: 9:00 AM - 6:00 PM<br />
                      Sunday: 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-lg rounded-3xl border border-white/30 shadow-2xl p-6 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin size={48} className="mx-auto mb-2" />
                  <p className="font-inter">Interactive Map</p>
                  <p className="text-sm">Healthcare Plaza, Hyderabad</p>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 backdrop-blur-lg rounded-2xl border border-red-200/30 p-6">
              <h4 className="font-bold text-gray-800 font-poppins mb-2">Emergency Care</h4>
              <p className="text-sm text-gray-600 font-inter mb-3">
                For urgent medical concerns outside clinic hours
              </p>
              <a
                href="tel:+919876543211"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300"
              >
                <Phone size={16} />
                Call Emergency Line
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;