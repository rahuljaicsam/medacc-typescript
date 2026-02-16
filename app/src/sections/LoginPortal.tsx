import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Mail, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { auth } from '@/lib/firebase';

const LoginPortal = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Check for demo credentials immediately to avoid unnecessary API calls/errors
    if (email === 'demo@medacc.org' && password === 'demo123') {
      // Simulate network delay for better UX
      setTimeout(() => {
        setLoading(false);
        navigate('/profile');
      }, 800);
      return;
    }

    try {
      // Attempt Firebase login for other users
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/profile');
    } catch (firebaseError: any) {
      console.error("Login error:", firebaseError);
      
      // Handle specific Firebase errors
      if (firebaseError.code === 'auth/invalid-credential' || firebaseError.code === 'auth/user-not-found' || firebaseError.code === 'auth/wrong-password') {
        setError('Invalid email or password');
      } else if (firebaseError.code === 'auth/too-many-requests') {
        setError('Too many failed attempts. Please try again later.');
      } else {
        setError('Something went wrong. Please try again.');
      }
    } finally {
      // Only set loading false if we didn't take the demo path (which handles its own loading state)
      if (!(email === 'demo@medacc.org' && password === 'demo123')) {
        setLoading(false);
      }
    }
  };

  return (
    <section id="login" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          className="max-w-md mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 lg:p-10">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Members only login portal
              </h2>
              <p className="text-slate-500">
                Sign in to access exclusive resources and connect with our community
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-4">
              {error && (
                <div className="bg-red-50 text-red-500 text-sm p-3 rounded-lg text-center">
                  {error}
                </div>
              )}
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-12 py-6 rounded-xl border-slate-200 focus:border-medical-blue focus:ring-medical-blue/20"
                  required
                />
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-12 py-6 rounded-xl border-slate-200 focus:border-medical-blue focus:ring-medical-blue/20"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-medical-blue hover:bg-medical-blue-dark text-white py-6 rounded-xl font-semibold group disabled:opacity-70"
              >
                {loading ? 'Signing in...' : 'Sign In'}
                {!loading && <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />}
              </Button>
            </form>

            {/* Footer */}
            <div className="mt-6 text-center">
              <p className="text-sm text-slate-500">
                Ask us for a login id and password if you are not a member
              </p>
              <div className="mt-4 text-xs text-slate-400 bg-slate-50 p-2 rounded border border-slate-100">
                <span className="font-semibold">Demo Credentials:</span><br/>
                Email: demo@medacc.org<br/>
                Password: demo123
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoginPortal;
