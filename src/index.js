import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MensajesProvider } from "./context/MensajesProvider";
import {BrowserRouter,Routes, Route} from "react-router-dom"
import Login from "./pages/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MensajesProvider>
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<App />} />
      </Routes>
    </BrowserRouter>
    </MensajesProvider>
  </React.StrictMode>
);
