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
import { healthEconomicsCourseModules } from '../../data/healthEconomicsCourseData';
import { auth, db } from '../../lib/firebase';
import { doc, getDoc, updateDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { toast } from 'sonner';
import confetti from 'canvas-confetti';

const HealthEconomicsModule = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'content' | 'quiz'>('content');
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: number}>({});
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [progressUpdated, setProgressUpdated] = useState(false);

  const module = healthEconomicsCourseModules.find(m => m.id === Number(moduleId));
  const user = auth.currentUser;

  useEffect(() => {
    if (!module) {
      navigate('/course/health-economics');
    }
  }, [module, navigate]);

  const handleQuizSubmit = (questionId: number, answerIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));

    // Auto-advance after short delay
    if (currentQuizQuestion < (module?.quiz.length || 0) - 1) {
      setTimeout(() => {
        setCurrentQuizQuestion(prev => prev + 1);
      }, 500);
    }
  };

  const calculateScore = () => {
    if (!module) return;
    let correct = 0;
    module.quiz.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswer) correct++;
    });
    const score = correct;
    setQuizScore(score);
    setShowResults(true);
    updateProgress(score);
    
    if (score / module.quiz.length >= 0.7) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
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
        attempts: (docSnap.exists() && docSnap.data()['health-economics']?.modules?.[`module-${moduleId}`]?.attempts || 0) + 1,
      };

      if (docSnap.exists()) {
        await updateDoc(docRef, {
          [`health-economics.modules.module-${moduleId}`]: moduleData,
          'health-economics.lastUpdated': serverTimestamp()
        });
      } else {
        await setDoc(docRef, {
          'health-economics': {
            modules: { [`module-${moduleId}`]: moduleData },
            startedAt: serverTimestamp(),
            lastUpdated: serverTimestamp()
          }
        }, { merge: true });
      }
      setProgressUpdated(true);
      
      if (passed) {
        toast.success("Module completed successfully!");
      } else {
        toast("Keep trying! 70% needed to pass.", { icon: '🎯' });
      }
    } catch (error) {
      console.error("Error updating progress:", error);
      toast.error("Failed to save progress");
    }
  };

  if (!module) return null;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b h-16 fixed w-full top-0 z-30 flex items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/course/health-economics')}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center">
              <module.icon className="w-5 h-5" />
            </div>
            <h1 className="font-bold text-gray-900 hidden sm:block">{module.title}</h1>
          </div>
        </div>
        
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
        >
          {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      <div className="flex pt-16 h-screen">
        {/* Sidebar Navigation */}
        <aside className={`
          fixed lg:static inset-y-0 left-0 z-20 w-64 bg-white border-r transform transition-transform duration-200 ease-in-out pt-16 lg:pt-0
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <div className="p-4">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Course Modules
            </h3>
            <div className="space-y-1">
              {healthEconomicsCourseModules.map((m) => (
                <button
                  key={m.id}
                  onClick={() => {
                    navigate(`/course/health-economics/module/${m.id}`);
                    setSidebarOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-3 transition-colors ${
                    m.id === module.id 
                      ? 'bg-emerald-50 text-emerald-700' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs border ${
                    m.id === module.id 
                      ? 'border-emerald-200 bg-emerald-100' 
                      : 'border-gray-200 bg-gray-50'
                  }`}>
                    {m.id}
                  </span>
                  <span className="truncate">{m.title}</span>
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8">
          <div className="max-w-4xl mx-auto">
            {/* Tabs */}
            <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl mb-8 w-fit">
              <button
                onClick={() => setActiveTab('content')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === 'content' 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Study Material
                </div>
              </button>
              <button
                onClick={() => setActiveTab('quiz')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === 'quiz' 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-4 h-4" />
                  Quiz
                </div>
              </button>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'content' ? (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-white rounded-2xl p-8 shadow-sm border prose prose-emerald max-w-none"
                  dangerouslySetInnerHTML={{ __html: module.content }}
                />
              ) : (
                <motion.div
                  key="quiz"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white rounded-2xl p-8 shadow-sm border"
                >
                  {!showResults ? (
                    <div>
                      <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-bold">Module Quiz</h2>
                        <span className="text-sm text-gray-500">
                          Question {currentQuizQuestion + 1} of {module.quiz.length}
                        </span>
                      </div>

                      <div className="mb-8">
                        <div className="w-full bg-gray-100 rounded-full h-2 mb-6">
                          <div 
                            className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${((currentQuizQuestion + 1) / module.quiz.length) * 100}%` }}
                          />
                        </div>
                        <h3 className="text-xl font-medium text-gray-900 mb-6">
                          {module.quiz[currentQuizQuestion].question}
                        </h3>
                        <div className="space-y-3">
                          {module.quiz[currentQuizQuestion].options.map((option, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleQuizSubmit(module.quiz[currentQuizQuestion].id, idx)}
                              className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                                selectedAnswers[module.quiz[currentQuizQuestion].id] === idx
                                  ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                                  : 'border-gray-200 hover:border-emerald-200 hover:bg-gray-50'
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-between">
                        <button
                          onClick={() => setCurrentQuizQuestion(prev => Math.max(0, prev - 1))}
                          disabled={currentQuizQuestion === 0}
                          className="px-4 py-2 text-gray-600 disabled:opacity-50"
                        >
                          Previous
                        </button>
                        {currentQuizQuestion === module.quiz.length - 1 ? (
                          <button
                            onClick={calculateScore}
                            className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
                          >
                            Submit Quiz
                          </button>
                        ) : (
                          <button
                            onClick={() => setCurrentQuizQuestion(prev => prev + 1)}
                            className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 flex items-center"
                          >
                            Next <ChevronRight className="w-4 h-4 ml-1" />
                          </button>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${
                        (quizScore / module.quiz.length) >= 0.7 
                          ? 'bg-emerald-100 text-emerald-600' 
                          : 'bg-red-100 text-red-600'
                      }`}>
                        {(quizScore / module.quiz.length) >= 0.7 
                          ? <CheckCircle className="w-10 h-10" />
                          : <AlertCircle className="w-10 h-10" />
                        }
                      </div>
                      
                      <h2 className="text-3xl font-bold mb-2">
                        {(quizScore / module.quiz.length) >= 0.7 ? 'Module Passed!' : 'Try Again'}
                      </h2>
                      <p className="text-gray-600 mb-8">
                        You scored {Math.round((quizScore / module.quiz.length) * 100)}% 
                        ({quizScore}/{module.quiz.length} correct)
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
                              if (nextId <= healthEconomicsCourseModules.length) {
                                navigate(`/course/health-economics/module/${nextId}`);
                                setShowResults(false);
                                setCurrentQuizQuestion(0);
                                setSelectedAnswers({});
                                setActiveTab('content');
                                setProgressUpdated(false);
                              } else {
                                navigate('/course/health-economics');
                              }
                            }}
                            className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
                          >
                            {module.id === healthEconomicsCourseModules.length ? 'Finish Course' : 'Next Module'}
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

export default HealthEconomicsModule;
