import React, { useState, useEffect } from "react";
import Accordion from "./Accordion";
import { AccordionBorder1 } from "./accordion.styled";

const AccordionTop = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    try {
      const getResults = async () => {
        const result = await (
          await fetch("http://localhost:5010/experience")
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
      {data?.jobList?.map((item, i) => {
        return (
          <AccordionBorder1 key={i}>
            <Accordion item={item} />
          </AccordionBorder1>
        );
      })}
    </div>
  );
};

export default AccordionTop;
