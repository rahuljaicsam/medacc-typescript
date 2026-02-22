import { Dna, Microscope, FlaskConical, Activity, Pill, Scale, Database, TrendingUp, Zap } from 'lucide-react';

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
  icon: any; // LucideIcon type is tricky to import directly sometimes, using any for simplicity
  content: string;
  quiz: QuizQuestion[];
}

export const biotechCourseModules: CourseModule[] = [
  {
    id: 1,
    title: "Foundations of Molecular Biology",
    description: "Understand the core principles of life: DNA, RNA, and proteins.",
    duration: "45 mins",
    icon: Dna,
    content: `
      <h2>The Central Dogma of Molecular Biology</h2>
      <p>The central dogma of molecular biology describes the two-step process, transcription and translation, by which the information in genes flows into proteins: DNA → RNA → Protein.</p>
      
      <h3>1. DNA Replication</h3>
      <p>DNA replication is the process by which a double-stranded DNA molecule is copied to produce two identical DNA molecules. This is essential for cell division.</p>
      
      <h3>2. Transcription</h3>
      <p>Transcription is the process by which the information in a strand of DNA is copied into a new molecule of messenger RNA (mRNA). DNA safely and stably stores genetic material in the nuclei of cells as a reference, or template.</p>
      
      <h3>3. Translation</h3>
      <p>Translation is the process by which a protein is synthesized from the information contained in a molecule of messenger RNA (mRNA). Translation occurs in a structure called the ribosome.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the Central Dogma of Molecular Biology?",
        options: [
          "Protein -> RNA -> DNA",
          "DNA -> RNA -> Protein",
          "RNA -> DNA -> Protein",
          "DNA -> Protein -> RNA"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Where does translation occur?",
        options: [
          "Nucleus",
          "Mitochondria",
          "Ribosome",
          "Golgi Apparatus"
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        question: "What is the product of transcription?",
        options: [
          "DNA",
          "Protein",
          "mRNA",
          "Amino Acid"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 2,
    title: "Genetics and Genomics",
    description: "Explore heredity, gene editing, and genomic technologies.",
    duration: "50 mins",
    icon: Microscope,
    content: `
      <h2>Genetics vs. Genomics</h2>
      <p>Genetics is the study of heredity and the variation of inherited characteristics. Genomics is the study of the entirety of an organism's genes, called the genome.</p>
      
      <h3>CRISPR-Cas9</h3>
      <p>CRISPR-Cas9 is a unique technology that enables geneticists and medical researchers to edit parts of the genome by removing, adding or altering sections of the DNA sequence. It is currently the simplest, most versatile and precise method of genetic manipulation.</p>
      
      <h3>Sequencing Technologies</h3>
      <p>Next-Generation Sequencing (NGS) allows for rapid sequencing of large amounts of DNA, revolutionizing our ability to study genomes.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is CRISPR-Cas9 used for?",
        options: [
          "Protein synthesis",
          "Genome editing",
          "Cell division",
          "DNA replication"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What does NGS stand for?",
        options: [
          "New Genetic Synthesis",
          "Next-Generation Sequencing",
          "Novel Gene Structure",
          "Neural Genomic System"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "What is the complete set of genes in an organism called?",
        options: [
          "Chromosome",
          "Genotype",
          "Genome",
          "Phenotype"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 3,
    title: "Cell Biology and Immunology",
    description: "Dive into cell structure, function, and the immune system.",
    duration: "55 mins",
    icon: Activity,
    content: `
      <h2>The Cell: The Basic Unit of Life</h2>
      <p>Cells are the basic building blocks of all living things. The human body is composed of trillions of cells.</p>
      
      <h3>The Immune System</h3>
      <p>The immune system is a complex network of cells and proteins that defends the body against infection. The immune system keeps a record of every germ (microbe) it has ever defeated so it can recognize and destroy the microbe quickly if it enters the body again.</p>
      
      <h3>T-Cells and B-Cells</h3>
      <p>T-cells and B-cells are the major cellular components of the adaptive immune response. T-cells are involved in cell-mediated immunity, whereas B-cells are primarily responsible for humoral immunity (relating to antibodies).</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Which cells are responsible for producing antibodies?",
        options: [
          "T-Cells",
          "B-Cells",
          "Macrophages",
          "Neutrophils"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What is the basic unit of life?",
        options: [
          "Atom",
          "Molecule",
          "Cell",
          "Organ"
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        question: "Which type of immunity involves T-cells?",
        options: [
          "Humoral immunity",
          "Innate immunity",
          "Cell-mediated immunity",
          "Passive immunity"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 4,
    title: "Bioprocessing and Manufacturing",
    description: "Learn how biological products are manufactured at scale.",
    duration: "60 mins",
    icon: FlaskConical,
    content: `
      <h2>Bioprocessing</h2>
      <p>Bioprocessing is the use of living cells or their components (e.g., bacteria, enzymes, chloroplasts) to obtain desired products.</p>
      
      <h3>Upstream Processing</h3>
      <p>The first step in which biomolecules are grown, usually by bacterial or mammalian cell lines, in bioreactors. This involves media preparation, cell culture, and fermentation.</p>
      
      <h3>Downstream Processing</h3>
      <p>The recovery and purification of the biosynthetic product. This includes steps like centrifugation, filtration, and chromatography.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the main goal of upstream processing?",
        options: [
          "Product purification",
          "Product packaging",
          "Cell growth and product formation",
          "Quality control"
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "Which step involves the purification of the product?",
        options: [
          "Upstream processing",
          "Downstream processing",
          "Midstream processing",
          "Final fill"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "What equipment is commonly used for growing cells in bioprocessing?",
        options: [
          "Centrifuge",
          "Bioreactor",
          "Chromatography column",
          "Microscope"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 5,
    title: "Drug Discovery and Development",
    description: "The journey from a molecule to a medicine.",
    duration: "65 mins",
    icon: Pill,
    content: `
      <h2>The Drug Development Pipeline</h2>
      <p>Developing a new drug is a long, complex, and expensive process.</p>
      
      <h3>1. Target Identification and Validation</h3>
      <p>Identifying a biological target (e.g., a protein) that is involved in a disease and showing that modulating it has a therapeutic effect.</p>
      
      <h3>2. Lead Optimization</h3>
      <p>Improving the properties of a promising molecule (lead compound) to make it more effective and safer.</p>
      
      <h3>3. Preclinical Testing</h3>
      <p>Testing the drug in cells and animals to assess safety and efficacy before human trials.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the first step in drug discovery?",
        options: [
          "Clinical trials",
          "Target identification",
          "FDA approval",
          "Marketing"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What happens during preclinical testing?",
        options: [
          "Testing in humans",
          "Testing in cells and animals",
          "Manufacturing scale-up",
          "Sales and marketing"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "What is a 'lead compound'?",
        options: [
          "The first drug on the market",
          "A promising molecule for development",
          "The final approved drug",
          "A toxic byproduct"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 6,
    title: "Regulatory Affairs and Clinical Trials",
    description: "Navigating FDA regulations and clinical trial phases.",
    duration: "60 mins",
    icon: Scale,
    content: `
      <h2>Clinical Trials</h2>
      <p>Clinical trials are research studies performed in people that are aimed at evaluating a medical, surgical, or behavioral intervention.</p>
      
      <h3>Phases of Clinical Trials</h3>
      <ul>
        <li><strong>Phase I:</strong> Safety and dosage (small group of healthy volunteers).</li>
        <li><strong>Phase II:</strong> Efficacy and side effects (medium group of patients).</li>
        <li><strong>Phase III:</strong> Efficacy vs. standard of care (large group of patients).</li>
        <li><strong>Phase IV:</strong> Post-marketing surveillance.</li>
      </ul>
      
      <h3>Regulatory Agencies</h3>
      <p>The FDA (Food and Drug Administration) in the US and EMA (European Medicines Agency) in Europe regulate the approval of new drugs.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Which phase of clinical trials primarily tests for safety in a small group?",
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
        question: "What does FDA stand for?",
        options: [
          "Federal Drug Association",
          "Food and Drug Administration",
          "Future Drug Agency",
          "Federal Doctor Association"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Which phase involves large-scale efficacy testing?",
        options: [
          "Phase I",
          "Phase II",
          "Phase III",
          "Phase IV"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 7,
    title: "Bioinformatics and Data Science",
    description: "Analyzing biological data with computational tools.",
    duration: "50 mins",
    icon: Database,
    content: `
      <h2>Bioinformatics</h2>
      <p>Bioinformatics is an interdisciplinary field that develops methods and software tools for understanding biological data, in particular when the data sets are large and complex.</p>
      
      <h3>Applications</h3>
      <p>Bioinformatics is used for sequence alignment, gene finding, genome assembly, drug design, and protein structure prediction.</p>
      
      <h3>Big Data in Biology</h3>
      <p>The amount of biological data is growing exponentially, requiring advanced data science techniques, machine learning, and AI to analyze and interpret.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the primary focus of bioinformatics?",
        options: [
          "Manufacturing drugs",
          "Analyzing biological data",
          "Conducting clinical trials",
          "Selling medical devices"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Which of the following is an application of bioinformatics?",
        options: [
          "Sequence alignment",
          "Patient surgery",
          "Hospital management",
          "Physical therapy"
        ],
        correctAnswer: 0
      },
      {
        id: 3,
        question: "Why is data science important in modern biology?",
        options: [
          "It's required by law",
          "To handle large and complex datasets",
          "To replace biologists",
          "To reduce computer usage"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 8,
    title: "Commercialization and Bio-Business",
    description: "From lab to market: IP, funding, and business models.",
    duration: "55 mins",
    icon: TrendingUp,
    content: `
      <h2>Biotech Business Models</h2>
      <p>Biotech companies often operate on different models than traditional tech companies due to high R&D costs and long timelines.</p>
      
      <h3>Intellectual Property (IP)</h3>
      <p>Patents are critical in biotech to protect innovations and secure investment. They provide a temporary monopoly on the invention.</p>
      
      <h3>Funding Stages</h3>
      <p>From Seed funding to Series A, B, C, and IPO (Initial Public Offering). Biotech startups heavily rely on Venture Capital (VC) funding.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Why are patents important in biotech?",
        options: [
          "They are free",
          "To protect innovations and attract investment",
          "To share secrets with competitors",
          "To avoid taxes"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What does IPO stand for?",
        options: [
          "Initial Private Offering",
          "International Public Organization",
          "Initial Public Offering",
          "Internal Project Operation"
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        question: "Which funding source is common for early-stage biotech startups?",
        options: [
          "Bank loans",
          "Venture Capital",
          "Revenue from sales",
          "Public stock market"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 9,
    title: "Future Trends and Ethics",
    description: "Emerging technologies and ethical considerations.",
    duration: "45 mins",
    icon: Zap,
    content: `
      <h2>Emerging Technologies</h2>
      <p>Synthetic biology, personalized medicine, and AI-driven drug discovery are shaping the future of biotech.</p>
      
      <h3>Bioethics</h3>
      <p>Bioethics is the study of the ethical issues emerging from advances in biology and medicine. Key issues include genetic privacy, access to care, and the implications of gene editing (e.g., designer babies).</p>
      
      <h3>Personalized Medicine</h3>
      <p>Tailoring medical treatment to the individual characteristics of each patient, often based on their genetic profile.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is personalized medicine?",
        options: [
          "Medicine for everyone",
          "Tailoring treatment to individual patients",
          "Generic drugs",
          "Alternative medicine"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What field studies ethical issues in biology and medicine?",
        options: [
          "Biophysics",
          "Bioethics",
          "Biochemistry",
          "Biometrics"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Which is an emerging trend in biotech?",
        options: [
          "Using leeches",
          "Synthetic biology",
          "Phrenology",
          "Alchemy"
        ],
        correctAnswer: 1
      }
    ]
  }
];
