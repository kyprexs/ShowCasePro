'use client';

import React, { useEffect, useState } from 'react';
import { SITE_CONFIG } from '@/lib/constants';

const Hero: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  if (!mounted) {
    return <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100" />;
  }

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100 relative overflow-hidden snap-section"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Greeting */}
          <p className="text-lg sm:text-xl text-primary-600 font-medium mb-4">
            👋 Hello, I&apos;m
          </p>
          
          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            <span className="gradient-text">{SITE_CONFIG.author}</span>
          </h1>
          
          {/* Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-light mb-8 max-w-4xl mx-auto">
            Full Stack Developer & UI/UX Enthusiast
          </h2>
          
          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            I craft digital experiences that blend beautiful design with powerful functionality. 
            Passionate about creating scalable web applications and intuitive user interfaces.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => scrollToSection('#projects')}
              className="btn-primary px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-secondary px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href={SITE_CONFIG.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200 hover:scale-110"
              aria-label="GitHub Profile"
            >
              <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href={SITE_CONFIG.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200 hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href={SITE_CONFIG.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200 hover:scale-110"
              aria-label="Twitter Profile"
            >
              <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
              </svg>
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('#about')}
            className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200"
            aria-label="Scroll to About section"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
