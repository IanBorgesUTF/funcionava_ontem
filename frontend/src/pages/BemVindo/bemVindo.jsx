import "./style.css";
import sanemLogo from "/sanem_logo.svg";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import api from "../../services/api";
import useToast from "../../hooks/useToast";
import { Eye, EyeOff } from "lucide-react";

function BemVindo() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { addToast } = useToast();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email.trim() || !senha.trim()) {
      addToast("Informe email e senha para continuar.", "error");
      return;
    }
    try {
      const { data } = await api.post("/auth/login", { email, senha });
      login(data.token, data.voluntario?.email, data.voluntario?.admin);
      addToast("Login realizado com sucesso!", "success");
      navigate("/home");
    } catch (error) {
      const message =
        error.response?.data?.message ||
        "Erro ao conectar ao servidor. Tente novamente mais tarde.";
      addToast(message, "error");
    }
  };

  return (
    <div className="bem-vindo-page">
      <div className="logo">
        <img src={sanemLogo} alt="" />
      </div>
      <div className="bem-vindo-container">
        <div className="mensagem-container">
          <h1>Sistema Sanem</h1>
          <h2>Bem Vindo!</h2>
        </div>
        <div className="login-container">
          <h1>Faça o seu Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="email"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="floating-input"
              />
              <label className="floating-label basetext-inter">Email</label>
            </div>
            <div className="input-group password-group">
              <input
                type={showPassword ? "text" : "password"}
                placeholder=" "
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="floating-input basetext-inter"
              />
              <label className="floating-label basetext-inter">Senha</label>
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword((p) => !p)}
                aria-label="Mostrar ou ocultar senha"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            <button type="submit" className="btn-submit">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BemVindo;
