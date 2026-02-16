import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  BookOpen, 
  CheckCircle,
  PlayCircle,
  Scroll,
  Heart,
  Scale,
  Cross,
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

const PhilosophyAndReligion = () => {
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
        if (data['general-knowledge']?.modules?.['module-8']?.status === 'completed') {
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
        attempts: (docSnap.exists() && docSnap.data()['general-knowledge']?.modules?.['module-8']?.attempts || 0) + 1,
      };

      if (docSnap.exists()) {
        await updateDoc(docRef, {
          'general-knowledge.modules.module-8': moduleData,
          'general-knowledge.lastUpdated': serverTimestamp()
        });
      } else {
        await setDoc(docRef, {
          'general-knowledge': {
            modules: {
              'module-8': moduleData
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
      question: "Which ethical principle emphasizes 'doing good' and acting in the patient's best interest?",
      options: [
        "Non-maleficence",
        "Beneficence",
        "Autonomy",
        "Justice"
      ],
      correct: 1
    },
    {
      question: "The concept of 'Primum non nocere' (First, do no harm) is most closely associated with which principle?",
      options: [
        "Beneficence",
        "Non-maleficence",
        "Fidelity",
        "Veracity"
      ],
      correct: 1
    },
    {
      question: "In many religious traditions, how is the body viewed in relation to healthcare?",
      options: [
        "As an obstacle to be overcome",
        "As a machine to be fixed",
        "As a sacred gift or 'temple' to be cared for",
        "As irrelevant to spiritual life"
      ],
      correct: 2
    },
    {
      question: "Which of the following is a common bioethical issue where religious views often diverge?",
      options: [
        "Treating a broken leg",
        "End-of-life care and euthanasia",
        "Diagnosing the flu",
        "Prescribing antibiotics"
      ],
      correct: 1
    },
    {
      question: "What is 'Dualism' in the philosophy of mind and body?",
      options: [
        "The belief that the mind and body are distinct entities",
        "The belief that only the physical body exists",
        "The practice of seeing two doctors",
        "A type of medical procedure"
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
            Module 8 of 9
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Philosophy of Medicine & Healthcare in Religion
          </h1>
          <p className="text-xl text-slate-600">
            Philosophical traditions, world religions, ethical systems, and spiritual beliefs in the context of healing and care.
          </p>
        </div>

        <div className="space-y-12">
          {/* Section 1: Philosophy of Medicine */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Scale className="w-6 h-6 text-medical-blue" />
              Core Principles of Bioethics
            </h2>
            <Card className="p-8 bg-white border-slate-200 shadow-sm">
              <div className="prose prose-slate max-w-none">
                <p className="mb-4">
                  The philosophy of medicine is grounded in four key ethical pillars: **Autonomy** (respecting the patient's right to choose), **Beneficence** (acting in the best interest of the patient), **Non-maleficence** ("do no harm"), and **Justice** (fair distribution of resources).
                </p>
                <p className="mb-4">
                  Philosophical debates also explore the nature of health itself—is it merely the absence of disease, or a holistic state of well-being? Concepts like **Dualism** (Descartes) versus **Holism** continue to influence how we treat the patient as a person, not just a set of symptoms.
                </p>
              </div>
            </Card>
          </section>

          {/* Section 2: Religion and Healthcare */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Scroll className="w-6 h-6 text-medical-blue" />
              Faith and Healing Traditions
            </h2>
            <Card className="p-8 bg-white border-slate-200 shadow-sm">
              <div className="prose prose-slate max-w-none">
                <p className="mb-4">
                  For billions of people, healthcare decisions are deeply rooted in religious beliefs. Whether it's dietary laws (Halal/Kosher), views on blood transfusions (Jehovah's Witnesses), or the sanctity of life in end-of-life care, understanding these perspectives is crucial for cultural competence.
                </p>
                <p className="mb-4">
                  Many modern hospitals were founded by religious orders, highlighting the historical link between spiritual duty and the care of the sick. The concept of the body as a "temple" drives preventive health in many traditions.
                </p>
              </div>
            </Card>
          </section>

          {/* Section 3: The Mind-Body Connection */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Heart className="w-6 h-6 text-medical-blue" />
              Spirituality and Well-being
            </h2>
            <Card className="p-8 bg-white border-slate-200 shadow-sm">
              <div className="prose prose-slate max-w-none">
                <p className="mb-4">
                  Modern science is increasingly recognizing the impact of spiritual well-being on physical health. Studies suggest that practices like meditation, prayer, and community belonging can lower stress, improve immune function, and aid recovery.
                </p>
                <p className="mb-4">
                  **Palliative Care** integrates this holistic view, addressing not just physical pain but also "spiritual pain" or existential distress in terminally ill patients.
                </p>
              </div>
            </Card>
          </section>

          {/* Section 4: Video Content */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <PlayCircle className="w-6 h-6 text-medical-blue" />
              Video Lectures (45 mins)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "The 4 Pillars of Medical Ethics", duration: "12:00" },
                { title: "Religion & Medicine: A Global View", duration: "12:00" },
                { title: "The Mind-Body Problem in Medicine", duration: "10:30" },
                { title: "Spirituality in Palliative Care", duration: "10:30" }
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

export default PhilosophyAndReligion;
