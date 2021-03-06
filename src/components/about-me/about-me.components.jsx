import React, { useEffect, useState } from "react";
import SectionTitle from "../section-title/sectionTitle.component";
import YoutubeButton from "../youtube-button/YoutubeButton.component";
import * as MT from "./about-me.styles";
import * as GA from "../green-arrows/GreenArrow.styles";
import GreenArrowDown from "../green-arrows/GreenArrowDown.component";
import Icon from "../icomoon/IcoMoon.component";

const AboutMe = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    try {
      const getResults = async () => {
        const result = await (
          await fetch("http://localhost:5010/welcome")
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
      <SectionTitle title={data.sectionTitle} id="about-me" />
      <YoutubeButton />
      <MT.MainTitle>{data.mainTitle}</MT.MainTitle>
      <MT.SubTitle>{data.subTitle}</MT.SubTitle>
      <MT.LeadTitle>{data.leadTitle}</MT.LeadTitle>
      <MT.AboutBox>
        <MT.Description>
          {data.descriptionList}
          {data.downloadLabel}
        </MT.Description>
      </MT.AboutBox>
      <DownloadButton />
      <GreenArrowDown />
    </div>
  );
};

const DownloadButton = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    try {
      const getResults = async () => {
        const result = await fetch("http://localhost:5010/welcome");
        const resultParse = await result.json();
        setData(resultParse);
      };
      getResults();
    } catch (error) {
      console.log("nu merge useEffect", error);
    }
  }, []);

  return (
    <GA.DownloadButtonWrapper>
      <GA.PillBlue>
        <Icon
          size="50%"
          icon="download"
          color="white"
          className="icon__download"
        />
        {data.downloadButtonLabel}
      </GA.PillBlue>
    </GA.DownloadButtonWrapper>
  );
};

export default AboutMe;
