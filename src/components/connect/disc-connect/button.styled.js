import styled from "styled-components";

export const StyledDisc = styled.div`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => (size ? size : "40px")};
  height: ${({ size }) => (size ? size : "40px")};
  border: 0;
  background-color: ${({ color }) => (color ? color : "#50d166")};
  color: white;
`;

export const StyledButton = styled.button`
  background-color: ${({ color }) => (color ? color : "#1875f0")};
  margin-top: 30px;
  border-radius: 20px;
  color: white;
  padding: 12px 24px;
  font-size: 10px;
  font-weight: 900;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  & .icon__download {
    margin-right: 12px;
    font-size: 15px;
  }
`;

export const StyledPillLink = styled.a`
  text-decoration: none;
  background-color: #1875f0;
  border-radius: 20px;
  color: white;
  padding: 12px 24px;
  font-size: 10px;
  font-weight: 900;
  border: 0;
  cursor: pointer;
  display: inline-block;
  justify-content: center;
  margin-top: 20px;
`;
