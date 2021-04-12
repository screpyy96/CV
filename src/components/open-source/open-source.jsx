import React, { useState, useEffect } from "react";
import SectionTitle from "../section-title/sectionTitle.component";
import YoutubeButton from "../youtube-button/YoutubeButton.component";
import StatsSection from "./StatsSection";
import AccordionSection from "./AccordionSection";

const OpenSource = () => {
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
    <div>
      <SectionTitle title={data.sectionTitle} />
      <YoutubeButton />
      <StatsSection />
      <AccordionSection />
    </div>
  );
};

export default OpenSource;
