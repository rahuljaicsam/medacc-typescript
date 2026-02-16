import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  BookOpen, 
  CheckCircle,
  PlayCircle,
  ExternalLink,
  Info,
  Layers,
  FlaskConical,
  Dna,
  TreePine,
  HelpCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/sections/Navigation';
import Footer from '@/sections/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { auth, db } from '@/lib/firebase';
import { doc, getDoc, setDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { toast } from 'sonner';

const ScienceAndNature = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [user, setUser] = useState<any>(null);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        checkProgress(user.uid);
      }
    });
    return () => unsubscribe();
  }, []);

  const checkProgress = async (uid: string) => {
    try {
      const docRef = doc(db, 'courseProgress', uid);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data['general-knowledge']?.modules?.['module-1']?.status === 'completed') {
          setIsCompleted(true);
        }
      }
    } catch (error) {
      console.error("Error checking progress:", error);
    }
  };

    const updateProgress = async (finalScore: number) => {
    if (!user) return;

    try {
      const docRef = doc(db, 'courseProgress', user.uid);
      const docSnap = await getDoc(docRef);
      const percentage = Math.round((finalScore / quizQuestions.length) * 100);
      
      // Determine if passed (70% threshold)
      const passed = percentage >= 70;
      
      const moduleData = {
        status: passed ? 'completed' : 'in_progress',
        quizScore: percentage,
        completedAt: passed ? serverTimestamp() : null,
        attempts: (docSnap.exists() && docSnap.data()['general-knowledge']?.modules?.['module-1']?.attempts || 0) + 1,
      };

      if (docSnap.exists()) {
        await updateDoc(docRef, {
          'general-knowledge.modules.module-1': moduleData,
          'general-knowledge.lastUpdated': serverTimestamp()
        });
      } else {
        await setDoc(docRef, {
          'general-knowledge': {
            modules: {
              'module-1': moduleData
            },
            startedAt: serverTimestamp(),
            lastUpdated: serverTimestamp()
          }
        }, { merge: true });
      }

      if (passed) {
        toast.success("Module completed successfully!");
        setIsCompleted(true);
      } else {
        toast.error("You didn't pass the quiz. Try again!");
      }
    } catch (error) {
      console.error("Error updating progress:", error);
      toast.error("Failed to save progress");
    }
  };

  const quizQuestions = [
    {
      question: "What is scientific realism?",
      options: [
        "A belief that science is always self-evidently true",
        "A rejection of empirical evidence",
        "A focus only on observable phenomena",
        "A philosophy denying causality"
      ],
      correct: 0
    },
    {
      question: "Which epistemology relies on human senses and perceptions for knowledge?",
      options: [
        "Rationalism",
        "Empiricism",
        "Skepticism",
        "Revelation"
      ],
      correct: 1
    },
    {
      question: "In science, what does causality refer to?",
      options: [
        "Random events without influence",
        "The influence by which one event contributes to another",
        "Only observable facts without connections",
        "Beliefs without justification"
      ],
      correct: 1
    },
    {
      question: "Who is associated with the concept of \"conjectures and refutation\" in scientific methodology?",
      options: [
        "Thomas Kuhn",
        "Karl Popper",
        "David Hume",
        "Immanuel Kant"
      ],
      correct: 1
    },
    {
      question: "What is the current gold standard for inferring causality in medicine?",
      options: [
        "Expert case reports",
        "Randomized Controlled Trials (RCTs)",
        "Observational studies only",
        "Intuition-based decisions"
      ],
      correct: 1
    },
    {
      question: "Which research philosophy claims the social world can be understood objectively?",
      options: [
        "Interpretivist",
        "Pragmatist",
        "Positivist",
        "Realistic"
      ],
      correct: 2
    },
    {
      question: "What are the four basic steps of the scientific method?",
      options: [
        "Hypothesis, experiment, observation, conclusion",
        "Observation, hypothesis, prediction, experiment",
        "Theory, proof, publication, review",
        "Data collection, analysis, interpretation, reporting"
      ],
      correct: 1
    },
    {
      question: "Which theory of truth emphasizes empirical correctness over logical consistency alone?",
      options: [
        "Coherence",
        "Pragmatic",
        "Correspondence",
        "Deflationary"
      ],
      correct: 2
    },
    {
      question: "In the philosophy of medicine, what does Evidence-Based Medicine (EBM) de-emphasize?",
      options: [
        "Systematic research",
        "Intuition and unsystematic experience",
        "Randomized trials",
        "Patient outcomes"
      ],
      correct: 1
    },
    {
      question: "What is a paradigm in science, according to Thomas Kuhn?",
      options: [
        "A random collection of facts",
        "A logically consistent portrait of the world",
        "A rejection of all previous knowledge",
        "Pure speculation without evidence"
      ],
      correct: 1
    }
  ];

  const handleAnswerClick = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    const correct = optionIndex === quizQuestions[currentQuestion].correct;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(score + 1);
    }

      setTimeout(() => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quizQuestions.length) {
          setCurrentQuestion(nextQuestion);
          setSelectedOption(null);
          setIsCorrect(null);
        } else {
          setShowScore(true);
          updateProgress(correct ? score + 1 : score);
        }
      }, 1500);
    };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
    setSelectedOption(null);
    setIsCorrect(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navigation />

      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-32 w-full">
        <Button 
          variant="ghost" 
          className="text-slate-500 hover:text-medical-blue hover:bg-blue-50 mb-6 pl-0"
          onClick={() => navigate('/course/general-knowledge-foundations')}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Course
        </Button>

        <div className="mb-8">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-0 mb-4">
            Module 1 of 9
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Introduction to Science & Nature
          </h1>
          <p className="text-xl text-slate-600">
            Fundamental concepts in physics, chemistry, biology, environmental science, and philosophy of science
          </p>
        </div>

        <div className="space-y-12">
          {/* Section 1: Philosophy of Science */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-medical-blue" />
              Philosophy of Science
            </h2>
            <Card className="p-8 bg-white border-slate-200 shadow-sm">
              <div className="prose prose-slate max-w-none">
                <p className="mb-4">
                  Science is a belief-system for 'descriptions' orienting ourselves to find reliable knowledge about the world or something to systematize methods of analytical truths. It's not truth in itself but lends coverage to justifiable true belief on observable phenomena. Most people confuse "science" with naturalism or natural scientific facts, where biological, physical, and chemical inferences of nature are observed through the current paradigm by specialists known as "scientists." Before the term "science," it was known as 'natural philosophy.'
                </p>
                <p className="mb-4">
                  A paradigm is a logically consistent "portrait" of the world without contradictions. Scientists use philosophical-statistical tools to infer causality in observations. The fundamentals of science lie under philosophy, debating the best methods to justify beliefs and truths of nature, presupposing scientific realism—that what is scientifically systematized is real or truthful.
                </p>
                <p className="mb-4">
                  Science is the systematic study of the natural world through observation, experimentation, and analysis. It encompasses multiple disciplines that help us understand everything from the smallest particles to the vastness of the universe. In this module, we'll explore the fundamental concepts across physics, chemistry, biology, environmental science, and now expanded to include the philosophy of science, which examines the foundations, methods, and implications of scientific inquiry.
                </p>
                <p>
                  Understanding these basic principles, including epistemological foundations like empiricism—where knowledge derives primarily from sensory experience—is crucial for anyone looking to engage with modern technology, healthcare, environmental issues, and innovation. Whether you're an entrepreneur in biotech or simply curious about how the world works, this knowledge will enhance your ability to make informed decisions and communicate effectively about scientific topics.
                </p>
              </div>
            </Card>
          </section>

          {/* Section 2: Core Concepts */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Concepts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 border-l-4 border-l-indigo-500">
                <h3 className="font-bold text-lg mb-2">Philosophy of Science</h3>
                <p className="text-slate-600 text-sm">
                  The philosophy of science explores the metaphysical, epistemic, and semantic aspects of scientific practice. It overlaps with metaphysics, ontology, logic, and epistemology, addressing topics like causation, laws of nature, explanation, theoretical entities, and space-time.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-l-blue-500">
                <h3 className="font-bold text-lg mb-2">What is Science?</h3>
                <p className="text-slate-600 text-sm">
                  Science originates from philosophy, formalized by analytical philosophers, statisticians, and mathematicians, then applied by scientists to observe nature. For laymen, science involves experiments to find evidence or justifications for observable events, inferring causality. Evidence serves as clarity indicating the truth of judgments.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-l-cyan-500">
                <h3 className="font-bold text-lg mb-2">Spectrum of Scientific Realism</h3>
                <p className="text-slate-600 text-sm">
                  The spectrum of scientific realism posits that all science is self-evidently true, with variants like entity realism (belief in unobservable entities) and structural realism (focus on structures).
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-l-teal-500">
                <h3 className="font-bold text-lg mb-2">Scientific Epistemology</h3>
                <p className="text-slate-600 text-sm">
                  Current science uses empiricism, relying on human senses as proxies for independent observable events. This differs from rationalism, intuition, revelation, or skepticism. Empiricism asserts beliefs should be confirmed by experience. Key proponents include John Locke (tabula rasa), George Berkeley (subjective idealism), and David Hume.
                </p>
              </Card>
            </div>
          </section>

          {/* Section 3: Deep Dive */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Deep Dive Topics</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <h3 className="text-xl font-semibold mb-3 text-medical-blue">Causality</h3>
                <p className="text-slate-600 mb-3">
                  Causality assigns events or entities influencing others. In science, experiments document counterfactuals to infer causality, published as proofs. Philosophical tools include infallibility, conjectures and refutation (Popper), hypothesis testing, and verificationism.
                </p>
                <p className="text-slate-600 mb-3">
                  Historical views: Aristotle's four causes (material, formal, efficient, final); Hume's criteria (contiguity, priority, union); Kant's a priori causality; modern theories like counterfactuals (Lewis), probabilistic, causal calculus (Pearl).
                </p>
                <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-700 italic">
                  In science, causality requires correlation, temporal sequence, mechanisms, and eliminating alternatives. RCTs are key in medicine for causal inference.
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <h3 className="text-xl font-semibold mb-3 text-medical-blue">Research Philosophies</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                  <li><strong>Positivist:</strong> Objective understanding, independent analyst.</li>
                  <li><strong>Interpretivist:</strong> Subjective interpretation.</li>
                  <li><strong>Pragmatist:</strong> Focus on facts, practical results.</li>
                  <li><strong>Realistic:</strong> Combines positivist and interpretivist, assumes subjective human perception.</li>
                </ul>
                <div className="mt-4 flex gap-4 text-sm font-medium text-slate-500">
                  <span>Ontology (nature of reality)</span>
                  <span>•</span>
                  <span>Epistemology (knowledge acquisition)</span>
                  <span>•</span>
                  <span>Methodology (techniques)</span>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <h3 className="text-xl font-semibold mb-3 text-medical-blue">Scientific Method</h3>
                <p className="text-slate-600 mb-3">
                  Steps: Observation, hypothesis formulation, prediction, experimental testing. Involves iterations, recursions, interleavings, orderings. Peer review ensures content quality. Popper's falsification, Kuhn's paradigms.
                </p>
                <p className="text-slate-600">
                  In real life: Systematic, controlled, empirical, self-correcting investigation of hypothetical propositions.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <h3 className="text-xl font-semibold mb-3 text-medical-blue">Philosophy of Medicine</h3>
                <p className="text-slate-600">
                  Explores health/disease definitions (naturalistic, normative, hybrid), evidence (EBM, RCTs vs observational), causality (mechanistic vs pluralistic), reductionism (molecular focus) vs holism (biopsychosocial).
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Video Content */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <PlayCircle className="w-6 h-6 text-medical-blue" />
              Video Content
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {[
                { title: "Video 1: Introduction to Scientific Method and Philosophy", duration: "45 minutes" },
                { title: "Video 2: Physics Overview with Philosophical Insights", duration: "60 minutes" },
                { title: "Video 3: Chemistry Overview with Philosophical Insights", duration: "60 minutes" },
                { title: "Video 4: Biology, Environmental Science & Epistemology", duration: "60 minutes" },
                { title: "Video 5: Causality and Scientific Realism", duration: "60 minutes" }
              ].map((video, idx) => (
                <Card key={idx} className="p-4 hover:border-medical-blue/50 transition-colors group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-50 text-medical-blue flex items-center justify-center group-hover:bg-medical-blue group-hover:text-white transition-colors">
                      <PlayCircle className="w-6 h-6" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-semibold text-slate-900 group-hover:text-medical-blue transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-sm text-slate-500">Duration: {video.duration}</p>
                    </div>
                    <Button variant="ghost" size="sm" className="text-medical-blue">
                      Watch Now
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Section 5: Scientific Truths */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-6 h-6 text-medical-blue" />
              Scientific Truths
            </h2>
            <Card className="p-8 bg-white border-slate-200 shadow-sm">
              <div className="prose prose-slate max-w-none">
                <p className="mb-4">
                  Uses coherence (logical sense) with correspondence (empirical correctness) over pragmatic (usefulness). EBM prioritizes correspondence, de-emphasizing intuition. Examples: Atrial fibrillation (rate vs rhythm control), antibiotics for bronchitis.
                </p>
                <p>
                  Theories of explanation have evolved since 1950, focusing on causation, laws, and models.
                </p>
              </div>
            </Card>
          </section>

          {/* Section 5: Disciplinary Philosophy */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Layers className="w-6 h-6 text-medical-blue" />
              Key Topics & Disciplinary Philosophy
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">Physics Fundamentals and its Philosophy</h3>
                </div>
                <div className="space-y-3 text-slate-600">
                  <p><strong>A priori assumptions:</strong> regularity of nature, uniformity, empirical objectivity.</p>
                  <p>Matter, energy, motion, forces, waves, electricity, magnetism, and laws governing the universe. Philosophical aspects include causality in physics (e.g., light speed limits) and realism about theoretical entities.</p>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <FlaskConical className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">Chemistry Basics and its Philosophy</h3>
                </div>
                <div className="space-y-3 text-slate-600">
                  <p><strong>A priori assumptions:</strong> emergentism of forms and essence.</p>
                  <p>Atomic structure, periodic table, bonds, reactions, acids/bases, organic principles. Philosophy explores reductionism (molecular explanations) vs holism.</p>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <Dna className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">Biology Essentials and its Philosophy</h3>
                </div>
                <div className="space-y-3 text-slate-600">
                  <p><strong>A priori assumptions:</strong> teleology or final causes in some views.</p>
                  <p>Cell structure, genetics, evolution, ecosystems, human anatomy, diversity of life. Philosophical debates: reductionism (genetic) vs holism (biopsychosocial), causality in biology.</p>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center">
                    <TreePine className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">Environmental Science and Philosophy</h3>
                </div>
                <div className="space-y-3 text-slate-600">
                  <p>Climate change, pollution, conservation, renewable energy, human-nature interactions. Philosophy includes pragmatic approaches to sustainability and realistic views on human perception of environment.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Further Reading */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <ExternalLink className="w-6 h-6 text-medical-blue" />
              Further Reading
            </h2>
            <Card className="p-6 bg-slate-50 border-slate-200 border-dashed">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Wikipedia: Causality", url: "https://en.wikipedia.org/wiki/Causality" },
                  { label: "Wikipedia: Empiricism", url: "https://en.wikipedia.org/wiki/Empiricism" },
                  { label: "Stanford: Scientific Realism", url: "https://plato.stanford.edu/entries/scientific-realism/" },
                  { label: "Stanford: Philosophy of Medicine", url: "https://plato.stanford.edu/entries/medicine/" },
                  { label: "IntechOpen: Philosophy and Paradigm of Scientific Research", url: "https://www.intechopen.com/chapters/71615" }
                ].map((link, idx) => (
                  <a 
                    key={idx}
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200 hover:border-medical-blue hover:text-medical-blue transition-all group"
                  >
                    <span className="text-sm font-medium">{link.label}</span>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-medical-blue" />
                  </a>
                ))}
              </div>
            </Card>
          </section>

          {/* Section 7: Knowledge Check Quiz */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-medical-blue" />
              Knowledge Check Quiz
            </h2>
            <Card className="p-8 bg-white border-slate-200 shadow-sm">
              {showScore ? (
                <div className="text-center">
                  <div className="mb-6">
                    <CheckCircle className={`w-16 h-16 mx-auto ${score >= 7 ? 'text-green-500' : 'text-orange-500'}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Quiz Complete!
                  </h3>
                  <p className="text-lg text-slate-600 mb-6">
                    You scored {score} out of {quizQuestions.length}
                  </p>
                  <div className="flex justify-center gap-4">
                    <Button variant="outline" onClick={resetQuiz}>
                      Retake Quiz
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="max-w-2xl mx-auto">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-sm font-medium text-slate-500">
                      Question {currentQuestion + 1} of {quizQuestions.length}
                    </span>
                    <span className="text-sm font-medium text-medical-blue">
                      {Math.round(((currentQuestion) / quizQuestions.length) * 100)}% Complete
                    </span>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-slate-900 mb-6">
                      {quizQuestions[currentQuestion].question}
                    </h3>
                    <div className="space-y-3">
                      {quizQuestions[currentQuestion].options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleAnswerClick(index)}
                          disabled={selectedOption !== null}
                          className={`w-full text-left p-4 rounded-lg border transition-all ${
                            selectedOption === null 
                              ? 'border-slate-200 hover:border-medical-blue hover:bg-blue-50' 
                              : selectedOption === index 
                                ? isCorrect 
                                  ? 'border-green-500 bg-green-50 text-green-700'
                                  : 'border-red-500 bg-red-50 text-red-700'
                                : index === quizQuestions[currentQuestion].correct
                                  ? 'border-green-500 bg-green-50 text-green-700'
                                  : 'border-slate-200 opacity-50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{option}</span>
                            {selectedOption !== null && (
                              index === quizQuestions[currentQuestion].correct ? (
                                <CheckCircle className="w-5 h-5 text-green-600" />
                              ) : selectedOption === index && (
                                <div className="w-5 h-5 rounded-full border-2 border-red-500 flex items-center justify-center">
                                  <div className="w-0.5 h-3 bg-red-500 rotate-45 absolute" />
                                  <div className="w-0.5 h-3 bg-red-500 -rotate-45 absolute" />
                                </div>
                              )
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </Card>
          </section>

          {/* Completion Action */}
          <div className="flex justify-center pt-8 pb-12">
            <Button 
              size="lg" 
              className="bg-medical-blue hover:bg-blue-700 text-white px-8 h-12 text-lg shadow-lg shadow-blue-500/20"
              disabled={!showScore || score < 7}
            >
              <CheckCircle className="w-5 h-5 mr-2" />
              Mark Module as Complete
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ScienceAndNature;
