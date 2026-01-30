import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import Input from "../Components/Input/Input";
import Botao from "../Components/Button/Botao";

function PageLogin() {
  const navigate = useNavigate();

  const [EmailLogin, setEmailLogin] = useState("");
  const [PasswordLogin, setPasswordLogin] = useState("");

  function verificarLogin() {
    if (EmailLogin !== "" && PasswordLogin.length >= 8) {
      return true;
    } else {
      return false;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const resultado = verificarLogin();

    if (resultado) {
      navigate("/dashboard");
    } else {
      alert("Email ou senha inválidos");
    }
  }

  return (
    <React.Fragment>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <div className="input-email">
          <FaUser />
          <Input
            onChange={(e) => setEmailLogin(e.target.value)}
            type="email"
            placeholder="Digite seu email"
            id="Email"
            name="Email"
          />
        </div>

        <div className="input-senha">
          <FaLock />
          <Input
            onChange={(e) => setPasswordLogin(e.target.value)}
            type="password"
            placeholder="Digite sua senha"
            id="Password"
            name="Password"
          />
        </div>

        <Botao
          type="submit"
          valor="Entrar"
          className="botao-criar-conta"
        />


      </form>

      <div className="criar-conta">
        <p>
          Não possui uma conta?{" "}
          <Link to="/Cadastro">Criar conta</Link>
        </p>
      </div>
    </React.Fragment>
  );
}

export default PageLogin;
