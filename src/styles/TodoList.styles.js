import styled from "styled-components";
import { BaseButton } from "./Buttons.styles";

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  padding-bottom: 20px;
  padding-top: 20px;
`;

export const Item = styled.li`
  display: flex;
  gap: 10px;
  align-items: stretch;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  margin-bottom: 12px;
`;

export const TodoButton = styled.button`
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;

  text-align: left;
  white-space: normal;
  overflow-wrap: anywhere;
  word-break: break-word;

  border: 1px solid #d7dbe7;
  border-radius: 10px;
  padding: 12px 14px;
  background: #fff;

  &:focus-visible {
    outline: 3px solid #93c5fd;
    outline-offset: 2px;
    border-color: #2563eb;
  }

  input[type="checkbox"] {
    margin-right: 6px;
    accent-color: #16a34a;
    transform: scale(1.3);
  }
`;

export const RemoveButton = styled(BaseButton)`
  padding: 8px 12px;
  white-space: nowrap;

  display: flex;
  align-items: center;
  gap: 6px;

  background: #fef2f2;
  border-color: #fecaca;
  color: #991b1b;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: #fee2e2;
      border-color: #fca5a5;
    }
  }

  &:focus-visible {
    outline: 3px solid #fecaca;
    outline-offset: 2px;
    border-color: #dc2626;
  }
`;

export const Paragraf = styled.p`
  font-size: 16px;
  color: #1d4ed8;
  text-align: center;
  margin: 16px 0;
  padding-bottom: 15px;
`;
