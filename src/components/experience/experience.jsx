import React, { useState, useEffect } from "react";
import GreenArrowDown from "../green-arrows/GreenArrowDown.component";
import SectionTitle from "../section-title/sectionTitle.component";
import YoutubeButton from "../youtube-button/YoutubeButton.component";
import AccordionTop from "./AccordionTop";

const Experience = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    try {
      const getResults = async () => {
        const result = await (
          await fetch("http://localhost:5000/experience")
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
      <SectionTitle title={data.sectionTitle} />
      <YoutubeButton />
      <AccordionTop />
      <GreenArrowDown />
    </>
  );
};

export default Experience;