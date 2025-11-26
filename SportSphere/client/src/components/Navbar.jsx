import { Link, useNavigate } from 'react-router-dom';
import { Trophy, LogOut, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const { user, profile, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth/login');
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white shadow-md sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Trophy className="h-8 w-8 text-orange-500" />
            <span className="text-xl font-bold text-gray-800">Krida Kaushal</span>
          </Link>

          <div className="flex items-center space-x-6">
            {user && profile ? (
              <>
                {profile.role === 'player' ? (
                  <>
                    <Link
                      to="/"
                      className="text-gray-700 hover:text-orange-500 transition"
                    >
                      Home
                    </Link>
                    <Link
                      to="/events"
                      className="text-gray-700 hover:text-orange-500 transition"
                    >
                      Events
                    </Link>
                    <Link
                      to="/profile"
                      className="text-gray-700 hover:text-orange-500 transition"
                    >
                      Profile
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to="/admin/dashboard"
                      className="text-gray-700 hover:text-orange-500 transition"
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/admin/events"
                      className="text-gray-700 hover:text-orange-500 transition"
                    >
                      Events
                    </Link>
                    <Link
                      to="/admin/enrollments"
                      className="text-gray-700 hover:text-orange-500 transition"
                    >
                      Enrollments
                    </Link>
                  </>
                )}
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <User className="h-5 w-5 text-gray-600" />
                    <span className="text-sm text-gray-700">{profile.full_name}</span>
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition"
                  >
                    <LogOut className="h-5 w-5" />
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/auth/login"
                  className="text-gray-700 hover:text-orange-500 transition"
                >
                  Login
                </Link>
                <Link
                  to="/auth/signup"
                  className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
