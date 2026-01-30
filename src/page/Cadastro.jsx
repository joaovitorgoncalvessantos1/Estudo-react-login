import React, { useState } from "react";

import { MdEmail } from "react-icons/md";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import Input from "../Components/Input/Input";
import Botao from "../Components/Button/Botao";

import "./Cadastro.css";

export default function Cadastro() {
  const navigate = useNavigate();

  const [UserCadastro, setUserCadastro] = useState("");
  const [EmailCadastro, setEmailCadastro] = useState("");
  const [PasswordCadastro, setPasswordCadastro] = useState("");

  function VerificarCadastro() {
    if (
      UserCadastro !== "" &&
      EmailCadastro !== "" &&
      PasswordCadastro.length >= 8
    ) {
      return true;
    }
    return false;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const resultado = VerificarCadastro();

    if (resultado) {
      alert("Cadastro realizado com sucesso!");
      navigate("/"); // volta para login
    } else {
      alert("Preencha todos os campos corretamente (senha min. 8 caracteres)");
    }
  };

  return (
    <>
      <h1>Criar conta</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <FaUser />
          <Input
            onChange={(e) => setUserCadastro(e.target.value)}
            placeholder="Digite seu nome"
            type="text"
            name="name"
          />
        </div>

        <div>
          <MdEmail />
          <Input
            onChange={(e) => setEmailCadastro(e.target.value)}
            placeholder="Digite seu Email"
            type="email"
            name="email"
          />
        </div>

        <div>
          <FaLock />
          <Input
            onChange={(e) => setPasswordCadastro(e.target.value)}
            placeholder="Digite sua senha"
            type="password"
            name="password"
          />
        </div>

        <div className="criar-conta">
          <Botao
            className="botao-criar-conta"
            type="submit"
            valor="Cadastrar"
          />
          <p>
            Já possui uma conta? <Link to="/">Login</Link>
          </p>
        </div>
      </form>
    </>
  );
}
