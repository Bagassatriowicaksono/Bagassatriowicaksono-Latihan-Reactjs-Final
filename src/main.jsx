import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeContextProvider } from "./context/themeContext.jsx";
import { AuthContextProvider } from "./context/authContext.jsx";
import { NotifContextProvider } from "./context/notifContext.jsx";
import { DarkModeProvider } from "./context/darkModeContext.jsx"; // DarkModeProvider is globally wrapping

// Inisialisasi root React
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <AuthContextProvider>
      <NotifContextProvider>
        <ThemeContextProvider>
          <DarkModeProvider>  {/* DarkModeProvider wraps the entire app */}
            <App />
          </DarkModeProvider>
        </ThemeContextProvider>
      </NotifContextProvider>
    </AuthContextProvider>
  </StrictMode>
);
