import React, { useState } from "react";
import {
  TitleStyle,
  AccordionContent,
  ProjectStats,
  ButtonExpand,
  BoxWrapper,
} from "./open-source.styled";
import SkillName from "./skillName";
const ProjectsEntry = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleButton = () => {
    setIsOpen((value) => !value);
  };

  return (
    <>
      <BoxWrapper>
        <TitleStyle>{project.projectName}</TitleStyle>
        <SkillName />
        <ButtonExpand onClick={toggleButton} />
      </BoxWrapper>
      <AccordionContent isOpen={isOpen}>
        {project.skillsGained.map((i) => {
          return (
            <ProjectStats>
              <p>{i.skillName}</p>
              <p>{i.percentage}</p>
              <p>{i.color}</p>
            </ProjectStats>
          );
        })}
        {project.projectStats.map((j) => {
          return (
            <ProjectStats>
              {j.projectStatIcon}
              {j.projectStatInfo}
            </ProjectStats>
          );
        })}
        <ProjectStats>{project.projectInfo}</ProjectStats>
      </AccordionContent>
    </>
  );
};

export default ProjectsEntry;
