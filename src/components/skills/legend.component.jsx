import React, { useState, useEffect } from "react";
import { LeadTitle, BoxWrapper, ItemWrapper } from "./skills.styled";
import Icon from "../icomoon/IcoMoon.component";

const Legend = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    try {
      const getResults = async () => {
        const result = await (
          await fetch("http://localhost:5000/skills")
        ).json();
        setData(result);
      };
      getResults();
    } catch (error) {
      console.log("nu merge useEffect", error);
    }
  }, []);

  const { legend = {} } = data;
  const { itemList = [] } = legend;
  return (
    <>
      <LeadTitle>{legend.title}</LeadTitle>
      <div>
        <BoxWrapper>
          {itemList.map((item, i) => {
            return (
              <ItemWrapper key={i}>
                <Icon icon={item.icon} color={item.color} size="20" />
                <p>{item.label} </p>
                <div>
                  <p>{i + 1} </p>
                </div>
              </ItemWrapper>
            );
          })}
        </BoxWrapper>
      </div>
    </>
  );
};

export default Legend;
