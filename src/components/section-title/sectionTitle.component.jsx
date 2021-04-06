import React, { useState, useEffect } from "react";
import * as ST from "../section-title/SectionTitle.styled";

const SectionTitle = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    try {
      const getResults = async () => {
        const result = await fetch("http://localhost:5000/welcome");
        const resultParse = await result.json();
        setData(resultParse);
      };
      getResults();
    } catch (error) {
      console.log("nu merge useEffect", error);
    }
  }, []);

  return (
    <div>
      <ST.SectionTitleWrapper>
        <ST.MainTitle>{data.sectionTitle}</ST.MainTitle>
      </ST.SectionTitleWrapper>
    </div>
  );
};

export default SectionTitle;
