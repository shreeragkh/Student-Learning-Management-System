import { useState } from "react";

export default function PendingQuizzes() {
  const [message, setMessage] = useState("");

  const quizzes = [
    "React Fundamentals & Component Architecture",
    "Node.js & Express Backend Development",
    "Advance Frontend Concept",
    "MongoDB Quiz",
  ];

  const handleReview = (title) => {
    setMessage(`⚠ Reviewing "${title}" feature coming soon!`);
    
    // Auto remove message after 3 seconds
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <div className="bg-slate-800 p-6 rounded-2xl shadow-lg space-y-6">
      
      <h2 className="text-xl font-semibold">
        Pending AI Generated Quizzes
      </h2>

      {/* Temporary Message */}
      {message && (
        <div className="bg-yellow-500/20 border border-yellow-400 text-yellow-300 px-4 py-2 rounded-lg">
          {message}
        </div>
      )}

      {quizzes.map((quiz, index) => (
        <QuizItem
          key={index}
          title={quiz}
          onReview={() => handleReview(quiz)}
        />
      ))}
    </div>
  );
}

function QuizItem({ title }) {
  return (
    <div className="flex justify-between items-center bg-slate-800 border border-slate-700 p-4 rounded-xl mb-4">
      <p className="text-slate-300">{title}</p>

      <button
        onClick={() => alert("Review feature coming soon ")}
        className="bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-2 rounded-lg hover:scale-105 transition"
      >
        Review
      </button>
    </div>
  );
}

