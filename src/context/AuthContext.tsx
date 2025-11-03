import React, { createContext, useContext, useState, type ReactNode } from "react";
import toast from "react-hot-toast";

type UserRole = "ADMIN" | "VIEWER";

interface User {
  email: string;
  role: UserRole;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  updateUser: (updated: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem("auth");
    return stored ? JSON.parse(stored) as User : null;
  });

  const login = (email: string, password: string) => {
    if (email === "admin@example.com" && password === "password123") {
      const tempUser: User = { email, role: "ADMIN" };
      setUser(tempUser);
      localStorage.setItem("auth", JSON.stringify(tempUser));
      return true;
    }

    if (email === "viewer@example.com" && password === "password123") {
      const tempUser: User = { email, role: "VIEWER" };
      setUser(tempUser);
      localStorage.setItem("auth", JSON.stringify(tempUser));
      return true;
    }

    return false;
  };

  const updateUser = (updated: Partial<User>) => {
    if (!user) return;
    const newUser = { ...user, ...updated };
    setUser(newUser);
    localStorage.setItem("auth", JSON.stringify(newUser));
  };

  const logout = () => {
    toast.success("logout successful")
    setUser(null);
    localStorage.removeItem("auth");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
