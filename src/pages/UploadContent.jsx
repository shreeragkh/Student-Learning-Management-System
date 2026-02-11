import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UploadContent() {
  const navigate = useNavigate();
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setFileName(file.name);
  };

  const handleUpload = () => {
    alert("Content Uploaded Successfully 🚀");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-8 text-white">

      <button
        onClick={() => navigate("/teacher/dashboard")}
        className="mb-6 text-blue-400 hover:text-blue-300"
      >
        ← Back to Dashboard
      </button>

      <div className="max-w-3xl mx-auto bg-slate-800 border border-slate-700 p-8 rounded-2xl shadow-xl space-y-6">

        <h1 className="text-3xl font-bold">Upload Learning Content</h1>

        <input
          type="file"
          onChange={handleFileChange}
          className="w-full p-3 bg-slate-700 rounded-lg border border-slate-600"
        />

        {fileName && (
          <p className="text-green-400">Selected File: {fileName}</p>
        )}

        <button
          onClick={handleUpload}
          className="bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-2 rounded-lg hover:scale-105 transition"
        >
          Upload
        </button>

      </div>
    </div>
  );
}
