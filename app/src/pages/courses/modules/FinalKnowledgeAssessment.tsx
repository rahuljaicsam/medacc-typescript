import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  CheckCircle,
  HelpCircle,
  Award,
  AlertCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/sections/Navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { auth, db } from '@/lib/firebase';
import { doc, getDoc, setDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { toast } from 'sonner';

const FinalKnowledgeAssessment = () => {
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
        if (data['general-knowledge']?.modules?.['module-9']?.status === 'completed') {
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
        attempts: (docSnap.exists() && docSnap.data()['general-knowledge']?.modules?.['module-9']?.attempts || 0) + 1,
      };

      if (docSnap.exists()) {
        const updates: any = {
          'general-knowledge.modules.module-9': moduleData,
          'general-knowledge.lastUpdated': serverTimestamp()
        };
        
        if (passed) {
          updates['general-knowledge.status'] = 'completed';
          updates['general-knowledge.completedAt'] = serverTimestamp();
        }

        await updateDoc(docRef, updates);
      } else {
        const initialData: any = {
          'general-knowledge': {
            modules: {
              'module-9': moduleData
            },
            startedAt: serverTimestamp(),
            lastUpdated: serverTimestamp()
          }
        };

        if (passed) {
          initialData['general-knowledge'].status = 'completed';
          initialData['general-knowledge'].completedAt = serverTimestamp();
        }

        await setDoc(docRef, initialData, { merge: true });
      }

      if (passed) {
        toast.success("Assessment passed successfully! Congratulations!");
        setIsCompleted(true);
      } else {
        toast.error("You didn't pass the assessment. Please try again.");
      }
    } catch (error) {
      console.error("Error updating progress:", error);
      toast.error("Failed to save progress");
    }
  };

  const quizQuestions = [
    // Module 1: Science & Nature
    {
      question: "Which epistemology relies on human senses and perceptions for knowledge?",
      options: ["Rationalism", "Empiricism", "Skepticism", "Idealism"],
      correct: 1
    },
    {
      question: "What is the gold standard for inferring causality in medicine?",
      options: ["Case Studies", "Randomized Controlled Trials (RCTs)", "Expert Opinion", "Observational Studies"],
      correct: 1
    },
    {
      question: "Who proposed the concept of 'falsification' in scientific methodology?",
      options: ["Thomas Kuhn", "Karl Popper", "David Hume", "Immanuel Kant"],
      correct: 1
    },
    
    // Module 2: History & Geography
    {
      question: "Which city is a major global hub for biotechnology?",
      options: ["Detroit", "Boston/Cambridge", "Las Vegas", "Miami"],
      correct: 1
    },
    {
      question: "The Flexner Report of 1910 revolutionized:",
      options: ["Medical Education", "Hospital Architecture", "Health Insurance", "Drug Pricing"],
      correct: 0
    },
    {
      question: "What event significantly accelerated pharmaceutical mass production?",
      options: ["The Civil War", "World War II", "The Cold War", "The Great Depression"],
      correct: 1
    },

    // Module 3: Math & Logic
    {
      question: "What does a p-value measure?",
      options: ["Effect size", "Probability of results occurring by chance", "Study duration", "Cost-effectiveness"],
      correct: 1
    },
    {
      question: "Which bias involves seeking information that supports pre-existing beliefs?",
      options: ["Confirmation Bias", "Selection Bias", "Recall Bias", "Observer Bias"],
      correct: 0
    },
    {
      question: "In diagnostics, 'sensitivity' refers to:",
      options: ["True Positive Rate", "True Negative Rate", "False Positive Rate", "False Negative Rate"],
      correct: 0
    },

    // Module 4: Literature & Arts
    {
      question: "Who wrote 'De Humani Corporis Fabrica'?",
      options: ["Galen", "Andreas Vesalius", "Hippocrates", "William Harvey"],
      correct: 1
    },
    {
      question: "Mary Shelley's 'Frankenstein' is a foundational text for:",
      options: ["Cardiology", "Bioethics", "Dermatology", "Pediatrics"],
      correct: 1
    },
    {
      question: "Which artist is famous for the 'Vitruvian Man'?",
      options: ["Michelangelo", "Leonardo da Vinci", "Donatello", "Raphael"],
      correct: 1
    },

    // Module 5: Politics & Economics
    {
      question: "Which healthcare model is funded by taxes and government-run (e.g., UK NHS)?",
      options: ["Bismarck Model", "Beveridge Model", "Out-of-Pocket Model", "Private Insurance Model"],
      correct: 1
    },
    {
      question: "'Moral Hazard' in health economics refers to:",
      options: ["Doctors behaving unethically", "Increased usage of services when insured", "Dangerous working conditions", "Spread of infectious disease"],
      correct: 1
    },
    {
      question: "Which organization coordinates international public health?",
      options: ["WTO", "IMF", "WHO", "NATO"],
      correct: 2
    },

    // Module 6: Tech & Innovation
    {
      question: "CRISPR-Cas9 is a technology used for:",
      options: ["MRI Imaging", "Genome Editing", "3D Printing", "Telemedicine"],
      correct: 1
    },
    {
      question: "What is the primary benefit of Telemedicine?",
      options: ["Higher cost", "Remote access to care", "Better surgical outcomes", "More paperwork"],
      correct: 1
    },
    {
      question: "Big Data in healthcare allows for:",
      options: ["Less privacy", "Population health trends & precision medicine", "Slower computers", "More manual labor"],
      correct: 1
    },

    // Module 7: Sports & Entertainment
    {
      question: "CTE (Chronic Traumatic Encephalopathy) is linked to:",
      options: ["Smoking", "Repetitive head trauma", "Poor diet", "Genetics only"],
      correct: 1
    },
    {
      question: "The 'Angelina Jolie Effect' refers to:",
      options: ["Celebrity influence on health behaviors", "Acting methods", "Fashion trends", "Movie box office sales"],
      correct: 0
    },
    {
      question: "Kinesiology is the study of:",
      options: ["Human movement", "Skin diseases", "Kidney function", "Brain waves"],
      correct: 0
    },

    // Module 8: Philosophy & Religion
    {
      question: "The principle of 'Non-maleficence' means:",
      options: ["Do good", "Do no harm", "Be fair", "Tell the truth"],
      correct: 1
    },
    {
      question: "Which concept views the mind and body as distinct entities?",
      options: ["Holism", "Dualism", "Materialism", "Idealism"],
      correct: 1
    },
    {
      question: "Palliative care focuses on:",
      options: ["Curing disease", "Relieving symptoms and improving quality of life", "Emergency surgery", "Preventive vaccines"],
      correct: 1
    },

    // General / Synthesis
    {
      question: "Evidence-Based Medicine (EBM) integrates:",
      options: ["Clinical expertise, patient values, and best research evidence", "Only research studies", "Only doctor's opinion", "Only patient preference"],
      correct: 0
    },
    {
      question: "Which of the following is NOT a pillar of medical ethics?",
      options: ["Autonomy", "Beneficence", "Justice", "Profitability"],
      correct: 3
    },
    {
      question: "The 'Social Determinants of Health' include:",
      options: ["Genetics only", "Economic stability, education, and environment", "Hospital equipment", "Drug prices"],
      correct: 1
    },
    {
      question: "What is a 'Double-Blind' study?",
      options: ["Neither participants nor researchers know who gets the treatment", "Participants are blindfolded", "Researchers wear glasses", "Two studies done at once"],
      correct: 0
    },
    {
      question: "Herd immunity is achieved when:",
      options: ["Everyone is sick", "A sufficient percentage of a population is immune", "No one is vaccinated", "Animals are healthy"],
      correct: 1
    },
    {
      question: "The Hippocratic Oath is historically associated with:",
      options: ["Lawyers", "Physicians", "Architects", "Soldiers"],
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
            Module 9 of 9
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Final Knowledge Assessment
          </h1>
          <p className="text-xl text-slate-600">
            Comprehensive quiz covering all topics from the General Knowledge course.
            Prove your mastery of the foundations!
          </p>
        </div>

        <div className="space-y-12">
          {/* Introduction Card */}
          <Card className="p-8 bg-white border-slate-200 shadow-sm mb-8">
            <div className="flex items-start gap-4">
              <div className="bg-blue-50 p-3 rounded-full">
                <Award className="w-8 h-8 text-medical-blue" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">Assessment Instructions</h2>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                  <li>This assessment consists of <strong>30 questions</strong> covering all previous modules.</li>
                  <li>You need a score of <strong>70% or higher</strong> (21/30) to pass.</li>
                  <li>Take your time; there is no time limit, but you must complete it in one session.</li>
                  <li>Passing this assessment marks the completion of the General Knowledge Foundations course!</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Quiz Section */}
          <section>
            <Card className="p-8 bg-white border-slate-200 shadow-lg">
              {!showScore ? (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-sm font-medium text-slate-500">
                      Question {currentQuestion + 1} of {quizQuestions.length}
                    </span>
                    <span className="text-sm font-medium text-medical-blue">
                      {Math.round(((currentQuestion) / quizQuestions.length) * 100)}% Complete
                    </span>
                  </div>
                  
                  <div className="w-full bg-slate-100 h-2 rounded-full mb-8">
                    <div 
                      className="bg-medical-blue h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentQuestion) / quizQuestions.length) * 100}%` }}
                    />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-900 mb-6 min-h-[60px]">
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
                              <AlertCircle className="w-5 h-5 text-red-600" />
                            )
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 ${
                      score >= 21 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                    }`}
                  >
                    {score >= 21 ? (
                      <Award className="w-12 h-12" />
                    ) : (
                      <AlertCircle className="w-12 h-12" />
                    )}
                  </motion.div>
                  
                  <h3 className="text-3xl font-bold text-slate-900 mb-2">
                    {score >= 21 ? 'Assessment Passed!' : 'Assessment Failed'}
                  </h3>
                  
                  <p className="text-xl text-slate-600 mb-8">
                    You scored {score} out of {quizQuestions.length} ({Math.round((score / quizQuestions.length) * 100)}%)
                  </p>

                  {score >= 21 && (
                    <div className="mb-8 p-6 bg-green-50 rounded-xl border border-green-200 max-w-md mx-auto">
                      <p className="text-green-800 font-medium">
                        Congratulations! You have successfully completed the General Knowledge Foundations Course.
                      </p>
                    </div>
                  )}
                  
                  <div className="flex justify-center gap-4">
                    <Button onClick={resetQuiz} variant="outline" size="lg">
                      Retake Assessment
                    </Button>
                    <Button 
                      onClick={() => navigate('/course/general-knowledge-foundations')} 
                      size="lg"
                      className="bg-medical-blue hover:bg-blue-700"
                    >
                      Return to Course
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
};

export default FinalKnowledgeAssessment;
