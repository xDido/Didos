import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, MessageCircle, Heart, Share2, Search, Tag, ArrowRight, Clock } from 'lucide-react';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable APIs with Node.js and Express",
      excerpt: "Learn how to design and implement RESTful APIs that can handle thousands of requests per second while maintaining clean code architecture and optimal performance.",
      content: "In this comprehensive guide, we'll explore the fundamentals of building scalable APIs using Node.js and Express. We'll cover everything from setting up your development environment to implementing advanced features like rate limiting, caching, and database optimization...",
      date: "2024-01-15",
      author: "Ahmed Haitham",
      likes: 42,
      readTime: "5 min read",
      category: "Backend",
      tags: ["Node.js", "API", "Backend", "Express", "Performance"],
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      title: "Database Optimization Techniques for Better Performance",
      excerpt: "Discover advanced database optimization strategies including indexing, query optimization, and connection pooling to boost your application's performance significantly.",
      content: "Database performance is crucial for any backend application. In this article, we'll dive deep into various optimization techniques that can dramatically improve your database performance. From proper indexing strategies to query optimization and connection pooling...",
      date: "2024-01-08",
      author: "Ahmed Haitham",
      likes: 38,
      readTime: "7 min read",
      category: "Database",
      tags: ["Database", "PostgreSQL", "Optimization", "Performance", "SQL"],
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "Implementing JWT Authentication in Modern Web Applications",
      excerpt: "A comprehensive guide to implementing secure JWT-based authentication with refresh tokens, role-based access control, and best security practices.",
      content: "Authentication is a critical component of any web application. In this detailed tutorial, we'll implement a complete JWT-based authentication system with refresh tokens, role-based access control, and security best practices...",
      date: "2024-01-01",
      author: "Ahmed Haitham",
      likes: 56,
      readTime: "8 min read",
      category: "Security",
      tags: ["JWT", "Authentication", "Security", "Backend", "Authorization"],
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 4,
      title: "Microservices Architecture: A Complete Guide",
      excerpt: "Understanding microservices architecture, its benefits, challenges, and how to implement it effectively in your backend systems.",
      content: "Microservices architecture has become increasingly popular for building scalable and maintainable applications. In this guide, we'll explore the principles of microservices, their benefits and challenges...",
      date: "2023-12-28",
      author: "Ahmed Haitham",
      likes: 73,
      readTime: "12 min read",
      category: "Architecture",
      tags: ["Microservices", "Architecture", "Scalability", "Docker", "Kubernetes"],
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 5,
      title: "Redis Caching Strategies for High-Performance Applications",
      excerpt: "Learn how to implement effective caching strategies using Redis to dramatically improve your application's response times and reduce database load.",
      content: "Caching is one of the most effective ways to improve application performance. In this article, we'll explore various Redis caching strategies and patterns that can help you build high-performance applications...",
      date: "2023-12-20",
      author: "Ahmed Haitham",
      likes: 45,
      readTime: "6 min read",
      category: "Performance",
      tags: ["Redis", "Caching", "Performance", "Backend", "Optimization"],
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 6,
      title: "Docker and Containerization for Backend Developers",
      excerpt: "Master Docker containerization to streamline your development workflow and ensure consistent deployments across different environments.",
      content: "Docker has revolutionized how we develop, test, and deploy applications. In this comprehensive guide, we'll learn how to containerize backend applications effectively...",
      date: "2023-12-15",
      author: "Ahmed Haitham",
      likes: 61,
      readTime: "10 min read",
      category: "DevOps",
      tags: ["Docker", "Containerization", "DevOps", "Deployment", "Backend"],
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const categories = ['All', 'Backend', 'Database', 'Security', 'Architecture', 'Performance', 'DevOps'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
    <div className="min-h-screen pt-20 pb-10">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            🌌 Cosmic Code Chronicles
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
          <p className="text-gray-300 dark:text-gray-400 max-w-3xl mx-auto text-lg">
            Exploring the vast universe of backend development, one star system at a time. 
            Join me on this cosmic journey through code, architecture, and innovation.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search the cosmos for articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 dark:bg-black/50 border border-purple-500/30 rounded-xl focus:border-purple-400 focus:outline-none transition-colors text-white placeholder-gray-400"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'bg-slate-800/50 dark:bg-black/50 text-gray-300 hover:bg-purple-500/20 border border-purple-500/30'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 dark:from-black/80 dark:to-slate-900/80 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-purple-500/80 text-white rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 flex items-center text-white text-sm">
                  <Clock size={14} className="mr-1" />
                  {post.readTime}
                </div>
              </div>

              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <Calendar size={16} className="mr-2" />
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                  <span className="mx-2">•</span>
                  <User size={16} className="mr-1" />
                  {post.author}
                </div>

                {/* Title */}
                <Link to={`/blog/${post.id}`}>
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight hover:text-purple-400 transition-colors cursor-pointer group-hover:text-purple-400">
                    {post.title}
                  </h3>
                </Link>

                {/* Excerpt */}
                <p className="text-gray-300 dark:text-gray-400 mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-purple-900/30 text-purple-300 rounded text-xs border border-purple-500/30 flex items-center"
                    >
                      <Tag size={10} className="mr-1" />
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 3 && (
                    <span className="px-2 py-1 bg-purple-900/30 text-purple-300 rounded text-xs border border-purple-500/30">
                      +{post.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
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
                  </div>

                  <Link to={`/blog/${post.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <span className="text-sm mr-1">Read More</span>
                      <ArrowRight size={14} />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🌌</div>
            <h3 className="text-2xl font-bold text-white mb-2">No cosmic discoveries found</h3>
            <p className="text-gray-400">Try adjusting your search or explore different categories</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;