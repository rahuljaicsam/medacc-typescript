import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  BookOpen, 
  CheckCircle,
  PlayCircle,
  Cpu,
  Network,
  Zap,
  Microscope,
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

const TechnologyAndInnovation = () => {
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
        if (data['general-knowledge']?.modules?.['module-6']?.status === 'completed') {
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
        attempts: (docSnap.exists() && docSnap.data()['general-knowledge']?.modules?.['module-6']?.attempts || 0) + 1,
      };

      if (docSnap.exists()) {
        await updateDoc(docRef, {
          'general-knowledge.modules.module-6': moduleData,
          'general-knowledge.lastUpdated': serverTimestamp()
        });
      } else {
        await setDoc(docRef, {
          'general-knowledge': {
            modules: {
              'module-6': moduleData
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
      question: "What does 'CRISPR' technology primarily allow scientists to do?",
      options: [
        "Create artificial intelligence",
        "Edit genes with high precision",
        "3D print organs",
        "Transmit data faster"
      ],
      correct: 1
    },
    {
      question: "Which of the following is a key application of Artificial Intelligence in healthcare?",
      options: [
        "Analyzing medical images for diagnosis",
        "Replacing all doctors",
        "Manufacturing generic drugs",
        "Managing hospital cafeterias"
      ],
      correct: 0
    },
    {
      question: "What is 'Telemedicine'?",
      options: [
        "Medicine for television actors",
        "The remote diagnosis and treatment of patients by means of telecommunications technology",
        "A new type of robotic surgery",
        "Using VR to treat phobias"
      ],
      correct: 1
    },
    {
      question: "What is the concept of 'Big Data' in biomedicine?",
      options: [
        "Large file sizes for MRI scans",
        "The use of extremely large datasets to reveal patterns, trends, and associations",
        "Storing data on big servers",
        "A popular tech company"
      ],
      correct: 1
    },
    {
      question: "What is a 'wearable' in the context of health technology?",
      options: [
        "Fashionable hospital gowns",
        "Electronic devices that can be worn as accessories to monitor health metrics (e.g., heart rate, steps)",
        "Implantable pacemakers",
        "Prosthetic limbs"
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
            Module 6 of 9
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Biomedical Technology & Innovation
          </h1>
          <p className="text-xl text-slate-600">
            Digital revolution, emerging technologies, computing concepts, and future innovations in healthcare.
          </p>
        </div>

        <div className="space-y-12">
          {/* Section 1: Digital Health Revolution */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Network className="w-6 h-6 text-medical-blue" />
              The Digital Health Revolution
            </h2>
            <Card className="p-8 bg-white border-slate-200 shadow-sm">
              <div className="prose prose-slate max-w-none">
                <p className="mb-4">
                  The digitization of healthcare has transformed patient care. **Electronic Health Records (EHRs)** have replaced paper charts, enabling better data sharing and coordination.
                </p>
                <p className="mb-4">
                  **Telemedicine** has bridged the gap between patients and providers, making healthcare accessible remotely. This shift is not just technological but cultural, empowering patients to take an active role in managing their health through apps and portals.
                </p>
              </div>
            </Card>
          </section>

          {/* Section 2: Emerging Technologies */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Cpu className="w-6 h-6 text-medical-blue" />
              AI & Big Data in Medicine
            </h2>
            <Card className="p-8 bg-white border-slate-200 shadow-sm">
              <div className="prose prose-slate max-w-none">
                <p className="mb-4">
                  **Artificial Intelligence (AI)** is revolutionizing diagnostics. Algorithms can now analyze medical images (X-rays, MRIs) with accuracy comparable to or exceeding human experts, detecting early signs of diseases like cancer.
                </p>
                <p className="mb-4">
                  **Big Data** analytics allows researchers to mine vast datasets to identify population health trends, predict outbreaks, and personalize treatments (**Precision Medicine**) based on an individual's genetic makeup and lifestyle.
                </p>
              </div>
            </Card>
          </section>

          {/* Section 3: Future Innovations */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Microscope className="w-6 h-6 text-medical-blue" />
              Frontiers of Biotech Innovation
            </h2>
            <Card className="p-8 bg-white border-slate-200 shadow-sm">
              <div className="prose prose-slate max-w-none">
                <p className="mb-4">
                  **CRISPR-Cas9** gene editing offers the potential to cure genetic disorders by precisely modifying DNA. This technology raises immense ethical questions but holds the promise of eradicating hereditary diseases.
                </p>
                <p className="mb-4">
                  Other frontiers include **3D Bioprinting** of tissues and organs for transplantation, **Nanomedicine** for targeted drug delivery, and **Brain-Computer Interfaces (BCIs)** that could restore function to paralyzed individuals.
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
                { title: "The Future of Digital Health", duration: "10:00" },
                { title: "AI in Diagnostics: A Deep Dive", duration: "12:00" },
                { title: "CRISPR Explained", duration: "11:30" },
                { title: "Wearables & The Internet of Medical Things", duration: "11:30" }
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

export default TechnologyAndInnovation;
