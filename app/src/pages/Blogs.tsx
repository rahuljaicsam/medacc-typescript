import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, Calendar, Clock, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';
import { blogPosts, categories } from '../data/blogPosts';

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => post.id !== featuredPost?.id);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <section id="blog" className="relative min-h-screen bg-gradient-to-b from-[#f0f9ff] via-white to-[#f8fafc] py-20 overflow-hidden">
          {/* Background decorative elements matching the site style */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-50/50 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header matching Navigation.tsx style */}
            <ScrollReveal>
              <div className="text-center mb-16">
                <motion.span 
                  className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6 border border-blue-100"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse" />
                  Latest Insights
                </motion.span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                  Get up to date with our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">blogs</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Insights, updates, and expert perspectives on healthcare innovation, biotech trends, and startup success stories.
                </p>
              </div>
            </ScrollReveal>

            {/* Navigation Bar - Styled like Header Navigation */}
            <ScrollReveal delay={0.1} className="z-50">
              <div className="sticky top-24 z-40 mb-12">
                <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-100 p-4">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Category Navigation - Desktop */}
                    <nav className="hidden md:flex items-center space-x-1">
                      {categories.slice(0, 5).map((category) => (
                        <motion.button
                          key={category}
                          onClick={() => setActiveCategory(category)}
                          className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                            activeCategory === category
                              ? "text-blue-600 bg-blue-50"
                              : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {category}
                          {activeCategory === category && (
                            <motion.div
                              layoutId="activeBlogNav"
                              className="absolute inset-0 bg-blue-50 rounded-xl -z-10"
                              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                          )}
                        </motion.button>
                      ))}
                      
                      {/* Dropdown for additional categories */}
                      <div className="relative">
                        <motion.button
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className={`flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                            isDropdownOpen ? "text-blue-600 bg-blue-50" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          More
                          <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
                        </motion.button>

                        <AnimatePresence>
                          {isDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                            >
                              {categories.slice(5).map((category) => (
                                <button
                                  key={category}
                                  onClick={() => {
                                    setActiveCategory(category);
                                    setIsDropdownOpen(false);
                                  }}
                                  className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                                    activeCategory === category
                                      ? "text-blue-600 bg-blue-50"
                                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                  }`}
                                >
                                  {category}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </nav>

                    {/* Mobile Category Select */}
                    <div className="md:hidden w-full">
                      <select
                        value={activeCategory}
                        onChange={(e) => setActiveCategory(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        {categories.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Search Bar - Matching header search style */}
                    <div className="relative w-full md:w-72">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search articles..."
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm font-medium text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Featured Post */}
            {featuredPost && activeCategory === "All" && (
              <ScrollReveal delay={0.2}>
                <Link to={`/blogs/${featuredPost.id}`}>
                  <motion.article
                    className="mb-12 group cursor-pointer"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                      <div className="grid md:grid-cols-2 gap-0">
                        <div className="relative h-64 md:h-auto overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                            <div className="text-6xl">🧬</div>
                          </div>
                          <div className="absolute top-4 left-4">
                            <span className="px-4 py-1.5 bg-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                              Featured
                            </span>
                          </div>
                        </div>
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full font-medium">
                              {featuredPost.category}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {featuredPost.date}
                            </span>
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                            {featuredPost.title}
                          </h3>
                          <p className="text-gray-600 mb-6 line-clamp-3">
                            {featuredPost.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white font-bold">
                                {featuredPost.author.charAt(0)}
                              </div>
                              <div>
                                <p className="font-medium text-gray-900">{featuredPost.author}</p>
                                <p className="text-sm text-gray-500 flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  {featuredPost.readTime}
                                </p>
                              </div>
                            </div>
                            <motion.div
                              className="flex items-center gap-2 text-blue-600 font-semibold"
                              whileHover={{ x: 5 }}
                            >
                              Read More <ArrowRight className="w-4 h-4" />
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                </Link>
              </ScrollReveal>
            )}

            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <ScrollReveal key={post.id} delay={0.1 * index}>
                  <Link to={`/blogs/${post.id}`} className="block h-full">
                    <motion.article
                      className="group bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 h-full"
                      whileHover={{ y: -8 }}
                    >
                      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                        <div className="absolute inset-0 flex items-center justify-center text-4xl">
                          {index % 2 === 0 ? "🔬" : "💊"}
                        </div>
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-white/90 backdrop-blur text-gray-700 text-xs font-bold rounded-full">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white text-xs font-bold">
                              {post.author.charAt(0)}
                            </div>
                            <span className="text-sm font-medium text-gray-700">{post.author}</span>
                          </div>
                          <motion.div
                            className="text-blue-600"
                            whileHover={{ x: 3 }}
                          >
                            <ArrowRight className="w-5 h-5" />
                          </motion.div>
                        </div>
                      </div>
                    </motion.article>
                  </Link>
                </ScrollReveal>
              ))}
            </div>

            {/* Load More Button */}
            <ScrollReveal delay={0.4}>
              <div className="text-center mt-16">
                <motion.button
                  className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Load More Articles
                  <ChevronDown className="w-5 h-5" />
                </motion.button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default Blogs;
