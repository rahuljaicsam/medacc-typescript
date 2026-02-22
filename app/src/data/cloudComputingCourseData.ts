import { type LucideIcon, Cloud, Server, Database, Globe, Cpu, Network, Shield, HardDrive, BarChart } from 'lucide-react';

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Module {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  content: string;
  quiz: QuizQuestion[];
}

export const cloudComputingCourseData: Module[] = [
  {
    id: 1,
    title: "Introduction to Cloud Computing in Life Sciences",
    description: "Understand the fundamentals of cloud computing and its transformative role in genomics and biomedical research.",
    icon: Cloud,
    content: `
      <h2>The Cloud Revolution in Life Sciences</h2>
      <p>Cloud computing has revolutionized how life sciences organizations manage, analyze, and store data. From genomics to drug discovery, the ability to scale resources on-demand is critical.</p>
      
      <h3>Key Concepts</h3>
      <ul>
        <li><strong>Scalability:</strong> Ability to handle massive datasets (e.g., whole genome sequencing).</li>
        <li><strong>Elasticity:</strong> Scaling up or down based on computational needs.</li>
        <li><strong>Cost-Efficiency:</strong> Pay-as-you-go models reduce the need for expensive on-premise hardware.</li>
      </ul>

      <h3>Types of Cloud Services</h3>
      <ul>
        <li><strong>IaaS (Infrastructure as a Service):</strong> AWS EC2, Google Compute Engine.</li>
        <li><strong>PaaS (Platform as a Service):</strong> Google App Engine, Azure App Service.</li>
        <li><strong>SaaS (Software as a Service):</strong> Google Workspace, Office 365, Specialized LIMS.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "Which cloud service model provides virtualized computing resources over the internet?",
        options: ["SaaS", "PaaS", "IaaS", "DaaS"],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "What is a primary benefit of cloud computing for genomics?",
        options: ["Slower data processing", "Fixed hardware costs", "Scalability for large datasets", "Limited storage capacity"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 2,
    title: "AWS for Genomics and Bioinformatics",
    description: "Deep dive into Amazon Web Services (AWS) tools specifically designed for life sciences workloads.",
    icon: Server,
    content: `
      <h2>AWS in Life Sciences</h2>
      <p>Amazon Web Services (AWS) offers a suite of tools tailored for genomics, including AWS HealthOmics and high-performance computing (HPC) solutions.</p>
      
      <h3>Key AWS Services</h3>
      <ul>
        <li><strong>Amazon S3:</strong> Scalable object storage for raw sequencing data (FASTQ, BAM files).</li>
        <li><strong>AWS Batch:</strong> Efficiently run hundreds of thousands of batch computing jobs.</li>
        <li><strong>AWS HealthOmics:</strong> Purpose-built service to store, query, and analyze genomic and transcriptomic data.</li>
      </ul>

      <h3>Case Study: Genomic Pipelines</h3>
      <p>Building a Nextflow or Cromwell pipeline on AWS allows researchers to process thousands of samples in parallel, significantly reducing time-to-insight.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Which AWS service is best suited for storing large raw genomic files?",
        options: ["AWS Lambda", "Amazon S3", "Amazon RDS", "AWS EC2"],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What is AWS HealthOmics designed for?",
        options: ["Hosting websites", "Storing, querying, and analyzing genomic data", "Managing email servers", "Video streaming"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 3,
    title: "Azure for Healthcare and Life Sciences",
    description: "Explore Microsoft Azure's capabilities in healthcare data interoperability and AI-driven insights.",
    icon: Database,
    content: `
      <h2>Microsoft Azure in Healthcare</h2>
      <p>Azure provides robust solutions for healthcare data interoperability, security, and AI integration.</p>
      
      <h3>Azure Health Data Services</h3>
      <ul>
        <li><strong>FHIR Service:</strong> Manage and exchange Protected Health Information (PHI) using the Fast Healthcare Interoperability Resources standard.</li>
        <li><strong>DICOM Service:</strong> Storage and communication for medical imaging.</li>
      </ul>

      <h3>AI and Analytics</h3>
      <p>Azure Synapse Analytics and Azure AI Health Bot enable organizations to derive actionable insights from massive datasets while maintaining compliance.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Which standard does Azure Health Data Services support for health information exchange?",
        options: ["HTML", "FHIR", "SQL", "XML"],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What is the purpose of the Azure DICOM service?",
        options: ["Text processing", "Medical imaging storage and communication", "Audio streaming", "Code compilation"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 4,
    title: "Google Cloud & Firebase for Biomedical Apps",
    description: "Leverage Google Cloud Platform (GCP) and Firebase for building scalable biomedical applications.",
    icon: Globe,
    content: `
      <h2>GCP and Firebase</h2>
      <p>Google Cloud Platform (GCP) offers powerful data analytics tools like BigQuery, while Firebase provides a comprehensive development platform for mobile and web apps.</p>
      
      <h3>Google Cloud Life Sciences API</h3>
      <p>Run bioinformatics pipelines on Google Cloud infrastructure with support for Docker containers.</p>

      <h3>Firebase for Health Apps</h3>
      <ul>
        <li><strong>Firestore:</strong> NoSQL database for real-time data syncing (e.g., patient monitoring apps).</li>
        <li><strong>Authentication:</strong> Secure user sign-in handling HIPAA-compliant identity management practices.</li>
        <li><strong>Cloud Functions:</strong> Serverless backend logic to process health data triggers.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "Which GCP tool is widely used for analyzing large datasets using SQL-like queries?",
        options: ["BigQuery", "Compute Engine", "Cloud Storage", "App Engine"],
        correctAnswer: 0
      },
      {
        id: 2,
        question: "What is Firebase Firestore primarily used for?",
        options: ["Hosting static sites", "Real-time NoSQL database", "Machine Learning", "Video encoding"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 5,
    title: "Local Server Setup & Management",
    description: "Learn how to set up and manage local servers for sensitive data or hybrid environments.",
    icon: HardDrive,
    content: `
      <h2>On-Premise Infrastructure</h2>
      <p>While cloud is popular, many life sciences institutions require local servers for data sovereignty, latency, or cost control reasons.</p>
      
      <h3>Setting Up a Local Server</h3>
      <ul>
        <li><strong>Hardware Selection:</strong> CPU cores, RAM, and fast NVMe storage for I/O intensive tasks.</li>
        <li><strong>OS Management:</strong> Linux (Ubuntu/CentOS) administration for bioinformatics tools.</li>
        <li><strong>Network Configuration:</strong> Ensuring secure internal access and firewalls.</li>
      </ul>

      <h3>Hybrid Cloud</h3>
      <p>Connecting local servers to the cloud (e.g., AWS Direct Connect) allows for 'bursting' to the cloud when local resources are insufficient.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Why might a life sciences organization choose a local server over the cloud?",
        options: ["It is always cheaper", "Data sovereignty and latency requirements", "It requires no maintenance", "Cloud is not secure"],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Which operating system is most commonly used for bioinformatics servers?",
        options: ["Windows Home", "Linux (e.g., Ubuntu/CentOS)", "macOS", "Android"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 6,
    title: "GPU Management for Accelerated Computing",
    description: "Harnessing the power of GPUs for molecular dynamics simulations and deep learning models.",
    icon: Cpu,
    content: `
      <h2>GPU Acceleration in Life Sciences</h2>
      <p>Graphics Processing Units (GPUs) are essential for parallel processing tasks such as protein folding simulations and training deep learning models.</p>
      
      <h3>Key Applications</h3>
      <ul>
        <li><strong>Molecular Dynamics:</strong> GROMACS, AMBER running on NVIDIA CUDA.</li>
        <li><strong>Deep Learning:</strong> Training models for image analysis (pathology slides) or drug discovery.</li>
      </ul>

      <h3>Management Tools</h3>
      <ul>
        <li><strong>NVIDIA Docker:</strong> Containerizing GPU-accelerated applications.</li>
        <li><strong>Kubernetes:</strong> Orchestrating GPU resources in a cluster.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What type of task is a GPU best suited for?",
        options: ["Serial processing", "Parallel processing (e.g., simulations, AI training)", "Word processing", "Database indexing"],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Which technology is used to containerize GPU-accelerated applications?",
        options: ["VirtualBox", "NVIDIA Docker", "Apache", "Nginx"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 7,
    title: "Data Center Management",
    description: "Basics of managing data center operations, cooling, and power for high-density computing.",
    icon: Network,
    content: `
      <h2>Data Center Fundamentals</h2>
      <p>Managing the physical infrastructure that houses servers and storage systems.</p>
      
      <h3>Critical Components</h3>
      <ul>
        <li><strong>Power & Cooling:</strong> UPS systems, backup generators, and HVAC to prevent overheating.</li>
        <li><strong>Rack Management:</strong> Efficient layout for airflow and cable management.</li>
        <li><strong>Monitoring:</strong> Tools like Nagios or Prometheus to track hardware health.</li>
      </ul>

      <h3>Green Data Centers</h3>
      <p>Optimizing PUE (Power Usage Effectiveness) to reduce the environmental impact of large-scale computing.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What does UPS stand for in the context of data centers?",
        options: ["Universal Power Standard", "Uninterruptible Power Supply", "United Parcel Service", "Under Power System"],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What is PUE used to measure?",
        options: ["Processing speed", "Data transfer rate", "Power Usage Effectiveness", "Storage capacity"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 8,
    title: "Big Data Analysis & Storage Solutions",
    description: "Strategies for storing and analyzing petabytes of genomic and clinical data.",
    icon: BarChart,
    content: `
      <h2>Managing Big Data</h2>
      <p>Life sciences data is growing exponentially. Efficient storage and retrieval strategies are paramount.</p>
      
      <h3>Storage Tiers</h3>
      <ul>
        <li><strong>Hot Storage:</strong> Frequently accessed data (e.g., active projects). High cost, high performance.</li>
        <li><strong>Cool/Cold Storage:</strong> Infrequently accessed data (e.g., archived sequencing runs). Low cost, slower retrieval (AWS Glacier).</li>
      </ul>

      <h3>Data Lakes vs. Data Warehouses</h3>
      <p>Data Lakes (e.g., AWS S3 + Athena) store raw data, while Data Warehouses (e.g., Redshift, BigQuery) store structured, processed data for analytics.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Which storage tier is best for archived data that is rarely accessed?",
        options: ["Hot Storage", "Cold/Glacier Storage", "RAM", "Cache"],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What is the main characteristic of a Data Lake?",
        options: ["Stores only structured data", "Stores raw, unprocessed data", "Is small in size", "Is only for text files"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 9,
    title: "Security & Compliance in the Cloud",
    description: "Ensuring data privacy and meeting regulatory standards (HIPAA, GDPR) in cloud environments.",
    icon: Shield,
    content: `
      <h2>Security and Compliance</h2>
      <p>Protecting patient data is a legal and ethical requirement in life sciences.</p>
      
      <h3>Shared Responsibility Model</h3>
      <p>The cloud provider secures the infrastructure (security 'of' the cloud), while the customer secures the data and applications (security 'in' the cloud).</p>

      <h3>Key Regulations</h3>
      <ul>
        <li><strong>HIPAA:</strong> US standard for sensitive patient data protection.</li>
        <li><strong>GDPR:</strong> EU regulation on data protection and privacy.</li>
      </ul>

      <h3>Best Practices</h3>
      <ul>
        <li><strong>Encryption:</strong> Encrypting data at rest and in transit.</li>
        <li><strong>IAM (Identity and Access Management):</strong> Least privilege access control.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "Who is responsible for securing customer data 'in' the cloud?",
        options: ["The Cloud Provider", "The Customer", "The Government", "The Internet Service Provider"],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Which regulation primarily protects patient health information in the US?",
        options: ["GDPR", "HIPAA", "SOX", "PCI-DSS"],
        correctAnswer: 1
      }
    ]
  }
];
