import { motion } from 'framer-motion';
import { Code, Database, Server, Cloud, Shield, Zap } from 'lucide-react';

const Technologies = () => {
  const techCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      technologies: ["Java", "Python", "Javascript"]
    },
    {
      icon: Server,
      title: "Backend Frameworks",
      technologies: ["Node.js", "Express.js", "Django", "Flask", "Spring Boot", "FastAPI"]
    },
    {
      icon: Database,
      title: "Databases",
      technologies: ["PostgreSQL", "MongoDB", "Redis"]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      technologies: ["AWS", "Docker", "Kubernetes","GitHub Actions"]
    },
    {
      icon: Shield,
      title: "Security & Auth",
      technologies: ["JWT", "OAuth 2.0", "bcrypt", "SSL/TLS", "API Security", "CORS"]
    },
    {
      icon: Zap,
      title: "Tools & Others",
      technologies: ["Git", "Postman", "Swagger", "Linux", "Nginx", "Maven"]
    }
  ];

  return (
    <section id="technologies" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-6 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg mr-4">
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm border border-purple-500/30 hover:border-purple-400/50 transition-all duration-200"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;