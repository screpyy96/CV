import React, { useState, useEffect } from "react";
import { BoxWrapper, LeadTitle } from "../skills/skills.styled";
import SkillName from "./skillName";
import {
  TitleStyle,
  AccordionContent,
  ProjectStats,
  ButtonExpand,
} from "./open-source.styled";

const AccordionSection = () => {
  const [data, setData] = useState({});
  const [isExpanded, setIsExpanded] = useState(false);

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

  const toggleAccordion = () => {
    setIsExpanded((value) => !value);
  };

  return (
    <div>
      <LeadTitle>{data?.projects?.projectName}</LeadTitle>
      {data?.projects?.project.map((item) => {
        return (
          <>
            <div>
              <BoxWrapper>
                <TitleStyle>{item.projectName}</TitleStyle>
                <SkillName />
                <ButtonExpand onClick={toggleAccordion} />
              </BoxWrapper>
            </div>
            <AccordionContent isExpanded={isExpanded}>
              {item.skillsGained.map((i) => {
                return (
                  <ProjectStats>
                    <p>{i.skillName}</p>
                    <p>{i.percentage}</p>
                    <p>{i.color}</p>
                  </ProjectStats>
                );
              })}
              {item.projectStats.map((i) => {
                return (
                  <ProjectStats>
                    {i.projectStatIcon}
                    {i.projectStatInfo}
                  </ProjectStats>
                );
              })}
              <div>
                <ProjectStats>{item.projectInfo}</ProjectStats>;
              </div>
            </AccordionContent>
          </>
        );
      })}
    </div>
  );
};

export default AccordionSection;
