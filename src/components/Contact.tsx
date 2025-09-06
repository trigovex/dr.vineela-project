import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Award, Shield, Heart } from 'lucide-react';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-4 bg-gradient-to-br from-gray-50/50 via-pink-50/50 to-purple-50/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto">
            Have questions or need to schedule a consultation? We're here to help. 
            Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            
            {/* Main Contact Card */}
            <div className="bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-lg rounded-3xl border border-white/30 shadow-2xl p-8">
              <h3 className="text-2xl font-bold font-poppins text-gray-800 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-3 rounded-xl shadow-lg flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 font-poppins mb-1">Clinic Address</h4>
                    <p className="text-gray-600 font-inter leading-relaxed">
                      123 Healthcare Plaza, Medical District<br />
                      Hyderabad, Telangana 400001<br />
                      Near Central Hospital
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-3 rounded-xl shadow-lg flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 font-poppins mb-1">Phone Numbers</h4>
                    <p className="text-gray-600 font-inter leading-relaxed">
                      Appointment: <a href="tel:+919876543210" className="text-pink-600 hover:text-pink-700">+91 98765 43210</a><br />
                      Emergency: <a href="tel:+919876543211" className="text-pink-600 hover:text-pink-700">+91 98765 43211</a><br />
                      Reception: <a href="tel:+919876543212" className="text-pink-600 hover:text-pink-700">+91 98765 43212</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl shadow-lg flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 font-poppins mb-1">Email Addresses</h4>
                    <p className="text-gray-600 font-inter leading-relaxed">
                      Appointments: <a href="mailto:appointments@drveneela.com" className="text-pink-600 hover:text-pink-700">appointments@drveneela.com</a><br />
                      General Inquiry: <a href="mailto:info@drveneela.com" className="text-pink-600 hover:text-pink-700">info@drveneela.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-teal-500 to-blue-500 p-3 rounded-xl shadow-lg flex-shrink-0">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 font-poppins mb-1">Clinic Hours</h4>
                    <div className="text-gray-600 font-inter leading-relaxed">
                      <div className="grid grid-cols-2 gap-2">
                        <div>Monday - Friday</div>
                        <div>9:00 AM - 6:00 PM</div>
                        <div>Saturday</div>
                        <div>9:00 AM - 4:00 PM</div>
                        <div>Sunday</div>
                        <div>10:00 AM - 2:00 PM</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Credentials */}
            <div className="bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-lg rounded-2xl border border-white/30 shadow-lg p-6">
              <h4 className="font-bold text-gray-800 font-poppins mb-4">Credentials & Certifications</h4>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center gap-3">
                  <Award className="text-pink-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700 font-inter">MBBS - Bachelor of Medicine and Surgery</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="text-purple-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700 font-inter">MS (OBG) - Master of Surgery in Obstetrics and Gynecology</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="text-pink-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700 font-inter">FICOG - Fellowship of Indian College of Obstetricians and Gynecologists</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="text-sm text-gray-600 font-inter">
                  Registration No: 12345 (Telangana Medical Council)
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-lg rounded-3xl border border-white/30 shadow-2xl p-8">
              <h3 className="text-2xl font-bold font-poppins text-gray-800 mb-6">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/50 backdrop-blur-md rounded-xl border border-white/30 focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 transition-all duration-300 font-inter"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/50 backdrop-blur-md rounded-xl border border-white/30 focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 transition-all duration-300 font-inter"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 backdrop-blur-md rounded-xl border border-white/30 focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 transition-all duration-300 font-inter"
                    placeholder="Enter email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 backdrop-blur-md rounded-xl border border-white/30 focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 transition-all duration-300 font-inter"
                  >
                    <option value="">Select a subject</option>
                    <option value="appointment">Appointment Inquiry</option>
                    <option value="general">General Question</option>
                    <option value="emergency">Emergency</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/50 backdrop-blur-md rounded-xl border border-white/30 focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 transition-all duration-300 font-inter resize-none"
                    placeholder="Please describe your inquiry or concern..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-pink-500/25 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-lg rounded-2xl border border-white/30 shadow-lg overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin size={48} className="mx-auto mb-2" />
                  <p className="font-inter font-medium">Interactive Map Location</p>
                  <p className="text-sm">Healthcare Plaza, Hyderabad</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`mt-16 pt-8 border-t border-white/20 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center">
            <h3 className="text-xl font-bold font-poppins text-gray-800 mb-2">Dr. Veneela</h3>
            <p className="text-gray-600 font-inter mb-4">Consultant Gynaecologist</p>
            <p className="text-sm text-gray-500 font-inter">
              © 2024 Dr. Veneela. All rights reserved. | Committed to providing compassionate women's healthcare.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;