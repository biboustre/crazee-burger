import React, { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme/index.js";
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
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h2>Connectez-vous</h2>
      <section className="btn-input-wrapper">
        <section className="input-icon-wrapper">
          <BsPersonCircle className="input-icon" aria-hidden="true" />
          <input
            type="text"
            placeholder="Entrez votre prénom"
            value={inputValue}
            onChange={handleChange}
            required
            aria-label="Prénom"
            // className="with-icon"
          />
        </section>
        <button>Accéder à mon espace</button>
      </section>
    </LoginFormStyled>
  );
}

// Styled Components, pour le style du formulaire de connexion
const LoginFormStyled = styled.form`
  text-align: center;
  padding: 2.5rem 2rem;
  color: white;
  border-radius: 10px;
  max-width: 500px;
  min-width: 400px;
  font-family: "Amatic SC", cursive;

  h1 {
    font-size: ${theme.fonts.P5};
    margin-bottom: 40px;
  }

  h2 {
    font-size: ${theme.fonts.P4};
    margin: 20px 10px 10px;
  }

  hr {
    /* height: 3px;
    background-color:; */
    border: 1.5px solid ${theme.colors.primary_burger};
  }

  .btn-input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .input-icon-wrapper {
      position: relative;
      display: flex;
      align-items: center;

      .input-icon {
        position: absolute;
        left: 1rem;
        color: #888;
        font-size: 1.1em;
        pointer-events: none;
        z-index: 2;
        border: 1px solid;
        border-radius: 50%;
      }

      input {
        padding-left: 2.5rem;
        width: 100%;
        height: 3.2rem;
        border-radius: 5px;
        border: none;
      }
    }

    button {
      height: 3.2rem;
      border-radius: 5px;
      border: none;
    }
  }
`;
