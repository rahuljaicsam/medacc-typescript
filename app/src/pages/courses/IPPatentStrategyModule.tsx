import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft } from 'lucide-react';
import { ipPatentStrategyCourseData } from '../../data/ipPatentStrategyCourseData';
import { db, auth } from '../../lib/firebase';
import { doc, updateDoc, arrayUnion, getDoc, setDoc } from 'firebase/firestore';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { toast } from 'sonner';
import confetti from 'canvas-confetti';

const IPPatentStrategyModule = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [loading, setLoading] = useState(true);

  const moduleIndex = parseInt(moduleId || '1') - 1;
  const module = ipPatentStrategyCourseData[moduleIndex];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!module) {
      navigate('/course/ip-patent-strategy');
      return;
    }
    setLoading(false);
  }, [module, navigate]);

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
      handleQuizCompletion();
    }
  };

  const handleQuizCompletion = async () => {
    const finalScore = score + (selectedAnswer === module.quiz[currentQuestion].correctAnswer ? 1 : 0);
    const passed = (finalScore / module.quiz.length) >= 0.7;

    if (passed && user) {
      try {
        const userRef = doc(db, 'courseProgress', user.uid);
        const docSnap = await getDoc(userRef);
        
        if (!docSnap.exists()) {
          await setDoc(userRef, {
            'ip-patent-strategy': [module.id]
          });
        } else {
          await updateDoc(userRef, {
            'ip-patent-strategy': arrayUnion(module.id)
          });
        }
        
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
        toast.success("Module completed successfully!");
      } catch (error) {
        console.error("Error saving progress:", error);
        toast.error("Failed to save progress");
      }
    }
  };

  if (loading || !module) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/course/ip-patent-strategy')}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Course
        </Button>

        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold mb-4">{module.title}</h1>
              <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: module.content }} />
            </div>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Module Quiz</CardTitle>
              </CardHeader>
              <CardContent>
                {!quizStarted ? (
                  <div className="text-center py-8">
                    <p className="mb-6 text-muted-foreground">
                      Test your knowledge of {module.title}. Pass with 70% or higher to complete the module.
                    </p>
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
                      <div className="text-green-600 mb-6">
                        <p className="font-medium">Congratulations! You passed this module.</p>
                      </div>
                    ) : (
                      <div className="text-red-600 mb-6">
                        <p className="font-medium">You need 70% to pass. Please try again.</p>
                      </div>
                    )}
                    <Button onClick={() => navigate('/course/ip-patent-strategy')}>
                      Return to Course
                    </Button>
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

export default IPPatentStrategyModule;
