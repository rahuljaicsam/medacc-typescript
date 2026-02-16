import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  LogOut, 
  LayoutDashboard, 
  Edit, 
  BookOpen, 
  Clock, 
  Award, 
  Calendar, 
  Star, 
  Users, 
  Play, 
  Rocket, 
  Brain, 
  HeartPulse, 
  Microscope, 
  Scale, 
  Briefcase, 
  Handshake,
  Smartphone,
  Bot,
  Cpu,
  Shield,
  Cloud,
  Truck,
  TrendingUp,
  Mic,
  Factory
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/sections/Navigation';
import Footer from '@/sections/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { auth, db } from '@/lib/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { type CourseModule, INITIAL_COURSE_DATA } from '@/data/courseData';

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [courseData, setCourseData] = useState<CourseModule[]>(INITIAL_COURSE_DATA);
  const [statsData, setStatsData] = useState({
    completed: 0,
    hours: 0, // Default to 0, will update from Firestore
    certificates: 0,
    cohort: '2024'
  });

  // Stats Data
  const stats = [
    { label: 'Courses Completed', value: statsData.completed.toString(), icon: <BookOpen className="w-5 h-5" />, color: 'bg-blue-100 text-blue-600' },
    { label: 'Learning Hours', value: statsData.hours.toString(), icon: <Clock className="w-5 h-5" />, color: 'bg-indigo-100 text-indigo-600' },
    { label: 'Certificates Earned', value: statsData.certificates.toString(), icon: <Award className="w-5 h-5" />, color: 'bg-teal-100 text-teal-600' },
    { label: 'Cohort Year', value: statsData.cohort, icon: <Calendar className="w-5 h-5" />, color: 'bg-purple-100 text-purple-600' },
  ];

  useEffect(() => {
    let unsubscribe: () => void;

    const fetchUserData = async () => {
      try {
        unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
          if (firebaseUser) {
            // User is signed in via Firebase
            console.log("Firebase user detected:", firebaseUser);
            
            // Default user data from Auth
            let userData: any = {
              uid: firebaseUser.uid,
              displayName: firebaseUser.displayName || 'Member',
              email: firebaseUser.email,
              photoURL: firebaseUser.photoURL,
              title: 'Biotech Founder', // Default
              cohort: '2024 Autumn Cohort Member' // Default
            };

            try {
              // Fetch user profile from 'users' collection
              const userDocRef = doc(db, 'users', firebaseUser.uid);
              const userDoc = await getDoc(userDocRef);
              
              if (userDoc.exists()) {
                const firestoreData = userDoc.data();
                console.log("Firestore user data:", firestoreData);
                
                // Merge Firestore data
                userData = {
                  ...userData,
                  ...firestoreData,
                  // Map specific fields
                  photoURL: firestoreData.profilePicUrl || userData.photoURL,
                  displayName: firestoreData.displayName || firestoreData.name || userData.displayName,
                  address: firestoreData.address,
                  phoneNumber: firestoreData.phoneNumber,
                  linkedinId: firestoreData.linkedinId,
                  twitterId: firestoreData.twitterId
                };
              }
            } catch (err) {
              console.error("Error fetching user profile:", err);
            }

            setUser(userData);

            try {
              // Fetch user progress from Firestore
              // Using 'courseProgress' collection as requested
              const progressDocRef = doc(db, 'courseProgress', firebaseUser.uid);
              const progressDoc = await getDoc(progressDocRef);

              if (progressDoc.exists()) {
                const progressData = progressDoc.data();
                // progressData fields are course slugs, e.g., 'general-knowledge'
                
                // Calculate stats
                let totalCompleted = 0;
                let totalMinutes = 0;
                let totalCertificates = 0;

                // Map Firestore data to local state
                const updatedCourses = INITIAL_COURSE_DATA.map(course => {
                  // Generate slug to match Firestore keys
                  const slug = course.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
                  
                  // Try to find matching course data
                  // 1. Exact slug match
                  let firestoreCourse = progressData[slug];
                  
                  // 2. Handle known variations/mappings if needed
                  if (!firestoreCourse) {
                      // Example: "General Knowledge Foundations" -> "general-knowledge"
                      if (slug === 'general-knowledge-foundations' && progressData['general-knowledge']) {
                          firestoreCourse = progressData['general-knowledge'];
                      }
                      // Example: "Biotech General Knowledge Mastery" -> "biotech-general-knowledge"
                      else if (slug === 'biotech-general-knowledge-mastery' && progressData['biotech-general-knowledge']) {
                           firestoreCourse = progressData['biotech-general-knowledge'];
                      }
                      // Example: "IP & Patent Strategy" -> "ip-patent-strategy"
                      else if (slug === 'ip-patent-strategy' && progressData['ip-patent-strategy']) {
                           firestoreCourse = progressData['ip-patent-strategy'];
                      }
                  }

                  if (firestoreCourse) {
                    // Update stats based on modules
                    let isCourseCompleted = false;
                    let isCourseInProgress = false;
                    
                    // Check modules
                    // Modules are stored as keys like "module-1", "module-2" inside the course object
                    const moduleKeys = Object.keys(firestoreCourse).filter(k => k.startsWith('module-'));
                    let completedModulesCount = 0;
                    
                    moduleKeys.forEach(modKey => {
                        const mod = firestoreCourse[modKey];
                        if (mod.status === 'completed' || mod.completed === true) {
                            completedModulesCount++;
                            // Add timeSpent if available
                            totalMinutes += (mod.timeSpent || 0); 
                        }
                        if (mod.status === 'in_progress' || mod.startedAt) {
                            isCourseInProgress = true;
                        }
                    });

                    // Determine course status
                    // If we have modules and all are completed, or if there's an explicit status
                    if (firestoreCourse.status === 'completed') {
                        isCourseCompleted = true;
                    } else if (moduleKeys.length > 0 && completedModulesCount === moduleKeys.length) {
                        isCourseCompleted = true;
                    }
                    
                    if (isCourseCompleted) {
                      totalCompleted++;
                      totalCertificates++; // Assuming 1 certificate per completed course
                    } else if (moduleKeys.length > 0 && completedModulesCount > 0) {
                        isCourseInProgress = true;
                    }

                    // Map status to UI
                    let status: CourseModule['status'] = 'Not Started';
                    if (isCourseCompleted) status = 'Completed';
                    else if (isCourseInProgress) status = 'In Progress';
                    
                    return {
                      ...course,
                      status: status,
                    };
                  }
                  return course;
                });

                setCourseData(updatedCourses);
                setStatsData({
                  completed: totalCompleted,
                  hours: Math.round(totalMinutes / 60),
                  certificates: totalCertificates,
                  cohort: '2024'
                });
              }
            } catch (error) {
              console.error("Error fetching progress:", error);
            }
          } else {
            // Fallback for demo mode (no Firebase user)
            setUser({
              displayName: 'Rahul J S',
              title: 'Biotech Founder',
              cohort: '2024 Autumn Cohort Member',
              photoURL: null
            });
            // Keep default mock stats for demo user if needed, or reset to 0
            // For demo purposes, we might want to show some fake progress
            setStatsData({
              completed: 0,
              hours: 24, // Mock value for demo
              certificates: 0,
              cohort: '2024'
            });
          }
          setLoading(false);
        });
      } catch (error) {
        console.log("Firebase not configured yet, using mock mode");
        setLoading(false);
        // Fallback mock data
        setUser({
          displayName: 'Rahul J S',
          title: 'Biotech Founder',
          cohort: '2024 Autumn Cohort Member',
          photoURL: null
        });
        setStatsData({
          completed: 0,
          hours: 24,
          certificates: 0,
          cohort: '2024'
        });
      }
    };

    fetchUserData();

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error("Error signing out:", error);
      navigate('/');
    }
  };

  const handleCourseClick = (title: string) => {
    if (title === 'General Knowledge Foundations') {
      navigate('/course/general-knowledge-foundations');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navigation />
      
      {/* Header Profile Section */}
      <div className="bg-gradient-to-r from-medical-blue to-medical-blue-dark pt-32 pb-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center overflow-hidden">
                  {user?.photoURL ? (
                    <img src={user.photoURL} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <User className="w-12 h-12 text-white" />
                  )}
                </div>
                <button className="absolute bottom-0 right-0 bg-white text-medical-blue p-1.5 rounded-full shadow-lg hover:bg-slate-100 transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              
              <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold mb-1">{user?.displayName || 'Loading...'}</h1>
                <p className="text-blue-100 text-lg mb-3">{user?.title || 'Member'}</p>
                <Badge className="bg-white/20 hover:bg-white/30 text-white border-0 px-3 py-1">
                  {user?.cohort || 'Member'}
                </Badge>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border-0 backdrop-blur-sm">
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
              <Button variant="secondary" onClick={handleLogout} className="bg-red-500/80 hover:bg-red-600/90 text-white border-0 backdrop-blur-sm">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
              <Button 
                onClick={() => navigate('/dashboard')}
                className="bg-white text-medical-blue hover:bg-blue-50 border-0"
              >
                <LayoutDashboard className="w-4 h-4 mr-2" />
                Open Dashboard
              </Button>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 pb-20 w-full">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center gap-4"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.color}`}>
                {stat.icon}
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning Journey Section */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Badge variant="outline" className="border-medical-blue text-medical-blue">
              <BookOpen className="w-3 h-3 mr-1" />
              Curriculum
            </Badge>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Your Learning Journey</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Explore courses designed specifically for biotech founders and innovators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courseData.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.05 }}
            >
              <Card 
                className="h-full hover:shadow-lg transition-all duration-300 border-slate-200 overflow-hidden flex flex-col group cursor-pointer"
                onClick={() => handleCourseClick(course.title)}
              >
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-medical-blue flex items-center justify-center group-hover:bg-medical-blue group-hover:text-white transition-colors duration-300">
                      {course.icon}
                    </div>
                    {course.status === 'Registration Open' && (
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-200 border-0">
                        Open
                      </Badge>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 min-h-[3.5rem]">
                    {course.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                    <div className="flex items-center gap-1 text-amber-500 font-medium">
                      <Star className="w-4 h-4 fill-current" />
                      {course.rating}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {course.participants}
                    </div>
                  </div>
                  
                  <p className="text-slate-500 text-sm line-clamp-3 mb-4">
                    {course.description}
                  </p>

                  <div className="mt-auto">
                    <div className="flex justify-between items-center text-xs font-medium text-slate-500 mb-2">
                      <span>Status</span>
                      <span className={
                        course.status === 'Not Started' ? 'text-slate-400' :
                        course.status === 'Loading...' ? 'text-amber-500' :
                        course.status === 'Registration Open' ? 'text-green-600' :
                        'text-blue-600'
                      }>{course.status}</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-1.5 mb-4">
                      <div 
                        className="bg-medical-blue h-1.5 rounded-full transition-all duration-500"
                        style={{ width: course.status === 'Not Started' ? '0%' : course.status === 'Loading...' ? '10%' : '0%' }}
                      ></div>
                    </div>
                    
                    <Button className="w-full bg-medical-blue hover:bg-medical-blue-dark group-hover:shadow-md transition-all">
                      {course.action === 'Start Course' && <Play className="w-4 h-4 mr-2" />}
                      {course.action === 'Start Project' && <Rocket className="w-4 h-4 mr-2" />}
                      {course.action}
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

export default Profile;
