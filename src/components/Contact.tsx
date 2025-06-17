import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin} from 'lucide-react';

const Contact = () => {



  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "adhaithaam@gmail.com",
      link: "mailto:adhaithaam@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+20 123 450 0211",
      link: "tel:+201234500211"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Cairo, Egypt",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/xDido",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/adhaitham",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-2">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology. Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. I'm currently looking for new opportunities and 
                exciting challenges in backend development.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                    <info.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{info.title}</h4>
                    <a
                      href={info.link}
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-white font-medium mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className={`p-3 bg-slate-800/50 rounded-lg border border-purple-500/30 hover:border-purple-400 transition-all duration-300 ${social.color}`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;