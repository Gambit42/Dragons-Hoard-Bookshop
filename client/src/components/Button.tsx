import React from "react";
import styled, { css } from "styled-components";

type Props = {
  text: string;
  type: string;
  remainingProps?: unknown;
};

type ButtonProps = {
  buttonType: string;
};

const Button = (props: Props) => {
  const { type, text, ...remainingProps } = props;

  return (
    <StyledButton {...remainingProps} buttonType={type}>
      {text}
    </StyledButton>
  );
};

export default Button;

export const StyledButton = styled.button<ButtonProps>`
  padding: 8px 30px;

  ${({ buttonType }) =>
    buttonType === "primary" &&
    css`
      color: #fff;
      border-radius: 4px;
      background-color: #b91c1c;
    `}

  ${({ buttonType }) => buttonType === "text" && css``}
`;