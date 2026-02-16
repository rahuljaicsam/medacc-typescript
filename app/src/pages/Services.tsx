import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Lightbulb, 
  Rocket, 
  Target, 
  TrendingUp, 
  Globe, 
  ShieldCheck, 
  Briefcase, 
  Users, 
  BarChart, 
  Leaf, 
  Cpu, 
  DollarSign,
  Search,
  Zap,
  Layers,
  Award,
  RefreshCw,
  PieChart,
  Scale,
  Calendar,
  GraduationCap,
  Building
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Services = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const lifecycleServices = [
    {
      title: "Pre-Idea Stage",
      description: "Market Research, Feasibility Studies, Industry Analysis",
      price: "$",
      icon: Search,
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      title: "Idea Generation",
      description: "Ideation Workshops, Concept Development, Brainstorming Sessions",
      price: "$",
      icon: Lightbulb,
      color: "text-yellow-500",
      bg: "bg-yellow-50"
    },
    {
      title: "Pre-Incubation",
      description: "Idea Validation, Business Model Development, Initial Planning and Strategy",
      price: "$",
      icon: Layers,
      color: "text-indigo-500",
      bg: "bg-indigo-50"
    },
    {
      title: "Venture Studio",
      description: "Co-Creation of Ventures, Resource Allocation, Mentorship and Advisory",
      price: "$$",
      icon: Zap,
      color: "text-purple-500",
      bg: "bg-purple-50"
    },
    {
      title: "Incubation",
      description: "Seed Funding, Product Development (Prototyping, MVP), Business Plan and Financial Projections",
      price: "$$",
      icon: Rocket,
      color: "text-emerald-500",
      bg: "bg-emerald-50"
    },
    {
      title: "Acceleration",
      description: "Growth Strategy Development, Advanced Funding Rounds (Series A/B/C), Scaling Operations",
      price: "$$$",
      icon: TrendingUp,
      color: "text-orange-500",
      bg: "bg-orange-50"
    },
    {
      title: "Expansion",
      description: "Market Entry Strategies, International Expansion, Partnership Development",
      price: "$$$",
      icon: Globe,
      color: "text-cyan-500",
      bg: "bg-cyan-50"
    },
    {
      title: "Maturity",
      description: "Optimization of Operations, Enhancing Efficiency, Sustaining Competitive Advantage",
      price: "$$$",
      icon: Award,
      color: "text-teal-500",
      bg: "bg-teal-50"
    },
    {
      title: "Exit Strategy",
      description: "Mergers and Acquisitions (M&A), Initial Public Offering (IPO) Preparation, Strategic Sale Facilitation",
      price: "$$$$",
      icon: Target,
      color: "text-red-500",
      bg: "bg-red-50"
    },
    {
      title: "Post-Exit",
      description: "Integration Support (Post-M&A), Shareholder Value Maximization, Legacy Planning",
      price: "$$$$",
      icon: Briefcase,
      color: "text-slate-500",
      bg: "bg-slate-50"
    }
  ];

  const corporateServices = [
    {
      title: "Crisis Management",
      description: "Turnaround Strategies, Debt Restructuring, Bankruptcy Avoidance",
      price: "$$$$$",
      icon: ShieldCheck,
      color: "text-red-600",
      bg: "bg-red-50"
    },
    {
      title: "Restructuring",
      description: "Organizational Restructuring, Cost Optimization, Strategic Reorientation",
      price: "$$$$$",
      icon: RefreshCw,
      color: "text-orange-600",
      bg: "bg-orange-50"
    },
    {
      title: "Innovation and R&D",
      description: "Innovation Management, Research Funding and Grants, Technology Transfer",
      price: "$$$$$$",
      icon: Lightbulb,
      color: "text-yellow-600",
      bg: "bg-yellow-50"
    },
    {
      title: "Raising Stock Market Prices",
      description: "Investor Relations, Market Positioning, Financial Reporting and Compliance",
      price: "$$$$$$",
      icon: TrendingUp,
      color: "text-green-600",
      bg: "bg-green-50"
    },
    {
      title: "Sustainability and CSR",
      description: "Corporate Social Responsibility (CSR) Initiatives, Sustainability Strategies, ESG Compliance",
      price: "$$$$$$",
      icon: Leaf,
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      title: "Digital Transformation",
      description: "IT Infrastructure Development, Digital Strategy Implementation, Cybersecurity and Data Protection",
      price: "$$$$$$",
      icon: Cpu,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Human Resources Management",
      description: "Talent Acquisition and Retention, Training and Development, Organizational Development",
      price: "$$$$$$",
      icon: Users,
      color: "text-pink-600",
      bg: "bg-pink-50"
    },
    {
      title: "Marketing and Sales",
      description: "Branding and Positioning, Marketing Strategy, Sales Optimization",
      price: "$$$$$$",
      icon: BarChart,
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      title: "Finance and Accounting",
      description: "Financial Planning and Analysis, Risk Management, Mergers, Acquisitions, and Strategic Alliances",
      price: "$$$$$$",
      icon: PieChart,
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    },
    {
      title: "Legal and Compliance",
      description: "Regulatory Compliance, Intellectual Property Management, Contract Negotiation and Management",
      price: "$$$$$$",
      icon: Scale,
      color: "text-slate-600",
      bg: "bg-slate-50"
    }
  ];

  const experts = [
    {
      name: "Dr. Rahul Jaic Sam",
      role: "Medical & Tech Expert",
      qualifications: "MBBS(CMC Vellore), DiplIBLM, PGDiplAI-ML, MA(Philosophy)",
      experience: ["Ex-CMC Vellore", "Ex-Aditya Birla"],
      expertise: [
        "Basic Biomedical Knowledge", "Latest Biomedical Research", "Advanced BioStatistics",
        "AI and Robotics in Healthcare", "Digital Twin technology", "Web and Mobile App Development",
        "Biotech Cloud Computing", "Biotech Servers and Data Centers", "Biotech UI design",
        "Biotech Prototype Design", "Coding for biomedical softwares", "Embedded Biomedical Hardwares",
        "Philosophy of Technology", "Philosophy of Science and Medicine", "Bioethics",
        "Non-Pharmacological Lifestyle Interventions"
      ],
      color: "from-blue-500 to-indigo-600"
    },
    {
      name: "Dr. Raju M R",
      role: "Clinical & Business Strategy Expert",
      qualifications: "MBBS(Calicut Medical College), MBA(TISS)",
      experience: ["Ex-Pfizer", "Ex-Wockhardt", "Ex-Astra Zeneca", "Dr.Reddy's"],
      expertise: [
        "Clinical Strategy", "Product Development", "Business Growth",
        "Venture Capital and Investment", "Marketing", "B2B Sales",
        "Digital Transformation", "Operational Optimization", "Strategic Planning",
        "Regulatory Compliance", "AI in Health Tech", "Symptom Analysis",
        "Virtual Triage Solutions", "Air Ambulance Services", "Femtech Innovation",
        "Personalized Care", "Startup Funding and Exits", "Leadership and Mentorship"
      ],
      color: "from-emerald-500 to-teal-600"
    },
    {
      name: "Mr. Pratheek Remesh Menon",
      role: "Product & Innovation Expert",
      qualifications: "Btech(VIT), Mtech(Duke), MBA(IIM Ahmedabad)",
      experience: ["Ex-Microsoft", "Ex-Scigenom"],
      expertise: [
        "Product Strategy", "Product Development", "User Experience (UX)",
        "Cross-Functional Leadership", "Chronic Care Management", "Program Management",
        "Key Metrics Analysis", "A/B Testing", "BCI Technology",
        "Neuromarketing", "Neurofeedback Product Development", "AI-Enabled Decision Support",
        "Patient Research Portals", "Strategic Vision", "Biomedical Engineering",
        "Neuro-Engineering", "Innovation in Digital Health"
      ],
      color: "from-purple-500 to-violet-600"
    }
  ];

  const renderServiceCard = (service: any, index: number) => (
    <motion.div
      key={index}
      variants={itemVariants}
      className="bg-white rounded-3xl p-8 border border-slate-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
    >
      <div className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <service.icon className={`w-7 h-7 ${service.color}`} />
      </div>
      
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
        <span className="text-sm font-medium px-3 py-1 rounded-full bg-slate-100 text-slate-600">
          {service.price}
        </span>
      </div>
      
      <p className="text-slate-600 leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  );

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
              <Zap className="w-4 h-4 text-medical-blue" />
              <span className="text-medical-blue font-medium text-sm">Our Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Comprehensive <span className="text-medical-blue">Solutions</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From ideation to exit, and everything in between. We provide end-to-end support for healthcare startups and established enterprises.
            </p>
          </motion.div>

          {/* Startup Lifecycle Section */}
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="h-10 w-2 bg-gradient-to-b from-medical-blue to-medical-teal rounded-full" />
              <h2 className="text-3xl font-bold text-slate-900">Startup Lifecycle</h2>
            </motion.div>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {lifecycleServices.map(renderServiceCard)}
            </motion.div>
          </div>

          {/* Corporate Services Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="h-10 w-2 bg-gradient-to-b from-amber-400 to-orange-500 rounded-full" />
              <h2 className="text-3xl font-bold text-slate-900">Corporate & Strategic Services</h2>
            </motion.div>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {corporateServices.map(renderServiceCard)}
            </motion.div>
          </div>

          {/* Expert Consultations Section */}
          <div className="mt-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="h-10 w-2 bg-gradient-to-b from-purple-500 to-indigo-600 rounded-full" />
              <h2 className="text-3xl font-bold text-slate-900">Expert Consultations</h2>
            </motion.div>

            <div className="space-y-12">
              {experts.map((expert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden relative"
                >
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${expert.color} opacity-5 rounded-bl-[100px] pointer-events-none`} />
                  
                  <div className="grid lg:grid-cols-[1.5fr,2fr] gap-8 lg:gap-12 relative z-10">
                    {/* Profile Info */}
                    <div>
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium mb-4`}>
                        <Award className="w-4 h-4" />
                        {expert.role}
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">{expert.name}</h3>
                      
                      <div className="space-y-4 mt-6">
                        <div className="flex items-start gap-3">
                          <GraduationCap className="w-5 h-5 text-slate-400 mt-1 flex-shrink-0" />
                          <p className="text-slate-600 font-medium">{expert.qualifications}</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <Building className="w-5 h-5 text-slate-400 mt-1 flex-shrink-0" />
                          <div className="flex flex-wrap gap-2">
                            {expert.experience.map((exp, i) => (
                              <span key={i} className="inline-block px-2 py-1 bg-slate-50 border border-slate-200 rounded text-xs font-semibold text-slate-600">
                                {exp}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-8">
                        <Button className={`w-full sm:w-auto bg-gradient-to-r ${expert.color} hover:opacity-90 text-white shadow-lg shadow-blue-500/20`}>
                          <Calendar className="w-4 h-4 mr-2" />
                          Schedule a Meeting
                        </Button>
                      </div>
                    </div>

                    {/* Expertise Tags */}
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-amber-500" />
                        Areas of Expertise
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {expert.expertise.map((item, i) => (
                          <span 
                            key={i} 
                            className="inline-block px-3 py-1.5 bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200 rounded-lg text-sm text-slate-600 hover:text-slate-900 transition-colors cursor-default"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;
