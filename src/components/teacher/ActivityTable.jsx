export default function ActivityTable() {
  const data = [
    { name: "Arjun Goel", quiz: "React Quiz", score: "72%", date: "2026-02-06" },
    { name: "Apoorv", quiz: "Backend Quiz", score: "85%", date: "2026-02-06" },
    { name: "Naman Agarwal", quiz: "Database Quiz", score: "68%", date: "2026-02-05" },
    { name: "Ankush Sharma", quiz: "Database Quiz", score: "91%", date: "2026-02-05" },
  ];

  return (
    <div className="bg-slate-900 rounded-2xl p-6">
      <h2 className="text-white font-semibold mb-4">Recent Student Activity</h2>

      <table className="w-full text-sm">
        <thead className="text-slate-400 border-b border-slate-700">
          <tr>
            <th className="text-left py-2">Student</th>
            <th className="text-left py-2">Quiz</th>
            <th className="text-left py-2">Score</th>
            <th className="text-left py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i} className="border-b border-slate-800">
              <td className="py-3 text-white">{d.name}</td>
              <td className="py-3 text-slate-300">{d.quiz}</td>
              <td className="py-3 text-white">{d.score}</td>
              <td className="py-3 text-slate-400">{d.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
