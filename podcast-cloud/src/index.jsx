import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./components/App";
import store from "./components/redux/store"


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter basename="/podcast-cloud">
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
