import { useNavigate } from 'react-router';
import { BookOpen, Brain, BarChart3, Users, Sparkles, CheckCircle,GraduationCap,ArrowRight,Zap,Target } from 'lucide-react';
const LandingPage = () => {
  const navigate = useNavigate();
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Learning',
      description: 'Personalized content recommendations based on your performance and learning style',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      icon: Target,
      title: 'Smart Quiz Generation',
      description: 'AI creates custom quizzes tailored to student needs with faculty approval',
      color: 'from-purple-600 to-pink-600'
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Detailed insights and progress tracking for students and teachers',
      color: 'from-green-600 to-emerald-600'
    },
    {
      icon: Zap,
      title: 'Instant Feedback',
      description: 'Get immediate results and explanations after completing quizzes',
      color: 'from-orange-600 to-red-600'
    },
    {
      icon: Users,
      title: 'One-to-Many Teaching',
      description: 'One teacher manages one subject with many students efficiently',
      color: 'from-indigo-600 to-purple-600'
    },
    {
      icon: Sparkles,
      title: 'Personalized Recommendations',
      description: 'AI suggests learning materials based on weak topics and performance',
      color: 'from-pink-600 to-rose-600'
    }
  ];
  const benefits = [
    'Real-time progress tracking and analytics',
    'AI-generated quizzes with faculty review',
    'Interactive learning experience',
    'Performance-based content recommendations',
    'Comprehensive notification system',
    'Role-based access control'
  ];
  return (
    <div className="min-h-screen bg-slate-900">
      <nav className="bg-slate-800/50 backdrop-blur-lg border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-2 rounded-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate('/login')}
                className="px-4 py-2 text-slate-300 hover:text-white transition-colors"
              >
                Login
              </button>
              <button
                onClick={() => navigate('/register')}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all font-medium"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900 to-purple-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/50 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300 font-medium">AI-Powered Learning Platform</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Personalized Learning
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Powered by AI
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
              Transform education with intelligent quiz generation, real-time analytics, 
              and personalized learning recommendations for students, teachers, and administrators.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => navigate('/register')}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all font-medium text-lg flex items-center gap-2 shadow-lg shadow-blue-600/30"
              >
                Start Learning Today
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => navigate('/login')}
                className="px-8 py-4 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition-all font-medium text-lg border border-slate-700"
              >
                Sign In
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 max-w-3xl mx-auto">
              <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition-all group">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">For Students</h3>
                <p className="text-sm text-slate-400">
                  Take quizzes, track progress, and get personalized learning recommendations
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 hover:border-purple-500 transition-all group">
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">For Teachers</h3>
                <p className="text-sm text-slate-400">
                  Create quizzes, analyze student performance, and manage course content
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features for Modern Education
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Everything you need to create an engaging and effective learning experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all group"
              >
                <div className={`bg-gradient-to-br ${feature.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose EduAI Learn?
              </h2>
              <p className="text-lg text-slate-400 mb-8">
                Our platform combines cutting-edge AI technology with proven educational methods 
                to deliver a superior learning experience for students and teachers alike.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-green-600/20 rounded-full p-1 mt-1">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <span className="text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center">
                        <Brain className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">AI Analysis Complete</p>
                        <p className="text-xs text-slate-400">Performance evaluated</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Overall Progress</span>
                        <span className="text-blue-400 font-medium">87%</span>
                      </div>
                      <div className="w-full bg-slate-600 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 h-2 rounded-full" style={{ width: '87%' }} />
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                    <p className="text-white font-medium mb-3">Recommended Topics</p>
                    <div className="space-y-2">
                      {['Advanced React Patterns', 'API Integration', 'State Management'].map((topic, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <Sparkles className="w-4 h-4 text-yellow-400" />
                          <span className="text-slate-300">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-600/50 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-8 h-8 text-green-400" />
                      <div>
                        <p className="text-white font-medium">Quiz Completed!</p>
                        <p className="text-sm text-green-300">Score: 92/100</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Learning Experience?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Join thousands of students and teachers already using EduAI Learn
          </p>
          <button
            onClick={() => navigate('/register')}
            className="px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all font-medium text-lg flex items-center gap-2 mx-auto shadow-lg shadow-blue-600/30"
          >
            Get Started Free
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
      <footer className="bg-slate-800 border-t border-slate-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-2 rounded-lg">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">EduAI Learn</span>
            </div>
            <p className="text-sm text-slate-400">
              © 2026 EduAI Learn. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default LandingPage;