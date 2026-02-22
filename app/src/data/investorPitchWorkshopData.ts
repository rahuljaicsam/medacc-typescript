import { 
  Presentation, 
  Mic, 
  FileText, 
  Target, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Briefcase, 
  Award,
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
  quiz: QuizQuestion[];
  submissionRequired: boolean;
  submissionLabel: string;
  submissionPlaceholder: string;
}

export const investorPitchWorkshopData: Module[] = [
  {
    id: 1,
    title: "The Elevator Pitch",
    description: "Craft a 30-second verbal pitch that hooks investors.",
    icon: Mic,
    submissionRequired: true,
    submissionLabel: "Submit Elevator Pitch Script (PPT/PDF Link)",
    submissionPlaceholder: "Paste link to your 1-slide pitch script...",
    content: `
      <h2>The Hook</h2>
      <p>You have 30 seconds to get their attention. Focus on the problem, your solution, and the 'ask'.</p>
      
      <h3>Key Components</h3>
      <ul>
        <li><strong>Problem:</strong> What is broken?</li>
        <li><strong>Solution:</strong> How do you fix it?</li>
        <li><strong>Traction:</strong> Why you? Why now?</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "How long should an elevator pitch be?",
        options: ["5 minutes", "30-60 seconds", "1 hour", "10 seconds"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 2,
    title: "Problem & Solution Slide",
    description: "Clearly articulate the pain point and your remedy.",
    icon: Target,
    submissionRequired: true,
    submissionLabel: "Submit Problem/Solution Slides (PPT Link)",
    submissionPlaceholder: "Paste link to your slides...",
    content: `
      <h2>No Problem, No Business</h2>
      <p>Investors invest in solutions to painful problems. Make the problem feel real and urgent.</p>
      
      <h3>Slide Tips</h3>
      <ul>
        <li><strong>Problem:</strong> Use data or a story to illustrate the pain.</li>
        <li><strong>Solution:</strong> Show your product (screenshots/mockups).</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the most important part of the problem slide?",
        options: ["The background color", "Validating the pain point exists", "The font size", "Using complex jargon"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 3,
    title: "Market Size & Opportunity",
    description: "Define your TAM, SAM, and SOM.",
    icon: TrendingUp,
    submissionRequired: true,
    submissionLabel: "Submit Market Analysis Slide (PPT Link)",
    submissionPlaceholder: "Paste link to your slides...",
    content: `
      <h2>How Big is the Prize?</h2>
      <p>Show investors the potential return on investment. Be realistic but ambitious.</p>
      
      <h3>Definitions</h3>
      <ul>
        <li><strong>TAM (Total Addressable Market):</strong> Everyone you could theoretically reach.</li>
        <li><strong>SAM (Serviceable Available Market):</strong> The portion of TAM you can target.</li>
        <li><strong>SOM (Serviceable Obtainable Market):</strong> Who you can reach now.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "Which metric represents your immediate target market?",
        options: ["TAM", "SAM", "SOM", "ROI"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 4,
    title: "Business Model",
    description: "Explain how you make money.",
    icon: DollarSign,
    submissionRequired: true,
    submissionLabel: "Submit Business Model Slide (PPT Link)",
    submissionPlaceholder: "Paste link to your slides...",
    content: `
      <h2>Show Me the Money</h2>
      <p>How do you capture value? Subscription? Licensing? One-time sales?</p>
      
      <h3>Clarity is Key</h3>
      <ul>
        <li><strong>Pricing:</strong> What do you charge?</li>
        <li><strong>Margins:</strong> What is your cost structure?</li>
        <li><strong>Customer LTV:</strong> Lifetime value of a customer.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What does LTV stand for?",
        options: ["Long Term Vision", "Lifetime Value", "Last Time Viewed", "Legal Terms Validation"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 5,
    title: "Go-to-Market Strategy",
    description: "How will you acquire customers?",
    icon: Users,
    submissionRequired: true,
    submissionLabel: "Submit GTM Strategy Slide (PPT Link)",
    submissionPlaceholder: "Paste link to your slides...",
    content: `
      <h2>Acquisition Channels</h2>
      <p>Building it is not enough. How will they find you?</p>
      
      <h3>Strategies</h3>
      <ul>
        <li><strong>Direct Sales:</strong> B2B sales teams.</li>
        <li><strong>Digital Marketing:</strong> SEO, PPC, Social Media.</li>
        <li><strong>Partnerships:</strong> Channel partners/Distributors.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is a 'channel partner'?",
        options: ["A TV station", "A third party that sells your product", "A competitor", "A customer"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 6,
    title: "Competition & Moat",
    description: "Who else is doing this and why are you better?",
    icon: Briefcase,
    submissionRequired: true,
    submissionLabel: "Submit Competition Slide (PPT Link)",
    submissionPlaceholder: "Paste link to your slides...",
    content: `
      <h2>Differentiation</h2>
      <p>Acknowledge competitors but highlight your unique advantage (your 'moat').</p>
      
      <h3>Visuals</h3>
      <ul>
        <li><strong>Matrix:</strong> 2x2 grid showing your positioning.</li>
        <li><strong>Feature Table:</strong> Checklist comparing features.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "Why should you list competitors?",
        options: ["To advertise for them", "To show you understand the market", "You shouldn't", "To scare investors"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 7,
    title: "The Team",
    description: "Showcase why you are the right people to execute.",
    icon: Users,
    submissionRequired: true,
    submissionLabel: "Submit Team Slide (PPT Link)",
    submissionPlaceholder: "Paste link to your slides...",
    content: `
      <h2>Bet on the Jockey</h2>
      <p>Investors invest in people first. Highlight relevant experience and exits.</p>
      
      <h3>Include</h3>
      <ul>
        <li><strong>Founders:</strong> Key roles and background.</li>
        <li><strong>Advisors:</strong> Credible industry experts.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is arguably the most important slide for early-stage investors?",
        options: ["Appendix", "Team", "Disclaimer", "Thank you"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 8,
    title: "Financial Projections & Ask",
    description: "The numbers and the deal.",
    icon: TrendingUp,
    submissionRequired: true,
    submissionLabel: "Submit Financials & Ask Slide (PPT Link)",
    submissionPlaceholder: "Paste link to your slides...",
    content: `
      <h2>The Deal</h2>
      <p>How much are you raising and what will you achieve with it?</p>
      
      <h3>Components</h3>
      <ul>
        <li><strong>Projections:</strong> 3-5 year revenue forecast.</li>
        <li><strong>The Ask:</strong> Amount raising and instrument (Safe, Convertible Note, Equity).</li>
        <li><strong>Use of Funds:</strong> R&D, Hiring, Marketing.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What does 'Use of Funds' explain?",
        options: ["How you spent your allowance", "How you will spend the investment capital", "Your bank account number", "Your revenue"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 9,
    title: "The Full Pitch Deck",
    description: "Assemble the complete narrative.",
    icon: FileText,
    submissionRequired: true,
    submissionLabel: "Submit Complete Pitch Deck (PPT/PDF Link)",
    submissionPlaceholder: "Paste link to your full deck...",
    content: `
      <h2>Bring It All Together</h2>
      <p>Combine all slides into a cohesive story. Ensure consistent design and flow.</p>
      
      <h3>Final Polish</h3>
      <ul>
        <li><strong>Design:</strong> Professional and clean.</li>
        <li><strong>Story Arc:</strong> Does it flow logically?</li>
        <li><strong>Review:</strong> Get feedback before sending.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the ideal number of slides for a pitch deck?",
        options: ["50+", "10-15", "1-2", "100"],
        correctAnswer: 1
      }
    ]
  }
];
