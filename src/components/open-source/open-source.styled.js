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
  height: ${({ isExpanded }) => (isExpanded ? "auto" : "0px")};
`;

export const ProjectStats = styled.div`
  border: 2px solid grey;
`;

export const ButtonExpand = styled.div`
  border-radius: 50%;
  border: 4px solid black;
  height: 20px;
  width: 20px;
  background-color: #333;
  float: right;
`;
