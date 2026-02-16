import { motion } from 'framer-motion';
import { CheckCircle, Trophy, BookOpen, Laptop, Code, Rocket, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CourseAd = () => {
  const features = [
    { icon: Laptop, text: "100% Remote & Self-Paced" },
    { icon: Trophy, text: "Hackathon Included" },
    { icon: Code, text: "Real-world Projects" },
    { icon: BookOpen, text: "eBooks & Resources Included" },
    { icon: CheckCircle, text: "No Prior Qualification Needed" },
    { icon: Rocket, text: "Lifetime Access" },
  ];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-slate-900">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-medical-blue/20 to-medical-teal/20 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6 border border-white/20">
              <span className="w-2 h-2 bg-medical-cyan rounded-full animate-pulse" />
              <span className="text-medical-cyan font-medium text-sm">New Course Launch</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Master BioMedical <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-cyan to-medical-teal">
                Tech Entrepreneurship
              </span>
            </h2>
            
            <p className="text-lg text-slate-300 mb-8 max-w-xl">
              From idea to IPO. Learn how to build, launch, and scale a biomedical startup with our comprehensive, project-based curriculum. No medical or coding background required.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-medical-cyan">
                    <feature.icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/917738712804?text=I%20am%20interested%20to%20join%20the%20Med%2FAcc%20course" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-medical-blue hover:bg-medical-blue-dark text-white text-lg px-8 py-6 rounded-xl shadow-lg shadow-medical-blue/25 group w-full sm:w-auto">
                  Enroll Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <Link to="/syllabus">
                <Button variant="outline" size="lg" className="border-white/20 text-black hover:bg-white/10 hover:text-white px-8 py-6 rounded-xl w-full sm:w-auto">
                  View Syllabus
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Pricing Card Side */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-medical-blue to-medical-teal rounded-3xl blur-2xl opacity-30 transform rotate-6" />
            
            <div className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-2xl">
              <div className="absolute top-0 right-0 bg-medical-cyan text-slate-900 text-xs font-bold px-4 py-2 rounded-bl-2xl rounded-tr-2xl">
                LIMITED TIME OFFER
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-2">Complete Program</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-bold text-medical-blue">$1,400</span>
                <span className="text-slate-500 text-lg">USD</span>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Certification Included</h4>
                    <p className="text-xs text-slate-500 mt-1">Receive a verified certificate upon completion to showcase your skills.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Launch Support</h4>
                    <p className="text-xs text-slate-500 mt-1">Get access to our mentor network and potential investor introductions.</p>
                  </div>
                </div>
              </div>

              <a 
                href="https://wa.me/917738712804?text=I%20am%20interested%20to%20join%20the%20Med%2FAcc%20course" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white py-6 rounded-xl font-bold text-lg shadow-xl">
                  Get Started Today
                </Button>
              </a>
              
              <p className="text-center text-xs text-slate-400 mt-4">
                3-day money-back guarantee • Secure payment
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CourseAd;
