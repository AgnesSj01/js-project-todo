import styled from "styled-components";

export const BaseButton = styled.button`
  border-radius: 10px;
  padding: 10px 14px;

  background: #f7f8fc;
  border: 1px solid #d7dbe7;
  color: #111827;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;

  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease,
    transform 0.05s ease, box-shadow 0.2s ease;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: #eef1ff;
      border-color: #2563eb;
    }
  }

  &:focus-visible {
    outline: 3px solid #93c5fd;
    outline-offset: 2px;
    border-color: #2563eb;
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
