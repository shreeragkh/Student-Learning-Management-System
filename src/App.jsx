import Landing from "./components/Landing";
import { LoginPage } from "./components/Login";
import { RegisterPage } from "./components/RegisterPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TeacherDashboard from "./pages/TeacherDashboard";
import CreateQuiz from "./pages/CreateQuiz";
import UploadContent from "./pages/UploadContent";
import Analytics from "./pages/Analytics";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Teacher Routes */}
        <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
        <Route path="/teacher/create-quiz" element={<CreateQuiz />} />
        <Route path="/teacher/upload" element={<UploadContent />} />
        <Route path="/teacher/analytics" element={<Analytics />} />
      </Routes>
    </Router>
  );
}

export default App;
