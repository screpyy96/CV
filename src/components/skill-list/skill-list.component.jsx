import React from "react";
import TagComponent from "../tag/tag.component";

const SkillList = ({ itemSkill }) => {
  return (
    <div>
      {itemSkill.map((item) => {
        return <TagComponent type={item.type} label={item.label} />;
      })}
    </div>
  );
};

export default SkillList;
