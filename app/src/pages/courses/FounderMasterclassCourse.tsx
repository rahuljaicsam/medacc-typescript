import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowLeft, Crown } from 'lucide-react';
import { founderMasterclassData } from '../../data/founderMasterclassData';
import { db, auth } from '../../lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { toast } from 'sonner';

const FounderMasterclassCourse = () => {
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
            setCompletedModules(data['founder-masterclass'] || []);
          }
        } catch (error) {
          console.error("Error loading progress:", error);
        }
      }
      setLoading(false);
    };

    loadProgress();
  }, [user]);

  const progress = (completedModules.length / founderMasterclassData.length) * 100;

  const handleStartModule = (moduleId: number) => {
    if (!user) {
      toast.error("Please sign in to access the masterclass");
      return;
    }
    navigate(`/course/founder-masterclass/module/${moduleId}`);
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
            <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">Exclusive Mentorship</Badge>
            <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
              <Crown className="w-10 h-10 text-primary" />
              1-on-1 Founder Masterclass
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Exclusive mentorship sessions with Med/Acc co-founders for personalized guidance. Schedule your 1-on-1s.
            </p>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="h-8">2 Sessions</Badge>
                <Badge variant="outline" className="h-8">Live Video Call</Badge>
                <Badge variant="outline" className="h-8">Direct Access</Badge>
              </div>
            </div>

            <Card className="border-primary/20 bg-background/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Sessions Completed</span>
                  <span className="text-muted-foreground">{completedModules.length} / {founderMasterclassData.length}</span>
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
          {founderMasterclassData.map((module) => {
            const isCompleted = completedModules.includes(module.id);
            const Icon = module.icon;

            return (
              <Card 
                key={module.id}
                className="transition-all hover:shadow-md"
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
                      {module.title}
                      {isCompleted && <CheckCircle2 className="w-5 h-5 text-green-600" />}
                    </CardTitle>
                    <CardDescription>{module.description}</CardDescription>
                  </div>

                  <Button 
                    onClick={() => handleStartModule(module.id)}
                    variant={isCompleted ? "outline" : "default"}
                  >
                    {isCompleted ? "View Details" : "Book Session"}
                  </Button>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FounderMasterclassCourse;
