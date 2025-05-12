import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './authentification.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [mot_de_passe, setMotDePasse] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, mot_de_passe }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 404) {
          setError("Utilisateur non trouvé.");
        } else if (response.status === 401) {
          setError("Mot de passe incorrect.");
        } else {
          setError(data.message || "Erreur de connexion.");
        }
        return;
      }

      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (err) {
      setError("Erreur serveur. Veuillez réessayer.");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        <div className="auth-image"></div>
        <div className="auth-form">
          <h2>Connexion</h2>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Mot de passe"
              value={mot_de_passe}
              onChange={(e) => setMotDePasse(e.target.value)}
              required
            />
            <button type="submit">Se connecter</button>
          </form>
          <button className="signup-button" onClick={() => navigate("/signup")}>
            Créer un compte
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
