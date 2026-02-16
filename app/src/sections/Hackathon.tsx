import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Award, Lightbulb, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hackathon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set target date to next July 26
    const targetDate = new Date();
    targetDate.setMonth(6); // July (0-indexed)
    targetDate.setDate(26);
    if (targetDate < new Date()) {
      targetDate.setFullYear(targetDate.getFullYear() + 1);
    }

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as const,
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
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-6xl mx-auto"
      >
        <div className="bg-gradient-primary rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
            {/* Left Content */}
            <div className="text-white">
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6"
              >
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span className="font-medium text-sm">Event Completed</span>
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
              >
                Asia's Largest Surgical Hackathon
              </motion.h2>

              <motion.div
                variants={itemVariants}
                className="flex items-center gap-2 text-white/80 mb-4"
              >
                <span className="font-semibold">July 26-27, 2025</span>
                <span>•</span>
                <span>Kochi, India</span>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-white/90 text-lg mb-6"
              >
                12 hours of breakthrough innovation in surgical technology brought together 
                innovators, surgeons, and technologists
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4 mb-8"
              >
                <div className="flex items-center gap-2 text-white/80">
                  <Users className="w-5 h-5" />
                  <span className="text-sm">50+ Participants</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Award className="w-5 h-5" />
                  <span className="text-sm">Expert Mentorship</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Lightbulb className="w-5 h-5" />
                  <span className="text-sm">Groundbreaking Solutions</span>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Button
                  variant="secondary"
                  className="bg-white text-medical-blue hover:bg-white/90 px-6 py-3 rounded-xl font-semibold group"
                >
                  Read Event Blog
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>

            {/* Right Content - Countdown */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col justify-center"
            >
              <div className="text-white/80 text-sm mb-4 text-center lg:text-left">
                Countdown to next hackathon
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[
                  { value: timeLeft.days, label: 'Days' },
                  { value: timeLeft.hours, label: 'Hours' },
                  { value: timeLeft.minutes, label: 'Minutes' },
                  { value: timeLeft.seconds, label: 'Seconds' },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center"
                  >
                    <div className="text-3xl sm:text-4xl font-bold text-white font-display">
                      {String(item.value).padStart(2, '0')}
                    </div>
                    <div className="text-white/60 text-xs sm:text-sm mt-1">
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Element */}
              <div className="mt-8 flex justify-center lg:justify-start">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-white/20 border-2 border-white/30 flex items-center justify-center"
                    >
                      <Users className="w-5 h-5 text-white/60" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full bg-white/30 border-2 border-white/40 flex items-center justify-center text-white text-xs font-medium">
                    +50
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hackathon;
