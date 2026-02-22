import { Factory, ClipboardCheck, AlertTriangle, Package, Truck, Users, Settings, Database, FileText } from 'lucide-react';

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

export const gmpCourseModules: CourseModule[] = [
  {
    id: 1,
    title: "Introduction to GMP",
    description: "What is GMP, why it exists, and the regulatory landscape (FDA 21 CFR 210/211, EudraLex).",
    duration: "45 mins",
    icon: Factory,
    content: `
      <h2>What is GMP?</h2>
      <p>Good Manufacturing Practice (GMP) is a system for ensuring that products are consistently produced and controlled according to quality standards.</p>
      
      <h3>Why is GMP Important?</h3>
      <ul>
        <li><strong>Consumer Safety:</strong> Prevents harm to patients.</li>
        <li><strong>Quality Assurance:</strong> Ensures the product works as intended.</li>
        <li><strong>Regulatory Compliance:</strong> Required by law (FDA, EMA, etc.) to sell medical products.</li>
      </ul>

      <h3>Key Regulations:</h3>
      <ul>
        <li><strong>USA:</strong> 21 CFR Parts 210 and 211.</li>
        <li><strong>EU:</strong> EudraLex Volume 4.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the primary purpose of GMP?",
        options: [
          "To lower production costs",
          "To ensure products are consistently produced and controlled to quality standards",
          "To speed up manufacturing",
          "To design marketing materials"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Which US regulation governs GMP for finished pharmaceuticals?",
        options: [
          "21 CFR Part 11",
          "21 CFR Part 50",
          "21 CFR Part 211",
          "45 CFR Part 46"
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        question: "Who enforces GMP regulations in the United States?",
        options: [
          "CDC",
          "FDA",
          "NIH",
          "EPA"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 2,
    title: "Quality Management Systems (QMS)",
    description: "The organizational structure, responsibilities, procedures, processes, and resources for implementing quality management.",
    duration: "60 mins",
    icon: ClipboardCheck,
    content: `
      <h2>The Quality Unit</h2>
      <p>An independent group responsible for overseeing quality.</p>
      <ul>
        <li><strong>Quality Assurance (QA):</strong> Focuses on the process (preventing defects).</li>
        <li><strong>Quality Control (QC):</strong> Focuses on the product (identifying defects through testing).</li>
      </ul>

      <h3>Key Concepts:</h3>
      <ul>
        <li><strong>SOPs (Standard Operating Procedures):</strong> Written instructions for every task.</li>
        <li><strong>Change Control:</strong> Managing changes to facilities, equipment, or processes to ensure no negative impact on quality.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the main difference between QA and QC?",
        options: [
          "QA tests products; QC writes procedures",
          "QA focuses on preventing defects; QC focuses on identifying defects",
          "QA is for managers; QC is for interns",
          "There is no difference"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What does SOP stand for?",
        options: [
          "Standard Operating Procedure",
          "Safe Operating Protocol",
          "System Of Production",
          "Standard Organization Plan"
        ],
        correctAnswer: 0
      },
      {
        id: 3,
        question: "Why is Change Control important?",
        options: [
          "To prevent employees from changing jobs",
          "To ensure changes do not negatively impact product quality",
          "To speed up production changes",
          "To reduce paperwork"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 3,
    title: "Personnel & Training",
    description: "Hygiene, gowning, training requirements, and personnel behavior in cleanrooms.",
    duration: "50 mins",
    icon: Users,
    content: `
      <h2>People are the #1 Source of Contamination</h2>
      <p>Strict rules are required to prevent human contamination of products.</p>
      
      <h3>Key Requirements:</h3>
      <ul>
        <li><strong>Training:</strong> All employees must be trained on GMP and their specific job tasks *before* performing them.</li>
        <li><strong>Hygiene:</strong> Strict personal hygiene (no jewelry, makeup, or illness).</li>
        <li><strong>Gowning:</strong> Specific clothing (suits, masks, gloves) based on the cleanroom grade (A, B, C, D).</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the biggest source of contamination in a cleanroom?",
        options: [
          "The HVAC system",
          "Personnel (People)",
          "Raw materials",
          "Water"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "When must GMP training occur?",
        options: [
          "After one year of employment",
          "Only when a mistake is made",
          "Before performing the job task",
          "It is optional"
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        question: "Gowning requirements depend on:",
        options: [
          "The weather",
          "The cleanroom grade/classification",
          "The employee's preference",
          "The time of day"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 4,
    title: "Facilities & Equipment",
    description: "Design, qualification (IQ/OQ/PQ), calibration, and maintenance of GMP facilities.",
    duration: "60 mins",
    icon: Settings,
    content: `
      <h2>Facility Design</h2>
      <p>Facilities must be designed to prevent cross-contamination and mix-ups.</p>
      <ul>
        <li><strong>Flow:</strong> Logical flow of materials and people.</li>
        <li><strong>Cleanability:</strong> Smooth surfaces, no cracks.</li>
      </ul>

      <h2>Equipment Qualification</h2>
      <p>Proving equipment works correctly.</p>
      <ul>
        <li><strong>IQ (Installation Qualification):</strong> Is it installed correctly?</li>
        <li><strong>OQ (Operational Qualification):</strong> Does it operate correctly within limits?</li>
        <li><strong>PQ (Performance Qualification):</strong> Does it perform consistently under real load?</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What does IQ stand for in equipment qualification?",
        options: [
          "Intelligent Quotient",
          "Installation Qualification",
          "Internal Quality",
          "Initial Qualification"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "The logical flow of materials and personnel is important to prevent:",
        options: [
          "Boredom",
          "Cross-contamination and mix-ups",
          "Equipment failure",
          "High electricity bills"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Which qualification step tests if the equipment operates correctly within limits?",
        options: [
          "IQ",
          "OQ",
          "PQ",
          "DQ"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 5,
    title: "Production & Process Control",
    description: "Batch records, master production records, and validation of manufacturing processes.",
    duration: "55 mins",
    icon: Factory,
    content: `
      <h2>Batch Records</h2>
      <p>The complete history of a specific batch of product.</p>
      <ul>
        <li><strong>Master Production Record (MPR):</strong> The template/recipe.</li>
        <li><strong>Batch Production Record (BPR):</strong> The filled-out record for a specific lot.</li>
      </ul>

      <h2>Process Validation</h2>
      <p>Establishing scientific evidence that a process is capable of consistently delivering quality product.</p>
      <ul>
        <li><strong>Stage 1:</strong> Process Design.</li>
        <li><strong>Stage 2:</strong> Process Qualification.</li>
        <li><strong>Stage 3:</strong> Continued Process Verification.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What document serves as the 'recipe' or template for manufacturing?",
        options: [
          "Batch Production Record (BPR)",
          "Master Production Record (MPR)",
          "Certificate of Analysis (CoA)",
          "Invoice"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What is the purpose of Process Validation?",
        options: [
          "To test every single pill",
          "To prove a process consistently produces quality product",
          "To design the packaging",
          "To hire staff"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Which record contains the actual data for a specific lot manufactured?",
        options: [
          "Master Production Record",
          "Batch Production Record",
          "SOP",
          "Validation Plan"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 6,
    title: "Contamination Control",
    description: "Microbiology, sterile manufacturing, cleaning validation, and environmental monitoring.",
    duration: "60 mins",
    icon: AlertTriangle,
    content: `
      <h2>Types of Contamination</h2>
      <ul>
        <li><strong>Particulate:</strong> Dust, metal, glass.</li>
        <li><strong>Microbial:</strong> Bacteria, mold, yeast.</li>
        <li><strong>Chemical:</strong> Residues from other products or cleaning agents.</li>
      </ul>

      <h2>Cleaning Validation</h2>
      <p>Proving that cleaning procedures effectively remove residues to safe levels.</p>

      <h2>Environmental Monitoring (EM)</h2>
      <p>Testing air and surfaces in cleanrooms to ensure they remain within limits for particles and microbes.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Which of the following is NOT a primary type of contamination in GMP?",
        options: [
          "Microbial",
          "Particulate",
          "Chemical",
          "Financial"
        ],
        correctAnswer: 3
      },
      {
        id: 2,
        question: "What is the purpose of Environmental Monitoring?",
        options: [
          "To check the weather outside",
          "To ensure cleanroom air and surfaces meet quality limits",
          "To monitor employee attendance",
          "To test the water supply"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Cleaning Validation proves that:",
        options: [
          "The facility looks clean",
          "Cleaning procedures remove residues to scientifically safe levels",
          "The cleaning staff is working hard",
          "Water is available"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 7,
    title: "Documentation & Data Integrity",
    description: "ALCOA+ principles, good documentation practices (GDP), and audit trails.",
    duration: "50 mins",
    icon: FileText,
    content: `
      <h2>Good Documentation Practices (GDP)</h2>
      <p>"If it isn't documented, it didn't happen."</p>
      
      <h3>ALCOA+ Principles:</h3>
      <ul>
        <li><strong>Attributable:</strong> Who did it?</li>
        <li><strong>Legible:</strong> Can it be read?</li>
        <li><strong>Contemporaneous:</strong> Recorded at the time it happened.</li>
        <li><strong>Original:</strong> The first record.</li>
        <li><strong>Accurate:</strong> Correct and truthful.</li>
      </ul>

      <h3>Data Integrity:</h3>
      <p>Ensuring data is complete, consistent, and accurate throughout its lifecycle. Crucial for electronic systems (Audit Trails).</p>
    `,
    quiz: [
      {
        id: 1,
        question: "In GMP documentation, what does 'Contemporaneous' mean?",
        options: [
          "Recorded at the same time the activity occurred",
          "Recorded at the end of the shift",
          "Recorded the next day",
          "Recorded in temporary notes first"
        ],
        correctAnswer: 0
      },
      {
        id: 2,
        question: "What is the core saying of GMP documentation?",
        options: [
          "Write it down eventually",
          "If it isn't documented, it didn't happen",
          "Documentation is optional",
          "Type everything"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Which is NOT part of ALCOA?",
        options: [
          "Attributable",
          "Legible",
          "Optional",
          "Accurate"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 8,
    title: "Supply Chain & Materials Management",
    description: "Vendor qualification, receipt, storage, and distribution of materials.",
    duration: "45 mins",
    icon: Truck,
    content: `
      <h2>Vendor Qualification</h2>
      <p>You cannot just buy GMP materials from anywhere. Suppliers must be audited and approved.</p>
      
      <h2>Material Control</h2>
      <ul>
        <li><strong>Receipt:</strong> Check for damage and correct labeling.</li>
        <li><strong>Quarantine:</strong> Materials are held until tested and released by QC.</li>
        <li><strong>Release/Reject:</strong> Only released materials can be used in production.</li>
        <li><strong>Storage:</strong> Proper temperature and humidity conditions.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the status of materials immediately upon receipt?",
        options: [
          "Released",
          "Rejected",
          "Quarantine",
          "In Use"
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "Who is responsible for releasing materials for use in production?",
        options: [
          "The warehouse manager",
          "The supplier",
          "Quality Control (QC)",
          "The janitor"
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        question: "Can you buy GMP raw materials from any supplier?",
        options: [
          "Yes, if the price is right",
          "No, suppliers must be qualified/approved",
          "Yes, if they are on Amazon",
          "Only if they are local"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 9,
    title: "Audits & Inspections",
    description: "Internal audits, regulatory inspections (FDA 483s), and CAPA (Corrective and Preventive Action).",
    duration: "50 mins",
    icon: ClipboardCheck,
    content: `
      <h2>Types of Audits</h2>
      <ul>
        <li><strong>Internal Audit:</strong> Self-inspection to find gaps.</li>
        <li><strong>External Audit:</strong> Auditing suppliers.</li>
        <li><strong>Regulatory Inspection:</strong> FDA/EMA inspecting your facility.</li>
      </ul>

      <h2>CAPA (Corrective and Preventive Action)</h2>
      <p>The system for investigating problems and fixing them so they don't recur.</p>
      <ul>
        <li><strong>Correction:</strong> Immediate fix.</li>
        <li><strong>Corrective Action:</strong> Eliminate the cause of a detected non-conformity.</li>
        <li><strong>Preventive Action:</strong> Eliminate the cause of a potential non-conformity.</li>
      </ul>

      <h3>FDA Form 483:</h3>
      <p>A document issued to firm management at the conclusion of an inspection when an investigator has observed conditions that may constitute violations of the Food Drug and Cosmetic (FD&C) Act.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is an FDA Form 483?",
        options: [
          "A certificate of approval",
          "A notice of inspectional observations (violations)",
          "A bill for inspection fees",
          "A thank you letter"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What does CAPA stand for?",
        options: [
          "Corrective and Preventive Action",
          "Clean And Polish Always",
          "Computer Aided Process Analysis",
          "Control And Prevent Accidents"
        ],
        correctAnswer: 0
      },
      {
        id: 3,
        question: "What is the purpose of an Internal Audit?",
        options: [
          "To punish employees",
          "To self-inspect and identify gaps before regulators do",
          "To waste time",
          "To hide data"
        ],
        correctAnswer: 1
      }
    ]
  }
];
