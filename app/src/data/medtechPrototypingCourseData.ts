import { type LucideIcon, Printer, Cpu, FlaskConical, PenTool, Layout, Box, TestTube, Factory, ClipboardCheck } from "lucide-react";

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

export const medtechPrototypingCourseModules: CourseModule[] = [
  {
    id: 1,
    title: "Introduction to Medtech Prototyping",
    description: "Understanding the product development lifecycle and the role of rapid prototyping in medical devices.",
    duration: "45 mins",
    icon: Layout,
    content: `
      <h2>The Importance of Prototyping in Medtech</h2>
      <p>Prototyping is a critical phase in medical device development. It allows engineers and designers to validate concepts, test functionality, and gather user feedback early in the process.</p>
      
      <h3>Types of Prototypes</h3>
      <ul>
        <li><strong>Low-Fidelity:</strong> Sketches, paper models, and basic mockups used for initial concept validation.</li>
        <li><strong>High-Fidelity:</strong> Functional models that closely resemble the final product in appearance and operation.</li>
        <li><strong>Looks-Like:</strong> Focuses on aesthetics and ergonomics.</li>
        <li><strong>Works-Like:</strong> Focuses on functionality and mechanics.</li>
      </ul>

      <h3>Regulatory Considerations</h3>
      <p>Even at the prototyping stage, it's essential to consider FDA (21 CFR Part 820) and ISO 13485 requirements. Documenting design iterations is crucial for the Design History File (DHF).</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the primary purpose of a 'Works-Like' prototype?",
        options: [
          "To test the color and finish",
          "To validate the mechanical functionality",
          "To create marketing materials",
          "To package the product"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Which document tracks the history of the device design?",
        options: [
          "Marketing Plan",
          "Design History File (DHF)",
          "Sales Ledger",
          "Employee Handbook"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Low-fidelity prototypes are best used for:",
        options: [
          "Final clinical trials",
          "Initial concept validation",
          "Mass production",
          "Regulatory submission"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 2,
    title: "3D Printing Technologies in Healthcare",
    description: "Overview of additive manufacturing techniques suitable for medical applications.",
    duration: "60 mins",
    icon: Printer,
    content: `
      <h2>Additive Manufacturing (3D Printing)</h2>
      <p>3D printing has revolutionized medical prototyping by enabling rapid iteration of complex geometries.</p>

      <h3>Key Technologies</h3>
      <ul>
        <li><strong>Fussed Deposition Modeling (FDM):</strong> Extrudes thermoplastic filaments. Good for basic structural parts.</li>
        <li><strong>Stereolithography (SLA):</strong> Uses a laser to cure liquid resin. High resolution, good for detailed models.</li>
        <li><strong>Selective Laser Sintering (SLS):</strong> Fuses powder particles. Strong, functional parts without support structures.</li>
        <li><strong>PolyJet:</strong> Jets photopolymers. Can mix materials (colors, flexibility) in a single print.</li>
      </ul>

      <h3>Applications</h3>
      <p>From surgical guides and anatomical models to custom prosthetics and implant prototypes.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Which 3D printing technology uses liquid resin cured by a laser?",
        options: [
          "FDM",
          "SLS",
          "SLA",
          "CNC"
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "What is a key advantage of SLS printing?",
        options: [
          "It's the cheapest method",
          "It requires no support structures",
          "It only prints in metal",
          "It uses filament"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "FDM stands for:",
        options: [
          "Fast Device Manufacturing",
          "Fused Deposition Modeling",
          "Future Design Method",
          "Formed Digital Material"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 3,
    title: "Biocompatible Material Selection",
    description: "Choosing the right materials for contact with the human body.",
    duration: "50 mins",
    icon: FlaskConical,
    content: `
      <h2>Biocompatibility Basics</h2>
      <p>Biocompatibility refers to the ability of a material to perform with an appropriate host response in a specific application. It is governed by ISO 10993 standards.</p>

      <h3>Common Biocompatible Materials</h3>
      <ul>
        <li><strong>Medical Grade Silicones:</strong> Flexible, durable, and chemically inert.</li>
        <li><strong>Titanium Alloys:</strong> High strength, low weight, excellent osseointegration.</li>
        <li><strong>PEEK (Polyether ether ketone):</strong> High-performance thermoplastic, radiolucent, strong.</li>
        <li><strong>Stainless Steel (316L):</strong> Corrosion-resistant, commonly used in surgical instruments.</li>
      </ul>

      <h3>Selection Criteria</h3>
      <p>Consider mechanical properties, chemical resistance, sterilization compatibility (autoclave, EtO, gamma), and duration of body contact.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Which ISO standard governs the biological evaluation of medical devices?",
        options: [
          "ISO 9001",
          "ISO 13485",
          "ISO 10993",
          "ISO 14971"
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "Which material is known for being radiolucent (invisible to X-rays)?",
        options: [
          "Stainless Steel",
          "Titanium",
          "PEEK",
          "Gold"
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        question: "What does biocompatibility ensure?",
        options: [
          "The device is cheap to make",
          "The device causes no harm to the host",
          "The device is unbreakable",
          "The device is biodegradable"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 4,
    title: "Electronics and PCB Prototyping",
    description: "Integrating sensors, microcontrollers, and circuits into medical devices.",
    duration: "55 mins",
    icon: Cpu,
    content: `
      <h2>Medical Electronics</h2>
      <p>Modern medical devices often include electronic components for sensing, processing, and communication.</p>

      <h3>Prototyping Steps</h3>
      <ol>
        <li><strong>Breadboarding:</strong> Temporary circuit testing without soldering.</li>
        <li><strong>PCB Design (ECAD):</strong> Designing the printed circuit board layout using software like Altium or KiCad.</li>
        <li><strong>PCB Fabrication:</strong> Manufacturing the board.</li>
        <li><strong>Assembly (PCBA):</strong> Soldering components onto the board.</li>
      </ol>

      <h3>Safety Considerations</h3>
      <p>Electrical safety (IEC 60601-1) is paramount. Isolation, leakage current limits, and electromagnetic compatibility (EMC) must be addressed.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the standard for medical electrical equipment safety?",
        options: [
          "ISO 9001",
          "IEC 60601-1",
          "IEEE 802.11",
          "NFPA 70"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What is the first step in testing a circuit design physically?",
        options: [
          "Mass production",
          "Breadboarding",
          "Injection molding",
          "Certification"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "EMC stands for:",
        options: [
          "Emergency Medical Care",
          "Electromagnetic Compatibility",
          "Electronic Master Circuit",
          "Energy Management Core"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 5,
    title: "Soft Robotics and Wearables",
    description: "Developing flexible, comfortable devices for patient monitoring and assistance.",
    duration: "45 mins",
    icon: Factory,
    content: `
      <h2>Soft Robotics</h2>
      <p>Soft robotics use compliant materials (elastomers, gels) to mimic biological systems. They are safer for human interaction.</p>

      <h3>Wearable Technology</h3>
      <p>Wearables require materials that are breathable, flexible, and skin-friendly.</p>

      <h3>Prototyping Techniques</h3>
      <ul>
        <li><strong>Silicone Casting:</strong> Creating molds for soft parts.</li>
        <li><strong>E-Textiles:</strong> Integrating conductive threads into fabrics.</li>
        <li><strong>3D Printing of Elastomers:</strong> Printing flexible TPU or TPE materials.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "Which material type is central to soft robotics?",
        options: [
          "Hard metals",
          "Ceramics",
          "Elastomers",
          "Glass"
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "What is a key requirement for wearable device materials?",
        options: [
          "Rigidity",
          "Skin-friendliness",
          "High voltage capacity",
          "Heavy weight"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "E-Textiles involve integrating:",
        options: [
          "Concrete",
          "Conductive threads",
          "Wood",
          "Steel beams"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 6,
    title: "CAD Modeling for Medical Devices",
    description: "Using Computer-Aided Design software for precise medical component creation.",
    duration: "60 mins",
    icon: PenTool,
    content: `
      <h2>CAD in Medtech</h2>
      <p>CAD (Computer-Aided Design) is the foundation of modern prototyping. It allows for precise geometric definition and simulation.</p>

      <h3>Popular Software</h3>
      <ul>
        <li><strong>SolidWorks:</strong> Industry standard for mechanical design.</li>
        <li><strong>Fusion 360:</strong> Cloud-based, integrated CAM/CAE.</li>
        <li><strong>Blender:</strong> Good for organic shapes (though less precise for engineering).</li>
        <li><strong>Mimics/3-matic:</strong> Specialized for processing medical imaging data (CT/MRI) into 3D models.</li>
      </ul>

      <h3>Design for Manufacturing (DFM)</h3>
      <p>Designing parts that can be realistically manufactured (considering draft angles, wall thickness, tolerances).</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Which software is specialized for converting CT/MRI data to 3D models?",
        options: [
          "Paint",
          "Mimics",
          "Excel",
          "Word"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "DFM stands for:",
        options: [
          "Design for Marketing",
          "Design for Manufacturing",
          "Digital File Management",
          "Direct Fabrication Method"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Which CAD tool is an industry standard for mechanical design?",
        options: [
          "Photoshop",
          "SolidWorks",
          "PowerPoint",
          "Notepad"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 7,
    title: "Sterilization and Packaging",
    description: "Ensuring the prototype remains safe and sterile until use.",
    duration: "40 mins",
    icon: Box,
    content: `
      <h2>Sterilization Methods</h2>
      <p>Choosing a sterilization method affects material selection and packaging design.</p>
      <ul>
        <li><strong>Autoclave (Steam):</strong> High heat and pressure. Good for metals, some plastics (PEEK, Polypropylene).</li>
        <li><strong>Ethylene Oxide (EtO):</strong> Gas sterilization. Good for heat-sensitive items. Requires aeration.</li>
        <li><strong>Gamma Radiation:</strong> Good for high-volume, sealed products. Can degrade some polymers.</li>
      </ul>

      <h3>Sterile Barrier Packaging</h3>
      <p>Tyvek pouches and rigid trays maintain sterility. Seal integrity testing is critical.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Which sterilization method uses high heat and steam?",
        options: [
          "Gamma Radiation",
          "Autoclave",
          "EtO",
          "Alcohol wipe"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What is a common material for sterile barrier pouches?",
        options: [
          "Cardboard",
          "Tyvek",
          "Cotton",
          "Silk"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "EtO sterilization is best for:",
        options: [
          "Heat-sensitive items",
          "Items that melt easily",
          "Liquids only",
          "Food"
        ],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 8,
    title: "Testing and Validation",
    description: "Verifying that the prototype meets design inputs and user needs.",
    duration: "50 mins",
    icon: TestTube,
    content: `
      <h2>Verification vs. Validation</h2>
      <ul>
        <li><strong>Verification:</strong> Did we build the device right? (Does it meet specifications?)</li>
        <li><strong>Validation:</strong> Did we build the right device? (Does it meet user needs?)</li>
      </ul>

      <h3>Common Tests</h3>
      <ul>
        <li><strong>Mechanical Testing:</strong> Tensile, compression, fatigue testing using machines like Instron.</li>
        <li><strong>Usability Testing:</strong> Observing users interacting with the device to identify design flaws (IEC 62366).</li>
        <li><strong>Simulated Use:</strong> Testing in a lab environment that mimics the clinical setting.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "Validation asks:",
        options: [
          "Did we build the device right?",
          "Did we build the right device?",
          "How much does it cost?",
          "Is it pretty?"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Which standard governs usability engineering?",
        options: [
          "IEC 62366",
          "ISO 9000",
          "IEEE 1394",
          "ASTM F88"
        ],
        correctAnswer: 0
      },
      {
        id: 3,
        question: "Mechanical testing often involves:",
        options: [
          "Taste testing",
          "Tensile and compression testing",
          "Color matching",
          "Spelling checks"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 9,
    title: "Future of Medtech Prototyping",
    description: "Emerging trends: Bioprinting, 4D printing, and AI-driven design.",
    duration: "45 mins",
    icon: ClipboardCheck,
    content: `
      <h2>Emerging Technologies</h2>
      <p>The future of prototyping is moving towards even greater complexity and biological integration.</p>

      <h3>Bioprinting</h3>
      <p>Printing with bio-inks containing living cells to create tissue constructs or organ models.</p>

      <h3>4D Printing</h3>
      <p>Creating 3D objects that change shape or properties over time in response to stimuli (heat, pH, moisture).</p>

      <h3>AI-Driven Generative Design</h3>
      <p>Using algorithms to explore thousands of design permutations to optimize for weight, strength, and material usage.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What distinguishes 4D printing from 3D printing?",
        options: [
          "It uses 4 colors",
          "It changes over time/stimuli",
          "It is faster",
          "It is cheaper"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Bioprinting uses inks containing:",
        options: [
          "Plastic",
          "Living cells",
          "Metal powder",
          "Ceramic"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Generative design relies heavily on:",
        options: [
          "Manual sketching",
          "AI algorithms",
          "Clay modeling",
          "Woodworking"
        ],
        correctAnswer: 1
      }
    ]
  }
];
