import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Lock, Eye, FileText, Server, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
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
      title: "1. Information We Collect",
      icon: Eye,
      content: [
        "We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, request customer support, or otherwise communicate with us.",
        "The types of information we may collect include your name, email address, postal address, phone number, and any other information you choose to provide."
      ]
    },
    {
      title: "2. How We Use Your Information",
      icon: FileText,
      content: [
        "We use the information we collect to provide, maintain, and improve our services, such as to administer your account, process transactions, and send you related information.",
        "We may also use the information to send you technical notices, updates, security alerts, and support and administrative messages."
      ]
    },
    {
      title: "3. Information Sharing",
      icon: Globe,
      content: [
        "We may share information about you as follows or as otherwise described in this Privacy Policy:",
        "With vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.",
        "In response to a request for information if we believe disclosure is in accordance with any applicable law, regulation, or legal process."
      ]
    },
    {
      title: "4. Data Security",
      icon: Lock,
      content: [
        "We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.",
        "However, no internet or email transmission is ever fully secure or error free. Please keep this in mind when disclosing any information to us."
      ]
    },
    {
      title: "5. Your Rights",
      icon: Shield,
      content: [
        "You have the right to access, update, or delete your personal information at any time.",
        "You may also opt out of receiving promotional communications from us by following the instructions in those communications."
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
              <Shield className="w-4 h-4 text-medical-blue" />
              <span className="text-medical-blue font-medium text-sm">Legal & Compliance</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Privacy <span className="text-medical-blue">Policy</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
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
            <h3 className="text-xl font-bold text-slate-900 mb-2">Have questions about our privacy practices?</h3>
            <p className="text-slate-600 mb-6">
              If you have any questions or concerns about this Privacy Policy, please contact us.
            </p>
            <Link to="/contact">
              <button className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-6 py-2.5 rounded-xl font-semibold transition-all shadow-sm">
                Contact Privacy Team
              </button>
            </Link>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
