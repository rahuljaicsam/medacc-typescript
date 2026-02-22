import { type LucideIcon, Smartphone, Globe, Code, Server, Cloud, Cpu, Terminal, MessageSquare, Shield } from 'lucide-react';

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

export const appDevelopmentHealthcareCourseModules: CourseModule[] = [
  {
    id: 1,
    title: "Introduction to Healthcare App Development",
    description: "Overview of web and mobile applications in healthcare, contrasting traditional coding with modern 'vibecoding' and AI-assisted approaches.",
    duration: "45 mins",
    icon: Smartphone,
    content: `
      <h2>The Landscape of Healthcare Applications</h2>
      <p>Healthcare application development is a rapidly evolving field that bridges the gap between medical needs and technological solutions. From patient management systems to fitness trackers and telemedicine platforms, apps are transforming how care is delivered.</p>
      
      <h3>Web vs. Mobile Apps in Healthcare</h3>
      <p><strong>Web Apps:</strong> Accessible via browsers, ideal for administrative portals, doctor dashboards, and broad accessibility without installation. Examples: EHR systems, Telehealth portals.</p>
      <p><strong>Mobile Apps:</strong> Native or cross-platform apps installed on devices. Ideal for patient engagement, symptom tracking, and leveraging device sensors (camera, accelerometer). Examples: Medisafe, MyChart.</p>

      <h3>Traditional Coding vs. 'Vibecoding' (AI-Assisted)</h3>
      <p><strong>Traditional Coding:</strong> Relies heavily on manual syntax knowledge, boilerplate writing, and deep understanding of language nuances. It is precise but can be slower.</p>
      <p><strong>Vibecoding / AI-Assisted:</strong> A modern paradigm where developers leverage AI (LLMs) to generate code, refactor, and debug. The focus shifts from syntax to logic, architecture, and prompt engineering. It allows for rapid prototyping and 'flow state' development.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Which of the following is a key advantage of mobile apps over web apps in healthcare?",
        options: [
          "They don't require internet access ever",
          "They are easier to develop",
          "They can better leverage device sensors like cameras and accelerometers",
          "They use less data"
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "What characterizes 'Vibecoding' or AI-assisted development?",
        options: [
          "Writing binary code manually",
          "Focusing on syntax memorization",
          "Leveraging AI to generate code and focus on logic/architecture",
          "Coding without a computer"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 2,
    title: "Programming Languages in Healthcare",
    description: "Deep dive into the key programming languages used in the industry: Python, JavaScript/TypeScript, Swift, Kotlin, and their specific use cases.",
    duration: "60 mins",
    icon: Code,
    content: `
      <h2>Choosing the Right Language</h2>
      <p>The choice of programming language in healthcare depends on the target platform (web, mobile, backend) and specific requirements like data processing speed or security.</p>

      <h3>Key Languages</h3>
      <ul>
        <li><strong>Python:</strong> The king of data science and AI/ML backend. Widely used for analyzing medical data, training models, and backend services (Django/FastAPI).</li>
        <li><strong>JavaScript / TypeScript:</strong> The standard for Web Development. React/Next.js for frontend, Node.js for backend. TypeScript is crucial in healthcare for type safety, reducing errors in critical applications.</li>
        <li><strong>Swift:</strong> Native iOS development. Essential for high-performance apps on Apple devices (HealthKit integration).</li>
        <li><strong>Kotlin:</strong> Native Android development. The modern standard for Android health apps.</li>
        <li><strong>C++ / Rust:</strong> Used for high-performance requirements, such as medical imaging software or embedded systems in medical devices.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "Which language is most dominant in Data Science and AI backends for healthcare?",
        options: [
          "JavaScript",
          "Swift",
          "Python",
          "C++"
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "Why is TypeScript preferred over plain JavaScript in healthcare web apps?",
        options: [
          "It compiles faster",
          "It provides type safety, reducing runtime errors",
          "It is an older language",
          "It works offline"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 3,
    title: "Frontend Development & UI/UX",
    description: "Building user interfaces for patients and providers. Frameworks (React, React Native, Flutter) and accessibility standards.",
    duration: "55 mins",
    icon: Globe,
    content: `
      <h2>Frontend Frameworks</h2>
      <p>The frontend is what the user sees and interacts with. In healthcare, clarity, accessibility, and responsiveness are non-negotiable.</p>

      <h3>Web Frontend</h3>
      <p><strong>React.js:</strong> The most popular library. Component-based, vast ecosystem.</p>
      <p><strong>Vue.js / Angular:</strong> Other strong contenders, often used in enterprise healthcare settings.</p>

      <h3>Mobile Frontend</h3>
      <p><strong>React Native:</strong> Allows building mobile apps using JavaScript/React. Code reuse between web and mobile.</p>
      <p><strong>Flutter:</strong> Google's UI toolkit for compiling natively to mobile, web, and desktop from a single codebase (Dart language).</p>

      <h3>UI/UX Considerations</h3>
      <p>Healthcare apps must be <strong>Accessible (WCAG compliance)</strong>. Patients with disabilities or elderly users often rely on these apps. High contrast, clear typography, and simple navigation are vital.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Which framework allows building mobile apps using JavaScript?",
        options: [
          "Django",
          "React Native",
          "Swift",
          "Flask"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Why is WCAG compliance critical in healthcare apps?",
        options: [
          "It makes the app look cooler",
          "It ensures the app is accessible to users with disabilities",
          "It improves server speed",
          "It is required by Apple only"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 4,
    title: "Backend Development & Data Security",
    description: "Server-side logic, databases, APIs, and the critical importance of HIPAA/GDPR compliance in backend architecture.",
    duration: "65 mins",
    icon: Server,
    content: `
      <h2>The Backbone of Healthcare Apps</h2>
      <p>The backend handles data storage, authentication, and business logic. In healthcare, security is the top priority.</p>

      <h3>Technologies</h3>
      <p><strong>Node.js:</strong> Fast, scalable, uses JavaScript (unified stack).</p>
      <p><strong>Python (Django/FastAPI):</strong> Great for integrations with AI models.</p>
      <p><strong>Go / Java:</strong> Often used in large-scale enterprise systems.</p>

      <h3>Databases</h3>
      <p><strong>SQL (PostgreSQL):</strong> Structured data, strict schemas. Good for patient records.</p>
      <p><strong>NoSQL (MongoDB, Firebase):</strong> Flexible schemas, fast for real-time data or unstructured medical notes.</p>

      <h3>Compliance (HIPAA/GDPR)</h3>
      <p>Data must be encrypted <strong>at rest</strong> and <strong>in transit</strong>. Access controls must be strict. Logs must be kept for audits. Using managed services (like AWS HealthLake or compliant setups) helps.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Which of the following is a requirement for HIPAA compliance?",
        options: [
          "Data must be public",
          "Data encryption at rest and in transit",
          "Using only C++",
          "No database backups"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Which database type is characterized by flexible schemas?",
        options: [
          "SQL",
          "NoSQL",
          "Spreadsheets",
          "Flat files"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 5,
    title: "Hosting & Deployment Methods",
    description: "Cloud providers (AWS, GCP, Azure), Platform-as-a-Service (Vercel, Netlify), and compliant infrastructure strategies.",
    duration: "50 mins",
    icon: Cloud,
    content: `
      <h2>Where Does the App Live?</h2>
      <p>Deploying healthcare apps requires choosing infrastructure that is scalable, reliable, and compliant.</p>

      <h3>Major Cloud Providers</h3>
      <p><strong>AWS (Amazon Web Services):</strong> Dominant player. Offers specific healthcare services (HealthLake, Comprehend Medical). BAA (Business Associate Agreement) available for HIPAA.</p>
      <p><strong>Azure (Microsoft):</strong> Strong enterprise presence. Azure API for FHIR.</p>
      <p><strong>GCP (Google Cloud):</strong> Strong in AI/Data analytics (Healthcare API).</p>

      <h3>PaaS (Platform as a Service)</h3>
      <p><strong>Vercel / Netlify:</strong> Excellent for frontend hosting (Next.js/React). Easy CI/CD. Care must be taken to ensure backend calls are secure and compliant if using their serverless functions for sensitive data.</p>
      
      <h3>CI/CD</h3>
      <p>Continuous Integration/Deployment pipelines ensure code is tested and deployed automatically, reducing human error.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is a BAA in the context of cloud hosting for healthcare?",
        options: [
          "Best App Award",
          "Business Associate Agreement (for HIPAA compliance)",
          "Backend Access Authorization",
          "Binary Application Adapter"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Which cloud provider offers 'HealthLake'?",
        options: [
          "Google Cloud",
          "Azure",
          "AWS",
          "Oracle"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 6,
    title: "Traditional Coding vs. AI-Assisted Paradigms",
    description: "Analyzing the shift from manual syntax coding to intent-based development. Pros, cons, and hybrid workflows.",
    duration: "50 mins",
    icon: Cpu,
    content: `
      <h2>The Paradigm Shift</h2>
      <p>Software development is undergoing a fundamental change with the advent of AI.</p>

      <h3>Traditional Coding</h3>
      <ul>
        <li><strong>Process:</strong> Developer writes every line. Looks up documentation frequently. Debugs manually.</li>
        <li><strong>Skills:</strong> Syntax mastery, memory of library functions, typing speed.</li>
        <li><strong>Pros:</strong> Total control, deep understanding of execution.</li>
      </ul>

      <h3>AI-Assisted / Vibecoding</h3>
      <ul>
        <li><strong>Process:</strong> Developer describes intent ("Create a React component that fetches patient data"). AI generates the implementation. Developer reviews and refines.</li>
        <li><strong>Skills:</strong> System design, prompt engineering, code review, debugging logic rather than syntax.</li>
        <li><strong>Pros:</strong> 10x speed, lower barrier to entry for complex features, "flow state" maintenance.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "In the AI-assisted coding paradigm, what becomes a primary skill for the developer?",
        options: [
          "Typing speed",
          "Memorizing API methods",
          "Prompt engineering and code review",
          "Manual memory management"
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "What is a major benefit of AI-assisted coding?",
        options: [
          "It removes the need for computers",
          "Rapid prototyping and increased speed",
          "It makes code slower",
          "It only works for Python"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 7,
    title: "AI Code Editors & Tools",
    description: "Hands-on guide to modern tools: Cursor, VS Code with Copilot, Trae, and others transforming the dev experience.",
    duration: "55 mins",
    icon: Terminal,
    content: `
      <h2>The New Toolset</h2>
      <p>Integrated Development Environments (IDEs) are becoming "AI-native".</p>

      <h3>Key Tools</h3>
      <p><strong>GitHub Copilot:</strong> The pioneer. Autocompletes code as you type. "Ghost text" suggestions.</p>
      <p><strong>Cursor:</strong> An AI-first code editor (fork of VS Code). Allows you to "Chat with Codebase", apply edits directly, and reference entire files/docs.</p>
      <p><strong>Trae:</strong> An adaptive AI IDE that understands context deeply and can execute complex multi-step tasks.</p>
      <p><strong>Bolt.new / v0.dev:</strong> Browser-based tools that generate full web apps from prompts.</p>

      <h3>Features to Master</h3>
      <ul>
        <li><strong>Inline Generation:</strong> Cmd+K to generate code in-place.</li>
        <li><strong>Chat:</strong> Asking questions about your specific codebase context.</li>
        <li><strong>Auto-debug:</strong> Letting the AI analyze terminal errors and propose fixes.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "Which tool is known as an 'AI-first' code editor that allows chatting with your codebase?",
        options: [
          "Notepad",
          "Cursor",
          "Sublime Text 3",
          "Vim"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What does 'Inline Generation' typically allow you to do?",
        options: [
          "Generate code directly in the editor file via a prompt",
          "Send emails",
          "Download RAM",
          "Create hardware"
        ],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 8,
    title: "Prompt Engineering for Developers",
    description: "Techniques for communicating effectively with AI models to generate high-quality, secure, and efficient healthcare code.",
    duration: "60 mins",
    icon: MessageSquare,
    content: `
      <h2>Talking to the Machine</h2>
      <p>The quality of AI output depends heavily on the quality of the input (prompt).</p>

      <h3>Principles of Good Coding Prompts</h3>
      <ol>
        <li><strong>Context is King:</strong> "Create a button" vs "Create a accessible Blue primary button using Tailwind CSS that triggers the submitPatient function."</li>
        <li><strong>Chain of Thought:</strong> Ask the AI to "Explain your plan before coding".</li>
        <li><strong>Iterative Refinement:</strong> Don't expect perfection in one shot. Prompt, review, refine prompt.</li>
      </ol>

      <h3>Healthcare Specifics</h3>
      <p>When asking for healthcare code, explicitly mention compliance: "Ensure the user data storage function encrypts fields to be HIPAA compliant."</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Why is context important in prompt engineering for code?",
        options: [
          "It confuses the AI",
          "It helps the AI generate more specific and correct code",
          "It makes the prompt shorter",
          "It is not important"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What is 'Iterative Refinement'?",
        options: [
          "Deleting code and starting over",
          "Refining the prompt based on the AI's output to improve the result",
          "Writing the same prompt 10 times",
          "Turning off the computer"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 9,
    title: "Future Trends & Ethics in Healthcare Apps",
    description: "Looking ahead: Integration of wearables, AI diagnostics, ethical considerations, and the responsibility of developers.",
    duration: "45 mins",
    icon: Shield,
    content: `
      <h2>The Future is Now</h2>
      <p>Healthcare apps are moving beyond simple tracking to active diagnostics and treatment.</p>

      <h3>Emerging Trends</h3>
      <p><strong>Digital Therapeutics (DTx):</strong> Apps prescribed by doctors to treat conditions (e.g., for insomnia or diabetes).</p>
      <p><strong>Wearable Integration:</strong> Continuous monitoring via Apple Watch, Oura Ring, etc.</p>
      <p><strong>AI Diagnostics:</strong> Apps that analyze skin images or voice patterns for disease detection.</p>

      <h3>Ethics & Responsibility</h3>
      <p>Developers have a massive responsibility. A bug in a healthcare app can impact lives. Privacy is paramount. Algorithmic bias must be actively fought against.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What are 'Digital Therapeutics' (DTx)?",
        options: [
          "Video games for fun",
          "Apps prescribed by doctors to treat medical conditions",
          "Digital thermometers",
          "Social media apps"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Why is algorithmic bias a concern in healthcare apps?",
        options: [
          "It might make the app slower",
          "It could lead to unequal or incorrect treatment for certain demographic groups",
          "It costs more money",
          "It uses too much battery"
        ],
        correctAnswer: 1
      }
    ]
  }
];
