import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, FileText, Database, Video, Newspaper, GraduationCap, Microscope, Stethoscope, HeartPulse, Building, Pill, Brain, Download, Play, Clock, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Library = () => {
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

  const categories = [
    {
      title: "Research Papers",
      description: "Access our collection of peer-reviewed publications and clinical study results.",
      icon: FileText,
      count: "150+ Papers",
      color: "text-blue-600",
      bg: "bg-blue-50",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "Clinical Guidelines",
      description: "Standard operating procedures and best practices for various medical conditions.",
      icon: Stethoscope,
      count: "45+ Guidelines",
      color: "text-teal-600",
      bg: "bg-teal-50",
      gradient: "from-teal-500 to-emerald-600"
    },
    {
      title: "Case Studies",
      description: "Real-world examples of successful treatments and innovative medical interventions.",
      icon: Microscope,
      count: "80+ Cases",
      color: "text-violet-600",
      bg: "bg-violet-50",
      gradient: "from-violet-500 to-purple-600"
    },
    {
      title: "Patient Education",
      description: "Easy-to-understand materials for patients about conditions, treatments, and wellness.",
      icon: HeartPulse,
      count: "200+ Articles",
      color: "text-pink-600",
      bg: "bg-pink-50",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      title: "Industry Reports",
      description: "Analysis of healthcare trends, market data, and future projections.",
      icon: Building,
      count: "25+ Reports",
      color: "text-amber-600",
      bg: "bg-amber-50",
      gradient: "from-amber-500 to-orange-600"
    },
    {
      title: "Drug Database",
      description: "Comprehensive information on medications, interactions, and side effects.",
      icon: Pill,
      count: "5000+ Entries",
      color: "text-cyan-600",
      bg: "bg-cyan-50",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      title: "Video Lectures",
      description: "Recorded sessions from medical conferences and educational webinars.",
      icon: Video,
      count: "100+ Hours",
      color: "text-red-600",
      bg: "bg-red-50",
      gradient: "from-red-500 to-orange-600"
    },
    {
      title: "Neuroscience",
      description: "Specialized resources focusing on brain health, neurology, and cognitive science.",
      icon: Brain,
      count: "60+ Resources",
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      title: "Medical News",
      description: "Latest updates from the medical world, FDA approvals, and breakthrough discoveries.",
      icon: Newspaper,
      count: "Daily Updates",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      gradient: "from-emerald-500 to-teal-600"
    }
  ];

  const videoCategories = [
    {
      id: "startup-advice",
      label: "Startup Advice",
      videos: [
        { title: "5 Mistakes Biomedical Device Startups Make", views: "357K", time: "Over 1 year ago" },
        { title: "Innovation and Startups in Ear Nose Throat", views: "731", time: "9 months ago" },
        { title: "Surgical Robotics Startups Mentorship and funding obstacle", views: "41K", time: "10 days ago" },
        { title: "What VC's look for in a Biomedical Startup?", views: "123K", time: "Over 1 year ago" },
        { title: "How to start a biomedical Startup in an hour?", views: "123K", time: "Over 1 year ago" },
        { title: "How to manage the Science of a Biotech Company?", views: "123K", time: "Over 1 year ago" },
        { title: "Medical Device Pathway in India", views: "123K", time: "Over 1 year ago" }
      ]
    },
    {
      id: "bio-school",
      label: "Bio-Tech School",
      videos: [
        { title: "How to start a biotech startup as a first time founder?", views: "40K", time: "10 days ago" },
        { title: "How IndieBio turns scientists into biotech founders: Q&A", views: "357K", time: "Over 1 year ago" },
        { title: "How to pitch to biotech venture capitalists", views: "731", time: "9 months ago" },
        { title: "How to license technologies from university as a biotech startup?", views: "731", time: "9 months ago" },
        { title: "IP Strategy for biotech startups", views: "731", time: "9 months ago" },
        { title: "Leaving your job to start a biotech company: Interview", views: "731", time: "9 months ago" }
      ]
    },
    {
      id: "investing",
      label: "Bio-Tech Investing",
      videos: [
        { title: "Biotech investing basics part 1: value in biotech", views: "40K", time: "10 days ago" },
        { title: "Biotech investing basics part 2: measuring value in biotech", views: "357K", time: "Over 1 year ago" },
        { title: "Biotech investing basics part 3: intro to valuation", views: "731", time: "9 months ago" },
        { title: "Biotech investing basics part 4: DCF analysis", views: "731", time: "9 months ago" },
        { title: "Intro to clinical data: biotech investing basics", views: "731", time: "9 months ago" },
        { title: "Analyzing the clinical data for Aduhelm", views: "731", time: "9 months ago" },
        { title: "Critically analyzing clinical data", views: "731", time: "9 months ago" },
        { title: "Intro to FDA Advisory Committee meetings", views: "731", time: "9 months ago" },
        { title: "Analyzing biotech clinical trial risk", views: "731", time: "9 months ago" },
        { title: "How dilution can crush biotech returns", views: "731", time: "9 months ago" }
      ]
    },
    {
      id: "lab-tours",
      label: "Lab Tours",
      videos: [
        { title: "Wet Lab Tour", views: "731", time: "9 months ago" },
        { title: "How are surgical robots made? Go behind the scenes.", views: "731", time: "9 months ago" },
        { title: "Virtual Facility Tour at Glatt Pharmaceutical Services", views: "731", time: "9 months ago" },
        { title: "Department of Pharmaceutical Technology Laboratory Tour", views: "731", time: "9 months ago" },
        { title: "Medical Device Assembly", views: "731", time: "9 months ago" },
        { title: "Tour a fully automated clinical microbiology lab", views: "731", time: "9 months ago" }
      ]
    },
    {
      id: "technical",
      label: "Technical Skills",
      videos: [
        { title: "Top 5 programming Languages for Biotech", views: "731", time: "9 months ago" },
        { title: "Medical Device HQ - All videos", views: "731", time: "9 months ago" },
        { title: "Python for bioinformatics-FreeCodeCamp", views: "731", time: "9 months ago" },
        { title: "Image Processing with Python Playlist- DigitalSreeni", views: "731", time: "9 months ago" },
        { title: "R programming tutorial basics in 2 hours-FreeCodeCamp", views: "731", time: "9 months ago" },
        { title: "R programming Playlist", views: "731", time: "9 months ago" },
        { title: "Perl Scripting Tutorial Videos-Edureka", views: "731", time: "9 months ago" },
        { title: "Standing Up For Startups - YC Goes to D.C.", views: "731", time: "9 months ago" },
        { title: "C# tutorials", views: "731", time: "9 months ago" },
        { title: "Matlab tutorial - FreeCodeCamp", views: "731", time: "9 months ago" },
        { title: "Bioconductor for Genomic Data Science Playlist", views: "731", time: "9 months ago" },
        { title: "ROS - Bioconductor for Genomic Data Science Playlist", views: "731", time: "9 months ago" }
      ]
    },
    {
      id: "diy-projects",
      label: "DIY Projects",
      videos: [
        { title: "BioMedical Projects -How To Electronics", views: "731", time: "9 months ago" },
        { title: "Building a DIY Davinci Surgical Robot", views: "731", time: "9 months ago" },
        { title: "Building a Ultrasound Device with arduino", views: "731", time: "9 months ago" },
        { title: "Building a DIY CT scanner with Xray tubes", views: "731", time: "9 months ago" },
        { title: "Building a DIY Photgrammetometry CT scanner", views: "731", time: "9 months ago" },
        { title: "Building a Hospital Management Softwares using C#", views: "731", time: "9 months ago" }
      ]
    },
    {
      id: "founder-faq",
      label: "Founder FAQ",
      videos: [
        { title: "How to become a good Biotech Entrepreneur?", views: "109K", time: "10 days ago" },
        { title: "50 Founders Share How They Got Their First Customers", views: "357K", time: "Over 1 year ago" },
        { title: "How To Start a Biotech Company As A 22 year Old?", views: "731", time: "9 months ago" }
      ]
    }
  ];

  const renderVideoCard = (video: any, index: number) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="group cursor-pointer"
    >
      <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 bg-slate-100 border border-slate-200 shadow-sm group-hover:shadow-md transition-all">
        {/* Placeholder Thumbnail Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 group-hover:scale-105 transition-transform duration-500" />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
          <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <Play className="w-5 h-5 text-medical-blue ml-1" fill="currentColor" />
          </div>
        </div>

        {/* Duration Badge Placeholder */}
        <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 rounded-md text-white text-xs font-medium">
          12:34
        </div>
      </div>

      <h3 className="font-bold text-slate-900 leading-tight mb-2 group-hover:text-medical-blue transition-colors line-clamp-2">
        {video.title}
      </h3>
      
      <div className="flex items-center gap-3 text-xs text-slate-500">
        <div className="flex items-center gap-1">
          <Eye className="w-3 h-3" />
          {video.views}
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {video.time}
        </div>
      </div>
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
              <BookOpen className="w-4 h-4 text-medical-blue" />
              <span className="text-medical-blue font-medium text-sm">Knowledge Hub</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Startup <span className="text-medical-blue">Library</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A comprehensive collection of medical resources, research papers, and educational materials to support your healthcare journey.
            </p>
          </motion.div>

          {/* Search Bar Placeholder */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="max-w-2xl mx-auto mb-16 relative"
          >
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Database className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-medical-blue/20 focus:border-medical-blue transition-all shadow-sm"
                placeholder="Search resources, guidelines, or topics..."
              />
              <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
                <Button size="sm" className="bg-medical-blue hover:bg-medical-blue-dark text-white rounded-xl px-4">
                  Search
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Categories Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {categories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative overflow-hidden"
              >
                {/* Decorative background accent */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${category.gradient} opacity-5 rounded-bl-[60px] -mr-4 -mt-4 pointer-events-none transition-opacity group-hover:opacity-10`} />

                <div className="flex items-start justify-between mb-6 relative z-10">
                  <div className={`w-12 h-12 rounded-2xl ${category.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-lg ${category.bg} ${category.color}`}>
                    {category.count}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3">{category.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {category.description}
                </p>

                <div className="flex items-center text-sm font-medium text-medical-blue group-hover:translate-x-1 transition-transform">
                  Browse Resources
                  <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Video Library Section */}
          <div className="mt-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="h-10 w-2 bg-gradient-to-b from-red-500 to-orange-600 rounded-full" />
              <h2 className="text-3xl font-bold text-slate-900">Video Library</h2>
            </motion.div>

            <Tabs defaultValue="startup-advice" className="w-full">
              <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent p-0 mb-8 justify-start">
                {videoCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="data-[state=active]:bg-medical-blue data-[state=active]:text-white bg-white border border-slate-200 text-slate-600 px-6 py-3 rounded-xl shadow-sm hover:bg-slate-50 transition-all"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {videoCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-0">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {category.videos.map((video, index) => renderVideoCard(video, index))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Featured Resource Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-medical-blue/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-medical-teal/20 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-6">
                  <GraduationCap className="w-4 h-4" />
                  Featured Collection
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                  Startup Founder's <br />
                  <span className="text-medical-cyan">Essential Toolkit</span>
                </h2>
                <p className="text-slate-300 text-lg mb-8 max-w-lg">
                  A curated selection of documents, templates, and guides specifically designed for early-stage healthcare startups. Includes pitch decks, regulatory checklists, and funding guides.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-medical-blue hover:bg-medical-blue-dark text-white border-0">
                    Access Toolkit
                  </Button>
                  <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 hover:text-white">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF Guide
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-6 flex flex-col justify-center items-center text-center">
                  <FileText className="w-16 h-16 text-medical-cyan mb-4 opacity-80" />
                  <h3 className="text-xl font-bold mb-2">Startup Founder's Guide</h3>
                  <p className="text-slate-400 text-sm mb-6">Version 2.4 • Updated Jan 2025</p>
                  <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-gradient-to-r from-medical-blue to-medical-cyan" />
                  </div>
                  <p className="text-xs text-slate-500 mt-2 text-left w-full">75% Complete</p>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-xl animate-float-delayed">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <Checkmark className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Status</p>
                      <p className="text-sm font-bold text-slate-900">Verified</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

// Helper icon component
const Checkmark = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default Library;
