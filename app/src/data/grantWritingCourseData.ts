import { 
  FileText, 
  DollarSign, 
  Search, 
  Target, 
  PenTool, 
  PieChart, 
  TrendingUp, 
  CheckCircle, 
  ClipboardList,
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
}

export const grantWritingCourseData: Module[] = [
  {
    id: 1,
    title: "Introduction to Non-Dilutive Funding",
    description: "What is non-dilutive funding and why is it the 'best money'?",
    icon: DollarSign,
    content: `
      <h2>Free Money?</h2>
      <p>Non-dilutive funding allows you to raise capital without giving up equity (ownership) in your company.</p>
      
      <h3>Sources of Non-Dilutive Funding</h3>
      <ul>
        <li><strong>Government Grants:</strong> SBIR/STTR (NIH, NSF, DOD).</li>
        <li><strong>Non-Profit Foundations:</strong> Disease-specific organizations (e.g., Michael J. Fox Foundation).</li>
        <li><strong>Tax Credits:</strong> R&D tax credits.</li>
        <li><strong>Competitions:</strong> Pitch competitions with cash prizes.</li>
      </ul>

      <h3>Pros and Cons</h3>
      <p><strong>Pros:</strong> No dilution, validation of technology. <strong>Cons:</strong> Time-consuming, competitive, strict reporting requirements.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the primary benefit of non-dilutive funding?",
        options: ["It's faster than VC money", "You don't give up equity", "There are no reporting requirements", "It's guaranteed"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 2,
    title: "Understanding SBIR/STTR Programs",
    description: "Deep dive into America's Seed Fund.",
    icon: Target,
    content: `
      <h2>SBIR vs. STTR</h2>
      <p>The Small Business Innovation Research (SBIR) and Small Business Technology Transfer (STTR) programs are competitive federal awards.</p>
      
      <h3>Key Differences</h3>
      <ul>
        <li><strong>SBIR:</strong> Allows the small business to do the majority of the work. Primary Investigator (PI) must be employed by the business.</li>
        <li><strong>STTR:</strong> Requires a partnership with a non-profit research institution (university). PI can be employed by the university.</li>
      </ul>

      <h3>Phases</h3>
      <ul>
        <li><strong>Phase I:</strong> Feasibility study (~$150k - $300k, 6-12 months).</li>
        <li><strong>Phase II:</strong> Prototype development (~$1M - $2M, 2 years).</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "Which program requires a formal partnership with a research institution?",
        options: ["SBIR", "STTR", "Both", "Neither"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 3,
    title: "Finding the Right Opportunity",
    description: "Navigating grants.gov and agency solicitations.",
    icon: Search,
    content: `
      <h2>Matching Your Tech to the Mission</h2>
      <p>Agencies fund research that aligns with their mission. The NIH focuses on health, the DOD on defense, and the NSF on fundamental science.</p>
      
      <h3>Solicitation Types</h3>
      <ul>
        <li><strong>Omnibus:</strong> Broad topics, investigator-initiated.</li>
        <li><strong>Targeted Solicitations:</strong> Specific requests for proposals (RFPs) on narrow topics.</li>
      </ul>

      <h3>Contacting Program Officers</h3>
      <p>Always talk to a Program Officer (PO) before applying. They can tell you if your project is a good fit.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Who should you contact to verify if your project fits the agency's goals?",
        options: ["The President", "A Program Officer (PO)", "Your Lawyer", "The IRS"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 4,
    title: "Writing the Specific Aims Page",
    description: "The most important page of your application.",
    icon: FileText,
    content: `
      <h2>The One-Page Pitch</h2>
      <p>The Specific Aims page is often the only part of the grant every reviewer reads carefully. It must sell the project.</p>
      
      <h3>Structure of a Great Aims Page</h3>
      <ol>
        <li><strong>The Hook:</strong> What is the critical unmet need?</li>
        <li><strong>The Solution:</strong> What is your innovation?</li>
        <li><strong>The Hypothesis:</strong> What do you expect to prove?</li>
        <li><strong>The Aims:</strong> Specific, measurable objectives (Aim 1, Aim 2, Aim 3).</li>
        <li><strong>Impact:</strong> What happens if you succeed?</li>
      </ol>
    `,
    quiz: [
      {
        id: 1,
        question: "What is considered the most important page of an NIH grant application?",
        options: ["Budget", "Biosketch", "Specific Aims", "Facilities"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 5,
    title: "Developing the Research Strategy",
    description: "Significance, Innovation, and Approach.",
    icon: PenTool,
    content: `
      <h2>The Meat of the Grant</h2>
      <p>This section details how you will carry out the work.</p>
      
      <h3>Scoring Criteria (NIH)</h3>
      <ul>
        <li><strong>Significance:</strong> Does this address an important problem?</li>
        <li><strong>Innovation:</strong> Are you shifting current paradigms?</li>
        <li><strong>Approach:</strong> Are your methods rigorous? Do you have alternative strategies for potential pitfalls?</li>
      </ul>

      <h3>Preliminary Data</h3>
      <p>Even for Phase I, having some preliminary data greatly increases your chances of winning.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Which section addresses potential pitfalls and alternative strategies?",
        options: ["Significance", "Innovation", "Approach", "Abstract"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 6,
    title: "Budgeting & Justification",
    description: "Asking for the right amount of money.",
    icon: PieChart,
    content: `
      <h2>Building the Budget</h2>
      <p>The budget must be realistic and align with the proposed work.</p>
      
      <h3>Direct vs. Indirect Costs</h3>
      <ul>
        <li><strong>Direct Costs:</strong> Salaries, equipment, supplies, consultants.</li>
        <li><strong>Indirect Costs (F&A):</strong> Overhead (rent, utilities, admin). SBIR allows for a negotiated indirect rate or a de minimis rate (usually 10% or 40%).</li>
      </ul>

      <h3>Budget Justification</h3>
      <p>A narrative explaining why you need every dollar requested. Don't pad the budget; reviewers will notice.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What type of costs cover overhead like rent and utilities?",
        options: ["Direct Costs", "Indirect Costs", "Sunk Costs", "Opportunity Costs"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 7,
    title: "The Commercialization Plan",
    description: "Proving that your science can become a business.",
    icon: TrendingUp,
    content: `
      <h2>Beyond the Science</h2>
      <p>SBIR is about commercialization. You must show a path to market.</p>
      
      <h3>Key Components</h3>
      <ul>
        <li><strong>Market Analysis:</strong> Size of the market and customer segments.</li>
        <li><strong>Competition:</strong> Who else is solving this problem?</li>
        <li><strong>IP Strategy:</strong> Do you have patents?</li>
        <li><strong>Revenue Model:</strong> How will you make money?</li>
        <li><strong>Team:</strong> Do you have business expertise, not just scientists?</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the ultimate goal of the SBIR program?",
        options: ["Basic Science", "Commercialization", "Academic Tenure", "Charity"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 8,
    title: "Submission Process & Compliance",
    description: "Navigating the bureaucratic maze (SAM.gov, eRA Commons).",
    icon: CheckCircle,
    content: `
      <h2>The Registration Gauntlet</h2>
      <p>Before you can submit, you need to register with multiple federal systems. This can take 6-8 weeks!</p>
      
      <h3>Required Registrations</h3>
      <ul>
        <li><strong>UEI (Unique Entity ID):</strong> Replaces the DUNS number.</li>
        <li><strong>SAM.gov:</strong> System for Award Management.</li>
        <li><strong>Grants.gov:</strong> The submission portal.</li>
        <li><strong>eRA Commons (NIH) or FastLane (NSF):</strong> Agency-specific portals.</li>
      </ul>

      <h3>Formatting</h3>
      <p>Follow font, margin, and page limit rules exactly. Non-compliance leads to administrative rejection.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "How long can the registration process for federal grants take?",
        options: ["1 day", "1 week", "6-8 weeks", "6 months"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 9,
    title: "Post-Award Management",
    description: "You won! Now what? Reporting and auditing.",
    icon: ClipboardList,
    content: `
      <h2>Managing the Money</h2>
      <p>Federal money comes with strings attached. You must track every penny.</p>
      
      <h3>Responsibilities</h3>
      <ul>
        <li><strong>Time & Effort Reporting:</strong> Tracking hours spent on the grant.</li>
        <li><strong>Drawdowns:</strong> Requesting funds from the payment management system.</li>
        <li><strong>Progress Reports:</strong> Periodic updates on scientific progress.</li>
        <li><strong>Audit Ready:</strong> Keep receipts and records organized.</li>
      </ul>

      <h3>The Phase II Transition</h3>
      <p>Start planning for Phase II immediately. Phase I is short!</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the process of tracking hours spent on the grant called?",
        options: ["Clocking in", "Time & Effort Reporting", "Timesheet Analysis", "Labor Accounting"],
        correctAnswer: 1
      }
    ]
  }
];
