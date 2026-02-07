// import React, { createContext,  useEffect, useState } from "react";
// import useLocalStorage from "../hooks/useLocalStotage";
// import { useNavigate } from "react-router";

// const AuthContext = createContext(null);

// export function AuthProvider({ children }) {
//   const [error, setError] = useState(false)
//   const [IsSuccess, setIsSuccess]= useState(false)
//   const adminAccount = {
//     fullName: "ghifar",
//     email: "admin@mail.com",
//     role: "admin",
//     password: "1234A",
//   };
//   const navigate = useNavigate();
//   const [user, setuser] = useLocalStorage("user", null);
//   const [users, setUsers] = useLocalStorage("users", []);

//   useEffect(() => {
//     if (users.length === 0) {
//       setUsers([adminAccount]);
//     }
//   }, []);
//   function login(data) {
//     const user = users.find(
//       (user) => user.email === data.email && user.password === data.password,
//     );

//     if (user) {
//       if (user.role == "admin") {
//         setuser(user);
//         navigate("/admin");
//         return;
//       }
//       setuser(user);
//       setIsSuccess(true)
//       setError(false)
//       return;
//     }
//     if (!user) {
//       setError(!error)
//     }
//   }

//   function registerUser(data) {
//     const exists = users.some((user) => user.email === data.email);
//     if (exists) {
//       setError(true)
//       setIsSuccess(false)
//       return
//     }
//     setUsers((prev) => [...prev, data]);
//     setIsSuccess(true)
//     setError(false)
//   }
//   function logout() {
//     setuser(null);
//     navigate("/");
//   }

//   return (
//     <AuthContext.Provider value={{ user, login, registerUser, logout ,IsSuccess ,setIsSuccess,error, setError}}>
//       {children}
//     </AuthContext.Provider>
//   );
// }
// export default AuthContext;

import React, { createContext, useEffect, useState } from "react";
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
      return { success: false };
    }

    setUsers((prev) => [...prev, data]);
    setError(false);
    setIsSuccess(true);

    return { success: true };
  }

  function logout() {
    setUser(null);
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
