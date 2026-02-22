import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  BookOpen, 
  CheckCircle,
  HelpCircle,
  ArrowRight,
  RotateCcw,
  Award
} from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import Navigation from '@/sections/Navigation';
import Footer from '@/sections/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { auth, db } from '@/lib/firebase';
import { doc, getDoc, setDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { toast } from 'sonner';
import { bioethicsCourseModules } from '@/data/bioethicsCourseData';

const BioethicsModule = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [user, setUser] = useState<any>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [activeTab, setActiveTab] = useState<'content' | 'quiz'>('content');

  const module = bioethicsCourseModules.find(m => m.id === Number(moduleId));

  const checkProgress = async (uid: string) => {
    if (!moduleId) return;
    try {
      const docRef = doc(db, 'courseProgress', uid);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        const data = docSnap.data();
        const moduleStatus = data['bioethics-society']?.modules?.[`module-${moduleId}`]?.status;
        if (moduleStatus === 'completed') {
          setIsCompleted(true);
        }
      }
    } catch (error) {
      console.error("Error checking progress:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        checkProgress(user.uid);
      }
    });
    return () => unsubscribe();
  }, [moduleId]);

  const handleAnswerOptionClick = (index: number) => {
    if (selectedOption !== null) return; // Prevent changing answer
    
    setSelectedOption(index);
    if (!module) return;

    const correct = index === module.quiz[currentQuestion].correctAnswer;
    setIsCorrect(correct);

    if (correct) {
      setScore(score + 1);
      toast.success("Correct!", { duration: 1500 });
    } else {
      toast.error("Incorrect", { duration: 1500 });
    }

    // Auto advance after delay
    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < module.quiz.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedOption(null);
        setIsCorrect(null);
      } else {
        setShowScore(true);
        // Calculate final score including the last question
        const finalScore = correct ? score + 1 : score;
        updateProgress(finalScore);
      }
    }, 1500);
  };

  const updateProgress = async (finalScore: number) => {
    if (!user || !module || !moduleId) return;

    try {
      const docRef = doc(db, 'courseProgress', user.uid);
      const docSnap = await getDoc(docRef);
      const percentage = Math.round((finalScore / module.quiz.length) * 100);
      
      // Determine if passed (70% threshold)
      const passed = percentage >= 70;
      
      const moduleData = {
        status: passed ? 'completed' : 'in_progress',
        quizScore: percentage,
        completedAt: passed ? serverTimestamp() : null,
        attempts: (docSnap.exists() && docSnap.data()['bioethics-society']?.modules?.[`module-${moduleId}`]?.attempts || 0) + 1,
      };

      if (docSnap.exists()) {
        await updateDoc(docRef, {
          [`bioethics-society.modules.module-${moduleId}`]: moduleData,
          'bioethics-society.lastUpdated': serverTimestamp()
        });
      } else {
        await setDoc(docRef, {
          'bioethics-society': {
            modules: {
              [`module-${moduleId}`]: moduleData
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
        toast.warning(`You scored ${percentage}%. You need 70% to pass. Try again!`);
      }

    } catch (error) {
      console.error("Error updating progress:", error);
      toast.error("Failed to save progress");
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
    setSelectedOption(null);
    setIsCorrect(null);
  };

  if (!module) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Module not found</h2>
          <Button onClick={() => navigate('/course/bioethics')}>Back to Course</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <Button 
              variant="ghost" 
              className="mb-4 pl-0 hover:bg-transparent hover:text-blue-600"
              onClick={() => navigate('/course/bioethics')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Course
            </Button>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <Badge className="mb-2 bg-blue-100 text-blue-700 hover:bg-blue-100 border-none">
                  Module {module.id}
                </Badge>
                <h1 className="text-3xl font-bold text-gray-900">
                  {module.title}
                </h1>
              </div>
              
              {isCompleted && (
                <div className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full border border-green-100">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Completed</span>
                </div>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Sidebar / Navigation */}
            <div className="md:col-span-1 space-y-6">
              <Card className="p-4 border-gray-100">
                <div className="space-y-1">
                  <Button 
                    variant={activeTab === 'content' ? 'secondary' : 'ghost'} 
                    className="w-full justify-start"
                    onClick={() => setActiveTab('content')}
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Study Material
                  </Button>
                  <Button 
                    variant={activeTab === 'quiz' ? 'secondary' : 'ghost'} 
                    className="w-full justify-start"
                    onClick={() => setActiveTab('quiz')}
                  >
                    <HelpCircle className="w-4 h-4 mr-2" />
                    Quiz
                  </Button>
                </div>
              </Card>

              <Card className="p-6 bg-blue-50 border-blue-100">
                <h3 className="font-semibold text-blue-900 mb-2">Learning Objectives</h3>
                <p className="text-sm text-blue-700">
                  {module.description}
                </p>
              </Card>
            </div>

            {/* Main Content Area */}
            <div className="md:col-span-2">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 'content' ? (
                  <Card className="p-8 border-gray-100 prose prose-blue max-w-none">
                     <div dangerouslySetInnerHTML={{ __html: module.content }} />
                     
                     <div className="mt-8 pt-8 border-t border-gray-100 flex justify-end">
                       <Button onClick={() => setActiveTab('quiz')}>
                         Take Quiz <ArrowRight className="w-4 h-4 ml-2" />
                       </Button>
                     </div>
                  </Card>
                ) : (
                  <Card className="p-8 border-gray-100">
                    {!showScore ? (
                      <div>
                        <div className="flex justify-between items-center mb-6">
                          <h3 className="text-xl font-bold">Question {currentQuestion + 1}/{module.quiz.length}</h3>
                          <span className="text-sm text-gray-500">
                            Score: {score}
                          </span>
                        </div>
                        
                        <div className="mb-8">
                          <h4 className="text-lg font-medium text-gray-900 mb-6">
                            {module.quiz[currentQuestion].question}
                          </h4>
                          
                          <div className="space-y-3">
                            {module.quiz[currentQuestion].options.map((option, index) => (
                              <button
                                key={index}
                                onClick={() => handleAnswerOptionClick(index)}
                                disabled={selectedOption !== null}
                                className={`w-full p-4 text-left rounded-xl border transition-all duration-200 ${
                                  selectedOption === index
                                    ? isCorrect
                                      ? 'bg-green-50 border-green-200 text-green-800'
                                      : 'bg-red-50 border-red-200 text-red-800'
                                    : 'bg-white border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <span>{option}</span>
                                  {selectedOption === index && (
                                    isCorrect ? <CheckCircle className="w-5 h-5 text-green-600" /> : <div className="w-5 h-5 text-red-600">✕</div>
                                  )}
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                        
                        <Progress value={((currentQuestion) / module.quiz.length) * 100} className="h-1" />
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                          <Award className="w-10 h-10 text-blue-600" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Quiz Completed!</h3>
                        <p className="text-gray-600 mb-6">
                          You scored {Math.round((score / module.quiz.length) * 100)}%
                        </p>
                        <div className="flex justify-center gap-4">
                          <Button variant="outline" onClick={resetQuiz}>
                            <RotateCcw className="w-4 h-4 mr-2" />
                            Retry
                          </Button>
                          <Button onClick={() => navigate('/course/bioethics')}>
                            Back to Course
                          </Button>
                        </div>
                      </div>
                    )}
                  </Card>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BioethicsModule;
