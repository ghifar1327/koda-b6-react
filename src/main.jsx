import { createRoot } from "react-dom/client";
import "./global.css";
import { InvoiceProvider } from "./context/InvoiceContext.jsx";
import { FetchProvider } from "./context/FetchContex.jsx";
import Router from "./Router.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <AuthProvider>
    <FetchProvider>
      <InvoiceProvider>
        <Router/>
      </InvoiceProvider>
    </FetchProvider>
  </AuthProvider>
  // </StrictMode>,
);
