import { motion } from 'framer-motion';
import { HelpCircle, Lightbulb, Rocket, Microscope, Globe, Calendar } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What kind of businesses do you support?',
    answer: 'We work with solofounders, startups, SMEs, and enterprises in the healthcare, biotech, digital health, and medical device industries. Whether you\'re pre-seed or scaling, we\'ve got you.',
    icon: Lightbulb,
  },
  {
    question: 'Do you help with funding?',
    answer: 'Yes! We assist with pitch deck creation, investor matchmaking, and grant applications for healthtech and biotech ventures. Our network includes VCs, angel investors, and government funding bodies.',
    icon: Rocket,
  },
  {
    question: 'Do I need a scientific background to apply?',
    answer: 'Not at all. We love working with tech founders, business operators, and creatives who want to solve healthcare problems. Our team includes experts who can handle the science and regulation.',
    icon: Microscope,
  },
  {
    question: 'Do you work with international founders?',
    answer: 'Absolutely. We\'re borderless. Whether you\'re in Silicon Valley, Bangalore, or Nairobi, we\'ll find a way to support you. We have partners and mentors across 12 countries.',
    icon: Globe,
  },
  {
    question: 'How do I get started?',
    answer: 'Click the "Get Pricing" button or book a free consultation call or message. We\'ll understand your vision and guide you through the next steps. The process typically takes 2-3 weeks from application to onboarding.',
    icon: Calendar,
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-medical-blue/10 rounded-full mb-6">
              <HelpCircle className="w-4 h-4 text-medical-blue" />
              <span className="text-medical-blue font-medium text-sm">FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Got questions? We've got answers. If you don't find what you're looking for, 
              feel free to reach out to our team.
            </p>
            
            {/* Contact CTA */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-card">
              <h3 className="font-bold text-slate-900 mb-2">Still have questions?</h3>
              <p className="text-slate-600 text-sm mb-4">
                Can't find the answer you're looking for? Please chat with our friendly team.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-medical-blue font-medium hover:underline"
              >
                Contact us
                <span className="text-lg">→</span>
              </a>
            </div>
          </motion.div>

          {/* Right Content - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-2xl border border-slate-100 shadow-card overflow-hidden data-[state=open]:shadow-card-hover transition-shadow"
                >
                  <AccordionTrigger className="px-6 py-5 hover:no-underline group">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-medical-blue to-medical-teal flex items-center justify-center flex-shrink-0">
                        <faq.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-semibold text-slate-900 group-hover:text-medical-blue transition-colors">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5">
                    <div className="pl-14 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
