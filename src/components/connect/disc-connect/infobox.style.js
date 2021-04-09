import styled from "styled-components";

export const StyledDescription = styled.div`
  font-size: 14px;
  line-height: 30px;
  color: #707070;
  font-weight: 500;
  border-bottom: 2px solid #f5f5f5;
  border-top: 2px solid #f5f5f5;
  padding: 20px;
`;

export const StyledTitle = styled.div`
  flex-grow: 1;
  font-size: 22px;
  font-weight: 500;
  color: #808080;
  line-height: 30px;
  text-transform: capitalize;
`;

export const StyledWrapper = styled.div`
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
  background-color: white;
  margin: 25px 0;
  position: relative;
  width: 100%;
  padding-bottom: 20px;
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

export const WrapperHead = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
`;
