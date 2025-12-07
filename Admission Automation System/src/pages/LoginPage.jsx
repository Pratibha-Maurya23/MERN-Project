import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage({ onLogin }) {
  const navigate = useNavigate();

  const [admissionNo, setAdmissionNo] = useState("");
  const [password, setPassword] = useState("");
  
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");

 const handleLogin = async () => {
  try {
    const res = await fetch("http://localhost:8000/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  credentials: "include",
  body: JSON.stringify({ admissionNo, password }),
});

    if (!res.ok) {
      alert("Invalid credentials ❌");
      return;
    }

    const student = await res.json();
    onLogin(student);
    navigate("/dashboard");
  } catch (err) {
    alert("Server error ❌");
  }
};

  const handleForgotPassword = async () => {
    try {
      const res = await fetch("http://localhost:8000/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ admissionNo, newPassword }),
      });

      if (!res.ok) {
        alert("Failed to reset password ❌");
        return;
      }

      alert("Password reset successfully ✅");
      setShowForgotPassword(false);
      setNewPassword("");
    } catch (err) {
      alert("Server error ❌");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded">
      {!showForgotPassword && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
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
        className="w-full bg-blue-700 text-white py-2 rounded mb-3"
      >
        Login
      </button>

      <button
        onClick={() => setShowForgotPassword(!showForgotPassword)}
        className="w-1/2 text-blue-700 underline mb-2"
      >
        Forgot Password?
      </button>
         <Link
  to="/admission"
  className="w-1/2 text-blue-700 underline mt-6"
>
  New Admission
</Link>
      </div>
)}
      {showForgotPassword && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h2 className="text-xl font-bold mb-4">Reset Password</h2>
          <input
        placeholder="Admission No"
        className="w-full p-2 border mb-3"
        value={admissionNo}
        onChange={(e) => setAdmissionNo(e.target.value)}
      />

          <input
            type="password"
            placeholder="New Password"
            className="w-full p-2 border mb-3"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <button
            onClick={handleForgotPassword}
            className="w-1/2 bg-blue-700 text-white py-2 rounded"
          >
            Reset Password
          </button>
         <Link
  to="/admission"
  className="w-1/2 bg-blue-700 text-white py-3 px-8 rounded ml-2"
>
  New Admission
</Link>
        </div>
      )}
      
    </div>
  );
}
