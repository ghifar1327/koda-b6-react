import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStotage";

 const InvoiceContext = createContext(null);

export function InvoiceProvider({ children }) {
  // const [history , setHistory]= useState([])
  const [user, setuser] = useLocalStorage("user", null);
  const [_ , setUsers] = useLocalStorage("users", []);
  // console.log(user)
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

  function setHistory(data) {
    if (!data || !user) return;
    let updatedUser = null;
    setUsers((prev) => {
      const index = prev.findIndex((item) => item.email === user.email);
      if (index === -1) return prev;
      const updated = [...prev];
      updatedUser = {
        ...updated[index],
        history: updated[index].history
          ? [...updated[index].history, data]
          : [data],
      };
      updated[index] = updatedUser;
      return updated;
    });
    setuser((prev) =>
      updatedUser ? { ...prev, history: updatedUser.history } : prev,
    );
    setCart([]);
  }
  function removeCart(id) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <InvoiceContext.Provider
      value={{ cart, setCart, addCart, setHistory, removeCart }}
    >
      {children}
    </InvoiceContext.Provider>
  );
}
export default InvoiceContext