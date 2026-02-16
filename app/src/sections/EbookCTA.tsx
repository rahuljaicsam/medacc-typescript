import { motion } from 'framer-motion';
import { BookOpen, ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EbookCTA = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-0">
            {/* Left Content - Image */}
            <div className="relative h-64 lg:h-auto">
              <img
                src="/images/ebook-cover.jpg"
                alt="Biotech Entrepreneurship eBook"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 lg:bg-gradient-to-l" />
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-medical-blue" />
                  <span className="font-bold text-slate-900">40 Pages</span>
                </div>
              </motion.div>
            </div>

            {/* Right Content - Text */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-medical-blue/10 rounded-full mb-6 w-fit">
                <BookOpen className="w-4 h-4 text-medical-blue" />
                <span className="text-medical-blue font-medium text-sm">Free eBook</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Free 40 page eBook packed with insight about biotech entrepreneurship
              </h2>

              <blockquote className="relative pl-6 border-l-4 border-medical-blue mb-6">
                <p className="text-slate-600 italic leading-relaxed">
                  "With a focus on the leadership and soft skills needed to become a high 
                  impact CEO, CTO, CMO and CFO, this ebook is packed with personal insights 
                  collected from our global community about some of the attributes they 
                  believe are needed to become an effective technology leader. Definitely 
                  not your standard eBook"
                </p>
                <footer className="mt-3 text-sm text-slate-500">
                  — CTO at Med/Acc
                </footer>
              </blockquote>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-medical-blue hover:bg-medical-blue-dark text-white px-8 py-6 rounded-xl font-semibold group"
                >
                  Contact us for a copy
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-200 hover:border-green-500 hover:text-green-600 px-8 py-6 rounded-xl font-semibold group"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Ask on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EbookCTA;
