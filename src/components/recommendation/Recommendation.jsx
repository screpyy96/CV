import React, { useState, useEffect } from "react";
import SectionTitle from "../section-title/sectionTitle.component";
import YoutubeButton from "../youtube-button/YoutubeButton.component";
import Card from "./card/Card";
const Recommendation = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    try {
      const getResults = async () => {
        const result = await (
          await fetch("http://localhost:5000/recommendations")
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
      <SectionTitle title={data?.sectionTitle} />
      <YoutubeButton />
      <Card />
    </>
  );
};

export default Recommendation;
