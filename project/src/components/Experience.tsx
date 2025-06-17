import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Vodafone Egypt",
      location: "Hybrid(Cairo, Egypt)",
      period: "Jul 2024 - Sep 2024",
      description: [
        " Implemented a real-time server monitoring application that tracks performance metrics for 4 servers, detecting high\n" +
        " load conditions, reducing incident response time by 40% improving system reliability.",
        " Developed a load balancing mechanism to distribute traffic across 4 servers, achieving a 30% improvement in server\n" +
        " efficiency."
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Hadbrok Insurances",
      location: "Hybrid(Cairo, Egypt)",
      period: "Jul 2023 - Sep 2023",
      description: [
        " Developed a tailored database schema to drive the company’s website operations, which made data retrieval faster\n" +
        " by 154% than before.",
        "Revamped most of the API routes and migrated to Django instead of Laravel, leveraging RESTful principles, and\n" +
        " implementing techniques such as pagi- nation, caching, and token-based authentication, leading to a 30%\n" +
        " improvement in response time."
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "First Abu Dhabi Bank",
      location: "Cairo, Egypt",
      period: "Sep 2022 - Dec 2022",
      description: [
        "Explored Java EE applications, Java Persistence API (JPA) for data management, and JDBC for interacting with\n" +
        " databases.",
        " Created an application to manage employee absences by scanning a QR code using Spring Boot and PostgreSQL."
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