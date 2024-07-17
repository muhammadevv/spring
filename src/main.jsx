import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/main.scss";
import { BrowserRouter } from "react-router-dom";
import Routers from "./router/Routers.jsx";
import ModalProvider from "./context/ModalContext.jsx";
import { Toaster } from "react-hot-toast";
ReactDOM.createRoot(document.querySelector(".wrapper")).render(
  <ModalProvider>
    <BrowserRouter>
      <Routers />
      <Toaster />
    </BrowserRouter>
  </ModalProvider>
);
