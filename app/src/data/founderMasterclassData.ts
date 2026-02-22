import { 
  User, 
  Phone, 
  Mail, 
  Calendar, 
  Video,
  type LucideIcon 
} from 'lucide-react';

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Module {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  content: string;
  quiz: QuizQuestion[]; // Keeping structure consistent, though maybe not needed for this
  doctorName: string;
  phoneNumber: string;
  email: string;
  calendarLink: string;
}

export const founderMasterclassData: Module[] = [
  {
    id: 1,
    title: "Session with Dr. Rahul Jaic Sam",
    description: "1-on-1 Mentorship & Strategic Guidance",
    icon: User,
    doctorName: "Dr. Rahul Jaic Sam",
    phoneNumber: "+1 (555) 010-1001", // Placeholder
    email: "rahul.jaicsam@medacc.com", // Placeholder
    calendarLink: "https://calendly.com/dr-rahul-medacc", // Placeholder
    content: `
      <h2>Mentorship Focus</h2>
      <p>Dr. Rahul specializes in clinical validation, strategic partnerships, and medical affairs. Use this session to discuss:</p>
      <ul>
        <li>Clinical trial design and feasibility</li>
        <li>Navigating hospital procurement</li>
        <li>Medical advisory board formation</li>
      </ul>
      <h3>Session Preparation</h3>
      <p>Please send your pitch deck and specific questions 24 hours in advance.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the best way to prepare for the session?",
        options: ["Show up late", "Send materials in advance", "Don't have questions", "Wing it"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 2,
    title: "Session with Dr. Raju",
    description: "Technical & Operational Advisory",
    icon: User,
    doctorName: "Dr. Raju",
    phoneNumber: "+1 (555) 010-2002", // Placeholder
    email: "raju@medacc.com", // Placeholder
    calendarLink: "https://calendly.com/dr-raju-medacc", // Placeholder
    content: `
      <h2>Mentorship Focus</h2>
      <p>Dr. Raju provides deep insights into technical feasibility, product development, and operations. Focus areas include:</p>
      <ul>
        <li>Prototype engineering challenges</li>
        <li>Regulatory pathway strategy (FDA/CE)</li>
        <li>Operational scaling and manufacturing</li>
      </ul>
      <h3>Session Preparation</h3>
      <p>Have your technical specifications and roadmap ready for review.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is a key focus area for Dr. Raju?",
        options: ["Marketing slogans", "Technical & Operational Advisory", "Office decoration", "Party planning"],
        correctAnswer: 1
      }
    ]
  }
];
