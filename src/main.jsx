import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { NavShowProvider } from "./context/NavShowContext.jsx";
import { ScrollToContactProvider } from "./context/ScrollContactContext.jsx";
import { BlogContextProvider } from "./context/BlogContext.jsx";
import { PortfolioContextProvider } from "./context/PortfolioContext.jsx";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <ScrollToContactProvider>
          <NavShowProvider>
            <BlogContextProvider>
              <PortfolioContextProvider>
                <App />
              </PortfolioContextProvider>
            </BlogContextProvider>
          </NavShowProvider>
        </ScrollToContactProvider>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);
