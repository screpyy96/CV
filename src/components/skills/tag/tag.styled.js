import styled from "styled-components";
const colorList = {
  heart: "#D52027",
  trophy: "#50D166",
  book: "#F18F1C",
};
export const TagStyle = styled.div`
  display: inline-flex;
  align-items: center;
  background-color: ${({ tip }) => colorList[tip]};
  color: white;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 30px;
  font-size: 13px;
  font-weight: 500;
`;
