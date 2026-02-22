import { 
  Scale, 
  FileText, 
  Shield, 
  Briefcase, 
  Users, 
  Building, 
  Gavel, 
  AlertTriangle, 
  Globe,
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

export const legalGeneralKnowledgeCourseData: Module[] = [
  {
    id: 1,
    title: "Business Structures & Entity Formation",
    description: "Choosing the right legal structure for your startup (LLC, C-Corp, etc.).",
    icon: Building,
    content: `
      <h2>Choosing the Right Entity</h2>
      <p>The legal structure you choose impacts your liability, taxation, and ability to raise capital.</p>
      
      <h3>Common Structures</h3>
      <ul>
        <li><strong>Sole Proprietorship:</strong> Easiest to form, but no liability protection.</li>
        <li><strong>LLC (Limited Liability Company):</strong> Flexible, protects personal assets, pass-through taxation.</li>
        <li><strong>C-Corporation:</strong> Standard for venture-backed startups. Double taxation but allows for different classes of stock.</li>
        <li><strong>S-Corporation:</strong> Tax status for corporations to avoid double taxation, but with strict ownership rules.</li>
      </ul>

      <h3>Why C-Corps for Startups?</h3>
      <p>Investors prefer C-Corps because they allow for preferred stock, are familiar legal entities, and avoid unrelated business taxable income (UBTI) for tax-exempt investors.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Which business structure is typically preferred by venture capitalists?",
        options: ["Sole Proprietorship", "LLC", "C-Corporation", "Non-Profit"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 2,
    title: "Contracts 101 for Entrepreneurs",
    description: "Essential elements of a valid contract and key clauses to watch out for.",
    icon: FileText,
    content: `
      <h2>Elements of a Contract</h2>
      <p>A legally binding contract requires: Offer, Acceptance, Consideration (value exchanged), Capacity, and Legality.</p>
      
      <h3>Key Clauses</h3>
      <ul>
        <li><strong>Confidentiality (NDA):</strong> Protects sensitive information.</li>
        <li><strong>Indemnification:</strong> One party agrees to compensate the other for certain damages.</li>
        <li><strong>Limitation of Liability:</strong> Caps the amount one party has to pay in damages.</li>
        <li><strong>Termination:</strong> Conditions under which the contract can be ended.</li>
      </ul>

      <h3>Common Startup Contracts</h3>
      <p>NDAs, Employment Agreements, Independent Contractor Agreements, and Service Level Agreements (SLAs).</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What element refers to the value exchanged in a contract?",
        options: ["Offer", "Acceptance", "Consideration", "Capacity"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 3,
    title: "Intellectual Property Basics",
    description: "Overview of Patents, Trademarks, Copyrights, and Trade Secrets.",
    icon: Shield,
    content: `
      <h2>Protecting Your Ideas</h2>
      <p>Intellectual Property (IP) is often a startup's most valuable asset.</p>
      
      <h3>Types of IP</h3>
      <ul>
        <li><strong>Patents:</strong> Inventions and processes (20 years protection).</li>
        <li><strong>Trademarks:</strong> Brand names, logos, slogans.</li>
        <li><strong>Copyrights:</strong> Original works of authorship (code, content).</li>
        <li><strong>Trade Secrets:</strong> Confidential business information (e.g., algorithms, customer lists).</li>
      </ul>

      <h3>IP Assignment</h3>
      <p>Ensure all founders and employees sign IP assignment agreements (PIIIAs) to transfer ownership of their work to the company.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Which type of IP protects brand names and logos?",
        options: ["Patents", "Copyrights", "Trademarks", "Trade Secrets"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 4,
    title: "Employment Law Essentials",
    description: "Hiring, firing, and the difference between employees and contractors.",
    icon: Users,
    content: `
      <h2>Hiring Compliance</h2>
      <p>Navigating employment laws is critical to avoid lawsuits and penalties.</p>
      
      <h3>Employee vs. Contractor</h3>
      <p>Misclassification is a major risk. Contractors control how they work; employees are directed by the employer. Misclassification can lead to back taxes and fines.</p>

      <h3>At-Will Employment</h3>
      <p>In the US, most employment is "at-will," meaning either party can terminate the relationship at any time for any legal reason.</p>

      <h3>Key Documents</h3>
      <p>Offer Letters, Employee Handbooks, and PIIIAs.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the main risk of misclassifying an employee as a contractor?",
        options: ["Lower productivity", "Tax penalties and fines", "Higher wages", "Too much paperwork"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 5,
    title: "Corporate Governance",
    description: "Managing a board of directors, shareholder meetings, and fiduciary duties.",
    icon: Gavel,
    content: `
      <h2>Running a Corporation</h2>
      <p>Corporate governance involves the rules and practices by which a company is directed and controlled.</p>
      
      <h3>Key Roles</h3>
      <ul>
        <li><strong>Shareholders:</strong> Owners of the company.</li>
        <li><strong>Board of Directors:</strong> Elected by shareholders to oversee management.</li>
        <li><strong>Officers:</strong> (CEO, CFO, CTO) Run day-to-day operations.</li>
      </ul>

      <h3>Fiduciary Duties</h3>
      <p>Directors and officers owe duties of Care (make informed decisions) and Loyalty (act in the company's best interest) to the corporation.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Who is responsible for overseeing the management of a corporation?",
        options: ["Shareholders", "Board of Directors", "Employees", "Customers"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 6,
    title: "Fundraising & Securities Law",
    description: "Legal aspects of raising capital: SAFEs, Convertible Notes, and Equity.",
    icon: Briefcase,
    content: `
      <h2>Raising Capital Legally</h2>
      <p>Selling shares in your company involves complying with securities laws (SEC regulations).</p>
      
      <h3>Investment Instruments</h3>
      <ul>
        <li><strong>SAFE (Simple Agreement for Future Equity):</strong> Standard for early-stage startups (Y Combinator model).</li>
        <li><strong>Convertible Note:</strong> Debt that converts to equity at a later date.</li>
        <li><strong>Priced Round:</strong> Selling equity at a fixed valuation (Series A).</li>
      </ul>

      <h3>Accredited Investors</h3>
      <p>Generally, startups can only raise money from accredited investors (high net worth individuals or institutions) to avoid complex public offering requirements.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What does SAFE stand for in startup fundraising?",
        options: ["Secure Asset for Equity", "Simple Agreement for Future Equity", "Standard Agreement for Enterprise", "Safe Asset Fund Exchange"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 7,
    title: "Data Privacy & Security (GDPR/CCPA)",
    description: "Compliance with global data protection regulations.",
    icon: Globe,
    content: `
      <h2>Data Privacy Laws</h2>
      <p>If you handle user data, you must comply with privacy laws.</p>
      
      <h3>Key Regulations</h3>
      <ul>
        <li><strong>GDPR (Europe):</strong> Strict rules on data consent, access, and deletion. Applies to any company serving EU citizens.</li>
        <li><strong>CCPA/CPRA (California):</strong> Gives California residents rights over their personal data.</li>
      </ul>

      <h3>Compliance Steps</h3>
      <p>Privacy Policy, Cookie Consent, Data Mapping, and appointing a Data Protection Officer (if required).</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Which regulation applies to companies handling data of EU citizens?",
        options: ["HIPAA", "CCPA", "GDPR", "FERPA"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 8,
    title: "Regulatory Compliance in Healthcare",
    description: "Overview of FDA, HIPAA, and other healthcare-specific regulations.",
    icon: AlertTriangle,
    content: `
      <h2>Healthcare is Highly Regulated</h2>
      <p>Biotech and healthtech startups face additional layers of regulation.</p>
      
      <h3>Key Agencies & Laws</h3>
      <ul>
        <li><strong>FDA (Food & Drug Administration):</strong> Regulates drugs, medical devices, and biologics.</li>
        <li><strong>HIPAA (Health Insurance Portability and Accountability Act):</strong> Protects patient health information (PHI).</li>
        <li><strong>Stark Law & Anti-Kickback Statute:</strong> Prevent fraud and abuse in healthcare referrals.</li>
      </ul>

      <h3>Quality Systems</h3>
      <p>Medical device companies often need ISO 13485 certification for their Quality Management Systems.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Which US law primarily protects patient health information?",
        options: ["GDPR", "HIPAA", "FDA Act", "Affordable Care Act"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 9,
    title: "Dispute Resolution & Litigation",
    description: "How to handle legal disputes: Negotiation, Mediation, Arbitration, and Court.",
    icon: Scale,
    content: `
      <h2>When Things Go Wrong</h2>
      <p>Disputes are inevitable. Knowing how to resolve them efficiently is key.</p>
      
      <h3>Methods of Resolution</h3>
      <ul>
        <li><strong>Negotiation:</strong> Direct discussion between parties.</li>
        <li><strong>Mediation:</strong> A neutral third party helps facilitate a settlement.</li>
        <li><strong>Arbitration:</strong> A private judge makes a binding decision (often faster/cheaper than court).</li>
        <li><strong>Litigation:</strong> Filing a lawsuit in court (public, expensive, time-consuming).</li>
      </ul>

      <h3>Governing Law Clause</h3>
      <p>Contracts should specify which state's laws apply and where disputes will be resolved.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Which dispute resolution method involves a private judge making a binding decision?",
        options: ["Mediation", "Negotiation", "Arbitration", "Litigation"],
        correctAnswer: 2
      }
    ]
  }
];
