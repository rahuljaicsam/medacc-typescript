import { ShieldCheck, FileText, Settings, Users, AlertTriangle, Search, Activity, Package, CheckCircle } from 'lucide-react';

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

export const iso13485CourseModules: CourseModule[] = [
  {
    id: 1,
    title: "Introduction to ISO 13485",
    description: "Overview of the standard, its scope, and how it differs from ISO 9001.",
    duration: "45 mins",
    icon: ShieldCheck,
    content: `
      <h2>What is ISO 13485?</h2>
      <p>ISO 13485 is the international standard for Quality Management Systems (QMS) specifically for the medical device industry. It specifies requirements for a QMS where an organization needs to demonstrate its ability to provide medical devices and related services that consistently meet customer and applicable regulatory requirements.</p>
      
      <h3>Key Differences from ISO 9001:</h3>
      <ul>
        <li><strong>Focus:</strong> ISO 9001 focuses on customer satisfaction and continuous improvement. ISO 13485 focuses on device safety, efficacy, and meeting regulatory requirements.</li>
        <li><strong>Documentation:</strong> ISO 13485 has stricter documentation requirements.</li>
        <li><strong>Risk Management:</strong> ISO 13485 integrates risk management throughout the product lifecycle.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the primary focus of ISO 13485?",
        options: [
          "Customer satisfaction",
          "Employee happiness",
          "Meeting regulatory requirements and device safety",
          "Maximizing profit"
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "How does ISO 13485 differ from ISO 9001?",
        options: [
          "It is for car manufacturing",
          "It is less strict on documentation",
          "It focuses more on safety and regulatory compliance than just continuous improvement",
          "It is cheaper to implement"
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        question: "ISO 13485 is applicable to:",
        options: [
          "Food industry",
          "Automotive industry",
          "Medical device industry",
          "Software development only"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 2,
    title: "Quality Management System (QMS) Requirements",
    description: "Document control, quality manual, and medical device file.",
    duration: "60 mins",
    icon: FileText,
    content: `
      <h2>General Requirements</h2>
      <p>The organization must document a QMS and maintain its effectiveness.</p>
      
      <h3>Documentation Requirements:</h3>
      <ul>
        <li><strong>Quality Manual:</strong> A document describing the scope of the QMS.</li>
        <li><strong>Medical Device File:</strong> A file for each device type containing specifications, procedures, and records (similar to Device Master Record).</li>
        <li><strong>Control of Documents:</strong> Procedures for approving, reviewing, and updating documents.</li>
        <li><strong>Control of Records:</strong> Procedures for maintaining evidence of conformity (e.g., test results).</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is a 'Quality Manual'?",
        options: [
          "A user manual for the device",
          "A document describing the scope of the QMS",
          "A training guide for employees",
          "A list of suppliers"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Why is 'Control of Documents' important?",
        options: [
          "To use more paper",
          "To ensure only approved and current versions of documents are used",
          "To confuse auditors",
          "To slow down production"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "What does the Medical Device File contain?",
        options: [
          "Marketing materials",
          "Specifications and procedures for a specific device type",
          "Employee resumes",
          "Financial records"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 3,
    title: "Management Responsibility",
    description: "Management commitment, quality policy, and management review.",
    duration: "50 mins",
    icon: Users,
    content: `
      <h2>Role of Top Management</h2>
      <p>Management must demonstrate commitment to the QMS.</p>
      
      <h3>Key Responsibilities:</h3>
      <ul>
        <li><strong>Quality Policy:</strong> Establishing a policy that commits to complying with requirements and maintaining the QMS.</li>
        <li><strong>Management Representative:</strong> Appointing a member of management to oversee the QMS.</li>
        <li><strong>Management Review:</strong> Periodic reviews of the QMS to ensure its continuing suitability, adequacy, and effectiveness.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the purpose of a Management Review?",
        options: [
          "To discuss employee salaries",
          "To review the suitability and effectiveness of the QMS",
          "To plan the holiday party",
          "To inspect the factory floor"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Who is responsible for establishing the Quality Policy?",
        options: [
          "The Quality Manager",
          "Top Management",
          "The Intern",
          "The Customer"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "The Management Representative is responsible for:",
        options: [
          "Selling the product",
          "Overseeing the QMS and reporting to top management",
          "Cleaning the facility",
          "Designing the device"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 4,
    title: "Resource Management",
    description: "Provision of resources, human resources, infrastructure, and work environment.",
    duration: "45 mins",
    icon: Settings,
    content: `
      <h2>Providing Resources</h2>
      <p>The organization must determine and provide the resources needed to implement the QMS.</p>
      
      <h3>Human Resources:</h3>
      <p>Personnel performing work affecting product quality must be competent based on education, training, skills, and experience.</p>
      
      <h3>Infrastructure:</h3>
      <p>Buildings, workspace, process equipment, and supporting services (transport, communication).</p>
      
      <h3>Work Environment:</h3>
      <p>Conditions under which work is performed (cleanliness, temperature, humidity) to ensure product conformity.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Competence of personnel is based on:",
        options: [
          "Height and weight",
          "Education, training, skills, and experience",
          "Age and gender",
          "Personal connections"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Infrastructure in ISO 13485 includes:",
        options: [
          "Buildings, equipment, and supporting services",
          "Only computers",
          "Only the cafeteria",
          "Employee cars"
        ],
        correctAnswer: 0
      },
      {
        id: 3,
        question: "Why is the work environment controlled?",
        options: [
          "To make it comfortable for sleeping",
          "To ensure product requirements are met (e.g., sterility)",
          "To save on heating bills",
          "It is not controlled"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 5,
    title: "Product Realization: Planning & Design",
    description: "Design and development controls (Inputs, Outputs, Review, Verification, Validation).",
    duration: "60 mins",
    icon: Activity,
    content: `
      <h2>Design Control</h2>
      <p>A rigorous process to ensure the device is safe and effective.</p>
      
      <h3>Key Stages:</h3>
      <ul>
        <li><strong>Design Inputs:</strong> What does the device need to do? (User needs).</li>
        <li><strong>Design Outputs:</strong> Drawings, specifications (The recipe).</li>
        <li><strong>Design Review:</strong> Systematic reviews at key stages.</li>
        <li><strong>Design Verification:</strong> Did we build the device right? (Does Output meet Input?).</li>
        <li><strong>Design Validation:</strong> Did we build the right device? (Does it meet User Needs?).</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the difference between Verification and Validation?",
        options: [
          "Verification is testing; Validation is paperwork",
          "Verification checks if Output meets Input; Validation checks if Device meets User Needs",
          "They are the same thing",
          "Validation comes before Verification"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Design Inputs are based on:",
        options: [
          "The engineer's guess",
          "User needs and regulatory requirements",
          "What is cheapest to build",
          "Competitor marketing"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Design Outputs must be:",
        options: [
          "Verifiable",
          "Vague",
          "Hidden",
          "Complex"
        ],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 6,
    title: "Purchasing & Supplier Control",
    description: "Supplier evaluation, purchasing information, and verification of purchased product.",
    duration: "50 mins",
    icon: Package,
    content: `
      <h2>Purchasing Controls</h2>
      <p>Ensuring purchased products conform to specified purchase requirements.</p>
      
      <h3>Supplier Evaluation:</h3>
      <p>Suppliers must be evaluated and selected based on their ability to supply product in accordance with the organization's requirements. Criteria for selection, evaluation, and re-evaluation must be established.</p>
      
      <h3>Verification:</h3>
      <p>Inspection or other activities to ensure purchased product meets specified purchase requirements.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Suppliers must be selected based on:",
        options: [
          "Who buys the best lunch",
          "Their ability to meet the organization's requirements",
          "Who is the cheapest",
          "Who is closest"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Purchasing information describes:",
        options: [
          "The product to be purchased",
          "The weather forecast",
          "The employee's lunch order",
          "The stock market"
        ],
        correctAnswer: 0
      },
      {
        id: 3,
        question: "Verification of purchased product means:",
        options: [
          "Paying the bill",
          "Checking if the product meets requirements",
          "Using the product immediately",
          "Returning the product"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 7,
    title: "Production & Service Provision",
    description: "Control of production, cleanliness, installation, and servicing.",
    duration: "55 mins",
    icon: Settings,
    content: `
      <h2>Control of Production</h2>
      <p>Production must be carried out under controlled conditions.</p>
      <ul>
        <li>Availability of information (specs, procedures).</li>
        <li>Use of suitable equipment.</li>
        <li>Availability and use of monitoring and measuring devices.</li>
        <li>Implementation of monitoring and measurement.</li>
        <li>Implementation of release, delivery, and post-delivery activities.</li>
      </ul>

      <h3>Sterilization:</h3>
      <p>Particular requirements for sterile medical devices regarding contamination control.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Controlled conditions for production include:",
        options: [
          "Availability of work instructions and suitable equipment",
          "Allowing anyone to enter the factory",
          "Using broken tools",
          "Guessing the measurements"
        ],
        correctAnswer: 0
      },
      {
        id: 2,
        question: "For sterile medical devices, special attention must be paid to:",
        options: [
          "Packaging color",
          "Contamination control",
          "Shipping speed",
          "Marketing claims"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Product release activities ensure:",
        options: [
          "The product is free",
          "The product meets all requirements before delivery",
          "The product is hidden",
          "The product is recycled"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 8,
    title: "Measurement, Analysis & Improvement",
    description: "Feedback, internal audit, monitoring of product/process, and control of non-conforming product.",
    duration: "60 mins",
    icon: Search,
    content: `
      <h2>Monitoring & Measurement</h2>
      <p>The organization must monitor information relating to whether the organization has met customer requirements.</p>
      
      <h3>Internal Audit:</h3>
      <p>Conduct internal audits at planned intervals to determine if the QMS conforms to requirements and is effectively implemented.</p>
      
      <h3>Control of Non-conforming Product:</h3>
      <p>Ensuring that product which does not conform to product requirements is identified and controlled to prevent its unintended use or delivery.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is a 'Non-conforming Product'?",
        options: [
          "A product that sells well",
          "A product that does not meet requirements",
          "A new product",
          "A competitor's product"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "How often should Internal Audits be conducted?",
        options: [
          "Never",
          "Once every 10 years",
          "At planned intervals",
          "Whenever the CEO feels like it"
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        question: "What must happen to non-conforming product?",
        options: [
          "It must be sold at a discount immediately",
          "It must be identified and controlled to prevent unintended use",
          "It must be hidden",
          "It must be ignored"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 9,
    title: "CAPA (Corrective & Preventive Action)",
    description: "Root cause analysis, correcting problems, and preventing recurrence.",
    duration: "50 mins",
    icon: CheckCircle,
    content: `
      <h2>CAPA Process</h2>
      <p>The heart of continuous improvement.</p>
      
      <h3>Corrective Action:</h3>
      <p>Action to eliminate the cause of a <strong>detected</strong> non-conformity or other undesirable situation (prevents recurrence).</p>
      
      <h3>Preventive Action:</h3>
      <p>Action to eliminate the cause of a <strong>potential</strong> non-conformity or other undesirable situation (prevents occurrence).</p>
      
      <h3>Steps:</h3>
      <ol>
        <li>Review non-conformities (complaints, audit findings).</li>
        <li>Determine causes (Root Cause Analysis).</li>
        <li>Evaluate need for action.</li>
        <li>Implement action.</li>
        <li>Review effectiveness of action taken.</li>
      </ol>
    `,
    quiz: [
      {
        id: 1,
        question: "Corrective Action is taken to prevent:",
        options: [
          "Occurrence",
          "Recurrence",
          "Success",
          "Profit"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Preventive Action is taken to prevent:",
        options: [
          "Occurrence",
          "Recurrence",
          "Audits",
          "Training"
        ],
        correctAnswer: 0
      },
      {
        id: 3,
        question: "What is a critical step before implementing a CAPA?",
        options: [
          "Root Cause Analysis",
          "Firing the employee",
          "Ignoring the data",
          "Changing the product name"
        ],
        correctAnswer: 0
      }
    ]
  }
];
