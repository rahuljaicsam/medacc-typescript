import { Scale, Brain, Baby, AlertTriangle, Shield, Heart, Users, XCircle, LifeBuoy } from 'lucide-react';

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

export const bioethicsCourseModules: CourseModule[] = [
  {
    id: 1,
    title: "Gene Editing & AI Ethics",
    description: "Ethical boundaries in CRISPR, designer babies, and AI decision-making in healthcare.",
    duration: "60 mins",
    icon: Brain,
    content: `
      <h2>Gene Editing (CRISPR)</h2>
      <p>CRISPR technology allows for precise editing of DNA. While it holds promise for curing genetic diseases, it raises ethical questions about 'designer babies' and germline editing which affects future generations.</p>
      
      <h3>Key Ethical Issues:</h3>
      <ul>
        <li><strong>Safety:</strong> Off-target effects and unintended consequences.</li>
        <li><strong>Equity:</strong> Will these technologies only be available to the wealthy?</li>
        <li><strong>Consent:</strong> Future generations cannot consent to germline changes.</li>
      </ul>

      <h2>AI in Healthcare</h2>
      <p>AI is used for diagnostics, treatment recommendations, and resource allocation.</p>
      
      <h3>Key Ethical Issues:</h3>
      <ul>
        <li><strong>Bias:</strong> AI algorithms can perpetuate existing racial and gender biases in healthcare data.</li>
        <li><strong>Accountability:</strong> Who is responsible if an AI makes a wrong diagnosis?</li>
        <li><strong>Transparency:</strong> The 'black box' problem where decisions are not explainable.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is a major ethical concern regarding germline gene editing?",
        options: [
          "It is too expensive",
          "It affects future generations who cannot consent",
          "It is not effective",
          "It requires too much electricity"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What is the 'black box' problem in AI?",
        options: [
          "The hardware is black",
          "The cost is hidden",
          "The decision-making process is not transparent or explainable",
          "It only works at night"
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        question: "How can AI perpetuate bias in healthcare?",
        options: [
          "By using too much data",
          "By learning from historical data that contains human biases",
          "By being too objective",
          "By ignoring patient history"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 2,
    title: "Reproductive Ethics: Sex Selection & Abortion",
    description: "Debates surrounding prenatal sex detection, abortion rights, and moral status of the fetus.",
    duration: "50 mins",
    icon: Baby,
    content: `
      <h2>Prenatal Sex Detection</h2>
      <p>The ability to determine the sex of a fetus early in pregnancy has led to ethical and legal challenges, particularly in societies with strong son preference.</p>
      
      <h3>Ethical Concerns:</h3>
      <ul>
        <li><strong>Sex-Selective Abortion:</strong> The termination of a pregnancy based on the predicted sex of the baby.</li>
        <li><strong>Gender Balance:</strong> Impact on societal demographics.</li>
      </ul>

      <h2>Abortion</h2>
      <p>One of the most debated topics in bioethics, centering on the moral status of the fetus vs. the bodily autonomy of the pregnant person.</p>
      
      <h3>Key Perspectives:</h3>
      <ul>
        <li><strong>Pro-Life:</strong> Emphasizes the right to life of the fetus from conception.</li>
        <li><strong>Pro-Choice:</strong> Emphasizes the woman's right to control her own body and reproductive choices.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the primary ethical concern with prenatal sex detection in some cultures?",
        options: [
          "It is expensive",
          "It leads to sex-selective abortions",
          "It is medically risky",
          "It is inaccurate"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "The central conflict in the abortion debate is often framed as:",
        options: [
          "Cost vs. Quality",
          "Fetal Right to Life vs. Maternal Bodily Autonomy",
          "Doctor vs. Patient",
          "State vs. Federal Law"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Which technology facilitates early sex detection?",
        options: [
          "X-ray",
          "Ultrasound and NIPT (Non-Invasive Prenatal Testing)",
          "MRI",
          "Stethoscope"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 3,
    title: "Surrogacy & Assisted Reproduction",
    description: "Commercial vs. altruistic surrogacy, exploitation concerns, and legal rights of parents.",
    duration: "55 mins",
    icon: Users,
    content: `
      <h2>Surrogacy</h2>
      <p>An arrangement where a woman (surrogate) agrees to carry a pregnancy for another person/couple (intended parents).</p>
      
      <h3>Types:</h3>
      <ul>
        <li><strong>Traditional:</strong> Surrogate's own egg is used (genetic link).</li>
        <li><strong>Gestational:</strong> Egg and sperm from intended parents/donors (no genetic link to surrogate).</li>
      </ul>

      <h3>Ethical Issues:</h3>
      <ul>
        <li><strong>Commodification:</strong> Is it 'selling' a baby or renting a womb?</li>
        <li><strong>Exploitation:</strong> Concerns about wealthy couples exploiting low-income women, especially in cross-border surrogacy.</li>
        <li><strong>Autonomy:</strong> The surrogate's right to make decisions about her body during pregnancy.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "In gestational surrogacy, is the surrogate genetically related to the child?",
        options: [
          "Yes, always",
          "No, usually not",
          "Only if she donates the egg",
          "It depends on the contract"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What is a major ethical concern regarding commercial surrogacy?",
        options: [
          "It is too fast",
          "Exploitation of lower-income women",
          "It requires too many doctors",
          "The baby will be confused"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "What distinguishes altruistic surrogacy from commercial surrogacy?",
        options: [
          "The technology used",
          "The absence of financial payment beyond medical expenses",
          "The location of the clinic",
          "The age of the surrogate"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 4,
    title: "Medical Fraud & Malpractice",
    description: "Historical cases, unnecessary procedures, kickbacks, and maintaining integrity in healthcare.",
    duration: "45 mins",
    icon: AlertTriangle,
    content: `
      <h2>Medical Fraud</h2>
      <p>Deceptive practices to profit from the healthcare system.</p>
      
      <h3>Common Types:</h3>
      <ul>
        <li><strong>Unnecessary Procedures:</strong> Performing surgeries or tests that are not medically needed.</li>
        <li><strong>Upcoding:</strong> Billing for a more expensive service than what was performed.</li>
        <li><strong>Kickbacks:</strong> Accepting payment for referrals.</li>
      </ul>

      <h2>Malpractice</h2>
      <p>Professional negligence by a healthcare provider that causes injury to a patient.</p>
      
      <h3>Examples:</h3>
      <ul>
        <li>Misdiagnosis or delayed diagnosis.</li>
        <li>Surgical errors (e.g., operating on the wrong site).</li>
        <li>Medication errors.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is 'Upcoding'?",
        options: [
          "Improving software",
          "Billing for a more expensive service than performed",
          "Promoting a doctor",
          "Increasing drug dosage"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Performing a surgery that a patient does not need is an example of:",
        options: [
          "Preventive care",
          "Medical fraud/Unnecessary procedure",
          "Holistic medicine",
          "Standard practice"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Accepting money in exchange for patient referrals is known as:",
        options: [
          "Networking",
          "Kickback",
          "Consulting fee",
          "Commission"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 5,
    title: "Healthcare Justice & Political Coverage",
    description: "Universal healthcare, resource allocation, and political decisions covering all diseases.",
    duration: "60 mins",
    icon: Scale,
    content: `
      <h2>Resource Allocation</h2>
      <p>How limited healthcare resources (organs, ICU beds, funding) are distributed.</p>
      
      <h3>Distributive Justice:</h3>
      <p>Fair distribution of benefits and burdens in society. Theories include:</p>
      <ul>
        <li><strong>Egalitarian:</strong> Equal access for everyone.</li>
        <li><strong>Utilitarian:</strong> Maximizing overall good for the greatest number.</li>
        <li><strong>Libertarian:</strong> Healthcare as a market commodity, not a right.</li>
      </ul>

      <h2>Coverage for All Diseases</h2>
      <p>The political challenge of deciding which treatments are covered by public insurance.</p>
      <ul>
        <li><strong>Rare Diseases:</strong> High cost drugs for few patients (Orphan drugs).</li>
        <li><strong>Lifestyle Diseases:</strong> Should coverage differ for preventable conditions?</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "Which theory prioritizes 'the greatest good for the greatest number'?",
        options: [
          "Egalitarian",
          "Libertarian",
          "Utilitarian",
          "Authoritarian"
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "What is an 'Orphan Drug'?",
        options: [
          "A drug for children",
          "A drug without a patent",
          "A drug developed for a rare disease",
          "A generic drug"
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        question: "The debate over healthcare as a 'right' vs. a 'privilege' is a core issue in:",
        options: [
          "Medical technology",
          "Healthcare justice and politics",
          "Anatomy",
          "Pharmacology"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 6,
    title: "Cosmetic & Enhancement Ethics",
    description: "The ethics of plastic surgery, body dysmorphia, and non-therapeutic enhancements.",
    duration: "40 mins",
    icon: Heart,
    content: `
      <h2>Cosmetic Surgery</h2>
      <p>Medical procedures focused on enhancing appearance rather than restoring function.</p>
      
      <h3>Ethical Considerations:</h3>
      <ul>
        <li><strong>Autonomy:</strong> Individuals should be free to modify their bodies.</li>
        <li><strong>Normalization:</strong> Does widespread surgery create unrealistic beauty standards?</li>
        <li><strong>Resource Use:</strong> Should medical skills be used for aesthetics when there is a shortage of essential care?</li>
      </ul>

      <h2>Enhancement</h2>
      <p>Using technology to improve performance beyond 'normal' (e.g., cognitive enhancers, doping).</p>
      <ul>
        <li><strong>Fairness:</strong> Does it create an uneven playing field?</li>
        <li><strong>Safety:</strong> Long-term risks of off-label use.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the main distinction between reconstructive and cosmetic surgery?",
        options: [
          "Cost",
          "Function vs. Appearance",
          "Type of anesthesia",
          "Hospital location"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "An ethical concern regarding 'human enhancement' is:",
        options: [
          "It is too slow",
          "It could exacerbate social inequality",
          "It is always painful",
          "Doctors don't like it"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Using medication to improve focus in healthy individuals is an example of:",
        options: [
          "Therapy",
          "Enhancement",
          "Vaccination",
          "Surgery"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 7,
    title: "Gender, Sexuality & Bioethics",
    description: "Transgender care, homosexuality, conversion therapy bans, and ethical psychiatry.",
    duration: "55 mins",
    icon: Users,
    content: `
      <h2>Transgender Health</h2>
      <p>Ethical issues in gender-affirming care.</p>
      
      <h3>Key Issues:</h3>
      <ul>
        <li><strong>Access:</strong> Barriers to hormones and surgery.</li>
        <li><strong>Youth:</strong> Competence of minors to consent to puberty blockers or irreversible procedures.</li>
        <li><strong>Gatekeeping:</strong> The role of mental health professionals in authorizing care.</li>
      </ul>

      <h2>Homosexuality & Psychiatry</h2>
      <p>The historical pathologization of homosexuality and the ethical imperative to ban 'conversion therapies'.</p>
      
      <h3>Historical Context:</h3>
      <p>Homosexuality was removed from the DSM (Diagnostic and Statistical Manual of Mental Disorders) in 1973, recognizing it is not a disorder.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "When was homosexuality removed from the DSM as a mental disorder?",
        options: [
          "1950",
          "1973",
          "1990",
          "2000"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What is 'Conversion Therapy'?",
        options: [
          "Changing currency",
          "A discredited practice attempting to change sexual orientation or gender identity",
          "Hormone replacement therapy",
          "Physical therapy"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "A central ethical debate in transgender youth care concerns:",
        options: [
          "Cost of bandages",
          "Capacity to consent to long-term/irreversible treatments",
          "Hospital parking",
          "Color of medication"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 8,
    title: "Psychiatric Ethics & Paraphilias",
    description: "Understanding pedophilia as a disorder vs. criminal act, chemical castration, and duty to warn.",
    duration: "50 mins",
    icon: XCircle,
    content: `
      <h2>Pedophilia & Paraphilic Disorders</h2>
      <p>Distinguishing between the sexual interest (pedophilia) and the act (child sexual abuse).</p>
      
      <h3>Ethical & Legal Management:</h3>
      <ul>
        <li><strong>Confidentiality vs. Public Safety:</strong> When must a therapist breach confidentiality? (Tarasoff rule / Duty to Warn).</li>
        <li><strong>Treatment:</strong> Chemical castration (hormonal suppression of libido) as a condition for parole or treatment.</li>
        <li><strong>Stigma:</strong> Barriers to seeking help before an offense is committed.</li>
      </ul>

      <h2>Involuntary Commitment</h2>
      <p>Ethical grounds for detaining individuals deemed a danger to themselves or others.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "The 'Duty to Warn' (Tarasoff rule) requires therapists to:",
        options: [
          "Never share patient secrets",
          "Breach confidentiality if a patient poses a serious threat to a specific person",
          "Report all minor crimes",
          "Treat patients for free"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Chemical castration involves:",
        options: [
          "Surgical removal of organs",
          "Hormonal medication to reduce libido",
          "Psychotherapy only",
          "Imprisonment"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "In psychiatric ethics, the primary justification for involuntary commitment is:",
        options: [
          "The patient is annoying",
          "Danger to self or others",
          "Failure to pay bills",
          "Refusal to take vitamins"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 9,
    title: "End of Life Care & DNR",
    description: "Euthanasia, assisted suicide, Do Not Resuscitate (DNR) orders, and palliative care.",
    duration: "60 mins",
    icon: LifeBuoy,
    content: `
      <h2>End of Life Decisions</h2>
      <p>Ethical dilemmas arise when life can be prolonged by technology but quality of life is poor.</p>
      
      <h3>Key Concepts:</h3>
      <ul>
        <li><strong>Euthanasia:</strong> A doctor actively administering a lethal dose to end suffering (Active vs. Passive).</li>
        <li><strong>Assisted Suicide:</strong> Providing the patient with the means to end their own life.</li>
        <li><strong>Palliative Care:</strong> Focused on relief of symptoms and suffering, not curing disease.</li>
      </ul>

      <h2>DNR (Do Not Resuscitate)</h2>
      <p>A medical order written by a doctor that instructs health care providers not to do CPR if a patient's breathing stops or if the patient's heart stops beating.</p>
      
      <h3>Ethical Basis:</h3>
      <p>Respect for patient autonomy and the avoidance of futile treatment that causes harm without benefit.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What does a DNR order stand for?",
        options: [
          "Do Not Run",
          "Do Not Resuscitate",
          "Do Not Release",
          "Do Not Record"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What is the primary goal of Palliative Care?",
        options: [
          "To cure the disease at all costs",
          "To relieve symptoms and suffering",
          "To speed up death",
          "To conduct research"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "The difference between euthanasia and assisted suicide lies mainly in:",
        options: [
          "The drug used",
          "Who performs the final act (doctor vs. patient)",
          "The cost",
          "The location"
        ],
        correctAnswer: 1
      }
    ]
  }
];
