import React, { useState, useEffect } from "react";
import GreenArrowDown from "../green-arrows/GreenArrowDown.component";
import SectionTitle from "../section-title/sectionTitle.component";
import YoutubeButton from "../youtube-button/YoutubeButton.component";
import ReviewCard from "./review-card/ReviewCard";
const Reviews = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    try {
      const getResults = async () => {
        const result = await (
          await fetch("http://localhost:5000/reviews")
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
      {data?.cards?.map((item) => {
        return <ReviewCard item={item} />;
      })}
      <GreenArrowDown />
    </div>
  );
};

export default Reviews;
