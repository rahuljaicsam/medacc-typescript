import { 
  Users, 
  Lightbulb, 
  Brain, 
  Target, 
  Wrench, 
  Laptop, 
  TestTube, 
  Presentation, 
  Trophy,
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
  submissionRequired: boolean;
  submissionLabel: string;
  submissionPlaceholder: string;
}

export const biotechInnovationHackathonCourseData: Module[] = [
  {
    id: 1,
    title: "Team Formation & Role Assignment",
    description: "Assemble your squad and define roles.",
    icon: Users,
    submissionRequired: true,
    submissionLabel: "Submit Team Photo & Role List",
    submissionPlaceholder: "Upload photo to Imgur/Drive and paste link...",
    content: `
      <h2>The Dream Team</h2>
      <p>A hackathon is won by the team, not just the idea. You need a mix of skills: Hacker (Tech), Hipster (Design), and Hustler (Business/Science).</p>
      
      <h3>Activity</h3>
      <ul>
        <li><strong>Find Teammates:</strong> Network and identify complementary skills.</li>
        <li><strong>Define Roles:</strong> Who is coding? Who is pitching? Who is researching?</li>
        <li><strong>Team Name:</strong> Create a unique identity.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the ideal team composition?",
        options: ["All coders", "All biologists", "Diverse mix of skills (Tech, Design, Domain Expert)", "Solo founder"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 2,
    title: "Problem Identification",
    description: "Define the specific challenge you are solving.",
    icon: Target,
    submissionRequired: true,
    submissionLabel: "Submit Photo of Problem Statement on Whiteboard",
    submissionPlaceholder: "Paste image link...",
    content: `
      <h2>Focus on the Problem</h2>
      <p>Don't jump to the solution yet. Fall in love with the problem. Is it a patient need? A lab inefficiency? A data gap?</p>
      
      <h3>Activity</h3>
      <ul>
        <li><strong>Brain Dump:</strong> List all potential problems.</li>
        <li><strong>Narrow Down:</strong> Pick one that is urgent and feasible to prototype in 24-48 hours.</li>
        <li><strong>Problem Statement:</strong> Write it clearly on a whiteboard.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "Why should you 'fall in love with the problem'?",
        options: ["Problems are fun", "To ensure you solve a real need, not just build tech", "To delay coding", "To impress judges"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 3,
    title: "Ideation & Brainstorming",
    description: "Generate wild ideas and select the best one.",
    icon: Lightbulb,
    submissionRequired: true,
    submissionLabel: "Submit Photo of Sticky Notes / Mind Map",
    submissionPlaceholder: "Paste image link...",
    content: `
      <h2>No Bad Ideas</h2>
      <p>Use design thinking to generate a wide range of solutions before converging on the best one.</p>
      
      <h3>Techniques</h3>
      <ul>
        <li><strong>Crazy 8s:</strong> Sketch 8 ideas in 8 minutes.</li>
        <li><strong>Yes, And...:</strong> Build on each other's ideas.</li>
        <li><strong>Voting:</strong> Use dot voting to select the top concept.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the goal of the 'divergent' phase of brainstorming?",
        options: ["To criticize ideas", "To generate as many ideas as possible", "To pick the winner immediately", "To stay quiet"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 4,
    title: "Solution Architecture",
    description: "Map out how your solution will work.",
    icon: Brain,
    submissionRequired: true,
    submissionLabel: "Submit Photo of System Diagram / Flowchart",
    submissionPlaceholder: "Paste image link...",
    content: `
      <h2>Blueprint</h2>
      <p>Before building, map out the user flow and technical architecture.</p>
      
      <h3>Components</h3>
      <ul>
        <li><strong>User Journey:</strong> Step-by-step experience.</li>
        <li><strong>Tech Stack:</strong> Frontend, Backend, Database, AI models.</li>
        <li><strong>Data Flow:</strong> How information moves through the system.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "Why is a system diagram important?",
        options: ["It looks cool", "It aligns the team on what to build", "It replaces code", "It is required for patents"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 5,
    title: "Prototyping: Hardware/Lab",
    description: "Build the physical component or wet lab simulation.",
    icon: TestTube,
    submissionRequired: true,
    submissionLabel: "Submit Photo of Prototype / Lab Setup",
    submissionPlaceholder: "Paste image link...",
    content: `
      <h2>Get Your Hands Dirty</h2>
      <p>If your solution involves hardware or biology, build a low-fidelity prototype.</p>
      
      <h3>Approaches</h3>
      <ul>
        <li><strong>Cardboard Prototyping:</strong> Mock up devices using craft supplies.</li>
        <li><strong>3D Printing:</strong> Rapid fabrication.</li>
        <li><strong>Simulation:</strong> If wet lab isn't available, design the experimental protocol.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is a 'low-fidelity' prototype?",
        options: ["A fully functional device", "A quick, cheap model to test concepts", "A written document", "A high-quality video"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 6,
    title: "Prototyping: Software/App",
    description: "Code the digital interface and logic.",
    icon: Laptop,
    submissionRequired: true,
    submissionLabel: "Submit Screenshot of Code / App Interface",
    submissionPlaceholder: "Paste image link...",
    content: `
      <h2>Hack Mode</h2>
      <p>Build the MVP (Minimum Viable Product). Focus on the core feature that demonstrates the value.</p>
      
      <h3>Priorities</h3>
      <ul>
        <li><strong>Function over Form:</strong> It doesn't need to be perfect, it needs to work (mostly).</li>
        <li><strong>Hardcoded Data:</strong> It's okay to mock data for the demo if the backend isn't ready.</li>
        <li><strong>UI:</strong> Clean enough to understand.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "Is it acceptable to use mock data in a hackathon demo?",
        options: ["Never", "Yes, to demonstrate functionality within time limits", "Only if you cheat", "No, everything must be live"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 7,
    title: "Testing & Validation",
    description: "Get feedback and iterate.",
    icon: Wrench,
    submissionRequired: true,
    submissionLabel: "Submit Photo of User Testing Session",
    submissionPlaceholder: "Paste image link...",
    content: `
      <h2>Does it work?</h2>
      <p>Show your prototype to mentors, other teams, or potential users. Gather feedback and fix critical bugs.</p>
      
      <h3>Checklist</h3>
      <ul>
        <li><strong>Usability:</strong> Can they figure out how to use it?</li>
        <li><strong>Value:</strong> Do they understand why it exists?</li>
        <li><strong>Bugs:</strong> Fix the show-stoppers.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What should you do with feedback during a hackathon?",
        options: ["Ignore it", "Quickly iterate and improve the prototype", "Give up", "Argue with the user"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 8,
    title: "Pitch Deck Creation",
    description: "Craft the story for the judges.",
    icon: Presentation,
    submissionRequired: true,
    submissionLabel: "Submit Photo of Pitch Deck Slides",
    submissionPlaceholder: "Paste image link...",
    content: `
      <h2>The Storytelling</h2>
      <p>You have 3-5 minutes to sell your vision. The pitch is as important as the tech.</p>
      
      <h3>Slide Structure</h3>
      <ul>
        <li><strong>Hook:</strong> Start with a compelling stat or story.</li>
        <li><strong>Problem & Solution:</strong> Clear and concise.</li>
        <li><strong>Demo:</strong> Show, don't just tell.</li>
        <li><strong>Business Model:</strong> How does it make money/impact?</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the most critical part of a hackathon pitch?",
        options: ["The font size", "The Demo", "The team photos", "The thank you slide"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 9,
    title: "Final Presentation & Demo",
    description: "Showtime! Presenting to the panel.",
    icon: Trophy,
    submissionRequired: true,
    submissionLabel: "Submit Photo of Team Presenting/Demoing",
    submissionPlaceholder: "Paste image link...",
    content: `
      <h2>The Finale</h2>
      <p>Deliver your pitch with energy and confidence. Be ready for Q&A.</p>
      
      <h3>Tips</h3>
      <ul>
        <li><strong>Rehearse:</strong> Know who says what.</li>
        <li><strong>Backup Plan:</strong> Have a video of the demo in case live code breaks.</li>
        <li><strong>Celebrate:</strong> You survived!</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "Why should you have a backup video of your demo?",
        options: ["To put on YouTube", "In case the live demo fails (Murphy's Law)", "To sell it", "Judges prefer video"],
        correctAnswer: 1
      }
    ]
  }
];
