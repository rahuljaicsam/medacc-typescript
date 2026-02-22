import { Scale, Globe, Shield, FileText, CheckSquare, AlertCircle, Building, Syringe, Pill } from 'lucide-react';

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
  icon: any;
  content: string;
  quiz: QuizQuestion[];
}

export const regulatoryCourseModules: CourseModule[] = [
  {
    id: 1,
    title: "Introduction to Regulatory Affairs",
    description: "Overview of global regulatory bodies, product lifecycles, and the role of regulatory affairs professionals.",
    duration: "45 mins",
    icon: Scale,
    content: `
      <h2>What is Regulatory Affairs?</h2>
      <p>Regulatory Affairs (RA) is a profession within regulated industries, such as pharmaceuticals and medical devices. RA professionals ensure that companies comply with all of the regulations and laws pertaining to their business.</p>
      
      <h3>Key Regulatory Bodies:</h3>
      <ul>
        <li><strong>USA:</strong> Food and Drug Administration (FDA)</li>
        <li><strong>Europe:</strong> European Medicines Agency (EMA)</li>
        <li><strong>India:</strong> Central Drugs Standard Control Organization (CDSCO)</li>
        <li><strong>China:</strong> National Medical Products Administration (NMPA)</li>
      </ul>

      <h3>Product Lifecycle:</h3>
      <p>Discovery -> Pre-clinical -> Clinical Trials -> Marketing Authorization -> Post-Market Surveillance.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Which agency regulates drugs in the United States?",
        options: [
          "EMA",
          "CDSCO",
          "FDA",
          "NMPA"
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "What is the primary goal of regulatory affairs?",
        options: [
          "Maximize profit",
          "Ensure compliance with laws and regulations protecting public health",
          "Speed up manufacturing",
          "Design marketing campaigns"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Which phase comes immediately after Discovery in the product lifecycle?",
        options: [
          "Marketing Authorization",
          "Clinical Trials",
          "Pre-clinical",
          "Post-Market Surveillance"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 2,
    title: "US FDA Drug Approval Process",
    description: "Deep dive into IND, NDA, BLA, and the phases of FDA clinical trials.",
    duration: "60 mins",
    icon: Building,
    content: `
      <h2>The FDA Pathway</h2>
      <p>The gold standard for drug approval globally.</p>
      
      <h3>Key Steps:</h3>
      <ul>
        <li><strong>IND (Investigational New Drug):</strong> Application to start clinical trials in humans.</li>
        <li><strong>Clinical Phases:</strong> Phase I (Safety), Phase II (Efficacy), Phase III (Confirmation).</li>
        <li><strong>NDA (New Drug Application):</strong> For small molecule drugs.</li>
        <li><strong>BLA (Biologics License Application):</strong> For biological products (antibodies, vaccines).</li>
      </ul>

      <h3>Expedited Programs:</h3>
      <p>Fast Track, Breakthrough Therapy, Accelerated Approval, and Priority Review.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Which application is required to start clinical trials in the US?",
        options: [
          "NDA",
          "BLA",
          "IND",
          "510(k)"
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "What is the application for a biological product called?",
        options: [
          "NDA",
          "BLA",
          "ANDA",
          "PMA"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Phase I clinical trials primarily test for:",
        options: [
          "Efficacy in large groups",
          "Long-term side effects",
          "Safety and dosage",
          "Cost-effectiveness"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 3,
    title: "US FDA Medical Device Pathways",
    description: "Understanding Class I, II, III devices, 510(k) clearance vs. PMA approval.",
    duration: "55 mins",
    icon: Shield,
    content: `
      <h2>Medical Device Classification</h2>
      <p>Devices are classified based on risk.</p>
      <ul>
        <li><strong>Class I:</strong> Low risk (e.g., bandages). General controls.</li>
        <li><strong>Class II:</strong> Moderate risk (e.g., powered wheelchairs). General + Special controls.</li>
        <li><strong>Class III:</strong> High risk (e.g., pacemakers). General + Premarket Approval.</li>
      </ul>

      <h3>Submission Pathways:</h3>
      <ul>
        <li><strong>510(k):</strong> For devices 'substantially equivalent' to a device already on the market (predicate).</li>
        <li><strong>PMA (Premarket Approval):</strong> For Class III devices requiring clinical data to prove safety and effectiveness.</li>
        <li><strong>De Novo:</strong> For low/moderate risk devices with no predicate.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "Which pathway is used for devices that are 'substantially equivalent' to an existing device?",
        options: [
          "PMA",
          "510(k)",
          "NDA",
          "IND"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Class III medical devices are considered:",
        options: [
          "Low risk",
          "Moderate risk",
          "High risk",
          "No risk"
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        question: "A pacemaker would typically require which approval pathway?",
        options: [
          "Class I exemption",
          "510(k)",
          "PMA",
          "OTC monograph"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 4,
    title: "European Regulatory System (EMA & MDR)",
    description: "Navigating the Centralized Procedure and the new Medical Device Regulation (MDR).",
    duration: "60 mins",
    icon: Globe,
    content: `
      <h2>EMA Drug Approval</h2>
      <p>The European Medicines Agency coordinates evaluation.</p>
      <ul>
        <li><strong>Centralized Procedure:</strong> One application, one evaluation, valid in all EU countries. Mandatory for biotech products.</li>
        <li><strong>Decentralized Procedure:</strong> Simultaneous authorization in multiple EU states.</li>
      </ul>

      <h2>EU MDR (Medical Device Regulation)</h2>
      <p>New, stricter regulations replacing the old MDD.</p>
      <ul>
        <li><strong>CE Mark:</strong> The certification mark that indicates conformity with health, safety, and environmental protection standards.</li>
        <li><strong>Notified Bodies:</strong> Independent organizations designated by EU countries to assess the conformity of certain products before being placed on the market.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the mandatory approval procedure for biotech products in the EU?",
        options: [
          "National Procedure",
          "Decentralized Procedure",
          "Centralized Procedure",
          "Mutual Recognition"
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "What mark is required to sell medical devices in Europe?",
        options: [
          "FDA Approved",
          "CE Mark",
          "ISO 9001",
          "ISI Mark"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "What is the role of a 'Notified Body'?",
        options: [
          "To manufacture devices",
          "To assess product conformity for CE marking",
          "To distribute medicines",
          "To fund research"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 5,
    title: "Indian Regulatory System (CDSCO)",
    description: "Drug and cosmetic act, clinical trial rules, and the role of DCGI.",
    duration: "50 mins",
    icon: FileText,
    content: `
      <h2>CDSCO Overview</h2>
      <p>The Central Drugs Standard Control Organization (CDSCO) is India's national regulatory body.</p>
      
      <h3>Key Roles:</h3>
      <ul>
        <li><strong>DCGI (Drugs Controller General of India):</strong> The head of CDSCO, responsible for approval of licenses.</li>
        <li><strong>New Drugs and Clinical Trials Rules, 2019:</strong> Recent regulations streamlining the approval process.</li>
      </ul>

      <h3>SUGAM Portal:</h3>
      <p>The online portal for filing applications for various services like drug approval, clinical trials, and medical device registration.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Who is the head of the CDSCO?",
        options: [
          "Health Minister",
          "DCGI (Drugs Controller General of India)",
          "FDA Commissioner",
          "Prime Minister"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What is the name of the online portal for filing regulatory applications in India?",
        options: [
          "VAHAN",
          "SARAL",
          "SUGAM",
          "UMANG"
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        question: "Which rules currently govern clinical trials in India?",
        options: [
          "Drugs and Cosmetics Act 1940",
          "New Drugs and Clinical Trials Rules 2019",
          "Medical Council Act 1956",
          "Pharmacy Act 1948"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 6,
    title: "Chinese Regulatory System (NMPA)",
    description: "Understanding the rapid changes in China's NMPA, priority reviews, and data acceptance.",
    duration: "55 mins",
    icon: Globe,
    content: `
      <h2>NMPA (National Medical Products Administration)</h2>
      <p>Formerly CFDA, the NMPA has undergone significant modernization.</p>
      
      <h3>Key Reforms:</h3>
      <ul>
        <li><strong>Acceptance of Foreign Data:</strong> NMPA now accepts clinical data generated outside China, reducing the need for local trials if ethnic sensitivity is addressed.</li>
        <li><strong>Priority Review:</strong> For innovative drugs and urgent clinical needs.</li>
        <li><strong>MAH (Marketing Authorization Holder) System:</strong> Separates manufacturing license from drug approval, allowing R&D companies to outsource manufacturing.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the current name of China's drug regulatory agency?",
        options: [
          "CFDA",
          "SFDA",
          "NMPA",
          "CDE"
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "What is a major benefit of the MAH system in China?",
        options: [
          "It forces companies to build their own factories",
          "It separates the manufacturing license from drug approval",
          "It eliminates the need for clinical trials",
          "It guarantees approval"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Does China accept foreign clinical trial data?",
        options: [
          "No, never",
          "Yes, under certain conditions",
          "Only from Asian countries",
          "Only for medical devices"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 7,
    title: "Biologics & Biosimilars Regulation",
    description: "Specific requirements for approving complex biological molecules and their follow-on versions.",
    duration: "50 mins",
    icon: Syringe,
    content: `
      <h2>Biologics</h2>
      <p>Large, complex molecules produced in living systems. Harder to characterize than small molecules.</p>
      
      <h2>Biosimilars</h2>
      <p>A biological product that is 'highly similar' to an FDA-approved reference product, with no clinically meaningful differences in safety and effectiveness.</p>
      
      <h3>Regulatory Challenge:</h3>
      <p>Because biologics cannot be copied exactly (unlike generics), the approval pathway requires extensive analytical and clinical comparison to the reference product (The 'Totality of Evidence').</p>
      
      <h3>Interchangeability:</h3>
      <p>An additional designation in the US allowing pharmacists to substitute the biosimilar for the reference product without prescriber intervention.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "How does a biosimilar differ from a generic drug?",
        options: [
          "It is identical to the reference product",
          "It is chemically synthesized",
          "It is highly similar but not identical to the biological reference product",
          "It is cheaper to develop"
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "What is 'Interchangeability'?",
        options: [
          "Using drugs from different countries",
          "Substitution at the pharmacy level without prescriber approval",
          "Switching between brand names",
          "Using a device instead of a drug"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "What is the 'Totality of Evidence' approach?",
        options: [
          "Using only animal data",
          "Using only clinical data",
          "Combining analytical, non-clinical, and clinical data to prove similarity",
          "Relying on the reference product's data only"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 8,
    title: "Quality & Compliance (GxP)",
    description: "Good Manufacturing, Clinical, and Laboratory Practices (GMP, GCP, GLP).",
    duration: "45 mins",
    icon: CheckSquare,
    content: `
      <h2>The GxP Standards</h2>
      <p>A collection of quality guidelines and regulations.</p>
      
      <h3>1. GMP (Good Manufacturing Practice):</h3>
      <p>Ensures products are consistently produced and controlled according to quality standards. Focus on facilities, equipment, and process control.</p>
      
      <h3>2. GCP (Good Clinical Practice):</h3>
      <p>International ethical and scientific quality standard for designing, conducting, recording, and reporting trials that involve human participation.</p>
      
      <h3>3. GLP (Good Laboratory Practice):</h3>
      <p>Ensures quality and integrity of non-clinical safety data (animal/lab studies).</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Which standard governs the manufacturing of pharmaceutical products?",
        options: [
          "GCP",
          "GLP",
          "GMP",
          "GDP"
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "GCP stands for:",
        options: [
          "Good Chemical Practice",
          "Good Clinical Practice",
          "General Compliance Protocol",
          "Global Clinical Process"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "GLP primarily applies to:",
        options: [
          "Human clinical trials",
          "Non-clinical laboratory safety studies",
          "Manufacturing plants",
          "Marketing departments"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 9,
    title: "Post-Market Surveillance & Pharmacovigilance",
    description: "Monitoring safety after approval, reporting adverse events, and real-world evidence.",
    duration: "40 mins",
    icon: AlertCircle,
    content: `
      <h2>Pharmacovigilance (PV)</h2>
      <p>The science and activities relating to the detection, assessment, understanding, and prevention of adverse effects or any other drug-related problem.</p>
      
      <h3>Key Activities:</h3>
      <ul>
        <li><strong>Adverse Event Reporting:</strong> Collecting data on side effects from patients and doctors.</li>
        <li><strong>Signal Detection:</strong> Identifying new potential risks from data patterns.</li>
        <li><strong>Risk Management Plans (RMP):</strong> Strategies to minimize known risks.</li>
        <li><strong>Phase IV Trials:</strong> Studies conducted after the drug has been marketed to gather information on the drug's effect in various populations and any side effects associated with long-term use.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is Pharmacovigilance primarily concerned with?",
        options: [
          "Drug pricing",
          "Drug marketing",
          "Drug safety and adverse effects",
          "Drug manufacturing"
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "Studies conducted after a drug is on the market are called:",
        options: [
          "Phase I",
          "Phase II",
          "Phase III",
          "Phase IV"
        ],
        correctAnswer: 3
      },
      {
        id: 3,
        question: "What is an 'Adverse Event'?",
        options: [
          "A competitor launching a product",
          "A failed clinical trial",
          "Any untoward medical occurrence in a patient administering a pharmaceutical product",
          "A drop in stock price"
        ],
        correctAnswer: 2
      }
    ]
  }
];
