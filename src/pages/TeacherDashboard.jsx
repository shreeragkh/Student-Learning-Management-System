import { useNavigate } from "react-router-dom";
import DashboardCards from "../components/teacher/DashboardCards";
import PendingQuizzes from "../components/teacher/PendingQuizzes";
import ActivityTable from "../components/teacher/ActivityTable";

export default function TeacherDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Optional: clear any session/localStorage if needed
    // localStorage.clear();
    navigate("/"); // Redirect to Landing.jsx
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-8 text-white">
      
      {/* Header */}
      <div className="relative bg-slate-800 border border-slate-700 rounded-2xl p-8 mb-8 shadow-xl">
        <h1 className="text-3xl font-bold mb-2">
          Teacher Dashboard
        </h1>
        <p className="text-slate-400">
          Manage courses, generate quizzes and track student performance
        </p>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="absolute top-4 right-4 bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>

      {/* Action Buttons */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <button
          onClick={() => navigate("/teacher/create-quiz")}
          className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 rounded-xl font-semibold hover:scale-105 transition shadow-lg"
        >
          Create Quiz
        </button>

        <button
          onClick={() => navigate("/teacher/upload")}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 rounded-xl font-semibold hover:scale-105 transition shadow-lg"
        >
          Upload Content
        </button>

        <button
          onClick={() => navigate("/teacher/analytics")}
          className="bg-gradient-to-r from-cyan-600 to-blue-600 p-6 rounded-xl font-semibold hover:scale-105 transition shadow-lg"
        >
          Analytics
        </button>
      </div>

      <DashboardCards />
      <PendingQuizzes />
      <ActivityTable />
    </div>
  );
}
