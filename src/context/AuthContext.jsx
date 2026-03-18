import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStotage";
import { nanoid } from "nanoid";
import http from "../lib/http";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const adminAccount = {
    id: nanoid(10),
    image: "",
    fullName: "koda",
    email: "admin@mail.com",
    phone: "085591710309",
    address: "Depok",
    role: "admin",
    password: "1234A",
  };

  const [user, setUser] = useLocalStorage("user", null);
  const [users, setUsers] = useLocalStorage("users", []);
  const [error, setError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("")

  useEffect(() => {
    if (users.length === 0) {
      setUsers([adminAccount]);
    }
  }, []);

async function login(form) {
    const data = {
    address: form.address,
    email: form.email,
    full_name: form.fullName,
    password: form.password,
    phone: String(form.phone)
  }
  
  try {
    const res = await http("/auth/login", JSON.stringify(data),{method: "POST"})

    if (!res.success) {
      throw new Error(res.message)
    }
    // console.log(res.user)
    setUser(res.user)
    setError(false)
    setIsSuccess(true)
    setMessage(res.message)

  } catch (err) {
    setError(true)
    setIsSuccess(false)
    setMessage(err.message || "Someting is Wrong")
  }
  }

async function registerUser(form) {
  const data = {
    address: form.address,
    email: form.email,
    full_name: form.fullName,
    password: form.password,
    phone: String(form.phone)
  }
  
  try {
    const res = await http("/auth/register", JSON.stringify(data),{method: "POST"})

    if (!res.success) {
      throw new Error(res.message)
    }

    setError(false)
    setIsSuccess(true)
    setMessage(res.message)

  } catch (err) {
    setError(true)
    setIsSuccess(false)
    setMessage(err.message || "Someting is Wrong")
  }
}

// =============================================================================== reqeust FG

async function forgotPassword(email){
  try{
    const res = await http("/auth/forgot-password", JSON.stringify(email),{method: "POST"})
    if (!res.success) {
      throw new Error(res.message)
    }

    setError(false)
    setIsSuccess(true)
    setMessage(res.message)
  }catch(err){
    setError(true)
    setIsSuccess(false)
    setMessage(err.message || "Someting is Wrong")
  }
}


async function resetPassword(data) {
  const req = {
  code: Number(data.otp),
  email: data.email,
  new_password: data.password
}
console.log(req)
  try{
    const res = await http("/auth/reset-password", JSON.stringify(req),{method: "PATCH"})
    if (!res.success) {
      throw new Error(res.message)
    }

    setError(false)
    setIsSuccess(true)
    setMessage(res.message)
  }catch(err){
    setError(true)
    setIsSuccess(false)
    setMessage(err.message || "Someting is Wrong")
  }  
}

function updateProfile(updatedData) {
  if (!user) return { success: false, message: "User not logged in" };

  // update list users
  const updatedUsers = users.map((u) =>
    u.id === user.id ? { ...u, ...updatedData } : u
  );

  setUsers(updatedUsers);

  // update user yang sedang login
  const newUserData = { ...user, ...updatedData };
  setUser(newUserData);

  setIsSuccess(true);
  setError(false);

  return { success: true };
}

  function logout() {
    localStorage.removeItem("user");
    setUser(null);
    setIsSuccess(false);
    setError(false);
    return true
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        users,
        login,
        registerUser,
        logout,
        forgotPassword,
        resetPassword,
        updateProfile,
        error,
        setError,
        isSuccess,
        setIsSuccess,
        message
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
