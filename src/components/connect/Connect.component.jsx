import React, { useState, useEffect } from "react";
import SectionTitle from "../section-title/sectionTitle.component";
import * as CS from "./Connect.styles";
import YoutubeButton from "../youtube-button/YoutubeButton.component";
import DiscConnect from "./disc-connect/DiscConnect.component";
import GreenArrowDown from "../green-arrows/GreenArrowDown.component";

const Connect = () => {
  // aici o sa fac rost de date de pe server
  const [data, setData] = useState({});

  useEffect(() => {
    try {
      const getResults = async () => {
        const result = await (
          await fetch("http://localhost:5000/connect")
        ).json();
        setData(result);
      };
      getResults();
    } catch (error) {
      console.log("nu merge useEffect", error);
    }
  }, []);

  // aici o sa prezint ce apare pe ecran
  return (
    <div>
      <SectionTitle title={data.sectionTitle} />

      <YoutubeButton />
      <CS.AvatarWrapper>
        <CS.AvatarImage />
      </CS.AvatarWrapper>
      <DiscConnect />
      <GreenArrowDown />
    </div>
  );
};

export default Connect;
