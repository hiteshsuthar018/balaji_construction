'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Home, Building, Hammer, Paintbrush, Zap, TreePine } from 'lucide-react';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Home,
      title: 'Residential Construction',
      description: 'Custom homes, apartments, and residential complexes built with modern amenities and traditional charm.',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Building,
      title: 'Commercial Projects',
      description: 'Office buildings, retail spaces, and commercial complexes designed for business success.',
      image: 'https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Hammer,
      title: 'Renovation & Remodeling',
      description: 'Transform your existing space with our expert renovation and remodeling services.',
      image: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Paintbrush,
      title: 'Interior Design',
      description: 'Complete interior solutions including design, furniture, and decoration services.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Zap,
      title: 'Electrical & Plumbing',
      description: 'Professional electrical and plumbing services for all types of construction projects.',
      image: 'https://images.pexels.com/photos/2419375/pexels-photo-2419375.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: TreePine,
      title: 'Landscaping',
      description: 'Beautiful outdoor spaces with professional landscaping and garden design services.',
      image: 'https://images.pexels.com/photos/1400375/pexels-photo-1400375.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive construction services to meet all your building needs, 
            from residential homes to commercial complexes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4 p-3 bg-white/90 backdrop-blur-sm rounded-full">
                  <service.icon className="h-6 w-6 text-orange-600" />
                </div>
              </div>
              
              <div className="p-6 group-hover:opacity-0 transition-opacity duration-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-orange-600/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end pointer-events-none">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-white/90">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. We'll work with you to bring your vision to life.
          </p>
          <motion.button
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Free Quote
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;