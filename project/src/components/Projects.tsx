import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Database, Server } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce API Platform",
      description: "A comprehensive RESTful API for an e-commerce platform with user authentication, product management, order processing, and payment integration.",
      technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "Stripe API", "Docker"],
      features: [
        "User authentication and authorization",
        "Product catalog management",
        "Shopping cart and order processing",
        "Payment gateway integration",
        "Admin dashboard API"
      ],
      github: "https://github.com",
      demo: "https://demo.example.com",
      icon: Server
    },
    {
      title: "Real-time Chat Application Backend",
      description: "Scalable backend for a real-time messaging application supporting multiple chat rooms, file sharing, and user presence indicators.",
      technologies: ["Python", "Django", "WebSockets", "Redis", "PostgreSQL", "Celery"],
      features: [
        "Real-time messaging with WebSockets",
        "File upload and sharing",
        "User presence and typing indicators",
        "Message history and search",
        "Push notifications"
      ],
      github: "https://github.com",
      demo: "https://demo.example.com",
      icon: Database
    },
    {
      title: "Task Management API",
      description: "A robust task management system with team collaboration features, project tracking, and automated reporting capabilities.",
      technologies: ["Java", "Spring Boot", "MySQL", "Spring Security", "JPA", "Maven"],
      features: [
        "Project and task management",
        "Team collaboration tools",
        "Automated progress reporting",
        "Role-based access control",
        "RESTful API design"
      ],
      github: "https://github.com",
      demo: "https://demo.example.com",
      icon: Code
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg mr-4">
                    <project.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-300 flex items-start">
                        <span className="text-purple-400 mr-2 mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-purple-900/30 text-purple-300 rounded text-xs border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-200"
                  >
                    <Github size={16} className="mr-2" />
                    <span className="text-sm">Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-lg transition-all duration-200"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    <span className="text-sm">Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;