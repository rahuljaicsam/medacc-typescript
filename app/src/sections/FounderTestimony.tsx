import { motion } from 'framer-motion';
import { Quote, Award, Users, Building2, BookOpen, Clock } from 'lucide-react';

const testimonials = [
  {
    icon: Award,
    title: 'Learn from award winning biomedical entrepreneurs',
    description: 'Collaborating with all medical associations for entrepreneurship',
    color: 'from-amber-400 to-orange-500',
  },
  {
    icon: Users,
    title: 'Listen to how one of the med/acc founders started his entrepreneurship',
    description: 'Founder of US based patient rehab and follow up AI digital twin company',
    color: 'from-blue-400 to-blue-600',
  },
  {
    icon: Building2,
    title: 'Med/acc founders have taken the lead in coordinating genomic data center projects',
    description: 'Incharge of KGDC under KDISC redistributing 1000 crore grants to startups across Kerala universities',
    color: 'from-green-400 to-emerald-600',
  },
  {
    icon: Award,
    title: 'Helped build private jet ambulance startup from scratch',
    description: 'Helped raised multimillion dollar for scaling the business',
    color: 'from-purple-400 to-purple-600',
  },
  {
    icon: BookOpen,
    title: 'Med/acc founders have taken the lead in teaching industry leaders and PhD students',
    description: '100+ research journal club completed',
    color: 'from-pink-400 to-pink-600',
  },
  {
    icon: Clock,
    title: 'Med/acc founders have taken the lead in fastracking hospital building from scratch',
    description: 'Record time ideation to inauguration of hospital with latest tech adoption',
    color: 'from-teal-400 to-teal-600',
  },
];

const FounderTestimony = () => {
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
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-medical-blue/10 rounded-full mb-6">
            <Quote className="w-4 h-4 text-medical-blue" />
            <span className="text-medical-blue font-medium text-sm">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Our Founder Testimony
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Hear from the founders who have transformed their innovative ideas into 
            successful healthcare ventures with our support.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-medical-blue/20 hover:shadow-lg transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-medical-blue" />
              </div>

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${testimonial.color} flex items-center justify-center mb-4`}
              >
                <testimonial.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">
                {testimonial.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {testimonial.description}
              </p>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-medical-blue to-medical-teal rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FounderTestimony;
