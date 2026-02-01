import React, { createContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStotage";
import { useNavigate } from "react-router";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const adminAccount = {
    fullName: "ghifar",
    email: "admin@mail.com",
    role: "admin",
    password: "1234A"
  };
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useLocalStorage("isLogin", null);
  const [users, setUsers] = useLocalStorage("users", []);

  useEffect(()=>{
    if(users.length === 0){
      setUsers([adminAccount])
    }
  },[])
  function login(data) {
    const user = users.find(
      (user) => user.email === data.email && user.password === data.password,
    );
    if (user) {
      if (user.role == "admin") {
        setIsLogin(user);
        navigate("/admin");
        return;
      }
      setIsLogin(user);
      navigate("/");
      return;
    }
  }

  function registerUser(data) {
    const exists = users.some((user) => user.email === data.email);
    if (exists) return false;
    setUsers((prev) => [...prev, data]);
    navigate("/login");
  }
  function logout() {
    setIsLogin(null);
  }

  return (
    <AuthContext.Provider value={{ isLogin, login, registerUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
