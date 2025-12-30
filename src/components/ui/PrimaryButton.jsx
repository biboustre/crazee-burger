import styled from "styled-components";
import { theme } from "../../theme";

export default function PrimaryButton({ Icon, text }) {
  return (
    <PrimaryButtonStyled>
      {text} {Icon && <span>{Icon}</span>}
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  width: 100%;
  height: 3.2rem;
  border-radius: ${theme.borderRadius.round};
  border: none;
  color: ${theme.colors.white};
  background-color: ${theme.colors.primary};
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${theme.colors.white};
    cursor: pointer;
    color: ${theme.colors.primary};
  }
`;
