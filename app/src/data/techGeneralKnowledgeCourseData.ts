import { type LucideIcon, Cloud, Code, Database, Cpu, Wifi, Lock, Smartphone, Server, Layers } from 'lucide-react';

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

export const techGeneralKnowledgeCourseModules: CourseModule[] = [
  {
    id: 1,
    title: "Cloud Computing Models (SaaS, PaaS, IaaS)",
    description: "Understanding the infrastructure behind modern digital health.",
    duration: "45 min",
    icon: Cloud,
    content: `
      <h2>The Cloud Stack</h2>
      <p>Cloud computing delivers computing services—including servers, storage, databases, networking, software, analytics, and intelligence—over the Internet.</p>
      
      <h3>Service Models</h3>
      <ul>
        <li><strong>IaaS (Infrastructure as a Service):</strong> You rent IT infrastructure—servers and virtual machines (VMs), storage, networks, operating systems—from a cloud provider on a pay-as-you-go basis. (e.g., AWS EC2, Google Compute Engine).</li>
        <li><strong>PaaS (Platform as a Service):</strong> Supply an on-demand environment for developing, testing, delivering, and managing software applications. (e.g., Heroku, Google App Engine).</li>
        <li><strong>SaaS (Software as a Service):</strong> A method for delivering software applications over the Internet, on demand and typically on a subscription basis. (e.g., Slack, Salesforce, Electronic Health Records).</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "Which cloud model provides virtualized computing resources over the internet?",
        options: [
          "SaaS",
          "PaaS",
          "IaaS",
          "DaaS"
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "Gmail and Salesforce are examples of:",
        options: [
          "IaaS",
          "PaaS",
          "SaaS",
          "On-premise software"
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        question: "Developers primarily use which model to build applications without worrying about the underlying OS?",
        options: [
          "IaaS",
          "PaaS",
          "SaaS",
          "Bare Metal"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 2,
    title: "Software Development Lifecycle (SDLC)",
    description: "Agile, DevOps, and how software gets built.",
    duration: "50 min",
    icon: Code,
    content: `
      <h2>Building Software</h2>
      <p>The SDLC is a process for planning, creating, testing, and deploying an information system.</p>

      <h3>Methodologies</h3>
      <ul>
        <li><strong>Waterfall:</strong> Linear, sequential approach. Requirements are fixed upfront. Good for hardware, often too rigid for software.</li>
        <li><strong>Agile:</strong> Iterative approach. Requirements and solutions evolve through collaboration. Sprints (2-4 weeks) deliver incremental value.</li>
      </ul>

      <h3>DevOps</h3>
      <p>A set of practices that combines software development (Dev) and IT operations (Ops). It aims to shorten the systems development life cycle and provide continuous delivery with high software quality.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Which methodology is known for its iterative approach and flexibility?",
        options: [
          "Waterfall",
          "Agile",
          "V-Model",
          "Linear"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What is the main goal of DevOps?",
        options: [
          "To separate developers from operations staff",
          "To slow down releases for safety",
          "To shorten the development lifecycle and provide continuous delivery",
          "To write code without testing"
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        question: "In Agile, what is a 'Sprint'?",
        options: [
          "Running fast to the office",
          "A short, time-boxed period to complete a set amount of work",
          "A year-long planning phase",
          "A type of bug"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 3,
    title: "Data Science & AI/ML",
    description: "From Big Data to Neural Networks in Biotech.",
    duration: "60 min",
    icon: Database,
    content: `
      <h2>Data: The New Oil</h2>
      <p>Biotech generates massive datasets (genomics, imaging, RWE). Data science extracts knowledge from this data.</p>

      <h3>Artificial Intelligence (AI) vs. Machine Learning (ML)</h3>
      <ul>
        <li><strong>AI:</strong> The broader concept of machines being able to carry out tasks in a way that we would consider "smart".</li>
        <li><strong>ML:</strong> A subset of AI based on the idea that systems can learn from data, identify patterns and make decisions with minimal human intervention.</li>
        <li><strong>Deep Learning:</strong> A subset of ML utilizing neural networks with many layers (e.g., for analyzing medical images).</li>
      </ul>

      <h3>Applications</h3>
      <p>Drug discovery (predicting molecule binding), Diagnosis (radiology AI), and Personalized Medicine.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is Machine Learning?",
        options: [
          "A robot that walks",
          "A subset of AI where systems learn from data",
          "Hard coding every rule",
          "Manual data entry"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Which technique is best suited for analyzing complex medical images?",
        options: [
          "Linear Regression",
          "Deep Learning (Convolutional Neural Networks)",
          "Spreadsheets",
          "Basic SQL"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "What is 'Big Data' in biotech?",
        options: [
          "A large file size",
          "Datasets so large/complex that traditional processing software is inadequate",
          "A long list of patients",
          "High resolution photos"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 4,
    title: "IoT & Medical Electronics",
    description: "Internet of Medical Things (IoMT) and connectivity.",
    duration: "55 min",
    icon: Wifi,
    content: `
      <h2>Internet of Medical Things (IoMT)</h2>
      <p>IoMT is an amalgam of medical devices and applications that can connect to healthcare IT systems using networking technologies.</p>

      <h3>Connectivity Standards</h3>
      <ul>
        <li><strong>Bluetooth Low Energy (BLE):</strong> Standard for wearable devices due to low power consumption.</li>
        <li><strong>NFC (Near Field Communication):</strong> Short-range (touch) communication, used in some glucose monitors.</li>
        <li><strong>Wi-Fi & Cellular (5G):</strong> For transmitting larger data streams or remote patient monitoring.</li>
      </ul>

      <h3>Sensors</h3>
      <p>The interface between the physical body and the digital world (e.g., PPG sensors for heart rate, accelerometers for movement).</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What does IoMT stand for?",
        options: [
          "Internet of Many Things",
          "Internet of Medical Things",
          "Internal of Medical Technology",
          "International Organization of Medical Tech"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Which wireless technology is preferred for battery-operated wearables?",
        options: [
          "Satellite",
          "Bluetooth Low Energy (BLE)",
          "Ethernet",
          "Fiber Optics"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "What do PPG sensors typically measure?",
        options: [
          "Brain waves",
          "Blood glucose",
          "Heart rate and blood oxygen",
          "Bone density"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 5,
    title: "Hardware & Embedded Systems",
    description: "Microcontrollers, PCBs, and Firmware.",
    duration: "50 min",
    icon: Cpu,
    content: `
      <h2>The Brains of the Device</h2>
      <p>Embedded systems are computing systems, but they are embedded into other devices (like a pacemaker or insulin pump).</p>

      <h3>Key Components</h3>
      <ul>
        <li><strong>Microcontroller Unit (MCU):</strong> A small computer on a single metal-oxide-semiconductor (MOS) integrated circuit chip. Contains a processor core, memory, and programmable I/O peripherals.</li>
        <li><strong>PCB (Printed Circuit Board):</strong> The board that mechanically supports and electrically connects electronic components.</li>
        <li><strong>Firmware:</strong> The specific class of computer software that provides the low-level control for the device's specific hardware.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is Firmware?",
        options: [
          "The hard plastic casing of a device",
          "Software that provides low-level control for specific hardware",
          "A cloud server",
          "An app store"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What component is considered the 'brain' of an embedded system?",
        options: [
          "Resistor",
          "Capacitor",
          "Microcontroller Unit (MCU)",
          "Battery"
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        question: "What does PCB stand for?",
        options: [
          "Personal Computer Board",
          "Printed Circuit Board",
          "Polymer Circuit Base",
          "Processed Chip Board"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 6,
    title: "Semiconductors & Bio-Chips",
    description: "Lab-on-a-Chip and Microfluidics.",
    duration: "45 min",
    icon: Layers,
    content: `
      <h2>Semiconductors in Bio</h2>
      <p>The same technology that makes computer chips is now being used to manipulate biology at the microscale.</p>

      <h3>Lab-on-a-Chip (LOC)</h3>
      <p>A device that integrates one or several laboratory functions on a single integrated circuit (only millimeters to a few square centimeters in size) to achieve high-throughput screening.</p>

      <h3>Microfluidics</h3>
      <p>The science of manipulating and controlling fluids, usually in the range of microliters to picoliters, in networks of channels with dimensions from tens to hundreds of micrometers.</p>

      <h3>DNA Sequencing Chips</h3>
      <p>Modern sequencers (like NGS) rely on semiconductor fabrication techniques to detect DNA bases.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is a 'Lab-on-a-Chip'?",
        options: [
          "A computer chip made in a lab",
          "A miniaturized device integrating lab functions on a single chip",
          "A potato chip",
          "A large laboratory building"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Microfluidics involves manipulating fluids at what scale?",
        options: [
          "Liters",
          "Gallons",
          "Microliters to picoliters",
          "Cubic meters"
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        question: "Which industry's manufacturing techniques are adapted for Bio-Chips?",
        options: [
          "Textile",
          "Automotive",
          "Semiconductor",
          "Agriculture"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 7,
    title: "Cybersecurity & Data Privacy",
    description: "Protecting patient data in a connected world.",
    duration: "55 min",
    icon: Lock,
    content: `
      <h2>Security is Safety</h2>
      <p>In medtech, a hack isn't just data theft; it can be a patient safety issue (e.g., hacking a pacemaker).</p>

      <h3>Regulations</h3>
      <ul>
        <li><strong>HIPAA (USA):</strong> Health Insurance Portability and Accountability Act. Protects PHI (Protected Health Information).</li>
        <li><strong>GDPR (EU):</strong> General Data Protection Regulation. Strict rules on data consent and the "right to be forgotten".</li>
      </ul>

      <h3>Key Concepts</h3>
      <ul>
        <li><strong>Encryption:</strong> Encoding data so only authorized parties can access it (at rest and in transit).</li>
        <li><strong>Authentication:</strong> Verifying identity (MFA - Multi-Factor Authentication).</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What does HIPAA primarily protect?",
        options: [
          "Doctor's salaries",
          "Protected Health Information (PHI)",
          "Hospital buildings",
          "Insurance company profits"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Which EU regulation governs data privacy and consent?",
        options: [
          "FDA",
          "GDPR",
          "HIPAA",
          "ISO"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "What ensures data is unreadable to unauthorized users?",
        options: [
          "Compression",
          "Encryption",
          "Deletion",
          "Transmission"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 8,
    title: "Blockchain in Healthcare",
    description: "Decentralized ledgers for supply chain and records.",
    duration: "45 min",
    icon: Server,
    content: `
      <h2>Beyond Crypto</h2>
      <p>Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network.</p>

      <h3>Use Cases</h3>
      <ul>
        <li><strong>Supply Chain Transparency:</strong> Tracking drugs from manufacturing to patient to prevent counterfeits (DSCSA compliance).</li>
        <li><strong>Patient Records:</strong> Giving patients control over their own Electronic Health Records (EHR) and who accesses them.</li>
        <li><strong>Clinical Trials:</strong> Ensuring data integrity and preventing tampering with trial results.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is a key characteristic of a blockchain ledger?",
        options: [
          "It is easy to delete records",
          "It is centralized on one server",
          "It is immutable (cannot be changed)",
          "It is only for money"
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "How can blockchain help the pharma supply chain?",
        options: [
          "By making drugs cheaper",
          "By tracking products to prevent counterfeiting",
          "By manufacturing drugs faster",
          "By replacing trucks"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "In clinical trials, blockchain helps ensure:",
        options: [
          "Data integrity and preventing tampering",
          "More patients sign up",
          "Doctors get paid more",
          "FDA approval is automatic"
        ],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 9,
    title: "Future Trends",
    description: "Quantum Computing, Digital Twins, and 6G.",
    duration: "40 min",
    icon: Smartphone,
    content: `
      <h2>The Next Horizon</h2>
      
      <h3>Quantum Computing</h3>
      <p>Uses quantum bits (qubits) to solve problems too complex for classical computers. Potential to revolutionize drug discovery by simulating molecular interactions accurately.</p>

      <h3>Digital Twins</h3>
      <p>A virtual representation of an object or system that spans its lifecycle, updated from real-time data. In health: a "Digital Twin" of a patient to test treatments virtually before applying them physically.</p>

      <h3>AR/VR in Surgery</h3>
      <p>Augmented Reality overlays vital info on the surgeon's view; Virtual Reality is used for training and pain management.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is a 'Digital Twin' in healthcare?",
        options: [
          "A clone of a patient",
          "A virtual simulation of a patient or organ for testing treatments",
          "A backup hard drive",
          "A social media profile"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "How could Quantum Computing impact biotech?",
        options: [
          "Faster email",
          "Simulating complex molecular interactions for drug discovery",
          "Better graphics",
          "Cheaper phones"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Which technology overlays digital information onto the real world?",
        options: [
          "Virtual Reality (VR)",
          "Augmented Reality (AR)",
          "Mixed Tape",
          "Radio"
        ],
        correctAnswer: 1
      }
    ]
  }
];
