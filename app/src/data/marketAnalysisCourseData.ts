import { 
  BarChart3, 
  Target, 
  PieChart, 
  Users, 
  Scale, 
  DollarSign, 
  Globe, 
  Search, 
  TrendingUp,
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

export const marketAnalysisCourseData: Module[] = [
  {
    id: 1,
    title: "Introduction to Biotech Market Analysis",
    description: "Fundamentals of market research specifically tailored for the biotechnology and life sciences sectors.",
    icon: Search,
    content: `
      <h2>Why Market Analysis Matters in Biotech</h2>
      <p>In the high-stakes world of biotechnology, understanding the market is as crucial as the science itself. Market analysis helps validate hypotheses, attract investors, and guide R&D decisions.</p>
      
      <h3>Key Components</h3>
      <ul>
        <li><strong>Disease Epidemiology:</strong> Understanding patient populations and disease prevalence.</li>
        <li><strong>Current Standard of Care:</strong> What treatments exist, and where do they fail?</li>
        <li><strong>Market Dynamics:</strong> Trends, drivers, and barriers in the healthcare landscape.</li>
      </ul>

      <h3>The Biotech Difference</h3>
      <p>Unlike consumer tech, biotech markets are driven by clinical data, regulatory approvals, and reimbursement landscapes, not just consumer preference.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is a primary driver of biotech market potential?",
        options: [
          "Social media trends",
          "Unmet medical needs and clinical data",
          "Celebrity endorsements",
          "Office location"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Which factor distinguishes biotech market analysis from general tech?",
        options: [
          "Faster development cycles",
          "Lower capital requirements",
          "Regulatory and reimbursement complexity",
          "Lack of competition"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 2,
    title: "Identifying Unmet Medical Needs",
    description: "Learn to identify and quantify gaps in current treatments to define your value proposition.",
    icon: Target,
    content: `
      <h2>Defining the Problem</h2>
      <p>An unmet medical need exists when current treatments are inadequate, non-existent, or too expensive. Successful biotech ventures start here.</p>
      
      <h3>Types of Unmet Needs</h3>
      <ul>
        <li><strong>Efficacy Gaps:</strong> Current drugs don't work well enough.</li>
        <li><strong>Safety Issues:</strong> Side effects limit the use of existing therapies.</li>
        <li><strong>Administration Burden:</strong> Daily injections vs. a once-a-month pill.</li>
      </ul>

      <h3>Quantifying the Need</h3>
      <p>Use epidemiological data to estimate how many patients are affected by these gaps. This forms the basis of your market sizing.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What constitutes an 'efficacy gap'?",
        options: [
          "The drug is too expensive",
          "The drug is hard to manufacture",
          "The drug does not sufficiently treat the condition",
          "The drug tastes bad"
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "Why is quantifying the unmet need important?",
        options: [
          "It determines the logo design",
          "It forms the basis of market sizing and revenue potential",
          "It helps in hiring staff",
          "It is required by the FDA for Phase 1"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 3,
    title: "Market Sizing: TAM, SAM, SOM",
    description: "Master the frameworks for estimating Total Addressable Market, Serviceable Available Market, and Serviceable Obtainable Market.",
    icon: PieChart,
    content: `
      <h2>The Market Sizing Funnel</h2>
      <p>Investors need to know the scale of the opportunity. We use three key metrics to define this.</p>
      
      <h3>TAM (Total Addressable Market)</h3>
      <p>The total market demand for a product or service. "Everyone with Type 2 Diabetes worldwide."</p>

      <h3>SAM (Serviceable Available Market)</h3>
      <p>The segment of the TAM targeted by your products and services which is within your geographical reach. "Type 2 Diabetes patients in the US and EU eligible for GLP-1 agonists."</p>

      <h3>SOM (Serviceable Obtainable Market)</h3>
      <p>The portion of SAM that you can capture. "The percentage of the US market we can reach with our sales force in year 3."</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What does TAM stand for?",
        options: [
          "Total Available Money",
          "Total Addressable Market",
          "Target Audience Metric",
          "Technical Analysis Method"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Which metric represents the market share you can realistically capture?",
        options: [
          "TAM",
          "SAM",
          "SOM",
          "ROI"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 4,
    title: "Competitive Landscape Analysis",
    description: "Analyze current competitors and emerging threats in the development pipeline.",
    icon: BarChart3,
    content: `
      <h2>Mapping the Competition</h2>
      <p>You are never operating in a vacuum. You must understand who else is solving the problem.</p>
      
      <h3>Direct vs. Indirect Competitors</h3>
      <ul>
        <li><strong>Direct:</strong> Companies developing the same mechanism of action (MoA).</li>
        <li><strong>Indirect:</strong> Alternative treatments (e.g., surgery vs. drug).</li>
      </ul>

      <h3>Pipeline Analysis</h3>
      <p>In biotech, your biggest threat might not be on the market yet. Analyze clinical trial databases (like ClinicalTrials.gov) to see what is coming in 5-10 years.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Where should you look to find future competitors in biotech?",
        options: [
          "Instagram",
          "Clinical trial registries",
          "Local newspapers",
          "TV commercials"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What is an indirect competitor to a new pain relief drug?",
        options: [
          "Another pain relief drug",
          "Physical therapy or surgery",
          "A vitamin supplement",
          "A diagnostic test"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 5,
    title: "Regulatory Pathway & Market Entry",
    description: "Understand how FDA/EMA regulations impact market timing and barriers to entry.",
    icon: Scale,
    content: `
      <h2>Regulation as a Market Barrier</h2>
      <p>Regulatory pathways dictate the time, cost, and probability of reaching the market.</p>
      
      <h3>Key Designations</h3>
      <ul>
        <li><strong>Orphan Drug:</strong> Market exclusivity incentives for rare diseases.</li>
        <li><strong>Breakthrough Therapy:</strong> Expedited development for drugs treating serious conditions.</li>
      </ul>

      <h3>Impact on Strategy</h3>
      <p>A longer regulatory timeline means a shorter window of patent protection before generics enter. This heavily influences pricing and ROI models.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the 'Orphan Drug' designation used for?",
        options: [
          "Drugs for children",
          "Drugs for rare diseases",
          "Generic drugs",
          "Over-the-counter medication"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "How does regulatory timeline affect market analysis?",
        options: [
          "It doesn't",
          "It impacts patent life and time-to-revenue",
          "It determines the color of the pill",
          "It only affects manufacturing"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 6,
    title: "Pricing and Reimbursement Strategies",
    description: "Navigate the complex world of payers, insurance coverage, and health economics.",
    icon: DollarSign,
    content: `
      <h2>Who Pays?</h2>
      <p>In healthcare, the patient rarely pays the full price. You must convince payers (insurance companies, governments) that your product is worth it.</p>
      
      <h3>Health Economics Outcomes Research (HEOR)</h3>
      <p>Demonstrating cost-effectiveness. Does your $50,000 drug save $100,000 in hospitalization costs?</p>

      <h3>Pricing Models</h3>
      <ul>
        <li><strong>Cost-plus:</strong> Production cost + margin (rare in innovation).</li>
        <li><strong>Value-based:</strong> Price based on the value provided to the system.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is HEOR used for?",
        options: [
          "Designing logos",
          "Demonstrating cost-effectiveness to payers",
          "Hiring sales reps",
          "Manufacturing planning"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Who is the primary 'payer' in most healthcare markets?",
        options: [
          "The patient",
          "The doctor",
          "Insurance companies and governments",
          "The pharmacist"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 7,
    title: "Customer Segmentation",
    description: "Identifying and profiling the key stakeholders: Patients, Providers, and Payers.",
    icon: Users,
    content: `
      <h2>The Three Ps</h2>
      <p>Biotech marketing is B2B2C. You must satisfy three distinct groups.</p>
      
      <h3>1. Providers (Doctors)</h3>
      <p>They prescribe the product. They care about efficacy, safety, and guidelines.</p>

      <h3>2. Payers (Insurance)</h3>
      <p>They pay for the product. They care about cost, budget impact, and population health.</p>

      <h3>3. Patients</h3>
      <p>They use the product. They care about quality of life, out-of-pocket costs, and convenience.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Which stakeholder is primarily responsible for prescribing the medication?",
        options: [
          "Payers",
          "Providers",
          "Patients",
          "Investors"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What is a key concern for Payers?",
        options: [
          "Molecular structure",
          "Budget impact and cost-effectiveness",
          "Packaging design",
          "Conference attendance"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 8,
    title: "SWOT Analysis for Biotech",
    description: "Conducting a comprehensive Strengths, Weaknesses, Opportunities, and Threats analysis.",
    icon: TrendingUp,
    content: `
      <h2>Strategic Planning with SWOT</h2>
      
      <h3>Internal Factors</h3>
      <ul>
        <li><strong>Strengths:</strong> Strong IP, experienced team, novel platform.</li>
        <li><strong>Weaknesses:</strong> Limited funding, single-asset risk, lack of manufacturing.</li>
      </ul>

      <h3>External Factors</h3>
      <ul>
        <li><strong>Opportunities:</strong> Aging population, new regulatory pathways, competitor failures.</li>
        <li><strong>Threats:</strong> Regulatory changes, new competitors, pricing pressure.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "In SWOT, what does 'Weakness' refer to?",
        options: [
          "External market threats",
          "Internal limitations or disadvantages",
          "Future opportunities",
          "Competitor strengths"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Is 'Regulatory Change' typically an Opportunity or a Threat?",
        options: [
          "Internal Strength",
          "Internal Weakness",
          "External Opportunity or Threat",
          "None of the above"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 9,
    title: "Building a Go-to-Market Strategy",
    description: "Synthesizing analysis into a cohesive plan for launch and commercialization.",
    icon: Globe,
    content: `
      <h2>From Lab to Launch</h2>
      <p>A Go-to-Market (GTM) strategy outlines how you will deliver your value proposition to customers.</p>
      
      <h3>Key Elements</h3>
      <ul>
        <li><strong>Positioning:</strong> How do you want the market to perceive your product?</li>
        <li><strong>Launch Sequencing:</strong> Which countries or indications come first?</li>
        <li><strong>Commercial Model:</strong> Direct sales force, partnership, or licensing?</li>
      </ul>

      <h3>The Launch Curve</h3>
      <p>Biotech launches are often slow ramps. Understanding adoption barriers is key to realistic forecasting.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is 'Positioning' in marketing?",
        options: [
          "Where the product is stored",
          "How the market perceives the product relative to competitors",
          "The GPS coordinates of the HQ",
          "The order of clinical trials"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What is a common commercial model for small biotechs lacking sales infrastructure?",
        options: [
          "Massive global hiring",
          "Licensing or partnering with big pharma",
          "Selling door-to-door",
          "Selling only online"
        ],
        correctAnswer: 1
      }
    ]
  }
];
