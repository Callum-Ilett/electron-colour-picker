import styled from "styled-components";

interface ButtonProps {
  variant?: "outlined";
  color?: "primary" | "danger";
  block?: boolean;
  copyToClipboard?: boolean;
}

export const StyledButton = styled.button<ButtonProps>`
  width: ${({ block }) => block && "100%"};

  background: ${({ theme, variant }) =>
    variant !== "outlined" ? theme.palette.primary.main : "transparent"};

  border-width: ${({ variant }) => variant === "outlined" && "1px"};
  border-style: ${({ variant }) => variant === "outlined" && "solid"};
  border: ${({ variant }) => variant !== "outlined" && "0"};
  border-color: ${({ theme, variant, color }) =>
    variant === "outlined" && color === "danger"
      ? "red"
      : theme.palette.primary.main};
  color: white;
  margin-right: 8px;
  padding: 6px 16px;
  font-size: 0.875rem;
  min-width: 64px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;

  cursor: pointer;
  display: inline-flex;
  outline: 0;
  position: relative;
  align-items: center;
  justify-content: center;
  user-select: none;
  vertical-align: middle;
  appearance: none;

  & :hover {
    background: ${({ color, theme }) =>
      color === "danger" ? "red" : theme.palette.primary.light};
  }
`;
