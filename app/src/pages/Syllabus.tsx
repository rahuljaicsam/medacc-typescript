import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/sections/Navigation';
import Footer from '@/sections/Footer';

interface CourseModule {
  id: string;
  title: string;
  rating: string;
  participants: string;
  description: string;
  status: 'Not Started' | 'Loading...' | 'Registration Open' | 'Available';
  action: 'Start Course' | 'Start Project' | 'Register Now' | 'Book Session';
  category: 'Foundation' | 'Specialized' | 'Technical' | 'Business' | 'Practical';
}

const SYLLABUS_DATA: CourseModule[] = [
  {
    id: '1',
    title: 'General Knowledge Foundations',
    rating: '4.6/5',
    participants: '45 companies',
    description: 'Build comprehensive general knowledge across science, business, and current affairs.',
    status: 'Not Started',
    action: 'Start Course',
    category: 'Foundation'
  },
  {
    id: '2',
    title: 'Biotech General Knowledge Mastery',
    rating: '4.9/5',
    participants: '42 companies',
    description: 'Comprehensive biotech industry knowledge from molecular biology to commercialization.',
    status: 'Not Started',
    action: 'Start Course',
    category: 'Foundation'
  },
  {
    id: '3',
    title: 'Medical General Knowledge Essentials',
    rating: '4.8/5',
    participants: '38 companies',
    description: 'Master essential medical concepts, terminology, and healthcare systems knowledge.',
    status: 'Not Started',
    action: 'Start Course',
    category: 'Foundation'
  },
  {
    id: '4',
    title: 'Market Analysis',
    rating: '4.5/5',
    participants: '35 companies',
    description: 'Master market research and competitive analysis for biotech ventures.',
    status: 'Not Started',
    action: 'Start Course',
    category: 'Business'
  },
  {
    id: '5',
    title: 'Regulatory Pathways',
    rating: '4.7/5',
    participants: '18 companies',
    description: 'Navigate FDA approval processes and regulatory requirements for biotech products.',
    status: 'Loading...',
    action: 'Start Course',
    category: 'Specialized'
  },
  {
    id: '6',
    title: 'IP & Patent Strategy',
    rating: '4.7/5',
    participants: '20 companies',
    description: 'Protect your innovations with comprehensive intellectual property strategies.',
    status: 'Not Started',
    action: 'Start Course',
    category: 'Business'
  },
  {
    id: '7',
    title: 'Clinical Trial Design',
    rating: '4.9/5',
    participants: '15 companies',
    description: 'Learn to design and execute successful clinical trials for biotech products.',
    status: 'Not Started',
    action: 'Start Course',
    category: 'Specialized'
  },
  {
    id: '8',
    title: 'Biomaterials Innovation',
    rating: '4.8/5',
    participants: '25 companies',
    description: 'Master the fundamentals of biomaterial design and application in medical devices.',
    status: 'Not Started',
    action: 'Start Course',
    category: 'Technical'
  },
  {
    id: '9',
    title: 'Tech General Knowledge for Biotech',
    rating: '4.7/5',
    participants: '33 companies',
    description: 'Essential technology knowledge for modern biotech entrepreneurs and innovators.',
    status: 'Not Started',
    action: 'Start Course',
    category: 'Technical'
  },
  {
    id: '10',
    title: 'AI in Healthcare',
    rating: '4.8/5',
    participants: '28 companies',
    description: 'Explore artificial intelligence applications in healthcare and biotech innovation.',
    status: 'Not Started',
    action: 'Start Course',
    category: 'Technical'
  },
  {
    id: '11',
    title: 'Robotics in Healthcare',
    rating: '4.0/5',
    participants: '20 companies',
    description: 'Explore Robotics applications in healthcare and biotech innovation.',
    status: 'Not Started',
    action: 'Start Course',
    category: 'Technical'
  },
  {
    id: '12',
    title: 'App Development in Healthcare',
    rating: '4.0/5',
    participants: '20 companies',
    description: 'Explore web app applications development in healthcare and biotech innovation.',
    status: 'Not Started',
    action: 'Start Course',
    category: 'Technical'
  },
  {
    id: '13',
    title: 'Legal General Knowledge for Entrepreneurs',
    rating: '4.7/5',
    participants: '30 companies',
    description: 'Understand essential legal concepts, business law, and regulatory frameworks.',
    status: 'Not Started',
    action: 'Start Course',
    category: 'Business'
  },
  {
    id: '14',
    title: 'Startup Fundraising',
    rating: '4.9/5',
    participants: '32 companies',
    description: 'Learn proven strategies for raising capital and building investor relationships.',
    status: 'Not Started',
    action: 'Start Course',
    category: 'Business'
  },
  {
    id: '15',
    title: 'Strategic Partnerships',
    rating: '4.6/5',
    participants: '22 companies',
    description: 'Build valuable partnerships with pharma companies, research institutions, and investors.',
    status: 'Not Started',
    action: 'Start Course',
    category: 'Business'
  },
  {
    id: '16',
    title: 'Startup Project Accelerator',
    rating: '4.9/5',
    participants: '12 companies',
    description: 'Complete end-to-end startup project with mentorship, from idea validation to MVP launch.',
    status: 'Not Started',
    action: 'Start Project',
    category: 'Practical'
  },
  {
    id: '17',
    title: 'Biotech Innovation Hackathon',
    rating: '4.8/5',
    participants: '48 participants',
    description: '48-hour intensive hackathon to solve real biotech challenges with industry experts.',
    status: 'Registration Open',
    action: 'Register Now',
    category: 'Practical'
  },
  {
    id: '18',
    title: '1-on-1 Founder Masterclass',
    rating: '5.0/5',
    participants: 'Limited Slots',
    description: 'Exclusive mentorship sessions with Med/Acc co-founders for personalized guidance.',
    status: 'Available',
    action: 'Book Session',
    category: 'Practical'
  },
  {
    id: '19',
    title: 'Bioethics & Society',
    rating: '4.8/5',
    participants: '25 companies',
    description: 'Explore ethical considerations in gene editing, AI, and emerging biotechnologies.',
    status: 'Not Started',
    action: 'Start Course',
    category: 'Foundation'
  },
  {
    id: '20',
    title: 'GMP Manufacturing Fundamentals',
    rating: '4.7/5',
    participants: '20 companies',
    description: 'Understanding Good Manufacturing Practices (GMP) for scaling biotech production.',
    status: 'Not Started',
    action: 'Start Course',
    category: 'Specialized'
  },
  {
    id: '21',
    title: 'Quality Management Systems (ISO 13485)',
    rating: '4.8/5',
    participants: '18 companies',
    description: 'Implement robust QMS compliant with ISO 13485 for medical device development.',
    status: 'Not Started',
    action: 'Start Course',
    category: 'Specialized'
  },
  {
    id: '22',
    title: 'Health Economics & Reimbursement',
    rating: '4.9/5',
    participants: '30 companies',
    description: 'Navigate payer strategies, CPT codes, and reimbursement models for healthcare innovations.',
    status: 'Not Started',
    action: 'Start Course',
    category: 'Specialized'
  },
  {
    id: '23',
    title: 'Digital Health Data Privacy',
    rating: '4.7/5',
    participants: '28 companies',
    description: 'Master HIPAA, GDPR, and cybersecurity best practices for digital health solutions.',
    status: 'Not Started',
    action: 'Start Course',
    category: 'Technical'
  },
  {
    id: '24',
    title: 'Medtech Prototyping',
    rating: '4.6/5',
    participants: '22 companies',
    description: 'Rapid prototyping techniques including 3D printing and biocompatible material selection.',
    status: 'Not Started',
    action: 'Start Course',
    category: 'Technical'
  },
  {
    id: '25',
    title: 'Cloud Computing for Life Sciences',
    rating: '4.5/5',
    participants: '20 companies',
    description: 'Leveraging cloud infrastructure (AWS/Azure) for genomics and large-scale data analysis.',
    status: 'Not Started',
    action: 'Start Course',
    category: 'Technical'
  },
  {
    id: '26',
    title: 'Grant Writing for Non-Dilutive Funding',
    rating: '4.9/5',
    participants: '35 companies',
    description: 'Secure SBIR/STTR grants and other non-dilutive funding sources for your startup.',
    status: 'Not Started',
    action: 'Start Course',
    category: 'Business'
  },
  {
    id: '27',
    title: 'Biotech Supply Chain Management',
    rating: '4.6/5',
    participants: '15 companies',
    description: 'Managing cold chains, logistics, and supplier relationships in the biotech industry.',
    status: 'Not Started',
    action: 'Start Course',
    category: 'Business'
  },
  {
    id: '28',
    title: 'Scientific Leadership & Team Building',
    rating: '4.8/5',
    participants: '40 companies',
    description: 'Transitioning from scientist to leader: managing diverse R&D and business teams.',
    status: 'Not Started',
    action: 'Start Course',
    category: 'Business'
  },
  {
    id: '29',
    title: 'Exit Strategies: M&A and IPOs',
    rating: '4.7/5',
    participants: '25 companies',
    description: 'Planning for successful exits through mergers, acquisitions, or public offerings.',
    status: 'Not Started',
    action: 'Start Course',
    category: 'Business'
  },
  {
    id: '30',
    title: 'Investor Pitch Workshop',
    rating: '4.9/5',
    participants: '45 companies',
    description: 'Hands-on workshop to craft compelling pitch decks and refine your storytelling.',
    status: 'Available',
    action: 'Book Session',
    category: 'Practical'
  }
];

const CATEGORIES = ['Foundation', 'Specialized', 'Technical', 'Business', 'Practical'] as const;

const Syllabus = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-medical-blue to-medical-teal pt-32 pb-20 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <Link to="/apply" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-4">
              <ArrowLeft className="w-4 h-4" />
              Back to Apply
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display">
              Program Syllabus
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              A comprehensive curriculum designed to transform scientists into founders and ideas into impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <main className="container mx-auto px-4 py-16 space-y-16">
        {CATEGORIES.map((category, categoryIndex) => {
          const modules = SYLLABUS_DATA.filter(module => module.category === category);
          
          if (modules.length === 0) return null;

          return (
            <motion.section 
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-200">
                {category} Modules
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {modules.map((module) => (
                  <div 
                    key={module.id}
                    className="bg-white p-6 rounded-lg border border-slate-100 shadow-sm hover:border-medical-blue/30 transition-all hover:shadow-md"
                  >
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {module.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {module.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>
          );
        })}
      </main>

      <Footer />
    </div>
  );
};

export default Syllabus;
