import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';

const blogPosts = [
  {
    title: 'What is med/acc?',
    category: 'About',
    excerpt: 'Learn about our mission to accelerate biomedical startups and transform healthcare innovation.',
    image: '/images/hero-1.jpg',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    title: 'What is drjaicsam.xyz?',
    category: 'Product',
    excerpt: 'Discover the most powerful healthcare doctor chatbot app powered by advanced AI.',
    image: '/images/hero-2.jpg',
    color: 'bg-green-100 text-green-700',
  },
  {
    title: 'Global Healthcare: Good, Bad and Ugly?',
    category: 'Industry',
    excerpt: 'An in-depth analysis of the current state of global healthcare systems.',
    image: '/images/blog-healthcare.jpg',
    color: 'bg-purple-100 text-purple-700',
  },
  {
    title: 'Money - Biomedical Perspective',
    category: 'Finance',
    excerpt: 'Understanding funding strategies for healthtech and biotech ventures.',
    image: '/images/venue-makerspace.jpg',
    color: 'bg-amber-100 text-amber-700',
  },
  {
    title: 'Auto-Immune Diseases: Digital Therapeutics',
    category: 'Health',
    excerpt: 'How digital solutions are revolutionizing autoimmune disease treatment.',
    image: '/images/hero-3.jpg',
    color: 'bg-rose-100 text-rose-700',
  },
  {
    title: 'Why do businesses fail?',
    category: 'Business',
    excerpt: 'Key lessons from failed startups and how to avoid common pitfalls.',
    image: '/images/blog-ai.jpg',
    color: 'bg-cyan-100 text-cyan-700',
  },
];

const Blog = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section id="blogs" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-medical-blue/10 rounded-full mb-6">
              <BookOpen className="w-4 h-4 text-medical-blue" />
              <span className="text-medical-blue font-medium text-sm">Blog</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
              Get up to date with our blogs
            </h2>
          </div>
          
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('left')}
              className="rounded-full border-slate-200 hover:border-medical-blue hover:text-medical-blue"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('right')}
              className="rounded-full border-slate-200 hover:border-medical-blue hover:text-medical-blue"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
            <a
              href="#"
              className="hidden sm:flex items-center gap-2 text-medical-blue font-medium hover:underline ml-4"
            >
              View all
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Blog Carousel */}
        <motion.div
          ref={scrollRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {blogPosts.map((post) => (
            <motion.a
              key={post.title}
              href="#"
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group flex-shrink-0 w-[320px] sm:w-[380px] snap-start"
            >
              <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`${post.color} font-medium`}>
                      {post.category}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-medical-blue transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-medical-blue font-medium text-sm mt-4 group-hover:gap-3 transition-all">
                    Read more
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
