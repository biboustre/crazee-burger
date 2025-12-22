import styled from "styled-components";
import LoginForm from "./LoginForm";
import Logo from "../../ui/Logo";

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <Logo />
      <LoginForm />
    </LoginPageStyled>
  );
}

// Styled Components, pour le style de la page de connexion
const LoginPageStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("/images/login/burger-background.jpg");
  background-size: cover;
  background-position: center;
`;
