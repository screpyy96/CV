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
  ButtonBlue,
  Buttons,
} from "./open-source.styled";
import SkillName from "./skillName";
import Icon from "../icomoon/IcoMoon.component";

const ProjectsEntry = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleButton = () => {
    setIsOpen((value) => !value);
  };

  return (
    <>
      <BoxWrapper>
        <TitleStyle>{project.projectName}</TitleStyle>
        <SkillName project={project} />
      </BoxWrapper>
      <AccordionContent isOpen={isOpen}>
        <ProgrammingSkills>
          {project.skillsGained.map(({ color, skillName, percentage }) => {
            return (
              <SkillsStyling color={color}>
                <span>{skillName}</span>
                <span>{percentage}</span>
              </SkillsStyling>
            );
          })}
        </ProgrammingSkills>

        <ProjectStats>
          {project.projectStats.map((j) => {
            return (
              <div>
                <Icon icon={j.projectStatIcon} size="20" color="grey" />
                {j.projectStatInfo}
              </div>
            );
          })}
        </ProjectStats>
        <ProjectStats>{project.projectInfo}</ProjectStats>
        <ProjectStats>
          <ButtonBlue href={project.projectLink.link} target="_blank">
            <Icon icon={project.projectLink.icon} size="20" color="white" />
            {project.projectLink.description}
          </ButtonBlue>
        </ProjectStats>
      </AccordionContent>
      <Bara>
        {project.skillsGained.map(({ color, percentage }) => {
          return <BaraProgress color={color} percentage={percentage} />;
        })}
      </Bara>
      <Buttons>
        <ButtonExpand onClick={toggleButton}>
          <Icon
            icon={project.projectIcon.mandatoryIcon}
            size="20"
            color="white"
          />
        </ButtonExpand>
        {project.projectIcon.extraIcon.map((item) => {
          return (
            <ButtonExpand href={item.link} target="_blank">
              <Icon icon={item.icon} color="white" size="20" />
            </ButtonExpand>
          );
        })}
      </Buttons>
    </>
  );
};

export default ProjectsEntry;
