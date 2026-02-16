import { motion } from 'framer-motion';
import { ExternalLink, Rocket } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const companies = [
  {
    name: 'AITHICAL STUDIOS',
    description: 'Multiple Award winning AI powered movie studio',
    status: 'Seeking Investors',
    statusColor: 'bg-amber-100 text-amber-700',
    image: '/images/blog-ai.jpg',
    link: '#',
  },
  {
    name: 'DR.JAICSAM',
    description: 'Worlds most powerful and advanced healthcare doctor chatbot app',
    status: 'Bootstrapped',
    statusColor: 'bg-green-100 text-green-700',
    image: '/images/hero-2.jpg',
    link: '#',
  },
  {
    name: 'STEALTH STARTUP',
    description: 'Automating Radiology, Pathology, Dermatology, Nuclear Medicine and Radiotherapy',
    status: 'Seeking Investors',
    statusColor: 'bg-amber-100 text-amber-700',
    image: '/images/hero-3.jpg',
    link: '#',
  },
  {
    name: 'MEDSCHOOL GBA',
    description: 'Democratisation of medical education through video game',
    status: 'Seeking godot developer',
    statusColor: 'bg-blue-100 text-blue-700',
    image: '/images/hero-1.jpg',
    link: '#',
  },
  {
    name: 'MANBOLT',
    description: 'Humanoid Robot Doctor, Surgeon and Researcher',
    status: 'Seeking investors',
    statusColor: 'bg-amber-100 text-amber-700',
    image: '/images/robot-medical.jpg',
    link: '#',
  },
];

const LatestLaunch = () => {
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
    hidden: { opacity: 0, y: 40 },
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
    <section id="portfolio" className="py-20 lg:py-32 bg-slate-50">
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
            <Rocket className="w-4 h-4 text-medical-teal" />
            <span className="text-medical-teal font-medium text-sm">Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Our Latest Launch
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover the innovative healthtech and biotech startups we've helped launch 
            and scale to success.
          </p>
        </motion.div>

        {/* Companies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {companies.map((company) => (
            <motion.a
              key={company.name}
              href={company.link}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group block bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={company.image}
                  alt={company.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 text-slate-700" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <Badge className={`${company.statusColor} mb-3 font-medium`}>
                  {company.status}
                </Badge>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-medical-blue transition-colors">
                  {company.name}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {company.description}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LatestLaunch;
