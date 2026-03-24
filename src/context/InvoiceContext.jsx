import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStotage";
import http from "../lib/http";

const InvoiceContext = createContext(null);

export function InvoiceProvider({ children }) {
  const [cart, setCart] = useLocalStorage("cart", []);
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const [message, setMessage] = useState("")

  const addCart = (data) => {
    if (!data) return;

    setCart((prev) => {
      const index = prev.findIndex(
        (item) =>
          item.product_id === Number(data.product_id) &&
          item.size?.id === data.size?.id &&
          item.variant?.id === data.variant?.id
      );

      if (index !== -1) {
        const updated = [...prev];
        const existing = updated[index];

        const newQty = existing.quantity + data.quantity;

        const pricePerItem =
           data.subtotal / data.quantity;
         
         updated[index] = {
           ...existing,
           quantity: newQty,
           subtotal: pricePerItem * newQty,
         };

        return updated;
      }

      return [...prev, data];
    });
  };

  async function checkout(data) {
    const req = {...data, id_vocher : null, payment_method: "cash", }
    if (req.items.length === 0 ){
      setMessage("Cart Is Empty")
      setIsSuccess(false)
      setIsError(true)
      return
    }
    console.log(req)
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
      console.log(err)
      setMessage(err.message || "Someting is Wrong")
      setIsSuccess(false)
      setIsError(true)
    }
}


  function removeCart(id) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <InvoiceContext.Provider
      value={{ cart, setCart, addCart, checkout,removeCart ,isError, isSuccess ,setIsSuccess, setIsError ,message}}
    >
      {children}
    </InvoiceContext.Provider>
  );
}
export default InvoiceContext;
