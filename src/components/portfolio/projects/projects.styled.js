import styled from "styled-components";

export const CardWrapper = styled.div`
  border: 2px solid grey;
  padding: 10px;
  border-radius: 6px;
  background: #ffffff;
`;

export const Logo = styled.div`
  background: url(${({ image }) => (image ? image : "")});
  height: 80px;
  width: 100%;
  background-size: cover;
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
