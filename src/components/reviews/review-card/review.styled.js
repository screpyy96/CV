import styled from "styled-components";

export const ReviewWrapper = styled.div`
  display: grid;
  grid-template-columns: 64px auto;
  column-gap: 20px;
  grid-template-rows: 32px 32px;
  margin-bottom: 15px;
`;

export const Date = styled.div`
  grid-row: 2/2;
  grid-column: 2/2;
  font-size: 14px;
  font-weight: medium;
  color: #1875f0;
`;
