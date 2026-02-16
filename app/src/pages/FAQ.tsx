import { motion } from 'framer-motion';
import { ArrowLeft, HelpCircle, ChevronDown, MessageCircle, BookOpen, Rocket, Users, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const categories = [
    {
      id: "general",
      title: "General Information",
      icon: HelpCircle,
      questions: [
        {
          q: "What is MED/ACC?",
          a: "MED/ACC is a specialized biomedical startup accelerator that provides strategic support for health and biotech ventures. We help fast-track innovative health solutions from idea to impact through mentorship, funding, and resources."
        },
        {
          q: "Where are you located?",
          a: "Our main headquarters is in the UAE, with an India office in Cochin (partnered with Maya MD Technologies) and active networks in major innovation hubs like Singapore, Tokyo, and Bangalore."
        },
        {
          q: "Who can apply to MED/ACC?",
          a: "We welcome applications from biomedical startups at all stages—from pre-idea and early-stage ventures to growth-stage companies looking to scale. We support founders from diverse backgrounds, including medical professionals, engineers, and researchers."
        }
      ]
    },
    {
      id: "programs",
      title: "Programs & Services",
      icon: Rocket,
      questions: [
        {
          q: "What stages of startups do you support?",
          a: "We support the entire startup lifecycle: Pre-Idea (Market Research), Idea Generation, Incubation (MVP & Seed Funding), Acceleration (Growth Strategy), Expansion, and Exit Strategy (M&A, IPO)."
        },
        {
          q: "Do you offer corporate services?",
          a: "Yes, we provide specialized corporate services including Crisis Management, Restructuring, Innovation & R&D Management, Digital Transformation, and Sustainability/CSR initiatives."
        },
        {
          q: "What is the Co-Founder Matching program?",
          a: "Our Co-Founder Matching platform connects founders with potential partners. It's free, requires no equity, and is suitable for those with or without a concrete idea. It helps you find complementary skills to build your venture."
        }
      ]
    },
    {
      id: "resources",
      title: "Resources & Library",
      icon: BookOpen,
      questions: [
        {
          q: "What resources are available in the Library?",
          a: "Our Library offers a vast collection of resources including research papers, clinical guidelines, patient education materials, industry reports, and a comprehensive video library covering startup advice, technical skills, and lab tours."
        },
        {
          q: "Do you provide technical training?",
          a: "Yes, our library includes tutorials on essential technical skills for biotech founders, such as Python for bioinformatics, R programming for biostatistics, and medical device development."
        }
      ]
    },
    {
      id: "consultation",
      title: "Expert Consultation",
      icon: Users,
      questions: [
        {
          q: "Can I schedule a consultation with experts?",
          a: "Absolutely. You can schedule meetings with our expert co-founders and advisors, such as Dr. Rahul Jaic Sam (Medical & Tech), Dr. Raju M R (Clinical Strategy), and Mr. Pratheek Remesh Menon (Product Innovation), to get tailored advice for your startup."
        },
        {
          q: "What areas of expertise do your consultants cover?",
          a: "Our experts cover a wide range of fields including AI & Robotics in Healthcare, Clinical Strategy, Regulatory Compliance, Product Development, Venture Capital, and Bioethics."
        }
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
              <MessageCircle className="w-4 h-4 text-medical-blue" />
              <span className="text-medical-blue font-medium text-sm">Support Center</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Frequently Asked <span className="text-medical-blue">Questions</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Find answers to common questions about our programs, services, and how we help biomedical startups succeed.
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {categories.map((category, index) => (
              <motion.div 
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-card"
              >
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-medical-blue/5 flex items-center justify-center text-medical-blue">
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">{category.title}</h2>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, qIndex) => (
                    <AccordionItem key={qIndex} value={`${category.id}-${qIndex}`} className="border-b-slate-100 last:border-0">
                      <AccordionTrigger className="text-left hover:text-medical-blue hover:no-underline py-4 text-lg font-medium text-slate-800 transition-colors">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-600 leading-relaxed text-base pb-6">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </motion.div>

          {/* Still have questions CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-medical-blue/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">Still have questions?</h2>
              <p className="text-slate-300 mb-8 max-w-xl mx-auto">
                Can't find the answer you're looking for? Our team is here to help you with any inquiries about our programs and services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <button className="bg-medical-blue hover:bg-medical-blue-dark text-white px-8 py-3 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg shadow-medical-blue/25">
                    Contact Support
                  </button>
                </Link>
                <Link to="/services">
                  <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-xl font-semibold transition-all">
                    Explore Services
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default FAQ;
