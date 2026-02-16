import { motion } from 'framer-motion';
import { Building2, Clock, Users, Globe } from 'lucide-react';

const venues = [
  {
    title: '24/7 Open Makerspace',
    description: 'Safe and free to use makerspace with expert guides available around the clock',
    icon: Clock,
    image: '/images/venue-makerspace.jpg',
    color: 'from-blue-400 to-blue-600',
  },
  {
    title: 'University Access',
    description: 'Access to brightest minds and PhDs inside university research facilities',
    icon: Users,
    image: '/images/venue-university.jpg',
    color: 'from-green-400 to-emerald-600',
  },
  {
    title: 'Global Community',
    description: 'Access to global medical AI research community and industry experts',
    icon: Globe,
    image: '/images/blog-healthcare.jpg',
    color: 'from-purple-400 to-purple-600',
  },
];

const Venues = () => {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-medical-blue/10 rounded-full mb-6">
            <Building2 className="w-4 h-4 text-medical-blue" />
            <span className="text-medical-blue font-medium text-sm">Facilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Our Venues and Facilities
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            World-class facilities designed to support innovation and collaboration 
            in healthcare technology.
          </p>
        </motion.div>

        {/* Venues Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-3 gap-8"
        >
          {venues.map((venue) => (
            <motion.div
              key={venue.title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={venue.image}
                  alt={venue.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Icon Badge */}
                <div
                  className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${venue.color} flex items-center justify-center`}
                >
                  <venue.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-medical-blue transition-colors">
                  {venue.title}
                </h3>
                <p className="text-slate-600">
                  {venue.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Venues;
