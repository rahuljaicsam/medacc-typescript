import { motion } from 'framer-motion';
import { ArrowLeft, Scale, FileCheck, AlertCircle, ShieldCheck, Gavel, Ban } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfUse = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const sections = [
    {
      title: "1. Acceptance of Terms",
      icon: FileCheck,
      content: [
        "By accessing or using the MED/ACC website and services, you agree to be bound by these Terms of Use and all applicable laws and regulations.",
        "If you do not agree with any of these terms, you are prohibited from using or accessing this site."
      ]
    },
    {
      title: "2. Use License",
      icon: Scale,
      content: [
        "Permission is granted to temporarily download one copy of the materials (information or software) on MED/ACC's website for personal, non-commercial transitory viewing only.",
        "This is the grant of a license, not a transfer of title, and under this license you may not modify or copy the materials, use the materials for any commercial purpose, or attempt to decompile or reverse engineer any software contained on the website."
      ]
    },
    {
      title: "3. Disclaimer",
      icon: AlertCircle,
      content: [
        "The materials on MED/ACC's website are provided on an 'as is' basis. MED/ACC makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
        "Further, MED/ACC does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site."
      ]
    },
    {
      title: "4. Limitations",
      icon: Ban,
      content: [
        "In no event shall MED/ACC or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on MED/ACC's website, even if MED/ACC or a MED/ACC authorized representative has been notified orally or in writing of the possibility of such damage."
      ]
    },
    {
      title: "5. Governing Law",
      icon: Gavel,
      content: [
        "These terms and conditions are governed by and construed in accordance with the laws of the United Arab Emirates and you irrevocably submit to the exclusive jurisdiction of the courts in that location."
      ]
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-medical-blue/10 rounded-full mb-6">
              <ShieldCheck className="w-4 h-4 text-medical-blue" />
              <span className="text-medical-blue font-medium text-sm">Legal & Compliance</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Terms of <span className="text-medical-blue">Use</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Please read these terms and conditions carefully before using our service.
            </p>
            <p className="text-sm text-slate-500 mt-4">
              Last updated: February 14, 2026
            </p>
          </motion.div>

          {/* Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {sections.map((section, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-medical-blue/5 flex items-center justify-center text-medical-blue flex-shrink-0 mt-1">
                    <section.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-4">{section.title}</h2>
                    <div className="space-y-4 text-slate-600 leading-relaxed">
                      {section.content.map((paragraph, pIndex) => (
                        <p key={pIndex}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center bg-slate-100 rounded-3xl p-8 border border-slate-200"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-2">Questions about our terms?</h3>
            <p className="text-slate-600 mb-6">
              If you have any questions regarding these Terms of Use, please contact us.
            </p>
            <Link to="/contact">
              <button className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-6 py-2.5 rounded-xl font-semibold transition-all shadow-sm">
                Contact Legal Team
              </button>
            </Link>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default TermsOfUse;
