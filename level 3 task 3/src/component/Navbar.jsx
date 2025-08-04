// components/Header.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaCode, FaHome, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const navItems = [
  { href: '#home', label: 'Home', icon: <FaHome /> },
  { href: '#about', label: 'About', icon: <FaUser /> },
  { href: '#projects', label: 'Projects', icon: <FaProjectDiagram /> },
  { href: '#contact', label: 'Contact', icon: <FaEnvelope /> },
];

// Animation variants
const headerVariants = {
  hidden: { 
    y: -100, 
    opacity: 0 
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

const logoVariants = {
  hidden: { 
    opacity: 0, 
    x: -50,
    scale: 0.8 
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const navVariants = {
  hidden: { 
    opacity: 0, 
    x: 50 
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

const navItemVariants = {
  hidden: { 
    opacity: 0, 
    y: -20 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      staggerChildren: 0.1,
    },
  },
};

const mobileItemVariants = {
  hidden: { 
    opacity: 0, 
    x: -30 
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(`#${currentSection}`);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (href) => {
    setActiveSection(href);
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.header
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        className={`w-full text-white py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center fixed top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#B33791]/95 backdrop-blur-md shadow-lg border-b border-white/10' 
            : 'bg-gradient-to-r from-[#B33791] to-[#9C2A7A] shadow-md'
        }`}
      >
        {/* Logo Section */}
        <motion.div
          variants={logoVariants}
          className="flex items-center gap-3"
        >
          <motion.div
            whileHover={{ 
              rotate: 360,
              scale: 1.1,
            }}
            transition={{ duration: 0.5 }}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
          >
            <FaCode className="text-xl text-white" />
          </motion.div>
          <motion.h1 
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
            whileHover={{ 
              scale: 1.05,
              textShadow: "0px 0px 8px rgba(255,255,255,0.8)"
            }}
          >
            Zain's Portfolio
          </motion.h1>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav 
          variants={navVariants}
          className="hidden md:flex items-center space-x-8"
        >
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              variants={navItemVariants}
              onClick={() => handleNavClick(item.href)}
              className={`relative flex items-center gap-2 text-sm lg:text-base font-medium transition-all duration-300 group ${
                activeSection === item.href 
                  ? 'text-white' 
                  : 'text-white/80 hover:text-white'
              }`}
              whileHover={{ 
                scale: 1.05,
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="text-lg"
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.2 }}
              >
                {item.icon}
              </motion.span>
              {item.label}
              
              {/* Active indicator */}
              {activeSection === item.href && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              
              {/* Hover underline */}
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white/60 rounded-full"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </motion.nav>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={toggleMenu}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm border border-white/30"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaTimes className="text-xl" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaBars className="text-xl" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed top-20 left-0 right-0 z-40 md:hidden bg-[#B33791]/95 backdrop-blur-md border-b border-white/10"
          >
            <nav className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  variants={mobileItemVariants}
                  onClick={() => handleNavClick(item.href)}
                  className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === item.href
                      ? 'bg-white/20 text-white border border-white/30'
                      : 'text-white/80 hover:bg-white/10 hover:text-white'
                  }`}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    className="text-xl"
                    whileHover={{ rotate: 15 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.icon}
                  </motion.span>
                  <span className="font-medium">{item.label}</span>
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content overlap */}
      <div className="h-20" />
    </>
  );
};