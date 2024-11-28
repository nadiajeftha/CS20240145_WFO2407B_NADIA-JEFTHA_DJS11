import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { BrowserRouter, Routes, Route } from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/podcast-cloud">
      <Routes>
        <App />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
