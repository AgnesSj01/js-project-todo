import styled from "styled-components";
import { BaseButton } from "./Buttons.styles";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0px;

  width: 100%;
  max-width: 100%;
  overflow: hidden;

  /* Tablet & desktop */
  @media (min-width: 640px) {
    display: grid;
    grid-template-columns: 1fr auto; 
    gap: 10px;
    padding: 24px 5px;
    align-items: center;
    max-width: 500px; 
    margin: 0 auto; /
  }

  label {
    @media (min-width: 640px) {
      grid-column: 1 / -1;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  max-width: 100%;
  min-width: 0;

  padding: 12px 14px;
  border: 1px solid #d7dbe7;
  border-radius: 10px;
  font-size: 16px;
  box-sizing: border-box;

  @media (min-width: 640px) {
    grid-column: 1;
  }

  &:focus {
    border-color: #6b8cff;
    box-shadow: 0 0 0 3px rgba(107, 140, 255, 0.25);
  }
`;
export const Submit = styled(BaseButton)`
  padding: 12px 18px;
  width: 100%;

  @media (min-width: 640px) {
    width: auto;
    white-space: nowrap;
  }
`;
