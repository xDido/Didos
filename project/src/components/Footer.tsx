import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900/80 border-t border-purple-500/20 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Ahmed Haitham
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Backend Software Engineer passionate about building scalable solutions 
              and contributing to innovative projects.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Experience', 'Projects', 'Education', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-2 mb-4">
              <p className="text-gray-300">Cairo, Egypt</p>
              <a
                href="mailto:ahmed.haitham@example.com"
                className="text-gray-300 hover:text-purple-400 transition-colors duration-200 block"
              >
                ahmed.haitham@example.com
              </a>
            </div>
            
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-2 bg-slate-800/50 rounded-lg border border-purple-500/30 hover:border-purple-400 transition-all duration-300"
              >
                <Github size={20} className="text-purple-400" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-2 bg-slate-800/50 rounded-lg border border-purple-500/30 hover:border-purple-400 transition-all duration-300"
              >
                <Linkedin size={20} className="text-purple-400" />
              </motion.a>
              <motion.a
                href="mailto:ahmed.haitham@example.com"
                whileHover={{ scale: 1.1 }}
                className="p-2 bg-slate-800/50 rounded-lg border border-purple-500/30 hover:border-purple-400 transition-all duration-300"
              >
                <Mail size={20} className="text-purple-400" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between"
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Ahmed Haitham. All rights reserved.
          </p>
          
          <div className="flex items-center text-gray-400 text-sm">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="mx-2"
            >
              <Heart size={16} className="text-red-400 fill-current" />
            </motion.div>
            <span>using React & Tailwind CSS</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;