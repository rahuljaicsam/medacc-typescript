import { useState, useEffect } from 'react';
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp, Timestamp } from 'firebase/firestore';
import { doctorSalaryDb } from '@/lib/firebase-doctor-salary';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { MessageSquare, ChevronDown, ChevronUp, Send } from 'lucide-react';

interface Comment {
  id: string;
  text: string;
  timestamp: Timestamp;
}

const MapComments = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Real-time subscription to comments
    const q = query(
      collection(doctorSalaryDb, 'comments'),
      orderBy('timestamp', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedComments: Comment[] = [];
      snapshot.forEach((doc) => {
        fetchedComments.push({
          id: doc.id,
          ...doc.data(),
        } as Comment);
      });
      setComments(fetchedComments);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async () => {
    if (!newComment.trim()) return;

    setLoading(true);
    try {
      await addDoc(collection(doctorSalaryDb, 'comments'), {
        text: newComment.trim(),
        timestamp: serverTimestamp(),
      });
      setNewComment('');
    } catch (error) {
      console.error('Error adding comment:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col h-full max-h-[600px]">
      <div 
        className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center cursor-pointer hover:bg-slate-100 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2 font-semibold text-slate-700">
          <MessageSquare className="w-4 h-4" />
          <h3>Community Comments</h3>
          <span className="bg-medical-blue/10 text-medical-blue text-xs px-2 py-0.5 rounded-full">
            {comments.length}
          </span>
        </div>
        {isOpen ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
      </div>

      {isOpen && (
        <div className="flex-1 flex flex-col p-4 gap-4 overflow-hidden">
          {/* Comment List */}
          <div className="flex-1 overflow-y-auto space-y-3 pr-2">
            {comments.length === 0 ? (
              <div className="text-center text-slate-400 py-8 text-sm italic">
                No comments yet. Be the first to share your thoughts!
              </div>
            ) : (
              comments.map((comment) => (
                <div key={comment.id} className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-sm">
                  <p className="text-slate-700 whitespace-pre-wrap">{comment.text}</p>
                  <div className="text-[10px] text-slate-400 mt-1.5 text-right">
                    {comment.timestamp?.toDate().toLocaleString()}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Input Area */}
          <div className="pt-3 border-t border-slate-100">
            <Textarea
              placeholder="Share your thoughts or feedback..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="min-h-[80px] mb-2 text-sm resize-none focus-visible:ring-medical-blue"
            />
            <Button 
              onClick={handleSubmit} 
              disabled={!newComment.trim() || loading}
              className="w-full bg-medical-blue hover:bg-medical-blue-dark text-white gap-2"
              size="sm"
            >
              <Send className="w-3 h-3" />
              {loading ? 'Posting...' : 'Post Comment'}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapComments;
