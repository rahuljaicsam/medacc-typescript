import { motion } from 'framer-motion';
import { Building2, Briefcase, Stethoscope, Pill, Heart, Microscope, Truck, Sparkles, Database, Shield } from 'lucide-react';

const companies = [
  { name: 'AeroMed Air', icon: Truck, color: 'from-blue-400 to-blue-600' },
  { name: 'Lifestyle Corp', icon: Building2, color: 'from-green-400 to-emerald-600' },
  { name: 'MyyDoctor', icon: Stethoscope, color: 'from-cyan-400 to-cyan-600' },
  { name: 'RPM Doctor', icon: Heart, color: 'from-red-400 to-rose-600' },
  { name: 'MayaMD', icon: Microscope, color: 'from-purple-400 to-purple-600' },
  { name: 'Cytokine Lectures', icon: Database, color: 'from-amber-400 to-orange-500' },
  { name: 'G.K Formulations', icon: Pill, color: 'from-pink-400 to-pink-600' },
  { name: 'Raastha Consultancy', icon: Briefcase, color: 'from-indigo-400 to-indigo-600' },
  { name: 'Saath.care', icon: Heart, color: 'from-teal-400 to-teal-600' },
  { name: 'Cocoscrubs', icon: Sparkles, color: 'from-violet-400 to-violet-600' },
  { name: 'Pillsbee', icon: Pill, color: 'from-yellow-400 to-yellow-600' },
  { name: 'Pramana', icon: Shield, color: 'from-medical-blue to-medical-teal' },
];

const TopCompanies = () => {
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-medical-teal/10 rounded-full mb-6">
            <Building2 className="w-4 h-4 text-medical-teal" />
            <span className="text-medical-teal font-medium text-sm">Partners</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Top Companies
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Leading healthcare and biotech companies that trust and collaborate with us.
          </p>
        </motion.div>

        {/* Companies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6"
        >
          {companies.map((company) => (
            <motion.div
              key={company.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                transition: { duration: 0.2 } 
              }}
              className="group relative bg-white rounded-2xl p-6 border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${company.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
              >
                <company.icon className="w-7 h-7 text-white" />
              </div>

              {/* Name */}
              <span className="text-sm font-semibold text-slate-700 group-hover:text-medical-blue transition-colors">
                {company.name}
              </span>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-medical-blue/5 to-medical-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TopCompanies;
