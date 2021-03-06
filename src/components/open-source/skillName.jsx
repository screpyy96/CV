import React from 'react';
import { SkillsStyle } from './open-source.styled';

const SkillName = ({ project }) => {
  return (
    <>
      {project?.skillsGained.map((skill) => {
        return (
          <SkillsStyle>
            {skill.skillName} {skill.skillName}
          </SkillsStyle>
        );
      })}
    </>
  );
};
export default SkillName;
