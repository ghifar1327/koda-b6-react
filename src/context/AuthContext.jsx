import React, { createContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStotage";
import { useNavigate } from "react-router";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const adminAccount = {
    fullName: "ghifar",
    email: "admin@mail.com",
    role: "admin",
    password: "1234A",
  };
  const navigate = useNavigate();
  const [user, setuser] = useLocalStorage("user", null);
  const [users, setUsers] = useLocalStorage("users", []);

  useEffect(() => {
    if (users.length === 0) {
      setUsers([adminAccount]);
    }
  }, []);
  function login(data) {
    const user = users.find(
      (user) => user.email === data.email && user.password === data.password,
    );

    if (user) {
      if (user.role == "admin") {
        setuser(user);
        navigate("/admin");
        return;
      }
      setuser(user);
      navigate("/");
      return;
    }
    if(!user){
      alert("email salah atau belum terdaftar")
    }
  }

  function registerUser(data) {
    const exists = users.some((user) => user.email === data.email);
    if (exists) {
      alert("email sudah terdaftar")
      return false
    };
    setUsers((prev) => [...prev, data]);
    navigate("/login");
  }
  function logout() {
    setuser(null);
    navigate("/")
  }

  return (
    <AuthContext.Provider value={{ user, login, registerUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContext