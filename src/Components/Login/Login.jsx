import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";

function TesteLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");

  function validacao(email, password) {
    if (email === "" || password.length < 8) {
      return false;
    }
    return true;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const estaValido = validacao(email, password);

    if (!estaValido) {
      setErro("Email vazio ou senha menor que 8 caracteres");
      setSucesso("");
      return;
    }

    setSucesso("Login realizado com sucesso!");
    setErro("");
    setEmail("");
    setPassword("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-email">
          <FaUser />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
          />
        </div>

        <div className="input-password">
          <FaLock />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
          />
        </div>

        <button type="submit">Entrar</button>
      </form>

      {erro && <p style={{ color: "red" }}>{erro}</p>}
      {sucesso && <p style={{ color: "green" }}>{sucesso}</p>}
    </>
  );
}

export default TesteLogin;
