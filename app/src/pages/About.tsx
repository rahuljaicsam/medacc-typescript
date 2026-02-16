import { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Users, ChevronDown, ChevronUp, Award, GraduationCap, Briefcase, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TeamMember {
  name: string;
  role: string;
  credentials: string;
  bio: string;
  category: 'founder' | 'middle-east' | 'volunteer';
}

const teamMembers: TeamMember[] = [
  {
    name: 'Dr. Rahul Jaic Sam',
    role: 'Co-Founder/CTO',
    credentials: 'MBBS (CMC Vellore), MA (Philosophy), PGDipl (Lifestyle Medicine), PGDipl (AI-ML, Data Science)',
    bio: `Dr. Rahul Jaic Sam is a visionary medical doctor and tech entrepreneur, who graduated from the prestigious CMC Vellore, India's top medical school. He pursued Preventive Lifestyle Medicine from American College of Lifestyle Medicine and saw the potential in AI for healthcare. Thanks to being born into long lineage of mathematicians, he honed his expertise in AI, ML, and Data Science at NIT Warangal. Later he found that AI itself is incomplete without Philosophy, so he pursued Masters in Philosophy from Indira Gandhi National Open University.

As the founder of his own cutting-edge Medical AI and Robotics Research Laboratory, he is at the forefront of innovation in healthcare. He coauthored and trained frontier AI researchers from Silicon valley to MIT to Birmingham City to Singapore. In addition to his entrepreneurial ventures, Dr. Rahul serves as the Chief Technology Officer for leading pharmaceutical company and hospital, driving technological advancements and transformative solutions at grass root.

He is also the founder of healthcare social platform spanning from Australia to South East Asia connecting trusted doctors with patients. His multifaceted expertise is further enriched by his role as an academic philosopher, where he explores the profound intersections of technology, medicine, and human knowledge. His latest venture is on building a full automation of hospitals, functional robot doctors and simulating entire human body with help of digital twin technology.`,
    category: 'founder'
  },
  {
    name: 'Dr. Raju M R',
    role: 'Co-Founder/CFO',
    credentials: 'MBBS (Calicut Medical College), MBA (TISS-Mumbai)',
    bio: `Dr. Raju M R is a seasoned medical entrepreneur, visionary health tech innovator, and dedicated venture capitalist. With a solid foundation as a medical doctor from Calicut Medical College and an MBA from the prestigious Tata Institute of Social Sciences, Dr. Raju has been instrumental in transforming the landscape of digital health and pharmaceutical industries.

With over a decade of experience, Dr. Raju has successfully funded and exited numerous startups, showcasing his acumen in navigating the complexities of the healthcare sector. His diverse career includes pivotal roles at renowned organizations like Pfizer, AstraZeneca, Wockhardt, and Menarini, where he spearheaded clinical strategy, product development, and business growth.

Currently, as the founder of MayaMD.ai, Dr. Raju leads the charge in AI-driven symptom analysis and virtual triage solutions, impacting over 7000 conditions. He is also a key consultant and advisor to various medical companies, from private jet air ambulance services to cutting-edge femtech startups, fostering innovation and driving advancements in personalized care and digital therapeutics.

Dr. Raju's commitment to excellence and his passion for harnessing technology to solve complex health challenges make him an inspiring figure in the healthcare industry. His work continues to pave the way for future innovations, enhancing patient care and revolutionizing the way we approach health and wellness.`,
    category: 'founder'
  },
  {
    name: 'Pratheek Remesh Menon',
    role: 'Co-Founder/CPO',
    credentials: 'Btech (VIT), M.Eng-Biomedical Engineering (Duke University USA), MBA (IIM-Ahmedabad)',
    bio: `Mr. Pratheek Remesh Menon is a dynamic leader and innovative thinker in the field of health tech, currently serving as the Chief Product Officer at Saath Care. With a mission to transform chronic care management, Pratheek spearheads product strategy, development, and user experience, leading a cross-functional team to create cutting-edge solutions for patients and healthcare providers.

Pratheek brings a wealth of experience from his previous roles, including a pivotal stint at Microsoft as a Program Manager, where he drove key metrics and A/B testing for international markets. His expertise extends to brain-computer-interface technology, having developed neuromarketing and neurofeedback products at NeuroPlus.

He holds an MBA from IIM Ahmedabad and a Master's in Biomedical Engineering from Duke University, with a focus on neuro-engineering. His educational background and professional journey are marked by a commitment to leveraging technology to improve healthcare outcomes.

Pratheek's work at Saath Care includes developing an AI-enabled decision support system for specialist doctors and a national-level patient research portal. His strategic vision and technical acumen make him a key player in the digital health landscape, dedicated to enhancing patient care through innovative technologies. He is a graduate of Vellore Institute of Technology as well.`,
    category: 'founder'
  },
  {
    name: 'Juliya George',
    role: 'Head of Marketing',
    credentials: 'MBA- Finance and Marketing',
    bio: `Mrs. Juliya George is a dedicated professional with experience in Marketing and Sales. She has contributed significantly to Texas Review as Immigration Consultant and is currently operating from Middle East, UAE.

Her expertise includes Edtech, Financial Analysis, Sales, Customer Service, Digital Marketing and Client Prospecting. Juliya graduated from Asian School of Business with a degree in MBA - Finance and Marketing. Throughout her career, she has certified herself in digital marketing and marketing finance.

Outside of work, Juliya enjoys household consumership research and trial, which contributes to her well-rounded approach to problem-solving and innovation in the workplace of healthcare and life science consumership.`,
    category: 'middle-east'
  },
  {
    name: 'Gokul Gopi',
    role: 'Marketing and ML Cloud Consultant',
    credentials: 'PGP-Finance and Management IMT, Btech- EE NIT Karnataka, Ex-Adobe, Ex-Emirates, FlyDubai',
    bio: `Gokul Gopi is a seasoned marketing consultant for MED/ACC with over a decade of experience in data-driven solutions, predictive modeling, and customer insights. Currently serving as Manager of Commercial Data at flydubai, he advises on end-to-end campaign optimization, uplift modeling, and real-time personalization to maximize ROI.

Previously, he led Marketing Analytics at Emirates—building A/B testing frameworks and predictive analytics platforms that drove multi-million-dollar revenue uplifts—and served as a Digital Strategist at Adobe, where he developed cloud-native data pipelines and analytics roadmaps for Fortune 500 clients.

Earlier roles include Senior Digital Analyst at Fidelity Investments, specializing in personalization algorithms with Adobe Target and BigQuery, and Marketing Analytics Analyst at HSBC.

Gokul holds a postgraduate degree in Finance from IMT Ghaziabad and a B.Tech. in Electrical & Electronics Engineering from NIT Karnataka, and is proficient in Google Cloud (BigQuery, Vertex AI), Adobe Analytics & Target, Google Analytics, Python, SQL, and multivariate testing.`,
    category: 'middle-east'
  },
  {
    name: 'Govind Gopu',
    role: 'Award winning Film cinematographer and Video editor',
    credentials: 'Bsc, Msc in Machine Intelligence (ML)',
    bio: `• Mobile Robotics expert
• Built many Award winning short film cinematographer and video editor
• Machine Learning, Computer vision and rover automation expert
• Expert in AI generated video marketing and social media content
• Building a complete AI-film studio and directory platform to generate hollywood production movie by himself`,
    category: 'volunteer'
  },
  {
    name: 'Sidharth Narayanan',
    role: 'COO at Cytokine Lectures, Founder of Medinn Networking',
    credentials: 'Final year Medical Student (MBBS)',
    bio: `• COO Cytokine Lectures- Exclusive clinical platform for Medical Students with over 5000+ Subscribers that recorded an annual revenue of 25+ Lakhs
• Marketing Intern cum ambassador for Doc Tutorials & DBMCI Edutech platforms with sales amounting to 10 Lakhs
• Young Innovators Programme- KDISC Kerala Intern & selected for State Level
• Recipient of KUHS Research appreciation awards 2024
• Currently building Medical Innovation Hubs for Medical Colleges with IEDC Kerala in view of IEDC Summit, NITC Calicut
• State Secretary of All India Research Society & Organizing student Member of Doctors AI Global Virtual Summit`,
    category: 'volunteer'
  },
  {
    name: 'Amartya Sen',
    role: 'Google Developer Student Club Campus Lead',
    credentials: 'Pre-Final year CS Engineering Student',
    bio: `• Freelance Marketing Intern cum ambassador for startups
• GDSCC lead and event management host for South India`,
    category: 'volunteer'
  },
  {
    name: 'Devanshu Singh',
    role: 'UX-UI Designer',
    credentials: 'Bsc Nutrition, Masters Student in Philosophy',
    bio: `• Specialised in Biotech, Biomedical and Nutrition UX-UI Design
• Well versed international research level expertise in nutrition
• Currently experting in fintech business designs`,
    category: 'volunteer'
  }
];

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white rounded-2xl border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden"
    >
      <div className="p-6">
        {/* Avatar and Basic Info */}
        <div className="flex items-start gap-4 mb-4">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-medical-blue to-medical-teal flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-xl">{member.name.charAt(0)}</span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
            <p className="text-medical-blue font-medium text-sm">{member.role}</p>
            <div className="flex items-center gap-1 text-slate-500 text-xs mt-1">
              <GraduationCap className="w-3 h-3" />
              <span className="line-clamp-1">{member.credentials}</span>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className={`relative ${isExpanded ? '' : 'max-h-24 overflow-hidden'}`}>
          <p className="text-slate-600 text-sm whitespace-pre-line">
            {member.bio}
          </p>
          {!isExpanded && (
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
          )}
        </div>

        {/* Read More/Less Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1 text-medical-blue font-medium text-sm mt-4 hover:underline"
        >
          {isExpanded ? (
            <>
              Read Less <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              Read More <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
};

const About = () => {
  const founders = teamMembers.filter(m => m.category === 'founder');
  const middleEast = teamMembers.filter(m => m.category === 'middle-east');
  const volunteers = teamMembers.filter(m => m.category === 'volunteer');

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
              <Users className="w-4 h-4 text-medical-blue" />
              <span className="text-medical-blue font-medium text-sm">About Us</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              About <span className="text-medical-blue">MED/ACC</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We're on a mission to transform healthcare through innovation, 
              empowering the next generation of healthtech pioneers.
            </p>
          </motion.div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-card"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Vision Statement</h2>
              <p className="text-slate-600 leading-relaxed">
                To be the leading global accelerator empowering innovative healthcare, wellness, 
                life sciences, digital health, futuristic biology, and anti-aging startups, 
                driving transformative solutions that enhance human health and well-being.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-card"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-medical-blue to-medical-teal flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Mission Statement</h2>
              <p className="text-slate-600 leading-relaxed">
                Our mission is to support and accelerate the growth of pioneering startups in 
                healthcare, wellness, life sciences, digital health, genomics, synthetic biology, 
                anti-aging, AI Robotics, medical devices, digital therapeutics, and medical data 
                analytics by providing comprehensive resources, expert mentorship, and strategic 
                partnerships. We aim to foster innovation, ensure product-market fit, and accelerate 
                market entry, ultimately improving healthcare outcomes and advancing the industry.
              </p>
            </motion.div>
          </div>

          {/* Founders */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-medical-teal/10 rounded-full mb-4">
                <Award className="w-4 h-4 text-medical-teal" />
                <span className="text-medical-teal font-medium text-sm">Leadership</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Our Founders</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {founders.map((member) => (
                <TeamMemberCard key={member.name} member={member} />
              ))}
            </div>
          </div>

          {/* Middle East Team */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-4">
                <Briefcase className="w-4 h-4 text-purple-600" />
                <span className="text-purple-600 font-medium text-sm">Middle East Team</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Our Middle East Team</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {middleEast.map((member) => (
                <TeamMemberCard key={member.name} member={member} />
              ))}
            </div>
          </div>

          {/* Volunteers */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-4">
                <Users className="w-4 h-4 text-green-600" />
                <span className="text-green-600 font-medium text-sm">Volunteers</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Our Volunteers</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {volunteers.map((member) => (
                <TeamMemberCard key={member.name} member={member} />
              ))}
            </div>
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

export default About;
