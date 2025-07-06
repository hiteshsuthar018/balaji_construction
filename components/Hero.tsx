'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Building, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: Building, number: '500+', label: 'Projects Completed' },
    { icon: Award, number: '15+', label: 'Years Experience' },
    { icon: Users, number: '1000+', label: 'Happy Clients' },
  ];

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-orange-500/20 rounded-full"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-blue-500/20 rounded-full"
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-12 h-12 bg-yellow-500/20 rounded-full"
          animate={{
            y: [0, -15, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-poppins text-shadow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Balaji Construction
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-white mb-8 font-medium text-shadow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Building Dreams with Strength and Style
          </motion.p>
          
          <motion.p
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Expert construction services by <span className="font-semibold">Pyar Chand Suthar</span> in Udaipur, Rajasthan. 
            From residential homes to commercial complexes, we build with precision and passion.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Free Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center text-white"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <stat.icon className="h-8 w-8 mx-auto mb-2 text-orange-400" />
              <div className="text-2xl md:text-3xl font-bold">{stat.number}</div>
              <div className="text-sm md:text-base text-white/80">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.button
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
          onClick={scrollToNext}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.2 }}
        >
          <ChevronDown className="h-8 w-8" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;