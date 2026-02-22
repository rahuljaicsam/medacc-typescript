import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/sections/Navigation';
import Footer from '@/sections/Footer';
import { Button } from '@/components/ui/button';

interface SubsidiaryPageProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  color: string;
  bg: string;
  textColor: string;
  children?: React.ReactNode;
}

const SubsidiaryLayout: React.FC<SubsidiaryPageProps> = ({ title, subtitle, description, icon: Icon, color, bg, textColor, children }) => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      <main className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <div className={`inline-flex items-center gap-2 px-4 py-2 ${bg} rounded-full mb-6`}>
                <Icon className={`w-4 h-4 ${textColor}`} />
                <span className={`${textColor} font-medium text-sm`}>{subtitle}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                {title}
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                {description}
              </p>
            </motion.div>
          </div>
          
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm min-h-[400px]">
            {children ? children : (
              <div className="flex items-center justify-center h-full min-h-[200px]">
                <p className="text-slate-400 text-lg">Content for {title} coming soon...</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SubsidiaryLayout;
