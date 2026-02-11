import { useNavigate } from "react-router-dom";

export default function Analytics() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-8 text-white">

      <button
        onClick={() => navigate("/teacher/dashboard")}
        className="mb-6 text-blue-400 hover:text-blue-300"
      >
        ← Back to Dashboard
      </button>

      <div className="space-y-8">

        {/* Subject Performance */}
        <div className="bg-slate-800 border border-slate-700 p-8 rounded-2xl shadow-xl">
          <h1 className="text-3xl font-bold mb-6">Subject Performance</h1>
          <div className="space-y-4">
            <div className="bg-slate-700 p-4 rounded-lg">
              <p>React Quiz - 85%</p>
              <div className="w-full bg-slate-600 rounded-full h-3 mt-2">
                <div className="bg-blue-500 h-3 rounded-full w-[85%]"></div>
              </div>
            </div>

            <div className="bg-slate-700 p-4 rounded-lg">
              <p>Node Quiz - 72%</p>
              <div className="w-full bg-slate-600 rounded-full h-3 mt-2">
                <div className="bg-cyan-500 h-3 rounded-full w-[72%]"></div>
              </div>
            </div>

            <div className="bg-slate-700 p-4 rounded-lg">
              <p>JavaScript Quiz - 90%</p>
              <div className="w-full bg-slate-600 rounded-full h-3 mt-2">
                <div className="bg-purple-500 h-3 rounded-full w-[90%]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Student Performance */}
        <div className="bg-slate-800 border border-slate-700 p-8 rounded-2xl shadow-xl">
          <h1 className="text-3xl font-bold mb-6">Student Performance</h1>
          <div className="space-y-4">
            <div className="bg-slate-700 p-4 rounded-lg">
              <p>John Doe - 88%</p>
              <div className="w-full bg-slate-600 rounded-full h-3 mt-2">
                <div className="bg-green-500 h-3 rounded-full w-[88%]"></div>
              </div>
            </div>

            <div className="bg-slate-700 p-4 rounded-lg">
              <p>Jane Smith - 75%</p>
              <div className="w-full bg-slate-600 rounded-full h-3 mt-2">
                <div className="bg-yellow-500 h-3 rounded-full w-[75%]"></div>
              </div>
            </div>

            <div className="bg-slate-700 p-4 rounded-lg">
              <p>Alex Johnson - 92%</p>
              <div className="w-full bg-slate-600 rounded-full h-3 mt-2">
                <div className="bg-pink-500 h-3 rounded-full w-[92%]"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
