import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./authentification.css";

const Signup = () => {
  const [nomUtilisateur, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [mot_de_passe, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nomUtilisateur, email, mot_de_passe }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 400) {
          setError("Email déjà utilisé.");
        } else {
          setError(data.message || "Erreur d'inscription.");
        }
        return;
      }

      navigate("/login");
    } catch (err) {
      setError("Erreur serveur. Veuillez réessayer.");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        <div className="auth-image"></div>
        <div className="auth-form">
          <h2>Inscription</h2>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="Nom d'utilisateur"
              value={nomUtilisateur}
              onChange={(e) => setNom(e.target.value)}
              required
            />
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
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Créer un compte</button>
          </form>
          <p>Vous avez déjà un compte ?</p>
          <button className="signup-button" onClick={() => navigate("/login")}>
            Se connecter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
