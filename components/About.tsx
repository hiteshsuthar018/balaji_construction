'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Clock, Shield } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Award,
      title: 'Quality Craftsmanship',
      description: 'We deliver exceptional quality in every project with attention to detail and superior materials.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our skilled professionals bring years of experience and dedication to every construction project.',
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'We understand the importance of deadlines and consistently deliver projects on time.',
    },
    {
      icon: Shield,
      title: 'Trust & Safety',
      description: 'Safety is our priority, and we maintain the highest standards throughout the construction process.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins">
            About Balaji Construction
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Led by experienced contractor <span className="font-semibold text-orange-600">Pyar Chand Suthar</span>, 
            we have been transforming the landscape of Udaipur, Rajasthan with our exceptional construction services.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Construction site"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              className="absolute -bottom-8 -right-0 bg-white p-6 rounded-xl shadow-xl border-l-4 border-orange-600"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl font-bold text-orange-600">15+</div>
              <div className="text-gray-600 font-medium">Years of Excellence</div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Building Tomorrow, Today
            </h3>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              With over 15 years of experience in the construction industry, Balaji Construction has established 
              itself as a trusted name in Udaipur. We specialize in residential, commercial, and industrial 
              construction projects, always maintaining the highest standards of quality and safety.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Under the leadership of Pyar Chand Suthar, our team combines traditional craftsmanship with 
              modern construction techniques to deliver exceptional results that stand the test of time.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-orange-600"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <feature.icon className="h-8 w-8 text-orange-600 mb-3" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;