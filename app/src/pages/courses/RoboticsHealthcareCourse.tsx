import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  PlayCircle, 
  CheckCircle, 
  Lock, 
  Award,
  Bot,
  Clock,
  BookOpen
} from 'lucide-react';
import { roboticsHealthcareCourseModules } from '../../data/roboticsHealthcareCourseData';
import { auth, db } from '../../lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

const RoboticsHealthcareCourse = () => {
  const navigate = useNavigate();
  const [userProgress, setUserProgress] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProgress = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          const docRef = doc(db, 'courseProgress', user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists() && docSnap.data()['robotics-healthcare']) {
            setUserProgress(docSnap.data()['robotics-healthcare'].modules || {});
          }
        } catch (error) {
          console.error("Error fetching progress:", error);
        }
      }
      setLoading(false);
    };

    fetchProgress();
  }, []);

  const getModuleStatus = (moduleId: number) => {
    const moduleKey = `module-${moduleId}`;
    return userProgress[moduleKey]?.status || 'locked';
  };

  const completedModules = Object.values(userProgress).filter(
    (m: any) => m.status === 'completed'
  ).length;

  const progressPercentage = Math.round((completedModules / roboticsHealthcareCourseModules.length) * 100);

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Header */}
      <div className="bg-orange-900 text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => navigate('/profile')}
            className="flex items-center text-orange-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Dashboard
          </button>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="flex items-center space-x-2 text-orange-300 mb-2">
                <Bot className="w-5 h-5" />
                <span className="font-medium">Specialized Course</span>
              </div>
              <h1 className="text-4xl font-bold mb-4">Robotics in Healthcare</h1>
              <p className="text-xl text-orange-100 max-w-2xl">
                Explore the world of medical robotics, from surgical systems and exoskeletons to humanoids and nanobots.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 min-w-[300px]">
              <div className="flex justify-between items-center mb-2">
                <span className="text-orange-100">Course Progress</span>
                <span className="font-bold text-white">{progressPercentage}%</span>
              </div>
              <div className="w-full bg-orange-900/50 rounded-full h-2 mb-4">
                <div 
                  className="bg-orange-400 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <div className="flex justify-between text-sm text-orange-200">
                <span>{completedModules}/{roboticsHealthcareCourseModules.length} Modules</span>
                {progressPercentage === 100 && (
                  <span className="flex items-center text-orange-400 font-bold">
                    <Award className="w-4 h-4 mr-1" />
                    Certified
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modules List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid gap-6">
          {roboticsHealthcareCourseModules.map((module, index) => {
            const status = getModuleStatus(module.id);
            const isLocked = index > 0 && getModuleStatus(roboticsHealthcareCourseModules[index - 1].id) !== 'completed';
            
            return (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-xl shadow-sm border overflow-hidden transition-all ${
                  isLocked ? 'opacity-75' : 'hover:shadow-md'
                }`}
              >
                <div className="p-6 flex flex-col md:flex-row md:items-center gap-6">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${
                    status === 'completed' ? 'bg-orange-100 text-orange-600' :
                    isLocked ? 'bg-gray-100 text-gray-400' :
                    'bg-orange-600 text-white'
                  }`}>
                    <module.icon className="w-8 h-8" />
                  </div>

                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">
                        Module {module.id}: {module.title}
                      </h3>
                      {status === 'completed' && (
                        <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full flex items-center">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Completed
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-4 md:mb-0">
                      {module.description}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 min-w-[200px]">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {module.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <BookOpen className="w-4 h-4 mr-1" />
                      {module.quiz.length} Questions
                    </div>
                    
                    <button
                      onClick={() => !isLocked && navigate(`/course/robotics-healthcare/module/${module.id}`)}
                      disabled={isLocked}
                      className={`px-6 py-2 rounded-lg font-medium flex items-center transition-colors ${
                        isLocked 
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : status === 'completed'
                            ? 'bg-orange-50 text-orange-700 hover:bg-orange-100 border border-orange-200'
                            : 'bg-orange-600 text-white hover:bg-orange-700 shadow-sm'
                      }`}
                    >
                      {isLocked ? (
                        <>
                          <Lock className="w-4 h-4 mr-2" />
                          Locked
                        </>
                      ) : status === 'completed' ? (
                        <>
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Review
                        </>
                      ) : (
                        <>
                          <PlayCircle className="w-4 h-4 mr-2" />
                          Start
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RoboticsHealthcareCourse;
