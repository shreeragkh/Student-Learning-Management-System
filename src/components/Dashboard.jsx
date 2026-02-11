import React from 'react';
import { 
  BookOpen, Bell, LogOut, Target, 
  Award, TrendingUp, Clock, ChevronRight 
} from 'lucide-react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell 
} from 'recharts';

const subjectData = [
  { name: 'Math', value: 78, color: '#3b82f6' },
  { name: 'Physics', value: 72, color: '#a855f7' },
  { name: 'Chemistry', value: 68, color: '#ec4899' },
  { name: 'Biology', value: 85, color: '#10b981' },
];

const Dashboard = ({ onNavigate }) => {
  const weeklyData = [
    { day: 'Mon', progress: 65 }, { day: 'Tue', progress: 72 },
    { day: 'Wed', progress: 70 }, { day: 'Thu', progress: 75 },
    { day: 'Fri', progress: 82 }, { day: 'Sat', progress: 78 },
    { day: 'Sun', progress: 88 },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-6 font-sans flex justify-center">
      <div className="w-full max-w-[1000px]">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg"><BookOpen size={20} /></div>
            <div>
              <h1 className="text-lg font-bold">Student Portal</h1>
              <p className="text-gray-400 text-xs">Welcome back, Alex Johnson</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Bell size={18} className="text-gray-400" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-[8px] px-1 rounded-full">2</span>
            </div>
            <button className="flex items-center gap-1 text-gray-400 text-sm"><LogOut size={16} /> Logout</button>
          </div>
        </header>

        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <StatCard label="Overall Progress" value="76%" icon={<TrendingUp size={18}/>} color="bg-blue-500" />
          <StatCard label="Quizzes Completed" value="12" icon={<Award size={18}/>} color="bg-purple-600" />
          <StatCard label="Average Score" value="85%" icon={<Target size={18}/>} color="bg-pink-500" />
          <StatCard label="Pending Quizzes" value="3" icon={<Clock size={18}/>} color="bg-red-500" />
        </div>

        {/* Middle Section: Progress & Recommendations */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="col-span-2 space-y-6">
            <div className="bg-[#1e293b] p-6 rounded-xl border border-gray-800">
              <h3 className="text-sm font-semibold mb-6">Your Progress This Week</h3>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                    <XAxis dataKey="day" stroke="#64748b" fontSize={10} />
                    <YAxis stroke="#64748b" fontSize={10} />
                    <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '8px' }} />
                    <Line type="monotone" dataKey="progress" stroke="#3b82f6" strokeWidth={2} dot={{fill: '#3b82f6', r: 4}} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-[#1e293b] p-6 rounded-xl border border-gray-800">
              <div className="flex justify-between mb-4">
                <h3 className="text-sm font-semibold">Recent Quizzes</h3>
                <button className="text-blue-400 text-xs">View All</button>
              </div>
              <div className="space-y-3">
                <QuizItem title="Mathematics - Algebra" date="2026-02-06" score="85" color="text-green-400" />
                <QuizItem title="Physics - Mechanics" date="2026-02-05" score="72" color="text-yellow-400" />
                <QuizItem title="Chemistry - Organic" date="2026-02-04" score="68" color="text-pink-400" />
                <QuizItem title="Biology - Cell Structure" date="2026-02-03" score="90" color="text-green-400" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#1e293b] p-6 rounded-xl border border-gray-800">
              <h3 className="text-sm font-semibold mb-4">Topics to Improve</h3>
              <div className="space-y-4 mb-6">
                <ProgressItem label="Quadratic Equations" sub="Mathematics" val={45} color="bg-red-500" />
                <ProgressItem label="Thermodynamics" sub="Physics" val={52} color="bg-orange-500" />
                <ProgressItem label="Organic Chemistry" sub="Chemistry" val={58} color="bg-yellow-500" />
              </div>
              <button onClick={onNavigate} className="w-full bg-blue-600 py-2 rounded-lg text-xs font-bold hover:bg-blue-500 transition">Get Personalized Recommendations</button>
            </div>

            <div className="bg-[#1e293b] p-6 rounded-xl border border-blue-900/50 border-2">
              <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
                <Target size={16} className="text-blue-400" /> AI Recommendations
              </h3>
              <div className="space-y-3 mb-6">
                <RecommendItem title="Understanding Quadratic Equations" type="Video" time="15 min" />
                <RecommendItem title="Quadratic Equations Practice Set" type="Practice Quiz" time="20 min" />
                <RecommendItem title="Laws of Thermodynamics Explained" type="PDF" time="10 min" />
              </div>
              <button onClick={onNavigate} className="w-full bg-blue-600 py-2 rounded-lg text-xs font-bold hover:bg-blue-500 transition">View All Recommendations</button>
            </div>
          </div>
        </div>

        {/* Bottom Section: Pie Chart */}
        <div className="bg-[#1e293b] p-6 rounded-xl border border-gray-800">
          <h3 className="text-sm font-semibold mb-4">Performance by Subject</h3>
          <div className="h-[250px] w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={subjectData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  stroke="none"
                  label={({ name, value, x, y, fill }) => (
                    <text x={x} y={y} fill={fill} textAnchor={x > 500 ? 'start' : 'end'} dominantBaseline="central" className="text-[10px] font-bold">
                      {`${name}: ${value}%`}
                    </text>
                  )}
                >
                  {subjectData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sub-components
const StatCard = ({ label, value, icon, color }) => (
  <div className={`${color} p-4 rounded-xl flex items-center justify-between`}>
    <div>
      <p className="text-[10px] text-white/70 uppercase font-bold">{label}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
    <div className="text-white/50">{icon}</div>
  </div>
);

const QuizItem = ({ title, date, score, color }) => (
  <div className="flex justify-between items-center bg-[#0f172a] p-3 rounded-lg border border-gray-800/50">
    <div>
      <p className="text-xs font-bold">{title}</p>
      <p className="text-[10px] text-gray-500">{date}</p>
    </div>
    <div className="text-right">
      <p className={`text-sm font-bold ${color}`}>{score}%</p>
      <p className="text-[8px] text-gray-500">out of 100</p>
    </div>
  </div>
);

const ProgressItem = ({ label, sub, val, color }) => (
  <div>
    <div className="flex justify-between text-[10px] mb-1">
      <span>{label} <span className="text-gray-500 block text-[8px]">{sub}</span></span>
      <span>{val}%</span>
    </div>
    <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
      <div className={`${color} h-full`} style={{ width: `${val}%` }} />
    </div>
  </div>
);

const RecommendItem = ({ title, type, time }) => (
  <div className="bg-[#0f172a] p-3 rounded-lg flex justify-between items-center group cursor-pointer border border-transparent hover:border-blue-500/50 transition">
    <div className="overflow-hidden">
      <p className="text-xs font-medium truncate">{title}</p>
      <p className="text-[9px] text-gray-500">{type} • {time}</p>
    </div>
    <ChevronRight size={14} className="text-gray-500" />
  </div>
);

export default Dashboard;