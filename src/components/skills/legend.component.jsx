import React, { useState, useEffect } from "react";
import { LeadTitle, BoxWrapper, Mizerie } from "./skills.styled";
import Icon from "../icomoon/IcoMoon.component";
import "../../index.css";

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
        <BoxWrapper className="boxWrapper">
          {itemList.map((item, i) => {
            return (
              <Mizerie key={i} className="mizerie">
                <Icon icon={item.icon} color={item.color} size="20" />
                <p>{item.label} </p>
                <div className="cheie">
                  <p>{i + 1} </p>
                </div>
              </Mizerie>
            );
          })}
        </BoxWrapper>
      </div>
    </>
  );
};

export default Legend;
