import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStotage";

export const InvoiceContext = createContext(null);

export default function InvoiceProvider({ children }) {
    // const [history , setHistory]= useState([])
    const [isLogin , setIsLogin]= useLocalStorage("isLogin" , null)
    const [users, setUsers] = useLocalStorage("users",[])
    // console.log(isLogin)
    // console.log(users) 
    const [cart, setCart] = useLocalStorage("cart", []);

    function addCart(data) {
      if (!data) return;
  
      setCart((prev) => {
        const index = prev.findIndex(
          (item) =>
            item.productName === data.productName &&
            item.size === data.size &&
            item.hotIce === data.hotIce,
        );
        if (index !== -1) {
          const updated = [...prev];
          const existing = updated[index];
  
          const newQty = existing.quantity + data.quantity;
          updated[index] = {
            ...existing,
            quantity: newQty,
            total: newQty * existing.price,
          };
          return updated;
        }
        return [...prev, data];
      });
      }
    
      function setHistory(data){
          setUsers((prev)=>{
            const index = prev.findIndex((item)=> item.email === isLogin.email)
            const updated = [...prev]
            const user = updated[index]
            updated[index] = {
                ...user,
                history: user.history ? [...user.history , data] : [data] 
            }
            return updated
        })
        setIsLogin(prev=> {
            const index = users.findIndex((item)=> item.email === prev.email)
            const updated = {...prev, history: users[index].history} 
            return updated
        })
      }
    //   setHistory()
      function removeCart(id) {
        setCart((prev) => prev.filter((item) => item.id !== id));
      }

  return (
    <InvoiceContext.Provider value={{ cart, addCart, setHistory ,removeCart }}>
      {children}
    </InvoiceContext.Provider>
  );
}
