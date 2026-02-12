import React, { useState } from 'react';
import { ArrowLeft, Video, FileText, CheckCircle, Clock, Star, Zap } from 'lucide-react';

const RecommendationsPage = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('All Resources');
  const resources = [
    {
      id: 1,
      title: "Understanding Quadratic Equations - Basics",
      category: "Videos",
      subject: "Mathematics",
      topic: "Quadratic Equations",
      desc: "Learn the fundamentals of quadratic equations with step-by-step examples.",
      time: "15 min",
      level: "Beginner",
      rating: 4.8,
      progress: 92,
      type: "video"
    },
    {
      id: 2,
      title: "Quadratic Equations Practice Set",
      category: "Practice Quizzes",
      subject: "Mathematics",
      topic: "Quadratic Equations",
      desc: "25 practice problems covering all aspects of quadratic equations.",
      time: "20 min",
      level: "Intermediate",
      rating: 4.6,
      progress: 65,
      type: "quiz"
    },
    {
      id: 3,
      title: "Advanced Quadratic Problems",
      category: "Reading Materials",
      subject: "Mathematics",
      topic: "Quadratic Equations",
      desc: "Complex problem sets for mastering quadratic equations.",
      time: "30 min",
      level: "Advanced",
      rating: 4.7,
      progress: 78,
      type: "reading"
    },
    {
      id: 4,
      title: "Laws of Thermodynamics Explained",
      category: "Videos",
      subject: "Physics",
      topic: "Thermodynamics",
      desc: "A comprehensive introduction to the fundamental laws of thermodynamics.",
      time: "18 min",
      level: "Beginner",
      rating: 4.9,
      progress: 88,
      type: "video"
    },
    {
      id: 5,
      title: "Thermodynamics Problem Solving",
      category: "Reading Materials",
      subject: "Physics",
      topic: "Thermodynamics",
      desc: "Practice problems with detailed solutions for thermodynamics concepts.",
      time: "25 min",
      level: "Intermediate",
      rating: 4.5,
      progress: 82,
      type: "reading"
    },
    {
      id: 6,
      title: "Introduction to Functional Groups",
      category: "Videos",
      subject: "Chemistry",
      topic: "Organic Chemistry",
      desc: "Learn about common functional groups in organic chemistry.",
      time: "22 min",
      level: "Beginner",
      rating: 4.7,
      progress: 90,
      type: "video"
    },
    {
      id: 7,
      title: "Functional Groups Quiz",
      category: "Practice Quizzes",
      subject: "Chemistry",
      topic: "Organic Chemistry",
      desc: "Test your knowledge of organic chemistry functional groups.",
      time: "15 min",
      level: "Intermediate",
      rating: 4.6,
      progress: 66,
      type: "quiz"
    },
    {
      id: 8,
      title: "Organic Reactions Mechanisms",
      category: "Reading Materials",
      subject: "Chemistry",
      topic: "Organic Chemistry",
      desc: "Detailed guide to understanding organic reaction mechanisms.",
      time: "35 min",
      level: "Advanced",
      rating: 4.8,
      progress: 75,
      type: "reading"
    }
  ];
  const filteredResources = activeTab === 'All Resources' 
    ? resources 
    : resources.filter(item => item.category === activeTab);
  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-8 font-sans">
      <button onClick={onBack} className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition">
        <ArrowLeft size={18} /> <span className="text-sm font-medium">Back to Dashboard</span>
      </button>
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-blue-600 p-3 rounded-xl shadow-lg shadow-blue-500/20">
          <Zap size={28} fill="white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">AI-Powered Recommendations</h1>
          <p className="text-gray-400 text-sm">Personalized learning materials based on your performance</p>
        </div>
      </div>
      <div className="flex gap-8 border-b border-gray-800 mb-8 overflow-x-auto">
        {['All Resources', 'Videos', 'Practice Quizzes', 'Reading Materials'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 text-sm font-medium whitespace-nowrap transition-colors relative ${
              activeTab === tab ? 'text-blue-500' : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            {tab}
            {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500" />}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredResources.map(item => (
          <div key={item.id} className="bg-[#1e293b] border border-gray-800 p-6 rounded-xl hover:border-gray-600 transition-all">
            <div className="flex gap-4 mb-4">
              <div className="p-3 bg-gray-800 rounded-lg text-blue-400">
                {item.type === 'video' ? <Video size={20} /> : item.type === 'quiz' ? <CheckCircle size={20} /> : <FileText size={20} />}
              </div>
              <div>
                <h3 className="font-bold text-lg leading-tight mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500">{item.subject} • {item.topic}</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-6 line-clamp-2">{item.desc}</p>
            <div className="flex items-center gap-4 mb-6 text-xs">
              <span className="flex items-center gap-1 text-gray-400"><Clock size={14} /> {item.time}</span>
              <span className={`px-2 py-0.5 rounded border ${
                item.level === 'Beginner' ? 'bg-green-500/20 text-green-400 border-green-500/50' : 
                item.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50' : 
                'bg-red-500/20 text-red-400 border-red-500/50'
              }`}>{item.level}</span>
              <span className="flex items-center gap-1 text-yellow-500"><Star size={14} fill="currentColor" /> {item.rating}</span>
            </div>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-[10px] text-gray-500 uppercase">
                <span>Completion Rate</span>
                <span>{item.progress}%</span>
              </div>
              <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full transition-all duration-700" style={{ width: `${item.progress}%` }} />
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 py-3 rounded-lg font-bold text-sm transition-all shadow-lg shadow-blue-500/20">
              Start Learning
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsPage;