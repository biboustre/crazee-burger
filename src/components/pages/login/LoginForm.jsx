import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginForm() {
      // State
  const [prenom, setPrenom] = useState("");
  //   Comportement
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bienvenue, ${prenom} !`);
    setPrenom("");
  };

  const handleChange = (e) => {
    setPrenom(e.target.value);
  };
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        type="text"
        placeholder="Entrez votre prénom..."
        value={prenom}
        onChange={handleChange}
        required
      />
      <button>Accéder à son espace</button>
      <Link to="/order">Aller à la page de commande</Link>
    </form>
  );
}
