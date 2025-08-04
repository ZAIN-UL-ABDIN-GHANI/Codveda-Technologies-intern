// pages/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaCss3Alt, FaHtml5, FaJs } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiRedux } from 'react-icons/si';

const skillIcons = [
  { icon: <FaReact />, label: 'React', color: 'text-blue-500' },
  { icon: <SiNextdotjs />, label: 'Next.js', color: 'text-gray-800' },
  { icon: <SiTailwindcss />, label: 'Tailwind CSS', color: 'text-cyan-500' },
  { icon: <FaHtml5 />, label: 'HTML5', color: 'text-orange-600' },
  { icon: <FaCss3Alt />, label: 'CSS3', color: 'text-blue-600' },
  { icon: <FaJs />, label: 'JavaScript', color: 'text-yellow-500' },
  { icon: <SiRedux />, label: 'Redux', color: 'text-purple-600' },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const nameVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      type: "spring",
      stiffness: 100,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      delay: 0.3,
    },
  },
};

const descriptionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.5,
    },
  },
};

const skillsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.8,
      staggerChildren: 0.1,
    },
  },
};

const skillItemVariants = {
  hidden: { opacity: 0, scale: 0, rotate: -180 },
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
  hover: {
    scale: 1.2,
    rotate: 360,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const floatingAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export const Hero = () => {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Name with scaling animation */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
          variants={nameVariants}
          animate={pulseAnimation}
        >
          Zain ul Abdin Ghani
        </motion.h1>

        {/* Title with slide-in animation */}
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-purple-300 mb-6"
          variants={titleVariants}
        >
          Web Developer
        </motion.h2>

        {/* Description with fade-up animation */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed px-4"
          variants={descriptionVariants}
        >
          I specialize in creating dynamic and accessible web applications using modern 
          technologies like React.js, Next.js, Tailwind CSS, and Redux. My focus is on 
          performance, clean code, and responsive design for all devices.
        </motion.p>

        {/* Skills with staggered animations */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8"
          variants={skillsContainerVariants}
        >
          {skillIcons.map((item, index) => (
            <motion.div
              key={index}
              className={`group flex flex-col items-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors duration-300 ${item.color}`}
              variants={skillItemVariants}
              whileHover="hover"
              animate={index % 2 === 0 ? floatingAnimation : {}}
            >
              <motion.div
                className="text-3xl sm:text-4xl md:text-5xl mb-2"
                whileHover={{
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                {item.icon}
              </motion.div>
              <motion.span
                className="text-xs sm:text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ y: 10 }}
                whileHover={{ y: 0 }}
              >
                {item.label}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating CTA Button */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(147, 51, 234, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              y: [0, -5, 0],
              transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Background animated elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"
          animate={{
            scale: [1.5, 1, 1.5],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>
    </motion.div>
  );
};