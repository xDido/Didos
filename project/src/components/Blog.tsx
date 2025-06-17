import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Share2, Calendar, User, MessageCircle, ExternalLink, ArrowRight } from 'lucide-react';

const Blog = () => {
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable APIs with Node.js and Express",
      excerpt: "Learn how to design and implement RESTful APIs that can handle thousands of requests per second while maintaining clean code architecture.",
      date: "2024-01-15",
      author: "Ahmed Haitham",
      likes: 42,
      readTime: "5 min read",
      tags: ["Node.js", "API", "Backend", "Express"]
    },
    {
      id: 2,
      title: "Database Optimization Techniques for Better Performance",
      excerpt: "Discover advanced database optimization strategies including indexing, query optimization, and connection pooling to boost your application's performance.",
      date: "2024-01-08",
      author: "Ahmed Haitham",
      likes: 38,
      readTime: "7 min read",
      tags: ["Database", "PostgreSQL", "Optimization", "Performance"]
    },
    {
      id: 3,
      title: "Implementing JWT Authentication in Modern Web Applications",
      excerpt: "A comprehensive guide to implementing secure JWT-based authentication with refresh tokens, role-based access control, and best security practices.",
      date: "2024-01-01",
      author: "Ahmed Haitham",
      likes: 56,
      readTime: "8 min read",
      tags: ["JWT", "Authentication", "Security", "Backend"]
    }
  ];

  const handleLike = (postId: number) => {
    setLikedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  const handleShare = (post: any) => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: `${window.location.origin}/blog/${post.id}`
      });
    } else {
      navigator.clipboard.writeText(`${post.title} - ${window.location.origin}/blog/${post.id}`);
    }
  };

  return (
    <section id="blog" className="py-20 bg-slate-800/50 dark:bg-black/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            🌌 Cosmic Code Chronicles
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
          <p className="text-gray-300 dark:text-gray-400 max-w-2xl mx-auto">
            Sharing insights, tutorials, and experiences from my journey as a backend developer. 
            Explore articles about modern web development, best practices, and emerging technologies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 dark:from-black/80 dark:to-slate-900/80 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <Calendar size={16} className="mr-2" />
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>

                <Link to={`/blog/${post.id}`}>
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight hover:text-purple-400 transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                </Link>

                <p className="text-gray-300 dark:text-gray-400 mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-purple-900/30 text-purple-300 rounded text-xs border border-purple-500/30"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <div className="flex items-center text-sm text-gray-400">
                    <User size={16} className="mr-2" />
                    {post.author}
                  </div>

                  <div className="flex items-center space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleLike(post.id)}
                      className={`flex items-center space-x-1 transition-colors ${
                        likedPosts.includes(post.id) 
                          ? 'text-red-400' 
                          : 'text-gray-400 hover:text-red-400'
                      }`}
                    >
                      <Heart 
                        size={16} 
                        className={likedPosts.includes(post.id) ? 'fill-current' : ''} 
                      />
                      <span className="text-sm">
                        {post.likes + (likedPosts.includes(post.id) ? 1 : 0)}
                      </span>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleShare(post)}
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      <Share2 size={16} />
                    </motion.button>

                    <Link to={`/blog/${post.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-gray-400 hover:text-purple-400 transition-colors"
                      >
                        <ExternalLink size={16} />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link to="/blog">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-lg transition-all duration-200 font-medium"
            >
              Explore All Cosmic Chronicles
              <ArrowRight size={20} className="ml-2" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;