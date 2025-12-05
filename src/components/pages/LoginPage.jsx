import { useState } from "react";

export default function LoginPage() {
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
    <main>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Entrez votre prénom..."
          value={prenom}
          onChange={handleChange}
          required
        />
        <button>Accéder à son espace</button>
      </form>
    </main>
  );
}
