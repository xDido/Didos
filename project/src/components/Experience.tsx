import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Backend Developer Intern",
      company: "TechStart Solutions",
      location: "Remote",
      period: "Jun 2024 - Aug 2024",
      description: [
        "Developed RESTful APIs using Node.js and Express.js for a customer management system",
        "Implemented database optimization techniques that improved query performance by 40%",
        "Collaborated with frontend team to integrate APIs and ensure seamless data flow",
        "Participated in code reviews and followed agile development practices"
      ]
    },
    {
      title: "Junior Software Developer",
      company: "University Research Lab",
      location: "Cairo, Egypt",
      period: "Jan 2024 - May 2024",
      description: [
        "Built data processing pipelines using Python and PostgreSQL",
        "Created automated testing suites that increased code coverage to 85%",
        "Developed microservices architecture for research data management",
        "Mentored junior students in backend development best practices"
      ]
    },
    {
      title: "Freelance Backend Developer",
      company: "Self-Employed",
      location: "Remote",
      period: "Sep 2023 - Dec 2023",
      description: [
        "Delivered custom backend solutions for 3 small businesses",
        "Implemented secure authentication and authorization systems",
        "Optimized database schemas and improved application performance",
        "Provided technical consultation on system architecture decisions"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-32 bg-gradient-to-b from-purple-400 to-transparent"></div>
              )}
              
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <Briefcase size={20} className="text-white" />
                </div>
                
                <div className="flex-1 bg-slate-800/50 rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                      <p className="text-purple-400 font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                      <div className="flex items-center text-gray-400 mb-1">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-gray-400">
                        <MapPin size={16} className="mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-300 flex items-start">
                        <span className="text-purple-400 mr-2 mt-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;