import React from 'react';
import { Linkedin, Globe, Heart, Star, Sparkles, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-to-br from-slate-900 via-cyan-900 to-blue-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl animate-float-slow"></div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-float-particle opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 6}s`
            }}
          ></div>
        ))}
      </div>

      {/* Lightning Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent animate-lightning"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-400/30 to-transparent animate-lightning-delayed"></div>
      </div>

      <div className="relative z-10 py-16">
        {/* Top Section with Animated Icons */}
        <div className="container mx-auto px-6 mb-12">
          <div className="flex justify-center space-x-8 mb-12">
            <div className="group p-6 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-3xl backdrop-blur-sm border border-cyan-400/30 animate-bounce hover:animate-none transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl hover:shadow-cyan-500/50">
              <Zap className="text-4xl text-cyan-400 animate-pulse group-hover:animate-spin" size={32} />
            </div>
            <div className="group p-6 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-3xl backdrop-blur-sm border border-purple-400/30 animate-bounce animation-delay-300 hover:animate-none transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl hover:shadow-purple-500/50">
              <Sparkles className="text-4xl text-purple-400 animate-pulse group-hover:animate-spin" size={32} />
            </div>
            <div className="group p-6 bg-gradient-to-br from-pink-500/20 to-cyan-600/20 rounded-3xl backdrop-blur-sm border border-pink-400/30 animate-bounce animation-delay-600 hover:animate-none transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl hover:shadow-pink-500/50">
              <Heart className="text-4xl text-pink-400 animate-pulse group-hover:animate-spin" size={32} />
            </div>
          </div>

          {/* Main Brand Section */}
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-6xl md:text-7xl font-black leading-none">
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-gradient-shift">
                ZAINULABDIN
              </span>
            </h2>
            
            <div className="text-xl md:text-2xl text-cyan-100 font-light tracking-wider animate-fade-in-up animation-delay-500">
              Creating extraordinary digital experiences
            </div>

            {/* Animated Rating Stars */}
            <div className="flex justify-center space-x-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="text-yellow-400 text-2xl animate-twinkle fill-current" 
                  style={{ animationDelay: `${i * 200}ms` }}
                  size={24}
                />
              ))}
              <span className="text-cyan-200 ml-4 text-lg font-semibold">(5.0 Rating)</span>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Left Side - Copyright */}
            <div className="text-center lg:text-left">
              <div className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-2xl hover:shadow-cyan-500/30">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-cyan-600/10 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <p className="text-2xl font-bold text-white mb-2 relative z-10">
                  &copy; {new Date().getFullYear()}
                </p>
                <p className="text-cyan-200 font-semibold relative z-10">
                  All rights reserved
                </p>
                <div className="flex justify-center lg:justify-start mt-4">
                  <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Center - Social Links */}
            <div className="flex justify-center space-x-8">
              <a
                href="https://www.linkedin.com/in/zain-ul-abdin-ghani15"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-cyan-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-80 transition-all duration-500 animate-pulse-slow"></div>
                <div className="relative w-20 h-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl flex items-center justify-center text-cyan-400 hover:text-white transition-all duration-500 transform hover:scale-125 hover:-translate-y-4 hover:rotate-12 shadow-2xl hover:shadow-cyan-500/50 group-hover:border-cyan-400/70">
                  <Linkedin size={32} />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Tooltip */}
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-xl text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/30">
                  LinkedIn
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white/20 rotate-45"></div>
                </div>
              </a>

              <a
                href="https://zainiiportfolioz.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-500 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-80 transition-all duration-500 animate-pulse-slow animation-delay-500"></div>
                <div className="relative w-20 h-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl flex items-center justify-center text-purple-400 hover:text-white transition-all duration-500 transform hover:scale-125 hover:-translate-y-4 hover:rotate-12 shadow-2xl hover:shadow-purple-500/50 group-hover:border-purple-400/70">
                  <Globe size={32} />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Tooltip */}
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-xl text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/30">
                  Portfolio
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white/20 rotate-45"></div>
                </div>
              </a>
            </div>

            {/* Right Side - Additional Info */}
            <div className="text-center lg:text-right">
              <div className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-2xl hover:shadow-purple-500/30">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 via-pink-500/10 to-purple-600/10 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <p className="text-xl font-bold text-white mb-2 relative z-10">
                  Premium Quality
                </p>
                <p className="text-purple-200 font-semibold relative z-10">
                  Crafted with ❤️
                </p>
                <div className="flex justify-center lg:justify-end mt-4">
                  <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-cyan-200 text-lg font-medium">
                🚀 Built with passion and innovation
              </div>
              <div className="flex space-x-6 text-cyan-300">
                <span className="hover:text-white transition-colors cursor-pointer">✨ Premium</span>
                <span className="hover:text-white transition-colors cursor-pointer">🎯 Quality</span>
                <span className="hover:text-white transition-colors cursor-pointer">⚡ Fast</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-180deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(90deg); }
        }
        
        @keyframes float-particle {
          0%, 100% { transform: translateY(0px) translateX(0px) opacity: 0.3; }
          50% { transform: translateY(-100px) translateX(50px) opacity: 1; }
        }
        
        @keyframes lightning {
          0%, 90%, 100% { opacity: 0; }
          5%, 85% { opacity: 1; }
          10%, 80% { opacity: 0; }
          15%, 75% { opacity: 1; }
        }
        
        @keyframes lightning-delayed {
          0%, 85%, 100% { opacity: 0; }
          10%, 80% { opacity: 1; }
          15%, 75% { opacity: 0; }
          20%, 70% { opacity: 1; }
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        
        .animate-float-particle {
          animation: float-particle 6s linear infinite;
        }
        
        .animate-lightning {
          animation: lightning 4s linear infinite;
        }
        
        .animate-lightning-delayed {
          animation: lightning-delayed 4s linear infinite 2s;
        }
        
        .animate-gradient-shift {
          background-size: 400% 400%;
          animation: gradient-shift 3s ease infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
        
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-500 { animation-delay: 500ms; }
        .animation-delay-600 { animation-delay: 600ms; }
      `}</style>
    </footer>
  );
};

export default Footer;