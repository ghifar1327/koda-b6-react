import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import Router from "./Router.jsx";
import { InvoiceProvider } from "./context/InvoiceContext.jsx";
import { FetchProvider } from "./context/FetchContex.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FetchProvider>
      <InvoiceProvider>
        <Router />
      </InvoiceProvider>
    </FetchProvider>
  </StrictMode>,
);
