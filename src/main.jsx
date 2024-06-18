import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { NavShowProvider } from "./context/NavShowContext.jsx";
import { ScrollToContactProvider } from "./context/ScrollContactContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToContactProvider>
        <NavShowProvider>
          <App />
        </NavShowProvider>
      </ScrollToContactProvider>
    </BrowserRouter>
  </React.StrictMode>
);
