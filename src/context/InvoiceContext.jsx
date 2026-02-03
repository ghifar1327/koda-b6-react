import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStotage";

 const InvoiceContext = createContext(null);

export function InvoiceProvider({ children }) {
  const [user, setuser] = useLocalStorage("user", null);
  const [_ , setUsers] = useLocalStorage("users", []);
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
  // validasi data kosong atau user belum login
  if (!data || !user) return;

  // deklarasi variabel sebagai gelas kosong untuk membarui data
  let updatedUser = null;

  setUsers((prev) => {
    // cari indeks pengguna saat ini 
    const index = prev.findIndex((item) => item.id === user.id);
    if (index === -1) return prev;

    // variable salinan/copy dari state users
    const updated = [...prev];

    updatedUser = {
      // salin semua properti user berdasarkan index / masukan air kedalam gelas kosong
      ...updated[index],
      // Perbarui properti 'history'.
      history: [...updated[index].history, data]
    };

    // ganti properti lama dangan property baru
    updated[index] = updatedUser;

    // kembalikan data ke state users
    return updated;
  });

  setuser((prev) => updatedUser ? { ...prev, history: updatedUser.history } : prev );

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