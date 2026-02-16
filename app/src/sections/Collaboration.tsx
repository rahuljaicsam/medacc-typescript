import { motion } from 'framer-motion';
import { Handshake, Code, Heart, Dna } from 'lucide-react';

const partners = [
  {
    name: 'Tinkerhub Foundation',
    description: 'Empowering the next generation of tech innovators',
    icon: Code,
    color: 'from-orange-400 to-red-500',
  },
  {
    name: 'Femtech Lab',
    description: 'Advancing women\'s health technology',
    icon: Heart,
    color: 'from-pink-400 to-rose-500',
  },
  {
    name: 'Kerala Genome Data Centre (KGDC)',
    description: 'Pioneering genomic research and data analytics',
    icon: Dna,
    color: 'from-blue-400 to-indigo-500',
  },
];

const Collaboration = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-medical-teal/10 rounded-full mb-6">
            <Handshake className="w-4 h-4 text-medical-teal" />
            <span className="text-medical-teal font-medium text-sm">Partnerships</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Our Collaboration
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We partner with leading organizations to create a comprehensive ecosystem 
            for healthcare innovation.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-3 gap-8"
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.name}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-medical-blue/20 hover:shadow-xl transition-all duration-300 text-center"
            >
              {/* Icon */}
              <div
                className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${partner.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <partner.icon className="w-10 h-10 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {partner.name}
              </h3>
              <p className="text-slate-600">
                {partner.description}
              </p>

              {/* Hover Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-medical-blue to-medical-teal rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Collaboration;
