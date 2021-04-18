import styled from "styled-components";

export const SkillsStyle = styled.div`
  display: inline-flex;
  margin-left: 10px;
  color: grey;
  font-size: 13px;
`;

export const TitleStyle = styled.div`
  margin: 10px;
  padding-bottom: 0px;
  font-weight: 700;
  color: grey;
`;

export const AccordionContent = styled.div`
  background-color: white;
  overflow: auto;
  transition: max-height 0.6s ease;
  line-height: 20px;
  height: ${({ isOpen }) => (isOpen ? "auto" : "0px")};
`;

export const ProjectStats = styled.div`
  border: 2px solid grey;
`;

export const ButtonExpand = styled.div`
  border-radius: 50%;
  border: 4px solid grey;
  height: 20px;
  width: 20px;
  background-color: black;
  float: right;
`;

export const BoxWrapper = styled.div`
  border: 2px solid grey;
  border-radius: 6px;
  width: 100%;
  margin: 30px auto;
  padding: 10px 10;
`;

export const ItemWrapper = styled.div`
  padding: 10px;
  border-bottom: 2px solid grey;
  display: grid;
  font-weight: 700;
  color: grey;
  grid-template-columns: 30px 215px 50px;
  &:last-child {
    border: 0;
  }
`;
export const LeadTitle = styled.div`
  font-size: 22px;
  line-height: 30px;
  font-weight: 600;
  color: #808080;
  padding-top: 25px;
  padding-bottom: 10px;
`;

//progressive bar

export const Bara = styled.div`
  height: 10px;
  display: flex;
`;
export const BaraProgress = styled.span`
  width: ${(props) => `${props.percentage}`};
  background-color: ${(props) => props.color};
`;
