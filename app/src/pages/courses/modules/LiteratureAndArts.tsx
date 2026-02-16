import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  BookOpen, 
  CheckCircle,
  PlayCircle,
  PenTool,
  Library,
  Palette,
  ScrollText,
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

const LiteratureAndArts = () => {
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
        if (data['general-knowledge']?.modules?.['module-4']?.status === 'completed') {
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
        attempts: (docSnap.exists() && docSnap.data()['general-knowledge']?.modules?.['module-4']?.attempts || 0) + 1,
      };

      if (docSnap.exists()) {
        await updateDoc(docRef, {
          'general-knowledge.modules.module-4': moduleData,
          'general-knowledge.lastUpdated': serverTimestamp()
        });
      } else {
        await setDoc(docRef, {
          'general-knowledge': {
            modules: {
              'module-4': moduleData
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
      question: "Which classic novel famously explores the ethical implications of creating life, often cited in bioethics?",
      options: [
        "Dracula",
        "Frankenstein",
        "The Strange Case of Dr. Jekyll and Mr. Hyde",
        "The Invisible Man"
      ],
      correct: 1
    },
    {
      question: "The 'Vitruvian Man', a study of ideal human proportions, was created by which Renaissance artist/scientist?",
      options: [
        "Michelangelo",
        "Raphael",
        "Leonardo da Vinci",
        "Donatello"
      ],
      correct: 2
    },
    {
      question: "Which of the following is a seminal text in the history of anatomy?",
      options: [
        "De Humani Corporis Fabrica (Vesalius)",
        "Origin of Species",
        "Principia Mathematica",
        "The Republic"
      ],
      correct: 0
    },
    {
      question: "The 'Caduceus', often used as a symbol of medicine (though correctly the Rod of Asclepius), originates from:",
      options: [
        "Egyptian Mythology",
        "Greek Mythology",
        "Norse Mythology",
        "Roman Law"
      ],
      correct: 1
    },
    {
      question: "Who wrote 'The Canon of Medicine', a medical encyclopedia that became a standard medical text in Europe and the Islamic world?",
      options: [
        "Hippocrates",
        "Galen",
        "Avicenna (Ibn Sina)",
        "Maimonides"
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
            Module 4 of 9
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Scientific Biomedical Literature & Arts
          </h1>
          <p className="text-xl text-slate-600">
            Classic biomedical biotech literature, movements, and cultural achievements throughout history.
          </p>
        </div>

        <div className="space-y-12">
          {/* Section 1: Medical Literature */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-medical-blue" />
              Foundations of Medical Literature
            </h2>
            <Card className="p-8 bg-white border-slate-200 shadow-sm">
              <div className="prose prose-slate max-w-none">
                <p className="mb-4">
                  The history of medicine is documented in seminal texts that shifted paradigms. From the <strong>Hippocratic Corpus</strong> in ancient Greece to Avicenna's <strong>The Canon of Medicine</strong> in the Islamic Golden Age, these works laid the groundwork for modern practice.
                </p>
                <p className="mb-4">
                  In the Renaissance, Andreas Vesalius's <strong>De Humani Corporis Fabrica</strong> (On the Fabric of the Human Body) revolutionized anatomy with detailed illustrations based on human dissection, challenging centuries of dogma based on animal anatomy.
                </p>
              </div>
            </Card>
          </section>

          {/* Section 2: Arts & Anatomy */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Palette className="w-6 h-6 text-medical-blue" />
              The Intersection of Art & Anatomy
            </h2>
            <Card className="p-8 bg-white border-slate-200 shadow-sm">
              <div className="prose prose-slate max-w-none">
                <p className="mb-4">
                  Art and medicine have been inextricably linked throughout history. <strong>Leonardo da Vinci</strong> is the prime example of this convergence, producing anatomical drawings of unprecedented accuracy and beauty. His "Vitruvian Man" remains a symbol of the blend of art and science.
                </p>
                <p className="mb-4">
                  Medical illustration continues to be a vital field, translating complex biological processes into visual formats that facilitate learning and communication in healthcare and biotechnology.
                </p>
              </div>
            </Card>
          </section>

          {/* Section 3: Cultural Impact */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Library className="w-6 h-6 text-medical-blue" />
              Bioethics in Literature
            </h2>
            <Card className="p-8 bg-white border-slate-200 shadow-sm">
              <div className="prose prose-slate max-w-none">
                <p className="mb-4">
                  Literature often serves as a testing ground for the ethical implications of scientific advancement. Mary Shelley's <strong>Frankenstein</strong> is perhaps the most enduring warning about the responsibilities of a creator and the potential consequences of unchecked scientific ambition.
                </p>
                <p className="mb-4">
                  Modern "biopunk" and hard science fiction continue this tradition, exploring themes of genetic engineering, cloning, and transhumanism, asking not just what we <em>can</em> do, but what we <em>should</em> do.
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
                { title: "History of Medical Illustration", duration: "10:00" },
                { title: "Frankenstein and Bioethics", duration: "12:00" },
                { title: "The Canon of Medicine: Avicenna's Legacy", duration: "08:00" },
                { title: "Art in the Age of Anatomy", duration: "10:00" }
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

export default LiteratureAndArts;
