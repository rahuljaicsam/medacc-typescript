import { HeartPulse, Stethoscope, Activity, Pill, Thermometer, Brain, Bone, Eye, Ear } from 'lucide-react';

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

export const medicalCourseModules: CourseModule[] = [
  {
    id: 1,
    title: "Medical Terminology Basics",
    description: "Learn the roots, prefixes, and suffixes that form the language of medicine.",
    duration: "45 mins",
    icon: Stethoscope,
    content: `
      <h2>The Language of Medicine</h2>
      <p>Medical terminology is the standardized language used to describe the human body, diseases, diagnoses, and treatments. It is primarily based on Greek and Latin roots.</p>
      
      <h3>1. Word Structure</h3>
      <p>Most medical terms can be broken down into three parts:</p>
      <ul>
        <li><strong>Prefix:</strong> Found at the beginning of a word (e.g., 'hyper-' meaning high).</li>
        <li><strong>Root:</strong> The foundation of the word (e.g., 'cardio' meaning heart).</li>
        <li><strong>Suffix:</strong> Found at the end of a word (e.g., '-itis' meaning inflammation).</li>
      </ul>

      <h3>2. Common Prefixes</h3>
      <p>Examples include 'Hypo-' (low/under), 'Hyper-' (high/over), 'Tachy-' (fast), and 'Brady-' (slow).</p>
      
      <h3>3. Common Suffixes</h3>
      <p>Examples include '-itis' (inflammation), '-ectomy' (surgical removal), and '-ology' (study of).</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What does the suffix '-itis' mean?",
        options: [
          "Removal of",
          "Inflammation",
          "Study of",
          "Pain"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Which prefix means 'fast'?",
        options: [
          "Brady-",
          "Tachy-",
          "Hypo-",
          "Hyper-"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "What is the root word for 'heart'?",
        options: [
          "Neuro",
          "Gastro",
          "Cardio",
          "Derma"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 2,
    title: "Human Anatomy: Systems Overview",
    description: "A high-level tour of the major body systems and their functions.",
    duration: "60 mins",
    icon: Activity,
    content: `
      <h2>Major Body Systems</h2>
      <p>The human body is organized into several systems that work together to maintain life.</p>
      
      <h3>1. Circulatory System</h3>
      <p>Moves blood, nutrients, oxygen, carbon dioxide, and hormones around the body. Key organs: Heart, blood vessels.</p>
      
      <h3>2. Respiratory System</h3>
      <p>Allows for gas exchange (oxygen in, carbon dioxide out). Key organs: Lungs, trachea.</p>
      
      <h3>3. Nervous System</h3>
      <p>Controls voluntary and involuntary actions and transmits signals. Key organs: Brain, spinal cord, nerves.</p>

      <h3>4. Musculoskeletal System</h3>
      <p>Provides structure, support, and movement. Key components: Bones, muscles, cartilage, tendons.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Which system is responsible for gas exchange?",
        options: [
          "Circulatory",
          "Respiratory",
          "Nervous",
          "Digestive"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What is the main organ of the Circulatory System?",
        options: [
          "Brain",
          "Lungs",
          "Heart",
          "Stomach"
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        question: "Which system controls voluntary actions?",
        options: [
          "Nervous",
          "Musculoskeletal",
          "Endocrine",
          "Immune"
        ],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 3,
    title: "Pharmacology Fundamentals",
    description: "Understand drug classifications, administration routes, and mechanisms of action.",
    duration: "50 mins",
    icon: Pill,
    content: `
      <h2>Basics of Pharmacology</h2>
      <p>Pharmacology is the branch of medicine concerned with the uses, effects, and modes of action of drugs.</p>
      
      <h3>1. Pharmacokinetics</h3>
      <p>What the body does to the drug: Absorption, Distribution, Metabolism, and Excretion (ADME).</p>
      
      <h3>2. Pharmacodynamics</h3>
      <p>What the drug does to the body: Receptor binding, signal transduction, and physiological effects.</p>
      
      <h3>3. Routes of Administration</h3>
      <p>Oral (by mouth), Intravenous (IV), Intramuscular (IM), Subcutaneous (under skin), Topical (on skin).</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What does Pharmacokinetics refer to?",
        options: [
          "What the drug does to the body",
          "What the body does to the drug",
          "The cost of the drug",
          "The chemical structure of the drug"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Which route of administration involves injection into a vein?",
        options: [
          "Oral",
          "Intramuscular",
          "Intravenous",
          "Topical"
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        question: "What does ADME stand for?",
        options: [
          "Absorption, Distribution, Metabolism, Excretion",
          "Action, Dose, Monitor, Evaluate",
          "Administer, Diagnose, Manage, Effect",
          "None of the above"
        ],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 4,
    title: "Vital Signs & Patient Monitoring",
    description: "Interpreting key health indicators: BP, HR, RR, Temp, and O2 Sat.",
    duration: "40 mins",
    icon: HeartPulse,
    content: `
      <h2>The Vital Signs</h2>
      <p>Vital signs are clinical measurements, specifically pulse rate, temperature, respiration rate, and blood pressure, that indicate the state of a patient's essential body functions.</p>
      
      <h3>1. Blood Pressure (BP)</h3>
      <p>The force of circulating blood on the walls of the arteries. Normal is around 120/80 mmHg.</p>
      
      <h3>2. Heart Rate (HR)</h3>
      <p>The number of heartbeats per minute. Normal resting rate for adults is 60-100 bpm.</p>
      
      <h3>3. Respiratory Rate (RR)</h3>
      <p>The number of breaths per minute. Normal for adults is 12-20 breaths per minute.</p>
      
      <h3>4. Body Temperature</h3>
      <p>Normal body temperature is approximately 98.6°F (37°C).</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is a normal resting heart rate for adults?",
        options: [
          "40-60 bpm",
          "60-100 bpm",
          "100-120 bpm",
          "120-140 bpm"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What does 'BP' stand for?",
        options: [
          "Blood Pulse",
          "Body Pressure",
          "Blood Pressure",
          "Body Pulse"
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        question: "What is the normal respiratory rate range for adults?",
        options: [
          "5-10 breaths/min",
          "12-20 breaths/min",
          "25-30 breaths/min",
          "30-40 breaths/min"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 5,
    title: "Pathology: Disease Mechanisms",
    description: "Introduction to how diseases develop: infection, inflammation, neoplasia.",
    duration: "55 mins",
    icon: Thermometer,
    content: `
      <h2>Understanding Disease</h2>
      <p>Pathology is the study of the causes and effects of disease or injury.</p>
      
      <h3>1. Inflammation</h3>
      <p>The body's immune response to injury or infection. Signs: Redness, heat, swelling, pain.</p>
      
      <h3>2. Infection</h3>
      <p>Invasion of the body by harmful organisms (bacteria, viruses, fungi, parasites).</p>
      
      <h3>3. Neoplasia</h3>
      <p>Uncontrolled, abnormal growth of cells or tissues in the body (Tumors/Cancer).</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Which of the following is NOT a sign of inflammation?",
        options: [
          "Redness",
          "Swelling",
          "Pain",
          "Euphoria"
        ],
        correctAnswer: 3
      },
      {
        id: 2,
        question: "What is Neoplasia?",
        options: [
          "A viral infection",
          "Uncontrolled cell growth",
          "A bacterial infection",
          "Tissue death"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Pathology is the study of?",
        options: [
          "Drug interactions",
          "Surgical techniques",
          "Disease causes and effects",
          "Healthy lifestyles"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 6,
    title: "Healthcare Systems & Insurance",
    description: "Navigating the complex landscape of payers, providers, and policy.",
    duration: "60 mins",
    icon: Activity,
    content: `
      <h2>Healthcare Ecosystem</h2>
      <p>Understanding how healthcare is delivered and financed.</p>
      
      <h3>1. Payers</h3>
      <p>Entities that pay for medical services (e.g., Insurance companies, Government programs like Medicare/Medicaid).</p>
      
      <h3>2. Providers</h3>
      <p>Entities that deliver care (e.g., Doctors, Hospitals, Clinics).</p>
      
      <h3>3. Patients</h3>
      <p>The recipients of care.</p>
      
      <h3>4. Models</h3>
      <p>Fee-for-Service (pay per visit) vs. Value-Based Care (pay for outcomes).</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is a 'Payer' in healthcare?",
        options: [
          "The patient",
          "The doctor",
          "The entity paying for services (e.g., Insurance)",
          "The hospital"
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "Who are 'Providers'?",
        options: [
          "Insurance companies",
          "Doctors and Hospitals",
          "Pharmaceutical companies",
          "Government regulators"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "What is Value-Based Care?",
        options: [
          "Paying for the volume of services",
          "Paying based on patient health outcomes",
          "Free healthcare for all",
          "Discounted medical supplies"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 7,
    title: "Neurology Basics",
    description: "Structure and function of the nervous system and common disorders.",
    duration: "50 mins",
    icon: Brain,
    content: `
      <h2>The Nervous System</h2>
      <p>The command center of the body.</p>
      
      <h3>1. CNS vs PNS</h3>
      <p>Central Nervous System (Brain & Spinal Cord) vs. Peripheral Nervous System (Nerves outside CNS).</p>
      
      <h3>2. Neurons</h3>
      <p>The fundamental units of the brain and nervous system, responsible for receiving sensory input and sending motor commands.</p>
      
      <h3>3. Common Disorders</h3>
      <p>Stroke, Alzheimer's, Parkinson's, Epilepsy, Migraine.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What constitutes the Central Nervous System (CNS)?",
        options: [
          "Brain only",
          "Spinal Cord only",
          "Brain and Spinal Cord",
          "Nerves in the limbs"
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "What is the fundamental unit of the nervous system?",
        options: [
          "Nephron",
          "Neuron",
          "Alveoli",
          "Osteocyte"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Which of the following is a neurological disorder?",
        options: [
          "Diabetes",
          "Alzheimer's",
          "Asthma",
          "Hypertension"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 8,
    title: "Musculoskeletal Disorders",
    description: "Common injuries and conditions affecting bones, muscles, and joints.",
    duration: "45 mins",
    icon: Bone,
    content: `
      <h2>Bones and Muscles</h2>
      <p>The framework that supports and moves the body.</p>
      
      <h3>1. Fractures</h3>
      <p>Breaks in the bone (Simple, Compound, Comminuted).</p>
      
      <h3>2. Arthritis</h3>
      <p>Inflammation of the joints. Osteoarthritis (wear and tear) vs. Rheumatoid Arthritis (autoimmune).</p>
      
      <h3>3. Osteoporosis</h3>
      <p>A condition where bones become weak and brittle.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is Osteoporosis?",
        options: [
          "Inflammation of joints",
          "Muscle weakness",
          "Weak and brittle bones",
          "Broken bone"
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "What is the difference between Osteoarthritis and Rheumatoid Arthritis?",
        options: [
          "Osteo is autoimmune, Rheumatoid is wear and tear",
          "Osteo is wear and tear, Rheumatoid is autoimmune",
          "Both are autoimmune",
          "Both are wear and tear"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "What is a fracture?",
        options: [
          "A torn muscle",
          "A broken bone",
          "A sprained ligament",
          "A dislocated joint"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 9,
    title: "Sensory Systems: Vision & Hearing",
    description: "Anatomy and physiology of the eye and ear.",
    duration: "40 mins",
    icon: Eye,
    content: `
      <h2>Senses</h2>
      <p>How we perceive the world around us.</p>
      
      <h3>1. The Eye (Vision)</h3>
      <p>Key parts: Cornea, Iris, Pupil, Lens, Retina, Optic Nerve. Disorders: Myopia, Hyperopia, Cataracts.</p>
      
      <h3>2. The Ear (Hearing & Balance)</h3>
      <p>Key parts: Outer Ear, Middle Ear (Eardrum, ossicles), Inner Ear (Cochlea). Disorders: Tinnitus, Vertigo.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Which part of the eye contains light-sensitive cells?",
        options: [
          "Cornea",
          "Lens",
          "Retina",
          "Pupil"
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "Which part of the ear is responsible for balance?",
        options: [
          "Outer Ear",
          "Inner Ear",
          "Middle Ear",
          "Eardrum"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "What is Myopia?",
        options: [
          "Farsightedness",
          "Nearsightedness",
          "Blindness",
          "Color blindness"
        ],
        correctAnswer: 1
      }
    ]
  }
];
