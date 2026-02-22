import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { startupProjectAcceleratorCourseData } from '../../data/startupProjectAcceleratorCourseData';
import { db, auth } from '../../lib/firebase';
import { doc, updateDoc, arrayUnion, getDoc, setDoc } from 'firebase/firestore';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { toast } from 'sonner';
import confetti from 'canvas-confetti';

const StartupProjectAcceleratorModule = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [submissionLink, setSubmissionLink] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);

  const moduleIndex = parseInt(moduleId || '1') - 1;
  const module = startupProjectAcceleratorCourseData[moduleIndex];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!module) {
      navigate('/course/startup-project-accelerator');
      return;
    }
    setLoading(false);
  }, [module, navigate]);

  // Load previous submission if exists
  useEffect(() => {
    const loadSubmission = async () => {
      if (user && module) {
        try {
          const userRef = doc(db, 'courseProgress', user.uid);
          const docSnap = await getDoc(userRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            const submissions = data['startup-project-accelerator-submissions'] || {};
            if (submissions[module.id]) {
              setSubmissionLink(submissions[module.id]);
              setSubmitted(true);
            }
          }
        } catch (error) {
          console.error("Error loading submission:", error);
        }
      }
    };
    loadSubmission();
  }, [user, module]);

  const handleAnswerSelect = (optionIndex: number) => {
    setSelectedAnswer(optionIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;

    if (selectedAnswer === module.quiz[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < module.quiz.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResults(true);
    }
  };

  const handleSubmitProject = async () => {
    if (!submissionLink.trim()) {
      toast.error("Please enter a valid link");
      return;
    }

    if (!user) {
      toast.error("Please sign in to submit");
      return;
    }

    try {
      const userRef = doc(db, 'courseProgress', user.uid);
      const docSnap = await getDoc(userRef);
      
      const updateData: any = {
        [`startup-project-accelerator-submissions.${module.id}`]: submissionLink
      };

      if (!docSnap.exists()) {
        await setDoc(userRef, updateData);
      } else {
        await updateDoc(userRef, updateData);
      }
      
      setSubmitted(true);
      toast.success("Project link submitted successfully!");
    } catch (error) {
      console.error("Error submitting project:", error);
      toast.error("Failed to submit project");
    }
  };

  const handleCompleteModule = async () => {
    // Check if quiz passed (if applicable) and project submitted
    const finalScore = score + (selectedAnswer === module.quiz[currentQuestion].correctAnswer ? 1 : 0);
    const quizPassed = (finalScore / module.quiz.length) >= 0.7;
    
    if (module.submissionRequired && !submitted) {
      toast.error("Please submit your project link first.");
      return;
    }

    if (quizPassed && user) {
      try {
        const userRef = doc(db, 'courseProgress', user.uid);
        await updateDoc(userRef, {
          'startup-project-accelerator': arrayUnion(module.id)
        });
        
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
        toast.success("Module completed successfully!");
        navigate('/course/startup-project-accelerator');
      } catch (error) {
        console.error("Error saving progress:", error);
        toast.error("Failed to save progress");
      }
    } else {
      toast.error("You need to pass the quiz to complete the module.");
    }
  };

  if (loading || !module) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/course/startup-project-accelerator')}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Accelerator
        </Button>

        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold mb-4">{module.title}</h1>
              <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: module.content }} />
            </div>

            {/* Project Submission Section */}
            {module.submissionRequired && (
              <Card className="border-purple-200 bg-purple-50/50 dark:bg-purple-900/10">
                <CardHeader>
                  <CardTitle>Project Submission</CardTitle>
                  <CardDescription>Submit your work for this module to proceed.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid w-full gap-4">
                    <div className="flex flex-col space-y-2">
                      <Label htmlFor="submission">{module.submissionLabel}</Label>
                      <div className="flex gap-2">
                        <Input 
                          id="submission" 
                          placeholder={module.submissionPlaceholder} 
                          value={submissionLink}
                          onChange={(e) => setSubmissionLink(e.target.value)}
                          disabled={submitted} // Optional: allow editing? For now, lock it or handle update
                        />
                        <Button onClick={handleSubmitProject} disabled={submitted && submissionLink !== ''}>
                          {submitted ? "Submitted" : "Submit"}
                        </Button>
                      </div>
                      {submitted && (
                         <div className="text-sm text-green-600 flex items-center gap-1">
                           <CheckCircle2 className="w-4 h-4" /> Submission recorded.
                         </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Knowledge Check</CardTitle>
                <CardDescription>Verify your understanding before completing the module.</CardDescription>
              </CardHeader>
              <CardContent>
                {!quizStarted ? (
                  <div className="text-center py-8">
                    <Button onClick={() => setQuizStarted(true)}>Start Quiz</Button>
                  </div>
                ) : !showResults ? (
                  <div className="space-y-6">
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Question {currentQuestion + 1} of {module.quiz.length}</span>
                      <span>Score: {score}</span>
                    </div>
                    <Progress value={((currentQuestion) / module.quiz.length) * 100} className="h-2" />
                    
                    <h3 className="text-xl font-medium">{module.quiz[currentQuestion].question}</h3>
                    
                    <div className="grid gap-3">
                      {module.quiz[currentQuestion].options.map((option, index) => (
                        <Button
                          key={index}
                          variant={selectedAnswer === index ? "default" : "outline"}
                          className={`justify-start h-auto py-4 text-left ${
                            selectedAnswer === index ? 'ring-2 ring-primary' : ''
                          }`}
                          onClick={() => handleAnswerSelect(index)}
                        >
                          {option}
                        </Button>
                      ))}
                    </div>

                    <Button 
                      onClick={handleNextQuestion} 
                      disabled={selectedAnswer === null}
                      className="w-full"
                    >
                      {currentQuestion + 1 === module.quiz.length ? "Finish Quiz" : "Next Question"}
                    </Button>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <h3 className="text-2xl font-bold mb-4">
                      Quiz Complete!
                    </h3>
                    <p className="text-xl mb-6">
                      Your Score: {Math.round((score + (selectedAnswer === module.quiz[currentQuestion].correctAnswer ? 1 : 0)) / module.quiz.length * 100)}%
                    </p>
                    {(score + (selectedAnswer === module.quiz[currentQuestion].correctAnswer ? 1 : 0)) / module.quiz.length >= 0.7 ? (
                      <div className="space-y-4">
                        <div className="text-green-600">
                          <p className="font-medium">Quiz Passed!</p>
                        </div>
                        <Button onClick={handleCompleteModule} size="lg" className="w-full">
                          Complete Module & Continue
                        </Button>
                      </div>
                    ) : (
                      <div className="text-red-600 mb-6">
                        <p className="font-medium">You need 70% to pass. Please try again.</p>
                         <Button onClick={() => {
                           setQuizStarted(false);
                           setCurrentQuestion(0);
                           setScore(0);
                           setSelectedAnswer(null);
                           setShowResults(false);
                         }} variant="outline">Retry Quiz</Button>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper component for icon
function CheckCircle2(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

export default StartupProjectAcceleratorModule;
