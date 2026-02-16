import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  BookOpen, 
  Award, 
  CheckCircle,
  PlayCircle,
  BarChart2,
  ChevronRight,
  Search,
  ArrowLeft
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/sections/Navigation';
import Footer from '@/sections/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { auth, db } from '@/lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { type CourseModule, INITIAL_COURSE_DATA } from '@/data/courseData';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [courseData, setCourseData] = useState<CourseModule[]>(INITIAL_COURSE_DATA);
  const [statsData, setStatsData] = useState({
    started: 0,
    completed: 0,
    modulesCompleted: 0,
    overallProgress: 0
  });
  const [activeTab, setActiveTab] = useState<'all' | 'not-started' | 'in-progress' | 'completed'>('all');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // Default user data from Auth
        let userData: any = {
          uid: firebaseUser.uid,
          displayName: firebaseUser.displayName || 'Member',
          email: firebaseUser.email,
          photoURL: firebaseUser.photoURL,
        };

        try {
          // Fetch user profile
          const userDocRef = doc(db, 'users', firebaseUser.uid);
          const userDoc = await getDoc(userDocRef);
          
          if (userDoc.exists()) {
            const firestoreData = userDoc.data();
            userData = {
              ...userData,
              ...firestoreData,
              displayName: firestoreData.displayName || firestoreData.name || userData.displayName,
              photoURL: firestoreData.profilePicUrl || userData.photoURL,
            };
          }
        } catch (err) {
          console.error("Error fetching user profile:", err);
        }

        setUser(userData);

        try {
          // Fetch user progress
          const progressDocRef = doc(db, 'courseProgress', firebaseUser.uid);
          const progressDoc = await getDoc(progressDocRef);

          if (progressDoc.exists()) {
            const progressData = progressDoc.data();
            // progressData structure: { [courseSlug]: { status: '...', modules: { ... }, ... } }

            let totalStarted = 0;
            let totalCompleted = 0;
            let totalModulesCompleted = 0;
            let totalProgressSum = 0;
            let coursesWithProgress = 0;

            const updatedCourses = INITIAL_COURSE_DATA.map(course => {
              const slug = course.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
              
              // Try to find matching course data
              let firestoreCourse = progressData[slug];
              
              // Handle known variations/mappings
              if (!firestoreCourse) {
                   if (slug === 'general-knowledge-foundations' && progressData['general-knowledge']) {
                       firestoreCourse = progressData['general-knowledge'];
                   }
                   else if (slug === 'biotech-general-knowledge-mastery' && progressData['biotech-general-knowledge']) {
                        firestoreCourse = progressData['biotech-general-knowledge'];
                   }
                   else if (slug === 'ip-patent-strategy' && progressData['ip-patent-strategy']) {
                        firestoreCourse = progressData['ip-patent-strategy'];
                   }
              }

              if (firestoreCourse) {
                let status: CourseModule['status'] = 'Not Started';
                let isStarted = false;
                let isCompleted = false;
                
                // Check modules
                let moduleKeys: string[] = [];
                if (firestoreCourse.modules) {
                  moduleKeys = Object.keys(firestoreCourse.modules).filter(k => k.startsWith('module-'));
                }
                
                let completedModulesCount = 0;
                
                if (firestoreCourse.modules) {
                  moduleKeys.forEach(modKey => {
                    const mod = firestoreCourse.modules[modKey];
                    if (mod.status === 'completed' || mod.completed === true) {
                        completedModulesCount++;
                    }
                    if (mod.status === 'in_progress' || mod.startedAt) {
                        isStarted = true;
                    }
                  });
                }
                
                totalModulesCompleted += completedModulesCount;

                // Determine course status
                if (firestoreCourse.status === 'completed') {
                  isCompleted = true;
                } else if (course.totalModules && completedModulesCount >= course.totalModules) {
                  isCompleted = true;
                } else if (moduleKeys.length > 0 && completedModulesCount === moduleKeys.length && !course.totalModules) {
                  // Only auto-complete if we don't know total modules
                  isCompleted = true;
                } else if (moduleKeys.length > 0) {
                  isStarted = true;
                } else if (firestoreCourse.status === 'in_progress' || firestoreCourse.startedAt) {
                  isStarted = true;
                }

                if (isCompleted) {
                  status = 'Completed';
                  totalCompleted++;
                  totalProgressSum += 100;
                  coursesWithProgress++;
                } else if (isStarted) {
                  status = 'In Progress';
                  totalStarted++;
                  // Calculate progress percentage
                  const total = course.totalModules || Math.max(moduleKeys.length, 1);
                  const progress = (completedModulesCount / total) * 100;
                  totalProgressSum += progress;
                  coursesWithProgress++;
                }

                return { ...course, status };
              }
              return course;
            });

            setCourseData(updatedCourses);
            setStatsData({
              started: totalStarted,
              completed: totalCompleted,
              modulesCompleted: totalModulesCompleted,
              overallProgress: coursesWithProgress > 0 ? Math.round(totalProgressSum / coursesWithProgress) : 0
            });
          }
        } catch (error) {
          console.error("Error fetching progress:", error);
        }
      } else {
        // Demo fallback
        setUser({
          displayName: 'Rahul J S',
          email: 'rahuljaicsam@gmail.com',
          photoURL: null
        });
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleCourseClick = (title: string) => {
    if (title === 'General Knowledge Foundations') {
      navigate('/course/general-knowledge-foundations');
    }
  };

  const filteredCourses = courseData.filter(course => {
    if (activeTab === 'all') return true;
    if (activeTab === 'not-started') return course.status === 'Not Started';
    if (activeTab === 'in-progress') return course.status === 'In Progress';
    if (activeTab === 'completed') return course.status === 'Completed';
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navigation />
      
      {/* Header Section */}
      <div className="bg-gradient-to-r from-medical-blue to-medical-blue-dark pt-32 pb-24 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button 
            variant="ghost" 
            className="text-white hover:bg-white/10 mb-8 -ml-4"
            onClick={() => navigate('/profile')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Profile
          </Button>

          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
                Welcome back, {user?.displayName?.split(' ')[0]}!
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Continue your learning journey and master the medical-technical landscape.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 pb-20 w-full relative z-10">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {/* Courses Started */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-xl p-6 text-white shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 bg-white/20 p-1.5 rounded-full">
              <PlayCircle className="w-5 h-5 text-white" />
            </div>
            <div className="text-4xl font-bold mb-1">{statsData.started}</div>
            <div className="text-indigo-100 text-sm font-medium">Courses Started</div>
          </motion.div>

          {/* Courses Completed */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl p-6 text-white shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 bg-white/20 p-1.5 rounded-full">
              <Award className="w-5 h-5 text-white" />
            </div>
            <div className="text-4xl font-bold mb-1">{statsData.completed}</div>
            <div className="text-pink-100 text-sm font-medium">Courses Completed</div>
          </motion.div>

          {/* Modules Completed */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl p-6 text-white shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 bg-white/20 p-1.5 rounded-full">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <div className="text-4xl font-bold mb-1">{statsData.modulesCompleted}</div>
            <div className="text-cyan-50 text-sm font-medium">Modules Completed</div>
          </motion.div>

          {/* Overall Progress */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl p-6 text-white shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 bg-white/20 p-1.5 rounded-full">
              <BarChart2 className="w-5 h-5 text-white" />
            </div>
            <div className="text-4xl font-bold mb-1">{statsData.overallProgress}%</div>
            <div className="text-emerald-50 text-sm font-medium">Overall Progress</div>
          </motion.div>
        </div>

        {/* Course Progress Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-medical-blue rounded-full"></div>
            <h2 className="text-2xl font-bold text-slate-800">Course Progress</h2>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button 
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'all' 
                  ? 'bg-medical-blue text-white shadow-md' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              All Courses
            </button>
            <button 
              onClick={() => setActiveTab('not-started')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'not-started' 
                  ? 'bg-medical-blue text-white shadow-md' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Not Started
            </button>
            <button 
              onClick={() => setActiveTab('in-progress')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'in-progress' 
                  ? 'bg-medical-blue text-white shadow-md' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              In Progress
            </button>
            <button 
              onClick={() => setActiveTab('completed')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'completed' 
                  ? 'bg-medical-blue text-white shadow-md' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Completed
            </button>
          </div>

          {/* Course List */}
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {filteredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card 
                    className="p-4 hover:shadow-md transition-shadow border-slate-200 flex items-center gap-4 cursor-pointer"
                    onClick={() => handleCourseClick(course.title)}
                  >
                    <div className="w-12 h-12 rounded-lg bg-blue-50 text-medical-blue flex items-center justify-center shrink-0">
                      {course.icon}
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-semibold text-slate-900 truncate pr-2">{course.title}</h3>
                        <Badge variant={
                          course.status === 'Completed' ? 'default' : 
                          course.status === 'In Progress' ? 'secondary' : 'outline'
                        } className={
                          course.status === 'Completed' ? 'bg-green-100 text-green-700 hover:bg-green-200 border-0' : 
                          course.status === 'In Progress' ? 'bg-blue-100 text-blue-700 hover:bg-blue-200 border-0' : 
                          'text-slate-500'
                        }>
                          {course.status}
                        </Badge>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-1.5 mt-2">
                        <div 
                          className={`h-1.5 rounded-full transition-all duration-500 ${
                            course.status === 'Completed' ? 'bg-green-500' : 'bg-medical-blue'
                          }`}
                          style={{ 
                            width: course.status === 'Completed' ? '100%' : 
                                   course.status === 'In Progress' ? '40%' : '0%' 
                          }}
                        ></div>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="shrink-0 text-slate-400 hover:text-medical-blue">
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-xl border border-slate-100 shadow-sm">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-300">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-1">No courses found</h3>
              <p className="text-slate-500 mb-4">
                {activeTab === 'not-started' ? "You've started all your courses!" :
                 activeTab === 'in-progress' ? "Start a course to see it here." :
                 activeTab === 'completed' ? "Complete a course to see it here." :
                 "No courses available."}
              </p>
              {activeTab !== 'all' && (
                <Button variant="outline" onClick={() => setActiveTab('all')}>
                  View All Courses
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Certificates Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-medical-blue rounded-full"></div>
            <h2 className="text-2xl font-bold text-slate-800">My Certificates</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-slate-200 p-8 text-center">
            {statsData.completed > 0 ? (
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                 {/* Placeholder for certificates */}
                 <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center text-slate-400 hover:border-medical-blue hover:text-medical-blue transition-colors cursor-pointer group">
                   <Award className="w-10 h-10 mb-2 group-hover:scale-110 transition-transform" />
                   <span className="text-sm font-medium">View Certificate</span>
                 </div>
               </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-8">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-slate-300" />
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">No certificates yet</h3>
                <p className="text-slate-500 max-w-sm mx-auto">
                  Complete a course to earn your first certificate. Keep learning!
                </p>
              </div>
            )}
          </div>
        </div>

      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
