import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Home } from "./pages/Home";
import { Events } from "./pages/Events";
import { PlayerProfile } from "./pages/PlayerProfile";
import { AdminDashboard } from "./pages/AdminDashboard";
import { AdminEvents } from "./pages/AdminEvents";
import { AdminEnrollments } from "./pages/AdminEnrollments";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";

const AppContent = () => {
  const { user, profile } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/auth/login" element={user ? <Navigate to="/" replace /> : <Login />} />
          <Route path="/auth/signup" element={user ? <Navigate to="/" replace /> : <Signup />} />

          <Route
            path="/"
            element={
              user && profile ? (
                profile.role === "organizer" ? (
                  <Navigate to="/admin/dashboard" replace />
                ) : (
                  <Home />
                )
              ) : (
                <Home />
              )
            }
          />

          <Route
            path="/events"
            element={
              <ProtectedRoute>
                <Events />
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute requireRole="player">
                <PlayerProfile />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute requireRole="organizer">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/events"
            element={
              <ProtectedRoute requireRole="organizer">
                <AdminEvents />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/enrollments"
            element={
              <ProtectedRoute requireRole="organizer">
                <AdminEnrollments />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  );
}
