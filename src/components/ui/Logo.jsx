import styled from "styled-components";
import { theme } from "../../theme";

export default function Logo() {
  return (
    <LogoStyled>
      <h1>Crazee</h1>
      <img src="/images/logo-burger.png" alt="Logo-crazee-burger" />
      <h1>Burger</h1>
    </LogoStyled>
  );
}

// Styled Components, pour le style du logo
const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  /* transform: scale(2.5); */

  h1 {
    display: inline;
    text-align: center;
    text-transform: uppercase;
    color: ${theme.colors.primary_burger};
    font-family: "Amatic SC", cursive;
    font-weight: ${theme.weights.bold};
    font-size: ${theme.fonts.P6};
    /* line-height: 1em; */
    letter-spacing: 1.5px;
  }

  img {
    /* height: 60px; */
    /* object-fit: contain;
    object-position: center; */
    width: 200px;
  }
`;
