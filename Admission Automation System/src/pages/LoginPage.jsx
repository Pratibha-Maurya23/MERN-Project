import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage({ onLogin }) {
  const navigate = useNavigate();

  const [admissionNo, setAdmissionNo] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const students = JSON.parse(localStorage.getItem("students")) || [];

    const student = students.find(
      (s) => s.admissionNo === admissionNo && s.password === password
    );

    if (!student) {
      alert("Invalid credentials ❌");
      return;
    }

    // ✅ send student to App.jsx
    onLogin(student);
    navigate("/dashboard");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Student Login</h2>

      <input
        placeholder="Admission No"
        className="w-full p-2 border mb-3"
        value={admissionNo}
        onChange={(e) => setAdmissionNo(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 border mb-3"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleLogin}
        className="w-full bg-blue-700 text-white py-2 rounded"
      >
        Login
      </button>
    </div>
  );
}
