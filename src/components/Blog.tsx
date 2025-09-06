import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, ArrowRight, Heart, Baby, Flower2 } from 'lucide-react';

const Blog: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const blogPosts = [
    {
      id: 1,
      title: "Essential Nutrition Tips During Pregnancy",
      excerpt: "Discover the key nutrients and foods that support a healthy pregnancy journey for both mother and baby.",
      image: "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Pregnancy",
      icon: Baby,
      date: "March 15, 2024",
      readTime: "5 min read",
      color: "from-pink-500 to-rose-400"
    },
    {
      id: 2,
      title: "Understanding PCOS: Symptoms and Management",
      excerpt: "Learn about PCOS symptoms, causes, and effective management strategies for better hormonal health.",
      image: "https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Hormonal Health",
      icon: Flower2,
      date: "March 10, 2024",
      readTime: "7 min read",
      color: "from-purple-500 to-pink-400"
    },
    {
      id: 3,
      title: "Heart Health and Women: What You Need to Know",
      excerpt: "Important information about cardiovascular health specifically for women at different life stages.",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Women's Health",
      icon: Heart,
      date: "March 5, 2024",
      readTime: "6 min read",
      color: "from-blue-500 to-purple-400"
    },
    {
      id: 4,
      title: "Fertility After 35: Facts and Options",
      excerpt: "Understanding fertility changes with age and exploring available options for family planning.",
      image: "https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Fertility",
      icon: Heart,
      date: "February 28, 2024",
      readTime: "8 min read",
      color: "from-teal-500 to-blue-400"
    },
    {
      id: 5,
      title: "Postpartum Care: Recovery and Wellness",
      excerpt: "Essential guidance for new mothers on physical and emotional recovery after childbirth.",
      image: "https://images.pexels.com/photos/1257110/pexels-photo-1257110.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Postpartum",
      icon: Baby,
      date: "February 20, 2024",
      readTime: "6 min read",
      color: "from-indigo-500 to-purple-400"
    },
    {
      id: 6,
      title: "Menstrual Health: Breaking the Silence",
      excerpt: "Open discussion about menstrual health, common issues, and when to seek medical attention.",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Menstrual Health",
      icon: Flower2,
      date: "February 15, 2024",
      readTime: "5 min read",
      color: "from-rose-500 to-pink-400"
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

  return (
    <section id="blog" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-800 mb-4">
            Health Tips & Insights
          </h2>
          <p className="text-lg text-gray-600 font-inter max-w-3xl mx-auto">
            Stay informed with our latest articles on women's health, wellness tips, 
            and medical insights to help you make informed decisions about your health.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => {
            const Icon = post.icon;
            
            return (
              <article
                key={post.id}
                className={`group transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-lg rounded-3xl border border-white/30 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1 overflow-hidden h-full">
                  
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Category Badge */}
                    <div className={`absolute top-4 left-4 bg-gradient-to-r ${post.color} text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg backdrop-blur-md`}>
                      <div className="flex items-center gap-1">
                        <Icon size={14} />
                        {post.category}
                      </div>
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        {post.readTime}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold font-poppins text-gray-800 group-hover:text-gray-900 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 font-inter leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Read More Link */}
                    <div className="pt-2">
                      <button className="group/btn flex items-center gap-2 text-pink-600 hover:text-pink-700 font-semibold font-inter transition-colors duration-300">
                        Read More
                        <ArrowRight 
                          size={16} 
                          className="transform group-hover/btn:translate-x-1 transition-transform duration-300" 
                        />
                      </button>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${post.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Newsletter Signup */}
        <div className={`mt-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 backdrop-blur-lg rounded-3xl border border-white/30 shadow-lg p-8 text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold font-poppins text-gray-800 mb-4">
              Stay Updated with Health Tips
            </h3>
            <p className="text-gray-600 font-inter mb-6">
              Subscribe to our newsletter for the latest women's health insights and wellness tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/50 backdrop-blur-md rounded-xl border border-white/30 focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 transition-all duration-300 font-inter"
              />
              <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;