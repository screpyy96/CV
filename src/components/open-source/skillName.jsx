import React, { useState, useEffect } from "react";
import { SkillsStyle } from "./open-source.styled";

const SkillName = () => {
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
      {data?.projects?.project.map((skill) => {
        console.log(skill);
        return (
          <div>
            {skill?.skillsGained.map((item) => {
              return <SkillsStyle>{item.skillName}</SkillsStyle>;
            })}
          </div>
        );
      })}
    </>
  );
};
export default SkillName;
