import { motion } from 'framer-motion';
import { Building2, MapPin, Users, Plane, Wallet, Palette, Box, Code, BarChart3, Shield, Search, Handshake, Building, Video, FlaskConical, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/sections/Navigation';
import Footer from '@/sections/Footer';
import { Button } from '@/components/ui/button';

const tools = [
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

const Toolkit = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      <main className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <Link to="/">
              <Button variant="ghost" className="mb-6 -ml-4 hover:bg-slate-100">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-medical-blue/10 rounded-full mb-6">
                <Building2 className="w-4 h-4 text-medical-blue" />
                <span className="text-medical-blue font-medium text-sm">Med/Acc Ecosystem</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                Founder's <span className="text-medical-blue">Toolkit</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                A comprehensive suite of tools, templates, and services designed to accelerate your healthcare venture journey.
              </p>
            </motion.div>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <tool.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-medical-blue transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-slate-500 text-sm">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Toolkit;
