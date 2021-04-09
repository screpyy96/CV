import styled from "styled-components";

export const LeadTitle = styled.div`
  font-size: 22px;
  line-height: 30px;
  font-weight: 600;
  color: #808080;
  padding-top: 30px;
  padding-bottom: 10px;
`;

export const BoxWrapper = styled.div`
  border: 2px solid grey;
  border-radius: 6px;
  width: 100%;
  margin: 0 auto;
`;
export const Mizerie = styled.div`
  border-bottom: 2px solid grey;
  display: grid;
  grid-template-columns: 50px 225px 50px;
  &:last-child {
    border: 0;
  }
`;
