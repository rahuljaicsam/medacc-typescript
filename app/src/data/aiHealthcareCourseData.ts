import { type LucideIcon, Brain, Database, Cpu, MessageSquare, Scan, Activity, Shield, Code, Network } from 'lucide-react';

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

export const aiHealthcareCourseModules: CourseModule[] = [
  {
    id: 1,
    title: "Introduction to AI in Healthcare",
    description: "Overview of AI, Machine Learning, and Deep Learning concepts.",
    duration: "45 min",
    icon: Brain,
    content: `
      <h2>Demystifying AI</h2>
      <p>Artificial Intelligence (AI) is the simulation of human intelligence processes by machines. In healthcare, it encompasses a range of technologies that enable machines to sense, comprehend, act, and learn.</p>
      
      <h3>Key Definitions</h3>
      <ul>
        <li><strong>Artificial Intelligence (AI):</strong> The broad umbrella of computer systems capable of performing tasks that typically require human intelligence.</li>
        <li><strong>Machine Learning (ML):</strong> A subset of AI where computers learn from data without being explicitly programmed for specific rules.</li>
        <li><strong>Deep Learning (DL):</strong> A subset of ML based on artificial neural networks with multiple layers (hence "deep"), capable of learning from vast amounts of unstructured data like images and text.</li>
      </ul>

      <h3>The "Black Box" Problem</h3>
      <p>One challenge in healthcare AI is explainability—understanding <em>why</em> an algorithm made a specific diagnosis.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the relationship between AI, ML, and DL?",
        options: [
          "They are three completely different things",
          "DL is a subset of ML, which is a subset of AI",
          "AI is a subset of ML",
          "ML is a subset of DL"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What distinguishes Machine Learning from traditional programming?",
        options: [
          "It uses more electricity",
          "It learns from data rather than following explicit rules",
          "It is always slower",
          "It requires a robot"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "What is the 'Black Box' problem in AI?",
        options: [
          "The computer case is black",
          "The inability to explain how an AI model reached a specific decision",
          "Data storage failure",
          "Power outage"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 2,
    title: "Healthcare Data & Datasets",
    description: "The fuel for AI: EHRs, Imaging, and Genomics.",
    duration: "50 min",
    icon: Database,
    content: `
      <h2>Data: The Lifeblood of AI</h2>
      <p>AI models are only as good as the data they are trained on ("Garbage In, Garbage Out").</p>

      <h3>Types of Healthcare Data</h3>
      <ul>
        <li><strong>Structured Data:</strong> Organized data (EHRs, lab values, demographics). Easy for ML models to digest.</li>
        <li><strong>Unstructured Data:</strong> Clinical notes, medical imaging (X-rays, MRIs), pathology slides. Requires Deep Learning or NLP.</li>
        <li><strong>Genomic Data:</strong> Massive sequences of DNA/RNA.</li>
      </ul>

      <h3>Challenges</h3>
      <ul>
        <li><strong>Interoperability:</strong> Different hospitals use different systems that don't talk to each other.</li>
        <li><strong>Bias:</strong> If training data lacks diversity, the AI will perform poorly on underrepresented populations.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "Clinical notes and X-ray images are examples of what type of data?",
        options: [
          "Structured Data",
          "Unstructured Data",
          "Metadata",
          "SQL Data"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What happens if an AI is trained on biased data?",
        options: [
          "It becomes unbiased",
          "It will likely perform poorly on underrepresented groups",
          "It works perfectly for everyone",
          "It refuses to work"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Which saying describes the importance of data quality?",
        options: [
          "Slow and steady wins the race",
          "Garbage In, Garbage Out",
          "Haste makes waste",
          "Practice makes perfect"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 3,
    title: "Computer Vision in Radiology",
    description: "Detecting diseases from Medical Imaging.",
    duration: "60 min",
    icon: Scan,
    content: `
      <h2>AI Eyes: Computer Vision</h2>
      <p>Computer Vision (CV) allows computers to "see" and interpret visual information. In healthcare, this is revolutionizing radiology and pathology.</p>

      <h3>Convolutional Neural Networks (CNNs)</h3>
      <p>The architecture behind most image recognition AI. It scans images to detect patterns like edges, textures, and shapes.</p>

      <h3>Applications</h3>
      <ul>
        <li><strong>Tumor Detection:</strong> Spotting lung nodules or breast cancer in scans faster than human eyes.</li>
        <li><strong>Retinopathy:</strong> Detecting diabetic eye disease from fundus photos.</li>
        <li><strong>Triage:</strong> Prioritizing urgent scans (e.g., brain bleed) for radiologist review.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What type of Neural Network is primarily used for image analysis?",
        options: [
          "Recurrent Neural Network (RNN)",
          "Convolutional Neural Network (CNN)",
          "Transformer",
          "Decision Tree"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "How can AI assist radiologists?",
        options: [
          "By replacing them entirely immediately",
          "By prioritizing urgent cases and acting as a second pair of eyes",
          "By taking the X-rays",
          "By repairing the machines"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Which condition can be detected from eye fundus photos using AI?",
        options: [
          "Broken leg",
          "Diabetic Retinopathy",
          "Flu",
          "Asthma"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 4,
    title: "Natural Language Processing (NLP) & LLMs",
    description: "Understanding clinical notes and chatbots.",
    duration: "55 min",
    icon: MessageSquare,
    content: `
      <h2>Computers that Read and Speak</h2>
      <p>NLP enables computers to understand, interpret, and generate human language.</p>

      <h3>Large Language Models (LLMs)</h3>
      <p>Models like GPT-4 trained on vast amounts of text. In healthcare, they can summarize patient histories, draft medical notes, and answer patient queries.</p>

      <h3>Applications</h3>
      <ul>
        <li><strong>Clinical Documentation:</strong> Automated scribing during doctor-patient visits.</li>
        <li><strong>Information Extraction:</strong> Pulling diagnosis codes (ICD-10) from unstructured notes.</li>
        <li><strong>Chatbots:</strong> Triage and mental health support.</li>
      </ul>

      <h3>Hallucinations</h3>
      <p>The risk of LLMs confidently stating incorrect medical facts.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What does NLP stand for?",
        options: [
          "Natural Learning Process",
          "Natural Language Processing",
          "Neural Language Path",
          "No Language Problem"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What is a major risk of using LLMs in medicine?",
        options: [
          "They are too slow",
          "Hallucinations (confidently stating falsehoods)",
          "They cannot spell",
          "They are too honest"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "How can NLP help with administrative burden?",
        options: [
          "By automating clinical documentation and coding",
          "By seeing patients",
          "By performing surgery",
          "By cleaning the hospital"
        ],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 5,
    title: "AI in Drug Discovery",
    description: "Accelerating the path from molecule to medicine.",
    duration: "50 min",
    icon: Network,
    content: `
      <h2>Faster, Cheaper Drugs</h2>
      <p>Traditional drug discovery takes 10+ years and billions of dollars. AI is compressing this timeline.</p>

      <h3>Key Applications</h3>
      <ul>
        <li><strong>Target Identification:</strong> Finding the protein or gene responsible for a disease.</li>
        <li><strong>Molecule Screening:</strong> Virtually testing millions of molecules to see which binds to the target (Docking).</li>
        <li><strong>De Novo Design:</strong> Generative AI creating completely new molecule structures that don't exist in nature.</li>
      </ul>

      <h3>AlphaFold</h3>
      <p>Google DeepMind's AI that solved the "Protein Folding Problem," predicting the 3D structure of nearly all known proteins.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What problem did AlphaFold solve?",
        options: [
          "Protein Folding (predicting 3D structure)",
          "Cancer cure",
          "Common cold",
          "DNA sequencing"
        ],
        correctAnswer: 0
      },
      {
        id: 2,
        question: "What is 'De Novo' drug design?",
        options: [
          "Finding old drugs",
          "Designing new molecules from scratch using AI",
          "Herbal medicine",
          "Random guessing"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "How does AI help in molecule screening?",
        options: [
          "By mixing chemicals in a lab",
          "By virtually testing millions of molecules (simulation)",
          "By asking patients",
          "By reading books"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 6,
    title: "Predictive Analytics & Precision Medicine",
    description: "Predicting outcomes and tailoring treatments.",
    duration: "45 min",
    icon: Activity,
    content: `
      <h2>Predicting the Future</h2>
      <p>Using historical data to predict future outcomes.</p>

      <h3>Applications</h3>
      <ul>
        <li><strong>Sepsis Prediction:</strong> Alerting doctors hours before a patient goes into septic shock based on vitals trends.</li>
        <li><strong>Readmission Risk:</strong> Identifying patients likely to return to the hospital so interventions can be made.</li>
      </ul>

      <h3>Precision Medicine</h3>
      <p>Moving away from "one size fits all" to treatments tailored to an individual's genetic makeup and lifestyle. AI integrates these complex variables.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the goal of Precision Medicine?",
        options: [
          "One size fits all treatment",
          "Tailoring treatment to individual genetics and lifestyle",
          "Treating everyone the same",
          "Using the cheapest drug"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "How is AI used in Sepsis management?",
        options: [
          "To cure it instantly",
          "To predict it early based on subtle trends in vitals",
          "To bill the patient",
          "To clean the wound"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Predictive analytics primarily uses what to forecast the future?",
        options: [
          "Crystal balls",
          "Historical data and trends",
          "Random numbers",
          "Doctor's intuition alone"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 7,
    title: "Robotics & AI Surgery",
    description: "Intelligent assistants in the operating room.",
    duration: "55 min",
    icon: Cpu,
    content: `
      <h2>The Robotic Hand</h2>
      <p>Surgical robots (like Da Vinci) are currently tele-operated (controlled by humans). AI is moving them toward autonomy.</p>

      <h3>Levels of Autonomy</h3>
      <ul>
        <li><strong>Assistance:</strong> Smoothing tremors, guiding instruments to stay within "no-fly zones" (nerves/vessels).</li>
        <li><strong>Partial Autonomy:</strong> The robot suturing (stitching) a wound on its own under supervision.</li>
      </ul>

      <h3>Pre-operative Planning</h3>
      <p>AI analyzing scans to plan the perfect path for a surgery before the first cut is made.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Most current surgical robots are:",
        options: [
          "Fully autonomous",
          "Tele-operated (controlled by a human surgeon)",
          "Controlled by AI only",
          "Random"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "How can AI assist during surgery?",
        options: [
          "By playing music",
          "By identifying critical structures to avoid (no-fly zones)",
          "By taking a break",
          "By diagnosing the patient"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "What is a benefit of robotic surgery?",
        options: [
          "Tremor reduction and high precision",
          "It is cheaper",
          "It is faster",
          "It requires no training"
        ],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 8,
    title: "Ethics, Bias & Regulation",
    description: "The moral and legal challenges of AI.",
    duration: "45 min",
    icon: Shield,
    content: `
      <h2>Responsible AI</h2>
      <p>With great power comes great responsibility.</p>

      <h3>Algorithmic Bias</h3>
      <p>If an AI detects skin cancer but was only trained on light skin, it will fail for dark-skinned patients. This exacerbates health disparities.</p>

      <h3>Regulation (FDA)</h3>
      <p>The FDA regulates AI as "Software as a Medical Device" (SaMD). They are developing frameworks for "adaptive" algorithms that learn and change over time.</p>

      <h3>Liability</h3>
      <p>If an AI makes a mistake, who is responsible? The doctor, the hospital, or the developer?</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is Algorithmic Bias?",
        options: [
          "The computer overheating",
          "Systematic and repeatable errors that create unfair outcomes (e.g., across races)",
          "A virus",
          "A coding error"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "How does the FDA classify most AI medical tools?",
        options: [
          "Hardware",
          "Software as a Medical Device (SaMD)",
          "Drugs",
          "Supplements"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Why is liability a challenge in AI medicine?",
        options: [
          "It is clear who is to blame",
          "It is unclear if the doctor or the software is at fault for an error",
          "Computers never make mistakes",
          "Patients don't care"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 9,
    title: "Building an AI Healthcare Startup",
    description: "From validation to deployment.",
    duration: "40 min",
    icon: Code,
    content: `
      <h2>Commercializing AI</h2>
      
      <h3>Data Strategy</h3>
      <p>You need access to data. Partnerships with hospitals or buying datasets is often the first hurdle.</p>

      <h3>Validation</h3>
      <p>You must prove your AI works.
        <ul>
          <li><strong>Retrospective Study:</strong> Testing on past data.</li>
          <li><strong>Prospective Study:</strong> Testing on real patients in real-time (Gold Standard).</li>
        </ul>
      </p>

      <h3>Workflow Integration</h3>
      <p>The best AI will fail if it adds clicks to the doctor's day. It must integrate seamlessly into the EHR workflow.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the 'Gold Standard' for validating a medical AI?",
        options: [
          "Retrospective study (past data)",
          "Prospective study (real-time clinical setting)",
          "Asking a friend",
          "Computer simulation"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Why do many AI startups fail in hospitals?",
        options: [
          "Their AI is too good",
          "Poor integration into clinical workflow (adding burden)",
          "Doctors hate technology",
          "Hospitals have no computers"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "What is a primary hurdle for early-stage AI startups?",
        options: [
          "Access to quality datasets",
          "Buying computers",
          "Hiring a CEO",
          "Renting an office"
        ],
        correctAnswer: 0
      }
    ]
  }
];
