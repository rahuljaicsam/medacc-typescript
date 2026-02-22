import { type LucideIcon, Bot, Cpu, Crosshair, Microscope, Activity, Truck, User, Shield, Zap } from 'lucide-react';

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

export const roboticsHealthcareCourseModules: CourseModule[] = [
  {
    id: 1,
    title: "Introduction to Medical Robotics",
    description: "History, classification, and the current landscape of healthcare robotics.",
    duration: "45 min",
    icon: Bot,
    content: `
      <h2>The Rise of Robots in Medicine</h2>
      <p>Medical robotics has evolved from simple mechanical aids to sophisticated autonomous systems. They bridge the gap between human limitations and precision requirements.</p>
      
      <h3>Classification of Medical Robots</h3>
      <ul>
        <li><strong>Surgical Robots:</strong> Assist surgeons in performing complex procedures with high precision (e.g., Da Vinci).</li>
        <li><strong>Rehabilitation Robots:</strong> Help patients recover motor function (e.g., exoskeletons).</li>
        <li><strong>Service Robots:</strong> Handle logistics, disinfection, and patient care in hospitals.</li>
        <li><strong>Nanorobots:</strong> Emerging field of microscopic robots for targeted drug delivery.</li>
      </ul>

      <h3>Key Benefits</h3>
      <p>Precision, repeatability, lack of fatigue, and ability to operate in hazardous environments (radiation).</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Which type of robot is primarily used to assist surgeons?",
        options: [
          "Service Robots",
          "Surgical Robots",
          "Rehabilitation Robots",
          "Social Robots"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What is a primary benefit of using robots in surgery?",
        options: [
          "They are cheaper than humans",
          "High precision and lack of tremor",
          "They can make legal decisions",
          "They don't need electricity"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Exoskeletons fall under which category?",
        options: [
          "Surgical Robots",
          "Rehabilitation Robots",
          "Disinfection Robots",
          "Pharmacy Robots"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 2,
    title: "Surgical Robotics Systems",
    description: "Tele-manipulation, haptics, and the Da Vinci system.",
    duration: "60 min",
    icon: Crosshair,
    content: `
      <h2>Master-Slave Systems</h2>
      <p>Most current surgical robots are tele-operated. The surgeon sits at a console (Master) and controls the robotic arms (Slave) inside the patient.</p>

      <h3>The Da Vinci Surgical System</h3>
      <p>The pioneer in minimally invasive robotic surgery. Features 3D HD vision, EndoWrist instrumentation, and tremor filtration.</p>

      <h3>Haptic Feedback</h3>
      <p>A major challenge in robotic surgery is the lack of "touch" sensation. New systems are integrating haptics to let surgeons "feel" tissue density.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the dominant model for current surgical robots?",
        options: [
          "Fully autonomous",
          "Master-Slave (Tele-operated)",
          "Voice controlled",
          "Patient controlled"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What is a current limitation of many surgical robots?",
        options: [
          "Lack of haptic feedback (sense of touch)",
          "Low precision",
          "Poor vision",
          "Cannot move"
        ],
        correctAnswer: 0
      },
      {
        id: 3,
        question: "What does tremor filtration do?",
        options: [
          "Removes bacteria",
          "Stabilizes the surgeon's hand movements",
          "Filters the air",
          "Cleans the camera"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 3,
    title: "Rehabilitation & Exoskeletons",
    description: "Restoring mobility through wearable robotics.",
    duration: "50 min",
    icon: Activity,
    content: `
      <h2>Wearable Robots</h2>
      <p>Exoskeletons and powered orthotics assist patients with spinal cord injuries or stroke recovery.</p>

      <h3>Mechanisms</h3>
      <ul>
        <li><strong>Assist-as-Needed:</strong> The robot only provides force when the patient cannot complete the movement, encouraging neuroplasticity.</li>
        <li><strong>Passive vs. Active:</strong> Passive systems use springs/dampers; Active systems use motors/hydraulics.</li>
      </ul>

      <h3>Applications</h3>
      <p>Gait training, upper limb rehabilitation, and industrial use to prevent back injuries.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the 'Assist-as-Needed' control strategy?",
        options: [
          "The robot does 100% of the work",
          "The robot provides force only when the patient fails to move",
          "The robot resists the patient",
          "The robot is turned off"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What distinguishes an Active exoskeleton from a Passive one?",
        options: [
          "Active uses motors/power; Passive uses springs",
          "Active is heavier",
          "Passive is for sleeping",
          "There is no difference"
        ],
        correctAnswer: 0
      },
      {
        id: 3,
        question: "What is a primary goal of rehabilitation robotics?",
        options: [
          "To replace the therapist",
          "To encourage neuroplasticity and restore function",
          "To keep the patient in bed",
          "To perform surgery"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 4,
    title: "Humanoids in Healthcare",
    description: "Social robots, patient care, and emotional support.",
    duration: "45 min",
    icon: User,
    content: `
      <h2>The Human Face of Tech</h2>
      <p>Humanoid robots mimic human form and behavior to interact naturally with people.</p>

      <h3>Roles</h3>
      <ul>
        <li><strong>Elderly Care:</strong> Companionship, medication reminders, and monitoring for falls (e.g., Pepper, Zoro).</li>
        <li><strong>Autism Therapy:</strong> Robots with consistent, predictable expressions help children practice social interaction.</li>
        <li><strong>Nursing Assistants:</strong> Lifting patients (heavy payload humanoids) to prevent nurse back injuries.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "Why are robots useful in Autism therapy?",
        options: [
          "They are unpredictable",
          "They provide consistent, repeatable interactions without judgment",
          "They look scary",
          "They speak fast"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What is a key application for humanoids in elderly care?",
        options: [
          "Surgery",
          "Companionship and monitoring",
          "Driving cars",
          "Cooking gourmet meals"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Heavy payload humanoids can assist nurses by:",
        options: [
          "Writing reports",
          "Lifting and transferring patients",
          "Answering phones",
          "Diagnosing diseases"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 5,
    title: "Pharmacy & Logistics Robots",
    description: "Automating the hospital supply chain.",
    duration: "40 min",
    icon: Truck,
    content: `
      <h2>Behind the Scenes</h2>
      <p>Hospitals are massive logistical hubs. Robots optimize the flow of goods.</p>

      <h3>Pharmacy Automation</h3>
      <p>Robotic arms pick and package pills with near-zero error rates, managing inventory and compounding sterile IVs.</p>

      <h3>AMRs (Autonomous Mobile Robots)</h3>
      <p>Self-driving carts (like TUG) navigate hospital corridors to deliver linens, meals, and lab samples, navigating around people and elevators.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What does AMR stand for?",
        options: [
          "Automated Medical Robot",
          "Autonomous Mobile Robot",
          "Assisted Motion Rig",
          "Active Motor Radar"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What is a major benefit of pharmacy robots?",
        options: [
          "They are fun to watch",
          "Near-zero error rates in dispensing medication",
          "They create new drugs",
          "They replace doctors"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "How do AMRs navigate hospitals?",
        options: [
          "On rails",
          "Using sensors/lidar to map environments and avoid obstacles",
          "Remote control by a pilot",
          "They just go straight"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 6,
    title: "Nanorobotics & Targeted Delivery",
    description: "The future of medicine at the molecular scale.",
    duration: "55 min",
    icon: Microscope,
    content: `
      <h2>Medicine at the Microscale</h2>
      <p>Nanorobots are microscopic devices capable of performing tasks at the cellular level.</p>

      <h3>Mechanisms of Propulsion</h3>
      <ul>
        <li><strong>Magnetic:</strong> Guided by external magnetic fields.</li>
        <li><strong>Chemical:</strong> Powered by chemical reactions (e.g., using glucose).</li>
        <li><strong>Biological:</strong> Using bacteria or sperm cells as motors (Bio-hybrid robots).</li>
      </ul>

      <h3>Applications</h3>
      <p>Targeted drug delivery (killing cancer cells without harming healthy tissue), clearing blocked arteries, and microsurgery.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the primary goal of targeted drug delivery with nanorobots?",
        options: [
          "To use more drugs",
          "To deliver drugs only to diseased cells, reducing side effects",
          "To make drugs taste better",
          "To lower the cost of manufacturing"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "How can nanorobots be powered?",
        options: [
          "Batteries",
          "External magnetic fields or chemical reactions",
          "Solar panels",
          "Wind"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "What is a 'Bio-hybrid' robot?",
        options: [
          "A robot made of plastic",
          "A combination of synthetic components and biological cells (like bacteria)",
          "A robot that eats food",
          "A cyborg"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 7,
    title: "AI & Computer Vision in Robotics",
    description: "Giving robots sight and intelligence.",
    duration: "50 min",
    icon: Zap,
    content: `
      <h2>Smart Robots</h2>
      <p>Robots need to perceive their environment to be autonomous. AI provides the "brain" and Computer Vision provides the "eyes".</p>

      <h3>Visual Slam</h3>
      <p>Simultaneous Localization and Mapping. Allows a robot to map an unknown environment while keeping track of its location.</p>

      <h3>Image-Guided Surgery</h3>
      <p>Overlaying MRI/CT scans onto the patient during surgery (Augmented Reality) to guide the robotic arm.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What does SLAM stand for in robotics?",
        options: [
          "Scanning Laser And Mapping",
          "Simultaneous Localization and Mapping",
          "Super Large Automated Machine",
          "Simple Linear Action Motion"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What is the role of Computer Vision in surgical robotics?",
        options: [
          "To make the robot look good",
          "To identify tissues, organs, and instruments in real-time",
          "To record the surgery for TV",
          "To verify the surgeon's identity"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Augmented Reality in robotics helps by:",
        options: [
          "Overlaying critical data (like tumor location) onto the surgeon's view",
          "Playing games",
          "Dimming the lights",
          "Hiding the blood"
        ],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 8,
    title: "Safety & Ethics of Autonomous Systems",
    description: "Who is responsible when a robot fails?",
    duration: "45 min",
    icon: Shield,
    content: `
      <h2>Safety First</h2>
      <p>Medical robots interact physically with humans, making safety paramount.</p>

      <h3>Safety Standards</h3>
      <p>IEC 80601-2-77 (Robotic Surgery Safety). Robots must have redundant sensors, emergency stops, and force limiters.</p>

      <h3>Ethical Questions</h3>
      <ul>
        <li><strong>Autonomy Levels:</strong> How much control should we give a robot during surgery?</li>
        <li><strong>Liability:</strong> If an autonomous robot makes a mistake, is it the manufacturer, the doctor, or the AI's fault?</li>
        <li><strong>De-skilling:</strong> Will doctors lose manual skills if they rely too much on robots?</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is 'De-skilling'?",
        options: [
          "Learning new skills",
          "Loss of manual skills due to over-reliance on technology",
          "Breaking the robot",
          "Updating software"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Which feature is critical for robot safety?",
        options: [
          "Fast speed",
          "Emergency stops and force limiters",
          "Bright colors",
          "Internet connection"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "The liability question in autonomous robotics concerns:",
        options: [
          "Who pays for the electricity",
          "Who is legally responsible for an error or injury",
          "Who owns the robot",
          "Who cleans the robot"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 9,
    title: "Future of Healthcare Robotics",
    description: "Soft robotics, remote surgery, and 5G.",
    duration: "40 min",
    icon: Cpu,
    content: `
      <h2>The Next Generation</h2>
      
      <h3>Soft Robotics</h3>
      <p>Robots made of compliant materials (silicone, fabric) rather than rigid metal. Safer for interaction with soft human tissue.</p>

      <h3>Telesurgery & 5G</h3>
      <p>High-speed, low-latency networks enable a surgeon in New York to operate on a patient in London remotely.</p>

      <h3>Microrobotics</h3>
      <p>Swarm robotics where thousands of tiny robots work together to repair tissue.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is a main advantage of Soft Robotics?",
        options: [
          "They are stronger",
          "They are safer for interaction with delicate biological tissue",
          "They are cheaper to melt",
          "They are invisible"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What technology is enabling remote telesurgery?",
        options: [
          "Dial-up internet",
          "5G (Low latency, high bandwidth)",
          "Bluetooth",
          "Radio waves"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "What is 'Swarm Robotics'?",
        options: [
          "Robots that fly like bees",
          "Many small robots coordinating to perform a task together",
          "A robot covered in bugs",
          "A noisy robot"
        ],
        correctAnswer: 1
      }
    ]
  }
];
