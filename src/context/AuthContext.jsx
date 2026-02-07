import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStotage";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const adminAccount = {
    fullName: "ghifar",
    email: "admin@mail.com",
    role: "admin",
    password: "1234A",
  };

  const [user, setUser] = useLocalStorage("user", null);
  const [users, setUsers] = useLocalStorage("users", []);
  const [error, setError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (users.length === 0) {
      setUsers([adminAccount]);
    }
  }, []);

  function login(data) {
    const foundUser = users.find(
      (u) => u.email === data.email && u.password === data.password
    );

    if (!foundUser) {
      setError(true);
      setIsSuccess(false);
      return { success: false };
    }

    setUser(foundUser);
    setError(false);
    setIsSuccess(true);

    return {
      success: true,
      role: foundUser.role,
    };
  }

  function registerUser(data) {
    const exists = users.some((u) => u.email === data.email);

    if (exists) {
      setError(true);
      setIsSuccess(false);
      return
    }

    setUsers((prev) => [...prev, data]);
    setError(false);
    setIsSuccess(true);

    return
  }

  function logout() {
  setUser(null);
  setIsSuccess(false);
  setError(false);
  return true
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        registerUser,
        logout,
        error,
        setError,
        isSuccess,
        setIsSuccess,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
