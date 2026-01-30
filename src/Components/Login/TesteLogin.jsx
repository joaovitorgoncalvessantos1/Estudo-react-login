import { useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";

function TesteLogin() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form>
        <div className="input-email">
          <FaUser></FaUser>
          <input
            type="email"
            name="Email"
            id="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="input-password">
          <FaLock />
          <input
            type="password"
            name="Senha"
            id="Senha"
         
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <label htmlFor="checkbox">
          <input type="checkbox" name="checkbox" id="checkbox" />
          Lembrtar de mim?
        </label>
      </form>

      <div className="criar-conta">
        <p>
          Nao possuiuma conta? <a href="#">Criar conta</a>
        </p>
      </div>
      <button>Entrar</button>
      <p>{Password}</p>
    </>
  );
}

export default TesteLogin;
