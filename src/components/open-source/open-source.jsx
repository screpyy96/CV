import React, { useState, useEffect } from "react";
import SectionTitle from "../section-title/sectionTitle.component";
import YoutubeButton from "../youtube-button/YoutubeButton.component";
import StatsSection from "./stats/StatsSection";
import AccordionSection from "./accordion/AccordionSection";
import GreenArrowDown from "../green-arrows/GreenArrowDown.component";

const OpenSource = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    try {
      const getResults = async () => {
        const result = await (
          await fetch("http://localhost:5010/open-source")
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
      <SectionTitle title={data.sectionTitle} id="open-source" />
      <YoutubeButton />
      <StatsSection />
      <AccordionSection />
      <GreenArrowDown />
    </div>
  );
};

export default OpenSource;
