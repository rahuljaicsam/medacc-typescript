import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  BookOpen, 
  Clock, 
  Video, 
  CheckCircle, 
  Award,
  HelpCircle,
  PlayCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/sections/Navigation';
import Footer from '@/sections/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { auth, db } from '@/lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

const GeneralKnowledgeCourse = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [completedModules, setCompletedModules] = useState<number[]>([]);
  const [modulesCompletedCount, setModulesCompletedCount] = useState(0);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchProgress(user.uid);
      }
    });
    return () => unsubscribe();
  }, []);

  const fetchProgress = async (uid: string) => {
    try {
      const docRef = doc(db, 'courseProgress', uid);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        const data = docSnap.data();
        const courseData = data['general-knowledge'];
        
        if (courseData && courseData.modules) {
          const completed: number[] = [];
          
          // Check each module status
          Object.entries(courseData.modules).forEach(([key, value]: [string, any]) => {
            // Handle both 'module-1' and '1' formats
            const moduleId = parseInt(key.replace('module-', ''));
            
            if (!isNaN(moduleId) && (value.status === 'completed' || value.completed === true)) {
              if (!completed.includes(moduleId)) {
                completed.push(moduleId);
              }
            }
          });

          setCompletedModules(completed);
          setModulesCompletedCount(completed.length);
          // Calculate overall progress (9 modules total)
          setProgress(Math.round((completed.length / 9) * 100));
        }
      }
    } catch (error) {
      console.error("Error fetching progress:", error);
    }
  };

  const modules = [
    {
      id: 1,
      title: "Science & Nature",
      duration: "45 minutes",
      contentCount: "3 videos",
      description: "Fundamental concepts in physics, chemistry, biology, and environmental science.",
      icon: <Video className="w-5 h-5" />,
      type: "video"
    },
    {
      id: 2,
      title: "History & Geography",
      duration: "50 minutes",
      contentCount: "4 videos",
      description: "World history, geography, cultures, and major historical events and figures.",
      icon: <Video className="w-5 h-5" />,
      type: "video"
    },
    {
      id: 3,
      title: "Mathematics & Logic",
      duration: "40 minutes",
      contentCount: "3 videos",
      description: "Essential healthcare and biotech business mathematical concepts, statistics, and logical reasoning principles.",
      icon: <Video className="w-5 h-5" />,
      type: "video"
    },
    {
      id: 4,
      title: "Literature & Arts",
      duration: "40 minutes",
      contentCount: "4 videos",
      description: "Classic literature, art movements, music, and cultural achievements throughout history.",
      icon: <Video className="w-5 h-5" />,
      type: "video"
    },
    {
      id: 5,
      title: "healthcare Politics & healthcare Economics",
      duration: "55 minutes",
      contentCount: "4 videos",
      description: "Political systems, economic principles, international relations, and current affairs.",
      icon: <Video className="w-5 h-5" />,
      type: "video"
    },
    {
      id: 6,
      title: "Technology & Innovation",
      duration: "45 minutes",
      contentCount: "4 videos",
      description: "Digital revolution, emerging technologies, computing concepts, and future innovations.",
      icon: <Video className="w-5 h-5" />,
      type: "video"
    },
    {
      id: 7,
      title: "healthcare in Sports & healthcare in Entertainment",
      duration: "35 minutes",
      contentCount: "4 videos",
      description: "Global sports, entertainment industry, cultural phenomena, and recreational activities.",
      icon: <Video className="w-5 h-5" />,
      type: "video"
    },
    {
      id: 8,
      title: "Philosophy of medicine & healthcare in Religion",
      duration: "45 minutes",
      contentCount: "4 videos",
      description: "Philosophical traditions, world religions, ethical systems, and spiritual beliefs.",
      icon: <Video className="w-5 h-5" />,
      type: "video"
    },
    {
      id: 9,
      title: "Final Knowledge Assessment",
      duration: "30 minutes",
      contentCount: "20 Questions",
      description: "Comprehensive quiz covering all topics from the General Knowledge course.",
      icon: <HelpCircle className="w-5 h-5" />,
      type: "quiz"
    }
  ];

  const handleModuleClick = (moduleId: number) => {
    if (moduleId === 1) {
      navigate('/course/general-knowledge-foundations/module-1');
    } else if (moduleId === 2) {
      navigate('/course/general-knowledge-foundations/module-2');
    } else if (moduleId === 3) {
      navigate('/course/general-knowledge-foundations/module-3');
    } else if (moduleId === 4) {
      navigate('/course/general-knowledge-foundations/module-4');
    } else if (moduleId === 5) {
      navigate('/course/general-knowledge-foundations/module-5');
    } else if (moduleId === 6) {
      navigate('/course/general-knowledge-foundations/module-6');
    } else if (moduleId === 7) {
      navigate('/course/general-knowledge-foundations/module-7');
    } else if (moduleId === 8) {
      navigate('/course/general-knowledge-foundations/module-8');
    } else if (moduleId === 9) {
      navigate('/course/general-knowledge-foundations/module-9');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navigation />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-medical-blue to-medical-blue-dark pt-32 pb-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button 
            variant="ghost" 
            className="text-white hover:text-blue-100 hover:bg-white/10 mb-6 pl-0"
            onClick={() => navigate('/profile')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Profile
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <Badge className="bg-blue-500/20 text-blue-100 hover:bg-blue-500/30 border-0 mb-4">
                Foundation Module
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                General Knowledge Foundations
              </h1>
              <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                Build comprehensive general knowledge across science, business, and current affairs.
                Master the essentials to navigate complex discussions and broaden your intellectual horizon.
              </p>
              
              <div className="flex flex-wrap gap-4 text-sm text-blue-200">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Duration: 6 weeks</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Level: Beginner</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>Modules: 9 (8 + Final Assessment)</span>
                </div>
              </div>
            </div>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-white">
              <h3 className="font-semibold mb-2">Course Progress</h3>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-blue-200">{progress}% Complete</span>
                <span>{modulesCompletedCount}/9 Modules</span>
              </div>
              <Progress value={progress} className="h-2 bg-white/20" indicatorClassName="bg-green-400" />
              <Button className="w-full mt-6 bg-white text-medical-blue hover:bg-blue-50 font-semibold">
                Continue Learning
              </Button>
            </Card>
          </div>
        </div>
      </div>

      {/* Modules List */}
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="space-y-6">
          {modules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`p-6 hover:shadow-md transition-all border-slate-200 group ${completedModules.includes(module.id) ? 'border-green-200 bg-green-50/30' : ''}`}>
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    completedModules.includes(module.id) 
                      ? 'bg-green-100 text-green-600' 
                      : 'bg-blue-50 text-medical-blue group-hover:bg-medical-blue group-hover:text-white'
                  }`}>
                    {completedModules.includes(module.id) ? <CheckCircle className="w-6 h-6" /> : module.icon}
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                        Module {module.id}: {module.title}
                        {completedModules.includes(module.id) && (
                          <Badge className="bg-green-100 text-green-700 hover:bg-green-200 border-0">
                            Completed
                          </Badge>
                        )}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-slate-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {module.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          {module.type === 'quiz' ? (
                            <HelpCircle className="w-3.5 h-3.5" />
                          ) : (
                            <PlayCircle className="w-3.5 h-3.5" />
                          )}
                          {module.contentCount}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 mb-4">
                      {module.description}
                    </p>
                    
                    <Button 
                      variant={module.type === 'quiz' ? "default" : "outline"}
                      className={
                        completedModules.includes(module.id)
                          ? "border-green-500 text-green-600 hover:bg-green-50"
                          : module.type === 'quiz' 
                            ? "bg-medical-blue hover:bg-medical-blue-dark" 
                            : "border-medical-blue text-medical-blue hover:bg-blue-50"
                      }
                      onClick={() => handleModuleClick(module.id)}
                    >
                      {completedModules.includes(module.id) 
                        ? "Review Module" 
                        : module.type === 'quiz' ? "Start Assessment" : "Start Module"
                      }
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GeneralKnowledgeCourse;
