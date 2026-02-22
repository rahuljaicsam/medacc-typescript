import { 
  DollarSign, 
  TrendingUp, 
  Users, 
  Presentation, 
  PieChart, 
  Calendar, 
  Search, 
  FileText, 
  MessageCircle,
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

export const startupFundraisingCourseData: Module[] = [
  {
    id: 1,
    title: "Fundraising Fundamentals",
    description: "Understand the basics of equity, debt, and when to raise capital.",
    icon: DollarSign,
    content: `
      <h2>To Raise or Not to Raise?</h2>
      <p>Fundraising is a means to an end, not the goal itself. Before seeking external capital, consider if your business model requires it.</p>
      
      <h3>Types of Capital</h3>
      <ul>
        <li><strong>Bootstrapping:</strong> Self-funding using personal savings or revenue. Retain 100% control but grow slower.</li>
        <li><strong>Equity Financing:</strong> Selling ownership stakes in exchange for capital. Accelerates growth but dilutes ownership.</li>
        <li><strong>Debt Financing:</strong> Borrowing money that must be repaid with interest. No dilution but requires cash flow for repayments.</li>
      </ul>

      <h3>The Venture Scale Model</h3>
      <p>VCs look for companies that can grow 10x-100x. If your business is a lifestyle business or service agency, venture capital might not be the right fit.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Which type of financing involves selling ownership stakes in your company?",
        options: ["Bootstrapping", "Debt Financing", "Equity Financing", "Grant Funding"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 2,
    title: "Investment Stages & Milestones",
    description: "Navigate the funding lifecycle from Pre-Seed to IPO.",
    icon: TrendingUp,
    content: `
      <h2>The Funding Lifecycle</h2>
      <p>Each stage of funding corresponds to specific milestones and risk levels.</p>
      
      <h3>Key Stages</h3>
      <ul>
        <li><strong>Pre-Seed:</strong> Idea stage. Funding used to build an MVP and validate the problem. (Typical raise: $100k - $1M)</li>
        <li><strong>Seed:</strong> Product-Market Fit (PMF) stage. You have a product and some users. Funding used to prove scalability. (Typical raise: $1M - $4M)</li>
        <li><strong>Series A:</strong> Growth stage. You have PMF and revenue. Funding used to scale operations and customer acquisition. (Typical raise: $5M - $15M+)</li>
      </ul>

      <h3>Valuation Triggers</h3>
      <p>Investors value your company based on team, market size, traction, and comparable exits in your industry.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "At which stage is the primary goal to build an MVP and validate the problem?",
        options: ["Series A", "Seed", "Pre-Seed", "IPO"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 3,
    title: "Investor Landscape",
    description: "Who are the investors? Angels, VCs, and Family Offices.",
    icon: Users,
    content: `
      <h2>Know Your Audience</h2>
      <p>Different investors have different motivations, check sizes, and decision processes.</p>
      
      <h3>Investor Types</h3>
      <ul>
        <li><strong>Angel Investors:</strong> High-net-worth individuals investing their own money. fast decisions, smaller checks ($10k - $100k).</li>
        <li><strong>Venture Capitalists (VCs):</strong> Professional firms investing other people's money (LPs). Strict criteria, larger checks, board seats.</li>
        <li><strong>Family Offices:</strong> Wealth management firms for ultra-high-net-worth families. Flexible mandates, patient capital.</li>
        <li><strong>Accelerators:</strong> Programs like Y Combinator that offer small capital and mentorship for equity (usually 7%).</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "Which type of investor invests their own personal money?",
        options: ["Venture Capitalist", "Angel Investor", "Limited Partner", "Family Office"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 4,
    title: "Building the Perfect Pitch Deck",
    description: "Crafting a narrative that compels investors to write a check.",
    icon: Presentation,
    content: `
      <h2>The 10-Slide Standard</h2>
      <p>Investors spend an average of 3 minutes per deck. Clarity and brevity are key.</p>
      
      <h3>Essential Slides</h3>
      <ol>
        <li><strong>Problem:</strong> What pain point are you solving?</li>
        <li><strong>Solution:</strong> How do you solve it?</li>
        <li><strong>Market:</strong> How big is the opportunity (TAM/SAM/SOM)?</li>
        <li><strong>Product:</strong> Show, don't just tell.</li>
        <li><strong>Traction:</strong> Revenue, users, partnerships.</li>
        <li><strong>Team:</strong> Why are you the right people to build this?</li>
        <li><strong>Competition:</strong> Why you win.</li>
        <li><strong>Business Model:</strong> How you make money.</li>
        <li><strong>Financials:</strong> Projections and burn rate.</li>
        <li><strong>Ask:</strong> How much are you raising and what for?</li>
      </ol>
    `,
    quiz: [
      {
        id: 1,
        question: "Which slide should explain how big the opportunity is?",
        options: ["Problem", "Solution", "Market", "Team"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 5,
    title: "Financial Modeling & Valuation",
    description: "Creating realistic projections and understanding valuation mechanics.",
    icon: PieChart,
    content: `
      <h2>Financial Projections</h2>
      <p>Investors don't expect your 5-year projections to be perfect, but they test your assumptions about growth drivers and costs.</p>
      
      <h3>Key Metrics</h3>
      <ul>
        <li><strong>Burn Rate:</strong> How much cash you spend per month.</li>
        <li><strong>Runway:</strong> How many months until you run out of cash.</li>
        <li><strong>CAC/LTV:</strong> Customer Acquisition Cost vs Lifetime Value.</li>
      </ul>

      <h3>Valuation Methods</h3>
      <p>For early-stage startups, valuation is often an art, not a science, based on negotiation, ownership targets (usually selling 15-25%), and market comps.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What metric measures how much cash a company spends per month?",
        options: ["Runway", "Burn Rate", "LTV", "Churn"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 6,
    title: "The Fundraising Process",
    description: "Managing the pipeline, timeline, and creating FOMO.",
    icon: Calendar,
    content: `
      <h2>Running a Tight Process</h2>
      <p>Treat fundraising like a sales funnel. You need top-of-funnel leads to get to a closed deal.</p>
      
      <h3>Stages of the Process</h3>
      <ol>
        <li><strong>Preparation (4-8 weeks):</strong> Deck, model, list of target investors.</li>
        <li><strong>Outreach (2-4 weeks):</strong> Warm intros are best. Cold emails work if personalized.</li>
        <li><strong>Meetings (4-8 weeks):</strong> Screening calls, partner meetings, deep dives.</li>
        <li><strong>Closing (4 weeks):</strong> Term sheet, due diligence, wiring funds.</li>
      </ol>

      <h3>Creating Momentum</h3>
      <p>Cluster your meetings to create a sense of urgency. "Fear Of Missing Out" (FOMO) drives faster decisions.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the most effective way to reach out to investors?",
        options: ["Cold Calling", "Warm Introductions", "Social Media Ads", "Fax"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 7,
    title: "Due Diligence Checklist",
    description: "Preparing for the deep dive into your business.",
    icon: Search,
    content: `
      <h2>Surviving Due Diligence</h2>
      <p>Once you get a term sheet, the real scrutiny begins. Have a "Data Room" ready.</p>
      
      <h3>What goes in a Data Room?</h3>
      <ul>
        <li><strong>Corporate:</strong> Incorporation docs, bylaws, cap table.</li>
        <li><strong>IP:</strong> Patents, trademarks, assignment agreements.</li>
        <li><strong>Financials:</strong> Bank statements, P&L, tax returns.</li>
        <li><strong>Legal:</strong> Customer contracts, employment agreements, leases.</li>
        <li><strong>Tech:</strong> Architecture diagrams, code reviews.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the secure online repository for documents called during due diligence?",
        options: ["Cloud Storage", "Data Room", "File Cabinet", "Tech Stack"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 8,
    title: "Term Sheets & Negotiation",
    description: "Decoding the legal terms: Economics vs Control.",
    icon: FileText,
    content: `
      <h2>The Term Sheet</h2>
      <p>A non-binding agreement outlining the basic terms of the investment.</p>
      
      <h3>Economic Terms</h3>
      <ul>
        <li><strong>Valuation:</strong> Pre-money vs Post-money.</li>
        <li><strong>Liquidation Preference:</strong> Who gets paid first in an exit? (Standard is 1x non-participating).</li>
        <li><strong>Option Pool:</strong> Shares set aside for future employees (usually comes out of pre-money valuation).</li>
      </ul>

      <h3>Control Terms</h3>
      <ul>
        <li><strong>Board Seats:</strong> Who controls the board?</li>
        <li><strong>Protective Provisions:</strong> Veto rights on major company decisions.</li>
        <li><strong>Drag-Along Rights:</strong> Forcing minority shareholders to sell in an acquisition.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "Which term dictates who gets paid first in an exit?",
        options: ["Valuation", "Option Pool", "Liquidation Preference", "Dividends"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 9,
    title: "Investor Relations",
    description: "Managing relationships post-investment for future success.",
    icon: MessageCircle,
    content: `
      <h2>Post-Investment Management</h2>
      <p>Your investors are your partners. Keep them engaged and informed.</p>
      
      <h3>Investor Updates</h3>
      <p>Send monthly or quarterly updates. Include:</p>
      <ul>
        <li><strong>Highlights:</strong> Key wins.</li>
        <li><strong>Lowlights:</strong> Challenges and bad news (share early!).</li>
        <li><strong>KPIs:</strong> Revenue, burn, runway.</li>
        <li><strong>Asks:</strong> How can they help? (Hiring, intros).</li>
      </ul>

      <h3>The Follow-On Round</h3>
      <p>Good investor relations are crucial for insider participation in your next funding round.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is a key component of a good investor update?",
        options: ["Only good news", "Asks for help", "Competitor gossip", "Detailed daily logs"],
        correctAnswer: 1
      }
    ]
  }
];
