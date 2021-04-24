import React, { useEffect, useState } from "react";
import SectionTitle from "../section-title/sectionTitle.component";
import YoutubeButton from "../youtube-button/YoutubeButton.component";
import ProudEntry from "./proud-card/ProudEntry";
import { SubTitle, BorderWrapper, DiscGreenWrapper } from "./proud-card/proud";
import Icon from "../icomoon/IcoMoon.component";

const Proud = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    try {
      const getResults = async () => {
        const result = await (
          await fetch("http://localhost:5000/proud")
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
      <SubTitle> {data.subTitle}</SubTitle>
      <BorderWrapper>
        {data?.description?.map((item) => {
          return <ProudEntry item={item} />;
        })}
      </BorderWrapper>
      <DiscGreenWrapper>
        <Icon size="50%" icon="arrow-down" color="white" />
      </DiscGreenWrapper>
    </>
  );
};

export default Proud;
