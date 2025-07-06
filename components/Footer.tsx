'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      'Residential Construction',
      'Commercial Construction',
      'Renovation & Remodeling',
      'Interior Design',
      'Electrical & Plumbing',
      'Landscaping',
    ],
    quickLinks: [
      { name: 'About Us', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Projects', href: '#projects' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Contact', href: '#contact' },
    ],
    contact: [
      { icon: Phone, text: '+91 8079039805' },
      { icon: Phone, text: '+91 9460489738' },
      { icon: Phone, text: '+91 9079659450' },
      { icon: Mail, text: 'info@balajiconstructionudaipur.com' },
      { icon: MapPin, text: 'Udaipur, Rajasthan' },
      { icon: Clock, text: 'Mon - Sat: 9:00 AM - 6:00 PM' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold text-orange-400 mb-4 font-poppins">
                Balaji Construction
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Building dreams with strength and style. Led by Pyar Chand Suthar, we deliver 
                exceptional construction services in Udaipur, Rajasthan.
              </p>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-orange-600 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold text-orange-400 mb-4">Our Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((service, index) => (
                <li key={index}>
                  <motion.button
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-left"
                    whileHover={{ x: 5 }}
                    onClick={() => handleLinkClick('#services')}
                  >
                    {service}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold text-orange-400 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.button
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-left"
                    whileHover={{ x: 5 }}
                    onClick={() => handleLinkClick(link.href)}
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold text-orange-400 mb-4">Contact Info</h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((contact, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <contact.icon className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{contact.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Balaji Construction. All rights reserved. Built with passion in Udaipur.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <motion.button
              className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
            >
              Privacy Policy
            </motion.button>
            <motion.button
              className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
            >
              Terms of Service
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;