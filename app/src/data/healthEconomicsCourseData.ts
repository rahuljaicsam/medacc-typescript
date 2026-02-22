import { type LucideIcon, TrendingUp, DollarSign, Activity, FileText, PieChart, Globe, Briefcase, Shield, BarChart } from 'lucide-react';

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface CourseModule {
  id: number;
  title: string;
  description: string;
  duration: string;
  icon: LucideIcon;
  content: string;
  quiz: QuizQuestion[];
}

export const healthEconomicsCourseModules: CourseModule[] = [
  {
    id: 1,
    title: "Introduction to Healthcare Economics",
    description: "Foundations of micro and macroeconomics in the healthcare sector.",
    duration: "45 min",
    icon: TrendingUp,
    content: `
      <h2>Foundations of Healthcare Economics</h2>
      <p>Healthcare economics applies economic theories to understand the behavior of individuals, providers, and payers in the healthcare market. Unlike traditional markets, healthcare is characterized by information asymmetry, uncertainty, and third-party payment systems.</p>
      
      <h3>Microeconomics in Healthcare</h3>
      <ul>
        <li><strong>Supply and Demand:</strong> How patient needs (demand) interact with provider availability (supply), often distorted by insurance coverage.</li>
        <li><strong>Elasticity:</strong> The sensitivity of demand to price changes. Emergency care is inelastic, while elective procedures are elastic.</li>
        <li><strong>Moral Hazard:</strong> The tendency for insured individuals to consume more healthcare than they would if they paid the full price.</li>
      </ul>

      <h3>Macroeconomics in Healthcare</h3>
      <p>Macroeconomics looks at the healthcare system as a whole, including total spending, growth trends, and government policy.</p>
      <ul>
        <li><strong>GDP Spending:</strong> Healthcare often consumes a significant portion of a nation's GDP (e.g., ~18% in the USA).</li>
        <li><strong>Cost Containment:</strong> Strategies governments use to control rising healthcare costs while maintaining quality.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What distinguishes the healthcare market from a traditional free market?",
        options: [
          "Perfect information among all parties",
          "Direct payment by consumers for all services",
          "Information asymmetry and third-party payers",
          "Fixed prices for all goods"
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "What is 'Moral Hazard' in health economics?",
        options: [
          "Doctors refusing to treat patients",
          "Insured individuals consuming more care because they don't bear the full cost",
          "Unethical billing practices",
          "The risk of medical errors"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Emergency medical care typically exhibits what type of demand elasticity?",
        options: [
          "Perfectly elastic",
          "Highly elastic",
          "Inelastic",
          "Unit elastic"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 2,
    title: "US Healthcare System & Insurance Models",
    description: "Overview of private insurance, Medicare, Medicaid, and managed care.",
    duration: "50 min",
    icon: Shield,
    content: `
      <h2>The US Healthcare Landscape</h2>
      <p>The US system is a mix of public and private payers, creating a complex reimbursement environment.</p>

      <h3>Key Insurance Models</h3>
      <ul>
        <li><strong>Fee-for-Service (FFS):</strong> Providers are paid for each service performed. Incentivizes volume over value.</li>
        <li><strong>Managed Care (HMO/PPO):</strong> Networks of providers with negotiated rates to control costs and utilization.</li>
        <li><strong>Value-Based Care:</strong> Payment tied to patient outcomes and quality metrics.</li>
      </ul>

      <h3>Government Programs</h3>
      <ul>
        <li><strong>Medicare:</strong> Federal program for seniors (65+) and certain disabilities.
          <ul>
            <li>Part A: Hospital Insurance</li>
            <li>Part B: Medical Insurance</li>
            <li>Part D: Prescription Drugs</li>
          </ul>
        </li>
        <li><strong>Medicaid:</strong> State-federal partnership for low-income individuals.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "Which insurance model incentivizes volume of services over quality?",
        options: [
          "Health Maintenance Organization (HMO)",
          "Fee-for-Service (FFS)",
          "Capitation",
          "Value-Based Purchasing"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What is the primary focus of Managed Care Organizations?",
        options: [
          "Unrestricted access to all providers",
          "Controlling costs and utilization through networks",
          "Eliminating all patient copays",
          "Providing free care to everyone"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Medicare Part D covers:",
        options: [
          "Hospital stays",
          "Physician visits",
          "Prescription drugs",
          "Dental care"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 3,
    title: "Reimbursement Fundamentals",
    description: "The three pillars: Coding, Coverage, and Payment.",
    duration: "60 min",
    icon: DollarSign,
    content: `
      <h2>The Three Pillars of Reimbursement</h2>
      <p>For a medical technology or service to be commercially successful, it must secure all three pillars of reimbursement.</p>

      <h3>1. Coding</h3>
      <p>The language used to describe services, procedures, and diagnoses. Without a code, a claim cannot be processed.</p>
      <ul>
        <li>CPT (Current Procedural Terminology)</li>
        <li>ICD-10 (International Classification of Diseases)</li>
        <li>HCPCS (Healthcare Common Procedure Coding System)</li>
      </ul>

      <h3>2. Coverage</h3>
      <p>The payer's policy decision to pay for a specific service. Coverage is often based on "Medical Necessity" and evidence of clinical efficacy.</p>

      <h3>3. Payment</h3>
      <p>The actual transfer of funds. This is determined by fee schedules (e.g., Medicare Physician Fee Schedule) or negotiated contracts.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What are the three pillars of reimbursement?",
        options: [
          "Coding, Coverage, Payment",
          "Safety, Efficacy, Quality",
          "Patents, FDA Approval, Marketing",
          "HMO, PPO, POS"
        ],
        correctAnswer: 0
      },
      {
        id: 2,
        question: "Coverage decisions are primarily based on:",
        options: [
          "The cost of the device",
          "Medical necessity and clinical evidence",
          "The preference of the hospital administrator",
          "Marketing materials"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Which pillar involves the assignment of a specific alphanumeric sequence to a procedure?",
        options: [
          "Coverage",
          "Payment",
          "Coding",
          "Contracting"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 4,
    title: "CPT, HCPCS, and ICD-10 Coding",
    description: "Deep dive into the coding systems used in US healthcare.",
    duration: "55 min",
    icon: FileText,
    content: `
      <h2>Coding Systems Explained</h2>

      <h3>ICD-10-CM (Clinical Modification)</h3>
      <p>Used to code <strong>diagnoses</strong>. It answers "Why was the patient seen?".</p>
      <ul>
        <li>Example: E11.9 (Type 2 diabetes mellitus without complications)</li>
      </ul>

      <h3>CPT (Current Procedural Terminology)</h3>
      <p>Maintained by the AMA. Used to code <strong>procedures and services</strong> performed by physicians.</p>
      <ul>
        <li>Category I: Standard procedures.</li>
        <li>Category III: Emerging technologies (tracking codes).</li>
      </ul>

      <h3>HCPCS Level II</h3>
      <p>Used for products, supplies, and services not covered by CPT, such as ambulance services and durable medical equipment (DME), prosthetics, orthotics, and supplies (DMEPOS).</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Which coding system is used to describe a patient's diagnosis?",
        options: [
          "CPT",
          "HCPCS Level II",
          "ICD-10-CM",
          "NDC"
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "Who maintains the CPT code set?",
        options: [
          "CMS",
          "American Medical Association (AMA)",
          "WHO",
          "FDA"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "HCPCS Level II codes are typically used for:",
        options: [
          "Inpatient surgeries",
          "Durable Medical Equipment (DME) and supplies",
          "Physician office visits",
          "Mental health diagnoses"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 5,
    title: "Payer Strategies & Value-Based Care",
    description: "Moving from volume to value: ACOs, Bundled Payments, and Quality Metrics.",
    duration: "50 min",
    icon: PieChart,
    content: `
      <h2>Value-Based Care (VBC)</h2>
      <p>VBC models link provider payments to improved patient health outcomes rather than the quantity of services delivered.</p>

      <h3>Key VBC Models</h3>
      <ul>
        <li><strong>Accountable Care Organizations (ACOs):</strong> Groups of doctors, hospitals, and other providers who come together to give coordinated high-quality care to Medicare patients.</li>
        <li><strong>Bundled Payments:</strong> A single payment for all services related to a specific episode of care (e.g., knee replacement), covering the hospital, surgeon, and post-acute care.</li>
        <li><strong>Capitation:</strong> A fixed amount of money per patient per unit of time paid in advance to the physician for the delivery of health care services.</li>
      </ul>

      <h3>Payer Strategies</h3>
      <p>Payers use utilization management (Prior Authorization, Step Therapy) to ensure appropriate use of expensive therapies.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the main goal of Value-Based Care?",
        options: [
          "To increase the number of surgeries performed",
          "To link payment to patient health outcomes and quality",
          "To eliminate private insurance",
          "To increase administrative paperwork"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What is a 'Bundled Payment'?",
        options: [
          "Buying insurance for a group of people",
          "A single payment covering all services for a specific episode of care",
          "Paying for prescriptions and doctor visits together",
          "A discount for paying cash"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Which strategy requires approval from a payer before a service is delivered?",
        options: [
          "Retrospective review",
          "Prior Authorization",
          "Claims adjudication",
          "Risk adjustment"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 6,
    title: "Health Technology Assessment (HTA)",
    description: "Evaluating the clinical and economic value of new technologies.",
    duration: "60 min",
    icon: Activity,
    content: `
      <h2>Health Technology Assessment (HTA)</h2>
      <p>HTA is a multidisciplinary process that summarizes information about the medical, social, economic, and ethical issues related to the use of a health technology.</p>

      <h3>Health Economics and Outcomes Research (HEOR)</h3>
      <p>HEOR data is crucial for HTA submissions.</p>
      <ul>
        <li><strong>Cost-Effectiveness Analysis (CEA):</strong> Compares the relative costs and outcomes (effects) of different courses of action.</li>
        <li><strong>ICER (Incremental Cost-Effectiveness Ratio):</strong> The difference in cost between two interventions divided by the difference in their effect.</li>
        <li><strong>QALY (Quality-Adjusted Life Year):</strong> A generic measure of disease burden, including both the quality and the quantity of life lived.</li>
      </ul>

      <h3>Global HTA Bodies</h3>
      <ul>
        <li>NICE (UK)</li>
        <li>IQWiG (Germany)</li>
        <li>CADTH (Canada)</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What does ICER stand for in health economics?",
        options: [
          "International Cost Evaluation Report",
          "Incremental Cost-Effectiveness Ratio",
          "Internal Clinical Economic Review",
          "Insurance Coverage and Reimbursement"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What does a QALY measure?",
        options: [
          "Only the length of life",
          "Only the quality of life",
          "Both the quality and quantity of life",
          "The financial cost of a year of life"
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        question: "Which organization is the HTA body for the UK?",
        options: [
          "FDA",
          "CMS",
          "NICE",
          "EMA"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 7,
    title: "Pharma Economics & Pricing",
    description: "Drug pricing models, rebates, and PBMs.",
    duration: "55 min",
    icon: Briefcase,
    content: `
      <h2>Pharmaceutical Economics</h2>
      <p>The pharmaceutical market involves unique players like Pharmacy Benefit Managers (PBMs) and complex pricing structures.</p>

      <h3>Key Concepts</h3>
      <ul>
        <li><strong>WAC (Wholesale Acquisition Cost):</strong> The manufacturer's list price.</li>
        <li><strong>Rebates:</strong> Payments from manufacturers to PBMs/Payers to secure formulary placement.</li>
        <li><strong>Formulary:</strong> A list of prescription drugs covered by a prescription drug plan. Tiers determine patient copay.</li>
      </ul>

      <h3>Pharmacy Benefit Managers (PBMs)</h3>
      <p>Intermediaries who manage prescription drug benefits on behalf of health insurers, Medicare Part D drug plans, large employers, and other payers.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is a 'Formulary'?",
        options: [
          "A formula for making drugs",
          "A list of covered prescription drugs with tiering",
          "The chemical composition of a medicine",
          "A government price control list"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Who are the intermediaries that negotiate rebates and manage drug benefits?",
        options: [
          "Wholesalers",
          "Pharmacy Benefit Managers (PBMs)",
          "Physicians",
          "FDA agents"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "What represents the manufacturer's list price before rebates?",
        options: [
          "ASP (Average Sales Price)",
          "WAC (Wholesale Acquisition Cost)",
          "Copay",
          "Coinsurance"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 8,
    title: "Biotech Economics",
    description: "Unique challenges for biologics, gene therapies, and biosimilars.",
    duration: "50 min",
    icon: BarChart,
    content: `
      <h2>Economics of Biotechnology</h2>
      <p>Biotech products (biologics) are derived from living organisms, making them more complex and expensive to manufacture than small-molecule drugs.</p>

      <h3>Biosimilars</h3>
      <p>A biologic medical product that is highly similar to and has no clinically meaningful differences from an existing FDA-approved reference product. They are the "generics" of the biotech world but require more clinical data for approval.</p>

      <h3>High-Cost Therapies (Gene & Cell Therapy)</h3>
      <p>Therapies like CAR-T or gene editing can cost >$1M per dose. This creates reimbursement challenges.</p>
      <ul>
        <li><strong>Outcome-Based Contracts:</strong> Payment is contingent on the therapy actually working for the patient.</li>
        <li><strong>Amortized Payments:</strong> Spreading the cost of a curative therapy over several years (like a mortgage).</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is a 'Biosimilar'?",
        options: [
          "A generic chemical drug",
          "A biologic highly similar to a reference product with no clinical differences",
          "A completely new biological invention",
          "A synthetic version of a plant"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Why are gene therapies challenging for traditional reimbursement models?",
        options: [
          "They are too cheap",
          "They are administered daily for years",
          "They often have high upfront costs but offer long-term or curative value",
          "Insurance companies don't like science"
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        question: "What is a potential payment model for high-cost curative therapies?",
        options: [
          "Outcome-based contracts",
          "Cash only",
          "Subscription models",
          "All of the above"
        ],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 9,
    title: "Global Reimbursement Landscapes",
    description: "Comparing US, EU, and Asian markets.",
    duration: "45 min",
    icon: Globe,
    content: `
      <h2>Global Market Access</h2>
      <p>Reimbursement strategies must be tailored to each country's system.</p>

      <h3>Key Differences</h3>
      <ul>
        <li><strong>USA:</strong> Multi-payer, market-based pricing (mostly), limited HTA influence on pricing (except ICER watchdogs).</li>
        <li><strong>Europe (EU5):</strong>
          <ul>
            <li><strong>Germany:</strong> Free pricing for year 1 (AMNOG process), then negotiated based on benefit assessment.</li>
            <li><strong>UK:</strong> Strict cost-effectiveness threshold (NICE) determines access.</li>
            <li><strong>France:</strong> Pricing based on Improvement in Medical Benefit (ASMR).</li>
          </ul>
        </li>
        <li><strong>Japan:</strong> Centralized pricing with biennial price cuts.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "Which country uses the AMNOG process for benefit assessment and pricing negotiation?",
        options: [
          "France",
          "United Kingdom",
          "Germany",
          "Japan"
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "Which market is characterized by a multi-payer system with mostly free market pricing?",
        options: [
          "USA",
          "Canada",
          "UK",
          "Australia"
        ],
        correctAnswer: 0
      },
      {
        id: 3,
        question: "In the UK, which body largely determines market access based on cost-effectiveness?",
        options: [
          "NHS England",
          "NICE",
          "EMA",
          "MHRA"
        ],
        correctAnswer: 1
      }
    ]
  }
];
