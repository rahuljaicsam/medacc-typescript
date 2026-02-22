import { 
  Truck, 
  Thermometer, 
  Globe, 
  Package, 
  ShieldCheck, 
  AlertTriangle, 
  BarChart, 
  RefreshCw, 
  Users,
  type LucideIcon 
} from 'lucide-react';

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

export const biotechSupplyChainCourseData: Module[] = [
  {
    id: 1,
    title: "Introduction to Biotech Supply Chain",
    description: "Overview of the unique challenges in life sciences logistics.",
    icon: Truck,
    content: `
      <h2>More Than Just Moving Boxes</h2>
      <p>Biotech supply chains are complex, regulated, and critical to patient safety. Unlike consumer goods, a delay or temperature excursion can ruin life-saving therapies.</p>
      
      <h3>Key Components</h3>
      <ul>
        <li><strong>Raw Materials:</strong> Sourcing specialized reagents, cells, and media.</li>
        <li><strong>Manufacturing:</strong> Moving materials into GMP facilities.</li>
        <li><strong>Distribution:</strong> Getting finished products to hospitals and patients.</li>
      </ul>

      <h3>Unique Challenges</h3>
      <p>High value, short shelf-life, strict regulatory requirements (FDA/EMA), and temperature sensitivity.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is a primary difference between biotech and consumer goods supply chains?",
        options: ["Biotech is cheaper", "Biotech has no regulations", "Biotech involves temperature sensitivity and patient safety", "Biotech uses more trucks"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 2,
    title: "Cold Chain Management",
    description: "Maintaining temperature integrity from lab to patient.",
    icon: Thermometer,
    content: `
      <h2>Keeping it Cool (or Frozen)</h2>
      <p>Cold chain logistics involves maintaining a specific temperature range throughout the supply chain.</p>
      
      <h3>Temperature Ranges</h3>
      <ul>
        <li><strong>Controlled Room Temperature (CRT):</strong> 20°C to 25°C.</li>
        <li><strong>Refrigerated:</strong> 2°C to 8°C.</li>
        <li><strong>Frozen:</strong> -20°C.</li>
        <li><strong>Deep Frozen/Cryogenic:</strong> -150°C to -196°C (Liquid Nitrogen).</li>
      </ul>

      <h3>Monitoring</h3>
      <p>Data loggers are used to track temperature during transit. Any excursion must be investigated.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Which temperature range typically corresponds to 'Refrigerated' storage?",
        options: ["20°C to 25°C", "2°C to 8°C", "-20°C", "-80°C"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 3,
    title: "Supplier Quality Management",
    description: "Auditing and qualifying vendors.",
    icon: ShieldCheck,
    content: `
      <h2>Know Your Suppliers</h2>
      <p>You are responsible for the quality of materials you buy. If a supplier fails, your product fails.</p>
      
      <h3>Vendor Qualification Process</h3>
      <ol>
        <li><strong>Assessment:</strong> Initial evaluation of capabilities.</li>
        <li><strong>Audit:</strong> On-site or paper audit of their Quality Management System (QMS).</li>
        <li><strong>Quality Agreement:</strong> Contract defining quality responsibilities.</li>
        <li><strong>Monitoring:</strong> Ongoing performance review.</li>
      </ol>
    `,
    quiz: [
      {
        id: 1,
        question: "What document defines the quality responsibilities between a company and its supplier?",
        options: ["Invoice", "Quality Agreement", "Marketing Brochure", "NDA"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 4,
    title: "Global Logistics & Customs",
    description: "Navigating international borders and trade compliance.",
    icon: Globe,
    content: `
      <h2>Crossing Borders</h2>
      <p>Biotech is global. Moving biological materials across borders requires strict adherence to customs and trade laws.</p>
      
      <h3>Key Considerations</h3>
      <ul>
        <li><strong>Import/Export Permits:</strong> CDC, USDA, or local health authority permits for biologicals.</li>
        <li><strong>Harmonized System (HS) Codes:</strong> Correctly classifying goods for duties.</li>
        <li><strong>Incoterms:</strong> Defining who is responsible for shipping costs and risks.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is used to classify goods for customs duties globally?",
        options: ["Zip Codes", "HS Codes", "Barcodes", "QR Codes"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 5,
    title: "Inventory Management Strategies",
    description: "JIT vs. Safety Stock in a high-stakes environment.",
    icon: Package,
    content: `
      <h2>Balancing Cost and Risk</h2>
      <p>Holding inventory costs money, but running out of a critical reagent can stop a clinical trial.</p>
      
      <h3>Strategies</h3>
      <ul>
        <li><strong>Just-in-Time (JIT):</strong> Reduces inventory costs but increases risk of stockouts.</li>
        <li><strong>Safety Stock:</strong> Buffer inventory for critical items. Essential in biotech.</li>
        <li><strong>First-Expiry-First-Out (FEFO):</strong> Using the oldest items first to reduce waste.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "Which inventory strategy prioritizes using items with the closest expiration date?",
        options: ["LIFO", "FIFO", "FEFO", "JIT"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 6,
    title: "Risk Management & Resilience",
    description: "Preparing for disruptions and disasters.",
    icon: AlertTriangle,
    content: `
      <h2>Expecting the Unexpected</h2>
      <p>Supply chains break. Pandemics, natural disasters, and geopolitical issues can disrupt flow.</p>
      
      <h3>Building Resilience</h3>
      <ul>
        <li><strong>Dual Sourcing:</strong> Having more than one approved supplier for critical materials.</li>
        <li><strong>Geographic Diversity:</strong> Not having all suppliers in one region.</li>
        <li><strong>Business Continuity Planning:</strong> Documented plans for how to operate during a crisis.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is 'Dual Sourcing'?",
        options: ["Buying twice as much", "Having two approved suppliers for the same item", "Sourcing from two different countries only", "Double checking the order"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 7,
    title: "Clinical Trial Logistics",
    description: "Direct-to-patient and site-based supply strategies.",
    icon: Users,
    content: `
      <h2>Serving the Patient</h2>
      <p>Clinical trial logistics involves moving investigational medicinal products (IMP) to sites or directly to patients.</p>
      
      <h3>Trends</h3>
      <ul>
        <li><strong>Direct-to-Patient (DtP):</strong> Shipping drugs directly to a patient's home for decentralized trials.</li>
        <li><strong>Interactive Response Technology (IRT):</strong> Systems that manage patient randomization and drug supply automatically.</li>
        <li><strong>Returns & Destruction:</strong> Managing unused drugs accountability.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What does DtP stand for in clinical logistics?",
        options: ["Direct-to-Pharmacy", "Direct-to-Patient", "Drug-to-Patient", "Doctor-to-Patient"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 8,
    title: "Digital Supply Chain & Traceability",
    description: "Blockchain, IoT, and serialization.",
    icon: BarChart,
    content: `
      <h2>The Connected Chain</h2>
      <p>Digital tools provide visibility and prevent counterfeiting.</p>
      
      <h3>Technologies</h3>
      <ul>
        <li><strong>Serialization:</strong> Unique codes on every unit to track it through the supply chain (e.g., DSCSA in the US).</li>
        <li><strong>IoT Sensors:</strong> Real-time location and temperature tracking.</li>
        <li><strong>Blockchain:</strong> Immutable ledgers for trust and transparency.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the primary purpose of serialization laws like DSCSA?",
        options: ["To increase prices", "To track products and prevent counterfeiting", "To make packaging look cool", "To speed up shipping"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 9,
    title: "Sustainability in Biotech Supply Chain",
    description: "Green logistics and circular economy.",
    icon: RefreshCw,
    content: `
      <h2>Green Logistics</h2>
      <p>Reducing the carbon footprint of shipping and packaging.</p>
      
      <h3>Initiatives</h3>
      <ul>
        <li><strong>Reusable Packaging:</strong> Passive shippers that can be returned and reused.</li>
        <li><strong>Mode Shifting:</strong> Moving from air freight to sea freight where possible.</li>
        <li><strong>Waste Reduction:</strong> Minimizing single-use plastics in the lab and logistics.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is an example of a sustainability initiative in logistics?",
        options: ["Using more styrofoam", "Air freighting everything", "Reusable packaging", "Single-use sensors"],
        correctAnswer: 2
      }
    ]
  }
];
