import React, { useState, useEffect } from "react";

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

  return <div>{data.sectionTitle}</div>;
};

export default SectionTitle;
