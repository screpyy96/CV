import React from "react";
import { StyledButton, StyledDisc, StyledPillLink } from "./button.styled";

const Button = ({ children, type, bgCuloare, size, onClick, link }) => {
  return type === "disc" ? (
    <StyledDisc size={size} color={bgCuloare} onClick={onClick}>
      {children}
    </StyledDisc>
  ) : type === "link" ? (
    <StyledPillLink href={link} target="_blank" download>
      {children}
    </StyledPillLink>
  ) : (
    <StyledButton color={bgCuloare}>{children}</StyledButton>
  );
};
export default Button;
