import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Activity, Heart, Globe, Video, BookOpen, Stethoscope, Brain, MonitorSmartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const companies = [
    {
      name: "Lifestyle Corp Research Lab",
      description: "Specializes in AI and robotics for healthcare, aiming to extend human life through innovative technologies.",
      icon: Brain,
      color: "text-blue-600",
      bg: "bg-blue-50",
      gradient: "from-blue-500 to-indigo-600",
      category: "AI & Robotics"
    },
    {
      name: "MyyDoctor",
      description: "Premium Social Media App for luxury healthcare services for patients, doctors and enterprise.",
      icon: Heart,
      color: "text-pink-600",
      bg: "bg-pink-50",
      gradient: "from-pink-500 to-rose-600",
      category: "Digital Health"
    },
    {
      name: "RMT Health",
      description: "A telemedicine remote patient monitoring platform connecting patients with top doctors worldwide for virtual consultations and treatments.",
      icon: Globe,
      color: "text-teal-600",
      bg: "bg-teal-50",
      gradient: "from-teal-500 to-emerald-600",
      category: "Telemedicine"
    },
    {
      name: "MayaMD.ai",
      description: "An AI-driven Health assistant Post discharge tool that helps patients make faster recovery, more accurate management using advanced NLP algorithms and AI clones.",
      icon: Activity,
      color: "text-violet-600",
      bg: "bg-violet-50",
      gradient: "from-violet-500 to-purple-600",
      category: "AI Health Assistant"
    },
    {
      name: "Saath.care",
      description: "Saath empower a chronic disease patient of cancer and pregnancy at every step in their treatment journey by informing, reassuring, and supporting.",
      icon: Stethoscope,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      gradient: "from-emerald-500 to-green-600",
      category: "Patient Support"
    },
    {
      name: "Cytokine Lectures",
      description: "Provides educational content and resources on Premium app for medical student focusing on clinical skills.",
      icon: BookOpen,
      color: "text-amber-600",
      bg: "bg-amber-50",
      gradient: "from-amber-500 to-orange-600",
      category: "EdTech"
    },
    {
      name: "Raastha Consultancy & Services",
      description: "Providing top-notch consultancy services to empower BioMedical Edtech businesses and individuals to achieve their goals through Video Editing, Animation, Content Creation, AI and SaaS.",
      icon: MonitorSmartphone,
      color: "text-cyan-600",
      bg: "bg-cyan-50",
      gradient: "from-cyan-500 to-blue-600",
      category: "Consultancy"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-slate-100 sticky top-0 z-50 backdrop-blur-lg bg-white/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-medical-blue to-medical-teal flex items-center justify-center">
                <span className="text-white font-bold text-lg font-display">M</span>
              </div>
              <span className="font-display font-bold text-xl text-slate-900">
                MED<span className="text-medical-blue">/</span>ACC
              </span>
            </Link>
            <Link 
              to="/" 
              className="flex items-center gap-2 text-slate-600 hover:text-medical-blue transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-medical-blue/10 rounded-full mb-6">
              <Activity className="w-4 h-4 text-medical-blue" />
              <span className="text-medical-blue font-medium text-sm">Our Portfolio</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Innovative <span className="text-medical-blue">Companies</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover the groundbreaking startups and companies we've partnered with to revolutionize healthcare and technology.
            </p>
          </motion.div>

          {/* Companies Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {companies.map((company, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full relative overflow-hidden"
              >
                {/* Decorative background accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${company.gradient} opacity-5 rounded-bl-[80px] -mr-8 -mt-8 pointer-events-none transition-opacity group-hover:opacity-10`} />

                <div className="mb-6 relative z-10">
                  <div className={`w-14 h-14 rounded-2xl ${company.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <company.icon className={`w-7 h-7 ${company.color}`} />
                  </div>
                  <div className={`inline-block px-3 py-1 rounded-full ${company.bg} ${company.color} text-xs font-semibold mb-3`}>
                    {company.category}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{company.name}</h3>
                </div>
                
                <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                  {company.description}
                </p>

                <div className="mt-auto">
                  <Button variant="outline" className="w-full justify-between group/btn hover:border-medical-blue hover:text-medical-blue">
                    Learn more
                    <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
