import { type LucideIcon, Shield, Lock, Globe, FileText, Database, UserCheck, AlertTriangle, Siren, Eye } from 'lucide-react';

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

export const digitalHealthDataPrivacyCourseModules: CourseModule[] = [
  {
    id: 1,
    title: "Introduction to Digital Health Privacy",
    description: "Defining PHI, PII, and the critical importance of privacy in the digital health ecosystem.",
    duration: "45 mins",
    icon: Shield,
    content: `
      <h2>The Foundation of Trust</h2>
      <p>Digital health relies entirely on patient trust. If patients don't trust that their data is safe, they won't share it, and the potential of digital health collapses.</p>
      
      <h3>Key Definitions</h3>
      <ul>
        <li><strong>PHI (Protected Health Information):</strong> Any information in a medical record that can be used to identify an individual, and that was created, used, or disclosed in the course of providing a health care service, such as a diagnosis or treatment.</li>
        <li><strong>PII (Personally Identifiable Information):</strong> Information that can be used on its own or with other information to identify, contact, or locate a single person (e.g., SSN, email, phone number).</li>
        <li><strong>Sensitive Personal Data:</strong> Under GDPR, health data is considered a special category requiring higher protection.</li>
      </ul>

      <h3>The Cost of Breaches</h3>
      <p>Healthcare data breaches are the most expensive of any industry. Beyond fines, the reputational damage can be fatal to a startup.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What does PHI stand for?",
        options: [
          "Public Health Information",
          "Protected Health Information",
          "Personal Health Identity",
          "Private Hospital Info"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Which of the following is considered PII?",
        options: [
          "An anonymized dataset",
          "A Social Security Number",
          "Aggregate population statistics",
          "Weather data"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 2,
    title: "HIPAA Fundamentals",
    description: "Mastering the Health Insurance Portability and Accountability Act. Privacy Rule, Security Rule, and Breach Notification Rule.",
    duration: "60 mins",
    icon: FileText,
    content: `
      <h2>HIPAA: The US Standard</h2>
      <p>The Health Insurance Portability and Accountability Act (HIPAA) sets the standard for sensitive patient data protection.</p>

      <h3>The Three Pillars</h3>
      <ol>
        <li><strong>Privacy Rule:</strong> Sets national standards for the protection of certain health information. It addresses the use and disclosure of individuals' health information.</li>
        <li><strong>Security Rule:</strong> Sets national standards for protecting the confidentiality, integrity, and availability of electronic protected health information (e-PHI). It requires administrative, physical, and technical safeguards.</li>
        <li><strong>Breach Notification Rule:</strong> Requires covered entities to notify affected individuals, HHS, and in some cases, the media of a breach of unsecured PHI.</li>
      </ol>

      <h3>Who Must Comply?</h3>
      <p><strong>Covered Entities:</strong> Health plans, clearinghouses, and providers.</p>
      <p><strong>Business Associates:</strong> Vendors (like your startup) that handle PHI on behalf of a covered entity. You need a BAA (Business Associate Agreement).</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Which HIPAA rule deals specifically with electronic PHI (e-PHI)?",
        options: [
          "The Privacy Rule",
          "The Security Rule",
          "The Enforcement Rule",
          "The Electronic Rule"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What is a BAA?",
        options: [
          "Business Associate Agreement",
          "Basic Access Authentication",
          "Bureau of Administrative Affairs",
          "Best Available Algorithm"
        ],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 3,
    title: "GDPR and European Data Protection",
    description: "Understanding the General Data Protection Regulation. Rights of data subjects, consent, and cross-border data transfers.",
    duration: "60 mins",
    icon: Globe,
    content: `
      <h2>GDPR: The Global Gold Standard</h2>
      <p>The General Data Protection Regulation (GDPR) affects any organization processing the personal data of individuals in the EU, regardless of where the company is based.</p>

      <h3>Key Principles</h3>
      <ul>
        <li><strong>Lawfulness, Fairness, Transparency:</strong> You must have a legal basis for processing (e.g., explicit consent).</li>
        <li><strong>Data Minimization:</strong> Collect only what you need.</li>
        <li><strong>Storage Limitation:</strong> Don't keep data longer than necessary.</li>
      </ul>

      <h3>Data Subject Rights</h3>
      <p>Users have the <strong>Right to be Forgotten</strong> (Erasure), the <strong>Right to Access</strong> their data, and the <strong>Right to Portability</strong>.</p>

      <h3>Health Data</h3>
      <p>Processing health data is generally prohibited unless specific conditions (like explicit consent or public interest) are met (Article 9).</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Does GDPR apply to a US company if they process data of EU citizens?",
        options: [
          "No, never",
          "Yes, it has extra-territorial scope",
          "Only if they have an office in Berlin",
          "Only if they make a profit"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What is the 'Right to be Forgotten'?",
        options: [
          "The right to have medical records deleted upon request (with some exceptions)",
          "The right to have bad memories erased",
          "The right to remain anonymous online",
          "The right to hide from the police"
        ],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 4,
    title: "Cybersecurity Threats in Healthcare",
    description: "Identifying common threats: Ransomware, Phishing, Man-in-the-Middle attacks, and Insider Threats.",
    duration: "50 mins",
    icon: AlertTriangle,
    content: `
      <h2>The Threat Landscape</h2>
      <p>Healthcare is a prime target for cybercriminals because medical records fetch a high price on the dark web and hospitals are likely to pay ransom to restore life-critical systems.</p>

      <h3>Common Attacks</h3>
      <p><strong>Ransomware:</strong> Malware that encrypts data and demands payment for the decryption key. (e.g., WannaCry).</p>
      <p><strong>Phishing:</strong> Deceptive emails tricking staff into revealing credentials. The #1 entry point for attackers.</p>
      <p><strong>Insider Threats:</strong> Employees (malicious or negligent) leaking data.</p>
      <p><strong>Man-in-the-Middle (MitM):</strong> Intercepting data between a medical device and the server.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Why is healthcare a prime target for ransomware?",
        options: [
          "Hospitals have slow computers",
          "Critical urgency to restore patient care makes them more likely to pay",
          "Doctors don't use passwords",
          "It is required by law"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What is the most common entry point for attackers?",
        options: [
          "Breaking a window",
          "Phishing emails",
          "Brute force hacking",
          "USB drives in the parking lot"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 5,
    title: "Secure Data Architecture",
    description: "Designing for security: Encryption at rest vs. in transit, key management, and secure APIs.",
    duration: "65 mins",
    icon: Lock,
    content: `
      <h2>Defense in Depth</h2>
      <p>Security must be baked into the architecture, not added as an afterthought.</p>

      <h3>Encryption</h3>
      <p><strong>At Rest:</strong> Encrypting data stored on disks (databases, file servers). If a hard drive is stolen, the data is unreadable. (e.g., AES-256).</p>
      <p><strong>In Transit:</strong> Encrypting data moving between client and server. (e.g., TLS 1.2/1.3, HTTPS). Never use HTTP for health data.</p>

      <h3>Key Management</h3>
      <p>Encryption is only as strong as the protection of the keys. Use a KMS (Key Management Service) and rotate keys regularly.</p>
      
      <h3>Secure APIs</h3>
      <p>Use authentication (OAuth2) and rate limiting to prevent abuse. Validate all inputs to prevent SQL injection.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What protocol should always be used for transmitting health data over the web?",
        options: [
          "HTTP",
          "FTP",
          "HTTPS / TLS",
          "Telnet"
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "What does 'Encryption at Rest' protect against?",
        options: [
          "Interception during transmission",
          "Phishing emails",
          "Physical theft of storage media",
          "DDoS attacks"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 6,
    title: "Identity and Access Management (IAM)",
    description: "Controlling who can see what. Role-Based Access Control (RBAC), Multi-Factor Authentication (MFA), and Audit Logs.",
    duration: "55 mins",
    icon: UserCheck,
    content: `
      <h2>The Principle of Least Privilege</h2>
      <p>Users (and systems) should only have access to the data they absolutely need to do their job.</p>

      <h3>RBAC (Role-Based Access Control)</h3>
      <p>Assign permissions to roles (e.g., "Doctor", "Nurse", "Admin") rather than individuals. A billing clerk should not see clinical notes.</p>

      <h3>MFA (Multi-Factor Authentication)</h3>
      <p>Something you know (password) + Something you have (phone/token). MFA is essential for protecting accounts from credential theft.</p>

      <h3>Audit Trails</h3>
      <p>You must log <strong>who</strong> accessed <strong>what</strong> data and <strong>when</strong>. This is a HIPAA requirement.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the 'Principle of Least Privilege'?",
        options: [
          "Giving everyone admin access",
          "Granting only the minimum access necessary for a job",
          "Allowing access only on weekends",
          "Hiding all data from everyone"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Why are Audit Logs required by HIPAA?",
        options: [
          "To use up disk space",
          "To track unauthorized access and forensic investigation",
          "To slow down the system",
          "To spy on employees' lunch breaks"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 7,
    title: "Risk Assessment and Management",
    description: "Conducting regular risk assessments (SRA). Identifying vulnerabilities and implementing mitigations.",
    duration: "50 mins",
    icon: Database,
    content: `
      <h2>Proactive Prevention</h2>
      <p>You cannot secure what you don't understand. Regular risk assessments are mandatory under HIPAA Security Rule.</p>

      <h3>The SRA (Security Risk Assessment) Process</h3>
      <ol>
        <li><strong>Inventory:</strong> List all assets (hardware, software, data).</li>
        <li><strong>Identify Threats:</strong> What could go wrong? (Natural disaster, hacker, error).</li>
        <li><strong>Assess Vulnerabilities:</strong> Weaknesses in your system (unpatched software, weak passwords).</li>
        <li><strong>Determine Risk:</strong> Likelihood x Impact.</li>
        <li><strong>Mitigate:</strong> Implement controls to reduce high risks.</li>
      </ol>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the formula often used to determine Risk?",
        options: [
          "Cost + Benefit",
          "Likelihood x Impact",
          "Speed / Time",
          "Assets - Liabilities"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What is the first step in a Security Risk Assessment?",
        options: [
          "Buying a firewall",
          "Inventory of assets",
          "Firing the IT guy",
          "Calling the police"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 8,
    title: "Incident Response and Breach Notification",
    description: "What to do when things go wrong. The Incident Response Lifecycle and legal notification timelines.",
    duration: "55 mins",
    icon: Siren,
    content: `
      <h2>Panic is not a Plan</h2>
      <p>Security incidents are a matter of "when", not "if". You need a tested Incident Response (IR) plan.</p>

      <h3>The IR Lifecycle (NIST)</h3>
      <ol>
        <li><strong>Preparation:</strong> Plan, train, set up tools.</li>
        <li><strong>Detection & Analysis:</strong> Notice the alert, triage, confirm scope.</li>
        <li><strong>Containment, Eradication, Recovery:</strong> Stop the bleeding, remove the malware, restore from backups.</li>
        <li><strong>Post-Incident Activity:</strong> Lessons learned.</li>
      </ol>

      <h3>Notification Timelines</h3>
      <p><strong>HIPAA:</strong> Notify individuals and HHS without unreasonable delay, and no later than <strong>60 days</strong>.</p>
      <p><strong>GDPR:</strong> Notify supervisory authority within <strong>72 hours</strong>.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the HIPAA deadline for notifying HHS of a breach?",
        options: [
          "24 hours",
          "72 hours",
          "60 days",
          "1 year"
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "Which phase of Incident Response involves restoring systems from backups?",
        options: [
          "Preparation",
          "Detection",
          "Recovery",
          "Post-Incident Activity"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 9,
    title: "Emerging Tech and Privacy",
    description: "Privacy challenges in AI, IoT, and Wearables. De-identification techniques and Federated Learning.",
    duration: "50 mins",
    icon: Eye,
    content: `
      <h2>The Frontier</h2>
      <p>New technologies bring new privacy challenges.</p>

      <h3>AI and ML</h3>
      <p>AI models need vast data. <strong>Re-identification risk</strong> is real; even anonymized data can sometimes be linked back to individuals. <strong>Federated Learning</strong> allows training models on devices without moving the raw data.</p>

      <h3>IoT and Wearables</h3>
      <p>Medical devices (IoMT) often have weak security (hardcoded passwords, no patching). They expand the attack surface significantly.</p>

      <h3>De-identification</h3>
      <p>Removing 18 identifiers (Safe Harbor method) or using Expert Determination to render data non-PHI.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is Federated Learning?",
        options: [
          "A government program",
          "Training AI models locally on devices without sharing raw data",
          "Learning from a single central database",
          "A type of phishing attack"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Why are IoT devices often considered a security risk?",
        options: [
          "They are too small",
          "They often have weak security and lack patch mechanisms",
          "They use too much electricity",
          "They are too expensive"
        ],
        correctAnswer: 1
      }
    ]
  }
];
