import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStotage";

export const InvoiceContext = createContext(null);

export default function InvoiceProvider({ children }) {
  // const [invoice , setInvoice]= useState(null)
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
  function removeCart(id) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <InvoiceContext.Provider value={{ cart, addCart, removeCart }}>
      {children}
    </InvoiceContext.Provider>
  );
}
