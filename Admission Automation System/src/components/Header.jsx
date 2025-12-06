import { GraduationCap } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Header({ student, onLogout }) {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">
              ABC College
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">

            {/* PUBLIC */}
            {!student && (
              <>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/login">Login</NavLink>
                <Link
                  to="/admission"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                >
                  Apply Now
                </Link>
              </>
            )}

            {/* AFTER LOGIN */}
            {student && (
              <>
                <NavLink to="/dashboard">Dashboard</NavLink>

                <button
                  onClick={() => {
                    onLogout();
                    navigate("/");
                  }}
                  className="text-red-600 font-medium"
                >
                  Logout
                </button>
              </>
            )}

          </nav>
        </div>
      </div>
    </header>
  );
}
