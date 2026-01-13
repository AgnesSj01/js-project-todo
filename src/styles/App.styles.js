import styled from "styled-components";
import { BaseButton } from "./Buttons.styles";

export const BulkButton = styled(BaseButton)`
  margin: 12px 0 20px;
  padding: 10px 14px;
`;

export const AppWrapper = styled.main`
  width: min(600px, 100%);
  max-width: 100%;
  margin: 30px auto;
  padding: 0 16px;
  box-sizing: border-box;
  min-width: 0;

  overflow-x: clip;

  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 12px 30px rgba(17, 24, 39, 0.12);

  @media (min-width: 640px) {
    margin: 40px auto;
    padding: 40px;
  }
`;
export const Header = styled.header`
  margin-top: 10px;
  margin-bottom: 10px;

  h1 {
    padding-top: 15px;
    padding-bottom: 10px;
    margin: 0;
    font-size: 24px;
    text-align: center;
  }

  @media (min-width: 640px) {
    h1 {
      font-size: 28px;
    }
  }
`;
