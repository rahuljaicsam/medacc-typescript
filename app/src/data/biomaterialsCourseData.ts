import { type LucideIcon, FlaskConical, ShieldCheck, Hammer, Feather, Gem, Layers, Grid, Cpu, Scale } from 'lucide-react';

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

export const biomaterialsCourseModules: CourseModule[] = [
  {
    id: 1,
    title: "Introduction to Biomaterials",
    description: "Fundamentals of material science in medicine.",
    duration: "45 min",
    icon: FlaskConical,
    content: `
      <h2>What is a Biomaterial?</h2>
      <p>A biomaterial is a substance that has been engineered to take a form which, alone or as part of a complex system, is used to direct, by control of interactions with components of living systems, the course of any therapeutic or diagnostic procedure.</p>
      
      <h3>Classes of Biomaterials</h3>
      <ul>
        <li><strong>Metals:</strong> High strength, used in orthopedics and stents (e.g., Titanium, Stainless Steel).</li>
        <li><strong>Polymers:</strong> Versatile, can be biodegradable (e.g., PEEK, PLA).</li>
        <li><strong>Ceramics:</strong> Hard, brittle, biocompatible (e.g., Alumina, Zirconia).</li>
        <li><strong>Composites:</strong> Combinations to tailor properties.</li>
      </ul>

      <h3>Generations of Biomaterials</h3>
      <ol>
        <li><strong>1st Gen:</strong> Bioinert (minimize reaction).</li>
        <li><strong>2nd Gen:</strong> Bioactive (promote specific response).</li>
        <li><strong>3rd Gen:</strong> Regenerative (stimulate healing).</li>
      </ol>
    `,
    quiz: [
      {
        id: 1,
        question: "Which generation of biomaterials is designed to be 'Bioinert'?",
        options: [
          "1st Generation",
          "2nd Generation",
          "3rd Generation",
          "4th Generation"
        ],
        correctAnswer: 0
      },
      {
        id: 2,
        question: "Which material class is best known for high strength and load-bearing capacity?",
        options: [
          "Polymers",
          "Metals",
          "Hydrogels",
          "Ceramics"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "What defines a 3rd generation biomaterial?",
        options: [
          "It does not react with the body",
          "It stimulates tissue regeneration",
          "It dissolves immediately",
          "It is made of plastic"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 2,
    title: "Biocompatibility & Host Response",
    description: "Understanding inflammation, coagulation, and toxicity.",
    duration: "50 min",
    icon: ShieldCheck,
    content: `
      <h2>The Host Response</h2>
      <p>Biocompatibility is the ability of a material to perform with an appropriate host response in a specific application.</p>

      <h3>Key Reactions</h3>
      <ul>
        <li><strong>Foreign Body Reaction (FBR):</strong> The body's attempt to isolate the material, often leading to encapsulation by fibrous tissue.</li>
        <li><strong>Thrombogenicity:</strong> The tendency of a material to induce blood clotting (crucial for cardiovascular devices).</li>
        <li><strong>Cytotoxicity:</strong> Direct toxicity to cells.</li>
      </ul>

      <h3>ISO 10993</h3>
      <p>The gold standard series of standards for evaluating the biocompatibility of medical devices.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is the 'Foreign Body Reaction'?",
        options: [
          "An allergic reaction to pollen",
          "The body's attempt to isolate an implant with fibrous tissue",
          "The acceptance of a transplant",
          "A bacterial infection"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Which ISO standard series governs biological evaluation of medical devices?",
        options: [
          "ISO 13485",
          "ISO 14971",
          "ISO 10993",
          "ISO 9001"
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        question: "Thrombogenicity refers to:",
        options: [
          "Causing cancer",
          "Killing cells",
          "Promoting blood clot formation",
          "Generating heat"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 3,
    title: "Metals in Medical Devices",
    description: "Titanium, Nitinol, and Stainless Steel applications.",
    duration: "55 min",
    icon: Hammer,
    content: `
      <h2>Metallic Biomaterials</h2>
      
      <h3>Titanium & Alloys (Ti-6Al-4V)</h3>
      <p>Excellent biocompatibility due to a stable oxide layer. High strength-to-weight ratio. Used in dental implants and joint replacements.</p>

      <h3>Stainless Steel (316L)</h3>
      <p>Cost-effective, good strength. Used in surgical instruments and temporary fixation (plates/screws).</p>

      <h3>Nitinol (Nickel-Titanium)</h3>
      <p>Shape Memory Alloy (SMA) and Superelasticity. Used in self-expanding stents and guidewires.</p>

      <h3>Corrosion</h3>
      <p>A major failure mode. Passivation is critical to prevent ion release.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Which metal is famous for its 'Shape Memory' and 'Superelastic' properties?",
        options: [
          "Stainless Steel",
          "Cobalt-Chrome",
          "Nitinol",
          "Gold"
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "Why is Titanium highly biocompatible?",
        options: [
          "It is a noble metal",
          "It forms a stable, protective oxide layer",
          "It is very soft",
          "It is magnetic"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "What is the primary application of 316L Stainless Steel?",
        options: [
          "Long-term permanent implants",
          "Surgical instruments and temporary fixation",
          "Biodegradable sutures",
          "Contact lenses"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 4,
    title: "Polymers & Biodegradables",
    description: "From PEEK to PLGA: Permanent vs. Resorbable.",
    duration: "60 min",
    icon: Feather,
    content: `
      <h2>Polymeric Biomaterials</h2>
      
      <h3>Permanent Polymers</h3>
      <ul>
        <li><strong>PEEK (Polyether ether ketone):</strong> High performance, radiolucent. Used in spinal cages.</li>
        <li><strong>UHMWPE (Ultra-high-molecular-weight polyethylene):</strong> High wear resistance. Used in acetabular cups (hip replacements).</li>
      </ul>

      <h3>Biodegradable Polymers</h3>
      <ul>
        <li><strong>PLA/PGA (Polylactic/Polyglycolic acid):</strong> Degrade by hydrolysis into natural metabolites. Used in sutures and tissue scaffolds.</li>
      </ul>

      <h3>Hydrogels</h3>
      <p>Water-swollen networks resembling soft tissue. Used in contact lenses and drug delivery.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Which polymer is commonly used as a bearing surface in hip replacements due to wear resistance?",
        options: [
          "PEEK",
          "UHMWPE",
          "PLA",
          "PVC"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "How do PLA and PGA typically degrade in the body?",
        options: [
          "Enzymatic digestion",
          "Hydrolysis",
          "Oxidation",
          "They don't degrade"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "What is a key property of PEEK for spinal applications?",
        options: [
          "It is magnetic",
          "It is radiolucent (invisible on X-ray)",
          "It dissolves in water",
          "It is extremely heavy"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 5,
    title: "Ceramics & Composites",
    description: "Hard tissue replacement and bioactive glasses.",
    duration: "50 min",
    icon: Gem,
    content: `
      <h2>Bioceramics</h2>
      
      <h3>Bioinert Ceramics</h3>
      <p>Alumina and Zirconia. Extremely hard, wear-resistant. Used in femoral heads for hip implants.</p>

      <h3>Bioactive Ceramics</h3>
      <p>Hydroxyapatite (HA) and Bioglass. Bond directly to bone (osteoconductive). Used as coatings on metal implants to improve fixation.</p>

      <h3>Resorbable Ceramics</h3>
      <p>Tri-calcium Phosphate (TCP). Dissolve over time to be replaced by native bone.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "Which ceramic is known for bonding directly to bone?",
        options: [
          "Alumina",
          "Zirconia",
          "Hydroxyapatite (HA)",
          "Silica"
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "What is a primary advantage of ceramic femoral heads?",
        options: [
          "High ductility",
          "Low wear and high hardness",
          "Flexibility",
          "Electrical conductivity"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "What happens to resorbable ceramics like TCP in the body?",
        options: [
          "They remain forever",
          "They rust",
          "They dissolve and are replaced by bone",
          "They expand"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 6,
    title: "Surface Modification",
    description: "Coatings and texturing to control biological interaction.",
    duration: "45 min",
    icon: Layers,
    content: `
      <h2>Surface Engineering</h2>
      <p>The surface is the first thing the body sees. Modifying it can control the biological response without changing bulk properties.</p>

      <h3>Techniques</h3>
      <ul>
        <li><strong>Plasma Spraying:</strong> Applying HA coatings to titanium hips.</li>
        <li><strong>Passivation:</strong> Chemical treatment to thicken the oxide layer on metals.</li>
        <li><strong>Drug-Eluting Coatings:</strong> Releasing drugs (e.g., Sirolimus) from stent surfaces to prevent restenosis.</li>
        <li><strong>Nanotexturing:</strong> Creating nanoscale features to influence cell adhesion and bacteria repulsion.</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "Why are drug-eluting coatings used on stents?",
        options: [
          "To make them look shiny",
          "To prevent restenosis (re-narrowing of the artery)",
          "To increase weight",
          "To reduce cost"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What does passivation do for stainless steel?",
        options: [
          "Makes it magnetic",
          "Removes surface iron and thickens the protective oxide layer",
          "Coats it with plastic",
          "Makes it biodegradable"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Plasma spraying is commonly used to apply which material?",
        options: [
          "Antibiotics",
          "Hydroxyapatite",
          "Teflon",
          "Gold"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 7,
    title: "Tissue Engineering Scaffolds",
    description: "Porosity, pore size, and mechanical support for regeneration.",
    duration: "55 min",
    icon: Grid,
    content: `
      <h2>Scaffold Design</h2>
      <p>Scaffolds provide a temporary home for cells to grow and regenerate tissue.</p>

      <h3>Key Requirements</h3>
      <ul>
        <li><strong>Porosity:</strong> Essential for nutrient diffusion and waste removal.</li>
        <li><strong>Pore Size:</strong> Must match cell size (e.g., 100-400 microns for bone).</li>
        <li><strong>Mechanical Integrity:</strong> Must match the tissue site until regeneration occurs.</li>
      </ul>

      <h3>Fabrication Methods</h3>
      <ul>
        <li><strong>3D Bioprinting:</strong> Layer-by-layer deposition of materials and cells.</li>
        <li><strong>Electrospinning:</strong> Creating nanofibrous mats that mimic the extracellular matrix (ECM).</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "Why is porosity important in a tissue scaffold?",
        options: [
          "To save material",
          "To allow nutrient transport and cell migration",
          "To make it look nice",
          "To increase weight"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Which technique creates nanofibrous structures mimicking the ECM?",
        options: [
          "Casting",
          "Electrospinning",
          "Machining",
          "Forging"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "What is the role of a scaffold in tissue engineering?",
        options: [
          "Permanent replacement",
          "Temporary support for cell growth and tissue formation",
          "Drug delivery only",
          "Cosmetic enhancement"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 8,
    title: "Smart Biomaterials",
    description: "Materials that respond to stimuli (pH, temperature, electricity).",
    duration: "50 min",
    icon: Cpu,
    content: `
      <h2>Responsive 'Smart' Materials</h2>
      <p>Materials that change their properties in response to environmental triggers.</p>

      <h3>Examples</h3>
      <ul>
        <li><strong>Thermo-responsive Polymers:</strong> Liquid at room temperature, gel at body temperature (injectable hydrogels).</li>
        <li><strong>pH-responsive:</strong> Release drugs only in acidic environments (e.g., tumors).</li>
        <li><strong>Piezoelectric Materials:</strong> Generate electricity under mechanical stress (bone growth stimulation).</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "What is a thermo-responsive polymer?",
        options: [
          "A material that changes properties based on temperature",
          "A material that gets hot",
          "A material that insulates",
          "A material that burns easily"
        ],
        correctAnswer: 0
      },
      {
        id: 2,
        question: "pH-responsive materials are useful for targeting:",
        options: [
          "Broken bones",
          "Tumor microenvironments (which are often acidic)",
          "Healthy skin",
          "Muscle tissue"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Piezoelectric materials generate electricity in response to:",
        options: [
          "Heat",
          "Light",
          "Mechanical stress",
          "Chemicals"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 9,
    title: "Regulatory & Clinical Translation",
    description: "Navigating FDA/MDR for biomaterial-based devices.",
    duration: "45 min",
    icon: Scale,
    content: `
      <h2>Translating to the Clinic</h2>
      
      <h3>Regulatory Pathways</h3>
      <ul>
        <li><strong>Predicate Devices:</strong> Most biomaterials are approved via 510(k) by claiming substantial equivalence.</li>
        <li><strong>Novel Biomaterials:</strong> May require De Novo or PMA (Premarket Approval) with extensive clinical data.</li>
      </ul>

      <h3>Master Files (MAF)</h3>
      <p>Material suppliers can submit a Master File to the FDA to protect IP while allowing device manufacturers to reference the safety data.</p>

      <h3>Sterilization Compatibility</h3>
      <p>Materials must survive sterilization (Gamma, EtO, Autoclave) without degrading.</p>
    `,
    quiz: [
      {
        id: 1,
        question: "What is a Master File (MAF) used for?",
        options: [
          "Storing patient records",
          "Protecting supplier IP while allowing safety data reference",
          "Tracking sales",
          "Designing logos"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "If a biomaterial degrades during sterilization, it is:",
        options: [
          "Acceptable",
          "Not suitable for that sterilization method",
          "Better for the patient",
          "Cheaper"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Novel biomaterials without a predicate usually require:",
        options: [
          "Just a 510(k)",
          "PMA or De Novo classification",
          "No approval",
          "Just a letter"
        ],
        correctAnswer: 1
      }
    ]
  }
];
