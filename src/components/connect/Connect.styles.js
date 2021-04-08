import styled from "styled-components";
import myImage from "../../assets/image/me.jpg";
import Icon from "../icomoon/IcoMoon.component";

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

export const IconWrapper = styled(Icon)`
  background-color: blue;
  transition: 250ms;
  background-color: #1875f0;
  border-radius: 50%;
  cursor: pointer;
  padding: 20px;
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 100px 100px 100px 100px;
  /* grid-template-columns: repeat(4, 1fr); */
  padding-left: 10px;
`;
