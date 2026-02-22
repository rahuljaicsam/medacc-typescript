import { 
  Handshake, 
  Building, 
  Users, 
  Globe, 
  Search, 
  FileText, 
  Briefcase, 
  TrendingUp, 
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

export const strategicPartnershipsCourseData: Module[] = [
  {
    id: 1,
    title: "The Power of Partnerships",
    description: "Why strategic partnerships are critical for scaling in biotech and medtech.",
    icon: Handshake,
    content: `
      <h2>Why Partner?</h2>
      <p>In the life sciences, going it alone is rarely an option. Partnerships provide access to capital, expertise, distribution channels, and validation.</p>
      
      <h3>Types of Partners</h3>
      <ul>
        <li><strong>Pharma/Medtech Giants:</strong> Provide funding, clinical trial infrastructure, and commercialization muscle.</li>
        <li><strong>Research Institutions/Universities:</strong> Sources of foundational IP and scientific talent.</li>
        <li><strong>CROs/CMOs:</strong> Outsourced partners for clinical trials and manufacturing.</li>
        <li><strong>Patient Advocacy Groups:</strong> Critical for patient recruitment and regulatory support.</li>
      </ul>

      <h3>Build vs. Buy vs. Partner</h3>
      <p>Before partnering, evaluate if you should build the capability internally, acquire it, or partner for it.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Which partner type is most likely to provide clinical trial infrastructure and commercialization support?",
        options: ["Research Universities", "Pharma/Medtech Giants", "Angel Investors", "Startups"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 2,
    title: "Identifying the Right Partners",
    description: "How to scout and evaluate potential partners that align with your strategic goals.",
    icon: Search,
    content: `
      <h2>Scouting Strategy</h2>
      <p>Don't just wait for partners to come to you. Be proactive.</p>
      
      <h3>Criteria for Selection</h3>
      <ul>
        <li><strong>Strategic Fit:</strong> Do their goals align with yours? (e.g., Are they expanding into your therapeutic area?)</li>
        <li><strong>Capabilities:</strong> Do they have the resources you lack?</li>
        <li><strong>Culture:</strong> Can you work together effectively?</li>
        <li><strong>Track Record:</strong> How have they treated past partners?</li>
      </ul>

      <h3>Tools for Scouting</h3>
      <p>Conferences (BIO, JP Morgan), scientific publications, and patent databases are great places to find potential partners.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is a key criterion when selecting a partner?",
        options: ["Office Location", "Strategic Fit", "Logo Color", "Social Media Follower Count"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 3,
    title: "Structuring the Deal",
    description: "Understanding different partnership models: Licensing, Co-development, and Joint Ventures.",
    icon: Building,
    content: `
      <h2>Deal Structures</h2>
      <p>One size does not fit all. The structure should reflect the goals and risk tolerance of both parties.</p>
      
      <h3>Common Models</h3>
      <ul>
        <li><strong>Licensing:</strong> Granting rights to use your IP in exchange for upfront payments, milestones, and royalties.</li>
        <li><strong>Co-Development:</strong> Sharing costs and risks of development, often splitting future profits.</li>
        <li><strong>Joint Venture (JV):</strong> Creating a new, separate entity owned by both partners.</li>
        <li><strong>M&A Option:</strong> A partnership that includes an option for the partner to acquire your company later.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "Which model involves creating a new, separate entity owned by both partners?",
        options: ["Licensing", "Co-Development", "Joint Venture", "M&A"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 4,
    title: "Negotiating Terms",
    description: "Key terms to master: Economics, Governance, and Termination.",
    icon: FileText,
    content: `
      <h2>The Term Sheet</h2>
      <p>Negotiation is about creating value, not just dividing the pie.</p>
      
      <h3>Key Economic Terms</h3>
      <ul>
        <li><strong>Upfront Payment:</strong> Cash paid at signing.</li>
        <li><strong>Milestones:</strong> Payments triggered by success (e.g., FDA approval).</li>
        <li><strong>Royalties:</strong> Percentage of sales paid to the licensor.</li>
      </ul>

      <h3>Governance</h3>
      <p>Who makes decisions? typically managed by a Joint Steering Committee (JSC) with equal representation.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is a payment triggered by a specific success event called?",
        options: ["Upfront Payment", "Retainer", "Milestone", "Royalty"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 5,
    title: "University & Academic Partnerships",
    description: "Navigating Tech Transfer Offices and sponsored research agreements.",
    icon: Award,
    content: `
      <h2>Working with Academia</h2>
      <p>Universities are innovation hubs but operate differently than corporations.</p>
      
      <h3>Tech Transfer Offices (TTOs)</h3>
      <p>TTOs manage the university's IP. They focus on protecting the university's rights and ensuring public benefit.</p>

      <h3>Sponsored Research Agreements (SRAs)</h3>
      <p>Funding a specific lab to conduct research relevant to your company. Ensure you own or have an exclusive option to license the resulting IP.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What office manages a university's intellectual property?",
        options: ["Admissions Office", "Tech Transfer Office (TTO)", "Alumni Association", "Dean's Office"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 6,
    title: "Alliance Management",
    description: "The art of keeping the partnership healthy and productive after the deal is signed.",
    icon: Users,
    content: `
      <h2>Post-Deal Success</h2>
      <p>The deal signing is just the beginning. 50% of alliances fail due to poor management.</p>
      
      <h3>Role of the Alliance Manager</h3>
      <p>A dedicated person responsible for the health of the relationship. They navigate conflicts, ensure communication, and track obligations.</p>

      <h3>Best Practices</h3>
      <ul>
        <li>Regular governance meetings (JSC).</li>
        <li>Transparent communication.</li>
        <li>Defining clear metrics for success.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is a primary reason for alliance failure?",
        options: ["Too much money", "Poor management", "Rapid success", "Perfect technology"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 7,
    title: "Global Partnerships",
    description: "Expanding into new markets like China, Europe, and Japan through regional partners.",
    icon: Globe,
    content: `
      <h2>Going Global</h2>
      <p>Regional partners provide local expertise, regulatory know-how, and market access.</p>
      
      <h3>Regional Considerations</h3>
      <ul>
        <li><strong>China:</strong> fast-growing market but requires careful IP protection and navigation of local regulations (NMPA).</li>
        <li><strong>Europe:</strong> Fragmented market with different payers in each country.</li>
        <li><strong>Japan:</strong> High value on long-term relationships and quality; PMDA regulatory pathway.</li>
      </ul>

      <h3>Rights Splitting</h3>
      <p>You can license rights for specific territories (e.g., "Asia Rights") while retaining others (e.g., "US/EU Rights").</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is a key benefit of regional partners?",
        options: ["Cheaper labor", "Local market expertise and regulatory know-how", "Less paperwork", "None of the above"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 8,
    title: "Navigating Conflict & Termination",
    description: "What happens when things go wrong? Dispute resolution and exit strategies.",
    icon: TrendingUp,
    content: `
      <h2>Managing Conflict</h2>
      <p>Disputes are inevitable. Have a process.</p>
      
      <h3>Escalation Steps</h3>
      <ol>
        <li><strong>Alliance Managers:</strong> Try to resolve at the working level.</li>
        <li><strong>Joint Steering Committee (JSC):</strong> Senior leaders attempt resolution.</li>
        <li><strong>Executive Escalation:</strong> CEOs meet.</li>
        <li><strong>Mediation/Arbitration:</strong> Third-party resolution.</li>
      </ol>

      <h3>Termination</h3>
      <p>Understand "Termination for Cause" (breach of contract) vs. "Termination for Convenience" (partner walks away).</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is usually the first step in resolving a partnership dispute?",
        options: ["Lawsuit", "CEO meeting", "Alliance Managers/Working Level", "Arbitration"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 9,
    title: "Strategic Partnerships for Exit",
    description: "How partnerships can lead to M&A or IPO success.",
    icon: Briefcase,
    content: `
      <h2>Partnerships as a Stepping Stone</h2>
      <p>A successful partnership validates your technology and often puts you on the radar for an acquisition.</p>
      
      <h3>The "Try Before You Buy" Model</h3>
      <p>Big pharma often uses partnerships to test a technology before acquiring the whole company.</p>

      <h3>Signaling Value</h3>
      <p>A deal with a top-tier partner signals to IPO investors that your science is validated by industry experts.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "How do partnerships influence IPO investors?",
        options: ["They scare them away", "They provide validation of the technology", "They have no impact", "They decrease valuation"],
        correctAnswer: 1
      }
    ]
  }
];
