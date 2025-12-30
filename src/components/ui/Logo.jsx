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
const LogoStyled = styled.section`
  display: flex;
  align-items: center;
  gap: 5px;
  transform: scale(2.5);
  margin-bottom: 40px;

  h1 {
    display: inline;
    text-align: center;
    text-transform: uppercase;
    color: ${theme.colors.primary};
    font-family: "Amatic SC", cursive;
    font-weight: ${theme.fonts.weights.bold};
    font-size: ${theme.fonts.sizes.P6};
    /* line-height: 1em; */
    letter-spacing: 1.5px;
  }

  img {
    /* height: 60px; */
    /* object-fit: contain;
    object-position: center; */
    width: 80px;
    height: 60px;
    /* margin: 0 ${theme.gridUnit * 2}px; Cette technique est parfois utilisé en entreprise */
  }
`;
