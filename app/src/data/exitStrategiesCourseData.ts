import { 
  TrendingUp, 
  DollarSign, 
  Handshake, 
  Scale, 
  FileText, 
  Building, 
  PieChart, 
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
}

export const exitStrategiesCourseData: Module[] = [
  {
    id: 1,
    title: "Introduction to Exit Strategies",
    description: "Understanding M&A, IPOs, and when to sell.",
    icon: TrendingUp,
    content: `
      <h2>The End Game</h2>
      <p>Every startup journey eventually leads to an exit, a shutdown, or becoming a sustainable standalone company. Understanding your options early is crucial for strategic alignment.</p>
      
      <h3>Types of Exits</h3>
      <ul>
        <li><strong>Mergers & Acquisitions (M&A):</strong> Selling the company to a larger entity (Strategic or Financial Buyer).</li>
        <li><strong>Initial Public Offering (IPO):</strong> Listing shares on a public stock exchange.</li>
        <li><strong>Secondary Sale:</strong> Selling shares to private equity or other investors without a full exit.</li>
      </ul>

      <h3>Why Plan Early?</h3>
      <p>Exit planning affects hiring, fundraising, and product roadmap decisions years in advance.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is a 'Strategic Buyer' in an M&A context?",
        options: ["A private equity firm looking for financial return", "A competitor or company in a related industry looking for synergy", "A bank lending money", "An individual angel investor"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 2,
    title: "Preparing for an Exit",
    description: "Getting your house in order: Financials, IP, and Team.",
    icon: FileText,
    content: `
      <h2>Always Be Ready</h2>
      <p>The best time to sell is when you don't have to. Readiness maximizes leverage.</p>
      
      <h3>Key Preparation Steps</h3>
      <ul>
        <li><strong>Clean Cap Table:</strong> Resolve any equity disputes or complex convertible notes.</li>
        <li><strong>Audited Financials:</strong> Buyers need to trust your numbers (typically 2-3 years of audits).</li>
        <li><strong>Data Room:</strong> A secure repository of all due diligence documents (contracts, IP, HR).</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is a 'Data Room' in the context of an exit?",
        options: ["A server room", "A secure online repository for due diligence documents", "A meeting room for negotiations", "A place to store prototypes"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 3,
    title: "The M&A Process",
    description: "From Teaser to Letter of Intent (LOI).",
    icon: Handshake,
    content: `
      <h2>The Deal Funnel</h2>
      <p>Selling a company is a sales process. You need a pipeline of potential buyers.</p>
      
      <h3>Stages</h3>
      <ol>
        <li><strong>Teaser:</strong> An anonymous 1-2 page summary sent to potential acquirers.</li>
        <li><strong>NDA:</strong> Non-Disclosure Agreement signed before sharing sensitive info.</li>
        <li><strong>CIM (Confidential Information Memorandum):</strong> Detailed pitch deck.</li>
        <li><strong>IOI (Indication of Interest):</strong> Non-binding price range.</li>
        <li><strong>LOI (Letter of Intent):</strong> Formal offer outlining terms and exclusivity.</li>
      </ol>
    `,
    quiz: [
      {
        id: 1,
        question: "What document typically follows the NDA and provides detailed company information?",
        options: ["Teaser", "CIM (Confidential Information Memorandum)", "Invoice", "Press Release"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 4,
    title: "Valuation Methods",
    description: "How much is your company worth?",
    icon: DollarSign,
    content: `
      <h2>Art and Science</h2>
      <p>Valuation is ultimately what a buyer is willing to pay, but models help justify the price.</p>
      
      <h3>Common Methodologies</h3>
      <ul>
        <li><strong>DCF (Discounted Cash Flow):</strong> Present value of future cash flows.</li>
        <li><strong>Comparable Company Analysis (Comps):</strong> Valuing based on public competitors' multiples (e.g., EV/Revenue).</li>
        <li><strong>Precedent Transactions:</strong> What similar companies have sold for recently.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "Which valuation method looks at recent acquisitions of similar companies?",
        options: ["DCF", "Precedent Transactions", "Book Value", "Liquidation Value"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 5,
    title: "Deal Structure & Negotiation",
    description: "Cash vs. Stock, Earnouts, and Escrows.",
    icon: Scale,
    content: `
      <h2>Price is vanity, terms are sanity</h2>
      <p>The headline price often differs from what ends up in your bank account.</p>
      
      <h3>Key Terms</h3>
      <ul>
        <li><strong>Consideration:</strong> Cash (immediate liquidity) vs. Stock (betting on the acquirer).</li>
        <li><strong>Earnout:</strong> Additional payments contingent on future performance (risky for sellers).</li>
        <li><strong>Escrow/Holdback:</strong> Money held back for 12-24 months to cover potential post-closing liabilities.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is an 'Earnout'?",
        options: ["A bonus for signing", "Payments contingent on achieving future performance milestones", "Money paid to lawyers", "The exit fee"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 6,
    title: "The IPO Journey",
    description: "Going public: Bankers, S-1, and the Roadshow.",
    icon: Building,
    content: `
      <h2>Ring the Bell</h2>
      <p>An IPO is a financing event, not just an exit. It brings capital, prestige, and scrutiny.</p>
      
      <h3>The Process</h3>
      <ul>
        <li><strong>Select Underwriters:</strong> Investment banks that sell the shares.</li>
        <li><strong>S-1 Filing:</strong> The prospectus filed with the SEC disclosing everything.</li>
        <li><strong>Roadshow:</strong> Pitching to institutional investors to build the 'book'.</li>
        <li><strong>Pricing:</strong> Setting the opening share price.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the primary document filed with the SEC for an IPO?",
        options: ["10-K", "S-1", "W-2", "NDA"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 7,
    title: "Post-Merger Integration (PMI)",
    description: "What happens after the deal closes.",
    icon: PieChart,
    content: `
      <h2>Where Value is Created or Destroyed</h2>
      <p>Many M&A deals fail due to poor integration.</p>
      
      <h3>Integration Areas</h3>
      <ul>
        <li><strong>Culture:</strong> Merging different working styles and values.</li>
        <li><strong>Systems:</strong> Migrating IT, HR, and Finance platforms.</li>
        <li><strong>Synergies:</strong> Realizing the promised cost savings or revenue boosts.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is a common reason for M&A failure?",
        options: ["Paying too little", "Poor Post-Merger Integration (PMI)", "Too much due diligence", "Signing the contract too fast"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 8,
    title: "Legal & Regulatory Considerations",
    description: "Antitrust, SEC, and Shareholder Approval.",
    icon: Briefcase,
    content: `
      <h2>Clearing the Hurdles</h2>
      <p>Large deals face scrutiny from regulators.</p>
      
      <h3>Key Regulations</h3>
      <ul>
        <li><strong>HSR Act (Antitrust):</strong> Large deals must be reported to the FTC/DOJ to ensure they don't create monopolies.</li>
        <li><strong>Shareholder Approval:</strong> Majority (or supermajority) of shareholders must vote for the deal.</li>
        <li><strong>CFIUS:</strong> Reviews foreign investment in US companies for national security risks.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the main purpose of the HSR Act review?",
        options: ["To tax the deal", "To prevent monopolies (Antitrust)", "To approve the logo", "To set the stock price"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 9,
    title: "Life After Exit",
    description: "Lock-ups, Wealth Management, and Next Ventures.",
    icon: Award,
    content: `
      <h2>What's Next?</h2>
      <p>An exit is a life-changing event. Managing the transition is personal and professional.</p>
      
      <h3>Considerations</h3>
      <ul>
        <li><strong>Lock-up Period:</strong> Usually 180 days after IPO where insiders cannot sell shares.</li>
        <li><strong>Golden Handcuffs:</strong> Retention packages that keep founders at the acquirer for 2-4 years.</li>
        <li><strong>Wealth Management:</strong> Tax planning and diversification of newfound wealth.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is a 'Lock-up Period' in an IPO?",
        options: ["Time you spend in jail", "A period where insiders cannot sell their shares", "When the office is closed", "A secure data room"],
        correctAnswer: 1
      }
    ]
  }
];
