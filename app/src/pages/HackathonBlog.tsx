import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Award, ArrowLeft, Trophy, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/sections/Navigation';
import Footer from '@/sections/Footer';

const HackathonBlog = () => {
  const navigate = useNavigate();

  const editions = [
    {
      id: 2,
      title: "2nd Edition: Surgical Innovation Summit",
      date: "January 31 - February 1, 2026",
      location: "Kochi, India",
      participants: "80+ Participants",
      sponsor: "Hospex India",
      description: "The second edition focused on AI-driven surgical robotics and telementoring systems. Teams prototyped solutions for remote surgery assistance and automated pathology detection.",
      highlights: [
        "Keynote by Dr. Rahu Jaic Sam on 'The Future of Digital Surgery'",
        "Partnership with local bird watching community for hands-on demos",
        "Winning Project: 'NeuroGuide' - AR overlay for neurosurgery"
      ],
      winner: {
        name: "Team NeuroGuide",
        project: "AR Navigation for Neurosurgery",
        prize: "$2,200 worth free med/acc membership + course + Mentorship"
      },
      image: "/images/venue-makerspace.jpg",
      gallery: [
        "/images/blog-ai.jpg",
        "/images/robot-medical.jpg",
        "/images/hero-3.jpg",
        "/images/venue-university.jpg",
        "/images/hero-2.jpg",
        "/images/blog-healthcare.jpg"
      ]
    },
    {
      id: 1,
      title: "1st Edition: MedTech Genesis",
      date: "July 26-27, 2025",
      location: "Kochi, India",
      participants: "50+ Participants",
      sponsor: "Bootstrapped",
      description: "Our inaugural event brought together surgeons and engineers to solve critical challenges in low-resource settings. The focus was on frugal innovation and accessible healthcare devices.",
      highlights: [
        "Launched the 'Med/Acc' community initiative",
        "12-hour non-stop prototyping marathon",
        "Winning Project: 'SmartSuture' - Infection-detecting sutures"
      ],
      winner: {
        name: "Team SmartSuture",
        project: "IoT-enabled Sutures for Post-op Monitoring",
        prize: "$2,200 worth free med/acc membership + course + Mentorship"
      },
      image: "/images/venue-university.jpg",
      gallery: [
        "/images/hero-1.jpg",
        "/images/hero-2.jpg",
        "/images/hero-4.jpg",
        "/images/venue-makerspace.jpg",
        "/images/blog-healthcare.jpg",
        "/images/robot-medical.jpg"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-12">
            <Button 
              variant="ghost" 
              className="mb-6 -ml-4 hover:bg-slate-100"
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Hackathon Archives
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl">
                Relive the innovation, collaboration, and breakthroughs from our previous surgical hackathons. 
                Where ideas met execution to transform healthcare.
              </p>
            </motion.div>
          </div>

          {/* Editions Grid */}
          <div className="space-y-16">
            {editions.map((edition, index) => (
              <motion.div
                key={edition.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100"
              >
                <div className="grid lg:grid-cols-2">
                  {/* Image Section */}
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <img 
                      src={edition.image} 
                      alt={edition.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                      <div className="text-white">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-4 h-4 text-blue-300" />
                          <span className="font-medium">{edition.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-red-300" />
                          <span>{edition.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <div className="flex items-center gap-2 text-medical-blue font-bold tracking-wide text-sm uppercase">
                        <Users className="w-4 h-4" />
                        {edition.participants}
                      </div>
                      <div className="flex items-center gap-2 text-amber-600 font-bold tracking-wide text-sm uppercase bg-amber-50 px-3 py-1 rounded-full">
                        <Award className="w-4 h-4" />
                        Sponsor: {edition.sponsor}
                      </div>
                    </div>
                    
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">
                      {edition.title}
                    </h2>
                    
                    <p className="text-slate-600 mb-8 leading-relaxed">
                      {edition.description}
                    </p>

                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-8">
                      <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                        Event Highlights
                      </h3>
                      <ul className="space-y-2">
                        {edition.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-medical-blue mt-2 shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gradient-to-r from-medical-blue/5 to-medical-teal/5 rounded-2xl p-6 border border-medical-blue/10">
                      <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <Trophy className="w-5 h-5 text-amber-500" />
                        Winner: {edition.winner.name}
                      </h3>
                      <p className="text-medical-blue font-medium text-sm mb-1">
                        {edition.winner.project}
                      </p>
                      <p className="text-slate-500 text-xs">
                        Prize: {edition.winner.prize}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Gallery Section */}
                <div className="p-8 border-t border-slate-100 bg-slate-50/50">
                   <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-medical-blue" />
                      Event Gallery
                   </h3>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {edition.gallery.map((img, idx) => (
                        <div key={idx} className="overflow-hidden rounded-xl h-48 shadow-sm group">
                          <img 
                            src={img} 
                            alt={`Gallery ${idx + 1}`} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                      ))}
                   </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center bg-slate-900 rounded-3xl p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-medical-blue/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-medical-teal/20 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-6">Ready for the Next Challenge?</h2>
              <p className="text-slate-300 max-w-2xl mx-auto mb-8">
                Join us for the 3rd Edition on July 26-27, 2026. Registration is now open for innovators ready to redefine surgical technology.
              </p>
              <a 
                href="https://wa.me/919497612942?text=I%20want%20register%20for%20next%20hackathon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  className="bg-medical-blue hover:bg-medical-blue-dark text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-medical-blue/25"
                >
                  Register for 3rd Edition
                </Button>
              </a>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HackathonBlog;
