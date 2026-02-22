import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  CheckCircle, 
  Award,
  HelpCircle,
  PlayCircle,
  Lock
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
import { clinicalTrialCourseModules } from '@/data/clinicalTrialCourseData';

const ClinicalTrialCourse = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [completedModules, setCompletedModules] = useState<number[]>([]);
  const [modulesCompletedCount, setModulesCompletedCount] = useState(0);

  const fetchProgress = async (uid: string) => {
    try {
      const docRef = doc(db, 'courseProgress', uid);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        const data = docSnap.data();
        const courseData = data['clinical-trial-design'];
        
        if (courseData && courseData.modules) {
          const completed: number[] = [];
          
          // Check each module status
          Object.entries(courseData.modules).forEach(([key, value]: [string, any]) => {
            const moduleId = parseInt(key.replace('module-', ''));
            
            if (!isNaN(moduleId) && (value.status === 'completed' || value.completed === true)) {
              if (!completed.includes(moduleId)) {
                completed.push(moduleId);
              }
            }
          });

          setCompletedModules(completed);
          setModulesCompletedCount(completed.length);
          // Calculate overall progress
          setProgress(Math.round((completed.length / clinicalTrialCourseModules.length) * 100));
        }
      }
    } catch (error) {
      console.error("Error fetching progress:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchProgress(user.uid);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <Button 
              variant="ghost" 
              className="mb-4 pl-0 hover:bg-transparent hover:text-blue-600"
              onClick={() => navigate('/profile')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Profile
            </Button>
            
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div>
                <Badge className="mb-2 bg-blue-100 text-blue-700 hover:bg-blue-100 border-none">
                  Clinical Trial Design
                </Badge>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Master Clinical Research
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl">
                  Learn to design, process, and execute successful clinical trials and preclinical bench studies for biotech products.
                </p>
              </div>

              <Card className="p-6 bg-white shadow-sm border-gray-100 min-w-[300px]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-500">Course Progress</span>
                  <span className="text-lg font-bold text-blue-600">{progress}%</span>
                </div>
                <Progress value={progress} className="h-2 mb-4" />
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>{modulesCompletedCount} of {clinicalTrialCourseModules.length} modules completed</span>
                </div>
              </Card>
            </div>
          </div>

          {/* Modules Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinicalTrialCourseModules.map((module, index) => {
              const isCompleted = completedModules.includes(module.id);
              const isLocked = index > 0 && !completedModules.includes(clinicalTrialCourseModules[index - 1].id) && !isCompleted;
              
              const Icon = module.icon;

              return (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card 
                    className={`h-full p-6 flex flex-col transition-all duration-300 ${
                      isLocked 
                        ? 'bg-gray-50 border-gray-100 opacity-75' 
                        : 'bg-white hover:shadow-md border-gray-200 cursor-pointer group'
                    }`}
                    onClick={() => !isLocked && navigate(`/course/clinical-trial/module/${module.id}`)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl ${
                        isCompleted ? 'bg-green-100 text-green-600' : 
                        isLocked ? 'bg-gray-100 text-gray-400' : 'bg-blue-50 text-blue-600'
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      {isCompleted ? (
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none">
                          Completed
                        </Badge>
                      ) : isLocked ? (
                        <Lock className="w-5 h-5 text-gray-300" />
                      ) : (
                        <Badge variant="outline" className="text-blue-600 border-blue-200">
                          Start
                        </Badge>
                      )}
                    </div>

                    <h3 className={`text-xl font-bold mb-2 ${isLocked ? 'text-gray-500' : 'text-gray-900 group-hover:text-blue-600 transition-colors'}`}>
                      {module.id}. {module.title}
                    </h3>
                    
                    <p className="text-gray-500 text-sm mb-6 flex-grow">
                      {module.description}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-400 pt-4 border-t border-gray-100 mt-auto">
                      <div className="flex items-center gap-2">
                        <PlayCircle className="w-4 h-4" />
                        <span>{module.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <HelpCircle className="w-4 h-4" />
                        <span>Quiz</span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Certificate Section */}
          {progress === 100 && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-12"
            >
              <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 md:p-12 text-center rounded-3xl overflow-hidden relative">
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Congratulations!</h2>
                  <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
                    You've completed the Clinical Trial Design course. You have demonstrated a comprehensive understanding of designing and executing clinical trials.
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-white text-blue-600 hover:bg-blue-50 border-none font-semibold"
                  >
                    Download Certificate
                  </Button>
                </div>
                
                {/* Decorative background */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                  <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                </div>
              </Card>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ClinicalTrialCourse;
