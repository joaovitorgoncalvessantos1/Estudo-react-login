import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "./App.jsx";
import PageLogin from "./page/PageLogin.jsx";
import Cadastro from "./page/Cadastro.jsx";
import Dashboard from "./page/dashboard.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLogin></PageLogin>}></Route>
        <Route path="/Cadastro" element={<Cadastro></Cadastro>}></Route>
        <Route path="dashboard" element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
