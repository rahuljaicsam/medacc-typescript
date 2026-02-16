import { motion } from 'framer-motion';
import {
  Lightbulb,
  FlaskConical,
  TrendingUp,
  LogOut,
  Shield,
  Wallet,
  Globe,
  Users,
  Compass,
  Network,
  GraduationCap,
  Rocket,
} from 'lucide-react';

const features = [
  {
    icon: Lightbulb,
    title: 'IDEATE',
    description: 'Ideation & Team Formation',
    color: 'from-amber-400 to-orange-500',
  },
  {
    icon: FlaskConical,
    title: 'INCUBATE',
    description: 'Prototype Development',
    color: 'from-blue-400 to-blue-600',
  },
  {
    icon: TrendingUp,
    title: 'RAISE',
    description: 'Funding Strategies',
    color: 'from-green-400 to-emerald-600',
  },
  {
    icon: LogOut,
    title: 'EXIT',
    description: 'Strategic Exit Plannings',
    color: 'from-purple-400 to-purple-600',
  },
  {
    icon: Shield,
    title: 'KEEP',
    description: 'Long-Term Business Sustainability',
    color: 'from-red-400 to-rose-600',
  },
  {
    icon: Wallet,
    title: 'FUND',
    description: 'Lifetime Startup Support',
    color: 'from-cyan-400 to-cyan-600',
  },
  {
    icon: Globe,
    title: 'ACROSS',
    description: 'Global Expansion',
    color: 'from-indigo-400 to-indigo-600',
  },
  {
    icon: Users,
    title: 'GROW',
    description: 'Customer Acquisition',
    color: 'from-pink-400 to-pink-600',
  },
  {
    icon: Compass,
    title: 'NAVIGATE',
    description: 'Regulatory Assistance',
    color: 'from-teal-400 to-teal-600',
  },
  {
    icon: Network,
    title: 'CONNECT',
    description: 'Community Building',
    color: 'from-violet-400 to-violet-600',
  },
  {
    icon: GraduationCap,
    title: 'MENTOR',
    description: 'Expert Mentorship',
    color: 'from-yellow-400 to-yellow-600',
  },
  {
    icon: Rocket,
    title: 'INNOVATE',
    description: 'Innovation Hub',
    color: 'from-medical-blue to-medical-teal',
  },
];

const WhyAcceleration = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-medical-blue/10 rounded-full mb-6">
            <Rocket className="w-4 h-4 text-medical-blue" />
            <span className="text-medical-blue font-medium text-sm">Our Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Why Medical / Acceleration?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We fast-track innovative health solutions from idea to impact through 
            expert consulting, templates and collaboration.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-white rounded-2xl p-6 border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-500">
                {feature.description}
              </p>

              {/* Hover Gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-medical-blue/5 to-medical-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyAcceleration;
