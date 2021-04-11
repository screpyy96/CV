import styled from "styled-components";
import myImage from "../../assets/images/me.jpg";
// import Icon from "../icomoon/IcoMoon.component";

export const StyledCell = styled.div`
  ${({ height }) => (height ? `height: ${height}px;` : "")}
  ${({ jc }) => (jc ? `display: flex; justify-content: ${jc};` : "")}
  grid-column: ${({ span }) => (span ? "span 1" : "1/-1")};
`;

export const AvatarWrapper = styled.div`
  // margin-top: 50px;
`;

export const AvatarImage = styled.img.attrs({ src: `${myImage}` })`
  width: 100%;
  background-color: white;
  position: relative;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  // transform: rotate(-2.5deg);
  padding: 10px;
  margin-left: 10px;

  &:after {
    content: "";
    border-radius: 6px;
    position: absolute;
    top: 10px;
    bottom: 10px;
    right: 10px;
    left: 10px;
    background-size: cover;
  }
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  /* grid-template-columns: 100px 100px 100px 100px; */
  grid-template-columns: repeat(4, 1fr);
  padding-left: 20px;
`;

export const StyledImage = styled.div`
  padding-top: 100%;
  width: 100%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  transform: rotate(-2.5deg);
  margin-top: 5px;
  border: 10px solid white;
  position: relative;
  &::after {
    content: "";
    background-image: url(${({ path }) => path});
    background-size: cover;
    background-position: center center;
    border-radius: 4px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;

export const StyledIcon = styled.i`
  font-size: ${({ icon }) => (icon === "codewars" ? "48" : "30")}px;
  /* pointer-events: none; */
`;
