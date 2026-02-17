import { createRoot } from "react-dom/client";
import "./global.css";
import { InvoiceProvider } from "./context/InvoiceContext.jsx";
// import { FetchProvider } from "./context/FetchContex.jsx";
import Router from "./Router.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { Provider } from "react-redux";
import {store,  persistor}  from "./redux/store.js"
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <AuthProvider>
        {/* <FetchProvider> */}
          <InvoiceProvider>
            <Router/>
          </InvoiceProvider>
        {/* </FetchProvider> */}
      </AuthProvider>
    </PersistGate>
  </Provider>
  // </StrictMode>,
);
