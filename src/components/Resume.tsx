import { motion } from 'framer-motion';
import { Download, Eye, FileText, X, ExternalLink } from 'lucide-react';
import {useState} from "react";

const Resume = () => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
             Cosmic Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 dark:from-black/80 dark:to-slate-900/80 rounded-xl p-8 border border-purple-500/20"
          >
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                <FileText size={40} className="text-white" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">Download My Cosmic Journey</h3>
            <p className="text-gray-300 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Get a comprehensive overview of my experience, skills, and achievements. 
              My resume includes detailed information about my projects, technical expertise, 
              and professional background in the vast universe of backend development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowPreview(true)}
                className="flex items-center justify-center px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-200"
              >
                <Eye size={20} className="mr-2" />
                Preview Resume
              </motion.button>

              <motion.a
                href="/Ahmed_Haitham_Resumev.pdf"
                download="Ahmed_Haitham_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-lg transition-all duration-200"
              >
                <Download size={20} className="mr-2" />
                Download PDF
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Resume Preview Modal */}
        {showPreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowPreview(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white dark:bg-slate-900 rounded-lg max-w-6xl max-h-[90vh] overflow-hidden relative w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Resume Preview</h3>
                <div className="flex items-center space-x-2">
                  <motion.a
                    href="/Ahmed_Haitham_Resumev.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                    title="Open in new tab"
                  >
                    <ExternalLink size={20} className="text-gray-600 dark:text-gray-400" />
                  </motion.a>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    onClick={() => setShowPreview(false)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                  >
                    <X size={20} className="text-gray-600 dark:text-gray-400" />
                  </motion.button>
                </div>
              </div>
              
              <div className="p-4 overflow-auto max-h-[calc(90vh-80px)]">
                <iframe
                  src="/Ahmed_Haitham_Resumev.pdf"
                  className="w-full h-[600px] border-0 rounded"
                  title="Resume Preview"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Resume;