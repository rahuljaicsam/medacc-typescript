import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowLeft, Phone, Mail, Calendar, ExternalLink } from 'lucide-react';
import { founderMasterclassData } from '../../data/founderMasterclassData';
import { db, auth } from '../../lib/firebase';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { toast } from 'sonner';
import confetti from 'canvas-confetti';

const FounderMasterclassModule = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const moduleIndex = parseInt(moduleId || '1') - 1;
  const module = founderMasterclassData[moduleIndex];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!module) {
      navigate('/course/founder-masterclass');
      return;
    }
    setLoading(false);
  }, [module, navigate]);

  const handleMarkAsScheduled = async () => {
    if (!user) {
      toast.error("Please sign in first");
      return;
    }

    try {
      const userRef = doc(db, 'courseProgress', user.uid);
      await updateDoc(userRef, {
        'founder-masterclass': arrayUnion(module.id)
      });
      
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      toast.success("Session marked as scheduled!");
      navigate('/course/founder-masterclass');
    } catch (error) {
      console.error("Error saving progress:", error);
      toast.error("Failed to update progress");
    }
  };

  if (loading || !module) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/course/founder-masterclass')}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Masterclass
        </Button>

        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold mb-4">{module.title}</h1>
              <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: module.content }} />
            </div>

            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle>Contact & Scheduling</CardTitle>
                <CardDescription>Direct contact details for {module.doctorName}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-center gap-3 p-4 bg-background rounded-lg border">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Personal Phone</p>
                      <p className="font-medium">{module.phoneNumber}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-background rounded-lg border">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Personal Email</p>
                      <p className="font-medium">{module.email}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-background rounded-lg border text-center space-y-4">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Schedule Your Session</h3>
                    <p className="text-muted-foreground">Book a time slot directly on {module.doctorName}'s calendar.</p>
                  </div>
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto" 
                    onClick={() => window.open(module.calendarLink, '_blank')}
                  >
                    Open Calendar <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end">
               <Button onClick={handleMarkAsScheduled} variant="outline">
                 I have scheduled my session
               </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderMasterclassModule;
