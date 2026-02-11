import { useState } from 'react';
import { useNavigate } from 'react-router';
import { UserPlus, GraduationCap, BookOpen, Shield } from 'lucide-react';

export function RegisterPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('student');

  const handleRegister = (e) => {
    e.preventDefault();
    // Mock registration - navigate based on role
    if (role === 'student') {
      navigate('/student');
    } else if (role === 'teacher') {
      navigate('/teacher/dashboard');  
    } else {
      navigate('/admin');
    }

  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center p-4">
      <div className="bg-slate-800 rounded-2xl shadow-2xl w-full max-w-md p-8 border border-slate-700">
        <div className="text-center mb-8">
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <UserPlus className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
          <p className="text-slate-400">Join our Learning Management System</p>
        </div>
        
        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              placeholder="Create a password"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-3">
              I am a
            </label>
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setRole('student')}
                className={`relative p-3 rounded-xl border-2 transition-all duration-300 group ${
                  role === 'student'
                    ? 'border-blue-500 bg-blue-600/20 shadow-lg shadow-blue-500/20'
                    : 'border-slate-600 bg-slate-700/50 hover:border-blue-400 hover:bg-blue-600/10 hover:shadow-md hover:shadow-blue-500/10'
                }`}
              >
                <div className={`flex flex-col items-center gap-1.5 transition-transform duration-300 ${
                  role === 'student' ? 'scale-105' : 'group-hover:scale-105'
                }`}>
                  <div className={`p-2 rounded-lg transition-colors duration-300 ${
                    role === 'student' 
                      ? 'bg-blue-600' 
                      : 'bg-slate-600 group-hover:bg-blue-600'
                  }`}>
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <span className={`text-xs font-medium transition-colors duration-300 ${
                    role === 'student' 
                      ? 'text-blue-400' 
                      : 'text-slate-300 group-hover:text-blue-300'
                  }`}>
                    Student
                  </span>
                </div>
                {role === 'student' && (
                  <div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center border-2 border-slate-800">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </button>

              <button
                type="button"
                onClick={() => setRole('teacher')}
                className={`relative p-3 rounded-xl border-2 transition-all duration-300 group ${
                  role === 'teacher'
                    ? 'border-purple-500 bg-purple-600/20 shadow-lg shadow-purple-500/20'
                    : 'border-slate-600 bg-slate-700/50 hover:border-purple-400 hover:bg-purple-600/10 hover:shadow-md hover:shadow-purple-500/10'
                }`}
              >
                <div className={`flex flex-col items-center gap-1.5 transition-transform duration-300 ${
                  role === 'teacher' ? 'scale-105' : 'group-hover:scale-105'
                }`}>
                  <div className={`p-2 rounded-lg transition-colors duration-300 ${
                    role === 'teacher' 
                      ? 'bg-purple-600' 
                      : 'bg-slate-600 group-hover:bg-purple-600'
                  }`}>
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <span className={`text-xs font-medium transition-colors duration-300 ${
                    role === 'teacher' 
                      ? 'text-purple-400' 
                      : 'text-slate-300 group-hover:text-purple-300'
                  }`}>
                    Teacher
                  </span>
                </div>
                {role === 'teacher' && (
                  <div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center border-2 border-slate-800">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </button>

              <button
                type="button"
                onClick={() => setRole('admin')}
                className={`relative p-3 rounded-xl border-2 transition-all duration-300 group ${
                  role === 'admin'
                    ? 'border-red-500 bg-red-600/20 shadow-lg shadow-red-500/20'
                    : 'border-slate-600 bg-slate-700/50 hover:border-red-400 hover:bg-red-600/10 hover:shadow-md hover:shadow-red-500/10'
                }`}
              >
                <div className={`flex flex-col items-center gap-1.5 transition-transform duration-300 ${
                  role === 'admin' ? 'scale-105' : 'group-hover:scale-105'
                }`}>
                  <div className={`p-2 rounded-lg transition-colors duration-300 ${
                    role === 'admin' 
                      ? 'bg-red-600' 
                      : 'bg-slate-600 group-hover:bg-red-600'
                  }`}>
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <span className={`text-xs font-medium transition-colors duration-300 ${
                    role === 'admin' 
                      ? 'text-red-400' 
                      : 'text-slate-300 group-hover:text-red-300'
                  }`}>
                    Admin
                  </span>
                </div>
                {role === 'admin' && (
                  <div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-600 rounded-full flex items-center justify-center border-2 border-slate-800">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all font-medium"
          >
            Create Account
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-slate-400">
            Already have an account?{' '}
            <button
              onClick={() => navigate('/login')}
              className="text-blue-400 hover:text-blue-300 font-medium"
            >
              Sign in here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}