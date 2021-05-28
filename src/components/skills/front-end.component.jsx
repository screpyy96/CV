import React, { useState, useEffect } from "react";
import { LeadTitle } from "./skills.styled";
import SkillList from "./skill-list/skill-list.component";

const FrontEnd = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    try {
      const getResults = async () => {
        const result = await (
          await fetch("http://localhost:5010/skills")
        ).json();
        setData(result);
      };
      getResults();
    } catch (error) {
      console.log("nu merge useEffect", error);
    }
  }, []);

  return (
    <div>
      {data?.skillTypeList?.map((skill, i) => {
        return (
          <div key={i}>
            <LeadTitle>{skill.type}</LeadTitle>
            <SkillList itemSkill={skill.skillList} />
          </div>
        );
      })}
    </div>
  );
};

export default FrontEnd;
