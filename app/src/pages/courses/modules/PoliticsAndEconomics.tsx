import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  BookOpen, 
  CheckCircle,
  PlayCircle,
  Landmark,
  Coins,
  Globe,
  Scale,
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

const PoliticsAndEconomics = () => {
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
        if (data['general-knowledge']?.modules?.['module-5']?.status === 'completed') {
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
        attempts: (docSnap.exists() && docSnap.data()['general-knowledge']?.modules?.['module-5']?.attempts || 0) + 1,
      };

      if (docSnap.exists()) {
        await updateDoc(docRef, {
          'general-knowledge.modules.module-5': moduleData,
          'general-knowledge.lastUpdated': serverTimestamp()
        });
      } else {
        await setDoc(docRef, {
          'general-knowledge': {
            modules: {
              'module-5': moduleData
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
      question: "Which of the following best describes a 'single-payer' healthcare system?",
      options: [
        "A system where the government, rather than private insurers, pays for all healthcare costs",
        "A system where each citizen pays for their own healthcare directly",
        "A system with only one hospital chain",
        "A system where employers are the sole source of insurance"
      ],
      correct: 0
    },
    {
      question: "In health economics, what is 'moral hazard'?",
      options: [
        "Unethical behavior by doctors",
        "The tendency for people to use more healthcare services when they are insured because they don't bear the full cost",
        "The risk of a pandemic spreading",
        "A legal term for medical malpractice"
      ],
      correct: 1
    },
    {
      question: "Which US government agency is primarily responsible for regulating pharmaceutical products?",
      options: [
        "CDC (Centers for Disease Control and Prevention)",
        "FDA (Food and Drug Administration)",
        "NIH (National Institutes of Health)",
        "WHO (World Health Organization)"
      ],
      correct: 1
    },
    {
      question: "What is the primary function of a patent in the pharmaceutical industry?",
      options: [
        "To keep drug prices low forever",
        "To allow generic competition immediately",
        "To grant exclusive rights to sell a drug for a limited time to recoup R&D costs",
        "To ban the drug in other countries"
      ],
      correct: 2
    },
    {
      question: "Which international organization coordinates global public health responses?",
      options: [
        "NATO",
        "WTO (World Trade Organization)",
        "WHO (World Health Organization)",
        "IMF (International Monetary Fund)"
      ],
      correct: 2
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
            Module 5 of 9
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Healthcare Politics & Economics
          </h1>
          <p className="text-xl text-slate-600">
            Political systems, economic principles, international relations, and current affairs in the context of global health.
          </p>
        </div>

        <div className="space-y-12">
          {/* Section 1: Healthcare Systems */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Landmark className="w-6 h-6 text-medical-blue" />
              Global Healthcare Political Systems
            </h2>
            <Card className="p-8 bg-white border-slate-200 shadow-sm">
              <div className="prose prose-slate max-w-none">
                <p className="mb-4">
                  Healthcare delivery is deeply influenced by political ideology. Systems range from the **Beveridge Model** (government-provided, like the UK's NHS) and **Single-Payer** (government-financed but private delivery, like Canada) to the **Bismarck Model** (non-profit sickness funds, like Germany) and the **Out-of-Pocket** model found in many developing nations.
                </p>
                <p className="mb-4">
                  Understanding these structures is crucial for any business operating internationally, as market entry strategies must adapt to who pays—the government, private insurers, or patients themselves.
                </p>
              </div>
            </Card>
          </section>

          {/* Section 2: Health Economics */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Coins className="w-6 h-6 text-medical-blue" />
              Principles of Health Economics
            </h2>
            <Card className="p-8 bg-white border-slate-200 shadow-sm">
              <div className="prose prose-slate max-w-none">
                <p className="mb-4">
                  Health economics deals with the allocation of scarce resources. Key concepts include **Moral Hazard** (overuse of care due to insurance coverage) and **Adverse Selection** (sicker people buying more insurance).
                </p>
                <p className="mb-4">
                  The pharmaceutical industry relies on **patents** to protect intellectual property and recoup R&D costs. However, this creates tension with the need for affordable access to medicines, leading to political debates over drug pricing and generic competition.
                </p>
              </div>
            </Card>
          </section>

          {/* Section 3: International Relations */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Globe className="w-6 h-6 text-medical-blue" />
              International Health Relations
            </h2>
            <Card className="p-8 bg-white border-slate-200 shadow-sm">
              <div className="prose prose-slate max-w-none">
                <p className="mb-4">
                  Global health is a key component of international diplomacy. Organizations like the **World Health Organization (WHO)** coordinate responses to pandemics and set standards.
                </p>
                <p className="mb-4">
                  Health aid and "vaccine diplomacy" are tools used by nations to build soft power. Current affairs, such as trade wars or sanctions, can directly impact the supply chains of medical devices and pharmaceuticals.
                </p>
              </div>
            </Card>
          </section>

          {/* Section 4: Video Content */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <PlayCircle className="w-6 h-6 text-medical-blue" />
              Video Lectures (55 mins)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Comparing Global Health Systems", duration: "15:00" },
                { title: "Pharma Economics 101", duration: "15:00" },
                { title: "The Politics of Pandemics", duration: "12:30" },
                { title: "International Health Law", duration: "12:30" }
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

export default PoliticsAndEconomics;
