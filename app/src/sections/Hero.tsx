import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden pt-20">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-medical-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-medical-teal/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-medical-blue/5 to-transparent rounded-full" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#1e40af 1px, transparent 1px), linear-gradient(90deg, #1e40af 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-160px)]">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-medical-blue/10 rounded-full mb-6">
              <span className="w-2 h-2 bg-medical-blue rounded-full animate-pulse" />
              <span className="text-medical-blue font-medium text-sm">Biomedical Startup Accelerator</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6"
            >
              Welcome to{' '}
              <span className="bg-gradient-to-r from-medical-blue to-medical-teal bg-clip-text text-transparent">
                MED/ACC
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Strategic Support for Health & Biotech Ventures Ready to Grow. 
              We fast-track innovative health solutions from idea to impact.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-medical-blue hover:bg-medical-blue-dark text-white px-8 py-6 rounded-xl font-semibold text-lg transition-all hover:scale-105 hover:shadow-glow-lg group"
              >
                Get Pricing
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center border-2 border-slate-200 hover:border-medical-blue text-slate-700 hover:text-medical-blue px-8 py-6 rounded-xl font-semibold text-lg transition-all hover:scale-105 group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Read more
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-200"
            >
              <div>
                <div className="text-3xl font-bold text-medical-blue font-display">50+</div>
                <div className="text-sm text-slate-500 mt-1">Startups</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-medical-teal font-display">$10M+</div>
                <div className="text-sm text-slate-500 mt-1">Funding Raised</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-medical-cyan font-display">12</div>
                <div className="text-sm text-slate-500 mt-1">Countries</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Floating Images */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[600px]">
              {/* Main Image - Top Left */}
              <motion.div
                variants={imageVariants}
                className="absolute top-0 left-0 w-56 h-56 rounded-3xl overflow-hidden shadow-2xl animate-float"
              >
                <img
                  src="/images/hero-1.jpg"
                  alt="Medical VR Technology"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 ring-4 ring-medical-blue/20 rounded-3xl" />
              </motion.div>

              {/* Image - Top Right */}
              <motion.div
                variants={imageVariants}
                className="absolute top-8 right-0 w-48 h-48 rounded-3xl overflow-hidden shadow-2xl animate-float-delayed"
              >
                <img
                  src="/images/hero-2.jpg"
                  alt="Surgeon with Tablet"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 ring-4 ring-medical-teal/20 rounded-3xl" />
              </motion.div>

              {/* Image - Bottom Left */}
              <motion.div
                variants={imageVariants}
                className="absolute bottom-20 left-8 w-52 h-52 rounded-3xl overflow-hidden shadow-2xl animate-float-delayed"
                style={{ animationDelay: '0.5s' }}
              >
                <img
                  src="/images/hero-3.jpg"
                  alt="Medical Research"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 ring-4 ring-medical-cyan/20 rounded-3xl" />
              </motion.div>

              {/* Image - Bottom Right */}
              <motion.div
                variants={imageVariants}
                className="absolute bottom-0 right-8 w-60 h-60 rounded-3xl overflow-hidden shadow-2xl animate-float"
                style={{ animationDelay: '1.5s' }}
              >
                <img
                  src="/images/hero-4.jpg"
                  alt="Biotech Engineering"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 ring-4 ring-medical-blue/20 rounded-3xl" />
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-primary rounded-full opacity-20 blur-2xl" />
              
              {/* Floating Dots */}
              <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-medical-blue rounded-full animate-pulse" />
              <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-medical-teal rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-medical-cyan rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 bg-medical-blue rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
