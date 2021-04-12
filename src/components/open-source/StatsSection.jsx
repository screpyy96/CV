import React, { useState, useEffect } from "react";
import { BoxWrapper, ItemWrapper, LeadTitle } from "../skills/skills.styled";
import Icon from "../icomoon/IcoMoon.component";
const StatsSection = () => {
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
    <>
      <LeadTitle>{data?.stats?.statsName}</LeadTitle>
      <BoxWrapper>
        {data?.stats?.stat.map((item, key) => {
          return (
            <ItemWrapper key={key}>
              <Icon icon={item.statIcon} size="20" />
              <p> {item.statDescription}</p>
            </ItemWrapper>
          );
        })}
      </BoxWrapper>
    </>
  );
};

export default StatsSection;
