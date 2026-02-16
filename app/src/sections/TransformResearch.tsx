import { motion } from 'framer-motion';
import { ArrowRight, Play, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TransformResearch = () => {
  return (
    <section className="py-20 lg:py-32 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-medical-blue/20 rounded-full mb-6">
              <Cpu className="w-4 h-4 text-medical-blue" />
              <span className="text-medical-blue font-medium text-sm">Innovation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Helping founders transform{' '}
              <span className="bg-gradient-to-r from-medical-blue to-medical-teal bg-clip-text text-transparent">
                Frontier Research
              </span>{' '}
              to Product
            </h2>

            <p className="text-lg text-slate-400 mb-8">
              Fast track humanoid robots into hospitals. We bridge the gap between 
              cutting-edge research and market-ready healthcare solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-medical-blue hover:bg-medical-blue-dark text-white px-8 py-6 rounded-xl font-semibold group"
              >
                Explore Solutions
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-white hover:bg-slate-800 px-8 py-6 rounded-xl font-semibold group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-700">
              <div>
                <div className="text-3xl font-bold text-white font-display">15+</div>
                <div className="text-sm text-slate-500 mt-1">Robots Deployed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white font-display">50+</div>
                <div className="text-sm text-slate-500 mt-1">Hospitals</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white font-display">98%</div>
                <div className="text-sm text-slate-500 mt-1">Accuracy</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/robot-medical.jpg"
                alt="Medical Humanoid Robot"
                className="w-full h-auto"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 hover:bg-white/30 transition-colors"
                >
                  <Play className="w-8 h-8 text-white ml-1" />
                </motion.button>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-medical-blue/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-medical-teal/20 rounded-full blur-2xl" />

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">AI Powered</div>
                  <div className="text-sm text-slate-500">Advanced Robotics</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TransformResearch;
