import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "./firebase";
import { Card } from "react-bootstrap";

const LoginCadastro = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate(); // Adicionado o hook useNavigate

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        // Login
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login bem-sucedido!");
      } else {
        // Cadastro
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Cadastro bem-sucedido! Agora você pode fazer login.");
      }

      // Após login ou cadastro bem-sucedido, redirecione para a rota /show
      navigate("/show");
      
    } catch (error) {
      console.error("Erro:", error);

      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password"
      ) {
        alert("Credenciais inválidas. Verifique seu email e senha.");
      } else if (error.code === "auth/email-already-in-use") {
        alert("Email já cadastrado. Faça login ou use outro email.");
      } else {
        alert(
          "Erro ao processar a autenticação. Consulte o console para obter detalhes."
        );
      }
    }
  };

  return (
    <div className="center-container-logincadastro">
      <Card className="custom-card">
        <Card.Body>
          <h2>{isLogin ? "Login" : "Cadastro"}</h2>

          <form onSubmit={handleSubmit}>
            <div className="product-list-logincadastro">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="product-list-logincadastro">
              <label>Senha:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="product-list-logincadastro">
              <button type="submit">{isLogin ? "Login" : "Cadastrar"}</button>
            </div>
          </form>

          <p>
            {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}
            <Link to="#" onClick={handleToggle}>
              {isLogin ? "Cadastre-se" : "Faça login"}
            </Link>
          </p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LoginCadastro;
