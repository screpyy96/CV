import styled from "styled-components";
import myImage from "../../assets/image/me.jpg";

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
  margin-left: -8px;

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

export const Row = styled.span`
  display: grid;
  grid-column: 1/-1;
`;
