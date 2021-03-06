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

export const ButtonExpand = styled.a`
  cursor: pointer;
  background-color: #ff006d;
  height: 40px;
  width: 40px;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2px;
`;

export const BoxWrapper = styled.div`
  border: 2px solid grey;
  padding: 10px;
  border-bottom: 0;
  background: #ffffff;
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

export const SkillsStyling = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 50%;
  height: 10px;
  width: 10px;
  margin: 10px;
  &::before {
    content: "";
    margin: 10px;
    width: 10px;
    background-color: red;
  }
`;

export const ProgrammingSkills = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 10px;
  border: 2px solid grey;
  border-bottom: 0;
`;

export const ProjectStats = styled.div`
  border: 2px solid grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  line-height: 2;
  border-bottom: 0;
`;

export const ButtonBlue = styled.a`
  height: 40px;
  border-radius: 20px;
  font-size: 10px;
  background-color: #1875f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: 0;
  font-weight: 900;
  padding: 20px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  padding-right: 10px;
`;
