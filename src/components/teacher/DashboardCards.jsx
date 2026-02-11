export default function DashboardCards() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-8">
      <div className="bg-slate-800 border border-slate-700 p-6 rounded-xl">
        <h3 className="text-slate-400">Total Students</h3>
        <p className="text-2xl font-bold text-blue-400">45</p>
      </div>

      <div className="bg-slate-800 border border-slate-700 p-6 rounded-xl">
        <h3 className="text-slate-400">Quizzes Created</h3>
        <p className="text-2xl font-bold text-cyan-400">12</p>
      </div>

      <div className="bg-slate-800 border border-slate-700 p-6 rounded-xl">
        <h3 className="text-slate-400">Content Uploaded</h3>
        <p className="text-2xl font-bold text-purple-400">8</p>
      </div>
    </div>
  );
}
