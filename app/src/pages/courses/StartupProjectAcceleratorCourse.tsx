import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowLeft, Rocket } from 'lucide-react';
import { startupProjectAcceleratorCourseData } from '../../data/startupProjectAcceleratorCourseData';
import { db, auth } from '../../lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { toast } from 'sonner';
import confetti from 'canvas-confetti';

const StartupProjectAcceleratorCourse = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [completedModules, setCompletedModules] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const loadProgress = async () => {
      if (user) {
        try {
          const userProgressRef = doc(db, 'courseProgress', user.uid);
          const docSnap = await getDoc(userProgressRef);
          
          if (docSnap.exists()) {
            const data = docSnap.data();
            setCompletedModules(data['startup-project-accelerator'] || []);
          }
        } catch (error) {
          console.error("Error loading progress:", error);
        }
      }
      setLoading(false);
    };

    loadProgress();
  }, [user]);

  const progress = (completedModules.length / startupProjectAcceleratorCourseData.length) * 100;
  const isComplete = completedModules.length === startupProjectAcceleratorCourseData.length;

  const handleStartModule = (moduleId: number) => {
    if (!user) {
      toast.error("Please sign in to track your progress");
      return;
    }
    navigate(`/course/startup-project-accelerator/module/${moduleId}`);
  };

  const handleDownloadCertificate = () => {
    if (!isComplete) {
      toast.error("Complete all modules to unlock the certificate");
      return;
    }
    
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    
    toast.success("Accelerator Completion Certificate download started!");
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Section */}
      <div className="bg-primary/5 border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/profile')}
              className="mb-6 -ml-4 hover:bg-transparent hover:text-primary"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Profile
            </Button>
            <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">Accelerator Program</Badge>
            <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
              <Rocket className="w-10 h-10 text-primary" />
              Startup Project Accelerator
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Complete end-to-end startup project with mentorship, from idea validation to MVP launch.
            </p>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="h-8">9 Project Modules</Badge>
                <Badge variant="outline" className="h-8">Project-Based</Badge>
                <Badge variant="outline" className="h-8">Mentorship</Badge>
              </div>
            </div>

            <Card className="border-primary/20 bg-background/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Program Progress</span>
                  <span className="text-muted-foreground">{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Modules List */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto grid gap-6">
          {startupProjectAcceleratorCourseData.map((module, index) => {
            const isCompleted = completedModules.includes(module.id);
            const isLocked = index > 0 && !completedModules.includes(startupProjectAcceleratorCourseData[index - 1].id);
            const Icon = module.icon;

            return (
              <Card 
                key={module.id}
                className={`transition-all hover:shadow-md ${isLocked ? 'opacity-75' : ''}`}
              >
                <CardHeader className="flex flex-row items-center gap-6">
                  <div className={`
                    w-12 h-12 rounded-lg flex items-center justify-center shrink-0
                    ${isCompleted ? 'bg-green-100 text-green-600' : 'bg-primary/10 text-primary'}
                  `}>
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 flex items-center gap-3">
                      Module {module.id}: {module.title}
                      {isCompleted && <CheckCircle2 className="w-5 h-5 text-green-600" />}
                    </CardTitle>
                    <CardDescription>{module.description}</CardDescription>
                  </div>

                  <Button 
                    onClick={() => handleStartModule(module.id)}
                    disabled={isLocked}
                    variant={isCompleted ? "outline" : "default"}
                  >
                    {isCompleted ? "View Submission" : isLocked ? "Locked" : "Start Project"}
                  </Button>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {isComplete && (
          <div className="max-w-4xl mx-auto mt-12 text-center">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
                <p className="text-muted-foreground mb-6">
                  You have successfully completed the Startup Project Accelerator. Your journey is just beginning!
                </p>
                <Button onClick={handleDownloadCertificate} size="lg">
                  Download Completion Certificate
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default StartupProjectAcceleratorCourse;
