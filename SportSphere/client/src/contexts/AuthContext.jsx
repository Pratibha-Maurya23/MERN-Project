import { createContext, useContext, useState } from "react";
import { api } from "../lib/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);

  const signUp = async (email, password, full_name, role) => {
    await api.signup({ email, password, full_name, role });
  };

  const signIn = async (email, password) => {
    const res = await api.login({ email, password });
    const data = await res.json();

    localStorage.setItem("token", data.token);
    setUser(data.user);
    setProfile(data.user);
  };

  const signOut = async () => {
    localStorage.removeItem("token");
    setUser(null);
    setProfile(null);
  };

  return (
    <AuthContext.Provider value={{ user, profile, loading, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
