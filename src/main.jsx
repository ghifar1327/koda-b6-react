import { createRoot } from "react-dom/client";
import "./global.css";
import { InvoiceProvider } from "./context/InvoiceContext.jsx";
import { FetchProvider } from "./context/FetchContex.jsx";
import Router from "./Router.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <FetchProvider>
      <InvoiceProvider>
        <Router/>
      </InvoiceProvider>
    </FetchProvider>
  // </StrictMode>,
);
