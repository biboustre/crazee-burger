import styled from "styled-components";

export default function TextInput({ value, onChange, Icon, ...extraProps }) {
  return (
    <InputStyled>
      {Icon && <span className="icon">{Icon}</span>}
      <input type="text" value={value} onChange={onChange} {...extraProps} />
    </InputStyled>
  );
}

const InputStyled = styled.section`
  position: relative;
  display: flex;
  align-items: center;

  .icon {
    position: absolute;
    left: 1rem;
    color: #888;
    font-size: 1.1em;
    pointer-events: none;
    /* z-index: 2; */
    border-radius: 50%;
  }

  input {
    padding-left: 2.5rem;
    width: 100%;
    height: 3.2rem;
    border-radius: 5px;
    border: none;
  }
`;
