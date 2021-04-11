import styled from "styled-components";

export const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  &:first-child {
    border-top: 2px solid grey;
  }

  &:last-child {
    border-bottom: 2px solid grey;
  }
`;

export const AccordionText = styled.div`
  padding: 20px;
  color: grey;
  line-height: 30px;
  font-weight: 600;
`;

export const Logo = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background: url(${({ icon }) => (icon ? icon : "")});
  background-size: cover;
  margin-left: -10px;
`;

export const CssTrick = styled.div`
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid transparent;
  border-left: 2px solid transparent;
  transform: ${({ isExpanded }) => {
    return isExpanded
      ? "rotate(135deg) translate(-10%, 10%)"
      : "rotate(-45deg) translate(-10%, 10%)";
  }};
  width: 20px;
  height: 20px;
  transition: transform 0.2s ease;
  margin: auto;
`;
export const ChevronWrapper = styled.div`
  margin-left: auto;
  width: 60px;
  height: 60px;
  border: 2px solid grey;
  border-radius: 50%;
  display: flex;
`;

export const AccordionButton = styled.div`
  background-color: white;
  cursor: pointer;
  padding: 18px;
  display: flex;
  align-items: center;
  transition: 0.6s ease;
  border: 0;
`;

export const AccordionContainer = styled.div`
  background-color: white;
  overflow: auto;
  transition: max-height 0.6s ease;
  line-height: 20px;
  height: ${({ isExpanded }) => (isExpanded ? "auto" : "0px")};
`;

export const AccordionTitle = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 15px;
  text-align: left;
  color: grey;
  padding-left: 20px;
`;
export const AccordionSubTitle = styled.p`
  font-family: "Open Sans", sans-serif;
  font-style: italic;
  font-size: 13px;
  text-align: left;
  color: grey;
  padding-left: 20px;
`;

export const Dates = styled.div`
  font-size: 14px;
  padding-left: 20px;
  font-style: italic;
  /* border-top: 2px solid grey; */
  padding-top: 15px;
  color: grey;
`;
