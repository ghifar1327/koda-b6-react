import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStotage";
import http from "../lib/http";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {


     const [user, setUser] = useLocalStorage("user", null);
     const [error, setError] = useState(false);
     const [isSuccess, setIsSuccess] = useState(false);
     const [message, setMessage] = useState("")
   
   
   async function login(form) {
       const data = {
       email: form.email,
       password: form.password,
     }
     
     try {
       const res = await http("/auth/login", JSON.stringify(data),{method: "POST"})
   
       if (!res.success) {
         throw new Error(res.message)
       }
       console.log(res)
       setUser(res)
       localStorage.setItem("token", res.token)
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

   async function updateProfile(data, id, file){
     try {
   
       const formData = new FormData();
   
       formData.append("full_name", data.full_name || "");
       formData.append("email", data.email || "");
       formData.append("address", data.address || "");
       formData.append("phone", data.phone || "");
   
       if (file) {
         formData.append("picture", file);
       }
   
       const res = await http(`/auth/${id}/update`, formData, {
         method: "PATCH",
         isForm: true
       })
   
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
        login,
        registerUser,
        logout,
        updateProfile,
        forgotPassword,
        resetPassword,
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
