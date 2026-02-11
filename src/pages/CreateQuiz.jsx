import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CreateQuiz() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([
    { question: "", options: ["", "", "", ""], correct: "" }
  ]);

  // Add new question card
  const addQuestion = () => {
    setQuestions([...questions, { question: "", options: ["", "", "", ""], correct: "" }]);
  };

  // Delete question card
  const deleteQuestion = (index) => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1);
    setQuestions(newQuestions);
  };

  // Update question, options, or correct answer
  const updateQuestion = (index, field, value, optionIndex = null) => {
    const newQuestions = [...questions];
    if (field === "question" || field === "correct") {
      newQuestions[index][field] = value;
    } else if (field === "option") {
      newQuestions[index].options[optionIndex] = value;
    }
    setQuestions(newQuestions);
  };

  const handleGenerate = () => {
    console.log("Quiz Data:", questions);
    alert("Quiz Generated! Check console for data 🤖");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-8 text-white">

      <button
        onClick={() => navigate("/teacher/dashboard")}
        className="mb-6 text-blue-400 hover:text-blue-300"
      >
        ← Back to Dashboard
      </button>

      <div className="max-w-4xl mx-auto space-y-6">

        {questions.map((q, idx) => (
          <div key={idx} className="relative bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-xl space-y-4">
            <h2 className="text-xl font-semibold">Question {idx + 1}</h2>

            {/* Delete button for all except first */}
            {idx !== 0 && (
              <button
                onClick={() => deleteQuestion(idx)}
                className="absolute top-4 right-4 bg-red-600 px-3 py-1 rounded hover:bg-red-700 transition text-sm"
              >
                Delete
              </button>
            )}

            {/* Question Input */}
            <input
              type="text"
              placeholder="Write your question here"
              value={q.question}
              onChange={(e) => updateQuestion(idx, "question", e.target.value)}
              className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg"
            />

            {/* Options */}
            <div className="grid md:grid-cols-2 gap-4">
              {q.options.map((opt, i) => (
                <input
                  key={i}
                  type="text"
                  placeholder={`Option ${i + 1}`}
                  value={opt}
                  onChange={(e) => updateQuestion(idx, "option", e.target.value, i)}
                  className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg"
                />
              ))}
            </div>

            {/* Correct Answer */}
            <input
              type="text"
              placeholder="Correct Answer (exact text from options)"
              value={q.correct}
              onChange={(e) => updateQuestion(idx, "correct", e.target.value)}
              className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg"
            />
          </div>
        ))}

        {/* Add Question & Generate Quiz Buttons */}
        <div className="flex gap-4">
          <button
            onClick={addQuestion}
            className="bg-blue-600 px-6 py-2 rounded-lg hover:scale-105 transition shadow-lg"
          >
            + Add Question
          </button>

          <button
            onClick={handleGenerate}
            className="bg-purple-600 px-6 py-2 rounded-lg hover:scale-105 transition shadow-lg"
          >
            Generate Quiz
          </button>
        </div>

      </div>
    </div>
  );
}
