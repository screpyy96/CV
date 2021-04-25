import styled from "styled-components";

export const MenuWrapper = styled.div`
  position: fixed;
  bottom: 30px;
  right: 20px;
  z-index: 1;
  border: 2px solid #707070;
  padding: 5px;
  background: #fff;
  border-radius: 6px;
`;
export const MenuLink = styled.ul`
  border: 2px solid #707070;
  background: white;
  border-radius: 6px;
  position: fixed;
  right: 19px;
  bottom: 19px;
  height: ${({ isOpen }) => (isOpen ? "330px" : "0px")};
  /* width: ${({ isOpen }) => (isOpen ? "100" : "0px")}; */
  z-index: 2;
  visibility: ${({ isOpen }) => {
    return isOpen ? "visibility" : "hidden";
  }};
`;
export const Hover = styled.a`
  padding-top: 5px;
  padding-right: 15px;

  text-decoration: none;
  font-size: 20px;
  text-align: right;
  display: flex;
  justify-content: flex-end;
  color: #707070;

  &:hover {
    background: #ff006d;
    color: #fff;
  }
`;

export const CloseMenu = styled.div``;
