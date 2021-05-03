import React, { useState, useEffect } from "react";
import { SkillsStyle } from "./open-source.styled";

const SkillName = ({ project }) => {
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
  return (
    <>
      {project?.skillsGained.map((skill) => {
        return <SkillsStyle>{skill.skillName}</SkillsStyle>;
      })}
    </>
  );
};
export default SkillName;
