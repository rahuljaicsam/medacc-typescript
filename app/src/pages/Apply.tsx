import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Target, Users, Globe, Laptop, Rocket, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Apply = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const benefits = [
    {
      title: "World-Class Curriculum",
      description: "Experience curriculum from Med/Acc and the innovative thinking that has shaped some of the most successful companies in Asia.",
      icon: Globe,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Actionable Insights",
      description: "Gain actionable insights and learn practical business tools to take your startup to the next level of growth.",
      icon: Target,
      color: "text-teal-600",
      bg: "bg-teal-50"
    },
    {
      title: "Mentorship Support",
      description: "Gain fundamental business skills through mentorship support from experienced entrepreneurs and business leaders.",
      icon: Users,
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    },
    {
      title: "Peer Network",
      description: "Develop relationships with like-minded entrepreneurs to share experiences and develop an ongoing peer-to-peer support network.",
      icon: Users,
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      title: "Remote Participation",
      description: "Participate online from the convenience of home or office with a schedule designed for busy entrepreneurs.",
      icon: Laptop,
      color: "text-cyan-600",
      bg: "bg-cyan-50"
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
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-medical-blue/10 rounded-full mb-6">
              <Rocket className="w-4 h-4 text-medical-blue" />
              <span className="text-medical-blue font-medium text-sm">Join the Program</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Apply to <span className="text-medical-blue">Med/Acc</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              The Med/Acc Startup Program delivers essential business training to early-stage entrepreneurs in collaboration with incubators, accelerators, and other organizations.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Left Column: Benefits & Details */}
            <div className="lg:col-span-2 space-y-12">
              {/* Key Benefits */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <div className="w-1 h-8 bg-medical-teal rounded-full" />
                  Key Benefits
                </h2>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
                    >
                      <div className={`w-12 h-12 rounded-xl ${benefit.bg} flex items-center justify-center flex-shrink-0`}>
                        <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Who Should Attend */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-card"
              >
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-medical-blue rounded-full" />
                  Who Should Attend?
                </h2>
                <div className="space-y-6 text-slate-600 leading-relaxed">
                  <p>
                    Med/Acc Startup collaborators nominate entrepreneurs with early-stage companies that are a good fit for our ideal participant profile.
                  </p>
                  <p>
                    Currently, our program directly admits participants and is accepting applications from potential participants at any time. However, if you would like to be just kept informed about future participation opportunities, you should join our cohort.
                  </p>
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 mt-6">
                    <h3 className="font-bold text-slate-900 mb-2">For Organizations</h3>
                    <p className="text-sm">
                      If you're an incubator, accelerator, or any organization like a web agency, marketing agency, or venture studio interested in supporting budding entrepreneurs, learn how to collaborate with us and offer the Med/Acc Startup Program by directly contacting us.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: CTA & Pricing */}
            <div className="lg:col-span-1 space-y-8">
              {/* Application CTA */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden sticky top-24"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-medical-blue/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-medical-teal/20 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none" />

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">Ready to Scale?</h3>
                  <p className="text-slate-300 mb-8 text-sm">
                    Join the next cohort of high-potential biomedical entrepreneurs.
                  </p>
                  
                  <div className="space-y-4">
                    <a 
                      href="https://wa.me/917738712804?text=I%20am%20interested%20to%20join%20the%20Med%2FAcc%20course" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full"
                    >
                      <Button className="w-full bg-medical-blue hover:bg-medical-blue-dark text-white py-6 text-lg shadow-lg shadow-medical-blue/25">
                        Join Med/Acc ($1000)
                      </Button>
                    </a>
                    <Link to="/syllabus" className="block w-full">
                      <Button variant="outline" className="w-full border-white/20 text-black hover:bg-white/10 hover:text-white py-6">
                        View Syllabus
                      </Button>
                    </Link>
                  </div>

                  <div className="mt-8 pt-8 border-t border-white/10">
                    <h4 className="font-bold mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      Pricing
                    </h4>
                    <p className="text-sm text-slate-300 mb-4">
                      Contact us for tailored pricing packages for your startup stage.
                    </p>
                    <a href="tel:+917738712804" className="flex items-center gap-3 text-medical-cyan hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                      <span className="font-bold">+91 77387 12804</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Apply;
