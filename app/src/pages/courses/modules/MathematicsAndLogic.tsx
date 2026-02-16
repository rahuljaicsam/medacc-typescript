import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  BookOpen, 
  CheckCircle,
  PlayCircle,
  Calculator,
  TrendingUp,
  BrainCircuit,
  PieChart,
  HelpCircle,
  Award
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

const MathematicsAndLogic = () => {
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
        if (data['general-knowledge']?.modules?.['module-3']?.status === 'completed') {
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
        attempts: (docSnap.exists() && docSnap.data()['general-knowledge']?.modules?.['module-3']?.attempts || 0) + 1,
      };

      if (docSnap.exists()) {
        await updateDoc(docRef, {
          'general-knowledge.modules.module-3': moduleData,
          'general-knowledge.lastUpdated': serverTimestamp()
        });
      } else {
        await setDoc(docRef, {
          'general-knowledge': {
            modules: {
              'module-3': moduleData
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
      question: "In clinical trials, what does a 'p-value' typically measure?",
      options: [
        "The probability that the results happened by chance",
        "The number of patients in the trial",
        "The potential profit of the drug",
        "The duration of the study"
      ],
      correct: 0
    },
    {
      question: "Which financial metric is most crucial for an early-stage biotech startup?",
      options: [
        "Dividends per share",
        "Burn Rate (Cash Burn)",
        "P/E Ratio",
        "Inventory Turnover"
      ],
      correct: 1
    },
    {
      question: "What is 'sensitivity' in the context of a medical diagnostic test?",
      options: [
        "The ability to correctly identify those with the disease (True Positive Rate)",
        "The ability to correctly identify those without the disease (True Negative Rate)",
        "The cost of the test",
        "The speed of the results"
      ],
      correct: 0
    },
    {
      question: "Which cognitive bias often leads doctors to stick with an initial diagnosis despite new contradictory evidence?",
      options: [
        "Confirmation Bias",
        "Sunk Cost Fallacy",
        "Availability Heuristic",
        "Dunning-Kruger Effect"
      ],
      correct: 0
    },
    {
      question: "What does 'ROI' stand for in business mathematics?",
      options: [
        "Return On Investment",
        "Rate Of Inflation",
        "Risk Of Injury",
        "Revenue Over Interest"
      ],
      correct: 0
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
            Module 3 of 9
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Healthcare Business Mathematics & Logic
          </h1>
          <p className="text-xl text-slate-600">
            Essential healthcare and biotech business mathematical concepts, statistics, and logical reasoning principles.
          </p>
        </div>

        <div className="space-y-12">
          {/* Section 1: Statistics in Healthcare */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <PieChart className="w-6 h-6 text-medical-blue" />
              Statistics in Healthcare
            </h2>
            <Card className="p-8 bg-white border-slate-200 shadow-sm">
              <div className="prose prose-slate max-w-none">
                <p className="mb-4">
                  In healthcare, statistics are not just numbers; they are the language of evidence. Understanding concepts like <strong>p-values</strong>, <strong>confidence intervals</strong>, and <strong>statistical significance</strong> is vital for interpreting clinical trial results and making evidence-based decisions.
                </p>
                <p className="mb-4">
                  Diagnostic accuracy is measured by <strong>sensitivity</strong> (true positive rate) and <strong>specificity</strong> (true negative rate). A high sensitivity is crucial for screening tests to ensure no cases are missed, while high specificity is needed to confirm a diagnosis and avoid false alarms.
                </p>
              </div>
            </Card>
          </section>

          {/* Section 2: Financial Mathematics */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-medical-blue" />
              Biotech Financial Mathematics
            </h2>
            <Card className="p-8 bg-white border-slate-200 shadow-sm">
              <div className="prose prose-slate max-w-none">
                <p className="mb-4">
                  For biotech entrepreneurs, financial literacy is key to survival. The <strong>Burn Rate</strong> tells you how fast you are spending your cash reserves, determining your "runway" before you need more funding.
                </p>
                <p className="mb-4">
                  <strong>Return on Investment (ROI)</strong> and <strong>Net Present Value (NPV)</strong> are used to evaluate the potential profitability of developing a new drug or technology, balancing the high upfront costs against future revenue streams.
                </p>
              </div>
            </Card>
          </section>

          {/* Section 3: Logical Reasoning */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <BrainCircuit className="w-6 h-6 text-medical-blue" />
              Logical Reasoning & Cognitive Biases
            </h2>
            <Card className="p-8 bg-white border-slate-200 shadow-sm">
              <div className="prose prose-slate max-w-none">
                <p className="mb-4">
                  Critical thinking in medicine and business requires awareness of logical fallacies and cognitive biases. <strong>Confirmation Bias</strong> can lead to ignoring warning signs in a clinical study or a business plan.
                </p>
                <p className="mb-4">
                  <strong>Sunk Cost Fallacy</strong> is particularly dangerous in drug development—continuing to invest in a failing project just because you've already spent millions. Rational decision-making involves evaluating future prospects independent of past costs.
                </p>
              </div>
            </Card>
          </section>

          {/* Section 4: Video Content */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <PlayCircle className="w-6 h-6 text-medical-blue" />
              Video Lectures (40 mins)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Understanding Clinical Statistics", duration: "15:00" },
                { title: "Financial Modeling for Biotech", duration: "12:30" },
                { title: "Decision Making & Biases", duration: "12:30" }
              ].map((video, index) => (
                <Card key={index} className="p-4 flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer group">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-medical-blue group-hover:bg-medical-blue group-hover:text-white transition-colors">
                    <PlayCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{video.title}</h3>
                    <p className="text-sm text-slate-500">{video.duration}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Section 5: Quiz */}
          <section className="pt-8 border-t border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-medical-blue" />
              Knowledge Check
            </h2>
            
            <Card className="p-8 bg-white border-slate-200 shadow-sm">
              {!showScore ? (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-sm font-medium text-slate-500">
                      Question {currentQuestion + 1} of {quizQuestions.length}
                    </span>
                    <span className="text-sm font-medium text-slate-500">
                      Score: {score}
                    </span>
                  </div>
                  
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
                          {selectedOption !== null && index === quizQuestions[currentQuestion].correct && (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-10 h-10 text-medical-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Module Completed!
                  </h3>
                  <p className="text-slate-600 mb-6">
                    You scored {score} out of {quizQuestions.length}
                  </p>
                  
                  <div className="flex justify-center gap-4">
                    <Button onClick={resetQuiz} variant="outline">
                      Retake Quiz
                    </Button>
                    <Button onClick={() => navigate('/course/general-knowledge-foundations')}>
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

export default MathematicsAndLogic;
