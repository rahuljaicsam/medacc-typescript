import { 
  Users, 
  Brain, 
  Target, 
  MessageSquare, 
  Briefcase, 
  TrendingUp, 
  Award, 
  Zap, 
  Shield,
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

export const scientificLeadershipCourseData: Module[] = [
  {
    id: 1,
    title: "From Bench to Boardroom",
    description: "The mindset shift required to move from individual contributor to leader.",
    icon: Brain,
    content: `
      <h2>The Scientist vs. The Leader</h2>
      <p>Scientists are trained to be skeptical, detail-oriented, and focused on data. Leaders must be visionary, decisive, and focused on people.</p>
      
      <h3>Key Shifts</h3>
      <ul>
        <li><strong>Control:</strong> Doing it yourself vs. empowering others.</li>
        <li><strong>Focus:</strong> Technical details vs. strategic big picture.</li>
        <li><strong>Communication:</strong> Jargon/Complexity vs. Vision/Clarity.</li>
      </ul>

      <h3>The Identity Crisis</h3>
      <p>It's normal to miss the bench. But your impact is now multiplied through your team.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is a primary shift required when moving from scientist to leader?",
        options: ["Working longer hours", "Moving from doing to empowering", "Learning more lab techniques", "Ignoring data"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 2,
    title: "Building Diverse R&D Teams",
    description: "Hiring for cognitive diversity and cultural fit.",
    icon: Users,
    content: `
      <h2>The mix matters</h2>
      <p>Innovation happens at the intersection of disciplines. A great biotech team needs biologists, chemists, engineers, and data scientists.</p>
      
      <h3>Hiring Strategies</h3>
      <ul>
        <li><strong>T-Shaped People:</strong> Deep expertise in one area, broad understanding of others.</li>
        <li><strong>Cultural Add vs. Cultural Fit:</strong> Hire people who bring something new to the culture, not just replicate it.</li>
        <li><strong>Soft Skills:</strong> In a startup, adaptability and communication are as important as pipetting skills.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What does 'T-Shaped' expertise refer to?",
        options: ["Knowing only one thing", "Deep expertise in one area, broad knowledge in others", "Being a generalist with no specialty", "Physical fitness"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 3,
    title: "Setting Vision & Strategy",
    description: "Translating scientific goals into business milestones.",
    icon: Target,
    content: `
      <h2>Where are we going?</h2>
      <p>Your team needs a North Star. It's not just about the next experiment; it's about the patient impact.</p>
      
      <h3>OKR Framework</h3>
      <ul>
        <li><strong>Objectives:</strong> Ambitious, qualitative goals (e.g., "Validate our platform in vivo").</li>
        <li><strong>Key Results:</strong> Measurable outcomes (e.g., "Achieve statistical significance in 3 mouse models").</li>
      </ul>

      <h3>Alignment</h3>
      <p>Ensure every team member understands how their daily work contributes to the company's success.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "In the OKR framework, what does the 'O' stand for?",
        options: ["Operations", "Objectives", "Obstacles", "Options"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 4,
    title: "Communication for Scientists",
    description: "Speaking the language of business and investors.",
    icon: MessageSquare,
    content: `
      <h2>Don't Bury the Lede</h2>
      <p>Scientists often start with methodology and end with results. Business communication starts with the conclusion (BLUF: Bottom Line Up Front).</p>
      
      <h3>Adapting to the Audience</h3>
      <ul>
        <li><strong>Investors:</strong> Care about market size, risk reduction, and ROI.</li>
        <li><strong>Partners:</strong> Care about synergy and technical validation.</li>
        <li><strong>Team:</strong> Cares about purpose and clarity.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What does BLUF stand for in business communication?",
        options: ["Big Long Unnecessary Facts", "Bottom Line Up Front", "Best Lab Unit Forever", "Business Logic User Framework"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 5,
    title: "Bridging Science and Business",
    description: "Managing the tension between R&D and commercial teams.",
    icon: Briefcase,
    content: `
      <h2>The Clash of Cultures</h2>
      <p>Commercial teams want speed and certainty. R&D teams deal with uncertainty and timelines that slip.</p>
      
      <h3>Managing Expectations</h3>
      <ul>
        <li><strong>Education:</strong> Teach business teams about the scientific process and failure rates.</li>
        <li><strong>Commercial Focus:</strong> Teach scientists about market needs and target product profiles (TPP).</li>
        <li><strong>Integrated Planning:</strong> Co-create roadmaps so everyone is committed to the timeline.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What tool helps align scientific development with market needs?",
        options: ["Microscope", "Target Product Profile (TPP)", "Balance Sheet", "Employee Handbook"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 6,
    title: "Decision Making Under Uncertainty",
    description: "When to pivot, persevere, or kill a project.",
    icon: TrendingUp,
    content: `
      <h2>The Killer Experiment</h2>
      <p>Good leaders kill bad projects early. Bad leaders let zombie projects consume resources.</p>
      
      <h3>Frameworks</h3>
      <ul>
        <li><strong>Go/No-Go Criteria:</strong> Pre-defined data thresholds for advancing a program.</li>
        <li><strong>Sunk Cost Fallacy:</strong> Don't throw good money after bad just because you've already spent a lot.</li>
        <li><strong>Data-Driven Intuition:</strong> Using experience to interpret ambiguous data.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the 'Sunk Cost Fallacy'?",
        options: ["Spending too much on equipment", "Continuing a failing project because of past investment", "Underestimating costs", "Ignoring the budget"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 7,
    title: "Conflict Resolution & Feedback",
    description: "Handling difficult conversations in high-pressure environments.",
    icon: Zap,
    content: `
      <h2>Healthy Conflict</h2>
      <p>Intellectual conflict improves science. Interpersonal conflict destroys teams.</p>
      
      <h3>Feedback Loop</h3>
      <ul>
        <li><strong>Radical Candor:</strong> Care personally, challenge directly.</li>
        <li><strong>Specific & Actionable:</strong> "Your presentation was unclear" vs. "Slide 3 needs a summary bullet."</li>
        <li><strong>Psychological Safety:</strong> Creating an environment where it's safe to admit mistakes.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What concept describes an environment where it is safe to take risks and admit mistakes?",
        options: ["Physical Safety", "Psychological Safety", "Lab Safety", "Job Security"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 8,
    title: "Mentorship & Development",
    description: "Growing the next generation of scientific leaders.",
    icon: Award,
    content: `
      <h2>Leaders Create Leaders</h2>
      <p>Your legacy is not just your papers, but the people you develop.</p>
      
      <h3>Development Strategies</h3>
      <ul>
        <li><strong>Stretch Assignments:</strong> Giving team members tasks that are slightly beyond their current capability.</li>
        <li><strong>Exposure:</strong> Letting junior scientists present to the board or investors.</li>
        <li><strong>Career Pathing:</strong> Dual tracks for management vs. technical fellow roles.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is a 'Stretch Assignment'?",
        options: ["Yoga in the lab", "A task that challenges a person's current capabilities", "Working overtime", "A long-term project"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 9,
    title: "Ethics & Integrity in Leadership",
    description: "Setting the tone for scientific rigor and ethical conduct.",
    icon: Shield,
    content: `
      <h2>The Buck Stops Here</h2>
      <p>In biotech, cutting corners can kill patients. Integrity is non-negotiable.</p>
      
      <h3>Key Responsibilities</h3>
      <ul>
        <li><strong>Data Integrity:</strong> Ensuring raw data is preserved and not cherry-picked.</li>
        <li><strong>Transparency:</strong> Being honest about negative results with investors and partners.</li>
        <li><strong>Culture of Quality:</strong> Quality is everyone's job, not just the QA department.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "Why is integrity particularly critical in biotech leadership?",
        options: ["It saves money", "Patient safety is at risk", "Investors like it", "It's a legal requirement"],
        correctAnswer: 1
      }
    ]
  }
];
