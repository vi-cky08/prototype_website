import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { getCurrentUser } from "../api/authApi";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const loadUser = async () => {
      try {
        const response = await getCurrentUser();

        setUser(response.user);

      } catch {
        setUser(null);

      } finally {
        setLoading(false);
      }
    };

    loadUser();

  }, []);

  return (
    <AuthContext.Provider
      value={{ user, setUser, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {

  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}