import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ChevronRight, 
  CheckCircle, 
  AlertCircle,
  BookOpen,
  HelpCircle,
  Menu,
  X
} from 'lucide-react';
import { medtechPrototypingCourseModules } from '../../data/medtechPrototypingCourseData';
import { auth, db } from '../../lib/firebase';
import { doc, getDoc, updateDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { toast } from 'sonner';
import confetti from 'canvas-confetti';

const MedtechPrototypingModule = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'content' | 'quiz'>('content');
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [progressUpdated, setProgressUpdated] = useState(false);

  const module = medtechPrototypingCourseModules.find(m => m.id === Number(moduleId));
  const user = auth.currentUser;

  useEffect(() => {
    if (!module) {
      navigate('/course/medtech-prototyping');
    }
  }, [module, navigate]);

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const handleQuizSubmit = async () => {
    if (!module) return;

    let correct = 0;
    module.quiz.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        correct++;
      }
    });

    setQuizScore(correct);
    setShowResults(true);

    if (correct / module.quiz.length >= 0.7) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      await updateProgress(correct);
    }
  };

  const updateProgress = async (finalScore: number) => {
    if (!user || !module || !moduleId || progressUpdated) return;

    try {
      const docRef = doc(db, 'courseProgress', user.uid);
      const docSnap = await getDoc(docRef);
      
      const percentage = Math.round((finalScore / module.quiz.length) * 100);
      const passed = percentage >= 70;

      const moduleData = {
        status: passed ? 'completed' : 'in_progress',
        quizScore: percentage,
        completedAt: passed ? serverTimestamp() : null,
        attempts: (docSnap.exists() && docSnap.data()['medtech-prototyping']?.modules?.[`module-${moduleId}`]?.attempts || 0) + 1,
      };

      if (docSnap.exists()) {
        await updateDoc(docRef, {
          [`medtech-prototyping.modules.module-${moduleId}`]: moduleData,
          'medtech-prototyping.lastUpdated': serverTimestamp()
        });
      } else {
        await setDoc(docRef, {
          'medtech-prototyping': {
            modules: { [`module-${moduleId}`]: moduleData },
            startedAt: serverTimestamp(),
            lastUpdated: serverTimestamp()
          }
        }, { merge: true });
      }
      
      setProgressUpdated(true);
      if (passed) {
        toast.success('Module completed successfully!');
      }
    } catch (error) {
      console.error("Error updating progress:", error);
      toast.error('Failed to save progress');
    }
  };

  if (!module) return null;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <button 
              onClick={() => navigate('/course/medtech-prototyping')}
              className="mr-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <h1 className="text-lg font-semibold text-gray-900 truncate max-w-[200px] sm:max-w-md">
              Module {module.id}: {module.title}
            </h1>
          </div>
          
          <button 
            className="md:hidden p-2"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      <div className="flex flex-grow max-w-7xl mx-auto w-full relative">
        {/* Sidebar Navigation */}
        <aside className={`
          fixed md:sticky top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white border-r transform transition-transform duration-200 ease-in-out z-30
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}>
          <div className="p-4 overflow-y-auto h-full">
            <h3 className="font-semibold text-gray-500 text-xs uppercase tracking-wider mb-4">
              Course Modules
            </h3>
            <div className="space-y-2">
              {medtechPrototypingCourseModules.map((m) => (
                <button
                  key={m.id}
                  onClick={() => {
                    navigate(`/course/medtech-prototyping/module/${m.id}`);
                    setIsSidebarOpen(false);
                  }}
                  className={`w-full flex items-center p-3 rounded-lg text-sm transition-colors ${
                    m.id === module.id
                      ? 'bg-indigo-50 text-indigo-700 font-medium'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 text-xs ${
                    m.id === module.id ? 'bg-indigo-200' : 'bg-gray-200'
                  }`}>
                    {m.id}
                  </div>
                  <span className="truncate text-left">{m.title}</span>
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-grow p-4 sm:p-6 lg:p-8 overflow-y-auto">
          <div className="max-w-3xl mx-auto">
            {/* Tabs */}
            <div className="flex space-x-4 mb-8 border-b">
              <button
                onClick={() => setActiveTab('content')}
                className={`pb-4 px-4 font-medium transition-colors relative ${
                  activeTab === 'content'
                    ? 'text-indigo-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <div className="flex items-center">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Study Material
                </div>
                {activeTab === 'content' && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600"
                  />
                )}
              </button>
              <button
                onClick={() => setActiveTab('quiz')}
                className={`pb-4 px-4 font-medium transition-colors relative ${
                  activeTab === 'quiz'
                    ? 'text-indigo-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <div className="flex items-center">
                  <HelpCircle className="w-4 h-4 mr-2" />
                  Quiz
                </div>
                {activeTab === 'quiz' && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600"
                  />
                )}
              </button>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'content' ? (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="prose prose-indigo max-w-none"
                >
                  <div dangerouslySetInnerHTML={{ __html: module.content }} />
                  
                  <div className="mt-8 flex justify-end">
                    <button
                      onClick={() => setActiveTab('quiz')}
                      className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      Take Quiz
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="quiz"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  {!showResults ? (
                    <div className="space-y-8">
                      {module.quiz.map((question, index) => (
                        <div key={question.id} className="bg-white p-6 rounded-xl shadow-sm border">
                          <h3 className="text-lg font-medium text-gray-900 mb-4">
                            {index + 1}. {question.question}
                          </h3>
                          <div className="space-y-3">
                            {question.options.map((option, optIndex) => (
                              <button
                                key={optIndex}
                                onClick={() => handleAnswerSelect(question.id, optIndex)}
                                className={`w-full text-left p-4 rounded-lg border transition-all ${
                                  selectedAnswers[question.id] === optIndex
                                    ? 'border-indigo-600 bg-indigo-50 text-indigo-700 ring-1 ring-indigo-600'
                                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                                }`}
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}

                      <button
                        onClick={handleQuizSubmit}
                        disabled={Object.keys(selectedAnswers).length !== module.quiz.length}
                        className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                          Object.keys(selectedAnswers).length === module.quiz.length
                            ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg hover:shadow-xl'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        Submit Answers
                      </button>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <div className={`w-24 h-24 rounded-full mx-auto flex items-center justify-center mb-6 ${
                        (quizScore / module.quiz.length) >= 0.7 
                          ? 'bg-green-100 text-green-600'
                          : 'bg-red-100 text-red-600'
                      }`}>
                        {(quizScore / module.quiz.length) >= 0.7 ? (
                          <CheckCircle className="w-12 h-12" />
                        ) : (
                          <AlertCircle className="w-12 h-12" />
                        )}
                      </div>
                      
                      <h2 className="text-2xl font-bold mb-2">
                        You scored {Math.round((quizScore / module.quiz.length) * 100)}%
                      </h2>
                      
                      <p className="text-gray-600 mb-8">
                        {(quizScore / module.quiz.length) >= 0.7 
                          ? "Great job! You've mastered this module."
                          : "Review the material and try again to unlock the next module."}
                      </p>

                      <div className="flex justify-center gap-4">
                        <button
                          onClick={() => {
                            setShowResults(false);
                            setCurrentQuizQuestion(0);
                            setSelectedAnswers({});
                            setQuizScore(0);
                            setProgressUpdated(false);
                          }}
                          className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                        >
                          Retry Quiz
                        </button>
                        {(quizScore / module.quiz.length) >= 0.7 && (
                          <button
                            onClick={() => {
                              const nextId = module.id + 1;
                              if (nextId <= medtechPrototypingCourseModules.length) {
                                navigate(`/course/medtech-prototyping/module/${nextId}`);
                                setShowResults(false);
                                setCurrentQuizQuestion(0);
                                setSelectedAnswers({});
                                setActiveTab('content');
                                setProgressUpdated(false);
                              } else {
                                navigate('/course/medtech-prototyping');
                              }
                            }}
                            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                          >
                            {module.id === medtechPrototypingCourseModules.length ? 'Finish Course' : 'Next Module'}
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MedtechPrototypingModule;
