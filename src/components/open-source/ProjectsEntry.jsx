import React, { useState, useEffect } from "react";
import {
  TitleStyle,
  AccordionContent,
  ProjectStats,
  ButtonExpand,
  BoxWrapper,
  Bara,
  BaraProgress,
} from "./open-source.styled";
import SkillName from "./skillName";
const ProjectsEntry = ({ project }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    try {
      const getResults = async () => {
        const result = await (
          await fetch("http://localhost:5000/open-source")
        ).json();
        setData(result);
      };
      getResults();
    } catch (error) {
      console.log("nu merge useEffect", error);
    }
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const toggleButton = () => {
    setIsOpen((value) => !value);
  };

  return (
    <>
      <BoxWrapper>
        <TitleStyle>{project.projectName}</TitleStyle>
        <SkillName />
        <Bara>
          {project.skillsGained.map(({ color, percentage }) => {
            return <BaraProgress color={color} percentage={percentage} />;
          })}
        </Bara>

        <ButtonExpand onClick={toggleButton} />
      </BoxWrapper>
      <AccordionContent isOpen={isOpen}>
        {project.skillsGained.map((i) => {
          return (
            <ProjectStats>
              <Bara>
                {project.skillsGained.map(({ color, percentage }) => {
                  return (
                    <>
                      <BaraProgress color={color} percentage={percentage} />
                      <p>{i.skillName}</p>
                    </>
                  );
                })}
              </Bara>
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
