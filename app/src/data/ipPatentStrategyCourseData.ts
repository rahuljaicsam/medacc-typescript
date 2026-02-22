import { 
  Scale, 
  Shield, 
  FileText, 
  Globe, 
  Search, 
  Handshake, 
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
}

export const ipPatentStrategyCourseData: Module[] = [
  {
    id: 1,
    title: "Introduction to Intellectual Property (IP)",
    description: "Understand the different types of IP and why they are critical for biotech ventures.",
    icon: Scale,
    content: `
      <h2>What is Intellectual Property?</h2>
      <p>Intellectual Property (IP) refers to creations of the mind, such as inventions; literary and artistic works; designs; and symbols, names, and images used in commerce.</p>
      
      <h3>Key Types of IP in Biotech</h3>
      <ul>
        <li><strong>Patents:</strong> Protect inventions and technical processes.</li>
        <li><strong>Trade Secrets:</strong> Protect confidential business information (e.g., formulations, manufacturing know-how).</li>
        <li><strong>Trademarks:</strong> Protect brand names and logos.</li>
        <li><strong>Copyrights:</strong> Protect written works, software code, and educational materials.</li>
      </ul>

      <h3>Why IP Matters for Startups</h3>
      <p>For biotech startups, IP is often the primary asset. It provides a competitive advantage, attracts investors, and enables licensing opportunities.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Which type of IP protects inventions and technical processes?",
        options: ["Copyrights", "Trademarks", "Patents", "Trade Secrets"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 2,
    title: "Patents: The Core of Biotech IP",
    description: "Deep dive into what patents are, their structure, and the rights they confer.",
    icon: Shield,
    content: `
      <h2>Understanding Patents</h2>
      <p>A patent is an exclusive right granted for an invention. It provides the patent owner with the right to decide how - or whether - the invention can be used by others.</p>
      
      <h3>Anatomy of a Patent</h3>
      <ul>
        <li><strong>Abstract:</strong> A brief summary of the invention.</li>
        <li><strong>Specification:</strong> Detailed description of the invention.</li>
        <li><strong>Claims:</strong> The legal definition of the invention's scope.</li>
        <li><strong>Drawings:</strong> Visual representations of the invention.</li>
      </ul>

      <h3>Patent Rights</h3>
      <p>A patent gives the owner the right to exclude others from making, using, selling, or importing the invention for a limited period (usually 20 years from the filing date).</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the standard term of a patent from the filing date?",
        options: ["10 years", "15 years", "20 years", "50 years"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 3,
    title: "Patentability Criteria & Prior Art",
    description: "Learn what makes an invention patentable and how to conduct a prior art search.",
    icon: Search,
    content: `
      <h2>Criteria for Patentability</h2>
      <p>To be patentable, an invention must meet three main criteria:</p>
      <ul>
        <li><strong>Novelty:</strong> The invention must be new and not known to the public before the filing date.</li>
        <li><strong>Non-Obviousness (Inventive Step):</strong> The invention must not be an obvious variation of existing technology to someone skilled in the field.</li>
        <li><strong>Utility (Industrial Applicability):</strong> The invention must have a specific and credible use.</li>
      </ul>

      <h3>Prior Art Search</h3>
      <p>Prior art includes any public knowledge, documents, or products that existed before your invention. Conducting a thorough search helps assess patentability and avoid infringement.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Which criterion requires the invention to be new and not previously known?",
        options: ["Utility", "Non-Obviousness", "Novelty", "Clarity"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 4,
    title: "The Patent Application Process",
    description: "Step-by-step guide to filing a patent application, from provisional to non-provisional.",
    icon: FileText,
    content: `
      <h2>Filing Strategies</h2>
      
      <h3>Provisional Application</h3>
      <p>A low-cost way to establish an early filing date. It does not require formal claims and is not examined. You have 12 months to file a non-provisional application claiming priority.</p>

      <h3>Non-Provisional Application</h3>
      <p>The formal application that is examined by the patent office. It must include claims and meet all legal requirements.</p>

      <h3>Prosecution</h3>
      <p>The process of negotiating with the patent office examiner. It involves responding to office actions and amending claims if necessary.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "How long do you have to file a non-provisional application after filing a provisional one?",
        options: ["6 months", "12 months", "18 months", "24 months"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 5,
    title: "International Patent Strategy (PCT)",
    description: "Expanding protection globally using the Patent Cooperation Treaty (PCT).",
    icon: Globe,
    content: `
      <h2>Going Global with PCT</h2>
      <p>The Patent Cooperation Treaty (PCT) allows you to seek patent protection for an invention simultaneously in a large number of countries by filing a single "international" patent application.</p>
      
      <h3>The PCT Process</h3>
      <ol>
        <li><strong>Filing:</strong> File an international application with a receiving office.</li>
        <li><strong>International Search:</strong> An International Searching Authority (ISA) identifies prior art.</li>
        <li><strong>International Publication:</strong> The application is published 18 months after the priority date.</li>
        <li><strong>National Phase:</strong> You must enter the national phase in individual countries (usually at 30 or 31 months) to pursue grant.</li>
      </ol>
    `,
    quiz: [
      {
        id: 1,
        question: "When does the National Phase entry typically occur?",
        options: ["12 months", "18 months", "24 months", "30/31 months"],
        correctAnswer: 3
      }
    ]
  },
  {
    id: 6,
    title: "Freedom to Operate (FTO) Analysis",
    description: "Ensuring your product doesn't infringe on existing patents.",
    icon: Search,
    content: `
      <h2>What is Freedom to Operate?</h2>
      <p>FTO analysis determines whether testing or commercializing a product can be done without infringing valid intellectual property rights of others.</p>
      
      <h3>Why FTO is Critical</h3>
      <p>Launching a product without FTO can lead to costly lawsuits, injunctions, and even the shutdown of your business. Investors will always ask about FTO.</p>

      <h3>Conducting an FTO Search</h3>
      <p>It involves searching for active patents in the jurisdictions where you plan to operate and analyzing their claims against your product.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the primary goal of an FTO analysis?",
        options: ["To get a patent granted", "To avoid infringing others' IP rights", "To find investors", "To market the product"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 7,
    title: "Trade Secrets vs. Patents",
    description: "Deciding when to patent and when to keep it a secret.",
    icon: Shield,
    content: `
      <h2>Trade Secrets</h2>
      <p>Information that is secret, has commercial value because it is secret, and has been subject to reasonable steps to keep it secret (e.g., the Coca-Cola formula).</p>
      
      <h3>Pros and Cons</h3>
      <table border="1" cellpadding="5">
        <tr>
          <th>Feature</th>
          <th>Patent</th>
          <th>Trade Secret</th>
        </tr>
        <tr>
          <td>Duration</td>
          <td>20 years</td>
          <td>Indefinite (as long as secret)</td>
        </tr>
        <tr>
          <td>Disclosure</td>
          <td>Public</td>
          <td>Secret</td>
        </tr>
        <tr>
          <td>Cost</td>
          <td>High</td>
          <td>Low (security costs)</td>
        </tr>
        <tr>
          <td>Protection</td>
          <td>Strong exclusive rights</td>
          <td>Weak against reverse engineering</td>
        </tr>
      </table>
    `,
    quiz: [
      {
        id: 1,
        question: "Which offers protection against reverse engineering?",
        options: ["Trade Secrets", "Patents", "Both", "Neither"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 8,
    title: "IP Licensing & Tech Transfer",
    description: "Monetizing your IP through licensing deals and university partnerships.",
    icon: Handshake,
    content: `
      <h2>Licensing Basics</h2>
      <p>A license is a contract transferring IP rights from the owner (licensor) to another party (licensee), usually in exchange for royalties or fees.</p>
      
      <h3>Types of Licenses</h3>
      <ul>
        <li><strong>Exclusive:</strong> Only the licensee can use the IP.</li>
        <li><strong>Non-Exclusive:</strong> The licensor can grant rights to multiple parties.</li>
        <li><strong>Sole:</strong> The licensor and one licensee can use the IP.</li>
      </ul>

      <h3>University Tech Transfer</h3>
      <p>Many biotech startups spin out of universities. Navigating the Tech Transfer Office (TTO) to license foundational IP is a critical early step.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "In which type of license can the licensor grant rights to multiple parties?",
        options: ["Exclusive", "Sole", "Non-Exclusive", "All of the above"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 9,
    title: "IP Strategy for Fundraising & Exit",
    description: "Aligning your IP strategy with business goals to maximize valuation.",
    icon: DollarSign,
    content: `
      <h2>IP Due Diligence</h2>
      <p>Investors will conduct thorough due diligence on your IP portfolio. They look for ownership, validity, enforceability, and FTO.</p>
      
      <h3>Building a Fence</h3>
      <p>A strong IP strategy involves building a "picket fence" of patents around your core technology to block competitors and increase valuation.</p>

      <h3>IP in M&A</h3>
      <p>In an acquisition, the IP portfolio is often the most valuable asset. Clean title and strong claims are essential for a successful exit.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What do investors look for during IP due diligence?",
        options: ["Ownership", "Validity", "FTO", "All of the above"],
        correctAnswer: 3
      }
    ]
  }
];
