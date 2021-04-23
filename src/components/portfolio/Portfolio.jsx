import React, { useState, useEffect } from "react";
import SectionTitle from "../section-title/sectionTitle.component";
import YoutubeButton from "../youtube-button/YoutubeButton.component";
import Projects from "./projects/Projects";
import GreenArrowDown from "../green-arrows/GreenArrowDown.component";
const Portfolio = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    try {
      const getResults = async () => {
        const result = await (
          await fetch("http://localhost:5000/portfolio")
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
      <SectionTitle title={data.sectionTitle} />
      <YoutubeButton />
      <Projects />
      <GreenArrowDown />
    </div>
  );
};

export default Portfolio;
