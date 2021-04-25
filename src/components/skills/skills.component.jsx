import React, { useState, useEffect } from "react";
import SectionTitle from "../section-title/sectionTitle.component";
import YoutubeButton from "../youtube-button/YoutubeButton.component";
import Legend from "./legend.component";
import FrontEnd from "./front-end.component";
import { Description } from "../about-me/about-me.styles";
import GreenArrowDown from "../green-arrows/GreenArrowDown.component";

const Skills = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    try {
      const getResults = async () => {
        const result = await (
          await fetch("http://localhost:5000/skills")
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
      <SectionTitle title={data.sectionTitle} id="skills" />
      <YoutubeButton />
      <Legend />
      <FrontEnd />
      <Description>{data.description}</Description>
      <GreenArrowDown />
    </div>
  );
};

export default Skills;
