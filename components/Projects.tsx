'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, Calendar, MapPin, Users } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Luxury Villa Complex',
      category: 'Residential',
      location: 'Udaipur, Rajasthan',
      year: '2023',
      area: '5000 sq ft',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A stunning luxury villa complex featuring modern architecture with traditional Rajasthani elements.',
      features: ['4 BHK Villas', 'Private Gardens', 'Swimming Pool', 'Modern Kitchen'],
    },
    {
      id: 2,
      title: 'Commercial Plaza',
      category: 'Commercial',
      location: 'City Center, Udaipur',
      year: '2022',
      area: '15000 sq ft',
      image: 'https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A modern commercial plaza with retail spaces and office complexes in the heart of the city.',
      features: ['Retail Outlets', 'Office Spaces', 'Parking Facility', 'Central AC'],
    },
    {
      id: 3,
      title: 'Heritage Hotel',
      category: 'Hospitality',
      location: 'Lake City, Udaipur',
      year: '2023',
      area: '25000 sq ft',
      image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A boutique heritage hotel blending traditional architecture with modern amenities.',
      features: ['50 Rooms', 'Restaurant', 'Conference Hall', 'Spa & Wellness'],
    },
    {
      id: 4,
      title: 'Residential Apartments',
      category: 'Residential',
      location: 'Hiran Magri, Udaipur',
      year: '2022',
      area: '12000 sq ft',
      image: 'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern residential apartments with all essential amenities for comfortable living.',
      features: ['2 & 3 BHK Units', 'Gymnasium', 'Play Area', 'Security System'],
    },
    {
      id: 5,
      title: 'Industrial Warehouse',
      category: 'Industrial',
      location: 'Industrial Area, Udaipur',
      year: '2021',
      area: '30000 sq ft',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Large-scale industrial warehouse with modern logistics and storage facilities.',
      features: ['Storage Facility', 'Loading Docks', 'Office Complex', 'Security Systems'],
    },
    {
      id: 6,
      title: 'School Building',
      category: 'Educational',
      location: 'Pratap Nagar, Udaipur',
      year: '2021',
      area: '18000 sq ft',
      image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern school building with spacious classrooms and educational facilities.',
      features: ['30 Classrooms', 'Laboratory', 'Library', 'Playground'],
    },
  ];

  const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Hospitality', 'Educational'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins">
            Our Projects
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful construction projects across various sectors in Udaipur and beyond.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-orange-100 hover:text-orange-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-orange-600 text-white text-sm font-medium rounded-full">
                    {project.category}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <div className="flex items-center text-sm text-white/80">
                      <MapPin className="h-4 w-4 mr-1" />
                      {project.location}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.year}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {project.area}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-white rounded-2xl w-full max-w-6xl mx-4 max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(p => p.id === selectedProject);
                  if (!project) return null;
                  
                  return (
                    <div className="relative">
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="absolute top-4 right-4 z-10 p-2 bg-white/90 rounded-full hover:bg-white transition-colors shadow-lg"
                      >
                        <X className="h-6 w-6" />
                      </button>
                      
                      <div className="relative h-64 md:h-96 overflow-hidden rounded-t-2xl">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>
                      
                      <div className="p-6 md:p-8">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{project.title}</h3>
                          <span className="px-3 py-1 bg-orange-600 text-white text-sm font-medium rounded-full self-start md:self-auto">
                            {project.category}
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                          <div className="flex items-center text-gray-600">
                            <MapPin className="h-5 w-5 mr-2 text-orange-600" />
                            <span>{project.location}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Calendar className="h-5 w-5 mr-2 text-orange-600" />
                            <span>{project.year}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Users className="h-5 w-5 mr-2 text-orange-600" />
                            <span>{project.area}</span>
                          </div>
                        </div>
                        
                        <p className="text-base md:text-lg text-gray-700 mb-6">{project.description}</p>
                        
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {project.features.map((feature, index) => (
                              <div key={index} className="flex items-center text-gray-600">
                                <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;