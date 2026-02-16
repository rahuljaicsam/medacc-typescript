import { motion } from 'framer-motion';
import { ArrowLeft, Users, Sparkles, Target, Zap, Globe, Briefcase, GraduationCap, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CoFounderMatching = () => {
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

  const features = [
    {
      title: "Good for all stages",
      description: "Whether you're getting to know people for the future, or ready to go now.",
      icon: Target,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Come with or without an idea",
      description: "Don't have the right idea yet? This is a great place to find it.",
      icon: Sparkles,
      color: "text-amber-600",
      bg: "bg-amber-50"
    },
    {
      title: "Explore on your own terms",
      description: "No commitment, no equity, no strings attached.",
      icon: Zap,
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    }
  ];

  const profiles = [
    {
      name: "Veena",
      school: "Haas",
      company: "Visa",
      description: "I built and managed the Medical Visa platform that empowers Asian medical graduates.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      name: "Bheem",
      school: "Harvard",
      company: "Microsoft",
      description: "Scored a perfect 720 (99.99 percentile) on my NEET and graduated at AIIMS Medical College.",
      color: "from-emerald-500 to-teal-600"
    },
    {
      name: "Saba",
      school: "Berkeley",
      company: "Doordash",
      description: "Youngest engineer to be promoted to E7 (Senior Staff) at Flipkart.",
      color: "from-violet-500 to-purple-600"
    },
    {
      name: "Curtis",
      school: "MIT",
      company: "Google",
      description: "Built MedicalAppu, an instant B2B medical construction website builder.",
      color: "from-orange-500 to-red-600"
    },
    {
      name: "Shreyas",
      school: "UIUC",
      company: "SpaceX",
      description: "I managed the full teardown and rebuild of a MRI in a single day.",
      color: "from-cyan-500 to-blue-600"
    },
    {
      name: "Daryl",
      school: "Cornell",
      company: "Tesla",
      description: "Worked on autonomous medical instruments, equipments and devices.",
      color: "from-pink-500 to-rose-600"
    }
  ];

  const stats = [
    { city: "Cochin", count: 32 },
    { city: "Bangalore", count: 30 },
    { city: "New Delhi", count: 29 },
    { city: "Singapore", count: 19 },
    { city: "Tokyo", count: 19 },
    { city: "Hongkong", count: 19 },
    { city: "Taipei", count: 19 },
    { city: "Shenzhen", count: 19 },
    { city: "Beijing", count: 19 },
    { city: "Shanghai", count: 19 },
    { city: "Seoul", count: 19 },
    { city: "Bangkok", count: 19 },
    { city: "Osaka", count: 19 },
    { city: "Hanoi", count: 19 }
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
              <Users className="w-4 h-4 text-medical-blue" />
              <span className="text-medical-blue font-medium text-sm">Find Your Partner</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Med/Acc <span className="text-medical-blue">Co-Founder Matching</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
              Where savvy founders go to meet potential co-founders. We know even the best founders don't always have people in their network who are ready to start a company.
            </p>
            <Button size="lg" className="bg-medical-blue hover:bg-medical-blue-dark text-white rounded-xl px-8 py-6 text-lg shadow-lg shadow-medical-blue/20">
              Create Your Profile
            </Button>
          </motion.div>

          {/* Features Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-24"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-card text-center hover:-translate-y-1 transition-transform duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl ${feature.bg} flex items-center justify-center mx-auto mb-6`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Success Stories / Profiles */}
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-4">World-class founders are here</h2>
              <p className="text-slate-600">Actual founders who met on this site and got funded by Med/Acc.</p>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {profiles.map((profile, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group"
                >
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${profile.color} opacity-10 rounded-bl-[60px] -mr-4 -mt-4 transition-opacity group-hover:opacity-20`} />
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${profile.color} flex items-center justify-center text-white font-bold text-xl`}>
                      {profile.name[0]}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{profile.name}</h3>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <span className="flex items-center gap-1"><GraduationCap className="w-3 h-3" /> {profile.school}</span>
                        <span className="flex items-center gap-1"><Building className="w-3 h-3" /> {profile.company}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 text-sm leading-relaxed">
                    "{profile.description}"
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Global Reach Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-[2.5rem] p-8 lg:p-16 text-white overflow-hidden relative"
          >
            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-medical-blue/20 rounded-full blur-3xl -mr-20 -mt-20" />
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-medical-teal/20 rounded-full blur-3xl -ml-20 -mb-20" />
            </div>

            <div className="relative z-10 text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">The largest network of its kind</h2>
              <p className="text-slate-400 text-lg">Over 500 matches made across top innovation hubs worldwide</p>
            </div>

            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center hover:bg-white/10 transition-colors">
                  <div className="text-2xl font-bold text-medical-cyan mb-1">{stat.count}</div>
                  <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">{stat.city}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default CoFounderMatching;
