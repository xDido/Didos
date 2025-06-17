import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, MessageCircle, Heart, Share2, ArrowLeft, Clock, Tag } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();
  const [liked, setLiked] = useState(false);

  // Mock blog post data (in a real app, this would come from an API)
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable APIs with Node.js and Express",
      content: `
        <h2>Introduction</h2>
        <p>In today's digital landscape, building scalable APIs is crucial for any successful backend application. Node.js and Express provide an excellent foundation for creating robust, high-performance APIs that can handle thousands of concurrent requests.</p>
        
        <h2>Setting Up Your Environment</h2>
        <p>Before we dive into building our API, let's set up our development environment properly. We'll need Node.js, npm, and a few essential packages to get started.</p>
        
        <pre><code>npm init -y
npm install express cors helmet morgan dotenv
npm install -D nodemon</code></pre>
        
        <h2>Creating the Basic Server Structure</h2>
        <p>Let's start by creating a basic Express server with proper middleware configuration:</p>
        
        <pre><code>const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});</code></pre>
        
        <h2>Implementing Rate Limiting</h2>
        <p>Rate limiting is essential for protecting your API from abuse and ensuring fair usage among clients. We'll use the express-rate-limit package:</p>
        
        <pre><code>const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});

app.use('/api/', limiter);</code></pre>
        
        <h2>Database Integration and Connection Pooling</h2>
        <p>For optimal performance, we'll implement connection pooling with PostgreSQL:</p>
        
        <pre><code>const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  max: 20, // maximum number of clients in the pool
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Example query function
async function getUsers() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM users');
    return result.rows;
  } finally {
    client.release();
  }
}</code></pre>
        
        <h2>Error Handling and Logging</h2>
        <p>Proper error handling is crucial for maintaining a stable API. Let's implement a comprehensive error handling middleware:</p>
        
        <pre><code>// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  
  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ error: 'Invalid JSON' });
  }
  
  res.status(500).json({ 
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  });
});</code></pre>
        
        <h2>Performance Optimization</h2>
        <p>To ensure your API performs well under load, consider implementing these optimization techniques:</p>
        
        <ul>
          <li><strong>Caching:</strong> Use Redis for caching frequently accessed data</li>
          <li><strong>Compression:</strong> Enable gzip compression for responses</li>
          <li><strong>Database Indexing:</strong> Ensure proper indexing on frequently queried columns</li>
          <li><strong>Pagination:</strong> Implement pagination for large datasets</li>
          <li><strong>Async/Await:</strong> Use async/await for better error handling and readability</li>
        </ul>
        
        <h2>Testing Your API</h2>
        <p>Testing is crucial for maintaining code quality. Here's a basic test setup using Jest and Supertest:</p>
        
        <pre><code>const request = require('supertest');
const app = require('../app');

describe('API Endpoints', () => {
  test('GET /api/health should return status OK', async () => {
    const response = await request(app)
      .get('/api/health')
      .expect(200);
    
    expect(response.body.status).toBe('OK');
  });
});</code></pre>
        
        <h2>Conclusion</h2>
        <p>Building scalable APIs requires careful consideration of architecture, performance, and security. By following these best practices and implementing proper error handling, rate limiting, and database optimization, you'll be well on your way to creating robust backend systems that can handle production workloads.</p>
        
        <p>Remember to always monitor your API's performance in production and be prepared to scale horizontally as your user base grows. Happy coding! 🚀</p>
      `,
      date: "2024-01-15",
      author: "Ahmed Haitham",
      likes: 42,
      comments: 8,
      readTime: "5 min read",
      category: "Backend",
      tags: ["Node.js", "API", "Backend", "Express", "Performance"],
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    // Add more blog posts here...
  ];

  const post = blogPosts.find(p => p.id === parseInt(id || '1'));

  if (!post) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-purple-400 hover:text-purple-300">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.content.substring(0, 100) + '...',
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/blog"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Cosmic Chronicles
          </Link>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-6 left-6">
            <span className="px-3 py-1 bg-purple-500/80 text-white rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>
        </motion.div>

        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-6">
            <div className="flex items-center">
              <Calendar size={16} className="mr-2" />
              {new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
            <div className="flex items-center">
              <User size={16} className="mr-2" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-2" />
              {post.readTime}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm border border-purple-500/30 flex items-center"
              >
                <Tag size={12} className="mr-1" />
                {tag}
              </span>
            ))}
          </div>

          {/* Social Actions */}
          <div className="flex items-center space-x-6 pb-6 border-b border-gray-700">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleLike}
              className={`flex items-center space-x-2 transition-colors ${
                liked ? 'text-red-400' : 'text-gray-400 hover:text-red-400'
              }`}
            >
              <Heart size={20} className={liked ? 'fill-current' : ''} />
              <span>{post.likes + (liked ? 1 : 0)}</span>
            </motion.button>

            <div className="flex items-center space-x-2 text-gray-400">
              <MessageCircle size={20} />
              <span>{post.comments}</span>
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleShare}
              className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Share2 size={20} />
              <span>Share</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="prose prose-lg prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Author Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 p-6 bg-slate-800/50 dark:bg-black/50 rounded-xl border border-purple-500/20"
        >
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
              <User size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">About the Author</h3>
              <p className="text-gray-300 dark:text-gray-400">
                Ahmed Haitham is a passionate backend software engineer with expertise in building scalable systems. 
                He loves exploring new technologies and sharing knowledge with the developer community.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost;