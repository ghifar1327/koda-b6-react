import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import Router from "./Router.jsx";
import InvoiceProvider from "./context/InvoiceContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <InvoiceProvider>
      <Router />
    </InvoiceProvider>
  </StrictMode>,
);
