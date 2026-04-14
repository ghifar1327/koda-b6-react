import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStotage";
import http from "../lib/http";

const InvoiceContext = createContext(null);

export function InvoiceProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [histories, setHistories] = useState([])
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const [message, setMessage] = useState("")
  const [user] = useLocalStorage("user")

  const addCart = async (data) => {
    data = {...data, user_id: user?.id}
    // console.log(data)
    try{
      const res = await http(`/cart`,JSON.stringify(data), {method : "POST"})
      if (!res.success){
        throw new Error(res.message)
      }
      // console.log()
      setMessage(res.message)
      setIsSuccess(true)
      setIsError(false)
    }catch (err){
      // console.error(err)
      setMessage(err.message || "Someting is Wrong")
      setIsSuccess(false)
      setIsError(true)
      return err  
    }
    
  };

  async function checkout(data) {
    const req = {...data, id_vocher : null, payment_method: "cash", }
    try{
      const res = await http("/transactions",JSON.stringify(req), {method : "POST"})
      if (!res.success){
        throw new Error(res.message)
      }
      setMessage(res.message)
      setIsSuccess(true)
      setIsError(false)
      setCart([])
    }catch (err){
      setMessage(err.message || "Someting is Wrong")
      setIsSuccess(false)
      setIsError(true)
      return err
    }
  }


  async function setHistory(id){
    try {
      const res = await http(`/transactions/user/${id}`);
      setHistories(res.results);
    } catch (err) {
      console.error(err);
    }
  } 

  async function removeCart(id) {
    try{
      const res = await http(`/cart/${id}`, null,{method : "DELETE"})
      if (!res.success){
        throw new Error(res.message)
      }
      setMessage(res.message)
      setIsSuccess(true)
      setIsError(false)
      setCart(res.results)
    }catch (err){
      setMessage(err.message || "Someting is Wrong")
      setIsSuccess(false)
      setIsError(true)
      return err
    }
  }

  return (
    <InvoiceContext.Provider
      value={{ cart, setCart, addCart, checkout,removeCart, histories, setHistory,isError, isSuccess ,setIsSuccess, setIsError ,message}}
    >
      {children}
    </InvoiceContext.Provider>
  );
}
export default InvoiceContext;
