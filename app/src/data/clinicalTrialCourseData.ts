import { Microscope, Beaker, ClipboardCheck, Users, Activity, FileText, Database, ShieldCheck, CheckCircle } from 'lucide-react';

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

export const clinicalTrialCourseModules: CourseModule[] = [
  {
    id: 1,
    title: "Introduction to Clinical Research",
    description: "Overview of the drug development process, from bench to bedside.",
    duration: "45 mins",
    icon: Microscope,
    content: `
      <h2>Drug Development Lifecycle</h2>
      <p>The journey from a chemical compound to an approved drug takes 10-15 years and costs billions.</p>
      
      <h3>Key Stages:</h3>
      <ul>
        <li><strong>Discovery:</strong> Identifying a target and a lead compound.</li>
        <li><strong>Preclinical:</strong> Testing in lab (in vitro) and animals (in vivo) for safety.</li>
        <li><strong>Clinical:</strong> Testing in humans (Phase I-IV).</li>
        <li><strong>Regulatory Review:</strong> FDA/EMA approval.</li>
      </ul>

      <h3>Types of Clinical Trials:</h3>
      <ul>
        <li><strong>Treatment:</strong> Testing new treatments.</li>
        <li><strong>Prevention:</strong> Looking for better ways to prevent disease.</li>
        <li><strong>Diagnostic:</strong> Finding better tests for diagnosing.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the correct order of drug development stages?",
        options: [
          "Clinical -> Preclinical -> Discovery",
          "Discovery -> Clinical -> Preclinical",
          "Discovery -> Preclinical -> Clinical",
          "Preclinical -> Discovery -> Clinical"
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "Which type of trial tests new treatments?",
        options: [
          "Prevention trials",
          "Diagnostic trials",
          "Treatment trials",
          "Screening trials"
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        question: "On average, how long does the drug development process take?",
        options: [
          "1-2 years",
          "5-7 years",
          "10-15 years",
          "20-25 years"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 2,
    title: "Preclinical Bench Studies",
    description: "Designing rigorous in vitro and in vivo studies to establish safety and efficacy.",
    duration: "60 mins",
    icon: Beaker,
    content: `
      <h2>Preclinical Studies</h2>
      <p>Before testing on humans, safety and efficacy must be proven in the lab.</p>
      
      <h3>In Vitro Studies:</h3>
      <p>Performed in test tubes or petri dishes using cells or tissues. Used to screen compounds and understand mechanisms.</p>
      
      <h3>In Vivo Studies:</h3>
      <p>Performed in living organisms (animals). Mandatory for assessing toxicity (LD50) and pharmacokinetics (ADME).</p>
      
      <h3>GLP (Good Laboratory Practice):</h3>
      <p>A quality system concerned with the organizational process and conditions under which non-clinical health and environmental safety studies are planned, performed, monitored, recorded, archived, and reported.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "In Vitro studies are performed in:",
        options: [
          "Living humans",
          "Living animals",
          "Test tubes or petri dishes",
          "Computer simulations only"
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "What is the primary purpose of Good Laboratory Practice (GLP)?",
        options: [
          "To keep the lab clean",
          "To ensure the quality and integrity of non-clinical safety data",
          "To reduce the cost of research",
          "To speed up drug discovery"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "LD50 is a measure of:",
        options: [
          "Efficacy",
          "Toxicity (Lethal Dose for 50% of population)",
          "Absorption",
          "Shelf life"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 3,
    title: "Phases of Clinical Trials",
    description: "Deep dive into Phase I (Safety), Phase II (Efficacy), Phase III (Confirmation), and Phase IV.",
    duration: "55 mins",
    icon: Activity,
    content: `
      <h2>Clinical Trial Phases</h2>
      <p>Human testing is divided into four distinct phases.</p>
      
      <h3>Phase I: Safety</h3>
      <ul>
        <li><strong>Participants:</strong> 20-80 healthy volunteers.</li>
        <li><strong>Goal:</strong> Determine safety, dosage, and side effects.</li>
      </ul>

      <h3>Phase II: Efficacy</h3>
      <ul>
        <li><strong>Participants:</strong> 100-300 patients with the disease.</li>
        <li><strong>Goal:</strong> Evaluate effectiveness and look for side effects.</li>
      </ul>

      <h3>Phase III: Confirmation</h3>
      <ul>
        <li><strong>Participants:</strong> 1,000-3,000 patients across multiple sites.</li>
        <li><strong>Goal:</strong> Confirm effectiveness, monitor side effects, compare to commonly used treatments.</li>
      </ul>

      <h3>Phase IV: Post-Marketing</h3>
      <ul>
        <li><strong>Participants:</strong> Thousands of patients.</li>
        <li><strong>Goal:</strong> Gather additional information on risks, benefits, and optimal use after approval.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "Which phase primarily tests for safety in healthy volunteers?",
        options: [
          "Phase I",
          "Phase II",
          "Phase III",
          "Phase IV"
        ],
        correctAnswer: 0
      },
      {
        id: 2,
        question: "Phase III trials typically involve how many patients?",
        options: [
          "20-80",
          "100-300",
          "1,000-3,000",
          "10,000+"
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        question: "Which phase occurs after the drug has been approved by regulators?",
        options: [
          "Phase I",
          "Phase II",
          "Phase III",
          "Phase IV"
        ],
        correctAnswer: 3
      }
    ]
  },
  {
    id: 4,
    title: "Trial Design & Methodology",
    description: "Randomization, blinding, control groups, and endpoints.",
    duration: "60 mins",
    icon: ClipboardCheck,
    content: `
      <h2>Key Design Elements</h2>
      <p>Designing a robust study to minimize bias and ensure validity.</p>
      
      <h3>Randomization:</h3>
      <p>Assigning participants to groups by chance to reduce selection bias.</p>
      
      <h3>Blinding (Masking):</h3>
      <ul>
        <li><strong>Single-blind:</strong> Patient doesn't know treatment.</li>
        <li><strong>Double-blind:</strong> Neither patient nor doctor knows treatment (Gold Standard).</li>
      </ul>

      <h3>Control Groups:</h3>
      <ul>
        <li><strong>Placebo Control:</strong> Inert substance.</li>
        <li><strong>Active Control:</strong> Standard of care drug.</li>
      </ul>

      <h3>Endpoints:</h3>
      <p>Outcomes measured to see if the drug works (e.g., survival rate, reduction in tumor size).</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the 'Gold Standard' for clinical trial design?",
        options: [
          "Open-label, uncontrolled",
          "Single-blind, randomized",
          "Randomized, Double-blind, Placebo-controlled",
          "Retrospective case study"
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "What is the purpose of randomization?",
        options: [
          "To confuse the patients",
          "To reduce selection bias",
          "To save money",
          "To speed up the trial"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "In a double-blind study, who knows which treatment the patient is receiving?",
        options: [
          "The patient",
          "The doctor",
          "Neither the patient nor the doctor",
          "Both the patient and the doctor"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 5,
    title: "Protocol Development",
    description: "Writing the study protocol: inclusion/exclusion criteria, schedule of events, and statistical plan.",
    duration: "50 mins",
    icon: FileText,
    content: `
      <h2>The Study Protocol</h2>
      <p>The blueprint for the entire clinical trial.</p>
      
      <h3>Key Sections:</h3>
      <ul>
        <li><strong>Inclusion/Exclusion Criteria:</strong> Defines who can participate (age, disease stage, comorbidities).</li>
        <li><strong>Schedule of Events:</strong> What happens at each visit (blood draw, scan, drug administration).</li>
        <li><strong>Statistical Analysis Plan (SAP):</strong> How the data will be analyzed to determine significance.</li>
      </ul>

      <h3>Amendments:</h3>
      <p>Changes to the protocol must be approved by the IRB/Ethics Committee.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Which section of the protocol defines who can participate in the study?",
        options: [
          "Statistical Analysis Plan",
          "Inclusion/Exclusion Criteria",
          "Schedule of Events",
          "Budget"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What document serves as the 'blueprint' for the clinical trial?",
        options: [
          "Informed Consent Form",
          "Investigator's Brochure",
          "Study Protocol",
          "Case Report Form"
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        question: "Who must approve changes (amendments) to the protocol?",
        options: [
          "The patient",
          "The pharmacist",
          "IRB/Ethics Committee",
          "The CEO"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 6,
    title: "Patient Recruitment & Retention",
    description: "Strategies for finding and keeping participants in the trial.",
    duration: "45 mins",
    icon: Users,
    content: `
      <h2>Recruitment Challenges</h2>
      <p>Recruitment is the #1 cause of trial delays.</p>
      
      <h3>Strategies:</h3>
      <ul>
        <li><strong>Site Selection:</strong> Choosing hospitals with access to the right patient population.</li>
        <li><strong>Advertising:</strong> Digital media, patient advocacy groups.</li>
        <li><strong>Referrals:</strong> Engaging primary care physicians.</li>
      </ul>

      <h2>Retention</h2>
      <p>Keeping patients in the study until the end.</p>
      <ul>
        <li><strong>Burden reduction:</strong> Minimizing visits, providing transportation.</li>
        <li><strong>Engagement:</strong> Regular communication and education.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the leading cause of clinical trial delays?",
        options: [
          "Regulatory approval",
          "Patient recruitment",
          "Data analysis",
          "Drug manufacturing"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Which strategy helps with patient retention?",
        options: [
          "Increasing the number of painful procedures",
          "Reducing patient burden (e.g., transportation support)",
          "Stopping communication",
          "Making the consent form longer"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Why is site selection important for recruitment?",
        options: [
          "To find the cheapest location",
          "To ensure access to the target patient population",
          "To have a nice view",
          "To avoid regulations"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 7,
    title: "Data Management & Biostatistics",
    description: "Collecting, cleaning, and analyzing trial data (CRFs, EDC, p-values).",
    duration: "55 mins",
    icon: Database,
    content: `
      <h2>Data Collection</h2>
      <ul>
        <li><strong>CRF (Case Report Form):</strong> Document used to record data for each patient.</li>
        <li><strong>EDC (Electronic Data Capture):</strong> Software used to collect trial data digitally.</li>
      </ul>

      <h2>Biostatistics</h2>
      <p>The mathematics of trial interpretation.</p>
      <ul>
        <li><strong>P-value:</strong> Measures the probability that results happened by chance. Typically, p < 0.05 is significant.</li>
        <li><strong>Power:</strong> The ability of a study to detect a difference if one exists.</li>
        <li><strong>Intention-to-Treat (ITT):</strong> Analyzing all randomized patients, regardless of whether they completed treatment.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What does EDC stand for in clinical trials?",
        options: [
          "Electronic Drug Control",
          "Electronic Data Capture",
          "Early Disease Cure",
          "Emergency Doctor Call"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "A p-value of less than 0.05 typically indicates:",
        options: [
          "The results are statistically significant",
          "The results happened by chance",
          "The drug is unsafe",
          "The trial failed"
        ],
        correctAnswer: 0
      },
      {
        id: 3,
        question: "What is Intention-to-Treat (ITT) analysis?",
        options: [
          "Analyzing only patients who finished the drug",
          "Analyzing only patients who got better",
          "Analyzing all randomized patients",
          "Analyzing only the placebo group"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 8,
    title: "Ethical Conduct & GCP",
    description: "Informed consent, IRB/IEC roles, and protecting human subjects.",
    duration: "50 mins",
    icon: ShieldCheck,
    content: `
      <h2>Ethics in Research</h2>
      <p>Protecting the rights, safety, and well-being of trial participants.</p>
      
      <h3>Key Principles (Belmont Report):</h3>
      <ul>
        <li><strong>Respect for Persons:</strong> Informed consent.</li>
        <li><strong>Beneficence:</strong> Maximize benefits, minimize harm.</li>
        <li><strong>Justice:</strong> Fair distribution of burdens and benefits.</li>
      </ul>

      <h3>Informed Consent:</h3>
      <p>A process, not just a form. Patients must understand risks, benefits, and alternatives before agreeing.</p>
      
      <h3>IRB (Institutional Review Board):</h3>
      <p>Independent committee that reviews research to ensure it is ethical.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Which document outlines the key ethical principles for human research in the US?",
        options: [
          "The Constitution",
          "The Belmont Report",
          "The Hippocratic Oath",
          "The FDA Guidelines"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What is the primary role of an IRB?",
        options: [
          "To fund the study",
          "To recruit patients",
          "To protect the rights and welfare of human subjects",
          "To analyze the data"
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        question: "Informed consent is best described as:",
        options: [
          "A signature on a piece of paper",
          "A continuous process of information exchange",
          "A waiver of rights",
          "A guarantee of cure"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 9,
    title: "Trial Execution & Monitoring",
    description: "Site initiation, monitoring visits, and closing out the trial.",
    duration: "45 mins",
    icon: CheckCircle,
    content: `
      <h2>Running the Trial</h2>
      <p>Ensuring the protocol is followed at every site.</p>
      
      <h3>Site Visits:</h3>
      <ul>
        <li><strong>SIV (Site Initiation Visit):</strong> Training staff before starting.</li>
        <li><strong>IMV (Interim Monitoring Visit):</strong> Checking data quality and compliance during the trial.</li>
        <li><strong>COV (Close-Out Visit):</strong> Final reconciliation and archiving after the trial ends.</li>
      </ul>

      <h3>CRA (Clinical Research Associate):</h3>
      <p>The 'Monitor' who visits sites to verify data against source documents (SDV - Source Data Verification).</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the role of a CRA (Clinical Research Associate)?",
        options: [
          "To treat patients",
          "To monitor the trial sites for compliance and data quality",
          "To manufacture the drug",
          "To approve the protocol"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Which visit occurs before the site can start enrolling patients?",
        options: [
          "COV (Close-Out Visit)",
          "IMV (Interim Monitoring Visit)",
          "SIV (Site Initiation Visit)",
          "Audit"
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        question: "What is Source Data Verification (SDV)?",
        options: [
          "Checking if the drug is real",
          "Verifying trial data against original medical records",
          "Verifying the doctor's license",
          "Checking the patient's ID"
        ],
        correctAnswer: 1
      }
    ]
  }
];
