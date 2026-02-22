import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';
import { blogPosts } from '../data/blogPosts';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === Number(id));

  console.log('BlogPost ID:', id);
  console.log('Found Post:', post);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h2>
            <Link to="/blog" className="text-blue-600 hover:underline">
              Back to Blogs
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <Link 
              to="/blog" 
              className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blogs
            </Link>
          </div>

          <div>
            <header className="mb-12 text-center">
              <div className="mb-6">
                <span className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>

              <div className="flex items-center justify-center gap-6 text-gray-500 text-sm">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span className="font-medium text-gray-900">{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </header>
          </div>

          {post.image && (
            <div className="mb-12 rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50">
                 {/* Placeholder for image if actual image fails or is generic */}
                 <div className="w-full h-64 md:h-96 bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center text-6xl">
                    {post.image.includes('hero') || post.image.includes('med-acc') ? '🧬' : '📝'}
                 </div>
            </div>
          )}

          <div 
            className="prose prose-lg prose-blue max-w-none text-gray-600"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
