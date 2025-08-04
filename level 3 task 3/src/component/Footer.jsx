// components/Footer.jsx
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const socialLinks = [
  { icon: <FaGithub />, href: '#', label: 'GitHub', color: 'hover:text-gray-300' },
  { icon: <FaLinkedin />, href: '#', label: 'LinkedIn', color: 'hover:text-blue-400' },
  { icon: <FaTwitter />, href: '#', label: 'Twitter', color: 'hover:text-sky-400' },
  { icon: <SiGmail />, href: '#', label: 'Email', color: 'hover:text-red-400' },
];

// Animation variants
const footerVariants = {
  hidden: { 
    opacity: 0, 
    y: 50 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const contentVariants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const socialVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0,
    rotate: -180 
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      type: "spring",
      stiffness: 200,
    },
  },
};

const heartVariants = {
  scale: [1, 1.2, 1],
  transition: {
    duration: 1.5,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const waveVariants = {
  d: [
    "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
    "M0,128L48,144C96,160,192,192,288,192C384,192,480,160,576,144C672,128,768,128,864,144C960,160,1056,192,1152,192C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
    "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
  ],
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative bg-gradient-to-br from-[#B33791] via-[#9C2A7A] to-[#7B1E63] text-white mt-16 overflow-hidden"
    >
      {/* Animated Wave Background */}
      <div className="absolute inset-0 opacity-10">
        <svg
          viewBox="0 0 1440 320"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <motion.path
            fill="currentColor"
            animate={waveVariants}
            className="text-white/5"
          />
        </svg>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <motion.div 
            variants={contentVariants}
            className="text-center mb-8"
          >
            {/* Brand/Name */}
            <motion.h3 
              className="text-2xl sm:text-3xl font-bold mb-4 text-white drop-shadow-lg"
              whileHover={{ 
                scale: 1.05,
                textShadow: "0px 0px 12px rgba(255,255,255,0.9)"
              }}
            >
              Zain ul Abdin Ghani
            </motion.h3>
            
            {/* Tagline */}
            <motion.p 
              className="text-base sm:text-lg text-white/95 mb-6 max-w-2xl mx-auto drop-shadow-md font-medium"
              variants={contentVariants}
            >
              Crafting digital experiences with passion and precision
            </motion.p>

            {/* Social Links */}
            <motion.div 
              className="flex justify-center gap-6 mb-8"
              variants={contentVariants}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  variants={socialVariants}
                  whileHover={{ 
                    scale: 1.3,
                    rotate: 360,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-2xl sm:text-3xl transition-colors duration-300 ${social.color}`}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Divider with animation */}
          <motion.div 
            className="border-t border-white/20 mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          />

          {/* Copyright Section */}
          <motion.div 
            variants={contentVariants}
            className="text-center"
          >
            <motion.p 
              className="text-sm sm:text-base text-white font-medium flex items-center justify-center gap-2 flex-wrap drop-shadow-md"
              whileHover={{ color: "rgba(255,255,255,1)" }}
            >
              © 2025 Zain ul Abdin Ghani. Made with 
              <motion.span
                animate={heartVariants}
                className="text-red-400 drop-shadow-lg"
              >
                <FaHeart />
              </motion.span>
              All rights reserved.
            </motion.p>
            
            {/* Additional Links */}
            <motion.div 
              className="mt-4 flex justify-center gap-6 text-xs sm:text-sm text-white/90 font-medium"
              variants={contentVariants}
            >
              <motion.a 
                href="#" 
                className="hover:text-white transition-colors duration-300 drop-shadow-md hover:drop-shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-white transition-colors duration-300 drop-shadow-md hover:drop-shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                Terms of Service
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-white transition-colors duration-300 drop-shadow-md hover:drop-shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                Contact
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
    </motion.footer>
  );
};