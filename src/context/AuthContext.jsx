import React, { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStotage";
import { useNavigate } from "react-router";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useLocalStorage("login", null);
  const [users, setUsers] = useLocalStorage("users", [
    {
      fullName: "ghifar",
      email: "admin@mail.com",
      role: "admin",
    },
  ]);

  function login(data) {
    const user = users.find(
      (user) => user.email === data.email && user.password === data.password,
    );
    if (user) {
      if (user.role == "admin") {
        setIsLogin(user.fullName);
        navigate("/admin");
        return;
      }
      setIsLogin(user.fullName);
      navigate("/");
      return;
    }
  }

  function register(data) {
    const exists = users.some((user) => user.email === data.email);
    if (exists) return false;
    setUsers([...users, data]);
  }
  function logout() {
    setIsLogin(null)
  }

  return (
    <AuthContext.Provider value={{ isLogin, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
