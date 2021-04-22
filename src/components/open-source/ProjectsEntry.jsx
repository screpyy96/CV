import React, { useState } from "react";
import {
  TitleStyle,
  AccordionContent,
  ProjectStats,
  ButtonExpand,
  BoxWrapper,
  Bara,
  BaraProgress,
  SkillsStyling,
  ProgrammingSkills,
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
      </BoxWrapper>
      <AccordionContent isOpen={isOpen}>
        <ProgrammingSkills>
          {project.skillsGained.map(({ color, skillName }) => {
            return (
              <SkillsStyling color={color}>
                <span>{skillName}</span>
              </SkillsStyling>
            );
          })}
        </ProgrammingSkills>

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
      <Bara>
        {project.skillsGained.map(({ color, percentage }) => {
          return <BaraProgress color={color} percentage={percentage} />;
        })}
      </Bara>
      <ButtonExpand onClick={toggleButton} />
    </>
  );
};

export default ProjectsEntry;
