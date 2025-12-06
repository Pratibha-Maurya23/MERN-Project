import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import UserDashboard from "./pages/UserDashboard";
import AdmissionFormPage from "./pages/AdmissionFormPage";

function App() {
  const [currentStudent, setCurrentStudent] = useState(
    JSON.parse(localStorage.getItem("activeStudent"))
  );

  // called from LoginPage
const handleLogin = (student) => {
  localStorage.setItem("activeStudent", JSON.stringify(student));
  setCurrentStudent(student);
};


  const handleLogout = () => {
    localStorage.removeItem("activeStudent");
    setCurrentStudent(null);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        
        {/* Header */}
        <Header
          student={currentStudent}
          onLogout={handleLogout}
        />

        <main className="flex-grow">
          <Routes>
            {/* Public */}
            <Route path="/" element={<LandingPage />} />

            <Route
              path="/login"
              element={
                <LoginPage onLogin={handleLogin} />
              }
            />

            <Route
              path="/admission"
              element={<AdmissionFormPage />}
            />

            {/* Protected Dashboard */}
            <Route
              path="/dashboard"
              element={
                currentStudent ? (
                  <UserDashboard student={currentStudent} />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
