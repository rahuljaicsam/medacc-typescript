import { motion } from 'framer-motion';
import { ArrowLeft, Mail, MapPin, Building, Globe, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FormEvent } from 'react';

const Contact = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=rahuljaicsam@gmail.com&su=${encodeURIComponent(subject as string || 'Contact Form Submission')}&body=${encodeURIComponent(
      `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.open(gmailLink, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-slate-100 sticky top-0 z-50">
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
              className="flex items-center gap-2 text-slate-600 hover:text-medical-blue transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
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
              <MessageSquare className="w-4 h-4 text-medical-blue" />
              <span className="text-medical-blue font-medium text-sm">Contact Us</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Get in <span className="text-medical-blue">Touch</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We'd love to hear from you. Whether you have a question about pricing, 
              trials, or anything else, our team is ready to answer all your questions.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="space-y-8"
            >
              {/* UAE Headquarters */}
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-medical-blue to-medical-teal flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">Main Headquarters</h2>
                <div className="flex items-start gap-3 text-slate-600">
                  <MapPin className="w-5 h-5 text-medical-blue mt-1 flex-shrink-0" />
                  <p>UAE</p>
                </div>
              </div>

              {/* India Office */}
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-6">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-4">India Office</h2>
                <div className="space-y-4 text-slate-600">
                  <div className="flex items-start gap-3">
                    <Building className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                    <p>Current Office partnered with Maya MD Technologies Pvt Ltd, in Cochin.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                    <p>Few kilometers away from Cochin University of Science and Technology and Kerala's Info Park.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                    <p>Hosted by Tinkerspace, Cochin.</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center mb-6">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">Email Us</h2>
                <div className="flex items-center gap-3 text-slate-600">
                  <Mail className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <a href="mailto:rahuljaicsam@gmail.com" className="hover:text-medical-blue transition-colors">rahuljaicsam@gmail.com</a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-100 shadow-card"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h2>
              <form 
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-slate-700">First name</label>
                    <Input id="firstName" name="firstName" placeholder="John" className="rounded-xl border-slate-200 focus:border-medical-blue focus:ring-medical-blue/20" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-slate-700">Last name</label>
                    <Input id="lastName" name="lastName" placeholder="Doe" className="rounded-xl border-slate-200 focus:border-medical-blue focus:ring-medical-blue/20" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
                  <Input id="email" name="email" type="email" placeholder="john@example.com" className="rounded-xl border-slate-200 focus:border-medical-blue focus:ring-medical-blue/20" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-slate-700">Subject</label>
                  <Input id="subject" name="subject" placeholder="How can we help?" className="rounded-xl border-slate-200 focus:border-medical-blue focus:ring-medical-blue/20" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                  <Textarea 
                    id="message" 
                    name="message"
                    placeholder="Tell us about your project..." 
                    className="min-h-[150px] rounded-xl border-slate-200 focus:border-medical-blue focus:ring-medical-blue/20 resize-none" 
                  />
                </div>

                <Button type="submit" className="w-full bg-medical-blue hover:bg-medical-blue-dark text-white py-6 rounded-xl font-semibold text-lg transition-all hover:scale-[1.02] hover:shadow-lg">
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              © 2024 Med/Acc. All rights reserved.
            </p>
            <Link to="/" className="text-medical-blue hover:underline">
              Back to Home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
