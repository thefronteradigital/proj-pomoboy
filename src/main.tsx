import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "@dr.pogodin/react-helmet";
import App from "@/App";
import "@/globals.css";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
