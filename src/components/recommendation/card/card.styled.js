import styled from "styled-components";

export const Description = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: #808080;
  margin: 25px 0 20px 0;
  padding: 20px;
  line-height: 30px;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
  background-color: white;
  margin: 25px 0;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.16);
    background-color: white;
    top: -7px;
    left: 15px;
    clip-path: polygon(-6px -6px, 100% 0, 0 100%);
    transform: rotate(45deg);
  }
`;

export const Avatar = styled.div`
  background: url(${({ image }) => (image ? image : "")});
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-size: cover;
  position: absolute;
  border: 2px solid white;
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 64px auto;
  column-gap: 20px;
  grid-template-rows: 32px 32px;
  margin-bottom: 15px;
`;
export const RecommendationImage = styled.div`
  grid-column: 1/2;
  grid-row: -1/1;
  position: relative;
  box-shadow: 0 0px 6px rgba(0, 0, 0, 0.16);
  border-radius: 50%;
`;
export const Name = styled.div`
  grid-column: 2/2;
  display: flex;
  align-items: center;
  grid-row: 1/2;
  font-weight: medium;
  font-size: 22px;
  color: #808080;
`;
export const Position = styled.div`
  grid-row: 2/2;
  grid-column: 2/2;
  /* display: flex;
  align-items: center; */
  font-weight: 600;
  font-size: 15px;
  color: #808080;
`;
