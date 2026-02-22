import { 
  Rocket, 
  Search, 
  FileSignature, 
  Globe, 
  Smartphone, 
  Printer, 
  BrainCircuit, 
  Bot, 
  ScrollText, 
  Presentation,
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
  submissionLabel?: string;
  submissionPlaceholder?: string;
}

export const startupProjectAcceleratorCourseData: Module[] = [
  {
    id: 1,
    title: "Market Research & Validation",
    description: "Validate your idea with real data.",
    icon: Search,
    submissionRequired: true,
    submissionLabel: "Submit Link to Market Research Report",
    submissionPlaceholder: "https://docs.google.com/document/d/...",
    content: `
      <h2>Is there a need?</h2>
      <p>Before building, you must validate. This module focuses on gathering primary and secondary data to prove your hypothesis.</p>
      
      <h3>Deliverables</h3>
      <ul>
        <li><strong>Problem Statement:</strong> clearly defined pain point.</li>
        <li><strong>TAM/SAM/SOM:</strong> Market size analysis.</li>
        <li><strong>Competitor Analysis:</strong> SWOT analysis of current solutions.</li>
        <li><strong>Customer Interviews:</strong> Insights from at least 10 potential users.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the most important outcome of market research?",
        options: ["A pretty report", "Validating or invalidating your hypothesis", "Finding investors", "Designing a logo"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 2,
    title: "Legal & Team Structure",
    description: "Agreements, Equity, and Roles.",
    icon: FileSignature,
    submissionRequired: true,
    submissionLabel: "Submit Link to Founder Agreements Folder",
    submissionPlaceholder: "https://drive.google.com/drive/folders/...",
    content: `
      <h2>Strong Foundations</h2>
      <p>Clear agreements prevent future conflict. Define roles, equity splits, and vesting schedules now.</p>
      
      <h3>Deliverables</h3>
      <ul>
        <li><strong>Co-founder Agreement:</strong> Roles, responsibilities, and equity split.</li>
        <li><strong>Vesting Schedule:</strong> Standard 4-year vesting with 1-year cliff.</li>
        <li><strong>IP Assignment:</strong> Ensuring the company owns the code/inventions.</li>
        <li><strong>Employee Agreements:</strong> Offer letters for early hires.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "Why is a vesting schedule important?",
        options: ["To save money", "To ensure long-term commitment from founders", "It is required by law", "To fire people easily"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 3,
    title: "Web MVP Development",
    description: "Launch your fully functional website.",
    icon: Globe,
    submissionRequired: true,
    submissionLabel: "Submit Live Website URL",
    submissionPlaceholder: "https://www.my-startup.com",
    content: `
      <h2>Your Digital Storefront</h2>
      <p>Build and deploy a functional website that explains your value prop and captures leads or users.</p>
      
      <h3>Requirements</h3>
      <ul>
        <li><strong>Landing Page:</strong> Clear hero section and CTA.</li>
        <li><strong>About/Team:</strong> Build trust.</li>
        <li><strong>Functional Form:</strong> Contact or Signup capability.</li>
        <li><strong>Responsive Design:</strong> Works on mobile and desktop.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the primary goal of an MVP website?",
        options: ["To look perfect", "To test the value proposition and gather leads", "To use the latest technology", "To have a blog"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 4,
    title: "Mobile App MVP",
    description: "Launch your fully functional mobile application.",
    icon: Smartphone,
    submissionRequired: true,
    submissionLabel: "Submit App Store Link or TestFlight/APK URL",
    submissionPlaceholder: "https://testflight.apple.com/join/...",
    content: `
      <h2>Mobile First</h2>
      <p>For many health solutions, a mobile app is key. Build a functional prototype or live app.</p>
      
      <h3>Requirements</h3>
      <ul>
        <li><strong>Core Feature:</strong> The main utility of your solution.</li>
        <li><strong>User Auth:</strong> Sign up / Sign in.</li>
        <li><strong>Data Persistence:</strong> Saving user data.</li>
        <li><strong>UI/UX:</strong> Intuitive navigation.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "Which feature is critical for a healthcare app MVP?",
        options: ["Dark mode", "User Authentication and Security", "Social sharing", "Gamification"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 5,
    title: "Medical Device Prototyping",
    description: "3D Print your medical device prototype.",
    icon: Printer,
    submissionRequired: true,
    submissionLabel: "Submit Link to CAD Files & Photos",
    submissionPlaceholder: "https://github.com/...",
    content: `
      <h2>Physical Innovation</h2>
      <p>Move from CAD to physical reality using 3D printing.</p>
      
      <h3>Requirements</h3>
      <ul>
        <li><strong>CAD Design:</strong> STL/OBJ files.</li>
        <li><strong>3D Print:</strong> Photo/Video of the printed object.</li>
        <li><strong>Functionality:</strong> Demonstration of the mechanism (if applicable).</li>
        <li><strong>Materials:</strong> Justification of material choice (even if printed in PLA for now).</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What file format is commonly used for 3D printing?",
        options: ["DOCX", "STL", "MP4", "JPG"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 6,
    title: "Healthcare AI/ML Model",
    description: "Train and deploy a machine learning model.",
    icon: BrainCircuit,
    submissionRequired: true,
    submissionLabel: "Submit Link to Notebook/Repo",
    submissionPlaceholder: "https://colab.research.google.com/...",
    content: `
      <h2>Intelligent Systems</h2>
      <p>Develop an AI model to solve a specific healthcare problem (e.g., diagnosis, risk prediction).</p>
      
      <h3>Requirements</h3>
      <ul>
        <li><strong>Dataset:</strong> Source and preprocessing description.</li>
        <li><strong>Model Architecture:</strong> Rationale for choice (CNN, RNN, Random Forest, etc.).</li>
        <li><strong>Training:</strong> Metrics (Accuracy, Sensitivity, Specificity).</li>
        <li><strong>Deployment:</strong> API or Interface to use the model.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "In healthcare AI, which metric is often more important than just accuracy?",
        options: ["Speed", "Sensitivity/Specificity (False Negatives/Positives)", "Color scheme", "Data size"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 7,
    title: "Healthcare Robotics",
    description: "Design and simulate a robotic system.",
    icon: Bot,
    submissionRequired: true,
    submissionLabel: "Submit Link to Simulation/Design",
    submissionPlaceholder: "https://...",
    content: `
      <h2>Automation & Assistance</h2>
      <p>Design a robotic system for surgery, rehabilitation, or hospital logistics.</p>
      
      <h3>Requirements</h3>
      <ul>
        <li><strong>Kinematics:</strong> Degrees of freedom analysis.</li>
        <li><strong>Control System:</strong> Logic for movement.</li>
        <li><strong>Simulation:</strong> ROS/Gazebo or physical prototype.</li>
        <li><strong>Safety:</strong> Human-robot interaction safety features.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is a key safety standard for medical robots?",
        options: ["ISO 9001", "IEC 60601 / ISO 13485", "HTML5", "GDPR"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 8,
    title: "Clinical Research Grant",
    description: "Write a grant for non-dilutive funding.",
    icon: ScrollText,
    submissionRequired: true,
    submissionLabel: "Submit Link to Grant Proposal (PDF)",
    submissionPlaceholder: "https://...",
    content: `
      <h2>Funding Science</h2>
      <p>Secure funding without giving up equity. Target SBIR/STTR or foundation grants.</p>
      
      <h3>Requirements</h3>
      <ul>
        <li><strong>Specific Aims:</strong> Clear objectives.</li>
        <li><strong>Significance:</strong> Why this matters.</li>
        <li><strong>Innovation:</strong> What is new.</li>
        <li><strong>Approach:</strong> Methodology.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What does 'Non-dilutive' funding mean?",
        options: ["Funding that dilutes equity", "Funding that does not require giving up equity", "Funding from family", "Funding from loans"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 9,
    title: "Pitch Deck & Fundraising",
    description: "The final pitch to investors.",
    icon: Presentation,
    submissionRequired: true,
    submissionLabel: "Submit Link to Pitch Deck",
    submissionPlaceholder: "https://...",
    content: `
      <h2>Tell Your Story</h2>
      <p>Synthesize everything into a compelling narrative for investors.</p>
      
      <h3>Slides Checklist</h3>
      <ul>
        <li><strong>Problem & Solution</strong></li>
        <li><strong>Market Size</strong></li>
        <li><strong>Product/Technology (The MVP)</strong></li>
        <li><strong>Traction (Validation)</strong></li>
        <li><strong>Team</strong></li>
        <li><strong>Ask</strong></li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the 'Ask' in a pitch deck?",
        options: ["Asking for advice", "The amount of money you are raising and terms", "Asking questions to the audience", "The Q&A session"],
        correctAnswer: 1
      }
    ]
  }
];
