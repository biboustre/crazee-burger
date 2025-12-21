import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import styled from "styled-components/macro"; "macro" permet d'avoir des noms de classes plus parlants dans le devtools

export default function LoginForm() {
  // State
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  //   Comportement
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue("");
    navigate(`order/${inputValue}`); // Redirection vers la page order avec le prénom en paramètre
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        type="text"
        placeholder="Entrez votre prénom"
        value={inputValue}
        onChange={handleChange}
        required
      />
      <button>Accéder à mon espace</button>
    </div>
  );
}
