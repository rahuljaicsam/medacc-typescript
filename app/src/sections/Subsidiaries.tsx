import { motion } from 'framer-motion';
import { Building2, MapPin, Users, Plane, Wallet, Palette, Box, Code, BarChart3, Shield, Search, Handshake, Building, Video, FlaskConical } from 'lucide-react';

const subsidiaries = [
  { name: 'Map Search', description: 'Engine for doctors', icon: MapPin, color: 'from-red-400 to-rose-500' },
  { name: 'Networking', description: 'Community for founders', icon: Users, color: 'from-blue-400 to-blue-600' },
  { name: 'Retire & Immigrate', description: 'For doctors', icon: Plane, color: 'from-green-400 to-emerald-600' },
  { name: 'Investment', description: 'Portfolio for doctors', icon: Wallet, color: 'from-amber-400 to-orange-500' },
  { name: 'UX-UI Design', description: 'Templates for founders', icon: Palette, color: 'from-pink-400 to-pink-600' },
  { name: '3D Prototype', description: 'Template kit', icon: Box, color: 'from-purple-400 to-purple-600' },
  { name: 'Code Template', description: 'Tool kit for founders', icon: Code, color: 'from-cyan-400 to-cyan-600' },
  { name: 'Data Analytics', description: 'Tool kit', icon: BarChart3, color: 'from-indigo-400 to-indigo-600' },
  { name: 'Cyber Security', description: 'Quality tools', icon: Shield, color: 'from-teal-400 to-teal-600' },
  { name: 'Talent Finder', description: 'Best in biotech', icon: Search, color: 'from-violet-400 to-violet-600' },
  { name: 'Patenting', description: 'Regulatory compliance', icon: Handshake, color: 'from-yellow-400 to-yellow-600' },
  { name: 'CRM & Sales', description: 'For founders', icon: Building, color: 'from-medical-blue to-medical-teal' },
  { name: 'Healthcare', description: 'For hospitals & clinics', icon: Building2, color: 'from-rose-400 to-rose-600' },
  { name: 'Media Content', description: 'Custom for founders', icon: Video, color: 'from-orange-400 to-orange-600' },
  { name: 'R&D Templates', description: 'For founders', icon: FlaskConical, color: 'from-lime-400 to-lime-600' },
];

const Subsidiaries = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
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
    <section className="py-20 lg:py-32 bg-white">
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
            <Building2 className="w-4 h-4 text-medical-blue" />
            <span className="text-medical-blue font-medium text-sm">Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Our Subsidiaries
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive ecosystem of services to support every aspect of your 
            healthcare venture journey.
          </p>
        </motion.div>

        {/* Subsidiaries Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-5 gap-4"
        >
          {subsidiaries.map((sub) => (
            <motion.div
              key={sub.name}
              variants={itemVariants}
              whileHover={{ 
                y: -4, 
                scale: 1.02,
                transition: { duration: 0.2 } 
              }}
              className="group relative bg-slate-50 rounded-2xl p-4 border border-slate-100 hover:border-medical-blue/20 hover:shadow-lg transition-all duration-300 cursor-pointer text-center"
            >
              {/* Icon */}
              <div
                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${sub.color} flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300`}
              >
                <sub.icon className="w-5 h-5 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xs font-bold text-slate-900 mb-0.5 group-hover:text-medical-blue transition-colors">
                {sub.name}
              </h3>
              <p className="text-[10px] text-slate-500">
                {sub.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Subsidiaries;
