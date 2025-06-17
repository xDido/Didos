import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Target, Telescope } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50 dark:bg-black/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            🌟 About My Cosmic Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 dark:text-gray-400 leading-relaxed">
              I'm a passionate backend software engineer who recently graduated with a strong foundation in 
              building scalable, efficient, and robust server-side applications. My journey in software 
              development has been driven by curiosity and a desire to solve complex problems through code, 
              much like exploring the vast cosmos of technology.
            </p>
            <p className="text-lg text-gray-300 dark:text-gray-400 leading-relaxed">
              I specialize in creating APIs, designing database architectures, and implementing backend 
              systems that power modern applications. Like a cosmic explorer, I'm always eager to learn 
              new technologies and contribute to innovative projects that push the boundaries of what's possible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 dark:from-purple-950/50 dark:to-pink-950/50 p-6 rounded-xl border border-purple-500/20">
              <div className="flex items-center mb-4">
                <Heart className="text-purple-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">My Passion</h3>
              </div>
              <p className="text-gray-300 dark:text-gray-400">
                Building efficient backend systems that scale like galaxies and perform under pressure while 
                maintaining clean, maintainable code that stands the test of time.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 dark:from-purple-950/50 dark:to-pink-950/50 p-6 rounded-xl border border-purple-500/20">
              <div className="flex items-center mb-4">
                <Code className="text-purple-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">My Approach</h3>
              </div>
              <p className="text-gray-300 dark:text-gray-400">
                I believe in writing clean, well-documented code and following best practices to create 
                solutions that are both functional and maintainable, like well-organized star systems.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 dark:from-purple-950/50 dark:to-pink-950/50 p-6 rounded-xl border border-purple-500/20">
              <div className="flex items-center mb-4">
                <Telescope className="text-purple-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">My Cosmic Dream</h3>
              </div>
              <p className="text-gray-300 dark:text-gray-400">
                To become a senior backend architect who designs systems that power millions of users 
                across the digital universe while mentoring the next generation of cosmic code explorers.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;