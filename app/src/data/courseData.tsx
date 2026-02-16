import React from 'react';
import { 
  BookOpen, 
  Microscope, 
  HeartPulse, 
  Scale, 
  Factory, 
  Award, 
  Briefcase, 
  Cpu, 
  Brain, 
  Bot, 
  Smartphone, 
  Shield, 
  Cloud, 
  Handshake, 
  Truck, 
  Users, 
  TrendingUp, 
  Rocket, 
  Mic
} from 'lucide-react';

// Course Type
export type CourseModule = {
  id: string;
  title: string;
  rating: string;
  participants: string;
  description: string;
  status: 'Not Started' | 'Loading...' | 'Registration Open' | 'Available' | 'In Progress' | 'Completed';
  action: 'Start Course' | 'Start Project' | 'Register Now' | 'Book Session' | 'Continue';
  icon: React.ReactNode;
  totalModules?: number;
}

// Mock Data matching the user request
export const INITIAL_COURSE_DATA: CourseModule[] = [
  // Foundation Modules
  {
    id: '1',
    title: 'General Knowledge Foundations',
    rating: '4.6/5',
    participants: '45 companies',
    description: 'Build comprehensive general knowledge across science, business, and current affairs.',
    status: 'Not Started',
    action: 'Start Course',
    icon: <BookOpen className="w-6 h-6" />,
    totalModules: 9
  },
  {
    id: '2',
    title: 'Biotech General Knowledge Mastery',
    rating: '4.9/5',
    participants: '42 companies',
    description: 'Comprehensive biotech industry knowledge from molecular biology to commercialization.',
    status: 'Not Started',
    action: 'Start Course',
    icon: <Microscope className="w-6 h-6" />
  },
  {
    id: '3',
    title: 'Medical General Knowledge Essentials',
    rating: '4.8/5',
    participants: '38 companies',
    description: 'Master essential medical concepts, terminology, and healthcare systems knowledge.',
    status: 'Not Started',
    action: 'Start Course',
    icon: <HeartPulse className="w-6 h-6" />
  },
  {
    id: '4',
    title: 'Bioethics & Society',
    rating: '4.7/5',
    participants: '25 companies',
    description: 'Explore ethical considerations in gene editing, AI, and emerging biotechnologies.',
    status: 'Not Started',
    action: 'Start Course',
    icon: <Scale className="w-6 h-6" />
  },

  // Specialized Modules
  {
    id: '5',
    title: 'Regulatory Pathways',
    rating: '4.7/5',
    participants: '18 companies',
    description: 'Navigate FDA approval processes and regulatory requirements for biotech products.',
    status: 'Loading...',
    action: 'Start Course',
    icon: <Scale className="w-6 h-6" />
  },
  {
    id: '6',
    title: 'Clinical Trial Design',
    rating: '4.9/5',
    participants: '15 companies',
    description: 'Learn to design and execute successful clinical trials for biotech products.',
    status: 'Not Started',
    action: 'Start Course',
    icon: <Microscope className="w-6 h-6" />
  },
  {
    id: '7',
    title: 'GMP Manufacturing Fundamentals',
    rating: '4.8/5',
    participants: '22 companies',
    description: 'Understanding Good Manufacturing Practices (GMP) for scaling biotech production.',
    status: 'Not Started',
    action: 'Start Course',
    icon: <Factory className="w-6 h-6" />
  },
  {
    id: '8',
    title: 'Quality Management Systems (ISO 13485)',
    rating: '4.7/5',
    participants: '20 companies',
    description: 'Implement robust QMS compliant with ISO 13485 for medical device development.',
    status: 'Not Started',
    action: 'Start Course',
    icon: <Award className="w-6 h-6" />
  },
  {
    id: '9',
    title: 'Health Economics & Reimbursement',
    rating: '4.6/5',
    participants: '18 companies',
    description: 'Navigate payer strategies, CPT codes, and reimbursement models for healthcare innovations.',
    status: 'Not Started',
    action: 'Start Course',
    icon: <Briefcase className="w-6 h-6" />
  },

  // Technical Modules
  {
    id: '10',
    title: 'Biomaterials Innovation',
    rating: '4.8/5',
    participants: '25 companies',
    description: 'Master the fundamentals of biomaterial design and application in medical devices.',
    status: 'Not Started',
    action: 'Start Course',
    icon: <Microscope className="w-6 h-6" />
  },
  {
    id: '11',
    title: 'Tech General Knowledge for Biotech',
    rating: '4.7/5',
    participants: '33 companies',
    description: 'Essential technology knowledge for modern biotech entrepreneurs and innovators.',
    status: 'Not Started',
    action: 'Start Course',
    icon: <Cpu className="w-6 h-6" />
  },
  {
    id: '12',
    title: 'AI in Healthcare',
    rating: '4.8/5',
    participants: '28 companies',
    description: 'Explore artificial intelligence applications in healthcare and biotech innovation.',
    status: 'Not Started',
    action: 'Start Course',
    icon: <Brain className="w-6 h-6" />
  },
  {
    id: '13',
    title: 'Robotics in Healthcare',
    rating: '4.0/5',
    participants: '20 companies',
    description: 'Explore Robotics applications in healthcare and biotech innovation.',
    status: 'Not Started',
    action: 'Start Course',
    icon: <Bot className="w-6 h-6" />
  },
  {
    id: '14',
    title: 'App Development in Healthcare',
    rating: '4.0/5',
    participants: '20 companies',
    description: 'Explore web app applications development in healthcare and biotech innovation.',
    status: 'Not Started',
    action: 'Start Course',
    icon: <Smartphone className="w-6 h-6" />
  },
  {
    id: '15',
    title: 'Digital Health Data Privacy',
    rating: '4.8/5',
    participants: '30 companies',
    description: 'Master HIPAA, GDPR, and cybersecurity best practices for digital health solutions.',
    status: 'Not Started',
    action: 'Start Course',
    icon: <Shield className="w-6 h-6" />
  },
  {
    id: '16',
    title: 'Medtech Prototyping',
    rating: '4.7/5',
    participants: '24 companies',
    description: 'Rapid prototyping techniques including 3D printing and biocompatible material selection.',
    status: 'Not Started',
    action: 'Start Course',
    icon: <Cpu className="w-6 h-6" />
  },
  {
    id: '17',
    title: 'Cloud Computing for Life Sciences',
    rating: '4.6/5',
    participants: '26 companies',
    description: 'Leveraging cloud infrastructure (AWS/Azure) for genomics and large-scale data analysis.',
    status: 'Not Started',
    action: 'Start Course',
    icon: <Cloud className="w-6 h-6" />
  },

  // Business Modules
  {
    id: '18',
    title: 'Market Analysis',
    rating: '4.5/5',
    participants: '35 companies',
    description: 'Master market research and competitive analysis for biotech ventures.',
    status: 'Not Started',
    action: 'Start Course',
    icon: <Briefcase className="w-6 h-6" />
  },
  {
    id: '19',
    title: 'IP & Patent Strategy',
    rating: '4.7/5',
    participants: '20 companies',
    description: 'Protect your innovations with comprehensive intellectual property strategies.',
    status: 'Not Started',
    action: 'Start Course',
    icon: <Scale className="w-6 h-6" />
  },
  {
    id: '20',
    title: 'Legal General Knowledge for Entrepreneurs',
    rating: '4.7/5',
    participants: '30 companies',
    description: 'Understand essential legal concepts, business law, and regulatory frameworks.',
    status: 'Not Started',
    action: 'Start Course',
    icon: <Scale className="w-6 h-6" />
  },
  {
    id: '21',
    title: 'Startup Fundraising',
    rating: '4.9/5',
    participants: '32 companies',
    description: 'Learn proven strategies for raising capital and building investor relationships.',
    status: 'Not Started',
    action: 'Start Course',
    icon: <Briefcase className="w-6 h-6" />
  },
  {
    id: '22',
    title: 'Strategic Partnerships',
    rating: '4.6/5',
    participants: '22 companies',
    description: 'Build valuable partnerships with pharma companies, research institutions, and investors.',
    status: 'Not Started',
    action: 'Start Course',
    icon: <Handshake className="w-6 h-6" />
  },
  {
    id: '23',
    title: 'Grant Writing for Non-Dilutive Funding',
    rating: '4.8/5',
    participants: '28 companies',
    description: 'Secure SBIR/STTR grants and other non-dilutive funding sources for your startup.',
    status: 'Not Started',
    action: 'Start Course',
    icon: <Award className="w-6 h-6" />
  },
  {
    id: '24',
    title: 'Biotech Supply Chain Management',
    rating: '4.5/5',
    participants: '16 companies',
    description: 'Managing cold chains, logistics, and supplier relationships in the biotech industry.',
    status: 'Not Started',
    action: 'Start Course',
    icon: <Truck className="w-6 h-6" />
  },
  {
    id: '25',
    title: 'Scientific Leadership & Team Building',
    rating: '4.9/5',
    participants: '40 companies',
    description: 'Transitioning from scientist to leader: managing diverse R&D and business teams.',
    status: 'Not Started',
    action: 'Start Course',
    icon: <Users className="w-6 h-6" />
  },
  {
    id: '26',
    title: 'Exit Strategies: M&A and IPOs',
    rating: '4.7/5',
    participants: '22 companies',
    description: 'Planning for successful exits through mergers, acquisitions, or public offerings.',
    status: 'Not Started',
    action: 'Start Course',
    icon: <TrendingUp className="w-6 h-6" />
  },

  // Practical Modules
  {
    id: '27',
    title: 'Startup Project Accelerator',
    rating: '4.9/5',
    participants: '12 companies',
    description: 'Complete end-to-end startup project with mentorship, from idea validation to MVP launch.',
    status: 'Not Started',
    action: 'Start Project',
    icon: <Rocket className="w-6 h-6" />
  },
  {
    id: '28',
    title: 'Biotech Innovation Hackathon',
    rating: '4.8/5',
    participants: '48 participants',
    description: '48-hour intensive hackathon to solve real biotech challenges with industry experts.',
    status: 'Registration Open',
    action: 'Register Now',
    icon: <Users className="w-6 h-6" />
  },
  {
    id: '29',
    title: '1-on-1 Founder Masterclass',
    rating: '5.0/5',
    participants: 'Limited Slots',
    description: 'Exclusive mentorship sessions with Med/Acc co-founders for personalized guidance.',
    status: 'Available',
    action: 'Book Session',
    icon: <Users className="w-6 h-6" />
  },
  {
    id: '30',
    title: 'Investor Pitch Workshop',
    rating: '4.9/5',
    participants: '30 participants',
    description: 'Hands-on workshop to craft compelling pitch decks and refine your storytelling.',
    status: 'Available',
    action: 'Book Session',
    icon: <Mic className="w-6 h-6" />
  }
];
