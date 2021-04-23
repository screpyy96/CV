import styled from "styled-components";

export const CardWrapper = styled.div`
  border: 2px solid grey;
  padding: 10px;
`;

export const Logo = styled.div`
  background: url(${({ image }) => (image ? image : "")});
  height: 60px;
  width: 100%;
  border-radius: 50%;
  background-size: cover;
  background-repeat: repeat-y;
`;

export const Title = styled.div`
  font-size: 15px;
  line-height: 30px;
  font-weight: 600;
  color: #808080;
  padding-bottom: 10px;
`;
export const Content = styled.div`
  font-size: 13px;
  padding-bottom: 10px;
  font-weight: 600;
  color: #808080;
`;
