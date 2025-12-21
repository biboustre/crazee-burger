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

  ::before {
    content: "";
    background: url("/images/login/burger-background.jpg") no-repeat
      center/cover;
    filter: brightness(30%);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`;
